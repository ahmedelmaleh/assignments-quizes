let theData = document.getElementById("theData");
let searchBox = document.getElementById("searchBox");
let submittButtun;
let nameInputClicked = false;
let emailInputClicked = false;
let phoneInputClicked = false;
let ageInputClicked = false;
let passwordInputClicked = false;
let repasswordInputClicked = false;

$(document).ready(() => {
    searchByName("").then(() => {
        $(".loading").fadeOut(700)
        $("body").css("overflow", "visible")

    })
})
function openSideMenu() {
    $(".side-menu").animate({
        left: 0
    }, 700)


    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");


    for (let i = 0; i < 5; i++) {
        $(".links li").eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}
function closeSideMenu() {
    let menuWidth = $(".side-menu .side-tab").outerWidth()
    $(".side-menu").animate({
        left: -menuWidth
    }, 700)

    $(".open-close-icon").addClass("fa-align-justify");
    $(".open-close-icon").removeClass("fa-x");


    $(".links li").animate({
        top: 600
    }, 700)
}
closeSideMenu()
$(".side-menu i.open-close-icon").click(() => {
    if ($(".side-menu").css("left") == "0px") {
        closeSideMenu()
    } else {
        openSideMenu()
    }
})
function displayMeals(array) {
    let cartoona = "";

    for (let i = 0; i < array.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${array[i].idMeal}')" class="meal position-relative rounded-2 overflow-hidden  cursor-pointer">
                    <img class="w-100" src="${array[i].strMealThumb}">
                    <div class="layer position-absolute d-flex align-items-center text-black p-3">
                        <h3>${array[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }

    theData.innerHTML = cartoona
}
async function getCategories() {
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)
    searchBox.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()

    displayCategories(response.categories)
    $(".inner-loading").fadeOut(400)

}
function displayCategories(array) {
    let cartoona = "";

    for (let i = 0; i < array.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${array[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${array[i].strCategoryThumb}">
                    <div class="layer position-absolute text-center text-black p-3">
                        <h3>${array[i].strCategory}</h3>
                        <p>${array[i].strCategoryDescription.split(" ").slice(0,25).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    theData.innerHTML = cartoona
}
async function getArea() {
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    searchBox.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    respone = await respone.json()
    console.log(respone.meals);

    displayArea(respone.meals)
    $(".inner-loading").fadeOut(400)

}
function displayArea(array) {
    let cartoona = "";

    for (let i = 0; i < array.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="getAreaMeals('${array[i].strArea}')" class="rounded-4 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-5x"></i>
                        <h3>${array[i].strArea}</h3>
                </div>
        </div>
        `
    }

    theData.innerHTML = cartoona
}
async function getIngredients() {
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    searchBox.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    respone = await respone.json()
    console.log(respone.meals);

    displayIngredients(respone.meals.slice(0, 25))
    $(".inner-loading").fadeOut(400)

}
function displayIngredients(array) {
    let cartoona = "";

    for (let i = 0; i < array.length; i++) {
        cartoona += `
        <div class="col-md-3">
                <div onclick="getIngredientsMeals('${array[i].strIngredient}')" class="rounded-5 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-5x"></i>
                        <h3>${array[i].strIngredient}</h3>
                        <p>${array[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
        </div>
        `
    }

    theData.innerHTML = cartoona
}
async function getCategoryMeals(category) {
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 25))
    $(".inner-loading").fadeOut(400)

}
async function getAreaMeals(area) {
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 25))
    $(".inner-loading").fadeOut(400)

}
async function getIngredientsMeals(ingredients) {
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    response = await response.json()


    displayMeals(response.meals.slice(0, 25))
    $(".inner-loading").fadeOut(400)

}
async function getMealDetails(mealID) {
    closeSideMenu()
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    searchBox.innerHTML = "";
    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    respone = await respone.json();

    displayMealDetails(respone.meals[0])
    $(".inner-loading").fadeOut(400)

}
function displayMealDetails(meal) {
    
    searchBox.innerHTML = "";


    let ingredients = ``

    for (let i = 1; i <= 25; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients += `<li class="alert alert-info m-2 p-1">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }

    let tags = meal.strTags?.split(",")
    if (!tags) tags = []

    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }



    let cartoona = `
    <div class="col-md-4">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-5 flex-wrap">
                    ${ingredients}
                </ul>

                <h3>Tags : </h3>
                <ul class="list-unstyled d-flex g-5 flex-wrap">
                    ${tagsStr}
                </ul>

                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`

    theData.innerHTML = cartoona
}
function showSearchInputs() {
    searchBox.innerHTML = `
    <div class="row py-3 ">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control  " type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFirstLetter(this.value)" maxlength="1" class="form-control " type="text" placeholder="Search By First Letter">
        </div>
    </div>`

    theData.innerHTML = ""
}
async function searchByName(value) {
    closeSideMenu()
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".inner-loading").fadeOut(400)

}
async function searchByFirstLetter(value) {
    closeSideMenu()
    theData.innerHTML = ""
    $(".inner-loading").fadeIn(400)

    value == "" ? value = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".inner-loading").fadeOut(400)

}
function showContacts() {
    theData.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-5">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers are not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *example@gmail.com
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter a valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter a valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submittButtun" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submittButtun = document.getElementById("submittButtun")
    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputClicked = true
    })
    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputClicked = true
    })
    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputClicked = true
    })
    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputClicked = true
    })
    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputClicked = true
    })
    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputClicked = true
    })
}
function inputsValidation() {
    if (nameInputClicked) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputClicked) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputClicked) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputClicked) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputClicked) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputClicked) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submittButtun.removeAttribute("disabled")
    } else {
        submittButtun.setAttribute("disabled", true)
    }
}
function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}
function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}
function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}
function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}
function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}
function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}