---
title: 一貫性のあるリストのインデント
slug: Web/CSS/Guides/Lists/Indenting
original_slug: Web/CSS/CSS_lists/Consistent_list_indentation
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

リストに最もよく行われるスタイル設定の変更のひとつに、インデントの幅の変更が挙げられます。つまり、リストアイテムがどれだけ右に寄せられるかということです。この記事は、リストアイテムのマーカーが見えるように、リストアイテムのインデントを理解するのに役立つでしょう。

なぜこのようなことが起こるのか、そしてさらに重要なのは、問題を完全に避けるにはどうすればよいのかを理解するには、リストの作成の詳細を検証する必要があります。

## リストの作成

### 単独のリストアイテム

最初の、アイテムのリストに含まれない純粋なリストアイテムについて考えます。 HTML の {{htmlelement("li")}} 要素を使用する場合、ブラウザーは {{cssxref("display")}} の値を `list-item` に設定します。 リストに含まれないリストアイテムにマーカー（別名「行頭記号」）が設定されるかどうかは、ブラウザーによって異なります。 {{cssxref("list-style-type", "list-style-type: none")}} を使用して、この行頭記号を削除することができます。

```css
li {
  border: 1px dashed red;
}
li:nth-of-type(n + 4) {
  list-style-type: none;
}
```

```css hidden
li {
  width: 15em;
}
```

```html hidden
<p>ブラウザーごとの既定の行頭記号。</p>
<li>リストアイテム</li>
<li>リストアイテム</li>
<li>リストアイテム</li>
<p>これらのリストアイテムでは、指定された行頭記号が除去されています。</p>
<li>リストアイテム</li>
<li>リストアイテム</li>
<li>リストアイテム</li>
```

{{EmbedLiveSample("The stand-alone list item", "100%", 200)}}

この点線で表された赤い境界線は、各リストアイテムのコンテンツエリアの外側の縁を表します。現時点では、リストアイテムにはパディングや境界線は存在しません。

### リスト内に含まれたリストのアイテム

これらの要素を親要素で囲みます。この場合、順序なしリスト（すなわち、`<ul>`）で囲みます。 CSS ボックスモデルによると、リストアイテムのボックスは親要素のコンテンツエリア内に表示されなければなりません。

```css
ul {
  border: 1px dashed blue;
}
li {
  border: 1px dashed red;
  list-style-type: none;
}
```

```css hidden
body {
  width: 15em;
}
```

```html hidden
<ul>
  <li>リストアイテム</li>
  <li>リストアイテム</li>
  <li>リストアイテム</li>
</ul>
```

{{EmbedLiveSample("List items nested in a list", "100%", 150)}}

青い点線は、`<ul>` 要素のコンテンツ領域の境界線を示しています。 その親要素には、マージンとパディングの両方が設定されています。 ブラウザーは、順序なしリストに次の既定のスタイルを設定します。

```css
ul {
  /* ユーザーエージェントスタイル */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
```

### 既定の行頭記号の位置

これでリストアイテムマーカーを元に戻します。これは順序なしリストなので、リストアイテムは `list-style-type: disc;` というブラウザースタイルを継承します。これは、`<ul>` 親から塗りつぶし円の「行頭記号」です。

```css
li {
  border: 1px dashed red;
}
ul {
  border: 1px dotted blue;
}
ul:last-of-type {
  list-style-position: inside;
}
```

```css hidden
ul {
  width: 15em;
}
```

```html hidden
<p>これは既定値の <code>list-style-position: outside</code> です。</p>
<ul>
  <li>リストアイテム</li>
  <li>リストアイテム</li>
  <li>リストアイテム</li>
</ul>
<p>これは <code>list-style-position: inside</code> を設定したものです。</p>
<ul>
  <li>リストアイテム</li>
  <li>リストアイテム</li>
  <li>リストアイテム</li>
</ul>
```

{{EmbedLiveSample("Inheriting `list-style-type`", "100%", 220)}}

視覚的には、マーカーが `<ul>` のコンテンツ領域の外側にありますが、ここで重要なのはその点ではありません。重要なのは、マーカーが `<ul>` ではなく、`<li>` 要素の「主要ボックス」の外に置かれていることです。マーカーはリスト項目の付属品のようなもので、`<li>` のコンテンツ領域の外にぶら下がっていますが、`<li>` には所属しています。

このため、現代のすべてのブラウザーでは、 {{cssxref("list-style-position")}} の値が `outside` であることを前提に、`<li>` 要素に設定された境界の外側にマーカーが配置されます。これを `inside` に変更すると、マーカーは `<li>` のコンテンツの中に入り、あたかも `<li>` の一番最初に置かれたインラインボックスのようになります。

## 既定のインデント

前述のとおり、すべてのブラウザーで、`<ul>` 親要素にマージンとパディングの両方が提供されています。ユーザーエージェントの CSS は多少異なりますが、すべてに以下が含まれます。

```css
ul,
ol {
  /* ユーザーエージェントスタイル */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
ol {
  list-style-type: decimal;
}
li {
  display: list-item;
  text-align: match-parent;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
}
```

すべてのブラウザーは、既定で `<ul>` 要素の {{cssxref("padding-inline-start")}} を 40 ピクセルに設定しています。英語のような左書きの言語では、これは左パディングです。作者スタイルシート（つまりあなたのスタイルシート）で設定されたパディングが優先されます。

明示的に指定したい場合は、スタイルシートで次の設定を行い、 {{htmlelement("main")}} セクションに含まれる文書内のメインコンテンツ領域のリストアイテムが適切にインデントされるように確保してください。

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

そして、 `<li>` 要素は常に `<ul>` または `<ol>` の中に入れるようにしてください。
