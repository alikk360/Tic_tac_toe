




<script>

  var res = document.querySelector('.mained');

  var currPlayer = "X";

  var  gameState = [ "","","","","","","","","" ] ;

var gamePos = true;

const winGamee = () => `Winner is ${currPlayer}....`;

const drawGame = () => `Match DRAW....`;

const playerMove = () =>  `Now, Player ${currPlayer} turn`;

res.innerHTML = playerMove();

 

var allBox = document.querySelectorAll('.box');

allBox.forEach(box => box.addEventListener('click' , checkClick));

var btn = document.querySelector('button');

btn.addEventListener('click' , restart);

function checkClick(tar){

  var stored = tar.target;

  var celled = parseInt(stored.getAttribute('data-cell-index'));

  if(gameState[celled] !== "" || !gamePos){

    return;

  }

 handleCellPlayed(stored,celled);

 handleValidation();

  }

  function handleCellPlayed(stored,celled){

    gameState[celled] = currPlayer;

    stored.innerHTML = currPlayer;

  }

  const winned = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6]

  ];

  function handleValidation(){

    var winGame = false;

    for(let i = 0 ; i <= 7 ; i++){

    var winIndex = winned[i];

    let a = gameState[winIndex[0]];

    let b = gameState[winIndex[1]];

    let c = gameState[winIndex[2]];

    

   if(a == "" || b == "" || c == "" ){

    continue;

   } 

   if(a==b && b==c){

     winGame =true;

     break

   }

  }

  if(winGame){

    res.innerHTML= winGamee();

    

    gamePos = false;

    return

  }

  var drawR= !gameState.includes("");

if (drawR){

  res.innerHTML = drawGame();

  gamePos=false;

  return;

}

handlePlayerChange();

  }

  function handlePlayerChange(){

    currPlayer = currPlayer == "X" ? "O" : "X";

    res.innerHTML = playerMove();

  }

function restart(){

  currPlayer = "X";

  gamePos = true;

  gameState = [ "","","","","","","","","" ] 

  res.innerHTML = playerMove();

  allBox.forEach(box => box.innerHTML = "")

}

</script>

