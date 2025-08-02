import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // <-- import here
import logo from "../Images/Headerlogo.jpeg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "User",
  });

  const navigate = useNavigate();  // <-- initialize navigate

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // LOGIN API CALL
      try {
        const response = await fetch("http://localhost:5088/api/Users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          localStorage.setItem("token", data.token);
          alert("Login Successful");
          console.log("Token:", data.token);
          navigate("/"); // <-- redirect to homepage
        } else {
          alert(data);
        }
      } catch (error) {
        console.error("Login Error:", error);
        alert("An error occurred during login.");
      }
    } else {
      // REGISTER API CALL (unchanged)
      try {
        const response = await fetch("http://localhost:5088/api/Users/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Registration Successful! Please Login.");
          setIsLogin(true);
        } else {
          const errorText = await response.text();
          alert("Registration Failed: " + errorText);
        }
      } catch (error) {
        console.error("Registration Error:", error);
        alert("An error occurred during registration.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>{isLogin ? "Login" : "Sign Up"}</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  style={styles.input}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  style={styles.input}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  style={styles.input}
                  onChange={handleChange}
                  required
                  autoComplete="street-address"
                />
                {/* Add dropdown for role */}
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  style={{ ...styles.input, cursor: "pointer" }}
                  required
                >
                  <option value="User">User</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Admin">Admin</option>
                </select>
              </>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              style={styles.input}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={styles.input}
              onChange={handleChange}
              required
              autoComplete={isLogin ? "current-password" : "new-password"}
            />
            <button type="submit" style={styles.button}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p style={styles.toggleText}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span style={styles.toggleLink} onClick={handleToggle}>
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img src={logo} alt="Dabba Express" style={styles.logo} />
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a00 0%, #ff6a00 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(255, 102, 0, 0.3)",
    width: "750px",
    maxWidth: "95%",
    padding: "40px 50px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formContainer: {
    flex: 1,
    marginRight: "30px",
    textAlign: "left",
  },
  formTitle: {
    fontSize: "36px",
    fontWeight: "900",
    color: "#ff6600",
    marginBottom: "25px",
    letterSpacing: "1.5px",
    textShadow: "1px 1px 2px rgba(255, 102, 0, 0.7)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "15px 20px",
    margin: "12px 0",
    borderRadius: "8px",
    border: "2px solid #ff6600",
    fontSize: "18px",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    fontWeight: "600",
  },
  button: {
    background:
      "linear-gradient(90deg, #ff6600 0%, #ff9933 50%, #ff6600 100%)",
    color: "#fff",
    padding: "15px",
    border: "none",
    borderRadius: "10px",
    marginTop: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "22px",
    boxShadow: "0 6px 15px rgba(255, 102, 0, 0.6)",
    transition: "background 0.4s ease",
  },
  toggleText: {
    marginTop: "25px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#444",
  },
  toggleLink: {
    color: "#ff6600",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
    textDecoration: "underline",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    maxWidth: "100%",
    maxHeight: "320px",
    objectFit: "contain",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(255, 102, 0, 0.4)",
  },
};

export default Login;
