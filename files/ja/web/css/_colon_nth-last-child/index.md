---
title: ":nth-last-child()"
slug: Web/CSS/:nth-last-child
---

{{CSSRef}}

**`:nth-last-child()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中での位置に基づいて選択します。

```css
/* 兄弟要素の中で、後ろから数えて
   3 つおきに要素を選択 */
:nth-last-child(4n) {
  color: lime;
}
```

> **メモ:** この擬似クラスは、最初から後に向けてではなく*最後*から前に向けて数えるという点を除けば、本質的に {{Cssxref(":nth-child")}} と同じです。

## 構文

`nth-last-child` 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を 1 つ取ります。

```
:nth-last-child( <nth> [ of <complex-selector-list> ]? )
```

### キーワード値

- `odd`
  - : 一連の兄弟要素の中で、最後から奇数番目の要素 (1, 3, 5, など) を表します。
- `even`
  - : 一連の兄弟要素の中で、最後から偶数番目の要素 (2, 4, 6, など) を表します。

### 関数記法

- `<An+B>`
  - : 一連の兄弟要素の中で、 `n` に正の整数か0が入るとき、 `An+B` のパターンに一致する位置の要素を表します。後ろから数えた最初の要素の番号は `1` です。 `A` と `B` の値は両方とも {{cssxref("&lt;integer&gt;")}} です。

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
  - : 兄弟要素のグループの中で最後の3つの要素を表します。
- `p:nth-last-child(n)` または `p:nth-last-child(n+1)`
  - : 兄弟要素のグループの中ですべての `<p>` 要素を表します。これは単純な `p` セレクターと同じです。 (`n` はゼロから始まるので、最後の要素が1で始まり、 `n` および `n+1` が共に同じ要素を選択します。)
- `p:nth-last-child(1)` または `p:nth-last-child(0n+1)`
  - : 兄弟要素のグループの中で最初の `<p>` 要素すべてを表します。これは {{cssxref(":last-child")}} セレクターと同じです。

### 詳細な例

#### HTML

```html
<table>
  <tbody>
    <tr>
      <td>First line</td>
    </tr>
    <tr>
      <td>Second line</td>
    </tr>
    <tr>
      <td>Third line</td>
    </tr>
    <tr>
      <td>Fourth line</td>
    </tr>
    <tr>
      <td>Fifth line</td>
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

{{EmbedLiveSample('Table_example', 300, 150)}}

### 数量クエリー

*数量クエリー*は、要素が存在する数に応じてスタイル付けします。この例では、リストの中に項目が3つ以上ある場合にリスト項目が赤に変わります。これは `nth-last-child` 擬似クラスと [一般兄弟結合子](/ja/docs/Web/CSS/General_sibling_combinator)の機能を組み合わせることで実現できます。

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

{{EmbedLiveSample('Quantity_query', '100%', 270)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
- [CSS の数量クエリー](https://alistapart.com/article/quantity-queries-for-css)
