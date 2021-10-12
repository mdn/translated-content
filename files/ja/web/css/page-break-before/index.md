---
title: page-break-before
slug: Web/CSS/page-break-before
tags:
  - CSS
  - CSS プロパティ
  - 改ページ
  - Reference
  - recipe:css-property
browser-compat: css.properties.page-break-before
translation_of: Web/CSS/page-break-before
---
{{CSSRef}}

> **Warning:** このプロパティは {{cssxref("break-before")}} プロパティによって置き換えられました。

**`page-break-before`** CSS プロパティは、現在の要素の*前で*改ページが行われるように調整します。

このプロパティは、ボックスを生成するブロックレベル要素に適用されます。ボックスを生成しない空の {{ HTMLElement("div") }} には適用されません。

```css
/* キーワード値 */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* グローバル値 */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: unset;
```

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `always`
  - : 要素の前で必ず改ページが行われるように強制します。
- `avoid`
  - : 要素の前で改ページされないようにします。
- `left`
  - : 要素の前における改ページを強制し、次のページが左ページとして整形されるようにします。
- `right`
  - : 要素の前における改ページを強制し、次のページが右ページとして整形されるようにします。
- `recto` {{experimental_inline}}
  - : 左から右に読むページにおいて `right` と同じ動作をします。右から左に読むページであれば `left` と同じ働きをします。
- `verso` {{experimental_inline}}
  - : 左から右に読むページにおいて `left` と同じ動作をします。右から左に読むページであれば `right` と同じ働きをします。

## 改ページの別名

`page-break-before` プロパティは古いプロパティとなり、 {{cssxref("break-before")}} によって置き換えられました。

互換性のため、 `page-break-before` はブラウザーから `break-before` の別名として扱われます。これにより、 `page-break-before` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### ある要素の前で改ページを防ぐ

```css
/* div の前で改ページされないようにします */
div.note {
    page-break-before: avoid;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
