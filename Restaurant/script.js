function myFun(){
    let searchVal = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");


    let front = document.querySelector(".main");

    for(let i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];

        if(td){
            let text = td.innerText;

            if(text.toLocaleUpperCase().indexOf(searchVal) > -1){
                tr[i].style.display="";
                front.style.display="none";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }

    if(searchVal == ""){
        front.style.display="flex";
    }
    console.log(searchVal);

  
}

function Login(){
    let login = document.querySelector(".login");
    let nav = document.querySelector(".nav");

    if (login.style.display === "block") {
        login.style.display = "none";
    } else {
        login.style.display = "block";
        nav.style.display = "none";
    }
}

function nav(){
    let nav = document.querySelector(".nav");
    let login = document.querySelector(".login");

    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
        login.style.display = "none";
    }
}


// slide bar

let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left = `${index * 100}%`
})

function next(){
    count++;
    if(count == slide.length){
        count = 0;
    }
    bar();
}

function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar();
}

function bar(){
    slide.forEach(function(customer) {
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}

// add to card

// Initialize quantity variable
let quantity = 0;

// Function to handle click on "Add to Cart" button
function addToCart() {
    // Increment quantity
    quantity++;
    // Update quantity display in cart icon
    document.querySelector('.shopping .quantity').innerText = quantity;
}

// Attach click event listener to all "Add to Cart" buttons
document.querySelectorAll('.right').forEach(button => {
    button.addEventListener('click', addToCart);
});
