const enquiryForm = document.querySelector("#enquiry-form");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const product = document.querySelector("#product").value;
    const message = document.querySelector("#message").value.trim();

    const enquiryText = [
      "Hello Harika Traders,",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Product: ${product}`,
      `Requirement: ${message}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/919842941800?text=${encodeURIComponent(enquiryText)}`;
    window.open(whatsappUrl, "_blank", "noopener");
  });
}
