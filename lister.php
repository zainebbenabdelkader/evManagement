<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=eventify", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $res = $pdo->query("SELECT * FROM events");
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}


echo '
<section class="event-table">
    <h3>Liste des événements</h3>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom de l\'événement</th>
                <th>Date</th>
                <th>Type</th>
                <th>Créé le</th>
            </tr>
        </thead>
        <tbody>
';

// Boucle pour afficher les événements
while ($event = $res->fetch(PDO::FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>" . htmlspecialchars($event['id']) . "</td>";
    echo "<td>" . htmlspecialchars($event['event_name']) . "</td>";
    echo "<td>" . htmlspecialchars($event['event_date']) . "</td>";
    echo "<td>" . htmlspecialchars($event['event_type']) . "</td>";
    echo "<td>" . htmlspecialchars($event['created_at']) . "</td>";
    echo "</tr>";
}

echo '
        </tbody>
    </table>
</section>
';
?>
