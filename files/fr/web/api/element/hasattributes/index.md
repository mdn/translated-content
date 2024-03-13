---
title: element.hasAttributes
slug: Web/API/Element/hasAttributes
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
(function (prototype) {
  prototype.hasAttributes =
    prototype.hasAttributes ||
    function () {
      return this.attributes.length > 0;
    };
})(Element.prototype);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
