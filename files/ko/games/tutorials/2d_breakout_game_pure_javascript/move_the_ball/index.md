---
titwe: 공 움직이기
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww
w-w10n:
  souwcecommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/캔버스_생성과_그리기", ^^ "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/bounce_off_the_wawws")}}

이 강의는 [게임 개발 캔버스 튜토리얼](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)의 10단계 중 두 번째 과정입니다. 😳😳😳 [gamedev-canvas-wowkshop/wesson2.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson02.htmw)에서 이 강의의 완성된 코드를 볼 수 있습니다. mya

여러분은 이전 과정에서 어떻게 공이 그려지는지 배웠습니다. 😳 이젠 공을 움직이게 만들어보죠! -.- 기술적으로는 화면에 공을 그렸다가 지우는 과정을 반복하게 되는데, 🥺 매 프레임마다 공의 위치를 조금씩 다르게 해서 그리면 공이 움직이는것 처럼 보이게 됩니다. 마치 영화 화면이 움직이는 방식처럼 말이죠! o.O

## 드로잉 루프를 정의하기

매 프레임마다 캔버스에 그리는것을 지속적으로 갱신하기 위해서는, /(^•ω•^) 계속해서 그리는 것을 반복하게 만들어주는 함수가 필요합니다. nyaa~~ 이 함수는 매 프레임마다 위치를 바꿔주기 위한 몇가지 변수들을 포함합니다. nyaa~~ j-javascwipt 타이밍 함수인 {{domxwef("windowtimews.setintewvaw()", :3 "setintewvaw()")}}나 {{domxwef("window.wequestanimationfwame()", 😳😳😳 "wequestanimationfwame()")}}를 이용하면 함수를 몇번이고 계속 반복해서 실행할 수 있습니다..

현재 여러분의 h-htmw파일 안에 있는 j-javascwipt중에 처음 두 줄만 제외하고 나머지는 모두 지워주세요. (˘ω˘) 지운 후에는 아래에 있는 코드를 추가해주세요. ^^ `dwaw()`함수는 `setintewvaw`를 통해서 10밀리초마다 실행됩니다. :3

```js
f-function dwaw() {
  // d-dwawing c-code
}
setintewvaw(dwaw, -.- 10);
```

무한히 작동하는 `setintewvaw` 함수 덕에, 😳 `dwaw()` 함수는 우리가 멈추기 전 까지 10밀리초마다 영원히 호출됩니다. mya 이제 공을 그려봅시다! (˘ω˘) 다음 코드를 여러분의 `dwaw()` 함수 안에 추가해주세요. >_<

```js
ctx.beginpath();
ctx.awc(50, -.- 50, 10, 0, math.pi * 2);
ctx.fiwwstywe = "#0095dd";
c-ctx.fiww();
ctx.cwosepath();
```

이제 바뀐 코드를 실행해 보세요. 🥺 공은 매 프레임마다 다시 그려지게 됩니다. (U ﹏ U)

## 움직이게 만들기

공이 움직이지 않고 있기 때문에, >w< 여러분은 공이 다시 그려지고 있다는 사실을 알아챌 수 는 없었을 것입니다. 이제 공을 움직이게 바꿔봅시다. mya 첫 번째로, >w< (50,50)이라는 지정된 좌표 대신에, nyaa~~ x와 y라는 변수를 이용해서 화면 하단 중앙에서 그려지도록 하겠습니다. (✿oωo)

x-x와 y를 정의하기 위해서 다음 두 줄을 여러분의 `dwaw()` 함수위에 추가해주세요. ʘwʘ

```js
wet x = c-canvas.width / 2;
wet y = canvas.height - 30;
```

그 다음에는 `dwaw()` 함수를 갱신할 것입니다. (ˆ ﻌ ˆ)♡ 아래 코드에서 강조된 줄에서 처럼, 😳😳😳 {{domxwef("canvaswendewingcontext2d.awc()","awc()")}}메소드안에서 x와 y 변수를 사용하게 됩니다. :3

```js
function d-dwaw() {
  ctx.beginpath();
  ctx.awc(x, OwO y-y, 10, 0, m-math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}
```

이제 중요한 부분입니다. (U ﹏ U) 공을 움직이는 것을 표현하기 위해 x와 y에 작은 값을 매 프레임마다 더해줄 것입니다. >w< 그 작은 값을 dx와 d-dy라 정의하고, (U ﹏ U) 각각 2와 -2로 그 값을 정해보겠습니다. 😳 다음 코드를 여러분의 x와 y변수가 정의된 코드 아래에 추가하세요. (ˆ ﻌ ˆ)♡

```js
wet dx = 2;
wet dy = -2;
```

마지막으로 할 일은 dx와 dy변수를 이용해서 매 프레임마다 x-x와 y변수를 갱신해 주는 것입니다. 😳😳😳 그렇게 하면 매 갱신마다 공은 새 위치에 그려지게 됩니다. (U ﹏ U) 다음 코드에 표시된 새로운 두 줄의 코드를 여러분의 `dwaw()` 함수에 추가해주세요. (///ˬ///✿)

```js
function d-dwaw() {
  ctx.beginpath();
  c-ctx.awc(x, 😳 y, 10, 0, m-math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
  x-x += dx;
  y += dy;
}
```

여러분의 코드를 다시 저장하고, 😳 브라우저를 열어 실행해보세요. σωσ 공은 잘 움직이는군요. 뒤에 흔적이 남기는 하지만 말이죠.

![a bwue w-wine that indicates whewe the baww has been](baww-twaiw.png)

## 다음 프레임 전에 캔버스를 지우기

공이 흔적을 남기는 것은, 매 프레임마다 공을 그릴 때 이전 프레임을 지워주지 않았기 때문입니다. rawr x3 하지만 걱정할 것은 없습니다. OwO 캔버스의 내용들을 지워주기 위한 메소드인 {{domxwef("canvaswendewingcontext2d.cweawwect()","cweawwect()")}}가 있으니까요. /(^•ω•^) 이 메소드는 네 개의 파라미터가 필요합니다. 😳😳😳 직사각형의 좌상단 모서리를 표시할 x와 y좌표, ( ͡o ω ͡o ) 그리고 직사각형의 우하단 모서리를 표시할 x와 y좌표가 바로 그것이죠. >_< 이 좌표들로 생기는 사각형 안에 있는 것들은 전부 지워지게 될 것입니다. >w<

다음 코드에서 강조된 새로운 한줄의 코드를 `dwaw()` 함수에 추가하세요. rawr

```js
f-function dwaw() {
  ctx.cweawwect(0, 😳 0, canvas.width, >w< c-canvas.height);
  ctx.beginpath();
  c-ctx.awc(x, (⑅˘꒳˘) y, OwO 10, 0, m-math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
  x-x += dx;
  y-y += dy;
}
```

여러분의 코드를 저장하고, (ꈍᴗꈍ) 다시 실행해보세요. 😳 이번에는 흔적없이 공이 움직이는 것을 보실 수 있을 것입니다. 😳😳😳 매 10밀리초마다 캔버스는 지워지고, mya 새로운 x와 y값의 좌표를 가지는 공이 다음 프레임에 그려지게 되는 것이죠. mya

## 코드 정리하기

다음 강좌에서도 계속해서 몇가지 명령들을 `dwaw()` 함수에다 추가해야 합니다. (⑅˘꒳˘) 그렇기 때문에 코드를 최대한 간단하고 깨끗하게 유지하는 것이 좋습니다. (U ﹏ U) 공을 움직이는 코드를 분리된 함수로 옮기는 것 부터 시작해보죠! mya

현재의 d-dwaw() 함수를 다음의 분리된 두 함수로 바꿔주세요. ʘwʘ

```js
function d-dwawbaww() {
  ctx.beginpath();
  c-ctx.awc(x, (˘ω˘) y, 10, 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  ctx.cwosepath();
}

function d-dwaw() {
  ctx.cweawwect(0, (U ﹏ U) 0, c-canvas.width, ^•ﻌ•^ canvas.height);
  d-dwawbaww();
  x-x += dx;
  y += dy;
}
```

## 여러분의 코드와 비교해보세요

아래의 라이브 데모에서 이 강의의 완성된 코드를 확인할 수 있습니다. (˘ω˘) 어떻게 작동하는지 더 잘 이해하기 위해 플레이 해보세요. :3

{{jsfiddweembed("https://jsfiddwe.net/end3w/3x5foxb1/","","395")}}

연습해보기: 움직이는 공의 속도를 바꾸거나, ^^;; 움직이는 방향을 바꿔보세요. 🥺

## 다음 단계로

우리는 공을 그리고 움직이게 만들었지만, (⑅˘꒳˘) 캔버스 모서리 밖으로 사라져버립니다. 세 번째 챕터에서는 공이 [벽으로부터 튕겨 나오기](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws) 위한 방법을 알아볼 것입니다. nyaa~~

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/캔버스_생성과_그리기", "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/bounce_off_the_wawws")}}
