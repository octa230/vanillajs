/* const map = [];

map[0] = 'An Old Stone keep';
map[1] = 'A deep well';
map[2] = 'A sleeping dragon';
map[3] = 'A sleeping dragon';
map[4] = 'A narrow pathway';
map[5] = 'An acient gate';
map[6] = 'The edge of a river';
map[7] = 'A wooden bench';
map[8] = 'An isolated cottage. Faint music comes from inside';

//add images 
const images =[];
images[0] ='';
images[1] ='';
images[2] ='';
images[3] ='';
images[4] ='';
images[5] ='';
images[6] ='';
images[7] ='';
images[8] ='';

const KnownActions = ['north', 'east', 'south', 'west'];
let action = '';

let playersInput = '';
let gameMessage = '';
let mapLocation = 8;

//input fields
let output= document.querySelector('#output');
let input = document.querySelector('#input');

//button
let button = document.querySelector('#button');
button.style.cursor = 'pointer';
button.addEventListener('click', clickHandler, false)

//display
render();
function clickHandler(){
    playGame()
}
function playGame(){
    playersInput = input.value;
    playersInput = playersInput.toLowerCase();
    gameMessage = '';
    action = '';

    for(i = 0; i < KnownActions.length; i++){
        if(playersInput.indexOf(KnownActions[i] !== -1)){
            action = KnownActions[i];
            console.log('players actions: ' + action)
            break;
        }
    }

switch(action){
    case 'north':
        mapLocation -=3;
        break;
    case 'east':
        mapLocation +=1;
        break;
    case 'south':
        mapLocation +=3;
        break;
    case 'west':
        mapLocation -=1;
        break;
    default:
        gameMessage = 'I dont understand that.';
}
render()
}
function render(){
    //render the location 
    output.innerHTML = map[mapLocation]
    image.src = '../images/' + images[mapLocation]

    //display game message
    output.innerHTML += '<br><em>' + gameMessage + "</em>";
}


//images array functions
const img = document.querySelector('#img')

 */