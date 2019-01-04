// 1. The Greatest Thing Since Sliced Bread 
// Find the onclick event in this section and create a function that will italicize the contents and change the font color to cornflowerblue in the div id of 'bread'.

function italics(){
   bread.style.fontStyle = 'italic';
   bread.style.color = 'cornflowerblue';
}

// 2. The Birth of the Internet
// Find the onclick event in this section and create a function that will replace the current contents in the div id of 'webby' to the following:

var webContents = 'The Internet got its start in the United States more than 50 years ago as a government weapon in the Cold War. In the 1980s, research at CERN in Switzerland by British computer scientist Tim Berners-Lee resulted in the World Wide Web, linking hypertext documents into an information system, accessible from any node on the network.';

function changeContent(){
    webby.innerHTML = webContents;
}

// 3. World War II
//. Find the onmouseover event in this section and create a function that will change the current img to the following: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73

var imgElem = document.getElementsByTagName('img');

function changeImg(){
    imgElem[2].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73';
}

var upArrow = document.getElementsByClassName('fas fa-thumbs-up');
for(var i = 0; i<upArrow.length; i++){
    upArrow[i].addEventListener('click', countUp)
}

function countUp(){
   var upCount = this.querySelectorAll('.up')[0];
   upCount.innerHTML++;
}

var downArrow = document.getElementsByClassName('fas fa-thumbs-down');
for(var i = 0; i<downArrow.length; i++){
    downArrow[i].addEventListener('click', countDown)
}
function countDown(){
   var downCount = this.querySelectorAll('.down')[0];
   downCount.innerHTML++;
}