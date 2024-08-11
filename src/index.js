import mariageImage from "./assets/images/mariage.jpg";
import reunionsImage from "./assets/images/reunions.jpg";
import anniversaireImage from "./assets/images/anniversaire.jpg";

import "./style.css";
import "./style.mobile.css";

function afficherModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.textContent =
    "Notre enseigne JusPlus vous propose des jus de mariages, jus d'évenements, jus d'anniversaires, jus de réunions. Nos jus sont préparés pour être très savoureux :";
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  modal.appendChild(imageContainer);

  const images = [mariageImage, reunionsImage, anniversaireImage];

  images.forEach((src) => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = "";
    imageContainer.appendChild(image);
  });

  modal.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.textContent = "×";
  closeButton.addEventListener("click", () => {
    modal.remove();
    overlay.remove();
  });

  modal.appendChild(closeButton);
}

function creerTemplate() {
  const nouvelleTemplate = document.createElement("div");
  nouvelleTemplate.classList.add("ma-template");

  nouvelleTemplate.innerHTML = `
    <h2>Ma nouvelle template</h2>
    <p>Ce contenu a été créé dynamiquement.</p>
  `;

  const conteneurTemplates = document.getElementById("conteneurTemplates");
  conteneurTemplates.appendChild(nouvelleTemplate);
}

const sectionCible = document.getElementById("maSection");
const boutonModal = document.createElement("button");
boutonModal.textContent = "En savoir plus";
boutonModal.addEventListener("click", afficherModal);
sectionCible.appendChild(boutonModal);

// const boutonTemplate = document.createElement("button");
// boutonTemplate.textContent = "Créer une template";
// boutonTemplate.addEventListener("click", creerTemplate);
// sectionCible.appendChild(boutonTemplate);

const bouton = document.getElementById("monBouton");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://restapi.fr/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    console.log("Success:", responseData);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
});

document
  .getElementById("toggleResponsive")
  .addEventListener("click", function () {
    document.body.classList.toggle("mobile-view");
    const isMobile = document.body.classList.contains("mobile-view");
    this.textContent = isMobile
      ? "Désactiver Vue Mobile"
      : "Activer Vue Mobile";
  });

// const form = document.querySelector("form");

// async function handleFormSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch("http://localhost:3000/api/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const responseData = await response.json();
//     console.log("Success:", responseData);
//   } catch (error) {
//     console.error("There has been a problem with your fetch operation:", error);
//   }
// }

// form.addEventListener("submit", handleFormSubmit);

// server.js

// Fonction de validation d'email (exemple simple)
function isValidEmail(email) {
  // Regex plus complexe pour une validation plus rigoureuse
  return /\S+@\S+\.\S+/.test(email);
}

// ... (votre code existant)

// JavaScript pour afficher/cacher la modale

//debugger;

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongodb = require("mongodb");

// const app = express();
// const port = 5173; // Remplacez par le port de votre choix

// // Middleware pour analyser le corps des requêtes
// app.use(bodyParser.json());

// // Route pour gérer les inscriptions
// app.post("/users", (req, res) => {
//   // Récupérer les données envoyées par le formulaire
//   const { name, email, phone } = req.body;

//   // Validation des données (à améliorer)
//   if (!isValidEmail(email)) {
//     return res.status(400).json({ error: "Adresse email invalide" });
//   }

//   // Enregistrement des données dans la base de données
//   // (Exemple avec une base de données MongoDB)
//   const MongoClient = require(mongodb).MongoClient;
//   const uri = "mongodb://localhost:27017/mydatabase";
//   const client = new MongoClient(uri);

//   client
//     .connect()
//     .then(() => {
//       const db = client.db("mydatabase");
//       const collection = db.collection("users");
//       collection
//         .insertOne({ name, email, phone })
//         .then(() => {
//           console.log("Utilisateur enregistré avec succès");
//           res.json({ message: "Inscription réussie" });
//         })
//         .catch((err) => {
//           console.error(err);
//           res.status(500).json({ error: "Erreur" });
//         });
//     })
//     .catch((err) => {
//       console.error(err);
//       res
//         .status(500)
//         .json({ error: "Erreur de connexion à la base de données" });
//     });
// });

// app.listen(port, () => {
//   console.log(`Serveur en écoute sur le port ${port}`);
// });
