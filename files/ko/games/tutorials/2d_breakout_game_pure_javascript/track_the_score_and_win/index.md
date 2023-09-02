---
title: 점수 추가와 승패 판정 방법
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

이번 단계는 [Gamedev Canvas tutorial](/ko/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)의 8번째 단계입니다. [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html)에서 이번 단계의 소스 코드를 확인할 수 있습니다.

벽돌 깨기 기능은 잘 작동합니다. 하지만 더 나은 게임이 되기 위해서, 유저가 벽돌을 깰 때마다 점수를 얻고, 그 점수를 기록하는 점수 기능을 만들 수 있습니다.

## 점수 계산하기

게임 플레이 도중 점수를 볼 수 있다면, 친구들에게 자랑할 수 있을 것입니다. 그러기 위해서는 점수를 기록할 변수가 필요합니다. 작성중인 JS파일의 변수 영역의 하단에, 아래 코드를 추가합시다.

```js
var score = 0;
```

점수 화면을 만들고, 업데이트를 하기 위해서 `drawScore()` 함수가 필요합니다. 아래 코드를 `collisionDetection()` 함수 아래에 추가합시다.

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
```

텍스트를 캔버스 안에 그리는 것은 도형을 그리는 작업과 비슷합니다. 폰트를 정의하는 것은 CSS에서의 작업과 같습니다. — {{domxref("CanvasRenderingContext2D.font","font()")}} 함수에서 크기와 타입을 설정할 수 있습니다. 그런 다음 {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} 함수를 사용하여 글꼴의 색상을 설정하고 {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} 함수를 이용해서 캔버스에 배치될 실제 텍스트와 배치 위치를 설정하는 데 사용합니다. 첫 번째 매개 변수는 텍스트 자체입니다. 위의 코드는 현재 점수를 나타내며 마지막 두 매개 변수는 텍스트가 캔버스에 배치될 좌표입니다.

벽돌이 깨질 때마다 점수 변수의 값을 증가시키기 위해서 `collisionDetection()` 함수에 강조 표시된 코드를 입력하여 수정합시다.

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
        }
      }
    }
  }
}
```

`draw()` 함수 안에서 위 함수를 호출하면 호출 될 때마다 다시 그리기 때문에 점수 변동을 확인할 수 있습니다. `draw()` 아래 코드를 `drawPaddle()` 아래에서 호출합니다.

```js
drawScore();
```

## 모든 벽돌이 파괴되었을 때 승리 메시지 표시

점수가 오르는 것은 좋지만, 평생 점수가 올라가진 않을 것입니다. 모든 벽돌의 파괴가 결국 게임의 주된 목적이기 때문에 모든 점수를 얻는다면 승리 메시지를 표시해야 합니다. `collisionDetection()`함수에 강조된 코드를 붙여넣읍시다.

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}
```

결국 사용자는 모든 벽돌을 파괴한 순간, 실제로 게임에서 승리할 수 있습니다. 이는 게임과 관련하여 굉장히 중요합니다. `document.location.reload()`기능은 페이지를 다시 로드하고 경고 버튼이 클릭되면 게임을 다시 시작합니다.

## 코드 비교

최종 코드는 아래와 같습니다. 지금까지 작성한 코드와 비교해 봅시다.

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/2m74vr9r/1/","","395")}}

> **참고:** **추가 학습**: 벽돌을 깰 때마다 얻는 점수를 늘리고, 게임 클리어 시 최종 점수를 경고창에 표시해 봅시다.

## 다음 단계

게임은 현재 꽤 멋지게 보입니다. 다음 단계에서는, [Mouse controls (마우스로 패들 조종하는 방법)](/ko/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)을 통해서 게임을 즐길 수 있습니다.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
