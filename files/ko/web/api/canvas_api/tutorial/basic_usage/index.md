---
title: 캔버스(Canvas) 기본 사용법
slug: Web/API/Canvas_API/Tutorial/Basic_usage
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

{{HTMLElement ( "canvas")}} {{Glossary ( "HTML")}} 엘리먼트를 살펴보는 것으로 이 튜토리얼을 시작해 보겠습니다. 이 페이지의 끝에서 캔버스 2D 컨텍스트를 설정하는 방법을 알게되고, 여러분의 브라우저에서 첫 번째 예제를 그리게 될 것입니다.

## `<canvas>` 요소

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

{{HTMLElement ( "canvas")}}는 처음에는 src 및 alt 속성이 없다는 점만 제외하면 {{HTMLElement ( "img")}} 요소처럼 보입니다. 실제로 `<canvas>` 요소에는 [`width`](/ko/docs/Web/HTML/Element/canvas#width)와 [`height`](/ko/docs/Web/HTML/Element/canvas#height)의 두 속성만 있습니다. 이것들은 모두 선택사항이며 {{Glossary ( "DOM")}} [프로퍼티](/ko/docs/Web/API/HTMLCanvasElement)를 사용하여 설정할 수도 있습니다. width 및 height 속성을 지정하지 않으면 캔버스의 처음 너비는 **300 픽셀**이고 높이는 **150 픽셀**입니다. 요소는 {{Glossary ( "CSS")}}에 의해 임의로 크기를 정할 수 있지만 렌더링하는 동안 이미지는 레이아웃 크기에 맞게 크기가 조정됩니다. CSS 크기 지정이 초기 캔버스의 비율을 고려하지 않으면 왜곡되어 나타납니다 .

> **참고:** **노트:** 만약 렌더링이 왜곡된 것처럼 보이는 경우 CSS를 사용하지 않고 `<canvas>` 속성에서 `width` 및 `height` 속성을 명시적으로 지정하십시오.

[`id`](/ko/docs/Web/HTML/Global_attributes/id) 속성(어트리뷰트)는 `<canvas>` 요소에 국한되지 않는 글로벌HTML 속성 ([global HTML attributes](/ko/docs/Web/HTML/Global_attributes) )중 하나로, 모든 HTML 요소에 적용 ( [`class`](/ko/docs/Web/HTML/Global_attributes/class) 등등)될 수 있습니다. 대체로 항상 `id` 속성을 사용해 주는것이 좋은데, 이는 스크립트 내에서 구분을 쉽게 해 줄 수 있기 때문입니다.

`<canvas>`요소는 일반적인 이미지 ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…) 처럼 스타일을 적용시킬 수 있습니다. 하지만 이 방법은 실제 캔버스 위에 그리는 것에는 영향을 끼치지 않습니다. 이 방법이 어떻게 사용되는지는 [해당 챕터](/ko/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)에서 확인 할 수 있습니다. 캔버스에 스타일링이 따로 지정 되있지 않았다면, 캔버스 스타일은 투명으로 설정되어있습니다.

### 대체 콘텐츠

`<canvas>` 요소는 {{HTMLElement("video")}}, {{HTMLElement("audio")}} 혹은 {{HTMLElement("picture")}}처럼 {{HTMLElement("img")}}와는 달리, 인터넷 익스플로러 9 이하의 버전이나 텍스트기반 브라우저 등과 같은, 캔버스를 지원하지 않는 오래된 브라우저들을 위한 대체 컨텐츠를 정의하기 쉽습니다. 여러분은 그러한 브라우저들을 위한 대체 컨텐츠를 제공해야 합니다.

대체 컨텐츠를 제공하는 것은 매우 간단합니다. `<canvas>`태그 안에 대체 컨텐츠를 삽입합니다. `<canvas>`태그 를 지원하지 않는 브라우저는 컨테이너를 무시하고 컨테이너 내부의 대체 콘텐츠를 렌더링 합니다. `<canvas>`를 지원하는 브라우저는 컨테이너 내부의 내용을 무시하고 캔버스를 정상적으로 렌더링합니다.

예를 들어, 캔버스 내용에 대한 텍스트 설명을 제공하거나 동적으로 렌더링 된 내용의 정적 이미지를 제공 할 수 있습니다. 이것은 다음과 같이 보일 수있습니다:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

사용자에게 캔버스를 지원하는 다른 브라우저를 사용하도록 하는 것은 캔버스를 해석하지 못하는 사용자에게 전혀 도움이 되지 않습니다. 유용한 대체 텍스트나 하위 DOM을 제공하는 것이 [캔버스에 더 쉽게 접근할수 있도록](/ko/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility) 도움이 될 것입니다.

### `</canvas>` 태그 필수

대체 컨텐츠가 제공되는 방식때문에, {{HTMLElement("img")}} 요소와 달리, {{HTMLElement("canvas")}} 요소는 닫는 태그(`</canvas>`)가 필요합니다. 닫는 태그가 없다면, 문서의 나머지 부분이 대체 컨텐츠로 간주되고 보이지 않을 것입니다.

대체 컨텐츠가 필요하지 않다면, 단순히 `<canvas id="foo" ...></canvas>`가 모든 미지원 브라우저에서 완전하게 호환됩니다.

## 렌더링 컨텍스트

{{HTMLElement("canvas")}} 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 **렌더링 컨텍스**(**rendering contexts**)를 노출하여, 출력할 컨텐츠를 생성하고 다루게 됩니다. 본 튜토리얼에서는, 2D 렌더링 컨텍스트를 집중적으로 다룹니다. 다른 컨텍스트는 다른 렌더링 타입을 제공합니다. 예를 들어, [WebGL](/ko/docs/Web/WebGL)은 [OpenGL ES](http://www.khronos.org/opengles/) 을 기반으로 하는 3D 컨텍스트를 사용합니다.

캔버스는 처음에 비어있습니다. 무언가를 표시하기 위해서, 어떤 스크립트가 랜더링 컨텍스트에 접근하여 그리도록 할 필요가 있습니다. {{HTMLElement("canvas")}} 요소는 {{domxref("HTMLCanvasElement.getContext", "getContext()")}} 메서드를 이용해서, 랜더링 컨텍스트와 (렌더링 컨텍스트의) 그리기 함수들을 사용할 수 있습니다. getContext() 메서드는 렌더링 컨텍스트 타입을 지정하는 하나의 파라메터를 가집니다. 본 튜토리얼에서 다루고 있는 2D 그래픽의 경우, {{domxref("CanvasRenderingContext2D")}}을 얻기위해 `"2d"`로 지정합니다.

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```

첫 번째 줄의 스크립트는 {{domxref ( "document.getElementById()")}} 메서드를 호출하여 {{HTMLElement ( "canvas")}} 요소를 표시할 DOM을 검색합니다. 요소가 있으면 `getContext()` 메서드를 사용하여 드로잉 컨텍스트에 액세스 할 수 있습니다.

## 지원여부 검사

대체 콘텐츠는 {{HTMLElement ( "canvas")}}를 지원하지 않는 브라우저에 표시됩니다. 스크립트 역시 간단하게 `getContext()` 메소드의 존재 여부를 테스트함으로써 프로그래밍 방식으로 지원하는지를 확인할 수 있습니다. 위의 코드 예제는 다음과 같이 될 수 있습니다:

```js
var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## 템플릿 뼈대

다음은 이후의 예제들에서 시작점으로 사용될 수 있는 가장 최소한의 템플릿입니다.

> **참고:** **알아두기:** HTML 내에 스크립트(script)를 사용하는것은 좋은 연습 방법이 아닙니다. 다음의 예시에서는 간결하게 나타내기 위해 사용 한 것입니다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

위 스크립트에 `draw()` 함수 문서가 호출되었는데, 이는 문서가 {{domxref("Window/load_event", "load")}} 이벤트를 수신하여 페이지 로딩이 완료될 때 한번 실행됩니다. 이 함수 혹은 이와 유사한 함수는, 페이지가 처음 로딩되는 한, {{domxref("WindowTimers.setTimeout", "window.setTimeout()")}}, {{domxref("WindowTimers.setInterval", "window.setInterval()")}}, 혹은 또 다른 이벤트 핸들러 등을 이용하여 호출될 수 있습니다.

다음은 템플릿이 실제로 어떻게 실행되는지를 보여줍니다. 보이는 바와 같이, 초기에 blank 로 보여집니다.

{{EmbedLiveSample("A_skeleton_template", 160, 160)}}

## 기본 예제

먼저 두 개의 직사각형을 그린 간단한 예제를 보도록하겠습니다. 그 중 하나는 투명도(alpha transparency)를가집니다. 나중에 이 예제가 어떻게 작동하는지 자세히 살펴 보겠습니다.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <script type="application/javascript">
      function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 50, 50);
        }
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

이 예제는 다음과 같습니다.

{{EmbedLiveSample("A_simple_example", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
