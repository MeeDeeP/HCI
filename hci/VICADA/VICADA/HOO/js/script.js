const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "72d506ec3emsh648f8257cb40861p198079jsn734150a8d603",
    "X-RapidAPI-Host": "random-cats.p.rapidapi.com",
  },
};

fetch("https://random-cats.p.rapidapi.com/", option)
  .then((response) => response.json())
  .then((data) => (document.getElementById("cat").src = data.message));

function nextCat() {
  location.reload();
}
