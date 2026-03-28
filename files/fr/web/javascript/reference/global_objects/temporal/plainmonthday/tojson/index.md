---
title: "Temporal.PlainMonthDay : méthode toJSON()"
short-title: toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toJSON
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`toJSON()`** des instances de {{JSxRef("Temporal.PlainMonthDay")}} retourne une chaîne de caractères représentant ce mois-jour dans le même [format RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#format_rfc_9557) que l'appel de {{JSxRef("Temporal/PlainMonthDay/toString", "toString()")}}. Elle est destinée à être appelée implicitement par {{JSxRef("JSON.stringify()")}}.

## Syntaxe

```js-nolint
toJSON()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant le mois et le jour donnés au format [RFC 9557](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay#format_rfc_9557), avec l'année et l'annotation du calendrier incluses si ce n'est pas `"iso8601"`.

## Description

La méthode `toJSON()` est appelée automatiquement par {{JSxRef("JSON.stringify()")}} lorsqu'un objet `Temporal.PlainMonthDay` est sérialisé. Elle permet de sérialiser utilement les objets `Temporal.PlainMonthDay` dans du JSON, qui peut ensuite être désérialisé en utilisant la fonction {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} comme revitaliseur dans {{JSxRef("JSON.parse()")}}.

## Exemples

### Utiliser la méthode `toJSON()`

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const mdStr = md.toJSON(); // '08-01'
const md2 = Temporal.PlainMonthDay.from(mdStr);
```

### Sérialisation et analyse de JSON

Cet exemple montre comment `Temporal.PlainMonthDay` peut être sérialisé dans du JSON sans effort supplémentaire, et comment l'analyser ensuite.

```js
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const jsonStr = JSON.stringify({ birthday: md }); // '{"birthday":"08-01"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "birthday") {
    return Temporal.PlainMonthDay.from(value);
  }
  return value;
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainMonthDay")}}
- La méthode statique {{JSxRef("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
- La méthode {{JSxRef("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
