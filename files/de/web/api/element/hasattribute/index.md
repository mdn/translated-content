---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
tags:
  - API
  - Attribut
  - DOM
  - Element
  - Méthode
translation_of: Web/API/Element/hasAttribute
---
{{APIRef("DOM")}}

`Die Methode`**`Element.hasAttribute()`** nimmt einen **String** als Argument und gibt einen **Boolean** zurück. Der als Argument übergebene **String** spezifiziert das gemeinte Attribut und der Rückabe Wert gibt an, ob dieses Attribut in dem jeweiligen Element vorkommt .

## Syntax

    var result = element.hasAttribute(name);

- `result`
  - : Rückgabewert, wahr oder falsch.
- `name`
  - : Ein **String**, der das jeweilige Attribut spezifiziert.

## Beispiel

```js
var foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
    // do something
}
```

## Polyfill

```js
;(function(prototype) {
    prototype.hasAttribute = prototype.hasAttribute || function(name) {
        return !!(this.attributes[name] &&
                  this.attributes[name].specified);
    }
})(Element.prototype);
```

## Notizen

{{DOMAttributeMethods}}

## Spezifikationen

| Spezifikation                                                                                                | Status                           | Kommentar                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('DOM WHATWG', '#dom-element-hasattribute', 'Element.hasAttribute()')}} | {{Spec2('DOM WHATWG')}} | Von {{SpecName('DOM3 Core')}}, verlegt von {{domxref("Node")}} nach {{domxref("Element")}} |
| {{SpecName('DOM3 Core', 'core.html#ID-ElHasAttr', 'Element.hasAttribute()')}}     | {{Spec2('DOM3 Core')}}     | Keine Veränderungen zu {{SpecName('DOM2 Core')}}                                                      |
| {{SpecName('DOM2 Core', 'core.html#ID-ElHasAttr', 'Element.hasAttribute()')}}     | {{Spec2('DOM2 Core')}}     | Initiale Definition.                                                                                         |

## Browser Kompatibilität

{{Compat}}
