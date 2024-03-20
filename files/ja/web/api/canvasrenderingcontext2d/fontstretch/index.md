---
title: "CanvasRenderingContext2D: fontStretch プロパティ"
short-title: fontStretch
slug: Web/API/CanvasRenderingContext2D/fontStretch
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{APIRef}}

**`CanvasRenderingContext2D.fontStretch`** は[キャンバス API](/ja/docs/Web/API/Canvas_API) のプロパティで、テキストを描画するときにフォントをどのように拡張・縮小できるかを指定します。

このプロパティは、キーワードと共に使用する場合、 CSS の [`font-stretch`](/ja/docs/Web/CSS/font-stretch) プロパティに相当します（パーセント値には対応していません）。

## 値

フォントの伸縮値を文字列で指定します。
これは、 `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` （既定値）, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded` のいずれかです。

このプロパティを使用して、フォントの伸縮値を取得または設定することができます。

## 例

この例では、 `fontStretch` プロパティの対応している値をそれぞれ使用して、テキスト "Hello World" を表示しています。
また、プロパティを読み取ることで、それぞれの場合の伸縮値を表示することができます。

### HTML

```html
<canvas id="canvas" width="700" height="310"></canvas>
```

### JavaScript

最初に HTML ファイルで宣言されたキャンバスを取得し、それを使用して後でテキストを描画するために使用する `CanvasRenderingContext2D` を取得します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

この例の次の段階は、幅軸を変化させることができる可変フォントを読み込むことです。
これは、`fontStretch` が、文字を引き伸ばしたときにどのように描画されるかについての情報を格納したフォントしか引き伸ばすことができないためです。そうでない場合、テキストは、そのフォントで使用できる最も近いフォントの引き伸ばし値を使用して描画されます。

今回は [`FontFace`](/ja/docs/Web/API/FontFace) を使用して、フォントフェイスに [Inconsolata](https://fonts.google.com/specimen/Inconsolata/tester) Google Font を定義します。このフォントは `50%` から `200%` のフォント幅に対応しています（`fontStretch` の値が `ultra-condensed` から `ultra-expanded` までを使用することができます）。
そして、これを文書の [`FontFaceSet`](/ja/docs/Web/API/FontFaceSet) （[`document.fonts`](/ja/docs/Web/API/Document/fonts)）に追加し、描画に使用することができるようにします。

```js
const fontFile = new FontFace(
  "Inconsolata",
  'url(https://fonts.gstatic.com/s/inconsolata/v31/QlddNThLqRwH-OJ1UHjlKENVzlm-WkL3GZQmAwPyya15.woff2) format("woff2")',
  { stretch: "50% 200%" },
);

document.fonts.add(fontFile);
```

下記のコードでは、 [`FontFaceSet.load()`](/ja/docs/Web/API/FontFaceSet/load) を呼び出して Google フォントを取得し、読み込んでいます。
この呼び出しは必要なフォントのサイズを設定し、フォントが読み込まれたときに解決するプロミスを返すことに注意してください。

次に、ダウンロードしたフォントフェイスをコンテキストに割り当てて、そのコンテキストを使用して、キーワードストレッチレベルごとにテキストをキャンバスに描画します。
ここでも希望するフォントのサイズが指定されていることに注意してください（これは読み込んだフォントサイズと一致する必要はありません）。

```js
document.fonts.load("30px Inconsolata").then(
  () => {
    ctx.font = "30px 'Inconsolata'";
    // Default (normal)
    ctx.fillText(`Hello world (default: ${ctx.fontStretch})`, 5, 20);

    ctx.fontStretch = "ultra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 50);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 80);

    ctx.fontStretch = "condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 110);

    ctx.fontStretch = "semi-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 140);

    ctx.fontStretch = "extra-condensed";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 170);

    ctx.fontStretch = "semi-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 200);

    ctx.fontStretch = "expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 230);

    ctx.fontStretch = "extra-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 260);

    ctx.fontStretch = "ultra-expanded";
    ctx.fillText(`Hello world (${ctx.fontStretch})`, 5, 290);
  },
  (err) => {
    console.error(err);
  },
);
```

### 結果

{{ EmbedLiveSample('Examples', 700, 300) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
