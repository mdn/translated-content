---
title: HTMLTitleElement
slug: Web/API/HTMLTitleElement
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

**`HTMLTitleElement`** インターフェイスは文書の {{ HTMLElement( "title" )}} が実装しています。この要素は {{domxref("HTMLElement")}} インターフェイスのすべてのプロパティおよびメソッドを継承しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親である {{domxref("HTMLElement")}} から継承したプロパティがあります。_

- {{domxref("HTMLTitleElement.text")}}
  - : 文字列で、文書の題名のテキストを表し、またテキスト部分のみを表します。例えば、この例を考えてみてください。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>
      Hello world! <span class="highlight">Isn't this wonderful</span> really?
    </title>
  </head>
  <body></body>
</html>
```

```js
const title = document.querySelector("title");
console.log(title.text); // yield: "Hello world! really?"
```

ご覧の通り、`span` タグとその内容はスキップされています。

## インスタンスメソッド

_固有のメソッドはありません。親である {{domxref("HTMLElement")}} から継承したメソッドがあります。_

## 例

`document.title` と `document.querySelector('title')` を混同しないでください。

前者は文書の題名の内側のテキスト値を設定したり取得したりするための単なるセッター/ゲッターメソッドで、後者は {{domxref("HTMLTitleElement")}} オブジェクトです。ですから、`document.title.text = "Hello world!";` のように書くことはできません。

代わりに、シンプルに `document.title = "Hello world!";` と書くことができます。これは `document.querySelector('title').text = "Hello world!";` と等価です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このインターフェイスを実装している HTML 要素: {{HTMLElement("title")}}
