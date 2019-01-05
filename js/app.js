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
    imgElem[3].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMMBlsYV-Ta5N_GKAoxRDBEa9BRZqdzQRvpiHELEPb6IPVZ73';
}


// 4. The Great Depression
// Add an event listener to the the h3 element with the id of 'hardTimes' that will trigger a function to display the contents in the div element of 'depress' after clicking on The Great Depression.

hardTimes.addEventListener('click', showDepress);

function showDepress(){
    depress.style.display = 'block';
}

// 5. Apollo 11
// Add an event listener to the h3 element with the id of 'blastOff' that will trigger a function to show and hide the contents in the div element of 'moonWalk' after clicking on Apollo 11.

blastOff.addEventListener('click', orbit);

function orbit(){
  if(moonWalk.style.display === 'block'){
      moonWalk.style.display = 'none';
  }else{
      moonWalk.style.display = 'block';
  }
}

// 6. The American Civil War
// Add an event listener to the div element of 'freedom' that will trigger a function to remove all instances of 'corn' in the content.

//Option 1
freedom.addEventListener('click', removeCorn)

function removeCorn(){
   freedom.innerHTML = freedom.innerHTML.replace('corn', ' ');
}

//Option 2 REGEX
// freedom.addEventListener('click', removeCorn)

// function removeCorn(){
//    freedom.innerHTML = freedom.innerHTML.replace(/corn/g, ' ');

// }

// 7. The Renaissance
// Add an event listener to the div element of 'rebirth' that will trigger a function to remove all the lowercase and uppercase z's in the content. 
rebirth.addEventListener('click', removeLetter);

function removeLetter(){
    var zLetters = [];
    var otherLetters = [];
    var words = rebirth.innerText;
    var splitLetters = words.split('');
    for(var i = 0; i<splitLetters.length; i++){
       if(splitLetters[i] === 'z' || splitLetters[i] === 'Z'){
           zLetters.push(splitLetters[i]) 
       }else{
           otherLetters.push(splitLetters[i])
       }
    }
        var joinUp = otherLetters.join('');
        rebirth.innerHTML = joinUp;
}

// 8. the Gutenberg Printing Press
// Add an event listener to the h3 element of 'showBooks' that will trigger a function to display a random book title from the classics array in the div element of 'mustRead'.

var classics = ["Charlotte's Web", "War and Peace", "The Secret", "How to Win Friends and Influence People", "Good to Great", "The Lean Startup", "The Odyssey", "Essentialism"];

showBooks.addEventListener('click', showTitles);

function showTitles(){
  var randomize = Math.floor(Math.random()* classics.length);
  mustRead.innerHTML = classics[randomize];
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