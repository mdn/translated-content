---
title: DOMParser
slug: Web/API/DOMParser
---

{{APIRef("DOM")}}

**`DOMParser`** インターフェイスは、 {{Glossary("XML")}} や {{Glossary("HTML")}} ソースコードを文字列から DOM の {{domxref("Document")}} に解釈する機能を提供します。

> **メモ:** {{domxref("XMLHttpRequest")}} は URL で指すことができるリソースから直接 XML や HTML を解釈することができ、 `Document` を {{domxref("XMLHttpRequest.response", "response")}} プロパティでを返します。

{{domxref("XMLSerializer")}} インターフェイスを使い、DOM ツリーを XML もしく HTML ソースに転換する、逆の操作を行うことができます。

HTML 文書の場合、{{domxref("Element.innerHTML")}} や {{domxref("Element.outerHTML", "outerHTML")}} プロパティの値を設定することで、HTML から構築された新しい DOM ツリーに一部分を置き換えることもできます。DOM のサブツリーに対応した HTML の要素を取り込むために、これらのプロパティを読み込むことも可能です。

## 構文

```
let domparser = new DOMParser()​​
```

## メソッド

### {{domxref("DOMParser.parseFromString()", "", "", "1")}}

#### 構文

```
let doc = domparser.parseFromString(string, mimeType)
```

#### 返値

**[`mimeType`](#Argument02)** 引数に依存した {{domxref("Document")}} もしくは {{domxref("XMLDocument")}}。

#### 引数

このメソッドには 2 つの引数があります (両方とも必須):

- `string`
  - : {{domxref("DOMString")}} にパースされます。{{Glossary("HTML")}}、{{Glossary("xml")}}、{{Glossary("xhtml+xml")}} もしくは {{Glossary("svg")}} 文書が含まれなければなりません。
- `mimeType`

  - : {{domxref("DOMString")}}。この文字列はメソッドの戻り値のクラスを決定します。メソッドの戻り値は下記の通りです:

    | `mimeType`              | `doc.constructor`                      |
    | ----------------------- | -------------------------------------- |
    | `text/html`             | `{{domxref("Document")}}`     |
    | `text/xml`              | `{{domxref("XMLDocument")}}` |
    | `application/xml`       | `{{domxref("XMLDocument")}}` |
    | `application/xhtml+xml` | `{{domxref("XMLDocument")}}` |
    | `image/svg+xml`         | `{{domxref("XMLDocument")}}` |

## 例

### XML のパース

パーサーオブジェクトを作成すると、`parseFromString()` メソッドを用いて 文字列から XML をパースすることができます:

```js
let parser = new DOMParser()
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml")
```

#### エラーのハンドリング

現在は、パース処理に失敗した場合、`DOMParser` は例外をスローせず、代わりにエラー文書を返すという点に注意して下さい:

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
  (error description)
  <sourcetext>(a snippet of the source XML)</sourcetext>
</parsererror>
```

パースエラーは、ソースのエラー同様、[エラーコンソール](/ja/docs/Error_Console) にもエラーの発生した文書の URI (後述) とともに表示されます。

### SVG および HTML 文書のパース

`DOMParser` は SVG 文書のパース {{geckoRelease("10.0")}}、そして HTML 文書のパース {{geckoRelease("12.0")}} にも用いることができます。指定された MIME type によって 3 つの異なる結果となります。

1. MIME type が `text/xml` の場合、`XMLDocument` が返されます。
2. MIME type が `image/svg+xml` の場合、`SVGDocument` が返されます。
3. MIME type が `text/html` の場合、`HTMLDocument` が返されます。

```js
let parser = new DOMParser()
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml")
// Document を返しますが、 SVGDocument でも HTMLDocument でもありません

parser = new DOMParser();
doc = parser.parseFromString(stringContainingSVGSource, "image/svg+xml")
// SVGDocument を返しますが、これも Document です。

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html")
// HTMLDocument を返しますが、これも Document です。
```

## DOMParser HTML 拡張機能

```js
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
  "use strict";

  var proto = DOMParser.prototype,
  nativeParse = proto.parseFromString;

  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if ((new DOMParser()).parseFromString("", "text/html")) {
      // text/html parsing is natively supported
      return;
    }
  } catch (ex) {}

  proto.parseFromString = function(markup, type) {
    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
      var doc = document.implementation.createHTMLDocument("");
        if (markup.toLowerCase().indexOf('<!doctype') > -1) {
          doc.documentElement.innerHTML = markup;
        } else {
          doc.body.innerHTML = markup;
        }
      return doc;
    } else {
      return nativeParse.apply(this, arguments);
    }
  };
}(DOMParser));
```

## 仕様書

| 仕様書                                                                                               | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', '#dom-parsing-and-serialization', 'DOM parsing')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("api.DOMParser", 3)}}

## 関連情報

- [XML のパースとシリアライズ](/ja/docs/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - {{jsxref("JSON")}} 文書での同様のページ
