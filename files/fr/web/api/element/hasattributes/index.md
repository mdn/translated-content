---
title: element.hasAttributes
slug: Web/API/Element/hasAttributes
tags:
  - API
  - DOM
  - Element
  - Méthode
  - Reference
  - polyfill
translation_of: Web/API/Element/hasAttributes
---
{{ApiRef("DOM")}}

La méthode **`hasAttributes()`**, rattachée à l'interface {{domxref("Element")}}, renvoie une valeur booléenne indiquant si le nœud courant a au moins un attribut ou non.

## Syntaxe

```js
var result = element.hasAttributes();
```

### Valeur de retour

- `result`
  - : contient la valeur de retour `true` ou `false`.

## Exemple

```js
var foo = document.getElementById("foo");
if (foo.hasAttributes()) {
    // faire quelque chose avec 'foo.attributes'
}
```

## Polyfill

```js
;(function(prototype) {
    prototype.hasAttributes = prototype.hasAttributes || function() {
        return (this.attributes.length > 0);
    }
})(Element.prototype);
```

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{SpecName("DOM WHATWG", "#dom-element-hasattributes", "Element.hasAttributes()")}} | {{Spec2('DOM WHATWG')}} | Déplacé de l'interface {{domxref("Node")}} vers l'interface plus spécialisée {{domxref("Element")}}. |
| {{SpecName('DOM3 Core','#ID-NodeHasAttrs','hasAttributes()')}}                             | {{Spec2('DOM3 Core')}}     | Pas de changement par rapport à {{SpecName("DOM2 Core")}}                                                |
| {{SpecName('DOM2 Core','#ID-NodeHasAttrs','hasAttributes()')}}                             | {{Spec2('DOM2 Core')}}     | Définition initiale, sur l'interface {{domxref("Node")}}.                                                  |

## Compatibilité des navigateurs

{{Compat("api.Element.hasAttributes")}}

## Voir aussi

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
