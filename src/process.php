<?php
// Récupérer les données envoyées par le formulaire
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// Validation des données (à améliorer)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  echo 'Adresse email invalide';
  exit;
}

// Envoi de l'email (à remplacer par votre fonction d'envoi d'email)
// ...

// Enregistrement dans la base de données (optionnel)
// ...

echo 'Votre inscription a été enregistrée.';

