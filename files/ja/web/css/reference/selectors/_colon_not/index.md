---
title: :not()
slug: Web/CSS/Reference/Selectors/:not
original_slug: Web/CSS/:not
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

**`:not()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、列挙されたセレクターに一致しない要素を表します。特定の項目が選択されることを防ぐため、否定擬似クラス (_negation pseudo-class_) と呼ばれています。

{{InteractiveExample("CSS デモ: :not", "tabbed-shorter")}}

```css interactive-example
p:not(.irrelevant) {
  font-weight: bold;
}

p > strong,
p > b.important {
  color: crimson;
}

p > :not(strong, b.important) {
  color: darkmagenta;
}
```

```html-nolint interactive-example
<p>
  <b>火星</b> は、地球に最もよく似た惑星のひとつです。<b>火星</b>の 1 日は、地球の 1 日とほとんど同じで、わずか <strong>37 分</strong>長いだけです。
</p>

<p class="irrelevant">
  <b class="important">NASA</b> の Jet <del>Momentum</del> Propulsion Laboratory は、<b>金星</b>の極端な温度と大気圧に耐えるミッションの概念を設計しています。
</p>
```

`:not()` 擬似クラスには、使用する前に知っておいた方が良い[クセやコツ、予想外の結果](#解説)がいくつかあります。

## 構文

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

### 引数

`:not()` 擬似クラスは引数として、 1 つ以上のセレクターをカンマで区切った[セレクターリスト](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#selector_list)を必要とします。このリストには[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を含めることはできませんが、その他の単純、複合、複雑セレクターは利用できます。

## 解説

`:not()` を使用する際のふつうではない効果や結果がいくつかありますので、使用する際には気を付けてください。

- この擬似クラスを使用して無意味なセレクターを書くことができます。例えば、 `:not(*)` は要素ではないすべての要素を選択するので、ルールは適用されません。
- この擬似クラスはルールの[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)を上げることができます。例えば、 `#foo:not(#bar)` は単純な `#foo` と同じ要素を選択しますが、2 つの `id` セレクターにより、詳細度はより高くなります。
- 擬似クラス `:not()` の詳細度は、カンマで区切られたセレクターの引数の中で最も詳細なセレクターの詳細度に置き換えられます。[`:not(:is(argument))`](/ja/docs/Web/CSS/Reference/Selectors/:is) と書かれた場合と同じ詳細度を提供します。
- `:not(.foo)` は `.foo` ではないすべての要素を選択するため、{{HTMLElement("html")}} や {{HTMLElement("body")}} も選択します。
- このセレクターは、「Xでない」ものすべてに一致します。これは、[子孫結合子](/ja/docs/Web/CSS/Reference/Selectors/Descendant_combinator)と使用すると、対象とする要素を選択する経路が複数できるので、意外な動きをするかもしれません。例えば、`body :not(table) a` は {{HTMLElement("table")}} 内のリンクにも適用されます。{{HTMLElement("tr")}}、{{HTMLElement("tbody")}}、{{HTMLElement("th")}}、{{HTMLElement("td")}}、{{HTMLElement("caption")}} などはすべて `:not(table)` の部分に一致するからです。これを回避するには、代わりに `body a:not(table a)` を使用すると、テーブルの子孫ではないリンクのみに適用されます。
- 複数のセレクターを同時に否定することができます。例えば、`:not(.foo, .bar)` は `:not(.foo):not(.bar)` と同じです。
- もし `:not()` 擬似クラスに渡されたセレクターのいずれかが無効であったり、ブラウザーが対応していなかったりした場合、ルール全体が無効となります。この挙動を克服するために有効な方法は、寛容なセレクターリストを受け入れる [`:is()`](/ja/docs/Web/CSS/Reference/Selectors/:is) 擬似クラスを使用することです。例えば `:not(.foo, :invalid-pseudo-class)` はルール全体を無効にしてしまいますが、 `:not(:is(.foo, :invalid-pseudo-class))` は `.foo` 以外のあらゆる（{{HTMLElement("html")}} や {{HTMLElement("body")}} を含む）要素に一致します。

## 例

### :not() と有効なセレクターの使用

この例では、 `:not()` の使用例をいくつか示しています。

#### HTML

```html
<p>これは段落です。</p>
<p class="fancy">とてもおしゃれ！</p>
<div>これは段落ではありません。</div>
<h2>
  <span class="foo">foo が h2 の中にある</span>
  <span class="bar">bar が h2 の中にある</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* `.fancy` クラスの中にない <p> 要素 */
p:not(.fancy) {
  color: green;
}

/* <p> 要素ではない要素 */
body :not(p) {
  text-decoration: underline;
}

/* <div> または `.fancy` ではない要素 */
body :not(div):not(.fancy) {
  font-weight: bold;
}

/* <div> でも `.fancy` でもない要素 */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* <h2> の中にある要素で <span> に `.foo` クラスでないもの */
h2 :not(span.foo) {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Using_not_with_valid_selectors', '100%', 320)}}

### :not() と無効なセレクターの使用

この例では、無効なセレクターで `:not()` を使用し、無効化を防止する方法を示します。

#### HTML

```html
<p class="foo">これは .foo の付いた段落です。</p>
<p class="bar">これは .bar の付いた段落です。</p>
<div>これはクラスのない div です。</div>
<div class="foo">.foo の付いた div です。</div>
<div class="bar">.bar の付いた div です。</div>
<div class="foo bar">.foo および .bar の付いた div です。</div>
```

#### CSS

```css
/* 無効なルール。何もしない */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* すべての <p> 要素のうち `foo` クラスがないものを選択 */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentColor;
}

/* すべての <div> 要素のうち `foo` または `bar` クラスがないものを選択 */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* すべての <div> 要素のうち `foo` または `bar` クラスがないものを選択 */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentColor;
}
```

#### 結果

{{EmbedLiveSample('Using_not_with_invalid_selectors', '100%', 320)}}

`p:not(.foo, :invalid-pseudo-class)` というルールは、無効なセレクターを含んでいるため、無効です。`:is()` 擬似クラスは寛容なセレクターリストを受け入れるので、 `:is(.foo, :invalid-pseudo-class)` ルールは有効で、 `:is(.foo)` と同等になります。したがって、`p:not(:is(.foo, :invalid-pseudo-class))` というルールは `p:not(.foo)` と等価であり、有効です。

もし `:invalid-pseudo-class` が有効なセレクターであった場合も、上記の最初の 2 つのルールは等価です（後の 2 つのルールはそれを示しています）。`:is()` を使用することで、このルールはより強固なものになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [学習: 擬似クラスと擬似要素](/ja/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
- 関連する CSS 擬似クラス:
  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}

- [How :not() chains multiple selectors](/en-US/blog/css-not-pseudo-multiple-selectors/) (MDN, 2023)
