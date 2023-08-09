---
title: Constructeur AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
---

{{JSRef}}

Le **constructeur `AggregateError()`** permet de créer une erreur qui agrège plusieurs erreurs.

## Syntaxe

```js
new AggregateError(erreurs);
new AggregateError(erreurs, message);
```

### Paramètres

- `erreurs`
  - : Un objet itérable contenant des erreurs (qui peuvent ne pas être des instances de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)).
- `message` {{Optional_Inline}}
  - : Une description optionnelle, compréhensible par un humain, de l'erreur agrégée.

## Exemples

### Créer une exception `AggregateError`

```js
try {
  throw new AggregateError([new Error("une erreur")], "Coucou");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Coucou"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "une erreur" ]
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `AggregateError` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [`Promise.any()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
