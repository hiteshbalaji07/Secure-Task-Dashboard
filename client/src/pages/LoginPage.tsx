import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function LoginPage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "60px 50px",
          borderRadius: "20px",
          width: "500px",              // 🔥 Bigger width
          maxWidth: "95%",
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e293b",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            fontSize: "16px",
            marginBottom: "40px",
            color: "#64748b",
          }}
        >
          Login to access your SecureTask dashboard
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "20px",
              border: "1px solid #cbd5e1",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
              background: "#2563eb",
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ fontSize: "15px", marginTop: "25px" }}>
          Don’t have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563eb",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;