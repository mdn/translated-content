---
title: 如何创建一个 DOM 树
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
---

这个页面讲的是如何利用 JavaScript 中的 [DOM Core](http://www.w3.org/TR/DOM-Level-3-Core/core.html) API 来创建和修改 DOM 对象。它适用于特权（扩展）和非特权（网页）代码中的所有基于 Gecko 的应用程序（如 Firefox）。

### Dynamically creating a DOM tree

Consider the following XML document:

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

The W3C DOM API, supported by Mozilla, can be used to create an in-memory representation of this document like so:

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

See also the [DOM chapter of the XUL Tutorial](/zh-CN/XUL_Tutorial/Document_Object_Model).

You can automate the creation of a DOM tree using a [JXON reverse algorithm](/zh-CN/JXON#JXON_reverse_algorithms) in association with the following JSON representation:

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

### So what?

DOM trees can be [queried using XPath expressions](/zh-CN/Using_XPath), converted to strings or written to a local or remote files using [XMLSerializer](/zh-CN/Parsing_and_serializing_XML) (without having to first convert to a string), [POSTed to a web server](/zh-CN/DOM/XMLHttpRequest) (via `XMLHttpRequest`), transformed using [XSLT](/zh-CN/XSLT), [XLink](/zh-CN/XLink), converted to a JavaScript object through a [JXON algorithm](/zh-CN/JXON), etc.

You can use DOM trees to model data which isn't well-suited for RDF (or perhaps you just don't like RDF). Another application is that, since XUL is XML, the UI of your application can be dynamically manipulated, downloaded, uploaded, saved, loaded, converted, or transformed quite easily.

## See also

- [XML](/zh-CN/XML)
- [JXON](/zh-CN/JXON)
- [XPath](/zh-CN/XPath)
- [E4X (ECMAScript for XML)](/zh-CN/E4X)
- [Parsing and serializing XML](/zh-CN/Parsing_and_serializing_XML)
- [XMLHttpRequest](/zh-CN/DOM/XMLHttpRequest)
