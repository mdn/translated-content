---
title: "Temporal.ZonedDateTime : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne une chaîne de caractères représentant cette date et cette heure dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557) que l'appel de {{JSxRef("Temporal/ZonedDateTime/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la date et l'heure données dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#format_rfc_9557), avec l'annotation du calendrier incluse si elle n'est pas `"iso8601"`, et l'annotation du décalage et du fuseau horaire toujours incluse.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.ZonedDateTime` est converti en chaîne de caractères JSON. Cette méthode est généralement destinée à sérialiser de manière utile les objets `Temporal.ZonedDateTime` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const zdtStr = zdt.toJSON(); // '2021-08-01T00:00:00-04:00[America/New_York]'
const zdt2 = Temporal.ZonedDateTime.from(zdtStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.ZonedDateTime` peut être sérialisé en JSON sans effort supplémentaire, et comment l'analyser à nouveau.

```js
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const jsonStr = JSON.stringify({ meeting: zdt }); // '{"meeting":"2021-08-01T00:00:00-04:00[America/New_York]"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "meeting") {
    return Temporal.ZonedDateTime.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
