async function fetchQuote() {
    const response = await fetch('https://api.kanye.rest');
    const data = await response.json();
    document.getElementById('quote').innerText = `"${data.quote}"`;
  }