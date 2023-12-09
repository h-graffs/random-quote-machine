function selectRandomQuote() {
  const quotes = ['\"Believe you can and you\'re halfway there\"', '\"You don\'t have to be great to      start, but you have to start to be great.\"', '\"May you live every day of your life.\"', '\"If things start happening, don\'t worry, don\'t stew, just go right along and you\'ll start happening too.\"', '\"Your imagination is your preview of lifes coming attractions\"'];
  
  const authors = ['Theodore Roosevelt', 'Zig Ziglar', 'Jonathan Swift', 'Dr. Seuss','Albert Einstein'];
                  
  
 let indexRandom = Math.floor(Math.random()*quotes.length);
  
 let strToDisplayQuote = quotes[indexRandom];
 let strToDisplayAuthor = authors[indexRandom];
  
document.getElementById('text').innerHTML = strToDisplayQuote; 
  
document.getElementById('author').innerHTML = strToDisplayAuthor;
  
}
  
 