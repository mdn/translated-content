---
title: インライン要素
slug: Web/HTML/Inline_elements
---

HTML (**Hypertext Markup Language**) の要素は従来、[「ブロックレベル」要素](/ja/docs/Web/HTML/Block-level_elements)と「インライン」要素に分類されていました。インライン要素は、コンテンツの流れを分断せずに、要素を定義するタグで囲まれた範囲だけを占有するものです。この記事では、 HTML のインライン要素と、 [ブロックレベル要素](/ja/docs/Web/HTML/Block-level_elements)との違いについて説明します。

> **メモ:** インライン要素は新しい行から始まらず、必要な幅のみを占有します。

## デモによるインライン要素とブロックレベル要素の比較

これは最も簡単なデモとシンプルな例です。最初に、使用するシンプルな CSS は以下のものです。

```css
.highlight {
  background-color:#ee3;
}
```

### インライン要素

インライン要素を紹介する以下の例を見てください。

```html
<div>The following span is an <span class="highlight">inline element</span>;
its background has been colored to display both the beginning and end of
the inline element's influence.</div>
```

この例では、ブロックレベル要素の {{HTMLElement("div")}} がいくらかのテキストを含んでいます。そのテキストの中に、インライン要素である {{HTMLElement("span")}} 要素があります。 `<span>` 要素はインラインなので、段落は単独で、テキストの流れを分断せずに、以下のように表示されます。

{{EmbedLiveSample("Inline", 600, 80)}}

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color:#ee3;
}
```

### ブロックレベル要素

それでは `<span>` を {{HTMLElement("p")}} のようなブロックレベル要素に変更してみましょう。

```html
<div>The following paragraph is a <p class="highlight">block-level element;</p>
its background has been colored to display both the beginning and end of
the block-level element's influence.</div>
```

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color:#ee3;
}
```

前回と同じ CSS を使って表示していますが、結果は以下のようになります。

{{EmbedLiveSample("Block-level", 600, 150)}}

違いが分かりましたか。 `<p>` 要素は文字列を `<p>` の前の文字列、 `<p>` の文字列、そして `<p>` の後の文字列と 3 つの部分に分割して、レイアウトを全体的に変更しました。

### 要素レベルの変更

CSS の {{cssxref("display")}} プロパティを使用すると、要素の*視覚表現*を変更することができます。例えば、 `display` の値を `"inline"` から `"block"` に変更することで、インライン要素をインラインボックスではなくブロックボックスで描画するようブラウザーに指示することができます。しかし、これによって要素の*カテゴリ*や*コンテンツモデル*が変更される訳ではありません。例えば、 `span` 要素の `display` を `"block"` に変更しても、その中に `div` 要素を含めることができるようになる訳ではありません。

## 概念上の違い

簡単に言えば、インライン要素とブロックレベル要素の基本概念の違いは以下の通りです。

- コンテンツモデル
  - : 一般に、インライン要素はデータや他のインライン要素のみを含みます。ブロック要素をインライン要素の中に置くことはできません。
- 整形
  - : 既定では、インライン要素は文書の流れの中で強制的に新しい行から始まりません。一方、ブロックレベル要素は一般的に改行が行われます (ただし、これは CSS を使って変更することができます)。

## 「インライン」要素の一覧

以下の要素は既定でインラインです (ただし、ブロック要素とインライン要素は HTML5 では定義されなくなり、代わりに[コンテンツカテゴリ](/ja/docs/Web/Guide/HTML/Content_categories)が使用されます)。

- {{ HTMLElement("a") }}
- {{ HTMLElement("abbr") }}
- {{ HTMLElement("acronym") }}
- {{ HTMLElement("audio") }} (視覚的なコントロールがある場合)
- {{ HTMLElement("b") }}
- {{ HTMLElement("bdi") }}
- {{ HTMLElement("bdo") }}
- {{ HTMLElement("big") }}
- {{ HTMLElement("br") }}
- {{ HTMLElement("button") }}
- {{ HTMLElement("canvas") }}
- {{ HTMLElement("cite") }}
- {{ HTMLElement("code") }}
- {{ HTMLElement("data") }}
- {{ HTMLElement("datalist") }}
- {{ HTMLElement("del") }}
- {{ HTMLElement("dfn") }}
- {{ HTMLElement("em") }}
- {{ HTMLElement("embed") }}
- {{ HTMLElement("i") }}
- {{ HTMLElement("iframe") }}
- {{ HTMLElement("img") }}
- {{ HTMLElement("input") }}
- {{ HTMLElement("ins") }}
- {{ HTMLElement("kbd") }}
- {{ HTMLElement("label") }}
- {{ HTMLElement("map") }}
- {{ HTMLElement("mark") }}
- {{ HTMLElement("meter") }}
- {{ HTMLElement("noscript") }}
- {{ HTMLElement("object") }}
- {{ HTMLElement("output") }}
- {{ HTMLElement("picture") }}
- {{ HTMLElement("progress") }}
- {{ HTMLElement("q") }}
- {{ HTMLElement("ruby") }}
- {{ HTMLElement("s") }}
- {{ HTMLElement("samp") }}
- {{ HTMLElement("script") }}
- {{ HTMLElement("select") }}
- {{ HTMLElement("slot") }}
- {{ HTMLElement("small") }}
- {{ HTMLElement("span") }}
- {{ HTMLElement("strong") }}
- {{ HTMLElement("sub") }}
- {{ HTMLElement("sup") }}
- {{ HTMLElement("svg") }}
- {{ HTMLElement("template") }}
- {{ HTMLElement("textarea") }}
- {{ HTMLElement("time") }}
- {{ HTMLElement("u") }}
- {{ HTMLElement("tt") }}
- {{ HTMLElement("var") }}
- {{ HTMLElement("video") }}
- {{ HTMLElement("wbr") }}

## 関連情報

- [ブロックレベル要素](/ja/HTML/Block-level_elements)
- [HTML 要素リファレンス](/ja/docs/Web/HTML/Element)
- {{cssxref("display")}}
- [コンテンツカテゴリ](/ja/docs/Web/Guide/HTML/Content_categories)
- [通常フローでのブロック及びインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}
