---
title: "Temporal.ZonedDateTime : méthode equals()"
short-title: equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/equals
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`equals()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne `true` si cette date et heure est équivalente en valeur à une autre date et heure (sous une forme convertible par {{JSxRef("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}), et `false` sinon. Elles sont comparées à la fois par leurs valeurs d'instant, leurs fuseaux horaires et leurs calendriers, donc deux dates et heures provenant de calendriers ou de fuseaux horaires différents peuvent être considérées comme égales par {{JSxRef("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} mais pas par `equals()`.

## Syntaxe

```js-nolint
equals(other)
```

### Paramètres

- `other`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.ZonedDateTime")}} représentant l'autre date et heure à comparer. Il est converti en un objet `Temporal.ZonedDateTime` en utilisant le même algorithme que {{JSxRef("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.

### Valeur de retour

Est vrai (`true`) si cette date et heure est égale à `other` à la fois dans leur valeur d'instant, leur fuseau horaire et leur calendrier, sinon `false`.

Notez que les fuseaux horaires sont canoniques avant la comparaison, donc si leurs [identifiants de fuseau horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) sont tous deux nommés et identifient le même fuseau horaire, ils seraient considérés comme identiques même si les noms exacts peuvent être des alias les uns des autres. Les identifiants de décalage sont comparés par les valeurs de décalage qu'ils représentent. Les identifiants de décalage ne sont jamais égaux aux identifiants nommés même lorsque le fuseau horaire de l'identifiant nommé utilise toujours ce décalage.

## Exemples

### Utiliser la méthode `equals()`

```js
// Asia/Kolkata et Asia/Calcutta sont des alias l'un de l'autre
const dt1 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Kolkata]",
);
const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Calcutta]",
);
console.log(dt1.equals(dt2)); // true

const dt3 = Temporal.ZonedDateTime.from("2021-07-01T12:34:56+05:30[+05:30]");
console.log(dt1.equals(dt3)); // false

const dt4 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56+05:30[Asia/Kolkata][u-ca=buddhist]",
);
console.log(dt1.equals(dt4)); // false
```

### Tester si deux identifiants de fuseau horaire sont équivalents

```js
function sameTimeZone(timeZone1, timeZone2) {
  const dt1 = Temporal.ZonedDateTime.from({
    year: 2021,
    month: 7,
    day: 1,
    timeZone: timeZone1,
  });
  const dt2 = Temporal.ZonedDateTime.from({
    year: 2021,
    month: 7,
    day: 1,
    timeZone: timeZone2,
  });
  return dt1.equals(dt2);
}

console.log(sameTimeZone("Asia/Kolkata", "Asia/Calcutta")); // true
console.log(sameTimeZone("Asia/Shanghai", "Asia/Taipei")); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode statique {{JSxRef("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
