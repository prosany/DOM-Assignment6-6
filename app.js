const loadCats = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((cat) => displayCat(cat.data.news_category));
};

const displayCat = (data) => {
  const cat = document.getElementById("category");
  data.forEach((category) => {
    cat.innerHTML += `<button onclick="loadCatData('${category.category_id}')">${category.category_name}</button>`;
  });
};

loadCats();

const loadCatData = (id) => {
  const sec = document.getElementById("news");
  sec.innerHTML = "";
  fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
    .then((res) => res.json())
    .then((data) => showNews(data.data));
};

const showNews = (data) => {
  const sec = document.getElementById("news");

  data.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${item.image_url}" style="width: 300px;" /><h1>${item.title}</h1><button onclick="showSingleNews('${item._id}')">Show Details</button>`;
    sec.appendChild(div);
  });
};

const showSingleNews = (data) => {
  console.log(data);
};
