const wordOne = () => {
    switch (Math.floor(Math.random() * 10)) {
        case 0: return "Grilled";
        case 1: return "Roasted";
        case 2: return "Fried";
        case 3: return "Steamed";
        case 4: return "Baked";
        case 5: return "Smoked";
        case 6: return "Glazed";
        case 7: return "Sautéed";
        case 8: return "Marinated";
        case 9: return "Braised";
    }};

const wordTwo = () => {
    switch (Math.floor(Math.random() * 10)) {
        case 0: return "Chicken";
        case 1: return "Beef";
        case 2: return "Pork";
        case 3: return "Fish";
        case 4: return "Tofu";
        case 5: return "Lamb";
        case 6: return "Shrimp";
        case 7: return "Turkey";
        case 8: return "Duck";
        case 9: return "Vegetables";
    }};

const wordThree = () => {
    switch (Math.floor(Math.random() * 10)) {
        case 0: return "with Garlic Sauce";
        case 1: return "in Teriyaki Glaze";
        case 2: return "with Lemon Butter";
        case 3: return "in Spicy Marinade";
        case 4: return "with Honey Mustard";
        case 5: return "in Barbecue Sauce";
        case 6: return "with Herb Crust";
        case 7: return "in Coconut Curry";
        case 8: return "with Balsamic Reduction";
        case 9: return "in Sweet and Sour Sauce";
    }};

const dinneridea = () => {
    return `Hungry? Enjoy ${wordOne()} ${wordTwo()} ${wordThree()}`;
};

console.log(dinneridea());