---
title: document.documentElement
slug: Web/API/Document/documentElement
translation_of: Web/API/Document/documentElement
---
{{ApiRef}}

## Zusammenfassung

**Lesbar, nicht schreibbar**

Gibt das [`Element`](/de/docs/DOM/element) zurück, das die Wurzel des [`document`](/en-US/docs/DOM/document) ist (zum Beispiel, das `<html>` Element für HTML Dokumente).

## Syntax

    var element = document.documentElement;

## Beispiel

```js
var rootElement = document.documentElement;
var firstTier = rootElement.childNodes;

// firstTier ist die NodeList von direkten Kindern des Wurzel-Elementes
for (var i = 0; i < firstTier.length; i++) {
   // hier irgendwas mit den direkten Kindern des Wurzel-Elementes mit Hilfe
   // von firstTier[i] erledigen
}
```

## Beobachtungen

Dieses Objekt ist lesbar aber nicht schreibbar. Es ist praktisch um auf die Wurzel eines beliebigen Dokumentes zuzugreifen.

HTML Dokumente enthalten typischerweise ein einziges Tochter-Element, `<html>`, manchmal mit einem DOCTYPE. XML-Doumente enthalten oft mehrere Tochter-Elemente, einen DOCTYPE und [Verarbeitungshinweise](/de/docs/DOM/ProcessingInstruction).

Deswegen sollte `document.documentElement` statt `{{Domxref("document.firstElementChild")}}` benutzt werden, um auf das Wurzel-Element zuzugreifen.

## Spezifikation

- [DOM Level 2 Core: Document.documentElement](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-87CD092)
