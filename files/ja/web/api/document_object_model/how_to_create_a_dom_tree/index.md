---
title: DOM ツリーの作成方法
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
l10n:
  sourceCommit: c3a0924949863b43957b4ba2ad5e64558165672d
---

{{DefaultAPISidebar("DOM")}}

このページでは JavaScript において DOM API を用いて DOM オブジェクトを作成したり変更したりする方法を解説します。

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

DOM API を使うことで、この文書のメモリー内の表現を作成することができます。

```js
const doc = document.implementation.createDocument("", "", null);
const peopleElem = doc.createElement("people");

const personElem1 = doc.createElement("person");
personElem1.setAttribute("first-name", "eric");
personElem1.setAttribute("middle-initial", "h");
personElem1.setAttribute("last-name", "jung");

const addressElem1 = doc.createElement("address");
addressElem1.setAttribute("street", "321 south st");
addressElem1.setAttribute("city", "denver");
addressElem1.setAttribute("state", "co");
addressElem1.setAttribute("country", "usa");
personElem1.appendChild(addressElem1);

const addressElem2 = doc.createElement("address");
addressElem2.setAttribute("street", "123 main st");
addressElem2.setAttribute("city", "arlington");
addressElem2.setAttribute("state", "ma");
addressElem2.setAttribute("country", "usa");
personElem1.appendChild(addressElem2);

const personElem2 = doc.createElement("person");
personElem2.setAttribute("first-name", "jed");
personElem2.setAttribute("last-name", "brown");

const addressElem3 = doc.createElement("address");
addressElem3.setAttribute("street", "321 north st");
addressElem3.setAttribute("city", "atlanta");
addressElem3.setAttribute("state", "ga");
addressElem3.setAttribute("country", "usa");
personElem2.appendChild(addressElem3);

const addressElem4 = doc.createElement("address");
addressElem4.setAttribute("street", "123 west st");
addressElem4.setAttribute("city", "seattle");
addressElem4.setAttribute("state", "wa");
addressElem4.setAttribute("country", "usa");
personElem2.appendChild(addressElem4);

const addressElem5 = doc.createElement("address");
addressElem5.setAttribute("street", "321 south avenue");
addressElem5.setAttribute("city", "denver");
addressElem5.setAttribute("state", "co");
addressElem5.setAttribute("country", "usa");
personElem2.appendChild(addressElem5);

peopleElem.appendChild(personElem1);
peopleElem.appendChild(personElem2);
doc.appendChild(peopleElem);
```

DOM ツリーは以下のことをすることができます。

- [XPath 式を用いて問い合わせ](/ja/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
- [XMLSerializer](/ja/docs/Web/Guide/Parsing_and_serializing_XML) を用いて文字列に変換
- [ウェブサーバーに POST](/ja/docs/Web/API/XMLHttpRequest) (`XMLHttpRequest` で)
- [XSLT](/ja/docs/Web/XSLT) または [XLink](/ja/docs/Glossary/XLink) を使用して形式変換

## 関連情報

- [XML](/ja/docs/Web/XML)
- [XPath](/ja/docs/Web/XPath)
- [XML の解釈とシリアライズ](/ja/docs/Web/Guide/Parsing_and_serializing_XML)
- [XMLHttpRequest](/ja/docs/Web/API/XMLHttpRequest)
