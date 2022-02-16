---
title: Document.createElement()
slug: Web/API/Document/createElement
tags:
  - API
  - DOM
  - Document
  - メソッド
  - リファレンス
  - createElement
browser-compat: api.Document.createElement
translation_of: Web/API/Document/createElement
---
{{APIRef("DOM")}}

[HTML](/ja/docs/Web/HTML) 文書において、 **`document.createElement()`** メソッドは _tagName_ で指定された HTML 要素を生成し、または _tagName_ が認識できない場合は {{domxref("HTMLUnknownElement")}} を生成します。

## 構文

```js
let element = document.createElement(tagName[, options]);
```

### 引数

- _tagName_
  - : 生成される要素の型を特定する文字列です。生成される要素の {{domxref("Node.nodeName", "nodeName")}} は _tagName_ の値で初期化されます。このメソッドで修飾名 ("html:a" など) を使用しないでください。 HTML 文書で呼び出すと、 `createElement()` は要素を生成する前に _tagName_ を小文字に変換します。 Firefox, Opera, Chrome では、 `createElement(null)` は `createElement("null")` のように動作します。
- _options_{{optional_inline}}
  - : 省略可能な `ElementCreationOptions` オブジェクトで、 `is` という名前のプロパティをひとつ持ち、その値は前に `customElements.define()` を使用して定義したカスタム要素の名前です。詳しくは{{anch("ウェブコンポーネントの例")}}を参照してください。

### 返値

新しい {{domxref("Element")}} です。

> **Note:** 文書が {{domxref("HTMLDocument", "HTMLDocument", "", "1")}} である場合、新しい {{domxref("HTMLElement", "HTMLElement", "", "1")}} を返しますが、これが最も一般的です。それ以外の場合は新しい {{domxref("Element","Element","","1")}} を返します。

## 例

### 基本的な例

この例では新しい `<div>` を生成し、 id が "`div1`" である要素の前に挿入します。

#### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
</body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement () {
  // 新しい div 要素を作成します
  const newDiv = document.createElement("div");

  // いくつかの内容を与えます
  const newContent = document.createTextNode("Hi there and greetings!");

  // テキストノードを新規作成した div に追加します
  newDiv.appendChild(newContent);

  // DOM に新しく作られた要素とその内容を追加します
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

#### 結果

{{EmbedLiveSample("Basic_example", 500, 80)}}

### ウェブコンポーネントの例

以下の例の断片は [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component)
 の例から取ったものです ([ライブでもご覧ください](https://mdn.github.io/web-components-examples/expanding-list-web-component/))。この場合、カスタム要素は {{domxref("HTMLUListElement")}} を拡張し、 {{htmlelement("ul")}} 要素を表します。

```js
// 要素のためのクラスを作成
class ExpandingList extends HTMLUListElement {
  constructor() {
    // コンストラクターでは常に super を最初に呼び出す
    super();

    // コンストラクターの定義は簡略化のため省略します。
    ...
  }
}

// 新しい要素を定義
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```

この要素のインスタンスをプログラムで生成したければ、次の行のような呼び出しを使用します。

```js
let expandingList = document.createElement('ul', { is : 'expanding-list' })
```

新しい要素には [`is`](/ja/docs/Web/HTML/Global_attributes/is) 属性が与えられ、その値はカスタム要素のタグ名になります。

> **Note:** [カスタム要素仕様書](https://www.w3.org/TR/custom-elements/)の以前のバージョンととの後方互換性のため、一部のブラウザーはオブジェクトの代わりに文字列を渡すことを認めており、この文字列はカスタム要素のタグ名です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — 要素の名前空間 URI を明示的に指定するために使用
