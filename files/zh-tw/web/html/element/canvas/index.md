---
title: <canvas>
slug: Web/HTML/Element/canvas
---

這個 **HTML `<canvas>` 元素** 可以被使用於對腳本程式(JaveScript) 繪圖 .舉例來說, 它能用來畫圖,組合照片,甚至作動畫. 你也許(應該) 在\<canvas>區段內提供替代方案的內容 .這內容將能被一些不支援\<canvas>以及無法使用 Javescript 功能的瀏覽器所渲染 .

更多文章關於 canvas, 請參考 [canvas 主題](/zh-TW/docs/Web/API/Canvas_API)

| [Content 分類](/zh-TW/docs/HTML/Content_categories) | [流程式 content](/zh-TW/docs/HTML/Content_categories#Flow_content), [段落式 content](/zh-TW/docs/HTML/Content_categories#Phrasing_content), [強調式 content](/zh-TW/docs/HTML/Content_categories#Embedded_content), 可見式 content. |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 被允許通過的內容                                    | 除了子元素不是 \<a>的元素、 \<button>的元素、\<input>的元素屬性是`checkbox`, `radio`, 或 `button` 之外且是透明內容模型但不是[互動式 content](/zh-TW/docs/HTML/Content_categories#Interactive_content)                               |
| Tag 省略                                            | 不能省略標籤\<canvas></canvas>                                                                                                                                                                                                      |
| 被允許通過的父親元素                                | 任何[強調式 content](/zh-TW/docs/HTML/Content_categories#Phrasing_content)的元素皆可通過                                                                                                                                            |
| DOM 介面                                            | HTMLCanvasElement                                                                                                                                                                                                                   |

## 屬性

這個元素的屬性包含全域屬性

- `height`
  - : 在 CSS 中以 pixels 表示 座標的空間**高度**（預設是 150）
- `moz-opaque` {{non-standard_inline}}
  - : 讓 canvas 知道這個因素是否為半透明的。如果 canvas 知道不是半透明，則提高繪畫的效能
- `width`
  - : 在 CSS 中以 pixels 表示 座標的空間**寬度**（預設是 300）

## 描述

### 需要 `</canvas>` 結尾

與\<img>不同之處,`<canvas>`需要`</canvas>` 結尾

### canvas 的大小設置

canvas 的大小設置可透過樣式表（stylesheet）被改變。可經由樣式修改圖像的縮放大小。

若呈現的效果圖似乎是扭曲變形的，可試著先修改`<canvas>`標籤中的`width`和`height`的屬性，而**不建議**使用 css 去控制。

## 範例

將下面這條範例加到你的 HTML 文件。如果你的瀏覽器並不支援 canvas 或不能讀取 canvas 時，則會回報 canvas 中的訊息。若想知道更多有用的回應訊息或替代 DOM 的註文，可以[參考更多相似的註文](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)。

```html
<canvas id="canvas" width="300" height="300">
  抱歉，你的瀏覽器並不支援<canvas>元素
</canvas>
```

如果你的 canvas 沒有使用透明度，可在\<canvas>標籤設立`moz-opaque`屬性，提升它的繪圖效果。`moz-opaque` 尚未標準化，所以只適用在 Mozilla 的 效能引擎。

```html
<canvas id="mycanvas" moz-opaque></canvas>
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 延伸閱讀

- [MDN canvas portal](/zh-TW/docs/Web/API/Canvas_API)
- [Canvas tutorial](/zh-TW/docs/Web/API/Canvas_API/Tutorial)
- [Canvas cheat sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
- [Canvas-related demos](/zh-TW/demos/tag/tech:canvas)
- [Canvas introduction by Apple](https://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/Introduction/Introduction.html)

{{HTMLSidebar}}
