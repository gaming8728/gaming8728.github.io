function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
  }
  
  // 頁面加載後自動關閉彈出框
  window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }