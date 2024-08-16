const quoteText=document.querySelector(".quote"),
authorName=document.querySelector(".author .name");
quoteBtn=document.querySelector("button");

// random quotet function
function randomQuote(){
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
    console.log(result);
    quoteText.innerText=result.content;
    authorName.innerText=result.author;
    quoteBtn.innerText="New Quote";
    });
}
// quoteBtn.addEventListener("click", ()=>{
// let utterance =new SpeechSynthesisUtterance("${quoteText.innerText}");
// speechSynthesis.speak(utterance);
// });
quoteBtn.addEventListener("click",randomQuote);