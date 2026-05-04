---
title: "Temporal.Instant : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.Instant")}} retourne une chaîne de caractères représentant cet instant dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#format_rfc_9557) que l'appel de {{JSxRef("Temporal/Instant/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant l'instant donné dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#format_rfc_9557), avec autant de précision subsecondes que nécessaire pour représenter la durée avec exactitude, et avec le désignateur de fuseau horaire UTC `Z`.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.Instant` est converti en chaîne de caractères JSON. Cette méthode est généralement destinée à, par défaut, sérialiser de manière utile les objets `Temporal.Instant` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.Instant` peut être sérialisé en JSON sans effort supplémentaire, et comment l'analyser à nouveau.

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const jsonStr = JSON.stringify({ time: instant }); // '{"time":"2021-08-01T12:34:56Z"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.Instant.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Instant")}}
- La méthode statique {{JSxRef("Temporal/Instant/from", "Temporal.Instant.from()")}}
- La méthode {{JSxRef("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
