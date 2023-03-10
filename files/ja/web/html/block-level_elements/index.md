---
title: ブロックレベル要素
slug: Web/HTML/Block-level_elements
---

HTML (**Hypertext Markup Language**) の要素は従来、 「ブロックレベル」要素または「インライン要素」の何れかに分類されてきました。これは表示特性であることから、現在は CSS において[フローレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout)の中で定義されています。ブロックレベル要素は親要素 (コンテナー) の水平空間全体と、内容物の高さに等しい垂直空間を占有し、「ブロック」を生成します。この記事では、 HTML のブロックレベル要素とは何か、[インラインレベル要素](/ja/docs/Web/HTML/Inline-level_elements)とどのように異なるかを説明します。

ブラウザーは一般的に、前後に新しい行を伴ってブロックレベル要素を表示します。これはボックスを積み上げたように見えます。

> **メモ:** ブロックレベル要素は常に新しい行から始まり、利用可能な全幅を取ります (できる限り左右に伸びます)。

以下の例では、ブロックレベル要素が与える影響を示しています。

## ブロックレベル要素

### HTML

```html
<p>This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.</p>
```

### CSS

```css
p { background-color: #8ABB55; }
```

{{ EmbedLiveSample('Block-level_Example') }}

## 使用法

- ブロックレベル要素は {{HTMLElement("body")}} 要素内にのみ現れます。

## ブロックレベル要素とインライン要素

ブロックレベル要素とインライン要素の間には、二つの大きな違いがあります。

- 包含モデル
  - : 一般的に、ブロックレベル要素はインライン要素と他のブロックレベル要素を含むことができます。この固有の構造による区別は、ブロック要素がインライン要素よりも「大きな」構造を構築するという考え方です。
- 既定の整形
  - : 既定では、ブロックレベル要素は新しい行から始まりますが、インライン要素は行内のどこからでも始めることができます。

ブロックレベル要素とインライン要素という区分は、 HTML 4.01 までの仕様書で使用されていました。 HTML5 ではこの二つの区分が、より複雑な[コンテンツカテゴリ](/ja/docs/Web/HTML/Content_categories)の組み合わせに置き換えられました。「インライン」はおよそ[記述コンテンツ](/ja/docs/Web/HTML/Content_categories#記述コンテンツ)のカテゴリに対応しているのに対し、「ブロックレベル」カテゴリは HTML5 のコンテンツカテゴリには直接対応しませんが、*「ブロックレベル」要素と「インライン」要素の組み合わせ*は HTML5 の[フローコンテンツ](/ja/docs/Web/HTML/Content_categories#フローコンテンツ)に対応します。他にも、[対話型コンテンツ](/ja/docs/Web/Guide/HTML/Content_categories#対話型コンテンツ)などの他のカテゴリも存在します。

## 要素

「ブロックレベル」要素の一覧は以下のとおりです (ただし HTML5 の新規要素は、厳密には「ブロックレベル」であると定義されていません)。

- {{ HTMLElement("address") }}
  - : 連絡先情報です。
- {{ HTMLElement("article") }}
  - : 記事コンテンツです。
- {{ HTMLElement("aside") }}
  - : 本論から外れたコンテンツです。
- {{ HTMLElement("blockquote") }}
  - : 長い (「ブロック」の) 引用です。
- {{ HTMLElement("details") }}
  - : 折りたたみウィジェットです。
- {{ HTMLElement("dialog") }}
  - : ダイアログボックスです。
- {{ HTMLElement("dd") }}
  - : 定義リストで用語を説明します。
- {{ HTMLElement("div") }}
  - : 文書の一部です。
- {{ HTMLElement("dl") }}
  - : 定義リストです。
- {{ HTMLElement("dt") }}
  - : 定義語リストの用語です。
- {{ HTMLElement("fieldset") }}
  - : フィールドセットのラベルです。
- {{ HTMLElement("figcaption") }}
  - : 図表のキャプションです。
- {{ HTMLElement("figure") }}
  - : キャプション ({{HTMLElement("figcaption")}} を参照) を伴うメディアコンテンツをグループ化します。
- {{ HTMLElement("footer") }}
  - : セクションまたはページのフッターです。
- {{ HTMLElement("form") }}
  - : 入力フォームです。
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : 見出しレベル 1-6 です。
- {{ HTMLElement("header") }}
  - : セクションまたはページのヘッダーです。
- {{ HTMLElement("hgroup") }}
  - : 見出し情報をグループ化します。
- {{ HTMLElement("hr") }}
  - : 水平線 (区切り線) です。
- {{ HTMLElement("li") }}
  - : リストの項目です。
- {{ HTMLElement("main") }}
  - : この文書で固有の中心的なコンテンツを含みます。
- {{ HTMLElement("nav") }}
  - : ナビゲーションのリンクを含みます。
- {{ HTMLElement("ol") }}
  - : 番号付きリストです。
- {{ HTMLElement("p") }}
  - : 段落です。
- {{ HTMLElement("pre") }}
  - : 整形済みテキストです。
- {{ HTMLElement("section") }}
  - : ウェブページのセクションです。
- {{ HTMLElement("table") }}
  - : 表です。
- {{ HTMLElement("ul") }}
  - : 番号なしリストです。

## 関連情報

- [インライン要素](/ja/docs/Web/HTML/Inline_elements)
- {{cssxref("display")}}
- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/ja/docs/Web/HTML/")}}
