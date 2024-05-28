let sidebarWidth = 250;
let sidebarOpen = false;

function openNav() {
  document.getElementById("mySidebar").style.width = sidebarWidth + "px";
  document.getElementById("main2").style.marginRight = sidebarWidth + "px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main2").style.marginRight = "0";
}

function toggleNav() {
  if (sidebarOpen) {
    closeNav();
    sidebarOpen = false;
  } else {
    openNav();
    sidebarOpen = true;
  }
}

document.querySelector('.openbtn').addEventListener('click', toggleNav);


let sidebarLinks = ['senestside.html', '#', '#', '#', 'chat.html', 'login.html'];


sidebarLinks.forEach(link => {
  document.querySelector(`[href="${link}"]`).addEventListener('click', closeNav);
});


