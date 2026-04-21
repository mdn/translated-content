---
title: drop-shadow()
slug: Web/CSS/Reference/Values/filter-function/drop-shadow
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`drop-shadow()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、入力画像にドロップシャドウ効果を適用します。結果は {{cssxref("filter-function")}} です。

{{InteractiveExample("CSS デモ: drop-shadow()")}}

```css interactive-example-choice
filter: drop-shadow(30px 10px 4px #4444dd);
```

```css interactive-example-choice
filter: drop-shadow(0 -6mm 4mm rgb(160 0 210));
```

```css interactive-example-choice
filter: drop-shadow(0 0 0.75rem crimson);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

ドロップシャドウは効果的にぼけ、入力画像のアルファマスクのバージョンからずれ、特定の色で描かれて画像の下に混合されます。

> [!NOTE]
> この関数はいくらか {{Cssxref("box-shadow")}} プロパティと似ています。 `box-shadow` プロパティは要素の*ボックス全体*の背後に長方形の影を作成しますが、 `drop-shadow()` フィルター関数は*画像自体*の形（アルファチャネル）に合った影を作成します。

## 構文

```css
/* 2 つの長さの値 */
/* drop-shadow( <length> <length> ) */
drop-shadow(5px 5px)

/* 3 つの長さの値 */
/* drop-shadow( <length> <length> <length> ) */
drop-shadow(5px 5px 15px)

/* 2 つの長さの値と色 */
/* drop-shadow( <length> <length> <color> ) */
drop-shadow(5px 5px red)

/* 3 つの長さの値と色 */
/* drop-shadow( <length> <length> <length> <color> ) */
drop-shadow(5px 5px 15px red)

/* 色と長さの値の順序は変更可能 */
/* drop-shadow( <color> <length> <length> <length> ) */
drop-shadow(#ee2233 0.5rem 0.5rem 1rem)

/* 複数のドロップシャドウを渡し、フィルターに積み上げる */
drop-shadow(10px 10px red) drop-shadow(-5px -5px yellow)
```

`drop-shadow()` 関数は `<shadow>` 型の引数（{{cssxref("box-shadow")}} プロパティで定義）を受け付けますが、 `inset` キーワードと `spread` 引数が許可されないという例外があります。

### 引数

- `<color>` {{optional_inline}}
  - : 影の色を指定します。指定されなかった場合は、 {{cssxref("color")}} プロパティの値が使用されます。

- `<length>`
  - : 影をずらす長さを指定します。この引数は 2 つまたは 3 つの値を受け入れます。 2 つの値が指定された場合、それらは `<offset-x>` （水平方向のオフセット）と `<offset-y>` （垂直方向のオフセット）の値として解釈されます。 `<offset-x>` の値が負の場合、影は要素の左側に作成されます。 `<offset-y>` の値が負の場合、影は要素の上側に作成されます。指定されていない場合、値 `0` が不足している長さとして使用されます。 3 つ目の値を指定すると、[ガウスぼかし](https://ja.wikipedia.org/wiki/ガウシアンぼかし)関数の標準偏差の値である `<standard-deviation>` として解釈されます。 `<standard-deviation>` の値が大きくなると、より大きく不鮮明な影を作成します。 `<standard-deviation>` に負の値を指定することはできません。

### 形式文法

{{CSSSyntax}}

## 例

### ドロップシャドウの設定

```html
<div>drop-shadow(16px 16px)</div>
<div>drop-shadow(16px 16px red)</div>
<div>drop-shadow(red 1rem 1rem 10px)</div>
<div>drop-shadow(-16px -16px red)</div>
<div>
  drop-shadow(1px 1px red) drop-shadow(1px -1px red) drop-shadow(-1px 1px red)
  drop-shadow(-1px -1px red)
</div>
```

```css
div {
  display: inline-block;
  margin: 0 0.5rem 2rem 1rem;
  padding: 0.5rem;
  height: 100px;
  width: 190px;
  vertical-align: top;
  background-color: #222222;

  color: lime;
}

div:nth-child(1) {
  filter: drop-shadow(16px 16px);
}

div:nth-child(2) {
  filter: drop-shadow(16px 16px red);
}

div:nth-child(3) {
  filter: drop-shadow(red 1rem 1rem 10px);
}

div:nth-child(4) {
  filter: drop-shadow(-16px -16px red);
}

div:nth-child(5) {
  filter: drop-shadow(1px 1px red) drop-shadow(1px -1px red)
    drop-shadow(-1px 1px red) drop-shadow(-1px -1px red);
}
```

{{EmbedLiveSample("Setting a drop shadow", "100%", "300px")}}

`<color>` 値が最初のボックスの `drop-shadow()` 関数に指定されていない場合、影は要素の `color` プロパティの値 (`lime`) を使用します。 2 つ目と 3 つ目の影は、長さと色の値を任意の順序で指定できることを示しています。 3 つ目の影は、 3 つ目の `<length>` 値が指定された場合の不鮮明な効果を示しています。 4 つ目の影は負のオフセットを使用し、影を左上方向に移動させます。5 つ目の例は、単一の要素に複数のドロップシャドウを適用する方法を使用する方法を示しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("filter-function")}} 関数:
  - {{cssxref("filter-function/blur", "blur()")}}
  - {{cssxref("filter-function/brightness", "brightness()")}}
  - {{cssxref("filter-function/contrast", "contrast()")}}
  - {{cssxref("filter-function/grayscale", "grayscale()")}}
  - {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - {{cssxref("filter-function/invert", "invert()")}}
  - {{cssxref("filter-function/opacity", "opacity()")}}
  - {{cssxref("filter-function/saturate", "saturate()")}}
  - {{cssxref("filter-function/sepia", "sepia()")}}
- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- [テキストの影の紹介](/ja/docs/Web/CSS/Guides/Text_decoration/Text_shadows)
- [CSS フィルター効果](/ja/docs/Web/CSS/Guides/Filter_effects)モジュール
