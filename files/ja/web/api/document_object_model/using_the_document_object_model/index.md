---
title: ドキュメントオブジェクトモデルの使用
slug: Web/API/Document_Object_Model/Using_the_Document_Object_Model
l10n:
  sourceCommit: 1f44fd905e4acbe867ca945b26a8b06ddb646328
---

{{DefaultAPISidebar("DOM")}}

ドキュメントオブジェクトモデル (DOM) は、（他の文書のツリー風の型の中で） HTML や XML 文書の DOM ツリーを操作するための API です。この API はページの記述の根底にあり、ウェブ上のスクリプティングのベースとなるものです。

## DOM ツリーとは？

**DOM ツリー**は一種の [ツリー構造](https://en.wikipedia.org/wiki/Tree_structure)で、ノードが HTML または XML 文書のコンテンツを表します。それぞれの HTML または XML 文書は固有の DOM ツリーの表現を持っています。例えば、以下の文書を見てください。

```html
<html lang="en">
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

![ルートとコンテンツを含むノード要素を保有する文書のツリー状表現としての DOM](using_the_w3c_dom_level_1_core-doctree.jpg)

なお、上位のツリーは上記の文書の DOM ツリーと似ていますが、同じではありません。[実際の DOM ツリーはホワイトスペースを温存するからです](/ja/docs/Web/API/Document_Object_Model/Whitespace)。

ウェブブラウザーが HTML 文書を解釈するとき、ブラウザーは DOM ツリーを構築し、文書を表示するために使用します。

## 文書 API で何ができるのか

文書 API、 DOM API とも呼ばれますが、これによって何でも好きなように DOM ツリーを変更できます。これは、任意の HTML や XML 文書をゼロから作成したり、与えられた HTML や XML 文書の内容を変更したりすることができることを意味します。ウェブページの作者は、文書の DOM を JavaScript を使ってグローバルオブジェクトの `document` プロパティにアクセスすることで編集することができます。この `document` オブジェクトは {{domxref("Document")}} インターフェイスを実装しています。

## ツリーの読み取りと変更

上の文書を元に作者は、ヘッダーの内容を変え、1つある段落を 2 つに書き換えたいものとしましょう。これは以下のスクリプトによってできます。

### HTML

```html
<html lang="ja">
  <head>
    <title>文書</title>
  </head>
  <body>
    <input type="button" value="この文書を変更" onclick="change()" />
    <h2>見出し</h2>
    <p>段落</p>
  </body>
</html>
```

### JavaScript コンテンツ

```js
function change() {
  // document.getElementsByTagName("h2") は、文書内の <h2> 要素の NodeList
  // であり、最初のものは 0 番
  const header = document.getElementsByTagName("h2").item(0);

  // header の firstChild はテキストノード
  header.firstChild.data = "動的文書";

  // ヘッダーが "動的文書" になった

  // 最初の段落にアクセス
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "これが最初の段落です。";

  // 2 番目の段落のために新しいテキストノードを生成する
  const newText = document.createTextNode("これが 2 番目の段落です。");

  // 2 番目の段落になる新しい要素を生成する
  const newElement = document.createElement("p");

  // 段落にテキストを置く
  newElement.appendChild(newText);

  // また、（段落の親に当たる)）ody に追加することで、文書の最後に
  // 段落を置く
  para.parentNode.appendChild(newElement);
}
```

### 結果

{{ EmbedLiveSample('reading_and_modifying_the_tree', 800, 300) }}

## ツリーの作成

JavaScript で上記のツリーを完全に作成することもできます。

```js
const root = document.createElement("html");
root.lang = "ja";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

## もっと学ぶ方法

これで DOM の基本的な概念に慣れたと思いますので、[JavaScript と DOM インターフェイスによる HTML の表の操作](/ja/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces) を読んで、文書 API の基本的な機能についてもっと学びたいと思うかもしれません。

## 関連情報

- [ドキュメントオブジェクトモデル](/ja/docs/Web/API/Document_Object_Model) (DOM).
