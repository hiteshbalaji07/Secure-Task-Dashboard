import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/api";

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
}

function DashboardPage() {
  const { token, user, logout } = useAuth();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch Tasks
  const fetchTasks = async () => {
    if (!token) return;
    const data = await getTasks(token);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add or Update Task
  const handleAddOrUpdate = async () => {
    if (!title) return;

    if (editingId) {
      await updateTask(editingId, title, description, priority, token!);
      setEditingId(null);
    } else {
      await createTask(title, description, priority, token!);
    }

    setTitle("");
    setDescription("");
    setPriority("Low");
    fetchTasks();
  };

  // Delete Task
  const handleDelete = async (id: string) => {
    await deleteTask(id, token!);
    fetchTasks();
  };

  // Edit Task
  const handleEdit = (task: Task) => {
    setEditingId(task._id);
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "40px",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "28px", marginBottom: "5px" }}>
            Welcome, {user?.email}
          </h1>
          <p style={{ opacity: 0.7 }}>Manage your tasks efficiently</p>
        </div>

        <button
          onClick={logout}
          style={{
            padding: "10px 20px",
            background: "#dc2626",
            border: "none",
            borderRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* TASK CARD */}
      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "16px",
          maxWidth: "900px",
          margin: "auto",
          boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          {editingId ? "Update Task ✏️" : "Add New Task ➕"}
        </h2>

        {/* INPUTS */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <input
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              flex: 2,
              padding: "12px",
              borderRadius: "8px",
              border: "none",
            }}
          />

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <button
            onClick={handleAddOrUpdate}
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              border: "none",
              background: editingId ? "#f59e0b" : "#2563eb",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* TASK LIST */}
        {tasks.length === 0 ? (
          <p style={{ opacity: 0.7 }}>No tasks yet.</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              style={{
                background: "#334155",
                padding: "20px",
                borderRadius: "12px",
                marginBottom: "15px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3>{task.title}</h3>
                <p style={{ opacity: 0.8 }}>{task.description}</p>
                <small>
                  Priority:{" "}
                  <span
                    style={{
                      color:
                        task.priority === "High"
                          ? "#ef4444"
                          : task.priority === "Medium"
                          ? "#f59e0b"
                          : "#22c55e",
                      fontWeight: "bold",
                    }}
                  >
                    {task.priority}
                  </span>
                </small>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleEdit(task)}
                  style={{
                    background: "#f59e0b",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(task._id)}
                  style={{
                    background: "#dc2626",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "6px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DashboardPage;