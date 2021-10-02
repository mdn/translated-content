---
title: element.hasAttribute
slug: Web/API/Element/hasAttribute
tags:
  - API
  - DOM
  - Element
  - Méthode
  - Reference
translation_of: Web/API/Element/hasAttribute
---
{{APIRef("DOM")}}

La méthode **`Element.hasAttribute()`** renvoie une **valeur booléenne** indiquant si l'élément courant possède l'attribut spécifié ou non.

## Syntaxe

    var result = element.hasAttribute(name);

- `result`
  - : récupère la valeur de retour `true` ou `false`.
- `name`
  - : est une chaine de caractères représentant le nom de l'attribut.

## Exemple

```js
var foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
    // faire quelque chose
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

## Notes

{{DOMAttributeMethods}}

## Spécification

| Spécification                                                                                                | Statut                           | Commentaire                                                                                               |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-hasattribute', 'Element.hasAttribute()')}} | {{Spec2('DOM WHATWG')}} | Dans {{SpecName('DOM3 Core')}}, déplacé de {{domxref("Node")}} à {{domxref("Element")}} |
| {{SpecName('DOM3 Core', 'core.html#ID-ElHasAttr', 'Element.hasAttribute()')}}     | {{Spec2('DOM3 Core')}}     | Pas de changement par rapport à {{SpecName('DOM2 Core')}}                                          |
| {{SpecName('DOM2 Core', 'core.html#ID-ElHasAttr', 'Element.hasAttribute()')}}     | {{Spec2('DOM2 Core')}}     | Définition initiale.                                                                                      |

## Browser compatibility

{{Compat("api.Element.hasAttribute")}}
