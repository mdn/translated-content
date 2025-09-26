---
title: "CanvasRenderingContext2D: fontVariantCaps プロパティ"
short-title: fontVariantCaps
slug: Web/API/CanvasRenderingContext2D/fontVariantCaps
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

**`CanvasRenderingContext2D.fontVariantCaps`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のプロパティで、描画するテキストの大文字化を変更します。

これは、 CSS の [`font-variant-caps`](/ja/docs/Web/CSS/font-variant-caps) プロパティに相当します。

## 値

フォントの大文字化の値で、次のいずれかです。

- `normal` （既定値）
  - : 異なる字形を使用しないようにします。
- `small-caps`
  - : スモールキャピタルの表示を有効にします（OpenType の機能: `smcp`）。
    スモールキャピタルの字形は通常大文字の形を使用しますが、小文字のサイズに縮小されます。
- `all-small-caps`
  - : 大文字と小文字の両方でスモールキャピタル表示を有効にします（OpenType の機能: `c2sc`、`smcp`）。
- `petite-caps`
  - : 小文字の表示を有効にします（OpenType 機能: `pcap`）。
- `all-petite-caps`
  - : 大文字と小文字の両方でプチキャピタルの表示を有効にします (OpenType の機能: `c2pc`, `pcap`)。
- `unicase`
  - : スモールキャピタルの大文字と小文字の混在表示を有効にします（OpenType の機能: `unic`）。
- `titling-caps`
  - : タイトルキャピタルの表示を有効にします (OpenType 機能: `titl`)。
    大文字の字形は多くの場合、小文字と一緒に使用するようにデザインされています。
    すべて大文字のタイトルシーケンスで使用すると、強すぎるように現れることがあります。
    タイトルキャピタルはこのような状況のために専用の仕様です。

このプロパティを使用して、フォントの大文字化値を取得したり設定したりすることができます。

なお、これらのいくつかにはアクセシビリティ上の問題があり、相当する [`font-variant-caps`](/ja/docs/Web/CSS/font-variant-caps#accessibility_concerns) のトピックで概説されています。

## 例

この例では、 `fontVariantCaps` プロパティの対応している値をそれぞれ使用して、テキスト "Hello World" を表示しています。
また、プロパティを読み込むことで、それぞれの場合の値も表示されます。

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// Default (normal)
ctx.fillText(`Hello world (default: ${ctx.fontVariantCaps})`, 5, 20);

// Capitalization: small-caps
ctx.fontVariantCaps = "small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 50);

// Capitalization: all-small-caps
ctx.fontVariantCaps = "all-small-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 80);

// Capitalization: petite-caps
ctx.fontVariantCaps = "petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 110);

// Capitalization: all-petite-caps
ctx.fontVariantCaps = "all-petite-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 140);

// Capitalization: unicase
ctx.fontVariantCaps = "unicase";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 170);

// Capitalization: titling-caps
ctx.fontVariantCaps = "titling-caps";
ctx.fillText(`Hello world (${ctx.fontVariantCaps})`, 5, 200);
```

### 結果

{{ EmbedLiveSample('Examples', 700, 230) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
