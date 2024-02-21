fetch("../picData.json")
  .then((response) => response.json())
  .then((picData) => {
    console.log(picData);
    picData.forEach((singleProduct) => {
      // div
      let productDiv = document.createElement("div");

      // Image
      let image = document.createElement("img");
      image.setAttribute("src", singleProduct.download_url);
      productDiv.appendChild(image);

      // Author
      let author = document.createElement("p");
      author.textContent = singleProduct.author;
      productDiv.appendChild(author);

      // Button
      let button = document.createElement("button");
      button.textContent = "See more";
      productDiv.appendChild(button);

      // Eventlistener für Button
      button.addEventListener("click", () => {
        window.open(`${singleProduct.url}`);
      });

      // Fügt das Div mit all seinen Elementen ins html in die Section "wholeproduct"
      document.querySelector(".wholeproduct").appendChild(productDiv);
    });
  })
  .catch((error) => console.log("Fehler beim Laden der main json", error));
