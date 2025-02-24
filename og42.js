// Selecting elements
const heading = document.getElementById("main-heading");
const image = document.getElementById("image1");
const footerText = document.getElementById("footer-text");
const button = document.getElementById("btn-click");

// Using getAttribute()
console.log(heading.getAttribute("id")); // "main-heading"
console.log(image.getAttribute("src")); // "https://via.placeholder.com/150"

// Using setAttribute()
heading.setAttribute("class", "title-header");
image.setAttribute("alt", "New Image");

// Using hasAttribute()
console.log(button.hasAttribute("disabled")); // false

// Using removeAttribute()
image.removeAttribute("alt");

// Using classList methods
footerText.classList.add("highlight");
footerText.classList.remove("highlight");
footerText.classList.toggle("highlight");

console.log(footerText.classList.contains("highlight")); // true or false

// Button event listener
button.addEventListener("click", () => {
    alert("Button clicked!");
});