import axios from "axios";

const API = "http://localhost:5000/api";

export const registerUser = async (email: string, password: string) => {
  const res = await axios.post(`${API}/auth/register`, {
    email,
    password,
  });
  return res.data;
};

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(`${API}/auth/login`, {
    email,
    password,
  });
  return res.data;
};

export const getTasks = async (token: string) => {
  const res = await axios.get(`${API}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createTask = async (
  title: string,
  description: string,
  priority: string,
  token: string
) => {
  const res = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description, priority }),
  });

  return res.json();
};

export const deleteTask = async (id: string, token: string) => {
  const res = await axios.delete(`${API}/tasks/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
export const toggleTask = async (id: string, token: string) => {
  const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
export const updateTask = async (
  id: string,
  title: string,
  description: string,
  priority: string,
  token: string
) => {
  const res = await axios.put(
    `http://localhost:5000/api/tasks/${id}`,
    { title, description, priority },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};