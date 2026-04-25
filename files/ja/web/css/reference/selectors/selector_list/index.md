---
title: セレクターリスト
slug: Web/CSS/Reference/Selectors/Selector_list
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

CSS の **セレクターリスト** (selector list) (`,`) は、すべての一致するノードを選択します。セレクターリストはセレクターのカンマ区切りのリストです。

## 概要

複数のセレクターが同じ宣言を共有しているときは、カンマ区切りのリストにまとめることができます。セレクターリストはいくつかの関数型 CSS 擬似クラスの引数として与えることもできます。空白文字がカンマの前後に入る場合もあります。

次の 3 つの宣言は等価です。

```css
span {
  border: red 2px solid;
}
div {
  border: red 2px solid;
}
```

```css
span,
div {
  border: red 2px solid;
}
```

```css
:is(span, div) {
  border: red 2px solid;
}
```

## 例

異なる基準で一致する要素に同じスタイルを適用するときは、セレクターをカンマ区切りのリストにまとめると、一貫性が得られると同時にスタイルシートの容量も削減できます。

### 単一行のグループ化

カンマ区切りのリストを使用して単一行にしたグループ化セレクターです。

```css-nolint
h1, h2, h3, h4, h5, h6 {
  font-family: "Helvetica", "Arial";
}
```

### 複数行のグループ化

カンマ区切りのリストを使用して複数行にしたグループ化セレクターです。

```css
#main,
.content,
article,
h1 + p {
  font-size: 1.1em;
}
```

## セレクターリストの有効、無効について

無効なセレクターは、何にも一致しないことを表します。セレクターリストが無効なセレクターを含むとき、スタイルブロックのすべてが無視されます。ただし {{cssxref(":is()")}} および {{cssxref(":where()")}} 擬似クラスは例外で、[寛容なセレクターリスト](#寛容なセレクターリスト)を受け付けます。

### 無効なセレクターリスト

セレクターリストを使用する欠点は、セレクターリスト内に未対応のセレクターが一つでもあった場合に、ルール全体が無効化されてしまうことです。

次の 2 つの CSS ルールについて考えてみましょう。

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
h1,
h2:invalid-pseudo,
h3 {
  font-family: sans-serif;
}
```

これらは等価ではありません。1 つ目のルールセットでは `h1` 要素と `h3` 要素にスタイルが適用されますが、`h2:invalid-pseudo` ルールはパースされません。2 つ目のルールセットでは、リスト内の 1 つのセレクターが無効なため、ルール全体がパースされません。リスト内のいずれかのセレクターが無効ならスタイルブロック全体が無視されるため、`h1` 要素にも `h3` 要素にもスタイルが適用されません。

### 寛容なセレクターリスト

[無効なセレクターリスト](#無効なセレクターリスト)問題を解決する方法は、寛容なセレクターリストを受け付ける {{cssxref(":is()")}} や {{cssxref(":where()")}} 擬似クラスを使うことです。寛容なセレクターリストの中のそれぞれのセレクターは個別にパースされます。すると、リスト内の無効なセレクターは無視されますが、有効なセレクターは使用されます。

先ほどの例と比べ、次の 2 つの CSS ルールセットは等価です。

```css
h1 {
  font-family: sans-serif;
}
h2:maybe-unsupported {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}
```

```css
:is(h1, h2:maybe-unsupported, h3) {
  font-family: sans-serif;
}
```

`:is()` の詳細度は引数の中で最も高いものとなりますが、`:where()` セレクターと寛容なセレクターリストパラメーターは詳細度の重みに作用しません。

### 相対セレクターリスト

相対セレクターのリストとは、セレクターのカンマ区切りのリストであり、明示的または暗黙的な結合子で始まる[相対セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#相対セレクター)として解釈されます。

```css
h2:has(+ p, + ul.red) {
  font-style: italic;
}
```

上記の例では、`h2` 見出しの直後に `<p>` または `<ul class="red">` が続く場合に限り、その見出しにイタリック体のスタイルが適用されます。なお、擬似要素および `:has()` セレクターは、[`:has()`](/ja/docs/Web/CSS/Reference/Selectors/:has)の相対セレクタ－リスト内では使用できません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`:is()`](/ja/docs/Web/CSS/Reference/Selectors/:is) および [`:where()`](/ja/docs/Web/CSS/Reference/Selectors/:where) 擬似クラスは、寛容なセレクターリストを受け取ります。
- [`:not()`](/ja/docs/Web/CSS/Reference/Selectors/:not) 擬似クラスは通常のセレクターリストを受け取ります。
- [`:has()`](/ja/docs/Web/CSS/Reference/Selectors/:has) 擬似クラスは相対セレクターリストを受け取ります。
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
