import express from "express";
import users from "./users.js";

// Initialize the Express app
const app = express();

//set static folder
app.use(express.static("public"));

//parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));

//parse json bodies
app.use(express.json());

// Define the port
const PORT = 3000;

// Define routes and middleware here
//get request to fetch users
app.get("/users", (req, res) => {
  res.send(`
    <h1 class="text-2xl font-bold my-4">Users</h1>
    <ul>
      ${users.map((user) => `<li>${user.name}</li>`).join("")}
    </ul>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
