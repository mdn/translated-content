---
title: Canvas 教學文件
slug: Web/API/Canvas_API/Tutorial
---

{{DefaultAPISidebar("Canvas API")}}

[**`<canvas>`**](/zh-TW/docs/Web/API/Canvas_API) 是一個 [HTML](/zh-TW/docs/Web/HTML) 元素，我們可以利用程式腳本在這個元素上繪圖（通常是用 [JavaScript](/zh-TW/docs/Web/JavaScript)）。除了繪圖，我們還可以合成圖片或做一些簡單（或是[不那麼簡單](/zh-TW/docs/HTML/Canvas/A_Basic_RayCaster)）的動畫。右方的影像便是一些運用 \<canvas> 的例子，接下來我們將會在教學文件中一一說明。

本教學從基礎知識開始，描述如何利用 \<canvas> 進行 2D 繪圖。教學中的範例會讓各位清楚瞭解 \<canvas> 該如何運用，另外也會提供程式碼範例，讓大家嘗試製作自己的內容。

`<canvas>` 最早是由 Apple 為 Mac OS X Dashboard 所提出，之後 Safari 和 Google Chrome 也都採用。[Gecko](/zh-TW/docs/Gecko) 1.8 作基礎的瀏覽器，如 Firefox 1.5 也都提供了支援。`<canvas>` 元素是 [WhatWG Web applications 1.0](https://www.whatwg.org/specs/web-apps/current-work/)（也就是 HTML5）規範的一部分，目前所有主流的瀏覽器都已支援。

## 在開始之前

`<canvas>` 並不困難，但你需要了解基本的 [HTML](/zh-TW/docs/Web/HTML) 與 [JavaScript](/zh-TW/docs/Web/JavaScript)。部分舊版瀏覽器不支援 `<canvas>`，不過基本上現今所有主流的瀏覽器都有支援。預設的畫布大小是 300px \* 150px（寬 \* 高）。但你也可以透過 HTML 寬、高屬性（{{Glossary("attribute")}}）自訂。為了在畫布上作畫，我們使用了一個 JavaScript context 物件來即時繪製圖形。

## 教學文件

- [基本用途](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
- [繪製圖形](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
- [套用樣式與顏色](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
- [繪製文字](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [使用影像](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Using_images)
- [變形效果](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Transformations)
- [合成效果](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Compositing)
- [基礎動畫](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_animations)
- [進階動畫](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
- [像素控制](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [Hit regions and accessibility](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
- [最佳化 canvas](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
- [Finale](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Finale)

## 參見

- [Canvas topic page](/zh-TW/docs/Web/API/Canvas_API)
- [Adobe Illustrator to Canvas plug-in](http://visitmix.com/labs/ai2canvas/)
- [HTML5CanvasTutorials](https://www.html5canvastutorials.com/)
- [31 days of canvas tutorials](http://creativejs.com/2011/08/31-days-of-canvas-tutorials/)
- [Drawing Graphics with Canvas](/zh-TW/docs/Web/API/Canvas_API/Tutorial)
- [Canvas examples](/zh-TW/docs/tag/Canvas_examples)
- [HTML5 Tutorial](http://html5tutorial.com)
- [Drawing Text Using a Canvas](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [Adding Text to Canvas](https://developer.apple.com/library/safari/#documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingText/AddingText.html#//apple_ref/doc/uid/TP40010542-CH6-SW4)
- [Canvas Demos - Games, applications, tools and tutorials](http://www.canvasdemos.com/)
- [Canvas Drawing and Animation Application](http://canvimation.github.com/)
- [interactive canvas tutorial](http://billmill.org/static/canvastutorial/)
- [Canvas Cheat Sheet with all attributes and methods](http://blog.nihilogic.dk/2009/02/html5-canvas-cheat-sheet.html)
- [Adobe Illustrator to Canvas plug-in](http://visitmix.com/labs/ai2canvas/)
- [HTML5CanvasTutorials](https://www.html5canvastutorials.com/)
- [How to draw N grade Bézier curves with the Canvas API](http://html5tutorial.com/how-to-draw-n-grade-bezier-curve-with-canvas-api)
- [31 days of canvas tutorials](http://creativejs.com/2011/08/31-days-of-canvas-tutorials/)
- [W3C Standard](https://www.w3.org/TR/2dcontext/)

## 致歉各位貢獻者

由於 2013/6/17 那一週的不幸技術錯誤，所有有關本教學的歷史紀錄，包括過去所有貢獻者的紀錄都遺失了，我們深感抱歉，希望各位可以原諒這一次不幸的意外。

{{ Next("Web/Guide/HTML/Canvas_tutorial/Basic_usage") }}
