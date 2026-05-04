---
title: "Temporal.PlainDateTime : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.PlainDateTime")}} retourne une chaîne de caractères représentant cette date et heure dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainDateTime/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date et l'heure données dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#format_rfc_9557), avec l'annotation du calendrier incluse si ce n'est pas `"iso8601"`.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.PlainDateTime` est converti en chaîne de caractères JSON. Cette méthode est généralement destinée à, par défaut, sérialiser de manière utile les objets `Temporal.PlainDateTime` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dtStr = dt.toJSON(); // '2021-08-01T00:00:00'
const dt2 = Temporal.PlainDateTime.from(dtStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.PlainDateTime` peut être sérialisé en JSON sans effort supplémentaire, et comment le réanalyser.

```js
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const jsonStr = JSON.stringify({ nextBilling: dt }); // '{"nextBilling":"2021-08-01T00:00:00"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "nextBilling") {
    return Temporal.PlainDateTime.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDateTime")}}
- La méthode statique {{JSxRef("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
