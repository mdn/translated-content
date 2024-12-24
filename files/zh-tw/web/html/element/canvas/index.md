---
title: <canvas>：繪圖畫布元素
slug: Web/HTML/Element/canvas
---

{{HTMLSidebar}}

使用 **HTML `<canvas>` 元素**與 [canvas 腳本 API](/zh-TW/docs/Web/API/Canvas_API) 或 [WebGL API](/zh-TW/docs/Web/API/WebGL_API) 來繪製圖形和動畫。

## 屬性

此元素的屬性包括[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)。

- `height`
  - : 以 CSS 像素為單位的座標空間高度。默認值為 150。
- `moz-opaque` {{non-standard_inline}} {{deprecated_inline}}
  - : 讓畫布知道是否透明度將成為一個因素。如果畫布知道沒有透明度，繪圖性能可以優化。這僅受到基於 Mozilla 的瀏覽器支持；請改用標準化的 {{domxref("HTMLCanvasElement.getContext()", "canvas.getContext('2d', { alpha: false })")}}。
- `width`
  - : 以 CSS 像素為單位的座標空間寬度。默認值為 300。

## 使用注意事項

### 替代內容

你應該在 `<canvas>` 區塊內提供替代內容。該內容將在舊版不支持 canvas 的瀏覽器以及禁用 JavaScript 的瀏覽器中呈現。

### 關閉 `</canvas>` 標籤

與 {{HTMLElement("img")}} 元素不同，{{HTMLElement("canvas")}} 元素**需要**使用關閉標籤（`</canvas>`）。

### 使用 CSS 與 HTML 調整畫布大小

畫布的顯示大小可以使用 CSS 更改，但如果這樣做，圖像在渲染期間將被縮放以適應樣式大小，這可能會使最終圖形渲染變形。

最好直接在 HTML 中或使用 JavaScript 通過在 `<canvas>` 元素上直接設置 `width` 和 `height` 屬性來指定畫布尺寸。

### 最大畫布尺寸

`<canvas>` 元素的確切最大尺寸取決於瀏覽器和環境。雖然在大多數情況下，最大尺寸超過 10,000 x 10,000 像素，但特別是 iOS 設備將畫布尺寸限制為僅 4,096 x 4,096 像素。請參見[不同瀏覽器和設備中的畫布大小限制](https://jhildenbiddle.github.io/canvas-size/#/?id=test-results)。

> [!NOTE]
> 超出最大尺寸或面積會使畫布無法使用——繪製命令將無法運作。

### 使用離屏畫布

可以使用 {{domxref("OffscreenCanvas")}} API 渲染畫布，其中文檔和畫布是解耦的。
好處是[工作線程](/zh-TW/docs/Web/API/Web_Workers_API/Using_web_workers) 可以處理畫布渲染，你的 Web 應用程序的主線程不會被畫布操作阻塞。
通過並行化工作，即使在離屏畫布上運行復雜的圖形，你 Web 應用程序的其他 UI 元素也將保持響應。
有關更多信息，請參見 {{domxref("OffscreenCanvas")}} API 文檔。

## 範例

### HTML

此代碼片段將一個畫布元素添加到你的 HTML 文檔中。如果瀏覽器無法讀取或渲染畫布，則提供了一個替代文本。

```html
<canvas width="120" height="120">
  An alternative text describing what your canvas displays.
</canvas>
```

### JavaScript

然後在 JavaScript 代碼中，調用 {{domxref("HTMLCanvasElement.getContext()")}} 來獲取繪圖上下文並開始繪製到畫布上：

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
// Add a rectangle at (10, 10) with size 100x100 pixels
ctx.fillRect(10, 10, 100, 100);
```

### 結果

{{EmbedLiveSample('範例', 600, 150)}}

## 無障礙議題

### 替代內容

`<canvas>` 元素本身只是一個位圖，並不提供有關任何繪製對象的信息。畫布內容不會向語義化 HTML 一樣暴露給無障礙工具。通常情況下，應該避免在可訪問的網站或應用程序中使用畫布。以下指南可以幫助使其更加訪問。

- [畫布無障礙用例](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [畫布元素無障礙問題](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML5 畫布無障礙性](https://www.tpgi.com/html5-canvas-accessibility-in-firefox-13/)
- [交互式畫布元素最佳實踐](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

## 技術摘要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/zh-TW/docs/Web/HTML/Content_categories"
          >內容類型</a
        >
      </th>
      <td>
        <a href="/zh-TW/docs/Web/HTML/Content_categories#流內容"
          >流內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#嵌入型內容"
          >嵌入型內容</a
        >、<a href="/zh-TW/docs/Web/HTML/Content_categories#捫及內容"
          >捫及內容</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">允許的內容</th>
      <td>
        透明，但不包含<a
          href="/zh-TW/docs/Web/HTML/Content_categories#互動型內容"
          >互動型內容</a
        >的後代，除了 {{HTMLElement("a")}} 元素、{{HTMLElement("button")}} 元素和 <a href="/zh-TW/docs/Web/HTML/Element/input#type"><code>type</code></a> 屬性為 <code>checkbox</code>、<code>radio</code> 或 <code>button</code> 的
        {{HTMLElement("input")}} 元素。
      </td>
    </tr>
    <tr>
      <th scope="row">標籤省略</th>
      <td>不允許，開始和結束標籤都是必須的。</td>
    </tr>
    <tr>
      <th scope="row">允許的父元素</th>
      <td>
        任何接受<a href="/zh-TW/docs/Web/HTML/Content_categories#段落型內容"
          >段落型內容</a
        >的元素。
      </td>
    </tr>
    <tr>
      <th scope="row">隱含的 ARIA 角色</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >沒有相對應的角色</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">允許的 ARIA 角色</th>
      <td>任何</td>
    </tr>
    <tr>
      <th scope="row">DOM 介面</th>
      <td>{{domxref("HTMLCanvasElement")}}</td>
    </tr>
  </tbody>
</table>

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Canvas API](/zh-TW/docs/Web/API/Canvas_API)
- [Canvas 教程](/zh-TW/docs/Web/API/Canvas_API/Tutorial)
- [OffscreenCanvas](/zh-TW/docs/Web/API/OffscreenCanvas)
- [Canvas 速查表](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html) (2009)
- [Canvas 速查表](https://websitesetup.org/wp-content/uploads/2015/11/Infopgraphic-CanvasCheatSheet-Final2.pdf)（pdf）（2015）
- [Safari HTML 畫布指南](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html) 透過 Apple（2013）
- [`CanvasRenderingContext2D` 畫布元素的 2D 繪圖上下文](https://developer.apple.com/documentation/webkitjs/canvasrenderingcontext2d) 透過 Apple.com
- [WebGL](/zh-TW/docs/Web/API/WebGL_API) API
- {{HTMLElement("img")}}
- [SVG](/zh-TW/docs/Web/SVG)
- [使用 HTML 音頻和影片](/zh-TW/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
