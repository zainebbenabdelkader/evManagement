<?php
// Connexion à la base de données via PDO
try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=localhost;dbname=eventify", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer le dernier événement
    $stmt = $pdo->query("SELECT * FROM organizer ORDER BY id DESC LIMIT 1");
    $lastEvent = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    die("Erreur : " . $e->getMessage());
}

// Vérifier si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $eventName = isset($_POST['eventName']) ? $_POST['eventName'] : null;
    $eventDate = isset($_POST['eventDate']) ? $_POST['eventDate'] : null;
    $eventType = isset($_POST['eventType']) ? $_POST['eventType'] : null;

    // Vérifier les champs requis
    if (empty($eventName) || empty($eventDate) || empty($eventType)) {
        $error = "Tous les champs sont obligatoires.";
    } else {
        // Insérer les données dans la table organizer
        $sql = "INSERT INTO organizer(event_name, event_date, event_type) VALUES (:eventName, :eventDate, :eventType)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':eventName', $eventName);
        $stmt->bindParam(':eventDate', $eventDate);
        $stmt->bindParam(':eventType', $eventType);

        if ($stmt->execute()) {
            // Rediriger vers la page de succès
            header("Location: success_organizer.php");
            exit();
        } else {
            $error = "Erreur lors de la création de l'événement.";
        }
    }
}

// Récupérer tous les événements pour l'affichage
$events = [];
try {
    $stmt = $pdo->query("SELECT * FROM organizer ORDER BY created_at DESC");
    $events = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    $error = "Erreur lors de la récupération des événements : " . $e->getMessage();
}
?>

