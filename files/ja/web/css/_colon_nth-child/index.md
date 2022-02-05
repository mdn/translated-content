---
title: ':nth-child()'
slug: Web/CSS/:nth-child
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.nth-child
translation_of: Web/CSS/:nth-child
---
{{CSSRef}}

**`:nth-child()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、兄弟要素のグループの中での位置に基づいて選択します。

```css
/* リスト中の 2 番目の <li> 要素を選択 */
li:nth-child(2) {
  color: lime;
}

/* 兄弟要素の中で 3 つおきに要素を選択 */
:nth-child(4n) {
  color: lime;
}
```

## 構文

`:nth-child()` 擬似クラスは、引数を 1 つ指定し、リストの子要素を要素の位置で選択するためのパターンを記述します。要素の位置は 1 から始まります。

### キーワード値

- `odd`
  - : 一連の兄弟要素の中で奇数番目の要素 (1, 3, 5, など) を表します。
- `even`
  - : 一連の兄弟要素の中で偶数番目の要素 (2, 4, 6, など) を表します。

### 関数記法

- `<An+B>`

  - : リスト中の位置が、 `An+B` で定義された数値のパターンと一致する要素を表します。

    - `A` は整数の刻み値です。
    - `B` は整数の加算値です。
    - `n` はすべての正の整数で、 0 から始まります。

    リスト中の *An+B* 番目の要素として読むことができます。

### 形式文法

{{csssyntax}}

## 例

<h3 id="Example_selectors" name="Example_selectors">セレクターの例</h3>

- `tr:nth-child(odd)` または `tr:nth-child(2n+1)`
  - : HTML テーブルの奇数行 (1、3、5、など) を表します。
- `tr:nth-child(even)` または `tr:nth-child(2n)`
  - : HTML テーブルの偶数行 (2、4、6、など) を表します。
- `:nth-child(7)`
  - : 7 番目の要素を表します。
- `:nth-child(5n)`
  - : **5** 番目 \[=5×1]、**10** 番目 \[=5×2]、**15** 番目 \[=5×3]、**等**の要素を表します。最初のものは **0** 番目 \[=5x0] が式の結果として返りますが、 `n` が 0 から始まるのに対して添字は 1 から始まるので、一致するものはないという結果になります。これは最初は奇妙に見えるかもしれませんが、次の例のように `B` の部分が `>0` となる場合にもっとよく分かるでしょう。
- `:nth-child(n+7)`
  - : 7 番目とそれ以降のすべての要素を表します。 **7** 番目 \[=0+7]、**8** 番目 \[=1+7]、**9** 番目 \[=2+7]、**等**です。
- `:nth-child(3n+4)`
  - : **4** 番目 \[=(3×0)+4]、**7** 番目 \[=(3×1)+4]、**10** 番目 \[=(3×2)+4]、**13** 番目 \[=(3×3)+4]、**等**の要素を表します。
- `:nth-child(-n+3)`
  - : 兄弟要素のグループの中で最初の 3 つの要素を表します。 \[=-0+3, -1+3, -2+3]
- `p:nth-child(n)`
  - : 兄弟要素のグループの中ですべての `<p>` 要素を表します。これは単純な `p` セレクターと同じ要素を選択します (但し、詳細度はより高くなります)。
- `p:nth-child(1)` または `p:nth-child(0n+1)`
  - : 兄弟要素のグループの中で最初の `<p>` 要素すべてを表します。これは {{cssxref(":first-child")}} セレクターと同じです (詳細度も同じです)。

- `p:nth-child(n+8):nth-child(-n+15)`
  - : 兄弟要素のグループの中で 8 ～ 15 番目の `<p>` 要素を表します。

### 詳細な例

```html
<h3><code>span:nth-child(2n+1)</code> で、子要素の間に
   <code>&lt;em&gt;</code> がない場合</h3>
<p>子要素 1, 3, 5, 7 が選択されます。</p>
<div class="first">
  <span>Span 1!</span>
  <span>Span 2</span>
  <span>Span 3!</span>
  <span>Span 4</span>
  <span>Span 5!</span>
  <span>Span 6</span>
  <span>Span 7!</span>
</div>

<br>

<h3><code>span:nth-child(2n+1)</code> で、子要素の間に
   <code>&lt;em&gt;</code> がある場合</h3>
<p>子要素 1, 5, 7 が選択されます。<br>
   3 は子要素などでカウントに入りますが、
   <code>&lt;span&gt;</code> ではないので選択されません。</p>
<div class="second">
  <span>Span!</span>
  <span>Span</span>
  <em>これは `em`</em>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
</div>

<br>

<h3><code>span:nth-of-type(2n+1)</code> で、子要素の間に
   <code>&lt;em&gt;</code> がある場合</h3>
<p>子要素 1, 4, 6, 8 が選択されます。<br>
   3 は <code>&lt;em&gt;</code> であり、
   <code>&lt;span&gt;</code> ではないのでカウントに入りません。 <code>nth-of-type</code>
   はこの型の子のみを選択します。 <code>&lt;em&gt;</code> は完全に飛ばされ、無視されます。</p>
<div class="third">
  <span>Span!</span>
  <span>Span</span>
  <em>これは `em`</em>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
  <span>Span</span>
  <span>Span!</span>
</div>
```

#### CSS

```css
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n+1),
.second span:nth-child(2n+1),
.third span:nth-of-type(2n+1) {
  background-color: lime;
}
```

#### 結果

{{EmbedLiveSample('Detailed_example', 550, 550)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{ Cssxref(":nth-of-type") }}, {{ Cssxref(":nth-last-child") }}
