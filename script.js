document.title = "Web Screen";
function loadLayout() {
  fetch("../components/layout.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // pega o header
      const header = doc.querySelector("#header").innerHTML;

      // pega o footer
      const footer = doc.querySelector("#footer").innerHTML;

      // injeta na página
      document.getElementById("header-container").innerHTML = header;
      document.getElementById("footer-container").innerHTML = footer;
    })
    .catch((err) => console.error("Erro ao carregar layout:", err));
}

loadLayout();
