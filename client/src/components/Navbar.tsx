import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { token, logout } = useAuth();

  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>SecureTask</h2>
      {token && (
        <button onClick={logout} style={styles.logout}>
          Logout
        </button>
      )}
    </div>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "22px",
    letterSpacing: "1px",
  },
  logout: {
    padding: "8px 16px",
    background: "#3b82f6",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;