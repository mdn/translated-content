---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Un objet **`AggregateError`** représente une erreur lorsque plusieurs erreurs doivent être agrégées en une seule. Ce type d'exception est levé lorsque plusieurs erreurs sont rapportées par une opération, par exemple avec {{JSxRef("Promise.any()")}} lorsque l'ensemble des promesses qui lui sont passées échouent.

`AggregateError` est une sous-classe de {{JSxRef("Error")}}.

## Constructeur

- {{JSxRef("AggregateError/AggregateError", "AggregateError()")}}
  - : Crée un nouvel objet `AggregateError`.

## Propriétés d'instances

_Hérite également des propriétés d'instance de son parent {{JSxRef("Error")}}_.

Ces propriétés sont définies sur `AggregateError.prototype` et sont partagées par toutes les instances d'`AggregateError`.

- {{JSxRef("Object/constructor", "AggregateError.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'instance de l'objet. Pour les instances d'`AggregateError`, la valeur initiale est le constructeur {{JSxRef("AggregateError/AggregateError", "AggregateError")}}.
- {{JSxRef("Error/name", "AggregateError.prototype.name")}}
  - : Représente le nom du type d'erreur. Pour `AggregateError.prototype.name`, la valeur initiale est `"AggregateError"`.

Ces propriétés sont des propriétés propres à chaque instance d'`AggregateError`.

- {{JSxRef("AggregateError/errors", "errors")}}
  - : Un tableau représentant les erreurs qui ont été agrégées.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("Error")}}_.

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

- [Prothèse d'émulation de `AggregateError` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- [Prothèse d'émulation de `AggregateError` fourni par es-shims <sup>(angl.)</sup>](https://www.npmjs.com/package/es-aggregate-error)
- L'objet global {{JSxRef("Error")}}
- La propriété {{JSxRef("Promise.any")}}
