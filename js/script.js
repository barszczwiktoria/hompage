{
    const welcome = () => {
        console.log("Hello world!")
    }
    
    

    const button = document.querySelector(".section__button");
    const table = document.querySelector(".table");
    const button2 = document.querySelector(".js-scrollUp");
    const changeBackground = document.querySelector(".js-changeBackground");
    const body = document.body;
    const changeColor = document.querySelector(".js-changeColor");
    
    
    button.addEventListener("click", function handleClick() {
        button.textContent = "taka mała zmiana :) ";
    });
    
    button.addEventListener("click", () => {
        table.remove();
    });
    
    button2.addEventListener("click", () => {
        scroll(0, 0);
    });
    
   welcome ();
}
