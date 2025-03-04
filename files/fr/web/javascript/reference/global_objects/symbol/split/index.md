---
title: Symbol.split
slug: Web/JavaScript/Reference/Global_Objects/Symbol/split
---

{{JSRef}}

Le symbole connu **`Symbol.split`** définit la méthode qui est utilisée pour découper une chaîne de caractères à l'emplacement où une correspondance a été trouvée grâce à une expression rationnelle. Cette fonction est appelée par la méthode {{jsxref("String.prototype.split()")}}.

Pour plus d'informations, se référer aux pages sur {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}} et {{jsxref("String.prototype.split()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.split")}}

```js interactive-example
class Split1 {
  constructor(value) {
    this.value = value;
  }
  [Symbol.split](string) {
    const index = string.indexOf(this.value);
    return `${this.value}${string.substring(0, index)}/${string.substring(
      index + this.value.length,
    )}`;
  }
}

console.log("foobar".split(new Split1("foo")));
// Expected output: "foo/bar"
```

{{js_property_attributes(0,0,0)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.match")}}
- {{jsxref("Symbol.replace")}}
- {{jsxref("Symbol.search")}}
- {{jsxref("RegExp.@@split", "RegExp.prototype[@@split]()")}}
