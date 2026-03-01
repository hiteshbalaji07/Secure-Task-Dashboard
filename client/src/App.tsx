import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const { token } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" /> : <LoginPage />}
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={token ? <Navigate to="/dashboard" /> : <RegisterPage />}
        />

        {/* Dashboard (Protected Route) */}
        <Route
          path="/dashboard"
          element={token ? <DashboardPage /> : <Navigate to="/" />}
        />

        {/* Fallback Route */}
        <Route
          path="*"
          element={<Navigate to={token ? "/dashboard" : "/"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;