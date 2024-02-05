function checkEmail() {
  const email = document.getElementById("email").value;
  const apiUrl = "https://validect-email-verification-v1.p.rapidapi.com/v1/verify";
  const apiKey = "5f24c54871msh8d9bdb19b4243c5p12bf68jsn31ad0e9fe726"; 

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "validect-email-verification-v1.p.rapidapi.com"
    },
    body: JSON.stringify({ email: email })
  };

  fetch(apiUrl, options)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("emailResult").textContent = data.status;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("emailResult").textContent = "Error verifying email";
    });
}

function searchFlower() {
  const searchTerm = document.getElementById("searchTerm").value;
  fetch(`https://source.unsplash.com/featured/?${searchTerm}`)
    .then((response) => response.blob())
    .then((blob) => {
      const imgUrl = URL.createObjectURL(blob);
      document.getElementById("place").src = imgUrl;
    })
  .catch((error) => {
    console.error("Error fetching image:", error);
  });
}

function nextPlace() {
  searchFlower();
}