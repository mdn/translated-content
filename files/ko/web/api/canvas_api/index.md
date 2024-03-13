---
title: Canvas API
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

**Canvas API**는 [JavaScript](/ko/docs/Web/JavaScript)와 [HTML](/ko/docs/Web/HTML) {{HtmlElement("canvas")}} 엘리먼트를 통해 그래픽을 그리기위한 수단을 제공합니다. 무엇보다도 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용됩니다.

Canvas API는 주로 2D 그래픽에 중점을 두고 있습니다. [WebGL API](/ko/docs/Web/WebGL) 또한 `<canvas>` 엘리먼트를 사용하며, 하드웨어 가속 2D 및 3D 그래픽을 그립니다.

## 기본 예시

canvas에 초록색 사각형을 그리는 간단한 예시입니다.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

{{domxref("Document.getElementById()")}} 메소드는 HTML `<canvas>` 엘리먼트에 대한 참조를 얻습니다. 그 다음, {{domxref("HTMLCanvasElement.getContext()")}} 메소드는 엘리먼트의 컨텍스트(렌더링될 그리기의 대상)를 얻습니다.

실제 그리기는 {{domxref("CanvasRenderingContext2D")}} 인터페이스를 사용해 수행됩니다. {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} 프로퍼티는 사각형을 초록색으로 만듭니다. {{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} 메소드는 좌측 상단 코너를 (10, 10) 위치에 놓으며, 너비를 150, 높이를 100으로 지정합니다.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);
```

### 결과

{{ EmbedLiveSample('기본_예시', 700, 180) }}

## 레퍼런스

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasImageSource")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RenderingContext")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}} {{experimental_inline}}
- {{domxref("Path2D")}} {{experimental_inline}}
- {{domxref("ImageBitmapRenderingContext")}} {{experimental_inline}}

> **참고:** **노트:** `WebGLRenderingContext`에 관련된 인터페이스는 [WebGL](/ko/docs/Web/WebGL) 하위에 참조되어있습니다.

{{domxref("CanvasCaptureMediaStream")}}은 관련된 인터페이스입니다.

## 가이드 및 튜토리얼

- [Canvas 튜토리얼](/ko/docs/Web/API/Canvas_API/Tutorial)
  - : Canvas API의 기본적인 사용과 고급 기능 모두를 다루는 이해하기 쉬운 튜토리얼.
- [HTML5 Canvas 깊이 살펴보기](http://joshondesign.com/p/books/canvasdeepdive/title.html)
  - : Canvas API 및 WebGL의 실습, 자세한 소개.
- [Canvas 핸드북](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)
  - : Canvas API에 대한 유용한 레퍼런스.
- [데모: A basic ray-caster](/ko/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : Canvas를 사용한 ray-tracing 애니메이션 데모.
- [Canvas를 사용하여 비디오 조작](/ko/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : {{HTMLElement("video")}}와 {{HTMLElement("canvas")}}를 조합하여 실시간으로 비디오 데이터를 조작.

## 라이브러리

Canvas API는 굉장히 강력하지만, 사용하는 것이 항상 간단하지 않습니다. 아래에 나열된 라이브러리들은 캔버스 기반 프로젝트를 더 빠르고 더 쉽게 생성할 수 있게 해줍니다.

- [EaselJS](http://www.createjs.com/easeljs)는 게임, 생성 예술 및 기타 고도의 그래픽 경험을 쉽게 생성할 수 있게 해주는 오픈소스 캔버스 라이브러리입니다.
- [Fabric.js](http://fabricjs.com)는 SVG 파싱 기능을 갖춘 오픈소스 캔버스 라이브러리입니다.
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/)는 캔버스 기반 데이터 열지도를 생성하기위한 오픈소스 라이브러리입니다.
- [JavaScript InfoVis Toolkit](http://thejit.org/)은 인터렉티브한 데이터 시각화를 생성합니다.
- [Konva.js](https://konvajs.github.io/)는 데스크탑 및 모바일 애플리케이션을 위한 2D 캔버스 라이브러리입니다.
- [p5.js](https://p5js.org/)는 예술가, 디자이너, 교육자 및 입문자를 위한 캔버스 그리기 기능의 모든 세트를 포함하고 있습니다.
- [Paper.js](http://paperjs.org/)는 HTML5 Canvas 위에서 실행되는 오픈소스 벡터 그래픽 스크립팅 프레임워크입니다.
- [Phaser](https://phaser.io/)는 Canvas 및 WebGL 기반의 브라우저 게임을 위한 빠르고, 자유롭고, 재미있는 오픈소스 프레임워크입니다.
- [Processing.js](http://processingjs.org)는 Processing 시각화 언어의 포트입니다.
- [Pts.js](https://ptsjs.org)는 canvas 및 SVG를 사용한 창의적인 코딩 및 시각화를 위한 라이브러리입니다.
- [Rekapi](https://github.com/jeremyckahn/rekapi)는 Canvas를 위한 애니메이션 키 프레임 API입니다.
- [Scrawl-canvas](http://scrawl.rikweb.org.uk/)는 2D 캔버스 엘리먼트를 생성하고 조작하기위한 오픈소스 JavaScript 라이브러리입니다.
- [ZIM](http://zimjs.com) 프레임워크는 canvas에서의 창의적인 코딩을 위한 편의성, 컴포넌트 및 컨트롤을 제공하는 프레임워크입니다. 접근성 및 다채로운 튜토리얼을 포함합니다.

> **참고:** **노트:** WebGL을 사용하는 2D 및 3D를 위한 [WebGL API](/ko/docs/Web/WebGL)를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

Mozilla 애플리케이션은 Gecko 1.8([Firefox 1.5](/ko/docs/Mozilla/Firefox/Releases/1.5))을 시작으로 `<canvas>`에 대한 지원을 받았습니다. OS X Dashboard 및 Safari를 위해 Apple이 소개한 것이 캔버스 엘리먼트의 기원입니다. Internet Explorer는 9버전부터 `<canvas>`를 지원하며, 이전 버전의 IE에서는 Google의 [Explorer Canvas](https://github.com/arv/explorercanvas) 프로젝트의 스크립트를 추가하여 `<canvas>`에 대한 지원을 효과적으로 추가할 수 있습니다. Google Chrome 및 Opera 9 또한 `<canvas>`를 지원합니다.

## 함께 보기

- [WebGL](/ko/docs/Web/WebGL)
