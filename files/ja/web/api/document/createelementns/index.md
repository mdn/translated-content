---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
---

{{APIRef("DOM")}}

指定された名前空間 URI と修飾名を持つ要素を生成します。

名前空間 URI を指定せずに要素を生成する場合は、 {{DOMxRef("Document.createElement()", "createElement()")}} メソッドを使用してください。

## 構文

```
var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### 引数

- `namespaceURI`
  - : 文字列で、要素に関連付ける[名前空間 URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) を指定します。生成される要素の {{DOMxRef("element.namespaceURI", "namespaceURI")}} プロパティは _namespaceURI_ の値で初期化されます。 [妥当な名前空間 URI](#important_namespace_uris) も参照してください。
- `qualifiedName`
  - : 文字列で、生成される要素の型を指定します。生成される要素の {{DOMxRef("element.nodeName", "nodeName")}} プロパティは、 _qualifiedName_ の値で初期化されます。
- `options` {{Optional_Inline}}

  - : 任意の `ElementCreationOptions` オブジェクトで、 `is` という名前の単一のプロパティを持ち、その値として以前に `customElements.define()` を使用して定義されたカスタム要素のタグ名を設定します。
    以前のバージョンの [Custom Elements specification](https://www.w3.org/TR/custom-elements/) との後方互換性のため、ブラウザーによってはここにオブジェクトの代わりに、文字列を渡すことができ、その文字列の値はカスタム要素のタグ名になります。
    この引数の使い方について詳しい情報は、  [Extending native HTML elements](https://web.dev/web-components/)  を参照してください。

    新しい要素には `is` 属性が与えられ、値はカスタム要素のタグ名になります。カスタム要素は一部のブラウザーのみで利用できる試行的な機能です。

### 返値

The new {{DOMxRef("Element")}}.

## 重要な名前空間 URI

- [HTML](/ja/docs/Web/HTML)
  - : `http://www.w3.org/1999/xhtml`
- [SVG](/ja/docs/Web/SVG)
  - : `http://www.w3.org/2000/svg`
- [MathML](/ja/docs/Web/MathML)
  - : `http://www.w3.org/1998/Math/MathML`
- [XUL](/ja/docs/Mozilla/Tech/XUL) {{Non-standard_Inline}}
  - : `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`
- [XBL](/ja/docs/Mozilla/Tech/XBL) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : `http://www.mozilla.org/xbl`

## 例

これは新しい \<div> 要素を {{Glossary("XHTML")}} 名前空間に生成し、 vbox 要素に追加します。これは有用な [XUL](/ja/docs/Mozilla/Tech/XUL) 文書ではありませんが、二つの異なる名前空間の要素を単一の文書内で利用する方法を紹介しています。

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

> **メモ:** 上記の例は XHTML 文書では推奨されていないインラインスクリプトを使用しています。この部分的な例は実際には XUL 文書に埋め込んだ XHTML があるものですが、それでもこの推奨事項は適用されます。

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName("DOM WHATWG", "#dom-document-createelementns", "Document.createElementNS()")}} | {{Spec2("DOM WHATWG")}} |      |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Node.namespaceURI")}}
- [Namespaces in XML](http://www.w3.org/TR/1999/REC-xml-names-19990114)
