# Project Name
Memory Game Project 

## Description

Memory Game is an  exercise for your mind while having fun.The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match! 

## Browsers & Devices

All content is responsive and display on Google Chrome, Fire Fox and all display devices sizes, includes:
* Desktop
* Mobile: Google Nexus 5
* Tablet: Apple iPad

## Language

This game built using HTML5, CSS3, JavaScript and Bootstrap library.

## Game Main Functionality
The main function which starts with window.onload is called :  `start()` 
Display the cards on the page  
#### `start()` function do the following procedure:
1. Generate and Display the cards on the page
2. initilize and Set all the primay variables in the game 
3. Display all the stars rating in case of restart
4. Save all the cards list in array to handle it
5. Set up the event listener for each card .  If the card clicked , do as follows: 
    * Display the card's symbol and add the card to a *list* of "open" cards
    * Increment the move counter , set the star rating , set the timer  and display them on the score panel
    * If the list already has another card, check to see if the two cards match.
      * If the cards do match, lock the cards in the open position
      * Else: the cards do not match, remove the cards from the list and hide the card's symbol
    * if all cards have matched, display a message with the final score . 
    
```
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
```
#### List of sub function:
* `generateCard()`
* `shuffle()`
* `displayCard()`
* `matchedCard()`
* `notMatch()`
* `updateMoves()`
* `starRating()`
* `displayResult()`

## Resources
* [Udacity](https://www.udacity.com/)
* [W3School](https://www.w3schools.com/)
