---
title: 检测 WebGL
slug: Web/API/WebGL_API/By_example/Detect_WebGL
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}

这个例子演示了如何通过渲染上下文来检测{{Glossary("WebGL")}}，并将结果报告给用户。

### WebGL 特性检测

{{EmbedLiveSample("WebGL 特性检测",660,150)}}

在第一个例子中，我们将检查浏览器是否支持{{Glossary("WebGL")}}。为此，我们将尝试从{{domxref("HTMLCanvasElement","canvas")}}元素获取{{domxref("WebGLRenderingContext","WebGL 渲染的上下文","",1)}} 。{{domxref("WebGLRenderingContext","WebGL 渲染的上下文", "", 1)}}是一个接口，通过它你可以设置和查询绘图器的状态，发送数据到 WebGL，执行绘制命令。

在单个上下文接口中保存绘图器的状态并不是{{Glossary("WebGL")}}独有的。这在其他绘图技术里也是存在的{{Glossary("API")}},比如{{domxref("CanvasRenderingContext2D","2D 渲染上下文的 canvas", "", 1)}}。然而，你可以调整的属性和变量对于每个{{Glossary("API")}}来说都是不同的。

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

这个例子的源代码可以在[GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl)上获取。

{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}
