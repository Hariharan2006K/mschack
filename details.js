const params = new URLSearchParams(window.location.search);
const serviceId = params.get("id");

if (!serviceId) {
  document.getElementById("details-container").innerHTML = "<p>Service not found.</p>";
} else {
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    document.getElementById("details-container").innerHTML = "<p>Service not found.</p>";
  } else {
    document.getElementById("service-image").src = service.image;
    document.getElementById("service-title").innerText = service.title;
    document.getElementById("service-description").innerText = service.description;
    document.getElementById("service-rating").innerText = service.rating;
    document.getElementById("service-reviews").innerText = service.reviews;
    document.getElementById("service-level").innerText = service.level;
    document.getElementById("service-price").innerText = service.price;
    document.getElementById("service-delivery").innerText = service.deliveryTime;
  }
}

// Simulate Payment Gateway
function showPaymentGateway() {
  alert("Redirecting to payment gateway...");
}
