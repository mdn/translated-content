---
title: "Element: localName プロパティ"
short-title: localName
slug: Web/API/Element/localName
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.localName`** は読み取り専用プロパティで、要素の修飾名のローカル部分を返します。

## 返値

文字列で、要素の修飾名の、ローカル部分を示します。

## 例

（`text/xml` や `application/xhtml+xml` のような、XML のコンテンツタイプで送出される必要があります。）

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script type="application/javascript"><![CDATA[
  function test() {
    const text = document.getElementById('text');
    const circle = document.getElementById('circle');

    text.value = "<svg:circle> has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## メモ

ノードのローカル名とは、ノードの修飾名の、コロンの後に続く部分です。 XML において修飾名は、一般に特定の XML 文書の名前空間の一部として使われます。例えば、`ecomm:partners` という修飾名において、 `partners` はローカル名、`ecomm` は接頭辞です。

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partner>
</ecomm:business>
```

> **メモ:** このプロパティは内部 DOM ストレージの大文字小文字を忠実に返しますが、{{domxref("element.tagName", "tagName")}} プロパティは HTML DOM における HTML 要素でを大文字で返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.prefix")}}
- {{domxref("Attr.localName")}}
