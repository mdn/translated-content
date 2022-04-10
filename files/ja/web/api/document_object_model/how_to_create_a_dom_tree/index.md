---
title: DOM ツリーの作成方法
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
tags:
  - AJAX
  - アドオン
  - DOM
  - 拡張機能
  - JXON
  - NeedsUpdate
  - XML
translation_of: Web/API/Document_object_model/How_to_create_a_DOM_tree
---
{{DefaultAPISidebar("DOM")}}

このページでは JavaScript において [DOM コア](https://www.w3.org/TR/DOM-Level-3-Core/core.html) API を用いて DOM オブジェクトを作成したり変更したりする方法を解説します。これはすべての Gecko ベースのアプリケーション（Firefox など）で特権付きコード（拡張機能）でも特権なしコード（ウェブページ）でも利用できます。

### DOM ツリーの動的作成

次の XML 文書を見てください。

```xml
<?xml version="1.0"?>
<people>
  <person first-name="eric" middle-initial="H" last-name="jung">
    <address street="321 south st" city="denver" state="co" country="usa"/>
    <address street="123 main st" city="arlington" state="ma" country="usa"/>
  </person>

  <person first-name="jed" last-name="brown">
    <address street="321 north st" city="atlanta" state="ga" country="usa"/>
    <address street="123 west st" city="seattle" state="wa" country="usa"/>
    <address street="321 south avenue" city="denver" state="co" country="usa"/>
  </person>
</people>
```

Mozilla が対応している W3C DOM API を次のように使うことで、この文書のメモリー内の表現を作成することができます。

```js
var doc = document.implementation.createDocument("", "", null);
var peopleElem = doc.createElement("people");

var personElem1 = doc.createElement("person");
personElem1.setAttribute("first-name", "eric");
personElem1.setAttribute("middle-initial", "h");
personElem1.setAttribute("last-name", "jung");

var addressElem1 = doc.createElement("address");
addressElem1.setAttribute("street", "321 south st");
addressElem1.setAttribute("city", "denver");
addressElem1.setAttribute("state", "co");
addressElem1.setAttribute("country", "usa");
personElem1.appendChild(addressElem1);

var addressElem2 = doc.createElement("address");
addressElem2.setAttribute("street", "123 main st");
addressElem2.setAttribute("city", "arlington");
addressElem2.setAttribute("state", "ma");
addressElem2.setAttribute("country", "usa");
personElem1.appendChild(addressElem2);

var personElem2 = doc.createElement("person");
personElem2.setAttribute("first-name", "jed");
personElem2.setAttribute("last-name", "brown");

var addressElem3 = doc.createElement("address");
addressElem3.setAttribute("street", "321 north st");
addressElem3.setAttribute("city", "atlanta");
addressElem3.setAttribute("state", "ga");
addressElem3.setAttribute("country", "usa");
personElem2.appendChild(addressElem3);

var addressElem4 = doc.createElement("address");
addressElem4.setAttribute("street", "123 west st");
addressElem4.setAttribute("city", "seattle");
addressElem4.setAttribute("state", "wa");
addressElem4.setAttribute("country", "usa");
personElem2.appendChild(addressElem4);

var addressElem5 = doc.createElement("address");
addressElem5.setAttribute("street", "321 south avenue");
addressElem5.setAttribute("city", "denver");
addressElem5.setAttribute("state", "co");
addressElem5.setAttribute("country", "usa");
personElem2.appendChild(addressElem5);

peopleElem.appendChild(personElem1);
peopleElem.appendChild(personElem2);
doc.appendChild(peopleElem);
```

[XUL チュートリアルの DOM の章](/ja/docs/XUL_Tutorial/Document_Object_Model) も参照してください。

DOM ツリーの生成は、 [JXON 逆引きアリゴリズム](/ja/docs/JXON#JXON_reverse_algorithms)に次の JSON 表現を関連付けることで自動化できます。

```js
{
  "people": {
    "person": [{
      "address": [{
        "@street": "321 south st",
        "@city": "denver",
        "@state": "co",
        "@country": "usa"
      }, {
        "@street": "123 main st",
        "@city": "arlington",
        "@state": "ma",
        "@country": "usa"
      }],
      "@first-name": "eric",
      "@middle-initial": "H",
      "@last-name": "jung"
    }, {
      "address": [{
        "@street": "321 north st",
        "@city": "atlanta",
        "@state": "ga",
        "@country": "usa"
      }, {
        "@street": "123 west st",
        "@city": "seattle",
        "@state": "wa",
        "@country": "usa"
      }, {
        "@street": "321 south avenue",
        "@city": "denver",
        "@state": "co",
        "@country": "usa"
      }],
      "@first-name": "jed",
      "@last-name": "brown"
    }]
  }
}
```

### 要するに

DOM ツリーは [XPath 式を用いて問い合わせ](/ja/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)したり、文字列に変換したり、 [ XMLSerializer](/ja/docs/Web/Guide/Parsing_and_serializing_XML) を用いてローカルあるいはリモートのファイルに書き出したり（あらかじめ文字列に変換しておく必要はない）、[ウェブサーバーに POST したり](/ja/docs/Web/API/XMLHttpRequest) (`XMLHttpRequest` で)、 [XSLT](/ja/docs/Web/XSLT) で変換したり、[XLink](/ja/docs/Glossary/XLink) を利用したり、 [JXON アルゴリズム](/ja/docs/JXON)で JavaScript オブジェクトに変換したりと、さまざまな利用法があります。

RDF には適さないデータを（あるいは RDF が嫌いなだけという場合でも）DOM ツリーを用いて作ることができます。別の応用例として、XUL は XML であるため、アプリケーションの UI を動的に操作したり、ダウンロードやアップロードをしたり、保存や読み込みをしたり、変換したりといったことがかなり簡単にできます。

## 関連情報

- [XML](/ja/docs/Web/XML)
- [JXON](/ja/docs/JXON)
- [XPath](/ja/docs/Web/XPath)
- [XML の解釈とシリアライズ](/ja/docs/Web/Guide/Parsing_and_serializing_XML)
- [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest)
