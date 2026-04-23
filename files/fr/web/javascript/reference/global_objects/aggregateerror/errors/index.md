---
title: "AggregateError : propriété errors"
short-title: errors
slug: Web/JavaScript/Reference/Global_Objects/AggregateError/errors
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de données **`errors`** d'une instance de {{JSxRef("AggregateError")}} contient un tableau représentant les erreurs qui ont été agrégées.

## Valeur

Une liste ({{JSxRef("Array")}}) contenant les valeurs dans le même ordre que l'itérable passé comme premier argument au constructeur {{JSxRef("AggregateError/AggregateError", "AggregateError()")}}.

{{js_property_attributes(1, 0, 1)}}

## Exemples

### Utilisation de errors

```js
try {
  throw new AggregateError(
    // Un itérable d'erreurs
    new Set([new Error("une erreur"), new Error("une autre erreur")]),
    "Plusieurs erreurs levées",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: une erreur,
  //   Error: une autre erreur
  // ]
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("AggregateError")}}
- [Guide sur le contrôle du flux et la gestion des erreurs](/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [`Error`&nbsp;: `cause`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/cause)
