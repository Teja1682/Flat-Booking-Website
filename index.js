let login = document.getElementById("login");
//let log = document.getElementById("log");
let Name = document.getElementById("name");
let save = document.getElementById("save");
let user = document.getElementById("user");
let book = document.getElementById("book");
let hi = document.getElementById("hi");
let conform = document.getElementById("confirm");
let otp = document.getElementById("enterOTP");
let bokkaa = document.getElementById("bokka");
let right = document.getElementById("tick");
let time = document.getElementById("timer");
console.log("l" + login.textContent + "k");
console.log(login.textContent);
console.log(user.value);
/*if (login.textContent == "Sign In") {

    console.log("yessss");
    book.textContent = "Sign in to book";
} else {
    console.log("nooo");
    book.textContent = "Book Flat";
}*/
let q = Math.floor(Math.random() * 10000);

function sendMail(params) {
    if (user.value === "" || mail.value === "") {
        /*login.textContent = "Sign In";
        book.textContent = "Sign in to book";*/
        alert("Invalid Sign In");
    } else {
        $("#example").modal('toggle')
        var tempParams = {
            to_name: document.getElementById("user").value,
            message: q,
            mail_id: document.getElementById("mail").value,
        };
        emailjs.send('service_uc2fzbk', 'template_lhb91fe', tempParams)
            .then(alert('Message sent'))

        let count = 100;
        let inter = setInterval(function() {
            count = count - 1;
            time.textContent = count;
            if (count == 0) {
                time.textContent = "Time Limit Exceeded";
            }

        }, 1000)


    }


}
console.log(q);
console.log(q)
conform.onclick = function() {

    console.log(user.value);
    if (user.value === "" || mail.value === "") {
        /*login.textContent = "Sign In";
        book.textContent = "Sign in to book";*/
        alert("Invalid Sign In");


    } else if (otp.value == q) {
        console.log(otp.value);
        console.log(q);
        book.textContent = "Book Flat"
        Name.value = user.value;
        console.log("OTP detected");
        login.textContent = "Hi  " + user.value;
        hi.textContent = "Hi " + user.value + " ,here are the available options for you...";
        login.backgroundColor = "transparent";
        name.textContent = user.value;

        $('#exampleLabel').modal('hide');
        $('#example').modal('hide');
        $('#confirm').modal('hide');
        $('#bokka').modal('hide');
        $('#exampleModalLabel').modal('hide');
        $('#exampleModal').modal('hide');

    } else {
        right.classList.add("far", "fa-times-circle");
        console.log("chukka ostadi");
    }

}


book.onclick = function() {
    if (login.textContent === "Sign In" || login.textContent == "") {
        alert("Please Sign In to continue");
    } else {
        display('section2');
    }

}


save.onclick = function() {
    let x = login.textContent;
    let y = book.textContent;
    localStorage.setItem("book", y);
    localStorage.setItem("sing", x);

    let stored = localStorage.getItem("sing");
    let booked = localStorage.getItem("book");
    console.log("rty");
    console.log(stored);
    console.log(store);
    book.textContent = booked;
    login.textContent = stored;
    hi.textContent = "Hi" + stored;




}


if (login.textContent != "Sign In") {
    let stored = localStorage.getItem("sing");
    login.textContent = stored;
    let named = localStorage.getItem
    let booked = localStorage.getItem("book");
    book.textContent = booked;
    hi.textContent = "Hi" + user.value + ", here are the available options for you....";
} else {
    book.textContent = "Sign in to book";
}