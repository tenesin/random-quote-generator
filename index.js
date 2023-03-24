const btnEl = document.getElementById("btn")
const apiURL = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote")
const quoteAu = document.getElementById("author")

async function getQuote() {

 try { 
    btnEl.innerText = "Loading Quote..."
    btnEl.disabled = true;
    quoteEl.innerText =  "Updating Quote..."
    quoteAu.innerText = "Updating Author..."
    const response = await fetch(apiURL)
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;

    quoteEl.innerText = quoteContent;
    quoteAu.innerText = "~ " + quoteAuthor;

    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;

    console.log(data);

   } catch(error) {
        console.log(error);
        quoteEl.innerText = "An error happened, try again later.";
        quoteAu.innerText = "An error happened";
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;
    }
}

btnEl.addEventListener("click", getQuote);
