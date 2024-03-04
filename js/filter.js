import { galleryItems } from "./gallery-items.js";

const listGallery = document.querySelector("ul.gallery");
const search = document.querySelector(".search");
const icon = document.querySelector(".icon");
const inputRef = document.getElementById("filterInput");

icon.addEventListener("click", () => {
  search.classList.toggle("active");
});

export function filterById(arr, word) {
  let filteredData = arr.filter(
    (item) =>
      item.name.toLowerCase().includes(word.toLowerCase()) ||
      item.date.toLowerCase().includes(word.toLowerCase())
  );
  return filteredData;
}

inputRef.addEventListener("input", (e) => {
  listGallery.innerHTML = "";
  const inputValInv = e.target.value;
  if (inputValInv) {
    clearBtn.disabled = false;
  }
  const filteredData = filterById(galleryItems, inputValInv);
  if (filteredData.length === 0) {
    listGallery.insertAdjacentHTML(
      "beforeend",
      `<li class="default_text">Ничего не найдено 🤷‍♂️ Попробуйте еще!
      <img src="../img/funny_cat.jpg" alt="cat"/>
      </li>`
    );
  }
  listGallery.insertAdjacentHTML(
    "beforeend",
    createGalleryItemsMarkup(filteredData)
  );
  let gallery = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
});

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, name, date, icon, id }) => {
      return `<li class="item-card">
              <div class="gallery__item link" href="${original}">
                <img src="${preview}" alt="${name}" width="360" height="460" class="preview"/>
                </div>
                <div class="card-content">
                <p class="type-of-card"><span class="card-text">Имя: </span>${name}<span class="animal-icon"><i class="fa-solid fa-${icon}"></i></span></p>
                <p class="card-name"><span class="card-text">Дата: </span>${date}</p>
                <p class="card-name"><span class="card-text">ID: </span>${id}</p>
                </div>
                </li>`;
    })
    .join("");
}

listGallery.insertAdjacentHTML(
  "beforeend",
  createGalleryItemsMarkup(galleryItems)
);

let gallery = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

const clearBtn = document.querySelector(".clear-btn");
clearBtn.disabled = true;
clearBtn.addEventListener("click", () => {
  location.reload();
});
