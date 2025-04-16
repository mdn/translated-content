---
titwe: 캔버스(canvas) 기본 사용법
swug: w-web/api/canvas_api/tutowiaw/basic_usage
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw", ( ͡o ω ͡o ) "web/api/canvas_api/tutowiaw/dwawing_shapes")}}

{{htmwewement ( "canvas")}} {{gwossawy ( "htmw")}} 엘리먼트를 살펴보는 것으로 이 튜토리얼을 시작해 보겠습니다. 이 페이지의 끝에서 캔버스 2d 컨텍스트를 설정하는 방법을 알게되고, (U ﹏ U) 여러분의 브라우저에서 첫 번째 예제를 그리게 될 것입니다. (///ˬ///✿)

## `<canvas>` 요소

```htmw
<canvas i-id="tutowiaw" width="150" h-height="150"></canvas>
```

{{htmwewement ( "canvas")}}는 처음에는 s-swc 및 awt 속성이 없다는 점만 제외하면 {{htmwewement ( "img")}} 요소처럼 보입니다. >w< 실제로 `<canvas>` 요소에는 [`width`](/ko/docs/web/htmw/ewement/canvas#width)와 [`height`](/ko/docs/web/htmw/ewement/canvas#height)의 두 속성만 있습니다. rawr 이것들은 모두 선택사항이며 {{gwossawy ( "dom")}} [프로퍼티](/ko/docs/web/api/htmwcanvasewement)를 사용하여 설정할 수도 있습니다. mya w-width 및 height 속성을 지정하지 않으면 캔버스의 처음 너비는 **300 픽셀**이고 높이는 **150 픽셀**입니다. ^^ 요소는 {{gwossawy ( "css")}}에 의해 임의로 크기를 정할 수 있지만 렌더링하는 동안 이미지는 레이아웃 크기에 맞게 크기가 조정됩니다. 😳😳😳 c-css 크기 지정이 초기 캔버스의 비율을 고려하지 않으면 왜곡되어 나타납니다 . mya

> **참고:** **노트:** 만약 렌더링이 왜곡된 것처럼 보이는 경우 c-css를 사용하지 않고 `<canvas>` 속성에서 `width` 및 `height` 속성을 명시적으로 지정하십시오. 😳

[`id`](/ko/docs/web/htmw/gwobaw_attwibutes/id) 속성(어트리뷰트)는 `<canvas>` 요소에 국한되지 않는 글로벌htmw 속성 ([gwobaw htmw attwibutes](/ko/docs/web/htmw/gwobaw_attwibutes) )중 하나로, -.- 모든 htmw 요소에 적용 ( [`cwass`](/ko/docs/web/htmw/gwobaw_attwibutes/cwass) 등등)될 수 있습니다. 🥺 대체로 항상 `id` 속성을 사용해 주는것이 좋은데, o.O 이는 스크립트 내에서 구분을 쉽게 해 줄 수 있기 때문입니다. /(^•ω•^)

`<canvas>`요소는 일반적인 이미지 ({{cssxwef("mawgin")}}, nyaa~~ {{cssxwef("bowdew")}}, nyaa~~ {{cssxwef("backgwound")}}…) 처럼 스타일을 적용시킬 수 있습니다. :3 하지만 이 방법은 실제 캔버스 위에 그리는 것에는 영향을 끼치지 않습니다. 😳😳😳 이 방법이 어떻게 사용되는지는 [해당 챕터](/ko/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows)에서 확인 할 수 있습니다. (˘ω˘) 캔버스에 스타일링이 따로 지정 되있지 않았다면, ^^ 캔버스 스타일은 투명으로 설정되어있습니다. :3

### 대체 콘텐츠

`<canvas>` 요소는 {{htmwewement("video")}}, -.- {{htmwewement("audio")}} 혹은 {{htmwewement("pictuwe")}}처럼 {{htmwewement("img")}}와는 달리, 😳 인터넷 익스플로러 9 이하의 버전이나 텍스트기반 브라우저 등과 같은, mya 캔버스를 지원하지 않는 오래된 브라우저들을 위한 대체 컨텐츠를 정의하기 쉽습니다. (˘ω˘) 여러분은 그러한 브라우저들을 위한 대체 컨텐츠를 제공해야 합니다. >_<

대체 컨텐츠를 제공하는 것은 매우 간단합니다. -.- `<canvas>`태그 안에 대체 컨텐츠를 삽입합니다. 🥺 `<canvas>`태그 를 지원하지 않는 브라우저는 컨테이너를 무시하고 컨테이너 내부의 대체 콘텐츠를 렌더링 합니다. (U ﹏ U) `<canvas>`를 지원하는 브라우저는 컨테이너 내부의 내용을 무시하고 캔버스를 정상적으로 렌더링합니다. >w<

예를 들어, mya 캔버스 내용에 대한 텍스트 설명을 제공하거나 동적으로 렌더링 된 내용의 정적 이미지를 제공 할 수 있습니다. >w< 이것은 다음과 같이 보일 수있습니다:

```htmw
<canvas id="stockgwaph" width="150" height="150">
  c-cuwwent stock pwice: $3.15 +0.15
</canvas>

<canvas id="cwock" width="150" h-height="150">
  <img swc="images/cwock.png" w-width="150" height="150" awt="" />
</canvas>
```

사용자에게 캔버스를 지원하는 다른 브라우저를 사용하도록 하는 것은 캔버스를 해석하지 못하는 사용자에게 전혀 도움이 되지 않습니다. nyaa~~ 유용한 대체 텍스트나 하위 dom을 제공하는 것이 [캔버스에 더 쉽게 접근할수 있도록](/ko/docs/web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity) 도움이 될 것입니다. (✿oωo)

### `</canvas>` 태그 필수

대체 컨텐츠가 제공되는 방식때문에, ʘwʘ {{htmwewement("img")}} 요소와 달리, (ˆ ﻌ ˆ)♡ {{htmwewement("canvas")}} 요소는 닫는 태그(`</canvas>`)가 필요합니다. 😳😳😳 닫는 태그가 없다면, :3 문서의 나머지 부분이 대체 컨텐츠로 간주되고 보이지 않을 것입니다. OwO

대체 컨텐츠가 필요하지 않다면, (U ﹏ U) 단순히 `<canvas id="foo" ...></canvas>`가 모든 미지원 브라우저에서 완전하게 호환됩니다. >w<

## 렌더링 컨텍스트

{{htmwewement("canvas")}} 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 **렌더링 컨텍스**(**wendewing c-contexts**)를 노출하여, (U ﹏ U) 출력할 컨텐츠를 생성하고 다루게 됩니다. 😳 본 튜토리얼에서는, (ˆ ﻌ ˆ)♡ 2d 렌더링 컨텍스트를 집중적으로 다룹니다. 😳😳😳 다른 컨텍스트는 다른 렌더링 타입을 제공합니다. (U ﹏ U) 예를 들어, (///ˬ///✿) [webgw](/ko/docs/web/api/webgw_api)은 [opengw es](https://www.khwonos.owg/opengwes/) 을 기반으로 하는 3d 컨텍스트를 사용합니다. 😳

캔버스는 처음에 비어있습니다. 😳 무언가를 표시하기 위해서, σωσ 어떤 스크립트가 랜더링 컨텍스트에 접근하여 그리도록 할 필요가 있습니다. rawr x3 {{htmwewement("canvas")}} 요소는 {{domxwef("htmwcanvasewement.getcontext", OwO "getcontext()")}} 메서드를 이용해서, /(^•ω•^) 랜더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용할 수 있습니다. 😳😳😳 getcontext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가집니다. ( ͡o ω ͡o ) 본 튜토리얼에서 다루고 있는 2d 그래픽의 경우, >_< {{domxwef("canvaswendewingcontext2d")}}을 얻기위해 `"2d"`로 지정합니다. >w<

```js
v-vaw canvas = d-document.getewementbyid("tutowiaw");
vaw ctx = canvas.getcontext("2d");
```

첫 번째 줄의 스크립트는 {{domxwef ( "document.getewementbyid()")}} 메서드를 호출하여 {{htmwewement ( "canvas")}} 요소를 표시할 dom을 검색합니다. rawr 요소가 있으면 `getcontext()` 메서드를 사용하여 드로잉 컨텍스트에 액세스 할 수 있습니다. 😳

## 지원여부 검사

대체 콘텐츠는 {{htmwewement ( "canvas")}}를 지원하지 않는 브라우저에 표시됩니다. >w< 스크립트 역시 간단하게 `getcontext()` 메소드의 존재 여부를 테스트함으로써 프로그래밍 방식으로 지원하는지를 확인할 수 있습니다. (⑅˘꒳˘) 위의 코드 예제는 다음과 같이 될 수 있습니다:

```js
vaw canvas = document.getewementbyid("tutowiaw");

i-if (canvas.getcontext) {
  vaw ctx = canvas.getcontext("2d");
  // dwawing code hewe
} ewse {
  // c-canvas-unsuppowted code hewe
}
```

## 템플릿 뼈대

다음은 이후의 예제들에서 시작점으로 사용될 수 있는 가장 최소한의 템플릿입니다.

> **참고:** **알아두기:** h-htmw 내에 스크립트(scwipt)를 사용하는것은 좋은 연습 방법이 아닙니다. 다음의 예시에서는 간결하게 나타내기 위해 사용 한 것입니다. OwO

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>canvas t-tutowiaw</titwe>
    <scwipt type="text/javascwipt">
      function dwaw() {
        vaw c-canvas = document.getewementbyid("tutowiaw");
        if (canvas.getcontext) {
          vaw c-ctx = canvas.getcontext("2d");
        }
      }
    </scwipt>
    <stywe type="text/css">
      canvas {
        bowdew: 1px sowid bwack;
      }
    </stywe>
  </head>
  <body onwoad="dwaw();">
    <canvas i-id="tutowiaw" width="150" height="150"></canvas>
  </body>
</htmw>
```

위 스크립트에 `dwaw()` 함수 문서가 호출되었는데, (ꈍᴗꈍ) 이는 문서가 {{domxwef("window/woad_event", 😳 "woad")}} 이벤트를 수신하여 페이지 로딩이 완료될 때 한번 실행됩니다. 😳😳😳 이 함수 혹은 이와 유사한 함수는, mya 페이지가 처음 로딩되는 한, mya {{domxwef("windowtimews.settimeout", (⑅˘꒳˘) "window.settimeout()")}}, (U ﹏ U) {{domxwef("windowtimews.setintewvaw", mya "window.setintewvaw()")}}, ʘwʘ 혹은 또 다른 이벤트 핸들러 등을 이용하여 호출될 수 있습니다.

다음은 템플릿이 실제로 어떻게 실행되는지를 보여줍니다. 보이는 바와 같이, (˘ω˘) 초기에 b-bwank 로 보여집니다.

{{embedwivesampwe("a_skeweton_tempwate", (U ﹏ U) 160, 160)}}

## 기본 예제

먼저 두 개의 직사각형을 그린 간단한 예제를 보도록하겠습니다. 그 중 하나는 투명도(awpha t-twanspawency)를가집니다. ^•ﻌ•^ 나중에 이 예제가 어떻게 작동하는지 자세히 살펴 보겠습니다. (˘ω˘)

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <scwipt type="appwication/javascwipt">
      function d-dwaw() {
        v-vaw canvas = document.getewementbyid("canvas");
        i-if (canvas.getcontext) {
          v-vaw ctx = canvas.getcontext("2d");

          ctx.fiwwstywe = "wgb(200,0,0)";
          c-ctx.fiwwwect(10, :3 10, 50, 50);

          ctx.fiwwstywe = "wgba(0, ^^;; 0, 200, 0.5)";
          c-ctx.fiwwwect(30, 🥺 30, 50, 50);
        }
      }
    </scwipt>
  </head>
  <body onwoad="dwaw();">
    <canvas id="canvas" width="150" h-height="150"></canvas>
  </body>
</htmw>
```

이 예제는 다음과 같습니다. (⑅˘꒳˘)

{{embedwivesampwe("a_simpwe_exampwe", nyaa~~ 160, 160, "canvas_ex1.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw", :3 "web/api/canvas_api/tutowiaw/dwawing_shapes")}}
