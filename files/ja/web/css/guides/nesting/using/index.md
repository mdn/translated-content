---
title: CSS 入れ子の使用
short-title: 入れ子の使用
slug: Web/CSS/Guides/Nesting/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュールにより、スタイルシートをより読みやすく、よりモジュール化しやすく、より保守しやすく書くことができます。常にセレクターを繰り返すわけではないので、ファイルサイズも縮小することができます。

CSS 入れ子は、 CSS プリプロセッサーで事前にコンパイルされるのではなく、ブラウザーで解釈できるという点で、 [Sass](https://sass-lang.com/) のような CSS プリプロセッサーとは異なります。また、 CSS 入れ子において、 [`&` 入れ子セレクターの詳細度](/ja/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)は {{cssxref(':is',':is()')}} 関数に似ており、関連するセレクターリストの中で最も高い詳細度を使用して計算されます。

このガイドでは、CSS で入れ子を配置するさまざまな方法を示します。

## 子セレクター

CSS 入れ子を使用して、親の子セレクターを作成し、そのセレクターを使用して固有の親の子要素を対象とすることができます。これは [`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)を使っても使わなくても可能です。

特定の場面では、 `&` 入れ子セレクターが必要である場合や有益である場合があります。

- [複合セレクター](#複合セレクター)または[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)などを使用して、セレクターを互いに結合する場合。
- 後方互換性のため。
- 読みやすさのための視覚的インジケーターとして、 `&` 入れ子セレクターを見たときに、 CSS 入れ子を使用していることがわかります。

```css
/* 入れ子セレクターなし */
.parent {
  /* 親スタイル */
  .child {
    /* 親の子のスタイル */
  }
}

/* 入れ子セレクターあり */
.parent {
  /* 親スタイル */
  & .child {
    /* 親の子のスタイル */
  }
}

/* ブラウザーは両者を次のように解釈する */
.parent {
  /* 親スタイル */
}
.parent .child {
  /* 親の子のスタイル */
}
```

### 例

この例では、 `&` 入れ子セレクターを使用しない場合と使用する場合で、 `<label>` 内の `<input>` は `<label>` の兄弟である `<input>` と異なる形でスタイル設定されています。

#### 入れ子セレクターなし

##### HTML

```html-nolint
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* label の中ではない input のスタイル */
  border: tomato 2px solid;
}
label {
  /* label のスタイル */
  font-family: system-ui;
  font-size: 1.25rem;

  input {
    /* label の中の input のスタイル */
    border: blue 2px dashed;
  }
}
```

##### 結果

{{EmbedLiveSample('入れ子セレクターなし','100%','120')}}

#### 入れ子セレクターあり

```html-nolint hidden
<form>
  <label for="name">Name:
    <input type="text" id="name" />
  </label>
  <label for="email">email:</label>
  <input type="text" id="email" />
</form>
```

##### CSS

```css hidden
form,
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

```css
input {
  /* label の中ではない input のスタイル */
  border: tomato 2px solid;
}
label {
  /* label のスタイル */
  font-family: system-ui;
  font-size: 1.25rem;

  & input {
    /* label の中の input のスタイル */
    border: blue 2px dashed;
  }
}
```

##### 結果

{{EmbedLiveSample('入れ子セレクターあり','100%','120')}}

## 結合子

[CSS 結合子](/ja/docs/Learn_web_development/Core/Styling_basics/Combinators)は `&` 入れ子セレクターの有無にかかわらず使用することができます。

### 例

#### 兄弟結合子の入れ子

この例では、それぞれの `<h2>` の直後の段落を[次兄弟結合子 (`+`)](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) を使用して CSS の入れ子を使用して対象にしています。

##### HTML

```html
<h2>見出し</h2>
<p>これは最初の段落です。</p>
<p>これは 2 番目の段落です。</p>
```

##### CSS

```css
h2 {
  color: tomato;
  + p {
    color: white;
    background-color: black;
  }
}
/* このコードは & 入れ子セレクターを用いて書くこともできる */
/* 
h2 {
  color: tomato;
  & + p {
    color: white;
    background-color: black;
  }
}
*/
```

##### 結果

{{EmbedLiveSample('兄弟結合子の入れ子','100%','135')}}

## 複合セレクター

入れ子になっている CSS で[複合セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複合セレクター)を使用する場合、 `&` 入れ子セレクターを**使用しなければなりません**。これは、ブラウザーが `&` 入れ子セレクタを使用していないセレクターの間に自動的に空白を追加するためです。

`class="a b"` を持つ要素を対象とするためには、 `&` 入れ子セレクタが必要です。そうしないと、空白が複合セレクターを壊してしまいます。

```css
.a {
  /* class="a" を持った要素のスタイル */
  .b {
    /* class="a" を持った要素のスタイルの子孫である class="b" のスタイル */
  }
  &.b {
    /* class="a b" を持った要素のスタイル */
  }
}

/* the browser parses this as */
.a {
  /* class="a" を持った要素のスタイル */
}
.a .b {
  /* class="b" which is a descendant of class="a" を持った要素のスタイル */
}
.a.b {
  /* class="a b" を持った要素のスタイル */
}
```

### 例

#### 入れ子と複合セレクター

この例では、 `&` 入れ子セレクタを使用して複合セレクターを作成し、複数のクラスを持つ要素をスタイル設定しています。

##### HTML

```html
<div class="notices">
  <div class="notice">
    <h2 class="notice-heading">Notice</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice warning">
    <h2 class="warning-heading">Warning</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div class="notice success">
    <h2 class="success-heading">Success</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
</div>
```

##### CSS

`.notices` のスタイルで[フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout)を使用して列を作成します。

```css
.notices {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 90%;
  margin: auto;
}
```

下記の CSS コードでは、 `&` の有無にかかわらず、入れ子を使用して複合セレクターを作成しています。最上位のセレクターは、 `class="notice"` を持つ要素の基本的なスタイルを定義します。そして、 `&` 入れ子セレクターは、 `class="notice warning"` または `class="notice success"` を持つ要素の複合セレクターを作成するために使用します。さらに、セレクター `.notice .notice-heading::before` では、明示的に `&` を使用することなく複合セレクターを作成するために入れ子を使用することができます。

```css
.notice {
  width: 90%;
  justify-content: center;
  border-radius: 1rem;
  border: black solid 2px;
  background-color: #ffc107;
  color: black;
  padding: 1rem;
  .notice-heading::before {
    /* `.notice .notice-heading::before` と同等 */
    content: "ℹ︎ ";
  }
  &.warning {
    /* `.notice.warning` と同等 */
    background-color: #d81b60;
    border-color: #d81b60;
    color: white;
    .warning-heading::before {
      /* `.notice.warning .warning-heading::before` と同等 */
      content: "! ";
    }
  }
  &.success {
    /* `.notice.success` と同等 */
    background-color: #004d40;
    border-color: #004d40;
    color: white;
    .success-heading::before {
      /* `.notice.success .success-heading::before` と同等 */
      content: "✓ ";
    }
  }
}
```

##### 結果

{{EmbedLiveSample('Nesting_and_compound_selectors','100%', '455')}}

## 追加した入れ子セレクター

また、 `&` 入れ子セレクターを内側のセレクターの後に追加することもでき、これはコンテキストを反転させる効果があります。

これは、親要素に異なるクラスが指定されたときに変更される子要素のスタイルがある場合に有益なことがあります。

```html
<div>
  <span class="foo">text</span>
</div>
```

これは以下のものの逆になります。

```html
<div class="bar">
  <span class="foo">text</span>
</div>
```

```css
.foo {
  /* .foo のスタイル */
  .bar & {
    /* .bar .foo のスタイル */
  }
}
```

### 例

#### 入れ子セレクターの追加

この例では 3 枚のカードがあり、そのうちの 1 枚が機能です。カードはすべてまったく同じですが、 featured カードは見出しに別の色を保有します。入れ子セレクター `&` を追加することで、 `.featured h2` のスタイルを `h2` のスタイルに入れ子にすることができます。

##### HTML

```html
<div class="wrapper">
  <article class="card">
    <h2>Card 1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card featured">
    <h2>Card 2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
  <article class="card">
    <h2>Card 3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </article>
</div>
```

##### CSS

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  font-family: system-ui;
}
```

以下の CSS では、`.card` および `.card h2` のスタイルを作成しています。次に、`h2` スタイルブロックで、`&` 入れ子セレクターを付加した `.featured` クラスを入れ子にし、`.card :is(.featured h2)` のスタイルを作成しています。これは、`:is(.card h2):is(.featured h2)` と同じです。

```css
.card {
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  & h2 {
    /* `.card h2` と同等 */
    color: slateblue;
    .featured & {
      /* `:is(.card h2):is(.featured h2)` と同等 */
      color: tomato;
    }
  }
}
```

##### 結果

{{EmbedLiveSample('Appending_nesting_selector','100%','250')}}

## 入れ子の宣言ルール

入れ子の宣言ルールは、CSS ルールは CSS 文書に記述された順に構文解析されるというものです。

以下の CSS に対応しています。

```css
.foo {
  background-color: silver;
  @media screen {
    color: tomato;
  }
  color: black;
}
```

`background-color` が最初に解釈され、銀色に設定されます。次に `@media` ルールが評価され、最後に `color` が評価されます。

CSSOM は、次のように CSS を解釈します。

```plain
↳ CSSStyleRule
  .style
    - background-color: silver
  ↳ CSSMediaRule
    ↳ CSSNestedDeclarations
      .style (CSSStyleDeclaration, 1) =
      - color: tomato
  ↳ CSSNestedDeclarations
    .style (CSSStyleDeclaration, 1) =
      - color: black
```

解釈の順序を保つため、入れ子になる前のルールはすべて最上位の `CSSRules` として扱われ、入れ子になった後の最上位のルールは `CSSNestedDeclarations` として表されます。
そのため、`color-black` は、元の文書では最上位の宣言であるにもかかわらず、入れ子になった宣言の中に含まれます。

> [!NOTE]
> このルールは {{domxref("CSSNestedDeclarations")}} で追加されました。
> [このインターフェイスに対応していない](/ja/docs/Web/API/CSSNestedDeclarations#ブラウザーの互換性)ブラウザーは、入れ子になったルールを間違った順序で解釈する場合があります。

## 連結（不可能）

[Sass](https://sass-lang.com/) のような CSS プリプロセッサーでは、入れ子を使用して文字列を結合し、新しいクラスを作成することが可能です。これは、 [BEM](https://getbem.com/naming/) のような CSS 手法では一般的です。

```css example-bad
.component {
  &__child-element {
  }
}
/* Sass ではこのようになる */
.component__child-element {
}
```

> [!WARNING]
> これは CSS の入れ子ではできません。[結合子](/ja/docs/Learn_web_development/Core/Styling_basics/Combinators)を用いない場合、入れ子のセレクターは[要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)として扱われます。連結を許可すると、これが壊れてしまいます。

[複合セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#複合セレクター)では、要素型セレクターを最初に入力しなければなりません。 `&Element` （[要素型セレクター](/ja/docs/Web/CSS/Reference/Selectors/Type_selectors)）を書くと、 CSS セレクターとセレクターブロック全体が無効になります。要素型セレクターを最初に入力しなければならないので、複合セレクターは `Element&` と書かなければなりません。

```css example-good
.my-class {
  element& {
  }
}

/* ブラウザーはこれを解釈して複合セレクターにする */
.my-class {
}
element.my-class {
}
```

## 無効な入れ子スタイルルール

ネストされた CSS ルールが無効な場合、その中に含まれるスタイルはすべて無視されます。これは親ルールや先行ルールには影響しません。

次の例では、無効なセレクターがあります（`%` はセレクターとして有効な文字ではありません）。このセレクターを含むルールは無視されますが、それ以降の有効なルールは無視されません。

```css example-bad
.parent {
  /* .parent は動作する */
  & %invalid {
    /* %invalid スタイルはすべて無視される */
  }
  & .valid {
    /* .parent .valid は動作する */
  }
}
```

## 関連情報

- [CSS 入れ子](/ja/docs/Web/CSS/Guides/Nesting)モジュール
- [`&` 入れ子セレクター](/ja/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [入れ子 `@` アットルール](/ja/docs/Web/CSS/Guides/Nesting/At-rules)
- [入れ子と詳細度](/ja/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
- {{domxref("CSSNestedDeclarations")}}
- [The Nested Declarations Rule](https://drafts.csswg.org/css-nesting-1/#nested-declarations-rule)
