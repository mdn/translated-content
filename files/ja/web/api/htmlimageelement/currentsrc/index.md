---
title: "HTMLImageElement: currentSrc プロパティ"
short-title: currentSrc
slug: Web/API/HTMLImageElement/currentSrc
l10n:
  sourceCommit: 75d3108eaade9d64de3ece87258c946b9bf13068
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} の **`currentSrc`** プロパティは読み取り専用で、表す {{HTMLElement("img")}} 要素で現在表示されている画像の URL を表します。

## 値

`HTMLImageElement` で表される {{HTMLElement("img")}} 要素の中で、現在表示されている画像の完全な URL を示す文字列です。これは、{{domxref("HTMLImageElement.sizes", "sizes")}} や {{domxref("HTMLImageElement.srcset")}} 属性を用いて複数の画像オプションを提供する場合に有用です。`currentSrc` を使用すると、提供された画像セットの中からブラウザーがどの画像を選択したかを判断することができます。

## 例

この例では、時計の画像に 2 種類のサイズを用意しています。一つは幅 200px で、もう一つは幅 400px です。 [`sizes`](/ja/docs/Web/HTML/Element/img#sizes) 属性は、ビューポートが幅 400px 未満の場合は画像を文書幅の 50% で、それ以外の場合は画像を文書幅の 90% で描画することを指定しています。

### HTML

```html
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 50%, 90%" />
```

### JavaScript

```js
const clockImage = document.querySelector("img");
const p = document.createElement("p");

p.textContent = clockImage.currentSrc.endsWith("200px.png")
  ? "Using the 400px image!"
  : "Using the 200px image.";
document.body.appendChild(p);
```

### 結果

{{EmbedLiveSample("Examples", 640, 370)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
