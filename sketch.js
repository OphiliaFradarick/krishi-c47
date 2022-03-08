var gameState = "start";
var obstaclesGroup, glassTrashImg, metalTrashImg, plasticTrashImg, exitButton;

function preload() {
  loganImg = loadImage("images/loganPc.png");
  emilyImg = loadImage("images/emily.png");
  carsonImg = loadImage("images/carson.png");
  trashImg = loadImage("images/trash.png");
  gameLogoImg = loadImage("images/gameLogo.png");
  backgroundImg = loadImage("images/backgroundImg.jpg");
  startbuttonImg = loadImage("images/startbutton.png");
  background1 = loadImage("images/background1.jpg");
  storyImg = loadImage("images/story.png");
  informationImg = loadImage("images/informationButton.png");
  glassTrashImg = loadImage("images/glassTrash.png");
  metalTrashImg = loadImage("images/metalTrash.png");
  plasticTrashImg = loadImage("images/plasticTrash.png");
  spriteImg = loadImage("images/exitButton.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Create the Bodies Here.
  bg = createSprite(400, 350);
  bg.addImage(backgroundImg);
  bg.scale = 2.8;

  bg1 = createSprite(400, 350);
  bg1.addImage(background1);
  bg1.scale = 1.2;
  bg1.visible = false;

  gamelogo = createSprite(windowWidth / 2, windowHeight / 2);
  gamelogo.addImage(gameLogoImg);
  gamelogo.scale = 1.4;

  logan = createSprite(windowWidth / 2 - 50, windowHeight - 150);
  logan.addImage(loganImg);
  logan.scale = 1;

  emily = createSprite(windowWidth / 2 - 150, windowHeight - 150);
  emily.addImage(emilyImg);
  emily.scale = 0.4;

  carson = createSprite(windowWidth / 1.9 - 1, windowHeight - 180);
  carson.addImage(carsonImg);
  carson.scale = 0.5;

  ground = createSprite(windowWidth / 2, windowHeight - 50, windowWidth, 10);

  start = createSprite(windowWidth / 2, windowHeight / 2 + 100);
  start.addImage(startbuttonImg);
  start.scale = 1;

  information = createSprite(700, windowHeight / 2 + 50);
  information.addImage(storyImg);
  information.scale = 1.26;
  information.visible = false;

  informationButton = createSprite(windowWidth / 2, windowHeight / 2 + 160);
  informationButton.addImage(informationImg);
  informationButton.scale = 0.1;

  exitFromInfo = createSprite(windowWidth / 2, 100)
  exitFromInfo.shapeColor = "red"
  exitFromInfo.visible = false;
  //exitFromInfo.addImage(plasticTrashImg)

  obstaclesGroup = new Group();
}

function draw() {
  background(0);

  //console.log(exitButton.x)

  drawSprites();

  if (gameState === "start") {
    if (mousePressedOver(start)) {
      gameState = "play";
    }
    if (mousePressedOver(informationButton)) {
     gameState = "info"
    }
  }

  if (gameState === "play") {
    bg1.visible = true;
    gamelogo.visible = false;
    bg.visible = false;
    start.visible = false;
    informationButton.visible = false;
  }

  if (gameState === "info"){
	information.visible = true;
	informationButton.visible = false;
	information.scale = 0.7;

	exitFromInfo.visible = true;


	if (mousePressedOver(exitFromInfo)){
	  gameState = "start";
	  information.visible = false;
	  exitFromInfo.visible = false;
	  informationButton.visible = true;
	}
  }
}
