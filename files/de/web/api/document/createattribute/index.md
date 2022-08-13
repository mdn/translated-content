---
title: Document.createAttribute()
slug: Web/API/Document/createAttribute
tags:
  - API
  - DOM
  - Méthode
  - Referenz
translation_of: Web/API/Document/createAttribute
---
{{ ApiRef("DOM") }}

**createAttribute** erstellt einen neuen Attributsknoten und gibt ihn zurück.

## Syntax

    attribute = document.createAttribute(name)

### Parameter

- `attribute` ist ein Attributsknoten.
- `name` ist ein String, der den Namen des Attributs enthält.

## Beispiel

```js
<html>

<head>
<title> create/set/get Attribut Beispiel</title>

<script type="text/javascript">

function doAttrib() {
  var node = document.getElementById("div1");
  var a = document.createAttribute("my_attrib");
  a.value = "newVal";
  node.setAttributeNode(a);
  alert(node.getAttribute("my_attrib")); // "newVal"
}

// Alternative form ohne die Verwendung von createAttribute
//function doAttrib() {
//  var node = document.getElementById("div1");
//  node.setAttribute("my_attrib", "newVal");
//  alert(node.getAttribute("my_attrib")); // "newVal"
//}

</script>
</head>

<body onload="doAttrib();">
<div id="div1">
<p>Some content here</p>
</div>
</body>
</html>
```

## Bemerkungen

Der Rückgabewert ist ein Knoten des Typs `attribute`. Sobald man diesen wie im vorangegangenen Beispiel hat, kann man ihren Wert festlegen, indem man der `nodeValue` _property_ einen String zuweist, oder in der alternativen Form durch Benutzung der [setAttribute()](/de/docs/DOM/element.setAttribute "DOM/element.setAttribute") Methode. Der DOM beschränkt auf diese Art nicht, welche Arten von Attributen an das jeweilige Element zugewiesen werden dürfen.

## Spezifikation

- [createAttribute](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1084891198)

## Siehe auch

- {{domxref("document.createElement")}}
