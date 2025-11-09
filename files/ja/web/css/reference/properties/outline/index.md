---
title: outline
slug: Web/CSS/Reference/Properties/outline
original_slug: Web/CSS/outline
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

**`outline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、輪郭線 (outline) に関する大部分のプロパティを単一の宣言で設定します。

{{InteractiveExample("CSS デモ: outline")}}

```css interactive-example-choice
outline: solid;
```

```css interactive-example-choice
outline: dashed red;
```

```css interactive-example-choice
outline: 1rem solid;
```

```css interactive-example-choice
outline: thick double #32a1ce;
```

```css interactive-example-choice
outline: 8px ridge rgba(170, 50, 220, 0.6);
border-radius: 2rem;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  padding: 0.75rem;
  width: 80%;
  height: 100px;
}
```

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}

## 構文

```css
/* 種類 */
outline: solid;

/* 種類 | 色 */
outline: dashed #f66;

/* 幅 | 種類 */
outline: thick inset;

/* 幅 | 種類 | 色 */
outline: 3px solid green;

/* グローバル値 */
outline: inherit;
outline: initial;
outline: revert;
outline: revert-layer;
outline: unset;
```

`outline` プロパティは以下に挙げた 1 ～ 3 つの値を用いて指定することができます。値は順不同です。すべての一括指定プロパティと同様に、除外したサブ値はその[初期値](/ja/docs/Web/CSS/Guides/Cascade/Property_value_processing#初期値)に設定されます。

> [!NOTE]
> 多くの要素では、スタイルが定義されていないと輪郭線は表示されません。これは style の既定値が `none` だからです。特筆すべき例外は `input` 要素で、ブラウザーが既定のスタイルを与えます。

### 値

- `<'outline-width'>`
  - : 輪郭線の太さを設定します。未指定の場合の既定値は `medium` です。 {{cssxref("outline-width")}} を参照してください。
- `<'outline-style'>`
  - : 輪郭線の種類を設定します。未指定の場合の既定値は `none` です。 {{cssxref("outline-style")}} を参照してください。
- `<'outline-color'>`
  - : 輪郭線の色を設定します。既定値は、対応しているブラウザーでは `invert` で、それ以外では `currentcolor` です。 {{cssxref("outline-color")}} を参照してください。

## 解説

輪郭線は要素の[境界線](/ja/docs/Web/CSS/Reference/Properties/border)の外側の線です。輪郭線はボックスの他の領域とは異なり、空間を取らないので、文書内のレイアウトに影響を与えません。

輪郭線の外観に影響を与えるプロパティはいくつかあります。スタイル、色、幅は `outline` プロパティを使用し、境界線からの距離は {{cssxref("outline-offset")}} プロパティを使用し、角の丸みは {{cssxref("border-radius")}} プロパティを使用することで変更することが可能です。

輪郭線は長方形であるとは限りません。複数行のテキストを扱う場合、ブラウザーによっては各行ごとに輪郭線を描画するものもあれば、テキスト全体を単一の輪郭線で囲むものもあります。

## アクセシビリティ

`outline` の値を `0` または `none` にすると、ブラウザーの既定のフォーカス表示を削除します。要素が操作できるものであれば、視覚的なフォーカス表示が必要です。既定のフォーカス表示を削除するのであれば、目に見える分かりやすいフォーカスのスタイル付けを提供してください。

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [達成基準 2.4.7 の理解: フォーカスの可視性](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 輪郭線を使用してフォーカスのスタイルを設定

#### HTML

```html live-sample___using_outline_to_set_a_focus_style
<a href="#">このリンクは特殊なフォーカスのスタイルです。</a>
```

#### CSS

```css live-sample___using_outline_to_set_a_focus_style
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

#### 結果

{{EmbedLiveSample("Using_outline_to_set_a_focus_style", "100%", 85)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
- {{Cssxref("border")}}
