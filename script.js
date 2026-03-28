const enquiryForm = document.querySelector("#enquiry-form");
const slides = Array.from(document.querySelectorAll(".slide"));
const sliderDots = Array.from(document.querySelectorAll(".slider-dot"));
const sliderButtons = Array.from(document.querySelectorAll("[data-slide]"));

if (slides.length) {
  let currentSlide = 0;
  let sliderTimer;

  const renderSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === index);
    });

    sliderDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });

    currentSlide = index;
  };

  const goToSlide = (nextIndex) => {
    const normalizedIndex = (nextIndex + slides.length) % slides.length;
    renderSlide(normalizedIndex);
  };

  const restartSlider = () => {
    window.clearInterval(sliderTimer);
    sliderTimer = window.setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 4500);
  };

  sliderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.slide === "next" ? 1 : -1;
      goToSlide(currentSlide + direction);
      restartSlider();
    });
  });

  sliderDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(Number(dot.dataset.index));
      restartSlider();
    });
  });

  renderSlide(0);
  restartSlider();
}

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
