---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
tags:
  - API DOM Methode Node
translation_of: Web/API/Node/hasChildNodes
---
{{APIRef("DOM")}}

Die **`Node.hasChildNodes()`** Methode liefert einen **Boolean** Wert der anzeigt ob die aktuelle {{domxref("Node")}} [child nodes](/de/docs/Web/API/Node.childNodes "DOM/Node.childNodes") hat oder nicht.

## Syntax

    result = node.hasChildNodes();

- `result`
  - : enthält den return Wert `true` oder `false`.

## Beispiele

Das nächste Beispiel entfernt die erste child node innerhalb dem element mit der id `"foo"` wenn foo child nodes enthält.

```js
var foo = document.getElementById("foo");
if (foo.hasChildNodes()) {
    // do something with 'foo.childNodes'
}
```

## Polyfill

```js
;(function(prototype) {
    prototype.hasChildNodes = prototype.hasChildNodes || function() {
        return !!this.firstChild;
    }
})(Node.prototype);
```

## Zusammenfassung

Es gibt unterschiedliche Wege herauszufinden ob die node eine child node enthält.

- node.hasChildNodes()
- node.firstChild != null (or just node.firstChild)
- node.childNodes && node.childNodes.length (or node.childNodes.length > 0)

## Spezifikation

- [WHATWG: hasChildNodes](https://dom.spec.whatwg.org/#dom-node-haschildnodes)
- [hasChildNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-810594187)

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.childNodes")}}
- {{domxref("Node.hasAttributes")}}
