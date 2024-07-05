document.addEventListener("DOMContentLoaded", function(){
    let joke = document.getElementById("jokePara");
    let btn = document.getElementById("btn");

    const url = "https://v2.jokeapi.dev/joke/Any?type=single";

    let getJoke = () =>{
        fetch(url)
        .then(data => data.json())
        .then(item => {
            joke.textContent = `${item.joke}`;
        })

        .catch(()=>console.log("Error! Could not retrieve Joke"));

    }

    btn.addEventListener("click", getJoke);
})