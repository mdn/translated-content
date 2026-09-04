---
title: "CanvasRenderingContext2D: filter プロパティ"
short-title: filter
slug: Web/API/CanvasRenderingContext2D/filter
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.filter`** はキャンバス 2D API のプロパティで、ぼかしやグレースケール化などのフィルター効果を提供します。
これは CSS の filter プロパティに似ており、同じ値を受け付けます。

## 値

`filter` プロパティには、 `"none"` の値、または以下のフィルター関数のいずれか文字列で指定することができます。

- {{cssxref("url_function", "url()")}}
  - : CSS の {{cssxref("url_function", "url()")}} です。SVG フィルター要素に解決される任意のURLを受け取ります。
    これは要素の ID、外部 XML ファイルへのパス、あるいはデータエンコードされた SVG 値であっても可能です。
- {{cssxref("filter-function/blur", "blur()")}}
  - : CSS の {{cssxref("&lt;length&gt;")}} です。描画にガウスぼかしを適用します。
    ガウス関数の標準偏差の値、つまり画面内でどれだけのピクセルが互いに混ざり合うかを定義します。
    したがって、値が大きいほど大きくぼかします。
    値を `0` にすると、入力は変更されません。
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。線形乗数を描画に適用し、描画をより明るくまたはより暗くします。 `100%` 未満の値は画像を暗くし、 `100%` 以上の値は明るくします。値が `0%` の場合は完全に真っ黒な画像を作成し、値が `100%` の場合はそのままの画像になります。
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。描画するコントラストを調整します。値を `0%` にすると、完全に黒い絵を作成します。値を `100%` にすると絵は変更されません。
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : 描画にドロップシャドウ効果を適用します。ドロップシャドウは、特定の色で描画された描画のアルファマスクをぼかし、ずらして、描画の下に合成した効果です。この関数は最大 5 つの引数を取ります。
    - `<offset-x>`
      - : 利用可能な単位は {{cssxref("&lt;length&gt;")}} を参照してください。影の水平距離を指定します。
    - `<offset-y>`
      - : 利用可能な単位は {{cssxref("&lt;length&gt;")}} を参照してください。影の垂直距離を指定します。
    - `<blur-radius>`
      - : この値が大きいほどぼかしが大きくなり、影が大きく明るくなります。負の値は使用できません。
    - `<color>`
      - : 可能なキーワードと表記については {{cssxref("&lt;color&gt;")}} の値を参照してください。

- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。描画をグレースケールに変換します。 `100%` の値で完全にグレースケールになります。 `0%` の値は描画を変更しません。
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : CSS の {{cssxref("angle")}} です。描画する色相を回転させます。 `0deg` の値では入力は変更されません。
- {{cssxref("filter-function/invert", "invert()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。描画を反転します。 `100%` の値は完全に反転することを意味します。値が `0%` の場合、描画は変更されません。
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。描画に透過率を適用します。 `0%` の値は完全に透過することを意味します。値が `100%` の場合、描画は変更されません。
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。描画の彩度を指定します。 `0%` の値は完全に飽和していないことを意味しています。 `100%` の値は描画を変化させません。
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : CSS の {{cssxref("&lt;percentage&gt;")}} です。描画をセピアに変換します。 `100%` の値は完全にセピア色を意味しています。値が `0%` の場合、描画は変更されません。
- `none`
  - : フィルターは適用されません。初期値です。

## 例

この例を表示するには、この機能に対応しているブラウザーを使用していることを確認してください。下記の互換性表を参照してください。

### ぼかしの適用

この例では `filter` プロパティを使用してテキストをぼかしています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.filter = "blur(4px)";
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);
```

#### 結果

{{ EmbedLiveSample('Applying_a_blur', 700, 180) }}

### 複数のフィルターの適用

好きなだけフィルタを組み合わせられます。この例では、サイの写真に `contrast`, `sepia`, `drop-shadow` フィルターを適用しています。

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
<div class="hidden">
  <img
    id="source"
    src="https://mdn.github.io/shared-assets/images/examples/rhino.jpg" />
</div>
```

```css hidden
.hidden {
  display: none;
}
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const image = document.getElementById("source");

image.addEventListener("load", (e) => {
  // Draw unfiltered image
  ctx.drawImage(image, 0, 0, image.width * 0.6, image.height * 0.6);

  // Draw image with filter
  ctx.filter = "contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #ee8811)";
  ctx.drawImage(image, 400, 0, -image.width * 0.6, image.height * 0.6);
});
```

#### 結果

{{ EmbedLiveSample('Applying_multiple_filters', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このプロパティを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- CSS {{cssxref("filter")}}
- CSS {{cssxref("&lt;filter-function&gt;")}}
