---
title: Constructeur AggregateError()
short-title: AggregateError()
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le **constructeur `AggregateError()`** permet de créer une erreur qui agrège plusieurs erreurs.

## Syntaxe

```js-nolint
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

> [!NOTE]
> La fonction `AggregateError()` peut être appelée avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Les deux créent une nouvelle instance d'`AggregateError`.

### Paramètres

- `errors`
  - : Un objet itérable contenant les erreurs, qui peuvent ne pas être des instances de {{JSxRef("Error")}}.
- `message` {{Optional_Inline}}
  - : Une description optionnelle, compréhensible par un·e humain·e, de l'erreur agrégée.
- `options` {{Optional_Inline}}
  - : Un objet qui possède les propriétés suivantes&nbsp;:
    - `cause` {{Optional_Inline}}
      - : Une propriété indiquant la cause spécifique de l'erreur.
        Lors de la capture et de la relance d'une erreur avec un message plus précis ou plus utile, cette propriété permet de transmettre l'erreur d'origine.

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

- La propriété {{JSxRef("Promise.any")}}
- [Une prothèse d'émulation pour `AggregateError` avec la bibliothèque `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- [Une prothèse d'émulation es-shims pour `AggregateError` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-aggregate-error)
