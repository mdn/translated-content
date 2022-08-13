---
title: DOMTokenList
slug: Web/API/DOMTokenList
translation_of: Web/API/DOMTokenList
---
{{APIRef("DOM")}}{{gecko_minversion_header("1.9.2")}}

Die **`DOMTokenList`**Schnittstelle repräsentiert eine Sammlung von durch Leerzeichen getrennte Zeichen/ Merkmale (Tokens). Solch eine Ansammlung wird wiedergegben von {{domxref("Element.classList")}}, {{domxref("HTMLLinkElement.relList")}}, {{domxref("HTMLAnchorElement.relList")}} oder {{domxref("HTMLAreaElement.relList")}}. Deren Index beginnt bei 0 wie bei JavaScript {{jsxref("Array")}} Objekten. `DOMTokenList` achten immer auf die Groß- und Kleinschreibung.

## Eigenschaften

Die Schnittstelle erbt keine Eigenschaften.

- {{domxref("DOMTokenList.length")}} {{ReadOnlyInline}}
  - : Ist eine Ganzzahl, die die Anzahl der im Objekt gespeicherten Objekte darstellt.

## Methoden

Diese Schnittstelle erbt keine Methode.

- {{domxref("DOMTokenList.item()")}}
  - : Returns an item in the list by its index (or undefined if the number is greater than or equal to the length of the list, prior to {{gecko("7.0")}} returned null)
- {{domxref("DOMTokenList.contains()")}}
  - : Returns `true` if the underlying string contains _token_, otherwise `false`
- {{domxref("DOMTokenList.add()")}}
  - : Fügt _token_ der Liste hinzu.
- {{domxref("DOMTokenList.remove()")}}
  - : Removes _token_ from the underlying string
- {{domxref("DOMTokenList.replace()")}}
  - : Replaces an existing _token_ with a new token.
- {{domxref("DOMTokenList.supports()")}}
  - : Returns `true` if a given _token_ is in the associated attribute's supported tokens.
- {{domxref("DOMTokenList.toggle()")}}
  - : Removes _token_ from string and returns false. If _token_ doesn't exist it's added and the function returns true
- {{domxref("DOMTokenList.entries()")}}
  - : Returns an {{jsxref("Iteration_protocols","iterator")}} allowing to go through all key/value pairs contained in this object.
- {{domxref("DOMTokenList.forEach()")}}
  - : Executes a provided function once per `DOMTokenList` element.
- {{domxref("DOMTokenList.keys()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing to go through all keys of the key/value pairs contained in this object.
- {{domxref("DOMTokenList.values()")}}
  - : Returns an {{jsxref("Iteration_protocols", "iterator")}} allowing to go through all values of the key/value pairs contained in this object.

## Spezifikationen

| Specification                                                                                | Status                           | Comment            |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#interface-domtokenlist", "DOMTokenList")}} | {{Spec2("DOM WHATWG")}} | Initial definition |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DOMSettableTokenList")}} (object that extends DOMTokenList with settable _.value_ property)
