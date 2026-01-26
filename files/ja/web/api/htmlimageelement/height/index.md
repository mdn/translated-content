---
title: "HTMLImageElement: height プロパティ"
short-title: height
slug: Web/API/HTMLImageElement/height
l10n:
  sourceCommit: d8a52569d8d465eb626af3d33600c8c638a7a322
---

{{APIRef("HTML DOM")}}

**`height`** は {{domxref("HTMLImageElement")}} インターフェイスのプロパティで、画像が画面やプリンターなどの視覚媒体に描画または表示される場合は {{Glossary("CSS pixel", "CSS ピクセル")}}で、それ以外は画像のピクセル密度補正後の高さを表します。

## 値

画像の高さを表す整数値です。高さがどのように定義されるかは、画像が視覚的媒体にレンダリングされるかどうかに依存します。

- 画像が画面やプリンターなどの視覚媒体にレンダリングされる場合、高さは {{Glossary("CSS pixel", "CSS ピクセル")}}で表現されます。
- それ以外の場合、画像の高さは、 {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}} で示される表示密度用に調整された自然の（固有の）高さで表わされます。

## 例

この例では、 [`srcset`](/ja/docs/Web/HTML/Reference/Elements/img#srcset) 属性を使って、時計の画像に 2 種類の大きさの画像を用意しています。ひとつは幅 200px、もうひとつは幅 400px です。さらに、 [`sizes`](/ja/docs/Web/HTML/Reference/Elements/img#sizes) 属性は、ビューポートの幅を考慮して画像を描画する幅を指定するために提供されています。

### HTML

具体的には、幅 400px までのビューポートでは、 200px の幅で描画されます。
それ以外の場合は、 300px で描画されます。

```html
<p>画像の高さ: <span class="size">?</span>px (リサイズで更新)</p>
<img
  src="/en-US/docs/Web/HTML/Element/img/clock-demo-200px.png"
  alt="Clock"
  srcset="
    /en-US/docs/Web/HTML/Element/img/clock-demo-200px.png 200w,
    /en-US/docs/Web/HTML/Element/img/clock-demo-400px.png 400w
  "
  sizes="(max-width: 400px) 200px, 300px" />
```

### JavaScript

JavaScript のコードでは `height` を見て、現在描画されている幅から画像の高さを決定しています。

```js
const clockImage = document.querySelector("img");
let output = document.querySelector(".size");

const updateHeight = (event) => {
  output.innerText = clockImage.height;
};

window.addEventListener("load", updateHeight);
window.addEventListener("resize", updateHeight);
```

### 結果

{{EmbedLiveSample("Examples", 640, 450)}}

この例は{{LiveSampleLink('Example', '独自のウィンドウ')}}で試してみるとわかりやすいかもしれません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLCanvasElement.height")}}
- {{domxref("HTMLEmbedElement.height")}}
- {{domxref("HTMLIFrameElement.height")}}
- {{domxref("HTMLObjectElement.height")}}
- {{domxref("HTMLSourceElement.height")}}
- {{domxref("HTMLVideoElement.height")}}
