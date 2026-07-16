---
title: "Temporal.PlainDate : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne une chaîne de caractères représentant cette date dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainDate/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date donnée dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#format_rfc_9557), avec l'annotation du calendrier incluse si ce n'est pas `"iso8601"`.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.PlainDate` est converti en chaîne de caractères. Cette méthode est généralement destinée à, par défaut, sérialiser de manière utile les objets `Temporal.PlainDate` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const date = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const dateStr = date.toJSON(); // '2021-08-01'
const d2 = Temporal.PlainDate.from(dateStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.PlainDate` peut être sérialisé en JSON sans effort supplémentaire, et comment l'analyser à nouveau.

```js
const date = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const jsonStr = JSON.stringify({ date }); // '{"date":"2021-08-01"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "date") {
    return Temporal.PlainDate.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- La méthode statique {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
