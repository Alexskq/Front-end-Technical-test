// function openNav() {
//     document.getElementById("mySidebar").style.width = "60rem";
//     document.getElementById("main").style.display = "none";

//   }
function openNav() {
    const sidebar = document.getElementById("mySidebar");
    if (window.innerWidth < 400) {
      sidebar.style.width = "100%";
      sidebar.style.display = "block";
      sidebar.style.zIndex = "9999"
    } else {
      sidebar.style.width = "60rem";
      document.getElementById("main").style.display = "none";
    }
  }
  
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block"

  }