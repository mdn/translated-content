---
title: Element.className
slug: Web/API/Element/className
translation_of: Web/API/Element/className
---
{{APIRef("DOM")}}

## Zusammenfassung

**className** holt und setzt den Wert des Attributs `class` eines bestimmten Elements.

## Syntax

    var cName = elementNodeReference.className;
    elementNodeReference.className = cName;

- _cName_ ist eine Variable vom Typen string, die eine Klasse oder die, durch Leerzeichen getrennte, Klassen des aktuellen Elements darstellt.

## Beispiel

```js
let elm = document.getElementById('item');

if(elm.className === 'active'){
    elm.className = 'inactive';
} else {
    elm.className = 'active';
}
```

## Anmerkungen

Der Name `className` wird für diese Eigenschaft anstelle von `class` benutzt, um Komplikationen mit dem Schlüsselwort "class", welches in vielen Sprachen verwendet wird um das DOM zu verändern, zu vermeiden.

`className` kann auch eine Instanz von {{domxref("SVGAnimatedString")}} wenn das `element` ein {{domxref("SVGElement")}} ist. Es ist besser das Attribut `className` eines Elements zu ändern, in dem {{domxref("Element.getAttribute")}} verwendet beziehungsweise {{domxref("Element.setAttribute")}}, wenn man mit SVG Elementen arbeitet.

```js
elm.setAttribute('class', elm.getAttribute('class'))
```

## Spezifikation

| Spezifikation                                                                                    | Status                           | Kommentar                |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------ |
| {{SpecName("DOM WHATWG", "#dom-element-classname", "element.className")}} | {{Spec2("DOM WHATWG")}} |                          |
| {{SpecName("DOM4", "#dom-element-classname", "element.className")}}         | {{Spec2("DOM4")}}         |                          |
| {{SpecName("DOM2 HTML", "html.html#ID-95362176", "element.className")}} | {{Spec2("DOM2 HTML")}}     | Ursprüngliche Definition |

## Browserkompabilität

{{Compat}}

## See also

- {{domxref("element.classList")}}
