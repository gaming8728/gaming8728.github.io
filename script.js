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



window.location.href = "game/minecraft/index.html";