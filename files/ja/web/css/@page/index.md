---
title: "@page"
slug: Web/CSS/@page
---

{{CSSRef}}

**`@page`** は CSS のアットルールで、文書を印刷するときに一部の CSS プロパティを変更するために使用します。

## 構文

```css
@page {
  margin: 1cm;
}

@page :first {
  margin: 2cm;
}
```

### 記述子

- [`size`](/ja/docs/Web/CSS/@page/size)
  - : 対象となるページボックスの包含ブロックの寸法と向きを指定します。一般的な場合、1つのページボックスが1枚の用紙に印刷され、対象となる用紙の寸法を示します。

## 解説

`@page` ですべての CSS プロパティを変更できるわけではありません。変更できるのは、マージン、orphans、widows と、文書のページ区切りだけです。これ以外の CSS プロパティを変えようとしても、無視されます。

`@page` アットルールには、 CSS オブジェクトモデルインターフェイスの {{domxref("CSSPageRule")}} からアクセスできます。

> **メモ:** W3C は、ビューポートに関する {{cssxref("&lt;length&gt;")}} の単位、`vh`、`vw`、`vmin`、`vmax` の取り扱い方について議論中です。差し当たっては、これらを `@page` アットルールの中で使わないでください。

## 形式文法

{{csssyntax}}

## 例

### @page 擬似クラスの例

さまざまな `@page` の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)のページにある例を参照してください。

- {{Cssxref(":blank")}}
- {{Cssxref(":first")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
- {{Cssxref(":recto")}} {{experimental_inline}}
- {{Cssxref(":verso")}} {{experimental_inline}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- この件 (ページベースのカウンターなど) に関する進捗の追跡は、 Bugzilla のチケット [\[META\] CSS Paged Media Module Level 3](https://bugzilla.mozilla.org/show_bug.cgi?id=286443) を参照してください。
