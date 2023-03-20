---
title: ":not()"
slug: Web/CSS/:not
l10n:
  sourceCommit: becafba439d4fa6038e6779083a0985c760d0438
---

{{CSSRef}}

**`:not()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、列挙されたセレクターに一致しない要素を表します。特定の項目が選択されることを防ぐため、否定擬似クラス (_negation pseudo-class_) と呼ばれています。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-not.html", "tabbed-shorter")}}

`:not()` 擬似クラスには、使用する前に知っておいた方が良い[クセやコツ、予想外の結果](#解説)がいくつかあります。

## 構文

`:not()` 擬似クラスは引数として、1つまたは複数のセレクターをカンマで区切ったものを要求します。リストには否定セレクターや[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)を含めることはできません。

```css-nolint
:not(<complex-selector-list>) {
  /* ... */
}
```

## 解説

`:not()` を使用する際のふつうではない効果や結果がいくつかありますので、使用する際には気を付けてください。

- この擬似クラスを使用して無意味なセレクターを書くことができます。例えば、 `:not(*)` は要素ではないすべての要素を選択するので、ルールは適用されません。
- この擬似クラスはルールの[詳細度](/ja/docs/Web/CSS/Specificity)を上げることができます。例えば、 `#foo:not(#bar)` は単純な `#foo` と同じ要素を選択しますが、2 つの `id` セレクターにより、詳細度はより高くなります。
- 擬似クラス `:not()` の詳細度は、カンマで区切られたセレクターの引数の中で最も詳細なセレクターの詳細度に置き換えられます。[`:not(:is(argument))`](/ja/docs/Web/CSS/:is) と書かれた場合と同じ詳細度を提供します。
- `:not(.foo)` は `.foo` ではないすべての要素を選択するため、{{HTMLElement("html")}} や {{HTMLElement("body")}} も選択します。
- このセレクターは、「Xでない」ものすべてに一致します。これは、[子孫結合子](/ja/docs/Web/CSS/Descendant_combinator)と使用すると、対象とする要素を選択する経路が複数できるので、意外な動きをするかもしれません。例えば、`body :not(table) a` は {{HTMLElement("table")}} 内のリンクにも適用されます。{{HTMLElement("tr")}}、{{HTMLElement("tbody")}}、{{HTMLElement("th")}}、{{HTMLElement("td")}}、{{HTMLElement("caption")}} などはすべて `:not(table)` の部分に一致するからです。
- 複数のセレクターを同時に否定することができます。例えば、`:not(.foo, .bar)` は `:not(.foo):not(.bar)` と同じです。
- もし `:not()` 擬似クラスに渡されたセレクターのいずれかが無効であったり、ブラウザーが対応していなかったりした場合、ルール全体が無効となります。この挙動を克服するために有効な方法は、寛容なセレクターリストを受け入れる [`:is()`](/ja/docs/Web/CSS/:is) 擬似クラスを使用することです。例えば `:not(.foo, :invalid-pseudo-class)` はルール全体を無効にしてしまいますが、 `:not(is(.foo, :invalid-pseudo-class))` は `.foo` 以外のあらゆる（{{HTMLElement("html")}} や {{HTMLElement("body")}} を含む）要素に一致します。

## 例

### 基本的な一連の :not() の例

#### HTML

```html
<p>I am a paragraph.</p>
<p class="fancy">I am so very fancy!</p>
<div>I am NOT a paragraph.</div>
<h2>
  <span class="foo">foo inside h2</span>
  <span class="bar">bar inside h2</span>
</h2>
```

#### CSS

```css
.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* '.fancy' クラスの中にない <p> 要素 */
p:not(.fancy) {
  color: green;
}

/* <p> 要素ではない要素 */
body :not(p) {
  text-decoration: underline;
}

/* <div> または <span> 要素ではない要素 */
body :not(div):not(span) {
  font-weight: bold;
}

/* <div> でも '.fancy' でもない要素 */
body :not(div, .fancy) {
  text-decoration: overline underline;
}

/* <h2> の中にある要素で <span> に foo クラスでないもの */
h2 :not(span.foo) {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('Basic_set_of_not_examples', '100%', 320)}}

### :not() と無効なセレクター

この例では、無効なセレクターで `:not()` を使用し、無効化を防止する方法を示します。

#### HTML

```html
<p class="foo">I am a paragraph with .foo</p>
<p class="bar">I am a paragraph with .bar</p>
<div>I am a div without a class</div>
<div class="foo">I am a div with .foo</div>
<div class="bar">I am a div with .bar</div>
<div class="foo bar">I am a div with .foo and .bar</div>
```

#### CSS

```css
/* 無効なルール。何もしない */
p:not(.foo, :invalid-pseudo-class) {
  color: red;
  font-style: italic;
}

/* Select all <p> elements without the `foo` class */
p:not(:is(.foo, :invalid-pseudo-class)) {
  color: green;
  border-top: dotted thin currentcolor;
}

/* <div> 要素のうち `foo` または `bar` クラスの付いていない全てのもの */
div:not(.foo, .bar) {
  color: red;
  font-style: italic;
}

/* <div> 要素のうち `foo` または `bar` クラスの付いていない全てのもの */
div:not(:is(.foo, .bar)) {
  border-bottom: dotted thin currentcolor;
}
```

#### 結果

{{EmbedLiveSample('not_with_invalid_selectors', '100%', 320)}}

`p:not(.foo, :invalid-pseudo-class)` というルールは、無効なセレクターを含んでいるため、無効です。`:is()` 擬似クラスは寛容なセレクターリストを受け入れるので、 `:is(.foo, :invalid-pseudo-class)` ルールは有効で、 `:is(.foo)` と同等になります。したがって、`p:not(:is(.foo, :invalid-pseudo-class))` というルールは `p:not(.foo)` と等価であり、有効です。

もし `:invalid-pseudo-class` が有効なセレクターであった場合も、上記の最初の 2 つのルールは等価です（後の 2 つのルールはそれを示しています）。`:is()` を使用することで、このルールはより強固なものになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)
- [擬似クラスと擬似要素](/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
- 関連する CSS 擬似クラス:

  - {{cssxref(":has", ":has()")}}
  - {{cssxref(":is", ":is()")}}
  - {{cssxref(":where", ":where()")}}
