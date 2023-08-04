---
title: ":left"
slug: Web/CSS/:left
---

{{ CSSRef() }}

**`:left`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、{{cssxref("@page")}} [アットルール](/ja/docs/Web/CSS/At-rule)で使われ、印刷文書の左側のページすべてを表します。

```css
/* 印刷時に左側のページを選択 */
@page :left {
  margin: 2in 3in;
}
```

そのページが左側か右側かは、文書の主な書字方向によって決まります。例えば、最初のページの主な書字方向が左から右であれば {{Cssxref(":right")}} ページになります。書字方向が右から左であれば `:left` ページになります。

> **メモ:** この擬似クラスは、*ページボックス*の {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }}, {{ Cssxref("background") }} の各プロパティのみを変更するために使用することができます。他のすべてのプロパティは無視され、ページ内の文書コンテンツではなく、ページボックスにのみ影響します。

## 構文

```
:left
```

## 例

### 左側のページのマージンを設定

```css
@page :left {
  margin: 2in 3in;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ Cssxref("@page") }}
- ページに関する他の擬似クラス: {{ Cssxref(":first") }}, {{ Cssxref(":right") }}
