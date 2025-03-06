---
title: Symbol.search
slug: Web/JavaScript/Reference/Global_Objects/Symbol/search
---

{{JSRef}}

Le symbole connu **`Symbol.search`** définit la méthode qui renvoie l'indice indiquant la position d'une correspondance trouvée dans une chaîne de caractères grâce à une expression rationnelle. Cette fonction est appelée par la méthode {{jsxref("String.prototype.search()")}}.

Pour plus d'informations, se référer aux pages sur {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}} et {{jsxref("String.prototype.search()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.search")}}

```js interactive-example
class Search1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.search](string) {
    return string.indexOf(this.value);
  }
}

console.log("foobar".search(new Search1("bar")));
// Expected output: 3
```

{{js_property_attributes(0,0,0)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@search", "RegExp.prototype[@@search]()")}}
