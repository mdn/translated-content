---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
---

{{JSRef}}

La méthode **`Symbol.keyFor(sym)`** permet de récupérer la clé d'un symbole donné qui est partagé via le registre global des symboles.

{{InteractiveExample("JavaScript Demo: Symbol.keyFor()")}}

```js interactive-example
const globalSym = Symbol.for("foo"); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined
```

## Syntaxe

```js
Symbol.keyFor(sym);
```

### Paramètres

- `sym`
  - : Le symbole dont on souhaite connaître la clé. Ce paramètre est obligatoire.

### Valeur de retour

Une chaîne de caractères qui représente la clé d'un symbole donné si celui-ci est trouvé dans le registre global ou {{jsxref("undefined")}} sinon.

## Exemples

```js
var symboleGlobal = Symbol.for("toto"); // on crée un symbole global
Symbol.keyFor(symboleGlobal); // "toto"

var symboleLocal = Symbol();
Symbol.keyFor(symboleLocal); // undefined

// les symboles connus ne sont pas dans le registre
// global
Symbol.keyFor(Symbol.iterator); // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.for()")}}
