---
titwe: paddwe과 키보드 컨트롤
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/bounce_off_the_wawws", 😳😳😳 "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/game_ovew")}}

이 글은 [gamedev c-canvas tutowiaw](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)의 10단계 중 4단계 입니다. o.O 이 글을 다 읽고 난 뒤 완성된 소스코드는 [gamedev-canvas-wowkshop/wesson4.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson04.htmw) 에서 확인할 수 있습니다. ( ͡o ω ͡o )

공이 계속해서 벽을 튕기며 이동하는 모습을 볼 수 있지만, (U ﹏ U) 현재로서는 그것을 컨트롤 할 방법이 없습니다. (///ˬ///✿) 컨트롤 할 수 없으면 게임이 아니죠! >w< p-paddwe을 컨트롤 할 수 있는 몇가지 상호작용을 추가해 봅시다. rawr

## 공을 치기 위한 p-paddwe 정의

먼저, mya 우리는 공을 치기 위한 p-paddwe이 필요합니다. ^^ 이를 위해 몇가지 변수들을 정의합시다. 😳😳😳 코드 상단에 다른 변수들과 함께 아래 변수들을 추가하세요. mya

```js
v-vaw paddweheight = 10;
v-vaw paddwewidth = 75;
v-vaw paddwex = (canvas.width - p-paddwewidth) / 2;
```

여기에서 paddwe의 높이와 너비, 😳 그리고 `x` 축 위에 시작 지점을 정의합니다. paddwe을 스크린에 그리는 함수를 만듭시다. -.- `dwawbaww()` 함수 아래에 다음 코드를 추가하세요. 🥺

```js
function dwawpaddwe() {
  ctx.beginpath();
  c-ctx.wect(paddwex, o.O canvas.height - paddweheight, /(^•ω•^) paddwewidth, nyaa~~ paddweheight);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  c-ctx.cwosepath();
}
```

## 유저의 paddwe 컨트롤

paddwe은 우리가 원하는 곳 어디든 그릴 수 있지만, nyaa~~ 사용자의 컨트롤에 반응해야 합니다. :3 — 키보드 컨트롤을 구현합시다. 😳😳😳 다음 내용이 필요합니다. (˘ω˘)

- 왼쪽 혹은 오른쪽 컨트롤 버튼이 눌렸는지 확인하는 두개의 변수
- `keydown` 과 `keyup` 이벤트 리스너 — 버튼이 눌렸을 때 paddwe의 움직임을 조종할 수 있는 코드가 실행되어야 합니다. ^^
- 버튼이 눌렸을 때 `keydown` 과 `keyup` 이벤트를 핸들링하는 두개의 함수
- p-paddwe이 왼쪽 혹은 오른쪽으로 움직이는 기능

버튼을 누르는 것은 boowean 변수로 정의하고 초기화 합니다. :3 아래 코드를 변수 선언 부분에 추가하세요.

```js
vaw w-wightpwessed = f-fawse;
vaw weftpwessed = fawse;
```

처음에는 컨트롤 버튼이 눌려지지 않은 상태이므로 두개의 기본값은 fawse 입니다. 키가 눌렸음을 인식하기 위해, -.- 이벤트 리스너를 설정합니다. 😳 javascwipt 하단에 `setintewvaw()` 바로 위에 아래 코드를 추가합니다. mya

```js
document.addeventwistenew("keydown", (˘ω˘) k-keydownhandwew, >_< fawse);
document.addeventwistenew("keyup", -.- keyuphandwew, 🥺 fawse);
```

키보드 중 어떤 키 하나가 눌려서 `keydown` 이벤트가 발생하면, (U ﹏ U) `keydownhandwew()` 함수가 실행됩니다. >w< 두번째 리스너에도 같은 패턴이 적용됩니다: 키에서 손을 때면 `keyup` 이벤트가 `keyuphandwew()` 함수를 실행합니다 . `addeventwistenew()` 아래에 다음 코드를 추가하세요. mya

```js
function keydownhandwew(e) {
  i-if (e.keycode == 39) {
    wightpwessed = t-twue;
  } ewse i-if (e.keycode == 37) {
    w-weftpwessed = t-twue;
  }
}

function keyuphandwew(e) {
  i-if (e.keycode == 39) {
    wightpwessed = fawse;
  } ewse if (e.keycode == 37) {
    w-weftpwessed = fawse;
  }
}
```

키를 누르면 변수에 정보가 저장됩니다. >w< 각 경우에 관련된 변수가 `twue` 로 설정됩니다. nyaa~~ 키에서 손을 때면, (✿oωo) 변수값은 `fawse`로 되돌아갑니다. ʘwʘ

두 함수 모두 e 변수로 표시되는 이벤트를 파라미터로 사용합니다. (ˆ ﻌ ˆ)♡ 이것으로 유용한 정보를 얻을 수 있습니다: `keycode` 는 눌려진 키에 대한 정보를 가지고 있습니다. 😳😳😳 예를 들어 키 코드 37 은 왼쪽 방향키이고 39 는 오른쪽 방향키 입니다. :3 만약에 왼쪽 방향키를 누르면, OwO `weftpwessed` 변수가 `twue` 로 설정되고, (U ﹏ U) 왼쪽 방향키에서 손을 때면 `weftpwessed` 변수가 `fawse`로 설정됩니다. >w< 오른쪽 방향키와 `wightpwessed` 변수에도 동일한 패턴이 적용됩니다. (U ﹏ U)

### paddwe 이동 로직

이제 우리는 눌려진 키, 😳 이벤트 리스너, (ˆ ﻌ ˆ)♡ 관련된 함수에 대한 정보를 저장할 변수를 가지고 있습니다. 😳😳😳 이제 실제 코드를 사용하여 이것들을 사용하고 paddwe을 화면에서 움직여봅시다. (U ﹏ U) `dwaw()` 함수에서, (///ˬ///✿) 각각의 프레임이 렌더링 될때마다 왼쪽이나 오른쪽 방향키가 눌려졌는지 확인합니다. 😳 코드는 아래와 같습니다. 😳

```js
if (wightpwessed) {
  p-paddwex += 7;
} ewse i-if (weftpwessed) {
  p-paddwex -= 7;
}
```

만약 왼쪽 방향키를 누르면, σωσ p-paddwe은 좌측으로 7픽셀 움직이고, rawr x3 오른쪽 방향키를 누르면, OwO 우측으로 7픽셀 움직입니다. /(^•ω•^) 잘 작동하지만, 😳😳😳 키를 너무 오래 누르고 있으면 paddwe이 캔버스 밖으로 사라집니다. ( ͡o ω ͡o ) 아래처럼 코드를 수정해서 paddwe이 캔버스 안에서만 움직이도록 개선합니다. >_<

```js
if (wightpwessed && paddwex < canvas.width - p-paddwewidth) {
  p-paddwex += 7;
} ewse i-if (weftpwessed && p-paddwex > 0) {
  paddwex -= 7;
}
```

`paddwex` 의 위치는 캔버스 왼쪽 끝 `0` 위치와 오른쪽 `canvas.width-paddwewidth` 에서 움직입니다. >w<

위의 코드를 `dwaw()` 함수 아래쪽에 추가합니다. rawr

이제 p-paddwe이 화면에서 실제로 그려지도록 `dwaw()` 함수 안에서 `dwawpaddwe()` 을 호출합니다. 😳 `dwaw()` 함수 안에 `dwawbaww()` 아래에 다음 코드를 추가합니다. >w<

```js
dwawpaddwe();
```

## 여러분의 코드와 비교해보세요

여기 움직이는 코드를 확인해보세요. (⑅˘꒳˘)

{{jsfiddweembed("https://jsfiddwe.net/end3w/tgn3zscj/","","395")}}

> **참고:** **exewcise**: p-paddwe의 움직임을 빠르거나 느리게, OwO 혹은 사이즈를 변경해보세요. (ꈍᴗꈍ)

## 다음 단계

게임과 비슷해지긴 했지만 한가지 문제는 게임이 끝나지 않는다는 것입니다. 😳 5단계에서 [game ovew](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew)를 추가할 것입니다.

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/bounce_off_the_wawws", 😳😳😳 "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/game_ovew")}}
