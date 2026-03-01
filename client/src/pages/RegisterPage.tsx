import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/auth/register", {
      email,
      password,
    });

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "60px 50px",
          borderRadius: "20px",
          width: "500px",
          maxWidth: "95%",
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
          textAlign: "center",
        }}
      >
        {/* ✅ Added this heading */}
        <h2
          style={{
            fontSize: "30px",
            marginBottom: "15px",
            fontWeight: "bold",
            color: "#1e293b",
          }}
        >
          Task Dashboard
        </h2>

        <p style={{ marginBottom: "40px", color: "#64748b" }}>
          Create your account to start managing tasks
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "10px",
              border: "none",
              background: "#265cff",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>

        <p style={{ marginTop: "25px" }}>
          Already have an account?{" "}
          <Link to="/" style={{ color: "#2563eb", fontWeight: "600" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;