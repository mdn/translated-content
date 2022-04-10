---
title: W3C DOM Level 1 Core の使用
slug: Web/API/Document_Object_Model/Using_the_W3C_DOM_Level_1_Core
tags:
  - DOM
  - NeedsUpdate
translation_of: Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core
---
{{DefaultAPISidebar("DOM")}}

W3C の [DOM Level 1 Core](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) は、 (他の文書のツリー風の型の中で) HTML や XML 文書の DOM ツリーを操作するための API です。 DOM は広く普及しているので、この API は Mozilla Firefox や Microsoft Internet Explorer、サーバーを含むすべての主要なブラウザーが対応しています。ウェブにおけるスクリプティングの未来を担う強力な基盤なのです。

## DOM ツリーとは？

[DOM](https://www.w3.org/TR/REC-DOM-Level-1/introduction.html) ツリーは一種の [ツリー構造](https://en.wikipedia.org/wiki/Tree_structure)で、ノードが HTML または XML 文書のコンテンツを表します。それぞれの HTML または XML 文書は固有の DOM ツリーの表現を持っています。例えば、以下の文書をご覧ください。

```html
<html>
<head>
  <title>My Document</title>
</head>
<body>
  <h1>Header</h1>
  <p>Paragraph</p>
</body>
</html>
```

これは以下のように見える DOM ツリーを持っています。

![](using_the_w3c_dom_level_1_core-doctree.jpg)

(なお、上位のツリーは上記の文書の DOM ツリーと似ていますが、同じではありません。[実際の DOM ツリーはホワイトスペースを温存するからです](/ja/docs/Web/API/Document_Object_Model/Whitespace)。)

ウェブブラウザーが HTML 文書を解釈するとき、ブラウザーは DOM ツリーを構築し、文書を表示するために使用します。

## DOM Level 1 Core で何ができるのか

W3C DOM Level 1 Core によって<em>何でも好きな方法で</em> DOM ツリーを変更できます。これは、任意の HTML や XML 文書をゼロから作成したり、与えられた HTML や XML 文書の内容を変更したりすることができることを意味します。ウェブページの作者が文書の DOM を編集する最も簡単な方法は、 JavaScript を使ってグローバルオブジェクトの `document` プロパティにアクセスすることです。この `document` オブジェクトは、W3C の DOM Level 1 仕様書の [Document インターフェイス](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#i-Document)を実装しています。

## 簡単な例

上の文書を元に作者は、ヘッダーの内容を変え、1つある段落を 2 つに書き換えたいものとしましょう。これは以下のスクリプトによってできます。

### HTML コンテンツ

```html
<body>
<input type="button" value="この文書を変更します。" onclick="change()">
<h2>見出し</h2>
<p>段落</p>
</body>
```

### JavaScript コンテンツ

```js
function change() {
    // document.getElementsByTagName("H2") は、文書内の <h2> 要素の NodeList
    // であり、最初のものは0番です。

    var header = document.getElementsByTagName("H2").item(0);
    // header の firstChild はテキストノードです。
    header.firstChild.data = "動的文書";
    // ヘッダーが "A dynamic document" になりました。

    var para = document.getElementsByTagName("P").item(0);
    para.firstChild.data = "これが最初の段落です。";

    // 2 番目の段落のために新しいテキストノードを生成します
    var newText = document.createTextNode("これが 2 番目の段落です。");
    // 2 番目の段落になる新しい Element を生成します
    var newElement = document.createElement("P");
    // 段落にテキストを置きます
    newElement.appendChild(newText);
    // また、 (段落の親に当たる) BODY に追加することで、文書の最後に
    // 段落を置きます
    para.parentNode.appendChild(newElement);
  }
```

### 結果

{{ EmbedLiveSample('A_simple_example', 800, 300) }}

このスクリプトを[完全なデモ](/ja/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core/using_the_w3c_dom_level_1_core-doctree.jpg)として見ることができます。

## どうすればもっと学べるのか

DOM の基本概念に親しんでもらいましたが、 [DOM Level 1 の基本的なメソッド](/ja/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces)について学習したくなるかもしれません。

W3C の [DOM Level 1 Core 仕様書](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html)も参照して下さい。公式仕様ではありますが結構読みやすいです。特に各 DOM オブジェクトとその全プロパティ及びメソッドの説明が役立ちます。[その他の DOM 関連文書](/ja/docs/Web/API/Document_Object_Model) も参照して下さい。

**原著情報**

- 著者: L. David Baron \<dbaron at dbaron dot org>
- 著作権情報: © 1998-2005 by individual mozilla.org contributors; content available under a [Creative Commons license](https://www.mozilla.org/foundation/licensing/website-content.html)
