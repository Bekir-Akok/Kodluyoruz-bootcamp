const kanyeWest = document.querySelector('.kayne');
const btn = document.querySelector('.btn');
const img =  document.querySelector('img');

const fetchKanye = () => {
    fetch("https://api.kanye.rest")
      .then((response) => response.json())
      .then((data) => (kanyeWest.innerHTML = data.quote));
  } 

btn.addEventListener("click" , () => {
  fetchKanye()
 img.classList.add("mykeyframes");
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("mykeyframes");
  }, random);
}
)




