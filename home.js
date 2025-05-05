document.addEventListener("DOMContentLoaded", () => {
  fetch("https://zenquotes.io/api/random")
    .then((response) => response.json())
    .then((data) => {
      const quote = data[0].q;
      const author = data[0].a;
      document.getElementById("quote-text").innerHTML = `<p>${quote}</p><cite>— ${author}</cite>`;
    })
    .catch((error) => {
      document.getElementById("quote-text").innerHTML = "<p>Could not load quote.</p>";
      console.error("Error fetching quote:", error);
    });
});
