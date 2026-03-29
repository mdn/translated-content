---
title: "Temporal.Duration : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.Duration")}} retourne une chaîne de caractères représentant cette durée dans le même [format ISO 8601](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#format_de_durée_iso_8601) que l'appel de {{JSxRef("Temporal/Duration/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant la durée donnée dans le [format ISO 8601](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#format_de_durée_iso_8601), avec autant de précision subsecondes que nécessaire pour représenter la durée avec exactitude.

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.Duration` est converti en chaîne de caractères. Cette méthode est généralement destinée à, par défaut, sérialiser de manière utile les objets `Temporal.Duration` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const durationStr = duration.toJSON(); // 'PT1H30M15S'
const d2 = Temporal.Duration.from(durationStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.Duration` peut être sérialisé en JSON sans effort supplémentaire, et comment l'analyser à nouveau.

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const jsonStr = JSON.stringify({ data: duration }); // '{"data":"PT1H30M15S"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "data") {
    return Temporal.Duration.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode statique {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}
- La méthode {{JSxRef("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
