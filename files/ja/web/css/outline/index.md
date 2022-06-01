---
title: outline
slug: Web/CSS/outline
tags:
  - CSS
  - CSS 輪郭線
  - CSS プロパティ
  - レイアウト
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.outline
translation_of: Web/CSS/outline
---
{{CSSRef}}

**`outline`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、輪郭線 (outline) に関する様々なプロパティを単一の宣言で設定します。

{{EmbedInteractiveExample("pages/css/outline.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}

## 構文

```css
/* 種類 */
outline: solid;

/* 色 | 種類 */
outline: #f66 dashed;

/* 種類 | 幅 */
outline: inset thick;

/* 色 | 種類 | 幅 */
outline: green solid 3px;

/* グローバル値 */
outline: inherit;
outline: initial;
outline: revert;
outline: unset;
```

`outline` プロパティは以下に挙げた 1 ～ 3 つの値を用いて指定することができます。値は順不同です。

> **Note:** 多くの要素では、スタイルが定義されていないと輪郭線は表示されません。これは style の既定値が `none` だからです。特筆すべき例外は `input` 要素で、ブラウザーが既定のスタイルを与えます。
</div>

### 値

- `<'outline-color'>`
  - : 輪郭線の色を設定します。未指定の場合の既定値は `currentcolor` です。 {{cssxref("outline-color")}} を参照してください。
- `<'outline-style'>`
  - : 輪郭線の種類を設定します。未指定の場合の既定値は `none` です。 {{cssxref("outline-style")}} を参照してください。
- `<'outline-width'>`
  - : 輪郭線の太さを設定します。未指定の場合の既定値は `medium` です。 {{cssxref("outline-width")}} を参照してください。

## 解説

[境界線](/ja/docs/Web/CSS/border)と輪郭線はとても似ています。しかし、輪郭線は以下の点で境界線とは異なります。

- 輪郭線は領域を占有せず、要素のコンテンツの外側に描かれます。- 仕様によれば、輪郭線は矩形である必要はありませんが、ふつうは矩形です。

他の一括指定プロパティと同様に、省略された値は[初期値](/ja/docs/Web/CSS/initial_value)に設定されます。

## アクセシビリティの考慮

`outline` の値を `0` または `none` にすると、ブラウザーの既定のフォーカス表示を削除します。要素が操作できるものであれば、視覚的なフォーカス表示が必要です。既定のフォーカス表示を削除するのであれば、目に見える分かりやすいフォーカスのスタイル付けを提供してください。

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) <li>
  <abbr>WCAG</abbr> 2.1: [成功基準 2.4.7 の理解: フォーカスの可視性](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Using_outline_to_set_a_focus_style">輪郭線を使用してフォーカスのスタイルを設定</h3>

#### HTML

```html
<a href="#">このリンクは特殊なフォーカスのスタイルです。</a>
```

#### CSS

```css
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

{{EmbedLiveSample("Using_outline_to_set_a_focus_style", "100%", 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
