//This function will help me to implement  typing animation effect on a webpage using using the Typed.js library.
let typed=new Typed(".text",{
    strings:["Learner","influencer","Motivator","explorer","Developer","Coder"],  //This are the words which is going to print.
    typeSpeed:100,  //Delay in Each character to get typed.
    backSpeed:100,  //This controls the speed at which the typed text is erased (the backspacing speed).
    backDelay:1000, //This sets the delay in milliseconds before the text starts being erased after it has been fully typed. In this case, it will wait for 1 second (1000 milliseconds).
    loop:true
});
