---
title: Symbol.toStringTag
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
---

{{JSRef}}

Le symbole connu **`Symbol.toStringTag`** est une propriété qui est une chaîne de caractères qui est utilisée pour la description textuelle par défaut d'un objet. Ce symbole est utilisé par le moteur JavaScript via la méthode {{jsxref("Object.prototype.toString()")}}.

{{InteractiveExample("JavaScript Demo: Symbol.toStringTag")}}

```js interactive-example
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

console.log(Object.prototype.toString.call(new ValidatorClass()));
// Expected output: "[object Validator]"
```

{{js_property_attributes(0,0,0)}}

## Description

La plupart des types JavaScript ont des étiquettes par défaut :

```js
Object.prototype.toString.call("toto"); // "[object String]"
Object.prototype.toString.call([1, 2]); // "[object Array]"
Object.prototype.toString.call(3); // "[object Number]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
// etc.
```

D'autres ont le symbole natif `toStringTag` défini :

```js
Object.prototype.toString.call(new Map()); // "[object Map]"
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
// etc.
```

Lorsqu'on crée des classes personnalisées, JavaScript utilise l'étiquette "Object" par défaut :

```js
class ValidatorClass {}

Object.prototype.toString.call(new ValidatorClass()); // "[object Object]"
```

Si on utilise le symbole `toStringTag` on peut définir une étiquette personnalisée :

```js
class ValidatorClass {
  get [Symbol.toStringTag]() {
    return "Validator";
  }
}

Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
