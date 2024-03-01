document.getElementById("submitBtn").addEventListener("click", function() {
    var userInput = document.getElementById("userInput").value; 
    document.getElementById("userContent").textContent = userInput;
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  });
  
  
  
  
  document.getElementById("popupClose").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });