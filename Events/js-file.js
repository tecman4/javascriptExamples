function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  
  // METHOD 2
  btn.onclick = alertFunction;
  
  // METHOD 3
  btn.addEventListener('click', alertFunction);

  btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});