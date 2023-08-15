---
title: "DOMImplementation: createHTMLDocument() メソッド"
slug: Web/API/DOMImplementation/createHTMLDocument
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ApiRef("DOM")}}

**`DOMImplementation.createHTMLDocument()`** メソッドは、新しい HTML 文書 ({{ domxref("Document") }}) を作成します。

## 構文

```js-nolint
createHTMLDocument()
createHTMLDocument(title)
```

### 引数

- `title` {{optional_inline}}
  - : 新しい HTML 文書に与えるタイトルを含む文字列です。

### 返値

新しい HTML の {{domxref("Document")}} オブジェクトです。

## 例

この例では、新しい HTML 文書を作成し、現在の文書内の {{ HTMLElement("iframe") }} に挿入しています。

この例の HTML は次の通りです。

```html
<body>
  <p>
    Click <a href="javascript:makeDocument()">here</a> to create a new document
    and insert it below.
  </p>
  <iframe id="theFrame" src="about:blank" />
</body>
```

JavaScript による `makeDocument()` は次の通りです。

```js
function makeDocument() {
  let frame = document.getElementById("theFrame");

  let doc = document.implementation.createHTMLDocument("New Document");
  let p = doc.createElement("p");
  p.textContent = "This is a new paragraph.";

  try {
    doc.body.appendChild(p);
  } catch (e) {
    console.log(e);
  }

  // Copy the new HTML document into the frame

  let destDocument = frame.contentDocument;
  let srcNode = doc.documentElement;
  let newNode = destDocument.importNode(srcNode, true);

  destDocument.replaceChild(newNode, destDocument.documentElement);
}
```

4～12 行目のコードは、新しい HTML 文書を作成し、その文書へのコンテンツの挿入を処理するものです。4 行目で `createHTMLDocument()` を用いて、{{ HTMLElement("title") }} が `"New Document"` である新しい HTML 文書を作成しています。5 行目と 6 行目で単純なコンテンツを持つ新しい段落要素を作成し、8～12 行目で新しい段落を新しい文書に挿入する処理をしています。

16 行目はフレームの `contentDocument` を取り出しています。これは新しいコンテンツを注入する文書内のものです。次の 2 行は、新しい文書のコンテンツを新しい文書のコンテキストにインポートする処理です。最後に、20 行目で実際にフレームのコンテンツを新しい文書のコンテンツに置き換えます。

[ライブサンプルを見る](https://mdn.dev/archives/media/samples/domref/createHTMLDocument.html)

返される文書は、以下の HTML であらかじめ構成されたものになります。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>title</title>
  </head>
  <body>
    …
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("DOMImplementation")}} インターフェイス
