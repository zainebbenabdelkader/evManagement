<?php

$servername = "localhost";
$username = "root"; 
$password = "";    
$dbname = "eventify";  


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $username = htmlspecialchars($_POST['username']);
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);  
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
       
        $user = $result->fetch_assoc();
        
        if (password_verify($password, $user['password'])) {
           
            echo "Connexion réussie ! Bienvenue, " . htmlspecialchars($user['username']);
        } else {
            
            echo "Mot de passe incorrect.";
        }
    } else {
        
        echo "Nom d'utilisateur introuvable.";
    }

    $stmt->close();
}

$conn->close();
?>
