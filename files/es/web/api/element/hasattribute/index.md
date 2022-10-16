---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
translation_of: Web/API/Element/hasAttribute
---
{{APIRef("DOM")}}

El método **`Elemento.hasAttribute()`** devuelve un valor **Booleano** indicando si el elemento tiene el atributo especificado o no.

## Sintaxis

```js
var resultado = elemento.hasAttribute(nombre);
```

- `resultado`
  - : contendrá el valor devuelto (`true` o `false)`.
- `nombre`
  - : consiste en una cadena de caracteres que representa el nombre del atributo a chequear.

## Ejemplo

```js
var foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
    // hacer algo
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

## Notas

{{DOMAttributeMethods}}

## Especificaciones

| Specification                                                                                                | Status                           | Comment                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-hasattribute', 'Element.hasAttribute()')}} | {{Spec2('DOM WHATWG')}} | From {{SpecName('DOM3 Core')}}, moved from {{domxref("Node")}} to {{domxref("Element")}} |
| {{SpecName('DOM3 Core', 'core.html#ID-ElHasAttr', 'Element.hasAttribute()')}}     | {{Spec2('DOM3 Core')}}     | No change from {{SpecName('DOM2 Core')}}                                                            |
| {{SpecName('DOM2 Core', 'core.html#ID-ElHasAttr', 'Element.hasAttribute()')}}     | {{Spec2('DOM2 Core')}}     | Initial definition.                                                                                        |

## Compatibilidad de navegadores

{{Compat("api.Element.hasAttribute")}}
