---
title: WebGL 教學
slug: Web/API/WebGL_API/Tutorial
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

本教學描述如何使用 {{HTMLElement("canvas")}} 元素來繪製 WebGL 圖形，並從基礎開始。所提供的範例應能讓你清楚了解 WebGL 可以做什麼，並提供程式碼片段，讓你開始建立自己的內容。

[WebGL](https://www.khronos.org/webgl/) 讓 web 內容能夠使用基於 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 的 API，在支援的瀏覽器中於 HTML `<canvas>` 內執行 3D 算繪，而無需使用外掛。WebGL 程式由使用 JavaScript 撰寫的控制程式碼，以及在電腦圖形處理器（GPU）上執行的特效程式碼（著色器程式碼）所組成。WebGL 元素可以與其他 HTML 元素混合，並與頁面或是頁面背景的其他部分進行合成。

## 開始之前

使用 `<canvas>` 元素並不難，但你需要具備 [HTML](/zh-TW/docs/Web/HTML) 和 [JavaScript](/zh-TW/docs/Web/JavaScript) 的基礎理解。部分舊版瀏覽器不支援 `<canvas>` 元素和 WebGL，但所有主要瀏覽器的近期版本皆有支援。為了在 canvas 上繪製圖形，我們使用 JavaScript 上下文物件來即時建立圖形。

## 關於本教學

- [WebGL 入門](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : 如何設定 WebGL 上下文。
- [將 2D 內容加入 WebGL 上下文](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : 如何使用 WebGL 算繪簡單的平面形狀。
- [在 WebGL 中使用著色器上色](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : 示範如何使用著色器為形狀上色。
- [使用 WebGL 製作物件動畫](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : 展示如何旋轉和平移物件以建立簡單的動畫。
- [使用 WebGL 建立 3D 物件](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : 展示如何建立 3D 物件（在此例中為立方體）並製作動畫。
- [在 WebGL 中使用紋理](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : 示範如何將紋理映射到物件的表面上。
- [WebGL 中的光照](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : 如何在你的 WebGL 上下文中模擬光照效果。
- [在 WebGL 中製作紋理動畫](/zh-TW/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : 展示如何製作紋理動畫；在此例中，是將 Ogg 視訊映射到旋轉立方體的表面上。
