// DOM Elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const historyList = document.getElementById("history-list");

// History array
let history = JSON.parse(localStorage.getItem("palindrome-history") || "[]");

// Function to update history
function updateHistory(text, isPalindrome) {
  const historyItem = {
    text,
    isPalindrome,
    timestamp: new Date().getTime()
  };
  
  history.unshift(historyItem);
  history = history.slice(0, 10); // Keep only last 10 items
  localStorage.setItem("palindrome-history", JSON.stringify(history));
  renderHistory();
}

// Function to render history
function renderHistory() {
  historyList.innerHTML = history
    .map(item => `
      <li>
        <span class="history-text">${item.text}</span>
        <span class="history-result">${item.isPalindrome ? "✓ Palindrome" : "✗ Not a palindrome"}</span>
      </li>
    `)
    .join("");
}

// Function to check palindrome
async function checkPalindrome(inputValue) {
  // Show loading state
  checkBtn.classList.add("loading");
  result.classList.remove("show");
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Normalize: remove non-alphanumeric, ignore case
  const cleaned = inputValue.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;
  
  // Update result
  result.textContent = `${inputValue} is ${isPalindrome ? "" : "not "}a palindrome.`;
  result.classList.add("show");
  
  // Update history
  updateHistory(inputValue, isPalindrome);
  
  // Hide loading state
  checkBtn.classList.remove("loading");
}

// Event Listener for Button
checkBtn.addEventListener("click", () => {
  const inputValue = textInput.value.trim();
  
  if (inputValue === "") {
    alert("Please input a value");
    return;
  }
  
  checkPalindrome(inputValue);
});

// Event Listener for Enter key
textInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const inputValue = textInput.value.trim();
    
    if (inputValue === "") {
      alert("Please input a value");
      return;
    }
    
    checkPalindrome(inputValue);
  }
});

// Load history on page load
renderHistory();
