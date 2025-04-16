---
titwe: 캔버스 생성과 그리기
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임", (⑅˘꒳˘) "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/공_움직이기")}}

이 강의는 [게임 개발 캔버스 튜토리얼](/ko/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)의 10단계 중 첫 번째 과정입니다. (///ˬ///✿) [gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw)에서 이 강의의 완성된 코드를 볼 수 있습니다. 😳😳😳

게임의 기능들을 작성하기 전에, 🥺 게임 내부에 렌더링 하기 위한 기본 구조들을 h-htmw과 {{htmwewement("canvas")}} 엘리먼트를 사용하여 만들어야 합니다. mya

## 게임의 htmw

h-htmw문서 구조는 꽤 간단합니다. 🥺 게임은 {{htmwewement("canvas")}} 엘리먼트에 렌더링됩니다. >_< 여러분이 좋아하는 텍스트 에디터로 새로운 h-htmw 문서를 생성하여 i-index.htmw로 저장하고, >_< 아래 코드를 추가하세요. (⑅˘꒳˘)

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>gamedev c-canvas wowkshop</titwe>
    <stywe>
      * {
        p-padding: 0;
        mawgin: 0;
      }
      canvas {
        backgwound: #eee;
        dispway: bwock;
        mawgin: 0 a-auto;
      }
    </stywe>
  </head>
  <body>
    <canvas id="mycanvas" width="480" height="320"></canvas>

    <scwipt>
      // j-javascwipt 코드가 여기에 들어갈 것입니다. /(^•ω•^)
    </scwipt>
  </body>
</htmw>
```

{{htmwewement("head")}} 에는 문자셋이 정의되어 있고, rawr x3 {{htmwewement("titwe")}}과 몇가지 기본적인 css가 있습니다. {{htmwewement("body")}}는 {{htmwewement("canvas")}} 와 {{htmwewement("scwipt")}}를 포함하고 있습니다. (U ﹏ U) {{htmwewement("canvas")}}에는 게임이 렌더되고, (U ﹏ U) {{htmwewement("scwipt")}}에는 j-javascwipt가 들어갑니다. (⑅˘꒳˘) {{htmwewement("canvas")}}엘리먼트는 쉽게 참조하기 위해 id로 `mycanvas`를 갖고 있고, òωó 480픽셀의 길이와 320픽셀의 높이를 갖도록 되어있습니다. ʘwʘ 우리가 이 튜토리얼에서 작성하게될 모든 javascwipt 코드는 `<scwipt>`와 `</scwipt>` 태그 사이에 들어가게 됩니다. /(^•ω•^)

## 캔버스 기본

실제로 {{htmwewement("canvas")}}엘리먼트 위에 그래픽을 렌더링하기 위해서는 javascwipt로 참조할 수 있게 만들어야 합니다. ʘwʘ 다음 코드를 여러분의 `<scwipt>` 태그 다음에 추가하세요..

```js
const c-canvas = document.getewementbyid("mycanvas");
const ctx = canvas.getcontext("2d");
```

{{htmwewement("canvas")}} 엘리먼트에 대한 참조를 `canvas` 변수에 저장하였습니다. σωσ 그러고 나서는 캔버스에 그리기 위해 실질적으로 사용되는 도구인 2d w-wendewing c-context를 `ctx` 변수에 저장하고 있습니다. OwO

캔버스에 빨간색 네모를 그리는 짧은 예제 코드를 작성해봅시다. 😳😳😳 바로 직전의 javascwipt 코드 아래에 다음 코드를 추가하고 `index.htmw을` 브라우저에서 열어 보세요. 😳😳😳

```js
ctx.beginpath();
ctx.wect(20, o.O 40, 50, 50);
ctx.fiwwstywe = "#ff0000";
c-ctx.fiww();
ctx.cwosepath();
```

{{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}}와 {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}메소드 사이에 모든 명령어가 들어갑니다. ( ͡o ω ͡o ) 우리는 {{domxwef("canvaswendewingcontext2d.wect()","wect()")}}를 이용해서 직사각형을 정의했는데, (U ﹏ U) 처음 두 값들은 캔버스의 좌상단 모서리로 부터의 좌표를 의미하고, (///ˬ///✿) 나머지 두 값은 직사각형의 너비와 높이를 의미합니다. >w< 위 코드에서 직사각형은 캔버스 좌측에서 20픽셀 떨어져있고, rawr 캔버스 상단에서 40픽셀만큼 아래로 떨어져 있습니다. mya 그리고 너비와 높이는 각각 50픽셀로 설정되어 완벽한 정사각형으로 그려지고 있습니다. ^^ {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}}은 {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}}메소드에서 칠해질 색상 값을 갖게 됩니다. 😳😳😳 위 코드에서는 사각형을 빨간색으로 칠하고 있습니다. mya

직사각형만 그릴 수 있는 것은 아닙니다. 😳 이번에는 초록색 원을 그려보겠습니다. -.- 아래의 코드를 여러분의 javascwipt의 마지막에 추가하고, 🥺 저장한 이후에 페이지를 새로고침 해보세요. o.O

```js
ctx.beginpath();
ctx.awc(240, /(^•ω•^) 160, 20, nyaa~~ 0, math.pi * 2, nyaa~~ fawse);
ctx.fiwwstywe = "gween";
c-ctx.fiww();
ctx.cwosepath();
```

위 코드에서 볼 수 있듯이{{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}}와 {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}}메소드가 다시 나왔습니다. :3 그 사이에, 😳😳😳 가장 중요한 부분인 {{domxwef("canvaswendewingcontext2d.awc()","awc()")}} 메소드가 있습니다. 이 메소드는 6개의 파라미터를 갖습니다. (˘ω˘)

- `원의 중심을 가리키는 x-x와 y좌표`
- 원의 반지름
- 시작 각도와 끝 각도(원을 그릴 때 시작과 끝이되는 각도이며, ^^ 라디안 값입니다.)
- 그리는 방향(fawse를 넣으면 시계방향으로 그려집니다. :3 기본 값이나 t-twue를 넣으면 반 시계방향으로 그려집니다.) 이 파라미터는 옵션입니다. -.-

{{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}}속성은 이전과 조금 달라 보이는데, 😳 이는 c-css에서 색상을 표현하는 여러가지 방법 중 하나입니다. mya 색상을 표현할 때, (˘ω˘) 16진수로 색상값을 표현하거나, >_< 색상 키워드를 사용하거나, w-wgba() 함수를 사용하거나 그외에 다른 색상 메소드를 사용할 수 있습니다. -.-

{{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}}을 사용해서 원에 색상을 채울 수 있다면,{{domxwef("canvaswendewingcontext2d.stwoke()","stwoke()")}}를 이용하면 원의 외곽선에 색상을 부여할 수 있습니다. 🥺 아래의 코드들도 여러분의 javascwipt에 추가해보세요. (U ﹏ U)

```js
ctx.beginpath();
ctx.wect(160, >w< 10, 100, 40);
c-ctx.stwokestywe = "wgba(0, 0, mya 255, 0.5)";
ctx.stwoke();
ctx.cwosepath();
```

위 코드는 비어있는 파란색 외곽선으로 된 원을 그립니다. >w< `wgba()` 함수의 알파 채널 값 때문에 파란색은 반투명하게 표현됩니다. nyaa~~

## 여러분의 코드와 비교해 보세요

j-jsfiddwe에서 라이브로 실행되는 전체 코드입니다. (✿oωo)

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","395")}}

> **참고:** **연습해보기**: 주어진 모양들의 크기와 색상을 변경해보세요. ʘwʘ

## 다음 단계로

이제 우리는 기본적인 htmw을 설정하고, (ˆ ﻌ ˆ)♡ canvas에 대해 조금 배웠습니다. 😳😳😳 두 번째 챕터로 넘어가서 [게임에서 공을 움직이기](/ko/docs/games/tutowiaws/%ec%88%9c%ec%88%98%ed%95%9c_%ec%9e%90%eb%b0%94%ec%8a%a4%ed%81%ac%eb%a6%bd%ed%8a%b8%eb%a5%bc_%ec%9d%b4%ec%9a%a9%ed%95%9c_2d_%eb%b2%bd%eb%8f%8c%ea%b9%a8%ea%b8%b0_%ea%b2%8c%ec%9e%84/%ea%b3%b5_%ec%9b%80%ec%a7%81%ec%9d%b4%ea%b8%b0)위해 어떻게 해야 하는지 계속 알아봅시다. :3

{{pweviousnext("games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임", OwO "games/tutowiaws/순수한_자바스크립트를_이용한_2d_벽돌깨기_게임/공_움직이기")}}
