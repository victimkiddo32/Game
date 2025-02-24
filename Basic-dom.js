console.log("Hello, I am a basic DOM manipulator.");

let heading = document.getElementById("heading");

if (heading) {
  console.log(heading);
  heading.innerText = "NSTU CSTE";
  heading.style.color = "yellow";
} else {
  console.error('Element with ID "heading" not found.');
}
