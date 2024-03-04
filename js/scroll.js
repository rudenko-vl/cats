const elementToShow = document.querySelector(".anchor");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    elementToShow.classList.add("anchor-active");
  } else {
    elementToShow.classList.remove("anchor-active");
  }
});

elementToShow.addEventListener("click", smoothScroll);

function smoothScroll(e) {
  e.preventDefault();
  document.querySelector('.wrap').scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// =================================
// let arr = []
// const pageBtn = document.getElementById('page');
// const limitBtn = document.getElementById('limit');


// let page = 1;
// let limit = 10;

// limitBtn.onclick = () => {
//   limit += 10;
//   getData()
//   console.log(arr, 'arr');
// }

// pageBtn.onclick = () => {
//   page += 1;
//   getData()
//   console.log(arr, 'arr');
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
//     arr = data
//   }).catch(error => {
//     console.log(error);
//   })
// }
// getData()