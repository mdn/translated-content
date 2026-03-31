---
title: "Temporal.ZonedDateTime : méthode add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`add()`** des instances de {{JSxRef("Temporal.ZonedDateTime")}} retourne un nouvel objet `Temporal.ZonedDateTime` représentant cette date et heure avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntaxe

```js-nolint
add(duration)
add(duration, options)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à ajouter à cette date et heure. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.ZonedDateTime` représentant la date et l'heure définies par le `ZonedDateTime` d'origine, plus la durée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est de ±10<sup>8</sup> jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Description

Pour savoir comment les [durées de calendrier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#durées_de_calendrier) sont ajoutées, voir {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

L'addition et la soustraction sont effectuées selon les règles définies dans le [RFC 5545 (iCalendar) <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc5545)&nbsp;:

- Ajouter ou soustraire la partie date d'une durée en utilisant l'arithmétique de calendrier&nbsp;: en d'autres termes, ajouter la partie date à son `PlainDateTime` en utilisant {{JSxRef("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}, puis interpréter le résultat dans le même fuseau horaire. Le résultat s'ajustera automatiquement à l'heure d'été en utilisant les règles du champ `timeZone` de cette instance. Par exemple, `2024-11-03T01:00:00-04:00[America/New_York]` plus un jour donne `2024-11-04T01:00:00-05:00[America/New_York]`, comme si le jour avait 25 heures.
  - Si la date et l'heure sont [ambiguës](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_et_écarts_lors_du_passage_de_lheure_locale_à_lutc) ou invalides en raison d'une transition de décalage du fuseau horaire, elles sont résolues en utilisant le comportement `disambiguation: "compatible"`&nbsp;: le plus tardif des deux instants possibles sera utilisé pour les transitions sautées et le plus tôt des deux instants possibles sera utilisé pour les transitions répétées. Par exemple, `2024-03-09T02:05:00-05:00[America/New_York]` plus un jour devrait donner `2024-03-10T02:05:00-05:00[America/New_York]`, mais cette heure n'existe pas, donc l'heure affichée une heure plus tard, `2024-03-10T03:05:00-04:00[America/New_York]`, est retournée.
  - Si le [décalage est ambigu](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguïté_du_décalage), il est résolu en utilisant le comportement `offset: "prefer"`&nbsp;: le décalage est utilisé s'il est valide pour le fuseau horaire et l'heure locale, et recalculé sinon. Par exemple, `2024-11-02T01:00:00-04:00[America/New_York]` plus un jour donne `2024-11-03T01:00:00-04:00[America/New_York]`, tandis que `2024-11-04T01:00:00-05:00[America/New_York]` moins un jour donne `2024-11-03T01:00:00-05:00[America/New_York]`.
  - Si les composants de la date et de l'heure résultantes sont hors limites, ils sont résolus en utilisant l'option `overflow`. Par exemple, `2024-08-31` plus un mois donne `2024-09-31` qui n'existe pas, donc il est ramené à `2024-09-30` par défaut.
  - If the resulting date-time's components are out of bounds, they are resolved using the `overflow` option. For example, `2024-08-31` plus one month is `2024-09-31` which doesn't exist, so it is clamped to `2024-09-30` by default.
- Ajouter ou soustraire la partie temps d'une durée en utilisant le temps réel&nbsp;; en d'autres termes, ajouter la partie temps à son `Instant` en utilisant {{JSxRef("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}, puis interpréter le résultat dans le même fuseau horaire. Par exemple, `2024-11-03T01:00:00-04:00[America/New_York]` plus une heure donne `2024-11-03T01:00:00-05:00[America/New_York]`.

Ces règles rendent l'arithmétique avec `Temporal.ZonedDateTime` «&nbsp;sûre pour l'heure d'été&nbsp;», ce qui signifie que les résultats correspondent au mieux aux attentes des utilisateur·ice·s réels et des personnes qui implémentent d'autres applications de calendrier conformes aux standards. Ces attentes incluent&nbsp;:

- Ajouter ou soustraire des jours doit maintenir l'heure affichée cohérente lors des transitions d'heure d'été. Par exemple, si vous avez un rendez-vous le samedi à 13h00 et que vous demandez à le reprogrammer un jour plus tard, vous vous attendez à ce que le rendez-vous reprogrammé soit toujours à 13h00, même s'il y a eu une transition d'heure d'été pendant la nuit.
- Ajouter ou soustraire la partie temps d'une durée doit ignorer les transitions d'heure d'été. Par exemple, un·e ami·e à qui vous avez demandé de vous retrouver dans 2 heures sera contrarié·e si vous arrivez 1 heure ou 3 heures plus tard. Il doit y avoir un ordre d'opérations cohérent et relativement peu surprenant.
- Si les résultats sont à ou près d'une transition d'heure d'été, les ambiguïtés doivent être gérées automatiquement (sans plantage) et de manière déterministe.

Ajouter une durée équivaut à [soustraire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Exemples

### Ajouter une durée

```js
const start = Temporal.ZonedDateTime.from(
  "2021-11-01T12:34:56-04:00[America/New_York]",
);
const end = start.add({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
});
console.log(end.toString()); // 2023-01-26T17:41:03.008-05:00[America/New_York]
```

Pour plus d'exemples, en particulier sur la façon dont différents calendriers et l'option `overflow` interagissent avec les durées de calendrier, voir {{JSxRef("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.ZonedDateTime")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
