// ======= GIG FORM =======
// Only works on "Create a Gig" page
const gigForm = document.getElementById("gigForm");
const gigsList = document.getElementById("gigsList");

if (gigForm && gigsList) {
  gigForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const title = document.getElementById("gigTitle").value;
    const price = document.getElementById("gigPrice").value;
    const desc = document.getElementById("gigDesc").value;
    const file = document.getElementById("gigImage").files[0];

    // Simple validation
    if (!title || !price || !desc || !file) {
      alert("Please fill in all fields.");
      return;
    }

    // Create gig element
    const gigDiv = document.createElement("div");
    gigDiv.classList.add("gig");
    gigDiv.innerHTML = `<span>🌟 ${title}</span><span>$${price}</span>`;

    // Add to gigs list
    gigsList.appendChild(gigDiv);

    // Reset form
    gigForm.reset();

    alert("Gig posted successfully!");
  });
}

// ======= SIMULATED CHAT =======
const chatBox = document.getElementById("chatBox");
const chatMessageInput = document.getElementById("chatMessage");
const recipientIdInput = document.getElementById("recipientId");

function sendMessage() {
  const message = chatMessageInput.value.trim();
  const recipient = recipientIdInput.value.trim();

  if (!message || !recipient) {
    alert("Enter recipient ID and message.");
    return;
  }

  const msgDiv = document.createElement("div");
  msgDiv.textContent = `To ${recipient}: ${message}`;
  msgDiv.style.padding = "6px";
  msgDiv.style.marginBottom = "5px";
  msgDiv.style.backgroundColor = "#e1f5e1";
  msgDiv.style.borderRadius = "5px";

  chatBox.appendChild(msgDiv);
  chatMessageInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight; // scroll to bottom
}
