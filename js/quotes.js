const quotes = [
    {
        quotes:`The way get started is to quit talking and begin doing.`,
        author:"Walt Disney",
    },
    {
        quotes:`If you are working on something that you really care about, 
        you don't have to be pushed. The vision pulls you.`,
        author:"Steve Jobs",
    },
    {
        quotes:`Your time is limited, so don't waste it living someone else's life.`,
        author:"Steve Jobs",
    },
    {
        quotes:`Sometimes when you innovate, you make mistakes. 
        It is best to admit them quickly, and get on with improving your other innovations.`,
        author:"Steve Jobs",
    },
    {
        quotes:`people who are crazy enough to think they can change the world are the ones who do.`,
        author:"Rob siltanen",
    },    {
        quotes:`Knowing is not enough; we must apply. 
        Wishing is not enough; we must do.`,
        author:"Johann Wolfgang Von Goethe",
    },
    {
        quotes:`security is mostly a superstition. 
        Life is either a daring adventure or nothing.`,
        author:"Helen Keller",
    },
    {
        quotes:`The only limit to our realization of tomorrow will be out doubts of today.`,
        author:"Franklin D. Roosevelt",
    },
    {
        quotes:`Creativity is intelligence having fun.`,
        author:"Albert Einstein",
    },
    {
        quotes:`The only way to do great work is to love what you do. 
        If you haven't found it yet, keep looking. Don't settle.`,
        author:"Steve Jobs",
    }
]

const quote = document.querySelector("#quote div:first-child")
const author = document.querySelector("#quote div:last-child")


/* 명언의 숫자를 알고 있을 때
console.log(quotes[Math.floor(Math.random() *10)]);
*/

//Array의 개수를 몰라도 될 때! length를 사용하자.

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = `- ${todaysQuote.author}`;