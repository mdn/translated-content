---
title: contain
slug: Web/CSS/contain
tags:
  - CSS
  - CSS 封じ込め
  - CSS プロパティ
  - レイアウト
  - NeedsExample
  - Paint
  - リファレンス
  - Style
  - ウェブ
  - recipe:css-property
browser-compat: css.properties.contain
translation_of: Web/CSS/contain
---
{{CSSRef}}

**`contain`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ある要素とその内容が、できる限り多く、文書ツリーの他の部分から*独立している*ことを示します。これによってブラウザーがレイアウト、スタイル、描画、寸法、およびその組み合わせの再計算を、ページ全体ではなく DOM の限られた領域に対して行うことで、性能上の明らかな利点をもたらします。

このプロパティはページ上にそれぞれ独立したたくさんのウィジェットがあるときに有益であり、ウィジェットの内部を、ウィジェットの囲みボックスの外側の副作用から守るために使用することができます。

> **Note:**  (`paint`, `strict`, `content` のいずれかの値で) 適用された場合、このプロパティは以下のものを生成します。
>
> 1.  新しい[包含ブロック](/ja/docs/Web/CSS/Containing_block) ({{cssxref("position")}} プロパティが `absolute` または `fixed` である子孫を対象とする)。
> 2.  新しい[重ね合わせコンテキスト](/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)。
> 3.  新しい[ブロック整形コンテキスト](/ja/docs/Web/Guide/CSS/Block_formatting_context)。

## 構文

```css
/* キーワード値 */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: layout;
contain: style;
contain: paint;

/* 複数のキーワード */
contain: size paint;
contain: size layout paint;

/* グローバル値 */
contain: inherit;
contain: initial;
contain: revert;
contain: unset;
```

`contain` プロパティは、以下のうちの一つで指定します。

- `none`, `strict`, `content` の何れかのキーワードを単独で使用。
- `size`, `layout`, `style`, and `paint` の各キーワードを 1 つ以上、任意の順序で使用。

### 値

- `none`
  - : その要素が通常通り描画され、封じ込めを適用しないことを示します。
- `strict`
  - : `style` を除くすべての封じ込め規則がその要素に適用されることを示します。これは `contain: size layout paint` と同等です。
- `content`
  - : `size` および `style` 以外の封じ込め規則がその要素に適用されることを示します。これは `contain: layout paint` と同等です。
- `size`
  - : 子孫の寸法を確認する必要なく、その要素の寸法を変更できることを示します。
- `layout`
  - : 要素の外側が内部のレイアウトなどに影響しないことを示します。
- `style`
  - : ある要素とその子孫以外に影響を及ぼす可能性のあるプロパティの場合、その要素が含まれている要素をエスケープしないことを示します。
- `paint`
  - : その要素の子孫を、境界の外に表示しないことを示します。包含ボックスが画面外の場合、ブラウザーは中の要素を描画する必要はありません。 — そのボックスに完全に含まれていれば、やはり画面外にあるからです。そして、子孫が包含要素の領域を溢れている場合、子孫は包含要素の境界ボックスで切り取られます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 単純なレイアウト

以下のマークアップは多数のコンテンツを持つ記事からなるものです。

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

それぞれの `<article>` および `<img>` には境界があり、画像は浮動状態です。

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

{{EmbedGHLiveSample("css-examples/contain/simple-layout.html", '100%', 400)}}

問題はすぐにわかるでしょう。 — 記事の最下部を超えている浮動要素を解消する対策をしていません。

<h3 id="Float_interference" name="Float_interference">浮動要素の干渉</h3>

1 つ目の記事の下部に別の画像を挿入すると、 DOM ツリーの大部分が再レイアウトされたり、再描画されたりする可能性があり、 2 つ目の記事のレイアウトにも支障をきたしてしまいます。

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social">
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

```css hidden
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

ご覧の通り、浮動要素の動作方法が原因で、最初の画像が 2 つ目の記事の領域内に掛かってしまっています。

{{EmbedGHLiveSample("css-examples/contain/float-interference.html", '100%', 400)}}

### contain による修正

それぞれの `article` の `contain` プロパティを `content` の値を設定すれば、新しい要素が挿入されたときに、ブラウザーはそれが含まれる要素のサブツリーの再計算をするだけで、その外側には何もする必要がないことを理解します。

```html hidden
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social">
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo">
  <p>More content here.</p>
</article>
```

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
  contain: content;
}
```

これは最初の画像についても、 2 つ目の記事の下に浮遊せずに、包含する要素の範囲内に留まることも意味します。

{{EmbedGHLiveSample("css-examples/contain/contain-fix.html", '100%', 500)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS 封じ込め](/ja/docs/Web/CSS/CSS_Containment)
- CSS の {{cssxref("content-visibility")}} プロパティ
- CSS の {{cssxref("position")}} プロパティ
