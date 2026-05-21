---
title: "Temporal.ZonedDateTime : propriété timeZoneId"
short-title: timeZoneId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/timeZoneId
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La propriété d'accesseur **`timeZoneId`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne une chaîne de caractères représentant [l'identifiant de fuseau horaire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#fuseaux_horaires_et_décalages) utilisé pour interpréter l'instant interne. La chaîne de caractères est soit un identifiant nommé dans la casse préférée (comme `"America/New_York"`), soit un décalage sous la forme `"±hh:mm"`. Si le fuseau horaire a des alias, le `timeZoneId` est l'identifiant utilisé pour créer le `ZonedDateTime`, sans canonicalisation vers l'identifiant principal.

Le mutateur d'accesseur de `timeZoneId` est `undefined`. Vous ne pouvez pas modifier cette propriété directement. Utilisez la méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}} pour créer un nouvel objet `Temporal.ZonedDateTime` avec la nouvelle valeur souhaitée.

> [!NOTE]
> Cette chaîne de caractères n'est pas destinée à être affichée aux utilisateur·ice·s. Utilisez {{JSxRef("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}} avec les options appropriées pour obtenir une chaîne de caractères localisée.

## Exemples

### Utiliser la propriété `timeZoneId`

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.timeZoneId); // "America/Los_Angeles"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00-07:00[-07:00]");
console.log(dt2.timeZoneId); // "-07:00"

const dt3 = dt2.withTimeZone("Asia/Shanghai");
console.log(dt3.timeZoneId); // "Asia/Shanghai"
```

Le `timeZoneId` n'est jamais canoniquement converti vers l'identifiant principal&nbsp:; il est identique à celui utilisé pour créer le `ZonedDateTime`.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[Asia/Ho_Chi_Minh]",
);
const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[Asia/Saigon]",
);
console.log(dt.timeZoneId); // "Asia/Ho_Chi_Minh"
console.log(dt2.timeZoneId); // "Asia/Saigon"
```

Cependant, les différences de présentation seront canoniquement converties.

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[asia/ho_chi_minh]",
);
console.log(dt.timeZoneId); // "Asia/Ho_Chi_Minh"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00+07:00[+07]");
console.log(dt2.timeZoneId); // "+07:00"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
