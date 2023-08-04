---
title: element.hasAttribute
slug: Web/API/Element/hasAttribute
---

{{APIRef("DOM")}}

La méthode **`Element.hasAttribute()`** renvoie une **valeur booléenne** indiquant si l'élément courant possède l'attribut spécifié ou non.

## Syntaxe

```js
var result = element.hasAttribute(name);
```

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
(function (prototype) {
  prototype.hasAttribute =
    prototype.hasAttribute ||
    function (name) {
      return !!(this.attributes[name] && this.attributes[name].specified);
    };
})(Element.prototype);
```

## Notes

{{DOMAttributeMethods}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
