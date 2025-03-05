---
title: WebGL 入門
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](https://www.khronos.org/webgl/) 讓網頁內容能藉由一種基於 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 的 API 的幫助，於支援此 API 的瀏覽器環境中，不需使用外掛程式就能在 HTML 的 [`canvas`](/zh-TW/docs/Web/API/Canvas_API) 元素中實現二維及三維渲染。 WebGL 程式包含了由 JavaSrcipt 及著色器(GLSL)撰寫的控制碼以及在電腦的圖形處理器( GPU )上執行的特效程式碼(著色器程式碼)。WebGL 元素可以加入其他 HTML 元素之中並與網頁或網頁背景的其他部分混合。

這篇文章將會向你介紹 WebGL 的基礎。這篇文章假設你已經對於三維圖學涉及的數學有所了解，並且它將不會被佯裝為三維圖學的教材。在我們的學習區域內有初學者指南讓你完成編程任務：[Learn WebGL for 2D and 3D graphics](/zh-TW/docs/Learn/WebGL).

在此教學文件中的程式碼範例都能在 [webgl-examples GitHub repository](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial) 之中找到。

## 準備三維渲染

首先你需要一個 canvas 元素讓 WebGL 進行渲染。下面的 HTML 定義的 canvas 元素供後續的範例繪製。

```html
<body>
  <canvas id="glCanvas" width="640" height="480"></canvas>
</body>
```

### 準備 WebGL 背景資料

> [!NOTE]
> 背景資料為 Context 翻譯而來

在下面的 JavaScript 程式碼，當指令完成讀取後會執行 `main()` 函式。目的是為了設定 WebGL 背景資料並且開始渲染內容。

```js
main();

// 從這開始
function main() {
  const canvas = document.querySelector("#glCanvas");
  // 初始化 GL context
  const gl = canvas.getContext("webgl");

  // 當 WebGL 有效才繼續執行
  if (gl === null) {
    alert("無法初始化 WebGL，你的瀏覽器不支援。");
    return;
  }

  // 設定清除色彩為黑色，完全不透明
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 透過清除色來清除色彩緩衝區
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

在此我們做的第一件事是取得 canvas 元素的參考，並存入 canvas 變數中。

一旦我們取得了 canvas ，我們透過呼叫 [getContext](/zh-TW/docs/Web/API/HTMLCanvasElement/getContext) 並傳入 `"webgl"` 字串來取得 [WebGLRenderingContext](/zh-TW/docs/Web/API/WebGLRenderingContext)。若瀏覽器不支援 webgl `getContext` 會回傳 `null` 同時會顯示訊息給使用者並且離開。

如果成功初始化， `gl` 就會成為一個 WebGL 背景資料的參考。在這裡我們設置清除色為黑色，並透過該色清除 context (用背景色重新繪製 canvas )。

至此，你已經有足夠初始化 WebGL 背景資料的程式碼，並且準備好了等待接收內容的容器。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[檢視完整程式碼](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [開啟新頁面來檢視結果](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## 亦可參考

- [WebGL Fundamentals](https://webglfundamentals.org/)
- [An intro to modern OpenGL:](https://duriansoftware.com/joe/an-intro-to-modern-opengl.-table-of-contents) 由 Joe Groff 撰寫的一系列關於 OpenGL 的好文章，提供了 OpenGL 清楚的簡介，從其歷史到重要的圖像管路概念，以及一些展示其原理的範例。如果你完全不懂 OpenGL，這將是一個好的入門介紹。

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
