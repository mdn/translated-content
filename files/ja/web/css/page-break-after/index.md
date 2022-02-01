---
title: page-break-after
slug: Web/CSS/page-break-after
tags:
  - CSS
  - CSS プロパティ
  - ページ区切り
  - Reference
  - recipe:css-property
browser-compat: css.properties.page-break-after
translation_of: Web/CSS/page-break-after
---
{{CSSRef}}

> **Warning:** このプロパティは {{cssxref("break-after")}} プロパティで置き換えられました。

**`page-break-after`** は CSS のプロパティで、現在の要素の*後で*改ページが行われるように調整します。

```css
/* キーワード値 */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* グローバル値 */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: unset;
```

このプロパティは、ボックスを生成するブロックレベル要素に適用されます。ボックスを生成しない空の {{HTMLElement("div")}} には適用されません。

## 構文

### 値

- `auto`
  - : 初期値です。自動的な改ページが行われます (強制や禁止の機能は持ちません)。
- `always`
  - : 要素の後で必ず改ページが行われるように強制します。
- `avoid`
  - : 要素の後で改ページされないようにします。
- `left`
  - : 要素の後における改ページを強制し、次のページが左ページとして整形されるようにします。
- `right`
  - : 要素の後における改ページを強制し、次のページが右ページとして整形されるようにします。
- `recto` {{experimental_inline}}
  - : 左から右に進むページにおいて `right` と同じ動作をします。右から左に進むページであれば `left` と同じ働きをします。
- `verso` {{experimental_inline}}
  - : 左から右に進むページにおいて `left` と同じ動作をします。右から左に進むページであれば `right` と同じ働きをします。

## 改ページの別名

`page-break-after` プロパティは古いプロパティとなり、 {{cssxref("break-after")}} で置き換えられました。

互換性のため、 `page-break-after` はブラウザーでは `break-after` の別名として扱われます。これにより、 `page-break-after` を使用しているサイトが引き続き設計通りに動作することを保証します。値のサブセットは次のような別名になります。

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 脚注の後にページ区切りを設定

```css
/* 脚注の後で新しいページに移ります */
div.footnotes {
  page-break-after: always;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
