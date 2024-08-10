import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"; // Importer cors après express
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // Initialiser app avant de l'utiliser
const port = process.env.PORT || 3000;

// Utilisation de cors après l'initialisation de app
app.use(cors());

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/users", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Route pour obtenir tous les utilisateurs
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find(); // Trouver tous les utilisateurs
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while retrieving users" });
  }
});

// Définir le schéma et le modèle
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const User = mongoose.model("User", userSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "src"))); // Servir des fichiers statiques depuis le répertoire 'src'

// Route pour la racine
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html")); // Chemin vers le fichier HTML principal
});

// Route pour gérer les requêtes POST
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
