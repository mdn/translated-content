---
title: WebGL 찾기
slug: Web/API/WebGL_API/By_example/Detect_WebGL
---

{{PreviousNext("Learn/WebGL/By_example","Learn/WebGL/By_example/Clearing_with_colors")}}

이 예시는 어떻게 {{Glossary("WebGL")}} 랜더링 컨텐츠를 찾고, 유저에게 결과를 보고할지를 보여줍니다.

{{EmbedLiveSample("webgl_기능_검색",660,150)}}

### WebGL 기능 검색

이 첫 예시에서, 우리는 브라우저가 {{Glossary("WebGL")}}를 지원하는지 아닌 지를 확인합니다. 우리는 {{domxref("HTMLCanvasElement","canvas")}} element로 부터 {{domxref("WebGLRenderingContext","WebGL rendering context","",1)}}을 얻기 위하여 노력합니다. {{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}}는 당신이 설정하고 그래픽 기계의 상태를 쿼리하고, WebGl에 데이터를 전송하고, 그리기 명령어들을 실행할 수 있는 인터페이스입니다.

한 문장 인터페이스에서 그래픽 기계의 상태를 저장하는 것은 {{Glossary("WebGL")}}에 고유하지 않습니다. 이것은 또한 다른 그래픽 {̣{Glossary("API")}}, {{domxref("CanvasRenderingContext2D","canvas 2D rendering context", "", 1)}}에 의해 행해집니다. 하지만 특성과 당신이 만드는 변수들은 각 {̣{Glossary("API")}}에서 다를 수 있습니다.

```html
<p>[ Here would go the result of WebGL feature detection ]</p>
<button>Press here to detect WebGLRenderingContext</button>
```

```css
body {
  text-align: center;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it.
window.addEventListener(
  "load",
  function () {
    var paragraph = document.querySelector("p"),
      button = document.querySelector("button");
    // Adding click event handler to button.
    button.addEventListener("click", detectWebGLContext, false);
    function detectWebGLContext() {
      // Create canvas element. The canvas is not added to the
      // document itself, so it is never displayed in the
      // browser window.
      var canvas = document.createElement("canvas");
      // Get WebGLRenderingContext from canvas element.
      var gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      // Report the result.
      if (gl && gl instanceof WebGLRenderingContext) {
        paragraph.innerHTML = "Congratulations! Your browser supports WebGL.";
      } else {
        paragraph.innerHTML =
          "Failed to get WebGL context. " +
          "Your browser or device may not support WebGL.";
      }
    }
  },
  false,
);
```

이 예시 코드는 [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl)에서도 확인 가능합니다.

{{PreviousNext("Learn/WebGL/By_example","Learn/WebGL/By_example/Clearing_with_colors")}}
