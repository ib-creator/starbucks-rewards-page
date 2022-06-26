
// TOGGLE REWARDS SECTION 

// the buttons
const btns = document.querySelectorAll(".points-btn");


// the div article that covers the entire rewards section i.e the parent container 
const about = document.querySelector(".toggle-container");



// the individual rewards tabs with the food description and images i.e rewards tabs div's
const tabs = document.querySelectorAll(".points-tab");



// e is to access my event object


about.addEventListener("click", function (e) {

    const id = e.target.dataset.id; // this is to target the id that I have added in the html. Each button AND each div has a dataset ID which we need to retrieve using this method







    // here I have set up an IF statement to say. If i am clicking on a button with the ID, I want to display a certain div with the images, description etc


    //"if id matches"  // the id alone container all the rewards section. I.e 25 points id, 50 points, 150 points, 200points and 400 points.

    if (id) {
        // remove active from other buttons - "for each button that does not have the id that matches, remove active"
        //for each button - i.e. for every button, run this function 
        btns.forEach(function (btn) {

            btn.classList.remove("active");
            e.target.classList.add("active");

        });

        // hide the other reward tabs 
        tabs.forEach(function (tabs) {
            tabs.classList.remove("active");
        });

        // display content with the matching id 

        const element = document.getElementById(id);

        element.classList.add("active");

    }


});








// STICKY HEADER NAVBAR



window.onscroll = function () {

    myFunction()


}; //when the user scrolls the page , execute this function



// this variable is to get the header that we want to target

var header = document.getElementById("menu");


// this gets the offset poisition of the navbar

let menu = document.getElementById("menu")
var sticky = menu.offsetTop;


// adds the sticky class to the header when user reachers the scroll position. This function also removes sticky when leaving the scroll position

function myFunction() {
    if (window.pageYOffset > sticky) {
        menu.classList.add("sticky");  // if the user is scrolling, this function is ensuring that the header is sticky when scrolling. It is adding the class "sticky" which as been declared in CSS already, when the user STARTS to scroll
    } else {
        menu.classList.remove("sticky"); // this means, if the user is NOT scrolling, remove the sticky CSS declaration. 
    };
};

