---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
tags:
  - CSS
  - CSS Text Decoration
  - プロパティ
  - Reference
  - recipe:css-property
  - text-decoration
  - text-underline-offset
browser-compat: css.properties.text-underline-offset
translation_of: Web/CSS/text-underline-offset
---
{{CSSRef}}

**`text-underline-offset`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 ({{cssxref("text-decoration")}} を使用して適用された) 下線のテキスト装飾線の本来の位置からのオフセット距離を設定します。

`text-underline-offset` は {{cssxref('text-decoration')}} の一括指定の一部ではありません。一つの要素が複数の `text-decoration` による線を持つため、 `text-underline-offset` は下線のみに影響し、 `overline` や `line-through` などの他の装飾線には影響**しません**。

## 構文

```css
/* 単一のキーワード */
text-underline-offset: auto;

/* 長さ */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* パーセント値 */
text-underline-offset: 20%;

/* グローバル値 */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: unset;
```

`text-underline-offset` プロパティは、以下のリストのうち一つの値で指定します。

### 値

- `auto`
  - : ブラウザーが下線の適切なオフセットを選択します。
- `<length>`
  - : 下線のオフセットを {{cssxref('length')}} で指定し、フォントファイルの提案やブラウザーの既定値を上書きします。オフセットがフォントサイズに合わせて変化するように、 `em` 単位を使用することを推奨します。
- `<percentage>`
  - : 下線のオフセットを、要素のフォントにおける **1 em** に対する {{cssxref('percentage')}} で指定します。パーセント値はは相対値として継承されるため、フォントの変化に応じて変化します。このプロパティを適用した場合、オフセットは、フォントサイズや垂直方向の配置が異なる子要素があっても、下線が適用されているボックス全体で一定となります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

<h2 id="Examples">例</h2>

### text-underline-offset のデモ

```html
<p class="oneline">Here's some text with an offset wavy red underline!</p>
<br>
<p class="twolines">This text has lines both above and below it. Only the bottom one is offset.</p>
```

```css
p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.twolines {
  text-decoration-color: purple;
  text-decoration-line: underline overline;
}
```

{{ EmbedLiveSample('Examples', '', '', '') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-thickness")}}
