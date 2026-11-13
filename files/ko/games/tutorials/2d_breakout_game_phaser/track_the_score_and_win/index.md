---
title: 득점
slug: Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win
original_slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}

이것은 [Gamedev Phaser tutorial](/ko/docs/Games/Tutorials/2D_breakout_game_Phaser)의 16단계중 11번째 과정입니다. 이 과정의 소스코드를 얻고자 한다면 이 강좌를 수강한 후 [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html)를 통해 얻으세요.

점수를 얻는 방식의 게임은 좀더 재미있을 것 입니다.— 당신 또는, 친구의 최고 기록을 갈아치울수도 있습니다. 이 글에서는 우리의 게임에 득점 시스템을 추가해 보려고 합니다.

우리는 점수를 저장해두기 위해 여러 변수를 사용하고, 점수를 화면에 출력하기 위해 내부의 `text()` 메서드를 사용합니다.

## 새로운 변수들

이전 정의되었던 변수들 바로 다음에 다음과 같이 새로운 변수 두개를 추가해 주세요.

```js
// …
let scoreText;
let score = 0;
```

## 게임 화면에 점수가 표시 되도록 해보자

`지금 create()` 함수 뒤에 다음과 같은 코드를 추가해봅시다.

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

`text()` 메소드는 4개의 변수를 가질수 있습니다.

- x와 y 좌표값 자리에 글자를 그려냅니다.
- 실제 글자가 나타날 것입니다.
- 폰트도 글자와 함께 나타날 것입니다.

마지막 변수는 CSS와 매우 비슷해 보입니다. 우리의 점수는 파란색에, 18픽셀 크기이며, Arial 폰트를 사용하여 나타날 것입니다.

## 블록이 무너지면 점수를 갱신합니다

우리는 공이 블록을 칠때마다 점수를 증가시킵니다 그리고 공이 블록을 칠때마다 동시에 점수판을 갱신하여 화면에 현재 점수를 나타낼 것입니다. 이건 `setText()매소드를 써서 해결 할수 있습니다` — `ballHitBrick()` 함수 아래로 다음과 같은 새로운 코드 두 줄을 추가하세요.

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);
}
```

됐습니다, — `index.html` 을 다시 새로고침 해주고 공이 블록을 칠때마다 점수가 갱신되는지 확인해줍니다.

## 코드를 비교해보세요

이번 강좌에서 배운 득점 시스템이 어떻게 작동하는지 이해하고자 한다면, 다음 아래를 이용해 시연해보세요.

> [!NOTE]
> 라이브 샘플이 자동으로 실행되지 않도록 "게임 시작" 버튼을 추가했습니다. 게임이 자동으로 시작되면서 알림 등의 이벤트가 과도하게 발생하는 것을 방지하기 위해서입니다.

```html hidden
<script src="https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/js/phaser.2.4.2.min.js"></script>
<button id="runButton">게임 시작</button>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
var game;

function preload() {
  handleRemoteImagesOnJSFiddle();
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
  game.load.image("brick", "img/brick.png");
}
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.physics.arcade.checkCollision.down = false;
  ball = game.add.sprite(
    game.world.width * 0.5,
    game.world.height - 25,
    "ball",
  );
  ball.anchor.set(0.5);
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, -150);
  ball.body.collideWorldBounds = true;
  ball.body.bounce.set(1);
  ball.checkWorldBounds = true;
  ball.events.onOutOfBounds.add(function () {
    alert("Game over!");
    location.reload();
  }, this);

  paddle = game.add.sprite(
    game.world.width * 0.5,
    game.world.height - 5,
    "paddle",
  );
  paddle.anchor.set(0.5, 1);
  game.physics.enable(paddle, Phaser.Physics.ARCADE);
  paddle.body.immovable = true;

  initBricks();

  scoreText = game.add.text(5, 5, "Points: 0", {
    font: "18px Arial",
    fill: "#0095DD",
  });
}
function update() {
  game.physics.arcade.collide(ball, paddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 7,
      col: 3,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  bricks = game.add.group();
  for (c = 0; c < brickInfo.count.col; c++) {
    for (r = 0; r < brickInfo.count.row; r++) {
      var brickX =
        r * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
      var brickY =
        c * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, "brick");
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
}
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText(`Points: ${score}`);
}

// JSFiddle에서 원격 서버의 이미지를 불러오기 위한 함수입니다.
function handleRemoteImagesOnJSFiddle() {
  game.load.baseURL =
    "https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/";
  game.load.crossOrigin = "anonymous";
}

var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var scoreText;
var score = 0;

function startGame() {
  game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
    preload: preload,
    create: create,
    update: update,
  });
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{EmbedLiveSample("코드를 비교해보세요", 600, 360)}}

## 다음 단계

우리는 이제 득점 시스템을 게임에 추가했습니다. 그러나 게임에서 이길 수 없다면, 게임하면서 득점하는게 무슨 소용일까요? 그래서 승리 상태를 추가해보려고 합니다. 게임에서 이기게 하고 싶다면 다음으로 넘어갑시다: [win the game](/ko/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}
