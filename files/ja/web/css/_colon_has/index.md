---
title: ":has()"
slug: Web/CSS/:has
l10n:
  sourceCommit: e1608631832f2608632569d0bd4061372adc5199
---

{{CSSRef}}

**`:has()`** は CSS の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、引数として渡されたセレクターに (指定された要素の {{cssxref(":scope")}} の相対で) 該当する要素が一つ以上の要素に一致することを表します。

## 構文

```
:has( <forgiving-relative-selector-list> )
```

## 解説

`:has()` 擬似クラスは、セレクターの相対的なリストを引数に取ります。

## 例

### \<a> 要素のうち直接 \<img> を含んでいるものを選択

次のセレクターは、 {{HTMLElement("img")}} を直接子に持つ {{HTMLElement("a")}} 要素のみを選択します。

```css
a:has(> img) {}
```

### \<h1> 要素のうち直後に \<p> があるものを選択

次のセレクターは、直後に {{htmlelement("p")}} 要素を持つ {{HTMLElement("h1")}} 要素のみを選択します。

```css
h1:has(+ p) {}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [`:scope`](/ja/docs/Web/CSS/:scope)
