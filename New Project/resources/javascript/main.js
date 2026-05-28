function showImage() {
    const image = document.getElementById("muffinImage");
    image.style.display = "block";
    const button = document.getElementById("muffin");
    button.style.display = "none";
    
    setTimeout(() => {
        image.style.display = "none";
        button.style.display = "block";
    }, 2500);
}

function showVegeta() {
    const image = document.getElementById("vegeta");
    image.style.display = "block";
    const button = document.getElementById("vegetaButton");
    button.style.display = "none";

    setTimeout(() => {
        image.style.display = "none";
        button.style.display = "block";
    }, 2500);
}

function showAlert() {
    alert("This is nice to know but kinda useless");
}