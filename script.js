// A. Hamburger menu: open/close the mobile navigation.
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        const isExpanded = navLinks.classList.contains("active");
        hamburger.setAttribute("aria-expanded", String(isExpanded));
        hamburger.textContent = isExpanded ? "✕" : "☰";
    });
}

// C1. Array: store Potato Bites menu items.
const potatoItems = ["Classic Fries", "Twister Fries", "Cheesy Loaded Fries"];
console.log("Our menu items:", potatoItems);

// C2. Loop: print each menu item in the console.
for (let i = 0; i < potatoItems.length; i++) {
    console.log("Menu item: " + potatoItems[i]);
}

// C3. Condition: display whether the store is open.
const isStoreOpen = true;
if (isStoreOpen) {
    console.log("Potato Bites is open!");
} else {
    console.log("Potato Bites is closed.");
}
