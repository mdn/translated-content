---
title: :has()
slug: Web/CSS/:has
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{CSSRef}}

**`:has()`** は CSS の[疑似クラス](/ja/docs/Web/CSS/Pseudo-classes)関数で、引数として渡される[相対セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#相対セレクター)のいずれかが、その要素から辿ってアンカーとして少なくとも一つの要素とマッチする場合に、その要素を表します。この疑似クラスは、[相対セレクターリスト](/ja/docs/Web/CSS/Selector_list#寛容な相対セレクターリスト)を引数として取ることで、参照している要素に関して親要素や前の兄弟要素を選択する方法を提供します。

```css
/* 直後に p 要素があるような h1 要素に対して、スタイルを適用します */
h1:has(+ p) {
  margin-bottom: 0;
}
```

`:has()` 疑似クラスは {{CSSxRef(":is", ":is()")}} や {{CSSxRef(":not", ":not()")}} と同様に、引数の中で最も大きい[詳細度](/ja/docs/Web/CSS/Specificity)が `:has()` の詳細度として与えられます。

## 構文

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

`:has()` 疑似クラス自体がブラウザーでサポートされていない場合、`:has()` が [`:is()`](/ja/docs/Web/CSS/:is) や [`:where()`](/ja/docs/Web/CSS/:where) のような寛容なセレクターリストの中にない限り、セレクターブロック全体が失敗します。

`:has()` 疑似クラスは他の `:has()` の中に入れ子にすることはできません。これは、多くの疑似要素が祖先のスタイリングに基づいて条件付きで存在しているため、`:has()` によるクエリーを許可してしまうと循環クエリーが発生する可能性があるためです。

また、疑似要素は `:has()` 内では有効なセレクターではなく、疑似要素は `:has()` のアンカーとしても有効ではありません。

## 例

### 兄弟結合子との組み合わせ

次の例の `:has()` スタイル宣言は、`<h1>` 見出しの直後に `<h2>` 見出しがある場合、その `<h1>` 見出しの後の間隔を調整します。

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1,
h2 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150, 149, 149);
}
```

```css
h1,
h2 {
  margin: 0 0 1rem 0;
}

h1:has(+ h2) {
  margin: 0 0 0.25rem 0;
}
```

#### 結果

{{EmbedLiveSample('With_the_sibling_combinator', 600, 150)}}

この例では、比較のために 2 つの類似したテキストを並べて示しています。左は `h1` 見出しの後に段落が続くもので、右は `h1` 見出しの後に `h2` 見出しが続き、段落が続くものです。右の例では、`:has()` は、`h2` 要素（[次兄弟結合子 `+`](/ja/docs/Web/CSS/Next-sibling_combinator) で示される）が直後に続く `h1` 要素をセレクターとして選択するのに役立ち、この CSS ルールでは、その `h1` 要素の後の間隔を狭めています。`:has()` 疑似クラスがなければ、CSS セレクターを使って異なる型の先行兄弟や親要素を選択することはできません。

### :is() 疑似クラスとの組み合わせ

この例では、前の例を基に `:has()` で複数の要素を選択する方法を示します。

#### HTML

```html
<section>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
  <article>
    <h1>Morning Times</h1>
    <h2>Delivering you news every morning</h2>
    <h3>8:00 am</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
</section>
```

#### CSS

```css hidden
section {
  display: flex;
  align-items: start;
  justify-content: space-around;
}

article {
  display: inline-block;
  width: 40%;
}

h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  color: rgb(150, 149, 149);
}

h3 {
  font-size: 0.9em;
  color: darkgrey;
}
```

```css
h1,
h2,
h3 {
  margin: 0 0 1rem 0;
}

:is(h1, h2, h3):has(+ :is(h2, h3, h4)) {
  margin: 0 0 0.25rem 0;
}
```

#### 結果

{{EmbedLiveSample('With_the_:is()_pseudo-class', 600, 170)}}

ここでは、最初の [`:is()`](/ja/docs/Web/CSS/:is) 疑似クラスは、リスト内の見出し要素のいずれかを選択するために使用されます。2 番目の `:is()` 疑似クラスは、`:has()` の引数として次兄弟セレクターのリストを渡すために使用されます。`:has()` 疑似クラスは、h2, h3, h4 要素を直後に持つ h1, h2, h3 要素を選択するのに役立ち、この CSS ルールでは、そのような h1, h2, h3 要素の後の間隔を狭めています。

なお、このセレクターはこのように書くこともできます。

```css
:is(h1, h2, h3):has(+ h2, + h3, + h4) {
  margin: 0 0 0.25rem 0;
}
```

### 論理演算

`:has()` 関係セレクターは、引数の複数のセレクターのうちの 1 つが真であるか、あるいはすべてのセレクターが真であるかをチェックするために使うことができます。

`:has()` 関係セレクターの中でカンマで区切られた値を使うことで、いずれかのパラメータが存在するかどうかをチェックすることができます。`x:has(a, b)` は、子孫 `a` または `b` が存在すれば `x` をスタイルします。

複数の `:has()` 関係セレクターを連結することで、すべてのパラメータが存在するかどうかをチェックすることができます。`x:has(a):has(b)` は、子孫 `a` および `b` が存在する場合に `x` をスタイルします。

```css
body:has(video, audio) {
  /* body が video または audio を含むとき、body にスタイルが当たります */
}
body:has(video):has(audio) {
  /* body が video および audio を含むとき、body にスタイルが当たります */
}
```

## :has() と正規表現の類似性

興味深いことに、CSS の `:has()` と正規表現の[先読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)を関連付けることができます。どちらも、要素（または文字列）そのものにマッチする条件を実際に選択することなく、条件に基づいて要素（または正規表現における文字列）を選択できるからです。

### 肯定先読み (?=pattern)

正規表現 `abc(?=xyz)` では、文字列 `abc` の直後に `xyz` が続く場合のみマッチする。これは先読み操作なので、`xyz` はマッチに含まれない。

CSS における類似の構成は `.abc:has(+ .xyz)` です。これは、次兄弟要素 `.xyz` がある場合にのみ要素 `.abc` を選択します。要素 `.abc` が選択され `.xyz` は選択されないため、`:has(+ .xyz)` の部分は先読み操作として機能します。

### 否定先読み (?!pattern)

同様に、否定先読みの場合、正規表現 `abc(?!xyz)` では文字列 `abc` の後に `xyz` が続かない場合にのみマッチします。CSS における類似の構成は `.abc:has(+ :not(.xyz))` です。これは直後の要素が `.xyz` の場合、要素 `.abc` を選択しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`:is()`](/ja/docs/Web/CSS/:is), [`:where()`](/ja/docs/Web/CSS/:where), [`:not()`](/ja/docs/Web/CSS/:not)
- [CSS セレクターと結合子](/ja/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [CSS セレクターの構造](/ja/docs/Web/CSS/CSS_selectors/Selector_structure)
- [セレクターリスト](/ja/docs/Web/CSS/Selector_list)
- [CSS セレクター](/ja/docs/Web/CSS/CSS_selectors)
- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
