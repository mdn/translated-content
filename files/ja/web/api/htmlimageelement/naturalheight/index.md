---
title: "HTMLImageElement: naturalHeight プロパティ"
short-title: naturalHeight
slug: Web/API/HTMLImageElement/naturalHeight
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLImageElement")}} インターフェイスの **`naturalHeight`** プロパティは読み取り専用で、画像の本来の（自然な）密度補正された高さを{{Glossary("CSS pixel", "CSS ピクセル数")}}で返します。

これは、画像の高さを制限するものがない状態で描画された場合の高さです。画像の高さが指定されなかった場合、または画像の高さを制限するか明示的に指定するコンテナー内に画像が配置されなかった場合は、この高さでレンダリングされます。

> **メモ:** ほとんどの場合、自然な高さとは、サーバーから送信された画像の実際の高さです。とはいえ、ブラウザーは画像をレンダラーに送る前に画像を修正することがあります。たとえば、Chrome は[ローエンド端末で画像の解像度を低下](https://crbug.com/1187043#c7)させます。このような場合、`naturalHeight` はそのようなブラウザーの介入によって修正された画像の高さを自然な高さとみなして、この値を返します。

## 値

画像の高さを CSS ピクセル単位で表した整数値。これは、画像に制約や特定の値が設定されていない場合に、画像が自然に描画される高さです。この自然な高さは、 {{domxref("HTMLImageElement.height", "height")}} とは異なり、表示されている端末のピクセル密度に合わせて補正されます。

内在的な高さが利用できない場合、例えば画像の内在的な高さが指定されていなかった場合や、この情報を取得するための画像データが存在しない場合など、高さが利用できなかった場合は、`naturalHeight` は 0 を返します。

## 例

この例では、密度調整された自然な画像サイズと、ページの CSS やその他の要素によって変更されたレンダリングサイズの両方を表示しています。

### HTML

```html
<div class="box">
  <img
    src="/en-US/docs/Web/HTML/Element/img/clock-demo-400px.png"
    class="image"
    alt="A round wall clock with a white dial and black numbers" />
</div>
<div class="output"></div>
```

HTML では、 400x398 ピクセルの画像を {{HTMLElement("div")}} の中に配置するようにしています。

### CSS

```css
.box {
  width: 200px;
  height: 200px;
}

.image {
  width: 100%;
}

.output {
  padding-top: 2em;
}
```

上記の CSS で注目すべき点は、画像が描画されるコンテナーのスタイルが幅 200px であり、その幅いっぱい（100%）に画像が描画されることです。

### JavaScript

```js
let output = document.querySelector(".output");
let image = document.querySelector("img");

window.addEventListener("load", (event) => {
  output.innerHTML +=
    `自然なサイズ: ${image.naturalWidth} x ` +
    `${image.naturalHeight} ピクセル<br>`;
  output.innerHTML +=
    `表示サイズ: ${image.width} x ` + `${image.height} ピクセル`;
});
```

JavaScript のコードでは、自然なサイズと表示されたサイズを、クラス `output` を持つ {{HTMLElement("div")}} にダンプしています。これは、ウィンドウの {{domxref("Window.load_event", "load")}} イベントハンドラーに応答して実行することで、幅や高さを計測しようとする前に画像が利用することを保証しています。

### 結果

{{EmbedLiveSample("Examples", 600, 280)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
