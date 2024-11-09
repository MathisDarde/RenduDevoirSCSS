async function displayArticles() {
  const articlecontainer = document.getElementById("articlecontainer");
  articlecontainer.innerHTML = "";

  try {
    const response = await fetch("./petarticle.json");
    const data = await response.json();

    data.forEach((article) => {
      const articlediv = document.createElement("div");
      articlediv.classList.add("articlebox");

      articlediv.innerHTML = `
          <img src="${article.petimage}" alt="Pet Image" class="articleimage">
          <button class="tags">${article.tags}</button>
          <h4 class="title">${article.title}</h4>
          <p class="content">${article.content}</p>
        `;

      articlecontainer.appendChild(articlediv);
    });
  } catch (error) {
    console.error("Error fetching pet data:", error);
  }
}

displayArticles();
