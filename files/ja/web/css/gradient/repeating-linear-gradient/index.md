---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
tags:
  - CSS
  - CSS Function
  - CSS Images
  - Function
  - Gradients
  - Graphics
  - Layout
  - Reference
  - Web
translation_of: Web/CSS/gradient/repeating-linear-gradient()
original_slug: Web/CSS/gradient/repeating-linear-gradient()
browser-compat: css.types.image.gradient.repeating-linear-gradient
---
{{CSSRef}}

**`repeating-linear-gradient()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、反復線形グラデーションによる画像を生成します。 {{cssxref("gradient/linear-gradient()", "linear-gradient()")}} と似ており、同じ引数を取りますが、両方向に無限に色経由点を繰り返してコンテナー全体を埋めます。関数の返値は {{cssxref("&lt;gradient&gt;")}} データ型のオブジェクトであり、これは {{cssxref("&lt;image&gt;")}} の特殊型です。

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

繰り返すグラデーションの長さは、最初の色経由点と最後の色経由点の間の距離です。最初の色に color-stop-length がない場合、 color-stop-length の既定値は 0 になります。それぞれの繰り返しにおいて、色経由点の位置は基本的な線形グラデーションの長さの倍数だけずらしたものになります。この結果、グラデーションの最初と最後の色は常に隣り合わせになります。二つが異なる色であれば、視覚的に明確な変わり目ができるでしょう。これは最初の色を最後の色として再び使用することで修正することができます。

他のグラデーションと同じく、線形反復グラデーションも[自身の寸法を持ちません](/ja/docs/Web/CSS/image#description)。つまり、本来の寸法も優先される寸法も、優先されるアスペクト比も持たないということです。実際の寸法は、適用先の要素の寸法と一致します。

`<gradient>` は CSS の `<image>` データ型に所属しますので、 `<image>` が使用できるところでのみ使用できます。このため、 `repeating-linear-gradient()` は {{Cssxref("background-color")}} や、その他の {{cssxref("&lt;color&gt;")}} を要求するプロパティでは動作しません。

## 構文

```css
/* 45 度方向に軸を延ばし、青で始め赤で終わり、
   3 回繰り返す反復グラデーション */
repeating-linear-gradient(45deg, blue, red 33.3%);

/* 右下から左上に延び、青で始め赤で終わり、
   20px ごとに繰り返す反復グラデーション */
repeating-linear-gradient(to left top, blue, red 20px);

/* 下から上に延び、青で始め、 40% から緑になり、
   赤で終わるグラデーション。最後の色経由点が既定で
	 100% なので、グラデーションは繰り返されない */
repeating-linear-gradient(0deg, blue, green 40%, red);

/* 5 回繰り返し、左から右に、赤で始まり、緑に変わり、
   赤に戻るグラデーション */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%);
```

### 値

- `<side-or-corner>`

  - : グラデーション線の開始点の位置。指定する場合は、 `to` に続けて 2 つ以下のキーワードを指定します。一つは水平方向の辺 (`left` または `right`)、もう一方は垂直方向の辺 (`top` または `bottom`) です。辺を表すキーワードは順不同です。指定しない場合は、 `to bottom` が既定になります。

     `to top`, `to bottom`, `to left`, `to right` の値は、 `0deg`, `180deg`, `270deg`, `90deg` の角度にそれぞれ対応します。他の値は角度に変換されます。

- {{cssxref("&lt;angle&gt;")}}
  - : グラデーション線の方向を角度で示します。 `0deg` の値は `to top` と等価で、値が増加するとそこから時計回りに回ります。
- `<linear-color-stop>`
  - : 色経由点の {{CSSxRef("&lt;color&gt;")}} の値であり、任意でその後に停止位置を指定します(グラデーションの軸に沿った {{CSSxRef("&lt;percentage&gt;")}} または {{CSSxRef("&lt;length&gt;")}} の位置)。 `0%` のパーセント値または `0` の長さは、グラデーションの先頭を表します。 `100%` の値は画像の寸法の 100% であり、つまりグラデーションは反復されません。
- `<color-hint>`
  - : color-hint は、隣り合う色経由点の間でどのようにグラデーションが進むかを定義する補間のヒントです。長さによって、どの位置で二つの色経由点のグラデーション色が色の移行の中間点に達するかを定義します。省略された場合、色の移行の中間点は二つの色経由点の中点になります。

> **Note:** [CSS グラデーションにおける色経由点](#gradient_with_multiple_color_stops)の描画は、 [SVG グラデーション](/ja/docs/Web/SVG/Tutorial/Gradients)と同じ規則に従います。

### 形式文法

```css
repeating-linear-gradient(  [ <angle> | to <side-or-corner> ,]? <color-stop-list> )
                            \---------------------------------/ \---------------/
                                  グラデーション線の定義         色経由点のリスト

where <side-or-corner> = [left | right] || [top | bottom]
  and <color-stop-list> = [ <linear-color-stop> [, <color-hint>? ]? ]#, <linear-color-stop>
  and <linear-color-stop> = <color> [ <color-stop-length> ]?
  and <color-stop-length> = [ <percentage> | <length> ]{1,2}
  and <color-hint> = [ <percentage> | <length> ]
```

## 例

<h3 id="Zebra_stripes">縞模様</h3>

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(-45deg,
      transparent,
      transparent 20px,
      black 20px,
      black 40px);
  /* 複数の色経由点の位置 */
  background-image: repeating-linear-gradient(-45deg,
      transparent 0 20px,
      black 20px 40px);
}
```

{{EmbedLiveSample('Zebra_stripes', 120, 120)}}

<h3 id="Ten_repeating_horizontal_bars">10 回繰り返す水平線</h3>

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(to bottom,
      rgb(26,198,204),
      rgb(26,198,204) 7%,
      rgb(100,100,100) 10%);
}
```

{{EmbedLiveSample('Ten_repeating_horizontal_bars', 120, 120)}}

最後の色経由点が 10% であり、グラデーションが垂直なので、反復グラデーション内の各グラデーションは 10% の高さになり、 10 本の水平線に相当します。

> **Note:** 他の例は [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS グラデーションの使用](/ja/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- 他のグラデーション関数: {{cssxref("gradient/linear-gradient()", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient()", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image()","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set()","image-set()")}}
- {{cssxref("cross-fade()")}}
