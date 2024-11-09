async function displayPets() {
  const petcontainer = document.getElementById("petcontainer");
  petcontainer.innerHTML = "";

  try {
    const response = await fetch("./pet.json");
    const data = await response.json();

    data.forEach((pet) => {
      const petElement = document.createElement("div");
      petElement.classList.add("petbox");

      petElement.innerHTML = `
        <img src="${pet.petimg}" alt="Pet Image" class="petimage">
        <h4 class="petname">${pet.petname}</h4>
        <div class="genreage">
          <p class="genre">Genre : ${pet.genre}</p>
          <p class="separationdot">•</p>
          <p class="age">Age : ${pet.age}</p> 
        </div>
        <p class="prix">${pet.price}</p>
      `;

      petcontainer.appendChild(petElement);
    });
  } catch (error) {
    console.error("Error fetching pet data:", error);
  }
}

displayPets();
