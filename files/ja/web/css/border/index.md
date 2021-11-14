---
title: border
slug: Web/CSS/border
tags:
  - CSS
  - CSS 境界
  - CSS 一括指定プロパティ
  - レイアウト
  - リファレンス
  - recipe:css-shorthand-property
browser-compat: css.properties.border
translation_of: Web/CSS/border
---
{{CSSRef("CSS Borders")}}

**`border`** は [CSS](/ja/docs/Web/CSS) の [一括指定](/ja/docs/Web/CSS/Shorthand_properties)プロパティで、要素の境界を設定します。これは {{cssxref("border-width")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}} の値を設定します。

## 例

{{EmbedInteractiveExample("pages/css/border.html")}}

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

 - {{cssxref("border-color")}}
 - {{cssxref("border-style")}}
 - {{cssxref("border-width")}}

## 構文

```css
/* 種類 */
border: solid;

/* 幅 | 種類 */
border: 2px dotted;

/* 種類 | 色 */
border: outset #f33;

/* 幅 | 種類 | 色 */
border: medium dashed green;

/* グローバル値 */
border: inherit;
border: initial;
border: unset;
```

`border` プロパティは、以下に挙げる値の 1 ～ 3 つを使用して指定します。値の順序は関係ありません。

> **Note:** style が指定されていない場合は境界線は表示されません。 style の既定値が `none` だからです。

### 値

- `<line-width>`
  - : 境界線の太さを設定します。指定されなかった場合は既定値の `medium` になります。 {{cssxref("border-width")}} を参照してください。
- `<line-style>`
  - : 境界線の種類を設定します。指定されなかった場合は既定値の `none` になります。 {{cssxref("border-style")}} を参照してください。
- {{cssxref("&lt;color&gt;")}}
  - : 境界線の色を設定します。指定されなかった場合は既定値で要素の {{cssxref("color")}} プロパティになります。 {{cssxref("border-color")}} を参照してください。

## 解説

他の一括指定プロパティと同様、省略された部分値は[初期値](/ja/docs/Web/CSS/initial_value)に設定されます。重要なことですが、 `border` は {{cssxref("border-image")}} のカスタム値を指定することができず、初期値、つまり `none` に設定します。

`border` による一括指定は、四辺をすべて同じに設定したい場合に特に便利です。しかし、それぞれが異なる場合は、それぞれの辺に異なる値を設定できる個別指定の {{cssxref("border-width")}}、 {{cssxref("border-style")}}、 {{cssxref("border-color")}} プロパティを使用してください。他に、一度に一つの境界線を対象とした、物理的 ({{cssxref("border-top")}} など) や論理的 ({{cssxref("border-block-start")}} など) な境界線プロパティを使用することもできます。

### 境界線と輪郭線

境界線と[輪郭線](/ja/docs/Web/CSS/outline)はよく似ています。しかし、輪郭線は以下の点で境界線とは異なります。

 - 輪郭線は領域を占有せず、要素のコンテンツの外側に描画されます。
 - 輪郭線は普通は矩形ですが、仕様によれば、矩形である必要はありません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_a_pink_outset_border">ピンク色の出っ張った境界の設定</h3>

#### HTML

```html
<div>I have a border, an outline, and a box shadow! Amazing, isn't it?</div>
```

#### CSS

```css
div {
  border: 0.5rem outset pink;
  outline: 0.5rem solid khaki;
  box-shadow: 0 0 0 2rem skyblue;
  border-radius: 12px;
  font: bold 1rem sans-serif;
  margin: 2rem;
  padding: 1rem;
  outline-offset: 0.5rem;
}
```

#### 結果

{{EmbedLiveSample('Setting_a_pink_outset_border')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref("border-width")}}
- {{Cssxref("border-style")}}
- {{Cssxref("border-color")}}
- [背景と境界](/ja/docs/Web/CSS/CSS_Backgrounds_and_Borders)
- [CSS の学習: 背景と境界](/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
