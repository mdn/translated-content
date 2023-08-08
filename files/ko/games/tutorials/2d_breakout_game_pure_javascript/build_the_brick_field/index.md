---
title: 벽돌 만들기
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Game_over", "Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Collision_detection")}}

이번 단계는 [Gamedev Canvas tutorial](/ko/docs/Games/Workflows/Breakout_game_from_scratch)의 여섯 번째 학습입니다. [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html)에서 이번 학습의 소스코드를 확인할 수 있습니다.

게임플레이 원리를 수정한 후에, 우리는 게임에서 패배할 수 있게 되었습니다. 이것은 실제 게임에 보다 가까운 느낌이기 때문에 훌륭합니다. 하지만 벽과 패들에 공이 튀기는 것 말고 할 수 있는 것이 없기 때문에 금방 지루해집니다. 벽돌깨기 게임에서 진정으로 필요로 한 것은 공으로 파괴할 벽돌입니다. 이 것이 지금 우리가 만들 것입니다!

## 벽돌에 대한 변수 설정하기

이번 학습의 모든 목표는 벽돌들을 위한 코드를 2차원 배열로 동작하는 반복문을 통해 제공하는 것입니다. 그러나 먼저 우리는 가로, 세로, 행, 열 등 벽돌에 대한 값을 정의할 몇몇 변수들을 설정해야 합니다. 지난 학습에서 작성한 코드에 아래 코드를 추가해봅시다.

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

우리는 벽돌 배열 행과 열의 수, 그것들의 가로, 세로길이, 각 벽돌이 서로 닿지 않을 정도의 간격과 벽돌이 캔버스의 모서리에 닿지 않게 할 오프셋 변수들을 정의했습니다.

우리는 2차원 배열에 벽돌을 담았습니다. 배열은 열 `c`, 행 `r`, 그리고 배열의 각 객체엔 화면에 벽돌을 그릴 위치를 나타낼 `x`, `y` 위치를 가지고 있습니다. 위에서 변수를 선언한 코드 뒤에 아래 코드를 추가해봅시다.

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

위 코드는 행과 열 수만큼 반복되면서 새로운 벽돌을 만듭니다. 각 벽돌 객체는 이후에 충돌감지에 사용됩니다.

## 벽돌을 그리는 방법

이제 배열안의 모든 벽돌을 반복해서 화면에 그려줄 함수를 만들어봅시다. 코드는 아래와 같습니다.

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

다시 행, 열 반복을 통해 각 벽돌의 `x`, `y` 값을 설정하고, 캔버스에 `brickWidth` \* `brickHeight` 크기의 벽돌들을 그립니다. 문제는 모든 벽돌들이 좌표 (0, 0) 위치해있다는 것입니다. 우리는 약간의 연산을 통해 각 벽돌의 `x`, `y` 값을 계산해야 합니다.

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

`brickX`는 `brickWidth` + `brickPadding`에 `c`를 곱하고, `brickOffsetLeft`를 더한 값입니다. `brickY`는 변수 `r`, `brickHeight`, `brickOffsetTop` 변수를 사용한다는 것을 제외하곤 동일합니다. 이제 모든 벽돌들을 올바른 위치에, 알맞은 간격을 두고, 캔버스 모서리로부터 오프셋 값만큼의 거리를 둔 상태로 그릴수 있게되었습니다.

`brickX`와 `brickY` 값을 (0, 0) 대신에 좌표 값으로 할당한 후에 `drawBricks` 함수의 마지막 버전은 아래와 같을 것입니다. 이 코드는 `drawpaddle` 함수 아래에 추가해봅시다.

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

## 실제 벽돌을 그리기

이 학습에서 마지막으로 할 일은 `drawBrick`함수를 호출하는 코드를 `draw`함수 어딘가에, 되도록이면 시작하는 부분에, 캔버스를 초기화하는 부분과 공을 그리는 사이에 추가하는 것입니다. 아래 코드를 `drawBall()` 코드 위에 추가해봅시다.

```js
drawBricks();
```

## 코드 비교해보기

이 부분에서 게임은 조금 더 흥미로워졌습니다.

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/Lu3vtejz/","","395")}}

> **참고:** 연습하기: 행과 열의 수를 바꿔서 벽돌의 수를 변경해보거나, 위치를 변경해봅시다.

## 다음 단계

이제 우리에겐 벽돌이 있습니다! 하지만 공은 벽돌들과의 반응이 없습니다. 우리는 다음 단계에서 이 문제에 대해 다룰 것입니다: [충돌 감지](/ko/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)

{{PreviousNext("Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Game_over", "Games/Tutorials/순수한_자바스크립트를_이용한_2D_벽돌깨기_게임/Collision_detection")}}
