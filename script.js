function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none") ? "block" : "none";
  }
  
  // 頁面加載後自動關閉彈出框
  window.onload = function() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }



  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });
  


