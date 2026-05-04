---
title: "Temporal.ZonedDateTime : méthode getTimeZoneTransition()"
short-title: getTimeZoneTransition()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/getTimeZoneTransition
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`getTimeZoneTransition()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un objet {{JSxRef("Temporal.ZonedDateTime")}} représentant l'instant le plus proche après ou avant cet instant auquel le décalage UTC du fuseau horaire change (l'instant retourné est le premier instant après le changement), ou `null` s'il n'y a pas de telle transition. Cela est utile pour connaître les règles de décalage d'un fuseau horaire, comme son schéma d'heure d'été.

Notez que les instants retournés concernant le futur peuvent être peu fiables, par exemple en raison de modifications des définitions des fuseaux horaires.

## Syntaxe

```js-nolint
getTimeZoneTransition(direction)
getTimeZoneTransition(options)
```

### Paramètres

- `direction`
  - : Une chaîne de caractères représentant l'option [`direction`](#direction_2). Il s'agit d'une surcharge pratique, donc `getTimeZoneTransition(direction)` est équivalent à `getTimeZoneTransition({ direction })`, où `direction` est une chaîne de caractères.
- `options`
  - : Un objet contenant la propriété suivante&nbsp;:
    - `direction`
      - : Indique s'il faut rechercher avant ou après l'instant actuel. Doit être l'une des valeurs `"next"` ou `"previous"`.

### Valeur de retour

Un objet {{JSxRef("Temporal.ZonedDateTime")}} avec l'instant `t`, tel que&nbsp;:

- Le décalage du fuseau horaire à `t` est différent du décalage une nanoseconde avant `t`.
- `t < this.epochNanoseconds` si `direction` est `"previous"`, ou `t > this.epochNanoseconds` si `direction` est `"next"`.
- Pour tous les instants entre `this.epochNanoseconds` et `t`, exclus, le décalage est constant.

S'il n'y a pas de telle transition, `null` est retourné.

## Exemples

### Trouver la prochaine transition de fuseau horaire

```js
const dt = Temporal.ZonedDateTime.from("2024-01-01T00-05:00[America/New_York]");
const transition = dt.getTimeZoneTransition("next");
console.log(transition.toString()); // "2024-03-10T03:00:00-04:00[America/New_York]"

const transition2 = transition.getTimeZoneTransition("next");
console.log(transition2.toString()); // "2024-11-03T01:00:00-05:00[America/New_York]"

const transition3 = dt.getTimeZoneTransition("previous");
console.log(transition3.toString()); // "2023-11-05T01:00:00-05:00[America/New_York]"

const dt2 = Temporal.ZonedDateTime.from("2024-01-01T00Z[UTC]");
console.log(dt2.getTimeZoneTransition("next")); // null
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- La propriété {{JSxRef("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
