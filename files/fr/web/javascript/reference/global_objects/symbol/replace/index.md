---
title: Symbol.replace
slug: Web/JavaScript/Reference/Global_Objects/Symbol/replace
---

{{JSRef}}

Le symbole connu **`Symbol.replace`** définit la méthode utilisée pour remplacer les correspondances trouvées dans une chaîne de caractères. Cette fonction est appelée par la méthode {{jsxref("String.prototype.replace()")}}.

Pour plus d'informations, se référer aux pages sur {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}} et {{jsxref("String.prototype.replace()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.replace")}}

```js interactive-example
class Replace1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.replace](string) {
    return `s/${string}/${this.value}/g`;
  }
}

console.log("foo".replace(new Replace1("bar")));
// Expected output: "s/foo/bar/g"
```

{{js_property_attributes(0,0,0)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("Symbol.split")}}
- {{jsxref("RegExp.@@replace", "RegExp.prototype[@@replace]()")}}
