const options = [
    {
        method:"GET"
    }
]

fetch('	https://dog.ceo//breeds/image/random',options)
.then(response => response.json())
.then(data => document.getElementById('dog').src = data.message)
.catch(error => console.error('Error:', error));

function next(){
    location.reload();
}