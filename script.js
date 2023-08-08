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
  


  function openTab(evt, tabName) {
    var i, tabContent, tabButton;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    
    tabButton = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  window.onload = function() {
    // 預設顯示分頁一
    document.getElementById("home").style.display = "block";
  };


  window.addEventListener('wheel', function(event) {
    var element = document.getElementById('myElement');
    var rect = element.getBoundingClientRect();
  
    if (event.deltaY < 0) {
      element.classList.add('transparent');
    } else {
      element.classList.remove('transparent');
    }
  });