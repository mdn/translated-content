---
title: "CanvasRenderingContext2D: reset() メソッド"
short-title: reset()
slug: Web/API/CanvasRenderingContext2D/reset
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.reset()`** はキャンバス 2D API のメソッドで、描画コンテキストをデフォルト状態にリセットします。これにより、すべてのプロパティを明示的にリセットすることなく、別の描画に再利用することができます。

リセットすると、バッキングバッファー、描画状態スタック、定義済みのパス、およびスタイルがクリアされます。
この中には、現在の[座標変換](/ja/docs/Web/API/CanvasRenderingContext2D#座標変換)行列、[合成](/ja/docs/Web/API/CanvasRenderingContext2D#合成)プロパティ、クリッピング領域、破線リスト、[線種](/ja/docs/Web/API/CanvasRenderingContext2D#線のスタイル)、[テキストのスタイル](/ja/docs/Web/API/CanvasRenderingContext2D#テキストのスタイル)、[影](/ja/docs/Web/API/CanvasRenderingContext2D#影)、[画像の平滑化](/ja/docs/Web/API/CanvasRenderingContext2D#画像の平滑化)、[フィルター](/ja/docs/Web/API/CanvasRenderingContext2D#フィルター)などが含まれます。

## 構文

```js-nolint
reset()
```

### 引数

None.

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例は、再描画前にコンテキストを完全にクリアするために `reset()` をどのように使用できるかを示しています。

まずボタンとキャンバスを定義します。

```css
#toggle-reset {
  display: block;
}
```

```html
<button id="toggle-reset">切り替え</button>
<canvas id="my-house" width="500" height="200"></canvas>
```

コードはまず、キャンバス用の `2d` コンテキストを取得します。
次に、それぞれ矩形と円を描画するためにコンテキストを使用することができる関数を定義します。

```js
// 2D コンテキストを取得
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

function drawRect() {
  // 線の幅を設定
  ctx.lineWidth = 10;

  // 矩形のアウトラインを描画
  ctx.strokeRect(50, 50, 150, 100);

  // 塗りつぶしのテキストを作成
  ctx.font = "50px serif";
  ctx.fillText("Rect!", 70, 110);
}

function drawCircle() {
  // 線の幅を設定
  ctx.lineWidth = 5;

  // 円を描画
  ctx.beginPath();
  ctx.arc(300, 100, 50, 0, 2 * Math.PI);
  ctx.stroke();

  // 塗りつぶしのテキストを作成
  ctx.font = "25px sans-serif";
  ctx.fillText("Circle!", 265, 100);
}
```

次に、その関数を使用して矩形を描画します。
ボタンは円と矩形の描画を切り替えます。
描画前にコンテキストをクリアするために `reset()` が呼び出されている点に注意してください。

```js
drawRect();

// ボタンを使用して円と矩形を切り替え
let toggle = true;
const myButton = document.getElementById("toggle-reset");

myButton.addEventListener("click", () => {
  ctx.reset(); // コンテキストをクリア
  if (toggle) {
    drawCircle();
  } else {
    drawRect();
  }
  toggle = !toggle;
});
```

結果は次のようになります。

{{EmbedLiveSample("Examples", 500, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
