// SIDEBAR START
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("active");// Sidebar open when you click on the menu iocn
  menuBtnChange();//calling the function
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("active");
  menuBtnChange(); //calling the function
});

// following are the code to change sidebar menu icon
function menuBtnChange() {
 if(sidebar.classList.contains("active")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}



// SIDEBAR START
// let sidebar = document.querySelector(".");
// let closeBtn = document.querySelector("#moon");
// let searchBtn = document.querySelector(".bx-search");
// closeBtn.addEventListener("click", ()=>{
//   sidebar.classList.toggle("active");// Sidebar open when you click on the menu iocn
//   menuBtnChange();//calling the function
// });

// searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
//   sidebar.classList.toggle("active");
//   menuBtnChange(); //calling the function
// });

// // following are the code to change sidebar menu icon
// function menuBtnChange() {
//  if(sidebar.classList.contains("active")){
//    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
//  }else {
//    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
//  }
// }
// SIDEBAR END
// let home_section = document.querySelector(".home_section");
// let darkBtn = document.querySelector("#moon");
// let lightBtn = document.querySelector("#sun");
// darkBtn.addEventListener("click", ()=>{
//     home_section.classList.toggle("active");// Sidebar open when you click on the menu iocn
//     moodChange();//calling the function
//   });
//   lightBtn.addEventListener("click", ()=>{
//     home_section.classList.toggle("active");// Sidebar open when you click on the menu iocn
//     moodChange();//calling the function
//   });
// function moodChange() {
//     if(home_section.classList.contains("active")){
//       closeBtn.classList.replace("bxs-moon", "bxs-sun");//replacing the iocns class
//     }else {
//       darkBtn.classList.replace("bxs-sun","bxs-moon");//replacing the iocns class
//     }
// }

