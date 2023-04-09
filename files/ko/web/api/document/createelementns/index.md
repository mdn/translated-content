---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
---

{{ApiRef("DOM")}}

지정된 네임스페이스 URI와 적합한 이름으로 엘리먼트를 만든다.

네임스페이스 URI를 지정하지 않고 엘리먼트를 만들려면 [createElement](createElement)메소드를 사용하라.

## Syntax

```js
var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### Parameters

- `tagName`
  - : A string that specifies the type of element to be created. The {{domxref("Node.nodeName", "nodeName")}} of the created element is initialized with the value of _tagName_. Don't use qualified names (like "html:a") with this method. When called on an HTML document, `createElement()` converts _tagName_ to lower case before creating the element. In Firefox, Opera, and Chrome, `createElement(null)` works like `createElement("null")`.
- `options` {{optional_inline}}
  - : An object with the following properties:
    - `is`
      - : The tag name of a custom element previously defined via `customElements.define()`.
        See [Web component example](#web_component_example) for more details.

### Return value

The new [`Element`](/ko/docs/Web/API/Element).

## Valid Namespace URIs

- HTML - Use `http://www.w3.org/1999/xhtml`
- SVG - Use `http://www.w3.org/2000/svg`
- XBL - Use `http://www.mozilla.org/xbl`
- XUL - Use `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`

## Example

This creates a new `<div>` element in the [XHTML](/ko/docs/XHTML) namespace and appends it to the vbox element. Although this is not an extremely useful [XUL](/ko/docs/XUL) document, it does demonstrate the use of elements from two different namespaces within a single document:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="text/javascript"><![CDATA[
 var container;
 var newdiv;
 var txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml","div");
   txtnode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id='ContainerBox' flex='1'>
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> **참고:** The example given above uses inline script which is not recommended in XHTML documents. This particular example is actually an XUL document with embedded XHTML, however, the recommendation still applies.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)
