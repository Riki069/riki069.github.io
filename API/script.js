async function fetchQuote() {
  const response = await fetch("https://api.kanye.rest/");
  const data = await response.json();
  document.getElementById("quote").innerText = data.quote;
}

async function translateQuote() {
  const quote = document.getElementById("quote").innerText;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(quote)}&langpair=en|hu`;
  
  const response = await fetch(url);
  const data = await response.json();
  document.getElementById("translated").innerText = data.responseData.translatedText;
}