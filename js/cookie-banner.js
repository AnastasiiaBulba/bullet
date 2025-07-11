// Логіка банера cookies
document.addEventListener("DOMContentLoaded", function () {
  console.log("=== COOKIE BANNER DEBUG ===");

  var banner = document.getElementById("cookie-banner");
  console.log("Banner element:", banner);

  if (!banner) {
    console.log("❌ Cookie banner not found");
    return;
  }

  console.log("✅ Cookie banner found");
  console.log("Banner display style:", banner.style.display);
  console.log("Banner classes:", banner.className);

  // Перевіряємо localStorage
  var consent = localStorage.getItem("cookieConsent");
  console.log("Current localStorage cookieConsent:", consent);

  if (consent) {
    console.log("User already accepted cookies, hiding banner");
    banner.style.display = "none";
    banner.classList.add("hidden");
  } else {
    console.log("User hasn't accepted cookies, showing banner");
    banner.style.display = "flex";
    banner.classList.remove("hidden");
  }

  // Знаходимо кнопку
  var acceptBtn = banner.querySelector(".cookie-banner__accept");
  console.log("Accept button element:", acceptBtn);

  if (acceptBtn) {
    console.log("✅ Accept button found");
    console.log("Button text:", acceptBtn.textContent);
    console.log("Button classes:", acceptBtn.className);

    // Додаємо обробник події
    acceptBtn.addEventListener("click", function (e) {
      console.log("🎯 Accept button clicked!");
      e.preventDefault();
      e.stopPropagation();

      localStorage.setItem("cookieConsent", "accepted");
      console.log("✅ Cookie consent saved");

      // Приховуємо банер двома способами
      banner.style.display = "none";
      banner.classList.add("hidden");
      console.log("✅ Banner hidden");
    });

    console.log("✅ Click event listener added");
  } else {
    console.log("❌ Accept button not found");

    // Перевіряємо всі кнопки в банері
    var allButtonsInBanner = banner.querySelectorAll("button");
    console.log("All buttons in banner:", allButtonsInBanner.length);
    allButtonsInBanner.forEach(function (btn, index) {
      console.log("Button", index, ":", btn.className, btn.textContent);
    });
  }

  console.log("=== END DEBUG ===");
});
