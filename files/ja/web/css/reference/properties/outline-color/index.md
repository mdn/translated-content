---
title: outline-color
slug: Web/CSS/Reference/Properties/outline-color
original_slug: Web/CSS/outline-color
l10n:
  sourceCommit: aa714bb37625b21b0f40db1f1ea557e773456fa2
---

**`outline-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の輪郭線の色を設定します。

{{InteractiveExample("CSS デモ: outline-color")}}

```css interactive-example-choice
outline-color: red;
```

```css interactive-example-choice
outline-color: #32a1ce;
```

```css interactive-example-choice
outline-color: rgba(170, 50, 220, 0.6);
```

```css interactive-example-choice
outline-color: hsla(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
outline-color: currentcolor;
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
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* <color> 値 */
outline-color: #f92525;
outline-color: rgb(30 222 121);
outline-color: blue;

/* グローバル値 */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

`outline-color` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- {{cssxref("&lt;color&gt;")}}
  - : 輪郭線の色であり、`<color>` で指定します。

仕様書では、追加の値として `auto` も挙げられていますが、これは現在どのブラウザーも対応していません。実装された場合、 `auto` は、輪郭線が `auto` に設定されない限り [`currentcolor`](/ja/docs/Web/CSS/Reference/Values/color_value#currentcolor_キーワード) に計算されます。ただし、 [`outline-style`](/ja/docs/Web/CSS/Reference/Properties/outline-style) が `auto` に設定されている場合は、[アクセントカラー](/ja/docs/Web/CSS/Reference/Properties/accent-color)に計算されます。

## 解説

輪郭線は要素の周囲、 {{cssxref("border")}} の外側に描かれる線です。要素の境界線とは異なり、輪郭線は要素の枠の外側に描かれ、他のコンテンツと重複することがあります。一方、境界線はページのレイアウトに実際に影響を与え、他のどの要素とも (明示的に重複させない限り) 重複しないように合わせます。

輪郭線の表示方法を定義する際は、一括指定プロパティの {{cssxref("outline")}} を使用したほうが普通は便利です。

## アクセシビリティ

独自の[フォーカススタイル](/ja/docs/Web/CSS/Reference/Selectors/:focus)を作成するときに、ふつう {{cssxref("outline")}} プロパティを調整します。輪郭線の色を変更するのであれば、輪郭線と、それが配置される部分の背景のコントラスト比が、弱視の人でも知覚できるよう高くなっているか確認することが重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (Web Content Accessibility Guidelines, WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/Web/CSS/Reference/Properties/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN "WCAG を理解する ― ガイドライン 1.4 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 青い実線の輪郭線の設定

#### HTML

```html live-sample___setting_a_solid_blue_outline
<p>見ての通り、輪郭線は青です。</p>
```

#### CSS

```css live-sample___setting_a_solid_blue_outline
p {
  outline: 2px solid; /* 輪郭線の幅と種類 */
  outline-color: #0000ff; /* 輪郭線を青にする */
  margin: 5px;
}
```

#### 結果

{{ EmbedLiveSample('Setting_a_solid_blue_outline') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("&lt;color&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}}
