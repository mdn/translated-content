---
title: WebGL tutorial
slug: Web/API/WebGL_API/Tutorial
---

{{DefaultAPISidebar("WebGL")}}

[WebGL](https://www.khronos.org/webgl/) 讓網頁內容可以使用一個基於 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 的 API 以在 HTML {{HTMLElement("canvas")}}中執行 3D 渲染，且瀏覽器無需使用任何 plug-in。WebGL programs 由 JavaScript 撰寫的指令碼以及透過電腦的 Graphics Processing Unit (GPU)上運行的特殊效果程式碼(shader code)組成。WebGL 元件可與其他 HTML 元件混合，並與該頁的其他部分或該頁背景組合使用。

本教學描述如何使用 `<canvas>` 元件描繪 WebGL 圖像/圖形, 從基礎開始。提供的範例將讓你對於可以用 WebGL 做到什麼有清楚的概念，並提供程式碼片段讓你可以著手建立自己的內容。

## 開始之前

使用`<canvas>` 元件不會非常困難，但你需要有對[HTML](/zh-TW/docs/Web/HTML) 與 [JavaScript](/zh-TW/docs/Web/JavaScript) 的基礎認識。`<canvas>` 元件跟 WebGL 在某些舊瀏覽器中不支援，但近來的每個主流瀏覽器都有支援。我們用 JavaScript context object 在 canvas 繪製圖形，這樣圖形就能動態(on the fly)產生。

## 教學文件

- [WebGL 新手上路](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : 如何建置 WebGL 環境
- [加入 2D 內容至 WebGL 環境](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : 如何用 WebGL 渲染簡單平面的形狀
- [使用 shaders 在 WebGL 上色](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : 示範如何使用 shaders 在圖形上上色
- [WebGL 產生動畫](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : 示範如何旋轉與移動物件以製作簡單的動畫
- [建立三維物件](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : 示範如何創造並讓 3D 物件(立方體)有動畫
- [在物件表面貼上材質](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : 示範如何在物件的表面上貼上材質圖
- [模擬打光](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : 如何在 WebGL 環境模擬打光效果
- [讓材質產生動畫](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : 如何移動材質圖，在範例中是將 Ogg 影片 貼到一個旋轉中的立方體
