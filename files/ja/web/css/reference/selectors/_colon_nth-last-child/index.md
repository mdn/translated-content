---
title: :nth-last-child()
slug: Web/CSS/Reference/Selectors/:nth-last-child
original_slug: Web/CSS/:nth-last-child
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:nth-last-child()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、兄弟要素のグループにおける末尾からの位置に基づいて選択します。

{{InteractiveExample("CSS デモ: :nth-last-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:nth-last-child(-n + 3) {
  border: 2px solid orange;
  margin-top: 1px;
}

li:nth-last-child(even) {
  background-color: lightyellow;
}
```

```html interactive-example
<p>史上最悪の 8 つの山火事:</p>
<ol reversed>
  <li>Matheson Fire</li>
  <li>Miramichi Fire</li>
  <li>1997 Indonesian fires</li>
  <li>Thumb Fire</li>
  <li>Great Hinckley Fire</li>
  <li>Cloquet Fire</li>
  <li>Kursha-2 Fire</li>
  <li>Peshtigo Fire</li>
</ol>
```

## 構文

```css-nolint
:nth-last-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### 引数

`:nth-last-child()` 擬似クラスは、単一の引数を取り、要素と照合する末尾から数えたパターンを指定します。

### キーワード値

- `odd`
  - : 一連の兄弟要素の中で、最後から奇数番目の要素（1, 3, 5, など）を表します。
- `even`
  - : 一連の兄弟要素の中で、最後から偶数番目の要素（2, 4, 6, など）を表します。

#### 関数記法

- `<An+B>`
  - : 一連の兄弟要素の中で、位置がパターン `An+B` と一致する要素を表します。ここで、`n` は正の整数または 0 の値であり、
    - `A` は整数で増分の大きさ、
    - `B` は整数でオフセット、
    - `n` は 0 から始まる、すべて非負の整数です。

    これは、リストの `An+B` 番目の要素とみなすことができます。末尾から数えた最初の要素の番号は `1` です。 `A` と `B` の値は両方とも {{cssxref("&lt;integer&gt;")}} の値です。

#### `of <selector>` 構文

セレクター引数を渡すことで、そのセレクターに一致する**末尾から n 番目**の要素を選択することができます。例えば、次のセレクターは `class="important"` を持つ最後の 3 つのリストアイテムに一致します。

```css
:nth-last-child(-n + 3 of li.important) {
}
```

これは、セレクターを関数の外に移動させた場合とは異なります。例えば、

```css
li.important:nth-last-child(-n + 3) {
}
```

このセレクターは、リストアイテムが最後の 3 つの子のいずれかに含まれている場合にも、そのスタイルを適用します。

## 例

### セレクターの例

- `tr:nth-last-child(odd)` または `tr:nth-last-child(2n+1)`
  - : HTML テーブルの最後から数えた奇数行 (1, 3, 5, など) を表します。
- `tr:nth-last-child(even)` または `tr:nth-last-child(2n)`
  - : HTML テーブルの最後から数えた偶数行 (2, 4, 6, など) を表します。
- `:nth-last-child(7)`
  - : 最後から数えて 7 番目の要素を表します。
- `:nth-last-child(5n)`
  - : 最後から数えて 5, 10, 15 番目などの要素を表します。
- `:nth-last-child(3n+4)`
  - : 最後から数えて 4, 7, 10, 13 番目などの要素を表します。
- `:nth-last-child(-n+3)`
  - : 兄弟要素のグループの中で最後の 3 つの要素を表します。
- `p:nth-last-child(n)` または `p:nth-last-child(n+1)`
  - : 兄弟要素のグループの中ですべての `<p>` 要素を表します。これは単純な `p` セレクターと同じです。（`n` はゼロから始まるので、最後の要素が 1 で始まり、 `n` および `n+1` が共に同じ要素を選択します。）
- `p:nth-last-child(1)` または `p:nth-last-child(0n+1)`
  - : 兄弟要素のグループの中で最初の `<p>` 要素すべてを表します。これは {{cssxref(":last-child")}} セレクターと同じです。

### 表の例

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>1 行目</td>
    </tr>
    <tr>
      <td>2 行目</td>
    </tr>
    <tr>
      <td>3 行目</td>
    </tr>
    <tr>
      <td>4 行目</td>
    </tr>
    <tr>
      <td>5 行目</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  border: 1px solid blue;
}

/* 最後から 3 つの要素を選択 */
tr:nth-last-child(-n + 3) {
  background-color: pink;
}

/* 後ろから 2 番目から最初までの要素を選択 */
tr:nth-last-child(n + 2) {
  color: blue;
}

/* 後ろから 2 番目の要素のみを選択 */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

#### 結果

{{EmbedLiveSample('表の例', 300, 150)}}

### 数量クエリー

「数量クエリー」は、要素が存在する数に応じてスタイル付けします。この例では、リストの中に項目が3つ以上ある場合にリスト項目が赤に変わります。これは `nth-last-child` 擬似クラスと [後続兄弟結合子](/ja/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)の機能を組み合わせることで実現できます。

#### HTML

```html
<h4>4 項目のリスト (スタイル付き):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ol>

<h4>2 項目のリスト (スタイルなし):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
```

#### CSS

```css
/* 3 つ以上のリスト項目がある場合、
   すべてにスタイル付けする */
li:nth-last-child(n + 3),
li:nth-last-child(3) ~ li {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('数量クエリー', '100%', 270)}}

### `of <selector>` 構文の例

この例では、名前の順序なしリストがあります。一部のアイテムには `noted` クラスが適用されており、下部に太い境界線で強調表示されています。

#### HTML

```html
<ul>
  <li class="noted">Diego</li>
  <li>Shilpa</li>
  <li class="noted">Caterina</li>
  <li>Jayla</li>
  <li>Tyrone</li>
  <li>Ricardo</li>
  <li class="noted">Gila</li>
  <li>Sienna</li>
  <li>Titilayo</li>
  <li class="noted">Lexi</li>
  <li>Aylin</li>
  <li>Leo</li>
  <li>Leyla</li>
  <li class="noted">Bruce</li>
  <li>Aisha</li>
  <li>Veronica</li>
  <li class="noted">Kyouko</li>
  <li>Shireen</li>
  <li>Tanya</li>
  <li class="noted">Marlene</li>
</ul>
```

#### CSS

```css
* {
  font-family: sans-serif;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  font-size: 1.2rem;
  padding-left: 0;
}

li {
  margin: 0.125rem;
  padding: 0.25rem;
  border: 1px solid tomato;
}

.noted {
  border-bottom: 5px solid tomato;
}
```

以下の CSS では、`class="noted"` でマークされた**奇数**のリストアイテムを対象としています。

```css
li:nth-last-child(odd of .noted) {
  background-color: tomato;
  border-bottom-color: seagreen;
}
```

#### 結果

`class="noted"` に対応するアイテムには、下部に太い境界線があり、アイテム 1、7、14、20 は、 `class="noted"` を持つ奇数リストアイテムであるため、背景が塗りつぶされています。

{{EmbedLiveSample('of_selector_構文の例', 550, 120)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":nth-child")}}
- {{Cssxref(":nth-last-of-type")}}
- [CSS の数量クエリー](https://alistapart.com/article/quantity-queries-for-css/)
