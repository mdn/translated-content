---
title: :has()
slug: Web/CSS/Reference/Selectors/:has
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`:has()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)関数で、引数として渡される[相対セレクター](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#相対セレクター)のいずれかが、その要素から辿ってアンカーとして少なくとも一つの要素と一致する場合に、その要素を表します。この擬似クラスは、[相対セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list#寛容な相対セレクターリスト)を引数として取ることで、参照している要素に関して親要素や前の兄弟要素を選択する方法を提供します。

```css
/* h1 見出し要素の直後に段落要素がある場合、
その h1 要素に対してスタイルを適用します */
h1:has(+ p) {
  margin-bottom: 0;
}
```

`:has()` 擬似クラスは {{cssxref(":is()")}} や {{cssxref(":not()")}} と同様に、引数の中で最も大きい[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が `:has()` の詳細度として与えられます。

## 構文

```css-nolint
:has(<relative-selector-list>) {
  /* ... */
}
```

`:has()` 擬似クラス自体にブラウザーが対応していない場合、`:has()` が [`:is()`](/ja/docs/Web/CSS/Reference/Selectors/:is) や [`:where()`](/ja/docs/Web/CSS/Reference/Selectors/:where) のような寛容なセレクターリストの中にない限り、セレクターブロック全体が失敗します。

`:has()` 擬似クラスは他の `:has()` の中に入れ子にすることはできません。

擬似要素も `:has()` 内のセレクターとして無効であり、擬似要素は `:has()` のアンカーとしても無効です。これは、多くの擬似要素は、その親要素のスタイル設定に応じて条件付きで存在するため、これらを `:has()` でクエリー可能にすると、循環クエリーが発生する可能性があるためです。

## 例

### 親要素の選択

「親要素の[結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#結合子)」を探しているかもしれません。これは DOM ツリーを上方向に移動し、特定の要素の親要素を選択することができるのです。`:has()` 擬似クラスは、`parent:has(child)`（任意の親要素）または `parent:has(> child)`（直接親要素）を使用してこれを実現します。この例では、`featured` クラスを持つ子要素を含む `<section>` 要素をスタイル設定する方法を示しています。

```html
<section>
  <article class="featured">注目のコンテンツ</article>
  <article>通常のコンテンツ</article>
</section>
<section>
  <article>通常のコンテンツ</article>
</section>
```

```css
section:has(.featured) {
  border: 2px solid blue;
}
```

### 結果

{{EmbedLiveSample('親要素の選択', , 200)}}

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
  color: rgb(150 149 149);
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

{{EmbedLiveSample('兄弟結合子との組み合わせ', 600, 150)}}

この例では、比較のために 2 つの類似したテキストを並べて示しています。左は `H1` 見出しの後に段落が続くもので、右は `H1` 見出しの後に `H2` 見出しが続き、段落が続くものです。右の例では、`:has()` は、`H2` 要素（[次兄弟結合子 `+`](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) で示される）が直後に続く `H1` 要素をセレクターとして選択するのに役立ち、この CSS ルールでは、その `H1` 要素の後の間隔を狭めています。`:has()` 擬似クラスがなければ、CSS セレクターを使って異なる型の先行兄弟や親要素を選択することはできません。

### :is() 擬似クラスとの組み合わせ

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
  color: rgb(150 149 149);
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

ここでは、最初の [`:is()`](/ja/docs/Web/CSS/Reference/Selectors/:is) 擬似クラスは、リスト内の見出し要素のいずれかを選択するために使用されます。2 番目の `:is()` 擬似クラスは、`:has()` の引数として次兄弟セレクターのリストを渡すために使用されます。`:has()` 擬似クラスは、 `H1`, `H2`, `H3` 要素の直後に（[`+`](/ja/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) で示すように） `H2`, `H3`, `H4` 要素が来るものを選択するのに役立ち、この CSS ルールでは、そのような `H1`, `H2`, `H3` 要素の後の間隔を狭めています。

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

興味深いことに、CSS の `:has()` と正規表現の[先読みアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)を関連付けることができます。どちらも、要素（または文字列）そのものに一致する条件を実際に選択することなく、条件に基づいて要素（または正規表現における文字列）を選択できるからです。

### 肯定先読み (?=pattern)

正規表現 `abc(?=xyz)` では、文字列 `abc` の直後に `xyz` が続く場合のみ一致します。これは先読み操作なので、`xyz` は一致部分には含まれません。

CSS における類似の構成は `.abc:has(+ .xyz)` です。これは、次兄弟要素 `.xyz` がある場合にのみ要素 `.abc` を選択します。要素 `.abc` が選択され `.xyz` は選択されないため、`:has(+ .xyz)` の部分は先読み操作として機能します。

### 否定先読み (?!pattern)

同様に、否定先読みの場合、正規表現 `abc(?!xyz)` では文字列 `abc` の後に `xyz` が続かない場合にのみ一致します。CSS における類似の構成は `.abc:has(+ :not(.xyz))` です。これは直後の要素が `.xyz` の場合、要素 `.abc` を選択しません。

## パフォーマンスの考慮事項

`:has()` 擬似クラスの特定の使用法は、特に動的な更新（DOM の変化）時にページのパフォーマンスに重大な影響を与える可能性があります。ブラウザーエンジンは DOM が変更された際に `:has()` セレクターを再評価しなければならないため、複雑または制約が不十分なセレクターは計算コストの高い処理を引き起こす可能性があります。

### 広範なアンカーリングを避ける

アンカーセレクター（`A:has(B)` の `A`）は、`body`、`:root`、`*` のように子要素が大量になる要素にしてはいけません。とても汎用的なセレクターに `:has()` をアンカーすると、パフォーマンスが低下する可能性があります。なぜなら、広く選択された要素のサブツリー全体における DOM の変更は、ブラウザーが `:has()` 条件を再チェックする必要があるためです。

```css example-bad
/* :has() を広範な要素に結び付けないようにすること */
body:has(.sidebar) {
  /* スタイル */
}
:root:has(.content) {
  /* スタイル */
}
*:has(.item) {
  /* スタイル */
}
```

代わりに、`:has()` を `.container` や `.gallery` などの特定の要素に結び付けることで、スコープを縮小し、パフォーマンスを改善しましょう。

```css example-good
/* 詳細なコンテナーを使用してスコープを限定 */
.container:has(.sidebar-expanded) {
  /* スタイル */
}
.content-wrapper:has(> article[data-priority="high"]) {
  /* スタイル */
}
.gallery:has(> img[data-loaded="false"]) {
  /* スタイル */
}
```

### サブツリーの走査を最小化

内部のセレクター（`A:has(B)` の `B`）は、`>` や `+` などの結合子を使用して探索範囲を制限しましょう。`:has()` 内のセレクターが厳密に制約されていない場合、ブラウザーは条件が成立しつづけているかを調べるため、DOM 変更のたびにアンカー要素のサブツリー全体を探索する必要が生じる可能性があります。

この例では、`.ancestor` 内の変更はすべて、`.foo` を持つすべての子孫を調べる要求があります。

```css example-bad
/* サブツリー全体の走査が発生する可能性がある */
.ancestor:has(.foo) {
  /* スタイル */
}
```

子要素または兄弟要素の結合子を使用すると、内側のセレクターのスコープが制限され、DOM 操作のパフォーマンスコストが縮小されます。この例では、ブラウザーは直接の子要素または特定の兄弟要素の子孫のみを調べれば十分です。

```css example-good
/* より制限すると、操作が限定的になる */
.ancestor:has(> .foo) {
  /* 直接の子 */
}
.ancestor:has(+ .sibling .foo) {
  /* 隣接する兄弟の子孫 */
}
```

特定の内側セレクターは、DOM の変更ごとにブラウザーが祖先チェーンを遡って、更新が必要かもしれないアンカー要素を見ていくことを強制する場合があります。これは、変更された要素の祖先要素を確認する必要があることが構造的に示唆される場合に現れます。

この例では、DOM の変更を行う際には、変更対象の要素が `.foo` の直接の子要素である任意の要素 (`*`) であり、かつその親要素（またはそれより上の祖先要素）が `.ancestor` であるかどうかを調べる必要があります。

```css example-bad
/* 祖先の走査が発生する可能性がある */
.ancestor:has(.foo > *) {
  /* スタイル */
}
```

内側のセレクターを特定のクラスや直接の子結合子（次のスニペットの `.specific-child` など）で制約することで、ブラウザーのチェック対象を明確に定義された要素に限定し、高コストな祖先要素の走査を縮小することでパフォーマンスが改善されます。

```css example-good
/* 内側のセレクターを制約することで、祖先要素への走査を避けることができる */
.ancestor:has(.foo > .specific-child) {
  /* スタイル */
}
```

> [!NOTE]
> これらのパフォーマンス特性は、ブラウザーが `:has()` の実装を最適化することで改善される可能性がありますが、根本的な制約は残ります。`A:has(B)` のようなセレクターでは、`A` が多くの子要素を持たないようにし、`B` が不必要な探索を避けることができるように厳密に制約されていることを確認してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`:is()`](/ja/docs/Web/CSS/Reference/Selectors/:is), [`:where()`](/ja/docs/Web/CSS/Reference/Selectors/:where), [`:not()`](/ja/docs/Web/CSS/Reference/Selectors/:not)
- [CSS セレクターと結合子](/ja/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [CSS セレクターの構造](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
- [セレクターを使用した DOM 要素の特定](/ja/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
