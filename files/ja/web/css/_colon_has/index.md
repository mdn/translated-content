---
title: ':has()'
slug: Web/CSS/:has
tags:
  - ':has'
  - CSS
  - 実験的
  - リファレンス
  - セレクター
  - リファレンス
  - 擬似クラス
browser-compat: css.selectors.has
translation_of: Web/CSS/:has
---
{{CSSRef}}

**`:has()`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、引数として渡されたセレクターに (指定された要素の {{cssxref(":scope")}} の相対で) 該当する要素が一つ以上の要素に一致することを表します。

```css
/* <img> 要素を直接中に含む <a> を選択する */
/* なお、これはまだブラウザーが対応していません */
let test = document.querySelector('a:has(> img)');
```

## 構文

{{CSSSyntax}}

## 解説

`:has()` 擬似クラスは、セレクターの相対的なリストを引数に取ります。 CSS Selectors Level 4 仕様書よりも前の版では、 `:has` はスタイルシート内で使用することができず、 {{domxref("document.querySelector()")}} のような関数でのみ利用することができるという制限がありました (性能上の問題です)。そのように実装するブラウザーはなかったので、この制限は撤廃されました。すなわち、ブラウザーは現在、 `:has()` のスタイルシートでの使用に対応しています。

## 例

### \<a> 要素のうち直接 \<img> を含んでいるものを選択

次のセレクターは、 {{HTMLElement("img")}} を直接子に持つ {{HTMLElement("a")}} 要素のみを選択します。

    a:has(> img)

### \<h1> 要素のうち直後に \<p> があるものを選択

次のセレクターは、直後に {{htmlelement("p")}} 要素を持つ {{HTMLElement("h1")}} 要素のみを選択します。

    h1:has(+ p)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [`:scope`](/ja/docs/Web/CSS/:scope)
