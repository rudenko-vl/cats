import { galleryItems } from "./gallery-items.js";

// let galleryItems = []
// const pageBtn = document.getElementById('page');
// const limitBtn = document.getElementById('limit');


// let page = 1;
// let limit = 10;

// limitBtn.onclick = () => {
//   limit += 10;
//   getData()
//   console.log(galleryItems.length, 'arr');
// }

// pageBtn.onclick = () => {
//   page += 1;
//   getData()
//   console.log(galleryItems, 'arr');
// }

// const getData = () => {
//   const url = new URL(`https://6421563734d6cd4ebd707db9.mockapi.io/todos?page=${page}&limit=${limit}`);
//   fetch(url, {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
//   }).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//   }).then(data => {
//     galleryItems = data
//   }).catch(error => {
//     console.log(error);
//   })
// }
// getData()

// =========================

const listGallery = document.querySelector("ul.gallery");
const search = document.querySelector(".search");
const icon = document.querySelector(".icon");
const inputRef = document.getElementById("filterInput");
const clearBtn = document.querySelector(".clear-btn");
clearBtn.disabled = true;

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

clearBtn.addEventListener("click", () => {
  location.reload()
});

inputRef.addEventListener("input", (e) => {
  listGallery.innerHTML = "";
  const inputValInv = e.target.value;
  if (inputValInv) {
    clearBtn.disabled = false;
  } else {
    clearBtn.disabled = true;
  }
  const filteredData = filterById(galleryItems, inputValInv);
  if (filteredData.length === 0) {
    listGallery.insertAdjacentHTML(
      "beforeend",
      `<li class="default_text">Ничего не найдено 🤷‍♂️ Попробуйте еще!
      <img src="./img/funny_cat.jpg" alt="cat"/>
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
