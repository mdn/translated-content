---
title: "CanvasRenderingContext2D: lang プロパティ"
short-title: lang
slug: Web/API/CanvasRenderingContext2D/lang
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Canvas API")}}{{SeeCompatTable}}

**`CanvasRenderingContext2D.lang`** はキャンバス 2D API のプロパティで、このキャンバス描画コンテキストの言語を取得または設定します。

## 値

`lang` プロパティは、以下の文字列値のいずれかを取ることができます。

- キャンバスのコンテストの言語を表す{{glossary("BCP 47 language tag", "BCP 47 言語タグ")}}。
- 文字列 `inherit`。 この場合、言語は元の {{HTMLElement("canvas")}} 要素、または明示的に `lang` が設定された最も近い利用できる祖先要素の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性から継承されます。
- 空文字列 (`""`)。このキャンバスコンテキストに言語がないことを指定します。

デフォルト値は `inherit` です。

## 解説

言語依存の機能（例えば、言語によって異なる表示方法を持つ特定の文字を含むフォント）を適切にレンダリングするためには、キャンバス描画コンテキストに言語を設定する必要がある場合があります。画面上のキャンバスコンテキスト (`CanvasRenderingContext2D`) は常に具体的な `<canvas>` 要素に関連付けられているため、これを使用してコンテンツをレンダリングする際には、`<canvas>` 要素の `lang` 属性の値から言語を導出できます。

ただし、画面外キャンバスコンテキスト ({{domxref("OffscreenCanvasRenderingContext2D")}}) は、`<canvas>` 要素に関連付けられる前にコンテンツをレンダリングするため、`<canvas>` 要素の `lang` 属性からレンダリング言語を導出できません。`lang` プロパティはこの課題を解決し、画面上または画面外のキャンバスを使用しているかに関わらず、キャンバスレンダリングコンテキストに直接言語を設定することができるようにします。

### `inherit` 値

`inherit` 値が使用されている場合、キャンバスコンテキストの言語は、最も近い利用できる HTML ソースの [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性から継承されます。

- 画面上のコンテキスト、または画面上のコンテキストから転送された画面外のコンテキストの場合、これは元の {{HTMLElement("canvas")}} 要素となります。ただし、有効な `lang` 属性が指定されていることが条件です。
- 関連付けられた `<canvas>` 要素に `lang` 属性が設定されていない場合（画面上／画面外のコンテキストで発生し得る）、明示的に `lang` が設定された最も近い利用できる祖先要素（通常は文書ルート）が使用されます。

技術的な制限により、`inherit` 値は画面上のキャンバスとと画面外キャンバスで異なる動作をします。

- 画面上のキャンバスの場合、`lang` 値は関連付けられた `CanvasRenderingContext2D` オブジェクトがまず作成された時点で継承されます。その後、`lang` 属性の値が更新されると、継承された `lang` 値は動的に変更されます。
- 画面外キャンバスの場合、`lang` の値は関連付けられた `OffscreenCanvasRenderingContext2D` オブジェクトが最初に作成された時点で継承され、その後 {{domxref("OffscreenCanvas")}} の存続期間中は固定値となります。その `lang` 属性の値が更新されても、**変更されません**。このため、画面外キャンバスの言語は、`lang` 値を明示的に設定することによってのみ変更できます。

## 例

### 基本的な使い方

```js
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

// コンテキストの言語を取得。デフォルトでは "inherit" が返される
console.log(ctx.lang);

// コンテキストの言語を設定
ctx.lang = "en";
// "en" をログ出力
console.log(ctx.lang);
```

### キャンバスコンテキストのローカライズ対応のデモンストレーション

この例では、言語依存の合字を持つ特定のフォントでテキスト文字列を 2D キャンバスコンテキストに描画します。キャンバスコンテキストの言語を調整することができるため、描画の違いを確認できます。

#### HTML

HTML には、言語を選択することができる {{htmlelement("select")}} 要素（`en`（英語）または `tr`（トルコ語））と、レンダリング先の {{htmlelement("canvas")}} 要素が含まれています。

```html live-example___canvas-l10n
<p>
  <label for="lang">言語を選択:</label>
  <select id="lang" name="lang">
    <option>en</option>
    <option>tr</option>
  </select>
</p>
<canvas></canvas>
```

#### JavaScript

JavaScript では、まず `<canvas>` 要素、その `CanvasRenderingContext2D`、および `<select>` 要素への参照を取得し、[CSS フォント読み込み API](/ja/docs/Web/API/CSS_Font_Loading_API) を使用して言語依存のフォントを読み込みます。フォントの読み込みが完了すると、`init()` 関数を実行します。この関数では別の関数 `drawText()` を定義し、読み込まれたフォントを使用してキャンバスコンテキストにテキストを描画します。さらに `<select>` 要素に [`change`](/ja/docs/Web/API/HTMLElement/change_event) イベントの[イベントリスナー](/ja/docs/Web/API/EventTarget/addEventListener)を `<select>` 要素に追加し、`drawText()` を呼び出します。これにより、ページがまず読み込まれた際にテキストが即座にキャンバスに描画されます。

```js live-example___canvas-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium は言語依存の合字があるフォント
  "Lato-Medium",
  'url("https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf")',
);

latoMediumFontFace.load().then((font) => {
  document.fonts.add(font);
  init();
});

function init() {
  function drawText() {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    ctx.font = "30px Lato-Medium";
    ctx.color = "black";
    ctx.fillText("finish crafting", 50, 100);
  }

  selectElem.addEventListener("change", () => {
    document.documentElement.lang = selectElem.value;
    drawText();
  });

  drawText();
}
```

`<select>` の値が変更されると、`change` イベントハンドラー関数が呼び出され、以下を行います：

- `<html>` 要素の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性の値を `<select>` 要素の値に設定し、実質的に文書の言語を変更します。
- `drawText()` 関数を実行します。`CanvasRenderingContext2D.lang` プロパティはデフォルトで `inherit` に設定されているため、キャンバスコンテキストは文書の言語を継承します。

#### 結果

この例は次のように表示されます。

{{ EmbedLiveSample('canvas-l10n', "100%", 220) }}

`<select>` 要素を使用して文書の言語を変更してみてください。言語が英語に設定されている場合、フォントは "fi" の合字付きでレンダリングされます。しかし、トルコ語に設定されている場合、そのロケールには "fi" の合字が含まれていないため、フォントは合字なしでレンダリングされます。

### 画面外キャンバスでの言語の対応

この例は前の例と似ていますが、フォントが {{domxref("OffscreenCanvasRenderingContext2D")}} にレンダリングされ、その結果のビットマップが画面上の `<canvas>` に転送されて表示される点が異なります。

さらに、継承された画面外キャンバスの言語は一度だけ設定され、継承された `lang` 属性の値が変更されても動的に更新されないため、代わりに `OffscreenCanvasRenderingContext2D` 上で `lang` プロパティを明示的に設定します。

#### HTML

```html live-example___offscreen-l10n
<p>
  <label for="lang">言語を選択:</label>
  <select id="lang" name="lang">
    <option>en</option>
    <option>tr</option>
  </select>
</p>
<canvas></canvas>
```

#### JavaScript

このJavaScriptは前の例と同じように動作しますが、以下の点が異なります。

- 画面上のキャンバスコンテキストは、{{domxref("ImageBitmapRenderingContext")}} として定義されています。
- テキストを描画するための新しい `OffscreenCanvasRenderingContext2D` を定義し、 {{domxref("OffscreenCanvas.transferToImageBitmap", "transferToImageBitmap()")}} を使用して結果をビットマップに転送した後、 {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap", "transferFromImageBitmap()")}} を使用して `<canvas>` 上にレンダリングします。
- `<select>` の値が変更された場合、`<html>` の `lang` 属性値を変更する代わりに、`OffscreenCanvasRenderingContext2D` 上で直接 `lang` プロパティを更新します。

```js live-example___offscreen-l10n
const canvasElem = document.querySelector("canvas");
const ctx = canvasElem.getContext("bitmaprenderer");

const offscreen = new OffscreenCanvas(canvasElem.width, canvasElem.height);
const offscreenCtx = offscreen.getContext("2d");

const selectElem = document.querySelector("select");

const latoMediumFontFace = new FontFace(
  // Lato-Medium は言語依存の合字があるフォント
  "Lato-Medium",
  'url("https://mdn.github.io/shared-assets/fonts/Lato-Medium.ttf")',
);

latoMediumFontFace.load().then((font) => {
  document.fonts.add(font);
  init();
});

function init() {
  function drawText() {
    offscreenCtx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    offscreenCtx.lang = selectElem.value;
    offscreenCtx.font = "30px Lato-Medium";
    offscreenCtx.color = "black";
    offscreenCtx.fillText("finish crafting", 50, 100);

    const bitmap = offscreen.transferToImageBitmap();
    ctx.transferFromImageBitmap(bitmap);
  }

  selectElem.addEventListener("change", () => {
    drawText();
  });

  drawText();
}
```

#### 結果

この例は次のようにレンダリングされます。

{{ EmbedLiveSample('offscreen-l10n', "100%", 220) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}}
- [Canvas Localization Support](https://blogs.igalia.com/schenney/canvas-localization-support/) - Igalia (2025)
