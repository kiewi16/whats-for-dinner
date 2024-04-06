var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]

var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

var letsCookButton = document.querySelector("#lets-cook")
var radioButtons = document.getElementsByName("looking_for")
var selectedMealText = document.querySelector(".selected-meal")
var cookpotImage = document.getElementById('cookpot-image')
var youShouldMakeText = document.querySelector(".you-should-make")

// event listeners
letsCookButton.addEventListener('click', displayRadioValue)


// functions
function getRandomIndex (array) {
    console.log(Math.floor(Math.random() * array.length))
    return Math.floor(Math.random() * array.length);
}      

function getRandomDish (dishArray) {
    var randomIndex = getRandomIndex(dishArray);
    return dishArray[randomIndex];
}

function displayRadioValue (e) {
    e.preventDefault();
        for (i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            var dishArray;
        if (radioButtons[i].value === "sides") {
                dishArray = sides;
        } else if (radioButtons[i].value === "mains") {
                dishArray = mains;
        } else if (radioButtons[i].value === "desserts") {
                dishArray = desserts;
        } else if (radioButtons[i].value === "Entire Meal") {
            var side = getRandomDish(sides);
            var main = getRandomDish (mains);
            var dessert = getRandomDish (desserts);
            cookpotImage.style.display = 'none';
            youShouldMakeText.style.display = 'block';
            selectedMealText.innerHTML = `${main} with a side of ${side} and ${dessert} for dessert!`
        }
            var randomMeal = getRandomDish(dishArray);
            selectedMealText.innerHTML = randomMeal;
            cookpotImage.style.display = 'none';
            youShouldMakeText.style.display = 'block'
        } 
    }
}