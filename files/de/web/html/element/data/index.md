---
title: <data>
slug: Web/HTML/Element/data
translation_of: Web/HTML/Element/data
---
Das HTML \<data> -Element verknüpft einen gegebenen Inhalt mit einer maschinenlesbaren Übersetzung. Wenn der Inhalt zeit- oder datumsbezogen ist, muss das Element HTMLElement \<time> verwendet werden.

| Inhaltsverzeichnis | fließender Inhalt, gestaltender Inhalt, eindeutiger Inhalt. |
| ------------------ | ----------------------------------------------------------- |
| Erlaubter Inhalt   | gestaltender Inhalt.                                        |
| Schlagwort Wegfall | Keiner                                                      |
| Erlaubte Eltern    | Alle Elemente die ein gestaltenden Inhalt haben.            |
| DOM interface      | domxref("HTMLDataElement")                                  |

## Attributes

Die Attribute dieses Elements enthalten die globalen Attribute.

- htmlattrdef("value")
  - : Dieses Attribut gibt die maschinenlesbare Übersetzung des Inhalts des Elements an.

## Beispiel

Das folgende Beispiel zeigt Produktnamen an, ordnet jedoch jedem Namen eine Produktnummer zu.

```html
<p>New Products</p>
<ul>
 <li><data value="398">Mini Ketchup</data></li>
 <li><data value="399">Jumbo Ketchup</data></li>
 <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

## Spezifikationen

| Specification                                                                 | Status               | Comment                              |
| ----------------------------------------------------------------------------- | -------------------- | ------------------------------------ |
| SpecName('HTML WHATWG', 'semantics.html#the-data-element', '<data>')          | Spec2('HTML WHATWG') | No change from SpecName('HTML5 W3C') |
| SpecName('HTML5 W3C', 'text-level-semantics.html#the-data-element', '<data>') | Spec2('HTML5 W3C')   | Initial definition.                  |

## Browser compatibility

Compat("html.elements.data")

## See also

- The HTML HTMLElement \<time> element.

HTMLRef
