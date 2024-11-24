<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Created</title>
    <link rel="stylesheet" href="css/orat.css">
</head>
<body>
<header class="header">
    <a href="#" class="logo">
        <img src="images/eventify.png" alt="Eventify Logo" class="logo-img">
        <span class="logo-text">eventify</span>
    </a>
</header>

<section class="success-message">
    <h3>Event created successfully!</h3>
    <p>Here are the details of all events:</p>
</section>

<section class="event-table">
    <table border="3">
        <thead>
            <tr>
                <th>ID</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Type</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            <?php
                require 'organizer.php';
                if ($lastEvent) {
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($lastEvent['id']) . "</td>";
                    echo "<td>" . htmlspecialchars($lastEvent['event_name']) . "</td>";
                    echo "<td>" . htmlspecialchars($lastEvent['event_date']) . "</td>";
                    echo "<td>" . htmlspecialchars($lastEvent['event_type']) . "</td>";
                    echo "<td>" . htmlspecialchars($lastEvent['created_at']) . "</td>";
                    echo "</tr>";
                } else {
                    echo "<tr><td colspan='5'>Aucun événement disponible.</td></tr>";
                }
            ?>
        </tbody>
    </table>
</section>

</body>
</html>
