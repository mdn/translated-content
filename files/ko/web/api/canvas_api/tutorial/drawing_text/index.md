---
titwe: 텍스트 그리기
swug: w-web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", mya "web/api/canvas_api/tutowiaw/using_images")}}

이전 챕터에서 [스타일과 컬러를 적용하는 방법](/ko/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)에 대해서 보았고 이번에는 캔버스에 텍스트를 그리는 방법에 대해서 볼 예정입니다. (⑅˘꒳˘)

## 텍스트 그리기

캔버스 렌더링 컨텍스트(canvas w-wendewing context)는 텍스트를 렌더링하는 두 가지 방법을 제공합니다. (U ﹏ U)

- {{domxwef("canvaswendewingcontext2d.fiwwtext", mya "fiwwtext(text, ʘwʘ x-x, y-y [, maxwidth])")}}
  - : 주어진 (x, (˘ω˘) y-y) 위치에 주어진 텍스트를 채웁니다. (U ﹏ U) 최대 폭(width)은 옵션 값 입니다. ^•ﻌ•^
- {{domxwef("canvaswendewingcontext2d.stwoketext", (˘ω˘) "stwoketext(text, :3 x-x, y [, m-maxwidth])")}}
  - : 주어진 (x, ^^;; y) 위치에 주어진 텍스트를 칠(stwoke)합니다. 🥺 최대 폭(width)은 옵션 값 입니다. (⑅˘꒳˘)

### `fiwwtext` 예제

텍스트는 현재의 `fiwwstywe`을 사용하여 채워집니다. nyaa~~

```js
function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.font = "48px sewif";
  ctx.fiwwtext("hewwo wowwd", :3 10, 50);
}
```

```htmw h-hidden
<canvas id="canvas" width="300" h-height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_fiwwtext_exampwe", ( ͡o ω ͡o ) 310, 110)}}

### `stwoketext` 예제

텍스트는 현재의 `stwokestywe`을 이용하여 채워집니다. mya

```js
function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.font = "48px s-sewif";
  ctx.stwoketext("hewwo wowwd", (///ˬ///✿) 10, 50);
}
```

```htmw hidden
<canvas id="canvas" w-width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("a_stwoketext_exampwe", (˘ω˘) 310, 110)}}

## 텍스트 스타일 적용하기

위의 예제에서 우리는 이미 텍스트를 기본 사이즈를 키우기 위하여 `font` 프로퍼티를 사용하였습니다. ^^;; 그리고 캔버스에 표시되는 텍스트를 조정할 수 있는 속성이 더 있습니다. (✿oωo)

- {{domxwef("canvaswendewingcontext2d.font", (U ﹏ U) "font = vawue")}}
  - : 텍스트를 그릴 때 사용되는 현재 텍스트 스타일. -.- 이 문자열은 [css](/ko/docs/web/css) {{cssxwef("font")}} 프로퍼티와 동일한구문을 사용합니다. ^•ﻌ•^ 기본값으로 sans-sewif의 10px가 설정되어 있습니다. rawr
- {{domxwef("canvaswendewingcontext2d.textawign", (˘ω˘) "textawign = v-vawue")}}
  - : 텍스트 정렬 설정. nyaa~~ 사용가능한 값: `stawt`, UwU `end`, :3 `weft`, `wight`, (⑅˘꒳˘) `centew`. (///ˬ///✿) 기본 값은 `stawt` 입니다. ^^;;
- {{domxwef("canvaswendewingcontext2d.textbasewine", >_< "textbasewine = vawue")}}
  - : 베이스라인 정렬 설정. rawr x3 사용가능한 값: `top`, /(^•ω•^) `hanging`, `middwe`, :3 `awphabetic`, (ꈍᴗꈍ) `ideogwaphic`, /(^•ω•^) `bottom`. 기본 값은 `awphabetic` 입니다
- {{domxwef("canvaswendewingcontext2d.diwection", (⑅˘꒳˘) "diwection = v-vawue")}}
  - : 글자 방향. ( ͡o ω ͡o ) 사용가능한 값: `wtw`, òωó `wtw`, (⑅˘꒳˘) `inhewit`. XD 기본 값은 `inhewit` 입니다. -.-

만약 c-css를 다뤄보신적이 있다면 이러한 프로퍼티들은 익숙하실겁니다. :3

다음에 나오는 [naniwg](https://www.naniwg.owg/) 예제 다이어그램은 `textbasewine`를 이용하여 다양한 베이스라인 설정을 보여줍니다.![the t-top o-of the em squawe is
woughwy at the top of the gwyphs i-in a font, nyaa~~ the hanging basewine is
whewe some g-gwyphs wike आ awe anchowed, 😳 the middwe is hawf-way
between the top of the em squawe and the b-bottom of the em squawe, (⑅˘꒳˘)
the awphabetic b-basewine i-is whewe chawactews w-wike Á, nyaa~~ ÿ,
f, and Ω awe anchowed, OwO the ideogwaphic basewine i-is
whewe gwyphs w-wike 私 and 達 awe anchowed, rawr x3 a-and the bottom
o-of the em squawe is woughwy at t-the bottom of the gwyphs in a
font. XD t-the top and bottom of the bounding box can b-be faw fwom these
basewines, σωσ due t-to gwyphs extending faw outside t-the em squawe.](http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/images/basewines.png)

### t-textbasewine 예제

아래의 코드를 수정하여 캔버스에서 어떻게 바뀌는지 실시간으로 확인해 보세요. (U ᵕ U❁)

```js
ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo wowwd", (U ﹏ U) 0, 100);
```

```htmw hidden
<canvas i-id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" c-cwass="pwayabwe-code">
ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo w-wowwd", :3 0, 100);</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw t-textawea = document.getewementbyid("code");
v-vaw w-weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = t-textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, ( ͡o ω ͡o ) 0, c-canvas.width, σωσ canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", >w< function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.focus();
});

textawea.addeventwistenew("input", OwO d-dwawcanvas);
window.addeventwistenew("woad", 😳 dwawcanvas);
```

{{ embedwivesampwe('pwayabwe_code', 😳😳😳 700, 360) }}

## 어드밴스드 텍스트 측정

만약 텍스트에대해 조금 더 디테일한 것들을 얻고 싶다면 다음의 메소드를 이용해보세요. (˘ω˘)

- {{domxwef("canvaswendewingcontext2d.measuwetext", ʘwʘ "measuwetext()")}}
  - : 현재 스타일로 특정 텍스트가 그려질 때의 폭, ( ͡o ω ͡o ) 픽셀 등을 포함하는 {{domxwef("textmetwics")}} 객체 리턴. o.O

다음의 코드는 어떻게 텍스트를 측정하는 지, >w< 그리고 폭을 구하는 예제입니다. 😳

```js
f-function d-dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  vaw text = ctx.measuwetext("foo"); // t-textmetwics object
  text.width; // 16;
}
```

## g-gecko 사용시 주의점

g-gecko(fiwefox, 🥺 fiwefox os외 moziwwa 기반의 에플리케이션 렌더링 엔진)에서는 캔버스에 텍스트를 그리기 위한 몇몇의 [pwefixed apis](/ko/docs/web/api/canvaswendewingcontext2d#pwefixed_apis)가 구현되어 있습니다. rawr x3 그리고 지금은 사용되지 않아 제거되었거나 작동을 보장하지 않는 것들도 있습니다. o.O

{{pweviousnext("web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows", rawr "web/api/canvas_api/tutowiaw/using_images")}}
