function checkEmail() {
    let email = document.getElementById("email").value;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "72d506ec3emsh648f8257cb40861p198079jsn734150a8d603",
            "X-RapidAPI-Host": "validect-email-verification-v1.p.rapidapi.com",
        },
    };

    fetch(
        `https://validect-email-verification-v1.p.rapidapi.com/v1/verify?email=${email}`,
        options
    )
        .then((response) => response.json())
        .then((data) => {
            const resultImage = document.getElementById("resultImage");

            if (data.status === "valid") {
                resultImage.src = "check.png"; // Replace with your valid image URL
            } else if (data.status === "invalid") {
                resultImage.src = "x-mark.png"; // Replace with your invalid image URL
            } else {
                // Handle undefined status (add your logic or set a default image)
                resultImage.src = "minus.png"; // Replace with your default image URL or handle it accordingly
            }
        });
}
