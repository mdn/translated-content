---
title: 개발 마무리
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

[Gamedev Canvas tutorial](/ko/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)의 **10개의 레슨 중 마지막 단계**입니다. 이 수업을 마친 후 비교하여 살펴볼 소스코드는 [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html)에서 찾아볼 수 있습니다.

우리가 쓰는 모든 게임에 항상 개선해야 할 것이 있습니다. 예를 들자면, 우리는 플레이어에게 한 개보다 많은 라이프를 제공할 수 있습니다. 플레이어들은 한 번 또는 두 번의 실수를 만들어도 여전히 게임을 끝낼 수 있습니다. 우리는 또한 우리의 코드 렌더링을 개선할 수 있습니다.

## 플레이어에게 생명을 부여하기

생명을 구현하는 방법은 아주 간단합니다. 먼저 변수를 선언했던 곳과 같은 장소에서 변수를 추가하여 생명 수를 저장합니다.

```js
let lives = 3;
```

남은 생명 수를 표시하는 방법은 점수 카운터가 그려지는 것과 같은 형태입니다. `drawScore()`함수 아래에 다음 기능을 추가하세요.

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
```

지금까지 바닥에 닿으면 바로 게임을 끝내는 형식이었습니다. 이제 우리는 더 이상 게임을 이용할 수 없게 될 때까지 남은 생명 수를 줄일 것입니다. 또한 플레이어가 게임 오버되면 다시 생명과 블럭들을 리셋하여 공과 패들 위치를 재설정할 수 있습니다. 그렇게 하기 위해 `draw()` 함수 내에서 다음 세 줄을 다음 블럭의 코드로 대체합시다.

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
```

이를 통해 아래와 같이 약간 복잡한 논리를 추가할 수 있습니다:

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

자, 이제 공이 화면의 맨 아래 가장자리에 맞으면 생명(`lives`)을 하나 뺍니다. 생명이 없다면 게임이 끝나고 아직 남아있다면 공의 위치와 패들의 위치가 재설정 됩니다.

### 남은 생명 표시 렌더링하기

이제 `draw()`함수 내에서 `drawLives()`에 생명 수를 추가하고 `drawLives()` 아래에 생명 수를 추가해야 합니다.

```js
drawLives();
```

## requestAnimationFrame()을 사용하여 랜더링 개선하기

이제 게임 메커니즘과 연결이 되지 않지만, 그것이 렌더링되는 방식에 대해 연구해 봅시다. {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}}은 우리가 현재 {{domxref("windowTimers.setInterval()", "setInterval()")}}을 사용하여 구현한 고정된 프레임레이트(fixed framerate)보다 더 낫게 게임을 렌더링합니다. 다음 줄을,

```js
const interval = setInterval(draw, 10);
```

이렇게 대체하세요.

```js
draw();
```

다음 각 인스턴스를 제거합니다:

```js
clearInterval(interval); // Needed for Chrome to end game
```

그 다음, `draw()`함수의 맨 아래 (닫는 '`}`'바로 전에) 다음 줄을 추가하여 `draw()`함수가 반복적으로 자신을 호출하게 합니다:

```js
requestAnimationFrame(draw);
```

이 `draw()` 함수는 현재 `requestAnimationFrame()` 루프 내에서 반복적으로 실행되고 있지만, 고정된 10ms 프레임 대신 프레임의 제어권을 브라우저에 다시 부여 합니다. 이는 프레임과 적절하게 일치하고 필요할 때만 모양을 만들 것입니다. 이것은 이전의 `setInterval()` 방법보다 더 효율적이고 부드럽게 애니메이션 루프를 만듭니다.

## 코드 비교하기

그것이 이 레슨의 전부입니다. 게임의 최종 버전이 준비되어 있고 시작할 준비가 되어 있습니다!

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/dfh2tpu1/","","395")}}

> **참고:** 생명의 수와 공이 패들에서 튕겨나가는 각도를 변경해 보세요.

## 게임 오버 - 마무리!

축하합니다! 당신은 모든 수업을 완수하였습니다! 이쯤 되면 이제 캔버스의 조작 기초와 간단한 2D 게임 구현 방법을 알게 되었을 것입니다. 이제 몇몇 프레임워크를 배우고 게임 개발을 계속하기에 좋은 시간입니다. 이 시리즈의 [2D breakout game using Phaser](/ko/docs/Games/Tutorials/2D_breakout_game_Phaser) 또는 [Cyber Orb built in Phaser](/ko/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation) 튜토리얼을 확인해 볼 수 있습니다. [Games section on MDN](/ko/docs/Games)의 섹션에서 더 많은 지식과 영감을 얻어보세요.

당신은 또한 [이 튜토리얼 시리즈의 메인 페이지](/ko/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)로 돌아갈 수 있습니다. 즐겁게 코딩하세요!

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
