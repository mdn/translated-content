---
title: "Temporal.PlainYearMonth : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne une chaîne de caractères représentant ce mois et cette année dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainYearMonth/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date donnée dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#format_rfc_9557), avec l'annotation du calendrier incluse si ce n'est pas `"iso8601"`.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.PlainYearMonth` est converti en chaîne de caractères JSON. Cette méthode est généralement destinée à sérialiser de manière utile les objets `Temporal.PlainYearMonth` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.PlainYearMonth` peut être sérialisé en JSON sans effort supplémentaire, et comment le réanalyser.

```js
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = JSON.stringify({ event: ym }); // '{"event":"2021-08"}'
const obj = JSON.parse(ymStr, (key, value) => {
  if (key === "event") {
    return Temporal.PlainYearMonth.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- La méthode statique {{JSxRef("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
