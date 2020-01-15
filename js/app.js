
//Create a list that holds all of your cards
let cardList =['fa-diamond' , 'fa-diamond' , 
                'fa-paper-plane-o' , 'fa-paper-plane-o', 
                'fa-anchor', 'fa-anchor', 
                'fa-bolt', 'fa-bolt', 
                'fa-cube', 'fa-cube', 
                'fa-leaf', 'fa-leaf', 
                'fa-bicycle', 'fa-bicycle',
                'fa-bomb', 'fa-bomb'
            ] ;
//Iniialize the primary variables of the game
let timer=  document.querySelector(".timer");
let interval;
let second=0 , minute=0 , hour=0;
let deckBoard = document.querySelector('.deck');
let modal=document.getElementById('myModal');
let modalContent = document.querySelector('#result');
let stars= document.querySelectorAll('.fa-star');
let matchedList =[];
let starsNo = 0;
let numOfClicks = 0;
let noOfmovements= document.querySelector('.moves');
let allCards ;
let openCards = [];

//TODO: start the main function 
window.onload = start();
 

/**************************  Main Function  *********************************/

function start (){ 
    //TODO:  Display the cards on the page  
     deckBoard.innerHTML=" ";
    generateCard();
    //TODO: set all the primay variables in the game for the restart event
    clearInterval(interval);
    timer.innerHTML = '0 : 0 : 0' ;
    second=0 ;minute=0; hour=0;
    numOfClicks= 0;
    noOfmovements.innerHTML = '0';
    matchedList =[];
    openCards =[];
    //TODO: Display all the stars rating in case of restart
    for( i= 0; i < 3; i++){
        stars[i].style.display = "inline-block";
        starsNo =3;
    }
    //TODO: save all the cards in variabe
     allCards = document.querySelectorAll('.card'); 
     allCards.forEach(function(card){
        //TODO:  set up the event listener for a card.
        card.addEventListener('click', function ( ){
            //TODO: If the card clicked , then display the card's symbol
            if(!(card.classList.contains('open') && card.classList.contains('show'))) { 
                //TODO: increment the move counter and display it on the page
                updateMoves();
                //TODO: display the card's symbol and add the card to a *list* of "open" cards
                displayCard(card);
                //TODO: if the list already has another card, check to see if the two cards match
                if(!(openCards.length < 2)) {
                //TODO: if the cards do match, lock the cards in the open position
                    if(openCards[0].dataset.card === openCards[1].dataset.card){
                        matchedCard();
                        //TODO: if all cards have matched, display a message with the final score
                        if(matchedList.length ===16){
                            clearInterval(interval);
                            displayResult();
                        }
                    }
                    //TODO: if the cards do not match, remove the cards from the list and hide the card's symbol
                    else {
                        setTimeout(function (){
                        notMatch();       
                        }, 500);                
                    }
                }  
            }   
        });       
    }); 
} 
    
/**************************  List of sub Function  *********************************/

/**************************   generateCard  ***********************/
  /*TODO:  Generate the card on the page
     *   - shuffle the list of cards using the provided "shuffle" method below
     *   - loop through each card and create its HTML
     *   - add each card's HTML to the page
  */
function generateCard(){

        shuffle(cardList).forEach(function(card){
            deckBoard.insertAdjacentHTML('afterbegin', `<li class="card" data-card="${card}">  <i class="fa ${card}"></i></li> ` );
        });
}
    
/**************************   shuffle  ***********************/
// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**************************  displayCard   ***********************/

function displayCard(card){
            
    card.classList.add('open' , 'show');                 
    openCards.push(card);
}

/**************************   matchedCard  ***********************/

function matchedCard (){
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
    matchedList.push(openCards[0]);
    matchedList.push(openCards[1]);
    openCards= [];
}

/**************************   noMatch  ***********************/

function notMatch(){
    openCards[0].classList.add('unmatch');
    openCards[1].classList.add('unmatch')
    openCards.forEach(function(card){
           setTimeout(function (){
            card.classList.remove('open','show','unmatch'); 
        }, 500);
        
   });
    openCards= [];
}

/**************************   updateMoves  ***********************/

function updateMoves (){
    numOfClicks++ ;
    noOfmovements.innerHTML =  numOfClicks;
    if(numOfClicks == 1){
        setTimer();
    }
    starRating ();
}

/**************************   starRating  ***********************/

function starRating(){
    if (numOfClicks > 16 && numOfClicks < 20){
        for( i= 0; i < stars.length; i++){
            if(i > 1){
                stars[i].style.display = "none";  
            }
        }
        starsNo=2 ;
    }
    else if (numOfClicks > 20){
            for( i= 0; i < stars.length; i++){
                if(i > 0){
                    stars[i].style.display = "none";
                }
            }
            starsNo = 1;
        }
}

/**************************   displayResult  ***********************/

function displayResult() {

    $("#myModal").modal("show");
    modalContent.innerHTML = `<h4>Congratulation ! You Won! </h4>  <br/>  with  ${numOfClicks}  Moves and  ${starsNo}   Stars <br/> in ${minute} Minutes ${second} Seconds <br/>  WOOOOOOOO! `;
}

/**************************   setTimer  ***********************/

function setTimer() {
   
    interval = setInterval(function(){
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
        
        timer.innerHTML = hour + " : "+ minute+" : "+second;
    },1000);
    
}



 