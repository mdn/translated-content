---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
---

{{JSRef}}

Un objet **`AggregateError`** représente une erreur lorsque plusieurs erreurs doivent être agrégées en une seule. Ce type d'exception est levée lorsque plusieurs erreurs sont rapportées par une opération, par exemple avec {{JSxRef("Promise.any()")}} lorsque l'ensemble des promesses qui lui sont passées échouent.

## Constructeur

- [`AggregateError()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/AggregateError/AggregateError)
  - : Crée un nouvel objet `AggregateError`.

## Propriétés des instances

- {{JSxRef("Error.prototype.message", "AggregateError.prototype.message")}}
  - : Le message d'erreur. La valeur par défaut est `""`.
- {{JSxRef("Error.prototype.name", "AggregateError.prototype.name")}}
  - : Le nom de l'erreur. La valeur par défaut est `"AggregateError"`.

## Exemples

### Intercepter une erreur `AggregateError`

```js
Promise.any([Promise.reject(new Error("une erreur"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "une erreur" ]
});
```

### Créer un objet `AggregateError`

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

## Voir

- {{JSxRef("Error")}}
