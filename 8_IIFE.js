/*  1) Immediately Invoked Function Expressions (IIFE)
    2) global scope kae pollution sae problem hoti hae matlab ki global scope
       kae variable or declaration kae pollution sae bachnae kae liyae we ue IIFE.
*/
(function chai(){
    console.log("DB Connected");
})();

//-----------------------------------------

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('rohan');