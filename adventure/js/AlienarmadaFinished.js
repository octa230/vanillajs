(function(){
    //canvas
    let canvas = document.querySelector("canvas")

    //drawing surface
    let ctx = canvas.getContext('2d')

    //Arrays to store the game objects

    const sprites =[];
    const assests = [];

    //create background
    let background = Object.create(spriteObject);
    background.x = 0;
    background.y = 0;
    background.sourceY = 32;
    background.sourceWidth = 430;
    background.sourceHeight = 320;
    background.width = 480;
    background.height = 320;

    sprites.push(background)

    //create cannon and center it
    let cannon = Object.create(spriteObject);
    cannon.x = canvas.width / 2 - cannon.width /2
    cannon.y = 280;
    sprites.push(cannon)


    let image = new Image();
    image.addEventListener('load', loadHandler, false)
    img.src = '../images/' 
    assests.push(image);

    //variable to count assests to be loaded

    let assestsLoaded = 0;

    //game states

    const LOADING = 0;
    const PLAYING = 1;
    const OVER = 2;
    const gameState = LOADING

    //Arrow key codes 

    const RIGHT = 39;
    const LEFT = 37

    //Directions 
    const moveRight = false;
    const moverLeft = false;

    //add keyboard Listeners 

    window.addEventListener('keydown', (e)=>{
        switch( e.key){
            case LEFT:
                moverLeft = true;
                break;
            case RIGHT:
                moveRight = true;
        }
    }, false)

    window.addEventListener('keyup', (e)=>{
        switch(e.key){
            case LEFT:
                moverLeft = false;
                break
            case RIGHT:
                moveRight = false;
        }
    }, false)

    //start animation loop
    update()

    function update(){
        //the animantion loop

        requestAnimationFrame(update, canvas);

        //change what the game is doing based on the game state 
        
        switch(gameState){
            case LOADING:
                console.log('loading...');
                break;

            case PLAYING:
                playGame()
                break;

            case OVER:
                endGame();
                break;
            
        }
        // render game
        render()

    }

    function loadHandler(){
        assestsLoaded++
        if(assestsLoaded === assests.length){
            // Remove the load Handler 
        }
    }

}())