---
title: Node.parentNode
slug: Web/API/Node/parentNode
translation_of: Web/API/Node/parentNode
---
{{ ApiRef() }}

## Allgemein

Gibt das Elternelement des gegebenen Datenknotens, entsprechend des DOM-Baums zurück.

## Syntax

    elternelement = node.parentNode

`elternelement` enthält das Elternelement des gegebenen Datenknotens.

## Beispiel

```js
var dokument = document.documentElement.parentNode;
```

## Anmerkungen

- Es kann sich bei dem Elternelement um ein {{ domxref("Element") }}, ein {{ domxref("Document") }} oder ein {{ domxref("DocumentFragment") }} handeln.
- `parentNode` gibt `null` zurück bei folgenden Knotentypen: `Attr`, `Document`, `DocumentFragment`, `Entity`, and `Notation`.
- Außerdem wird `null` zurückgegeben, wenn der Knoten bisher nicht an den DOM-Baum angefügt wurde (weil er womöglich gerade erst erstellt wurde).

## Siehe auch

- {{ domxref("Node") }}
- {{ Domxref("Node.firstChild") }}
- {{ Domxref("Node.lastChild") }}
- {{ Domxref("Node.childNodes") }}
- {{ Domxref("Node.nextSibling") }}
- {{ Domxref("Node.previousSibling") }}

## Browserunterstützung

{{Compat}}

## Spezifikation

[DOM Level 2 Core: Node.parentNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1060184317) (en)

{{ languages( { "it": "it/DOM/element.parentNode", "ja": "ja/DOM/element.parentNode", "fr": "fr/DOM/element.parentNode", "pl": "pl/DOM/element.parentNode" , "zh-cn": "zh-cn/DOM/Node.parentNode" } ) }}
