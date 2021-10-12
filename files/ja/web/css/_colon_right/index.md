---
title: ':right'
slug: Web/CSS/:right
tags:
  - '@page'
  - CSS
  - レイアウト
  - 擬似クラス
  - Reference
  - セレクター
  - Web
browser-compat: css.selectors.right
translation_of: Web/CSS/:right
---
{{ CSSRef() }}

**`:right`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、{{cssxref("@page")}} [アットルール](/ja/docs/Web/CSS/At-rule)で使われ、印刷文書の右側のページすべてを表します。

```css
/* 印刷時に右側のページを選択 */
@page :right {
  margin: 2in 3in;
}
```

そのページが左側か右側かは、文書の主要な書字方向によって決まります。例えば、最初のページの主な書字方向が左から右であれば `:right` ページになります。書字方向が右から左であれば {{Cssxref(":left")}} ページになります。

> **Note:** この擬似クラスは、*ページボックス*の {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }}, {{ Cssxref("background") }} の各プロパティのみを変更するために使用することができます。他のすべてのプロパティは無視され、ページ内の文書コンテンツではなく、ページボックスにのみ影響します。

## 構文

{{csssyntax}}

## 例

### 右側のページにマージンを設定

```css
@page :right {
  margin: 2in 3in;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ Cssxref("@page") }}
- ページに関する他の擬似クラス: {{ Cssxref(":first") }}, {{ Cssxref(":left") }}
