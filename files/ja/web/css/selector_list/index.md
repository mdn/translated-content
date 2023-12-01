---
title: セレクターリスト
slug: Web/CSS/Selector_list
l10n:
  sourceCommit: 4aacbcc92d55473a07225b7102c9e1d705e89ead
---

{{CSSRef}}

CSS の **セレクターリスト** (selector list) (`,`) は、すべての一致するノードを選択します。セレクターリストはカンマ区切りのセレクターのリストです。

## 概要

複数のセレクターが同じ宣言を共有しているときは、カンマ区切りのリストにまとめることができます。セレクターリストはいくつかの関数型 CSS 擬似クラスのパラメーターとして与えることもできます。空白文字がカンマの前後に入る場合もあります。

次の 3 つの宣言は等価です:

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

異なる基準でマッチする要素に同じスタイルを適用するときは、セレクターをカンマ区切りのリストにまとめると、一貫性が得られると同時にスタイルシートの容量も削減できます。

### 単一行のグループ化

カンマ区切りのリストを使用して単一行にしたグループ化セレクターです。

```css
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: helvetica;
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

無効なセレクターは、何にもマッチしないことを表します。セレクターリストが無効なセレクターを含むとき、スタイルブロックのすべてが無視されます。寛容なセレクターリストを受け付ける関数型擬似クラスは例外です。

### 無効なセレクターリスト

セレクターリストを使用する欠点は、セレクターリスト内に未対応のセレクターが一つでもあった場合に、ルール全体が無効化されてしまうことです。

次の 2 つの CSS ルールについて考えてみましょう:

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

[無効なセレクターリスト](#無効なセレクターリスト)問題を解決する方法は、寛容なセレクターリストを受け付ける {{CSSxRef(":is", ":is()")}} や {{CSSxRef(":where", ":where()")}} 擬似クラスを使うことです。寛容なセレクターリストの中のそれぞれのセレクターは個別にパースされます。すると、リスト内の無効なセレクターは無視されますが、有効なセレクターは使用されます。

先程の例と比べ、次の 2 つの CSS ルールセットは等価です:

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

### 寛容な相対セレクターリスト

寛容な相対セレクターリストは、寛容なセレクターリストと似ています。リストの要素を、明示的か暗黙的な結合子から始まる相対セレクターとして解釈します。

```css
h2:has(+ p, > ul::after, + ul.red) {
  font-style: italic;
}
```

この例だと `<p>` か `<ul class="red">` がすぐ後にある `h2` は斜体になります。寛容な相対セレクターリスト [`:has()`](/ja/docs/Web/CSS/:has) の中で擬似要素は無効ですが、リストが寛容なのでセレクターを壊すことはありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 擬似クラス [`:is()`](/ja/docs/Web/CSS/:is)、[`:where()`](/ja/docs/Web/CSS/:where)、[`:not()`](/ja/docs/Web/CSS/:not)、[`:has()`](/ja/docs/Web/CSS/:has) は、寛容なセレクターリストを受け付けます。
- [CSS セレクター](/ja/docs/Web/CSS/CSS_Selectors)
