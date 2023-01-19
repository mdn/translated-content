---
title: HTMLImageElement.currentSrc
slug: Web/API/HTMLImageElement/currentSrc
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`currentSrc`** プロパティは読み取り専用で、表す {{HTMLElement("img")}} 要素で現在表示されている画像の URL を表します。

## 値

`HTMLImageElement` で表される {{HTMLElement("img")}} 要素の中で、現在表示されている画像の完全な URL を示す文字列です。これは、 {{domxref("HTMLImageElement.sizes", "sizes")}} や {{domxref("HTMLImageElement.srcset")}} 属性を用いて複数の画像オプションを提供する場合に有用です。 `currentSrc` を使用すると、提供された画像セットの中からどの画像がブラウザーによって選択されたかを判断することができます。

## 例

この例では、時計の画像に 2 種類のサイズを用意しています。一つは幅 200px で、もう一つは幅 400px です。 {{htmlattrxref("sizes", "img")}} 属性は、ビューポートが幅 400px 未満の場合は画像を文書幅の 50% で、それ以外の場合は画像を文書幅の 90% で描画することを示すために提供されています。

### HTML

```html
 <img src="/files/16797/clock-demo-400px.png"
      alt="Clock"
      srcset="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w, /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w"
      sizes="(max-width: 400px) 50%, 90%">
```

### JavaScript

```js
var clockImage = document.querySelector("img");
let p = document.createElement("p");

if (!clockImage.currentSrc.endsWith("200px.png")) {
  p.innerText = "Using the 200px image.";
} else {
  p.innerText = "Using the 400px image!";
}
document.body.appendChild(p);
```

### 結果

{{EmbedLiveSample("Example", 640, 370)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
