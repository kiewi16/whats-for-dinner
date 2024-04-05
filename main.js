var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]

var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]

var desserts = ["Apple Pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Macaroons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclairs"]

var letsCookButton = document.querySelector("#lets-cook")
var radioButtons = document.getElementsByName("looking_for")
var selectedMealText = document.querySelector(".selected-meal")

// event listeners
letsCookButton.addEventListener('click', displayRadioValue)


// functions
function getRandomIndex(array) {
    console.log(Math.floor(Math.random() * array.length))
    return Math.floor(Math.random() * array.length);
}      

function getRandomDish (dishArray) {
    var randomIndex = getRandomIndex(dishArray)
    if (dishArray === "sides") {
        return sides[randomIndex]
    } else if (dishArray === "mains") {
        return mains[randomIndex]
    } else if (dishArray === "desserts") {
        return desserts[randomIndex]
    }
    // console.log("randomIndex<>>", randomIndex)
    // console.log("dishArray[randomIndex]", dishArray[randomIndex])
    // console.log("dishArray<>>", dishArray)
    // console.log("sides<>>", sides)
    return dishArray[randomIndex]
}

function displayRadioValue (e) {
    e.preventDefault()
    for (i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            var randomMeal = getRandomDish(radioButtons[i].value)
            // console.log("radioButtons[i].value", radioButtons[i].value)
            // console.log("random meal<>>", randomMeal)
            selectedMealText.innerHTML = randomMeal
        }

    }
    document.getElementById('cookpot-image').style.display = 'none';
}

