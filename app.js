const botResponses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a great day!",
    "help": "I'm here to assist you. Ask me anything!",
    "what are the best places to visit for a first-time traveler?": "The best places depend on your interests, but popular destinations for first-time travelers include Paris, London, Tokyo, Bali, New York, and Rome. These places offer a balance of history, culture, and amenities, making them easier to navigate for beginners.",
    "what’s the best time of year to visit": "The best time to visit a destination depends on the weather, crowds, and activities you want to do. For example, Europe is ideal in spring (April-June) or fall (September-October) to avoid crowds and enjoy mild weather.",
    "how far in advance should I book a tour?":"It's best to book 3-6 months in advance, especially for popular destinations or during peak travel seasons. Early bookings give you better availability and prices.",
    "what are the top must-see destinations in country":"For each destination, you can look at iconic landmarks, cultural highlights, and unique experiences. For example, in Italy: the Colosseum in Rome, the canals of Venice, and the art of Florence are must-see.",
    "how much does a typical tour package cost?": "Tour packages vary widely in price based on destination, length, and inclusions. A basic 7-day tour might cost between $1,000 to $3,000, while luxury tours can go much higher.",
    "is destination safe for tourists?":"Most popular destinations are safe for tourists, but it's wise to check travel advisories issued by your government and follow local safety guidelines. Research the safest neighborhoods and avoid risky areas.",
    "what’s the best way to get around in destination?":"This varies by location. In many cities, public transportation (buses, trains) is efficient, while in rural areas, renting a car may be best. Ride-sharing apps and taxis are also common.",
    "is it better to use public transport or rent a car when traveling?":"Public transport is cheaper and more eco-friendly but may be less convenient in remote areas. Renting a car offers flexibility, especially in destinations with limited public transport.",
    "what are the best hotels or accommodations in destination?":"Research highly rated hotels on platforms like TripAdvisor or Booking.com. For budget options, look at hostels or vacation rentals (Airbnb). For luxury stays, boutique or 5-star hotels offer premium experiences.",
    "what apps or websites are essential for travelers?":"Google Maps for navigation, TripAdvisor for reviews, XE for currency conversion, and Airbnb or Booking.com for accommodation. Language apps like Google Translate or Duolingo can also be useful.",
    "default": "Sorry, I don't understand that. Try asking something else!"
};
function addMessageToChat(content, sender) {
    const chatBox = document.getElementById("chat-box");

    // Create a message container
    const messageContainer = document.createElement("div");
    messageContainer.classList.add("message");

    if (sender === "user") {
        messageContainer.classList.add("user-message");
    } else {
        messageContainer.classList.add("bot-message");
    }
    const messageBubble = document.createElement("p");
    messageBubble.textContent = content;

    // Append message to the container
    messageContainer.appendChild(messageBubble);
    chatBox.appendChild(messageContainer);

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
// Function to handle user input
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    
    if (userInput === "") return; // If input is empty, do nothing

    // Add user's message to the chat
    addMessageToChat(userInput, "user");

    // Process chatbot response
    getBotResponse(userInput);

    // Clear input field
    document.getElementById("user-input").value = "";
}

// Function to get a bot response
function getBotResponse(userInput) {
    // Convert the user's message to lowercase and find a matching response
    const userMessage = userInput.toLowerCase();
    const botReply = botResponses[userMessage] || botResponses["default"];

    // Add bot's response to the chat
    setTimeout(() => {
        addMessageToChat(botReply, "bot");
    }, 500); // Delay response to simulate typing
}