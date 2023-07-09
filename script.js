function openNav() {
    document.getElementById("mySidebar").style.width = "60rem";
    document.getElementById("main").style.display = "none";

  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsById("main").style.display = "flex"

  }