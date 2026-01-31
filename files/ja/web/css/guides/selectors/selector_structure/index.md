---
title: CSS セレクターの構造
short-title: セレクターの構造
slug: Web/CSS/Guides/Selectors/Selector_structure
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

CSS セレクターは、ツリー構造内の要素または要素の特定のパターンを表します。「セレクター」という用語は、[単純セレクター](#単純セレクター)、[複合セレクター](#複合セレクター)、[複雑セレクター](#複雑セレクター)を参照することができます。has()`擬似クラスに引数として記載する場合、これらのセレクターは[相対セレクター](#相対セレクター)と呼ばれ、1 つ以上のアンカー要素からの相対的な要素を表します。

これらのセレクターはカンマ区切りの[セレクターリスト](#セレクターリスト)で結合することができます。[寛容でないセレクター](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#セレクターリストの有効、無効について)リストに含まれるセレクターが無効な場合、セレクターリスト全体が無効になります。

## 単純セレクター

**単純セレクター**とは、単一の型セレクター、属性セレクター、擬似クラスなどの単一の成分を持つセレクターのことで、他のセレクター成分や結合子と組み合わせたり含んだりすることがないものです。指定された要素が単純セレクターに一致すると言うのは、その単純セレクターが要素を正確に説明している場合です。単一の[基本セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#基本セレクター)、[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)、[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)、[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を含むセレクターは単純セレクターです。

```css
#myId {
}

[pattern*="\d"] {
}
```

## 複合セレクター

**複合セレクター**は、[結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#結合子)で区切られていない一連の[単純セレクター](#単純セレクター)です。複合セレクターは、単一の要素に対する同時条件の集合を表します。指定された要素が複合セレクターに一致するというのは、その要素が複合セレクターに含まれるすべての単純セレクターに一致するときです。

```css
a#selected {
}

[type="checkbox"]:checked:focus {
}
```

複合セレクターでは、[要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors) または[全称セレクター](/ja/docs/Web/CSS/Reference/Selectors/Universal_selectors)がセレクターの並びの先頭に来なければなりません。型セレクターまたは全称セレクターを入力することができるのは 1 つだけです。ホワイトスペースは[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)を表しますので、複合セレクターを構成する単純セレクターの間にホワイトスペースを入れてはいけません。

## 複雑セレクター

**複雑セレクター**は、ホワイトスペースの[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)を含む、結合子で区切られた 1 つ以上の単純セレクターや複合セレクターの並びです。

複雑セレクターは、一連の要素に対する一連の同時条件を表します。

```css
a#selected > .icon {
}

.box h2 + p {
}
```

セレクターは右から左に読むことができます。例えば、`a#selected > .icon` は `selected` という id を持つ `<a>` 要素の直接の子要素で、クラスが `icon` であるすべての要素に一致します。セレクター `.box h2 + p` は `box` クラスを持つ要素の子孫である `<h2>` 要素の直後に来る最初の `<p>` に一致します。

## セレクターリスト

[**セレクターリスト**](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)は、単純、複合、複雑セレクターのカンマ区切りのリストです。指定された要素がセレクターリストに一致するとき、その要素はセレクターリストに一致すると言われます。

```css
#main,
article.heading {
}
```

[寛容でないセレクター](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#セレクターリストの有効、無効について)リストのセレクターが無効な場合、セレクターリスト全体が無効になります。

```css
#main,
:bad-pseudoclass,
.validClass {
  /* `:bad-pseudoclass` は無効なので、このスタイルブロックは無効になりました */
}
```

{{cssxref(":is()")}} と {{cssxref(":where()")}} 擬似クラスは、[寛容なセレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#寛容なセレクターリスト)を構築するために使用することができます。

## 相対セレクター

**相対セレクター**は、結合子で始まる 1 つ以上のアンカー要素からの相対的な要素を表すセレクターです。明示的な結合子で始まらない相対セレクターは、暗黙の[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)を持ちます。

相対セレクターは、セレクターリストでは使用できません。むしろ、 {{cssxref(":has()")}} 擬似クラスなどの特定のコンテキスト内で受け入れられます。

```css
:has(+ div#topic > #reference) {
}

:has(> .icon) {
}

dt:has(+ img) ~ dd {
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [CSS セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [寛容なセレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#寛容なセレクターリスト)
- {{DOMXref("Document.querySelector()")}}
- {{DOMXref("Document.querySelectorAll()")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)モジュール
- [CSS 擬似要素](/ja/docs/Web/CSS/Guides/Pseudo-elements)モジュール
