// function myFunction() {
//   //   document.getElementsByClassName("burger-button").addEventListener();
//   console.log("samson");

// }
document.querySelector('.burger-button').addEventListener('click', function () {
    document.querySelector('.nav-list').style.display = 'flex';
  document.querySelector('.close-button').style.display = 'block';
  document.querySelector('.burger-button').style.display = 'none';
  }); 

document.querySelector('.close-button').addEventListener('click', function () {  
   document.querySelector('.burger-button').style.display = 'block';
    document.querySelector('.nav-list').style.display = 'none';
      document.querySelector('.close-button').style.display = 'none';





}); 