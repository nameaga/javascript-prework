{
    const playGame = function (playerInput){
        clearMessages()
        
        const getMoveName = function (argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            }
            else if(argMoveId == 2){
                return 'papier';
            }
            else{
                return 'nożyce';
            }
        }
        
        const displayResult = function (argComputerMove, argPlayerMove){
            console.log('moves:', argComputerMove, argPlayerMove);
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
            if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz!');
            }
            else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz!');
            }
            else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
            }
            else if( argComputerMove == argPlayerMove ){
                printMessage('Remis!');
            }
            else {
                printMessage('Tym razem przegrywasz :(');
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const computerMove = getMoveName(randomNumber);

        /*if(randomNumber == 1){
        computerMove = 'kamień';
        }
        else if(randomNumber == 2){
        computerMove = 'papier';
        }else{
        computerMove = 'nożyce';
        }*/

        printMessage('Mój ruch to: ' + computerMove);
        /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
        console.log('Gracz wpisał: ' + playerInput);
        const playerMove = getMoveName(playerInput);

        /*if(playerInput == '1'){
        playerMove = 'kamień';
        }
        else if(playerInput == '2'){
            playerMove = 'papier';
        }
        else{
            playerMove = 'nożyce';
        }*/

        printMessage('Twój ruch to: ' + playerMove);

        displayResult(computerMove, playerMove);
        
    }
    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    })
}