---
title: "Document: createElementNS() メソッド"
short-title: createElementNS()
slug: Web/API/Document/createElementNS
l10n:
  sourceCommit: 4b0f1ecd4e53e8f0741bac1099f9faecd6fefde8
---

{{APIRef("DOM")}}

指定された名前空間 URI と修飾名を持つ要素を生成します。

名前空間 URI を指定せずに要素を生成する場合は、 {{DOMxRef("Document.createElement()", "createElement()")}} メソッドを使用してください。

## 構文

```js-nolint
createElementNS(namespaceURI, qualifiedName)
createElementNS(namespaceURI, qualifiedName, options)
```

### 引数

- `namespaceURI`
  - : 文字列で、要素に関連付ける[名前空間 URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) を指定します。
    生成される要素の {{DOMxRef("element.namespaceURI", "namespaceURI")}} プロパティは _namespaceURI_ の値で初期化されます。
    [有効な名前空間 URI](#重要な名前空間_uri) も参照してください。
- `qualifiedName`
  - : 文字列で、生成される要素の型を指定します。
    生成される要素の {{DOMxRef("node.nodeName", "nodeName")}} プロパティは、 _qualifiedName_ の値で初期化されます。
- `options` {{Optional_Inline}}
  - : 任意の `ElementCreationOptions` オブジェクトで、 `is` という名前の単一のプロパティを持ち、その値として事前に `customElements.define()` を使用して定義されたカスタム要素のタグ名を設定します。
    以前のバージョンの[カスタム要素仕様書](https://www.w3.org/TR/custom-elements/)との後方互換性のため、ブラウザーによってはここにオブジェクトの代わりに、文字列を渡すことができ、その文字列の値はカスタム要素のタグ名になります。
    この引数の使い方について詳しい情報は、 [Extending native HTML elements](https://web.dev/articles/web-components/) を参照してください。

    新しい要素には `is` 属性が与えられ、値はカスタム要素のタグ名になります。カスタム要素は一部のブラウザーのみで利用できる試行的な機能です。

### 返値

新しい {{DOMxRef("Element")}} です。

### 例外

- `NamespaceError` {{domxref("DOMException")}}
  - : [`namespaceURI`](#namespaceuri) の値が有効な[名前空間 URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) でない場合に発生します。
- `InvalidCharacterError` {{domxref("DOMException")}}
  - : [`qualifiedName`](#qualifiedname) の値が有効な [XML 名](https://www.w3.org/TR/REC-xml/#dt-name) でない場合に発生します。例えば、数字、ハイフン、ピリオドで始まったり、アルファベット文字、アンダースコア、ハイフン、ピリオド以外の文字を含んでいたりする場合です。

## 重要な名前空間 URI

- [HTML](/ja/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/ja/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/ja/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`

## 例

これは新しい `<div>` 要素を {{Glossary("XHTML")}} 名前空間に生成し、 vbox 要素に追加します。これは有用な XUL 文書ではありませんが、2 つの異なる名前空間の要素を単一の文書内で利用する方法を紹介しています。

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="application/javascript"><![CDATA[
 let container;
 let newdiv;
 let txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
   txtnode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id="ContainerBox" flex="1">
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> 上記の例は XHTML 文書では推奨されていないインラインスクリプトを使用しています。この部分的な例は実際には XUL 文書に埋め込んだ XHTML があるものですが、それでもこの推奨事項は適用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)
