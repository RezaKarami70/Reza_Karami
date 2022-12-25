function changeColor() {
    var color = document.getElementById("fullbody")
    color.style.backgroundColor = "pink"

}

function showHideText() {

    if (document.getElementById('p1').style.display == 'none') {
        document.getElementById('p1').style.display = ''
    }
    else {
        document.getElementById('p1').style.display = 'none'
    }
}

function increaseing() {
    var count = eval(document.getElementById('p2').innerHTML)
    count = count + 1
    document.getElementById('p2').innerHTML = count
}

function decreaseing() {
    var count = eval(document.getElementById('p2').innerHTML)
    count = count - 1
    document.getElementById('p2').innerHTML = count
}

function prime() {

    var num = 0;
    while (num < 2) {
        try {
            num = eval(prompt("Enter the number"))
            if (num < 2) {
                alert("invalid input")
            }
        } catch (error) {
            alert("invalid input")
        }
    }


    var counter = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            counter++
        }
    }
    if (counter == 0) {
        if (num > 1) {
            alert(num + " is prime")
        }
        else {
            alert(num + " is not prime")
        }

    }
    if (counter != 0) {
        alert(num + " is not prime")
    }

}

function largest() {

    var num1 = eval(prompt("Enter 1th number"))
    var num2 = eval(prompt("Enter 2th number"))
    var num3 = eval(prompt("Enter 3th number"))
    var max = eval(Math.max(num1, num2, num3))
    alert("the maximum number is " + max)

}

function remove() {
    var input = prompt("Please enter the item or ! to exit")
    var array = new Array
    while (input != "!") {

        array.push(input)
        input = prompt("Please enter the item or ! to exit")
    }

    alert(array.join(" , "))


    var remove = prompt("Please enter the item to remove")
    var newArray = new Array
    newArray = removeItemFromArray(array, remove)
    alert(newArray.join(" , "))



}

function removeItemFromArray(array, n) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== n) {
            newArray.push(array[i]);
        }
    } return newArray;
}

function remove_duplicate() {
    var input = prompt("Please enter the item or ! to exit")
    var array = new Array
    while (input != "!") {
        array.push(input)
        input = prompt("Please enter the item or ! to exit")
    }

    alert(array.join(" , "))
    newArray = removedubFromArray(array)
    alert("New array is " + newArray.join(" , "))
}

function removedubFromArray(array) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        var counter = 0;
        for (let j = 0; j < newArray.length; j++) {
            if (array[i] === newArray[j]) {
                counter++;
            }
        }
        if (counter === 0) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function validate() {

    var email = document.forms.signupForm.email.value;
    var password = document.forms.signupForm.pass.value;
    var check = "true";
    if (email == null || email == "") {
        alert("Email can't be blank");
    }
    if (ValidateEmail(email) === false) {
        alert("you have enter invalid Email address");
    }
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    }
    else{
        alert("you have signed up");
    }
}

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    else {
        return (false)
    }
}


