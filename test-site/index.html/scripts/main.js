let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fence-pic.jpg') {
        myImage.setAttribute('src','images/metal-fence.jpg');
    } else {
        myImage.setAttribute('src','images/fence-pic.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent ='Thanks for choosing A Plus LLC, ' + myName + '!';
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent ='Thanks for choosing A Plus LLC, ' + storedName + '!';
}
myButton.onclick = function() {
    setUserName();
}