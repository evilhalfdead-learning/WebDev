function convert() {
    const inputValue = document.getElementById("input-value").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;

    let outputValue = inputValue;

    if (fromUnit === "inches" && toUnit === "centimeters") {
        outputValue = inputValue * 2.54;
    } else if (fromUnit === "centimeters" && toUnit === "inches") {
        outputValue = inputValue / 2.54;
    } else if (fromUnit === "pounds" && toUnit === "kilograms") {
        outputValue = inputValue * 0.453592;
    } else if (fromUnit === "kilograms" && toUnit === "pounds") {
        outputValue = inputValue / 0.453592;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        outputValue = (inputValue - 32) * (5/9);
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        outputValue = (inputValue * (9/5)) + 32;
    } else {
        outputValue = "Invalid conversion";
    }

    document.getElementById("output-value").innerHTML = outputValue;
}

document.getElementById("convert-btn").addEventListener("click", convert);


function showImage() {
    const image = document.getElementById("muffinImage");
    image.style.display = "block";
    const button = document.getElementById("muffin");
    button.style.display = "none";
}

function showVegeta() {
    const image = document.getElementById("vegeta");
    image.style.display = "block";
    const button = document.getElementById("vegetaButton");
    button.style.display = "none";
}