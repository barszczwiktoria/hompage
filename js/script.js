{
    const welcome = () => {
        console.log("Hello world!")
    }
    

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const changeColor = document.querySelector(".js-changeColor");

        body.classList.toggle("body--white");
        changeColor.innerText = body.classList.contains("body--white") ? "szare" : "białe";
    };


const removeTable = () => {
    const button = document.querySelector(".section__button");
    const table = document.querySelector(".table");

    button.textContent = "taka mała zmiana :) ";
    table.remove; //ta opcja nie chce mi zadziałać, nie jestem pewna co tu powinnam dodać. 
}
    
const scrollUp = () => {
    const button2 = document.querySelector(".js-scrollUp");
    button2.addEventListener("click", () => {
        scroll(0, 0);
    }); // czy funkcja strzałkowa moze byc uzyta w funkcji strzałkowej? nie mam innego pomysłu jak to zapisać :(
}
    

    
    const init = () => {
      const changeBacground = document.querySelector(".js-changeBackground");
        changeBacground.addEventListener("click", toggleBackground);

        const button = document.querySelector(".section__button");
        button.addEventListener("click", removeTable);

        const button2 = document.querySelector(".js-scrollUp");
        button2.addEventListener("click", scrollUp);

        welcome ();
    }
   
    init ()
}
