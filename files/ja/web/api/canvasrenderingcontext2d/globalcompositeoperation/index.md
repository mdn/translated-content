---
title: CanvasRenderingContext2D.globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
---

{{APIRef}}

**`CanvasRenderingContext2D.globalCompositeOperation`** はキャンバス 2D API のプロパティで、新たな図形を描くときに適用する合成演算の種類を定めます。

[キャンバスのチュートリアル](/ja/docs/Web/API/Canvas_API/Tutorial)の[合成とクリッピング](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing)の章も参照してください。

## 構文

```js
ctx.globalCompositeOperation = type;
```

`type` は文字列で、使用する合成と混色モードの演算を識別します。

### 種類

{{EmbedLiveSample("Compositing_example", 750, 6900, ""
  ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}

## 例

### 合成演算の変更

この例では `globalCompositeOperation` プロパティを使用して、 2 つの矩形が重なり合う部分で自分自身を除外して描画しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Changing_the_composite_operation', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

### WebKit/Blink 特有のメモ

- WebKit および Blink ベースのブラウザーでは、このプロパティに加えて標準外で非推奨のメソッド `ctx.setCompositeOperation()` が実装されています。
- `"plus-darker"` および `"darker"` は Chrome 48 で取り除かれました。代替策を探している人は、 `"darken"` を使用してください。

### Gecko 特有のメモ

- 初期のキャンバス仕様の草案では、値として "darker" が定められていました。しかし、 Firefox はバージョン 4 で "darker" の対応をやめました ([Firefox バグ 571532](https://bugzil.la/571532))。[このブログ記事](https://dropshado.ws/post/77229081704/firefox-doesnt-support-canvas-composite-darker)では、 `"difference"` を使用して `"darker"` に近い効果が得られることを示していますので参照してください。

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
