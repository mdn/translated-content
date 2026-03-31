---
title: "Temporal.PlainTime : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.PlainTime")}} retourne une chaîne de caractères représentant cette heure dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainTime/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant l'heure donnée dans le [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime#format_rfc_9557).

## Description

La méthode `toJSON()` est automatiquement appelée par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.PlainTime` est converti en chaîne de caractères JSON. Cette méthode est généralement destinée à, par défaut, sérialiser de manière utile les objets `Temporal.PlainTime` lors de la sérialisation [JSON](/fr/docs/Glossary/JSON), qui peuvent ensuite être désérialisés en utilisant la fonction {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} comme réactivateur de {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const timeStr = time.toJSON(); // '12:34:56'
const t2 = Temporal.PlainTime.from(timeStr);
```

### Sérialisation et analyse JSON

Cet exemple montre comment `Temporal.PlainTime` peut être sérialisé en JSON sans effort supplémentaire, et comment l'analyser à nouveau.

```js
const time = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56 });
const jsonStr = JSON.stringify({ time }); // '{"time":"12:34:56"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.PlainTime.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainTime")}}
- La méthode statique {{JSxRef("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
