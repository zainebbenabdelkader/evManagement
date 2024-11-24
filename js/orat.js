// Retrieve events from localStorage or initialize as an empty array
let events = JSON.parse(localStorage.getItem('events')) || [];

// Save events to localStorage
function saveEventsToLocalStorage() {
    localStorage.setItem('events', JSON.stringify(events));
}

// Function to display all events with Modify and Delete buttons
function displayAllEvents() {
    const eventListDiv = document.getElementById("event-list");
    if (eventListDiv) {
        eventListDiv.innerHTML = ""; // Clear current list
        if (events.length === 0) {
            eventListDiv.innerHTML = "<p>No events available.</p>";
        } else {
            const ul = document.createElement("ul");
            events.forEach((event, index) => {
                const li = document.createElement("li");
                li.textContent = `${event.name} - ${event.date} (${event.type})`;

                // Add Modify button
                const modifyButton = document.createElement("button");
                modifyButton.textContent = "Modify";
                modifyButton.addEventListener("click", () => modifyEvent(index));

                // Add Delete button
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => deleteEvent(index));

                li.appendChild(modifyButton);
                li.appendChild(deleteButton);
                ul.appendChild(li);
            });
            eventListDiv.appendChild(ul);
        }
    }
}

// Function to modify an event
function modifyEvent(index) {
    const event = events[index];
    const newName = prompt("Enter new event name:", event.name);
    const newType = prompt("Enter new event type:", event.type);
    const newDate = prompt("Enter new event date:", event.date);

    if (newName && newType && newDate) {
        events[index] = { name: newName, type: newType, date: newDate };
        saveEventsToLocalStorage();
        displayAllEvents();
    }
}

// Function to delete an event
function deleteEvent(index) {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
        events.splice(index, 1); // Remove the event from the array
        saveEventsToLocalStorage();
        displayAllEvents();
    }
}

// Function to add a new event (Organizer)
function addEvent(eventData) {
    events.push(eventData);
    saveEventsToLocalStorage();
    displayAllEvents();
}

// Function to search events by type (Attender)
function searchEvents(eventType) {
    return events.filter(event => event.type === eventType);
}

// Function to display search results (Attender)
function displaySearchResults(results) {
    const resultsDiv = document.getElementById("event-results");
    if (resultsDiv) {
        resultsDiv.innerHTML = ""; // Clear previous results
        if (results.length === 0) {
            resultsDiv.innerHTML = "<p>No events found for the selected type.</p>";
        } else {
            const ul = document.createElement("ul");
            results.forEach(event => {
                const li = document.createElement("li");
                li.textContent = `${event.name} - ${event.date} (${event.type})`;
                ul.appendChild(li);
            });
            resultsDiv.appendChild(ul);
        }
    }
}

