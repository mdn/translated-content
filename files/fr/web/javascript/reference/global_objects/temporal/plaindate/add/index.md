---
title: "Temporal.PlainDate : méthode add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

La méthode **`add()`** des instances de {{JSxRef("Temporal.PlainDate")}} retourne un nouvel objet `Temporal.PlainDate` représentant cette date avancée d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntaxe

```js-nolint
add(duration)
add(duration, options)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet ou une instance de {{JSxRef("Temporal.Duration")}} représentant une durée à ajouter à cette date. Elle est convertie en objet `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors de portée. Les valeurs possibles sont&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [limité](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors de portée.

### Valeur de retour

Un nouvel objet `Temporal.PlainDate` représentant la date définie par le `PlainDate` d'origine, plus la durée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levé si le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, soit environ ±273 972,6 ans, à partir de l'époque Unix.

## Description

La `duration` est traitée de cette manière&nbsp;:

- Avancer du nombre d'années, en conservant le `monthCode` et le `day` identiques. Si le `monthCode` est invalide dans l'année résultante (impossible pour le calendrier grégorien et ISO 8601, mais possible pour les calendriers avec des mois intercalaires), nous ajustons en fonction de l'option `overflow`&nbsp;: pour `constrain`, nous choisissons un autre mois selon les conventions culturelles des utilisateur·ice·s de ce calendrier. Par exemple, comme le mois intercalaire est généralement considéré comme un doublon d'un autre mois, nous pouvons choisir le mois dont il est le doublon.
- Avancer du nombre de mois, en ajustant l'année si nécessaire, en conservant le `day` identique. Si le `day` est invalide dans le mois résultant (par exemple, le 30 février), nous ajustons en fonction de l'option `overflow`&nbsp;: pour `constrain`, nous choisissons le jour valide le plus proche (par exemple, le 28 ou 29 février).
- Tous les calendriers couramment pris en charge utilisent des semaines de longueur fixe, donc le nombre de semaines est simplement converti en nombre de jours. Si la règle est plus complexe, nous pouvons adopter une approche similaire à celle du décalage des mois.
- Pour toutes les unités [non calendaires](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (jours, heures, minutes, secondes, millisecondes, microsecondes, nanosecondes), elles sont converties en nombre de jours. La partie fractionnaire d'un jour est ignorée. Ensuite, nous avançons de ce nombre de jours, en ajustant le mois et l'année si nécessaire.

Ajouter une durée est équivalent à [soustraire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Exemples

### Ajouter une durée dans le calendrier ISO 8601

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2022-03-26

const end2 = start.add({ years: -1, months: -2, weeks: -3, days: -4 });
console.log(end2.toString()); // 2019-10-07

const distance = Temporal.PlainDate.from("2020-01-01").until("2021-01-01"); // 366 days
const end3 = start.add(distance);
console.log(end3.toString()); // 2022-01-02
```

### Ajouter une durée dans un calendrier non ISO

```js
const start = Temporal.PlainDate.from("2021-01-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 11/18/2020
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 12/18/2020
```

### Ajouter une durée avec un dépassement

Si nous avançons de quelques mois et que le jour correspondant est invalide dans ce mois, nous ajustons alors le jour en fonction de l'option `overflow`.

```js
const start = Temporal.PlainDate.from("2021-01-31");
const end = start.add({ months: 1 });
console.log(end.toString()); // 2021-02-28

// Toute addition de jours ultérieure est basée sur le jour du mois ajusté :
const end2 = start.add({ months: 1, days: 31 });
console.log(end2.toString()); // 2021-03-31

// Comparez avec la même addition dans un ordre différent qui ne provoque pas de dépassement :
const end3 = start.add({ days: 31 }).add({ months: 1 });
console.log(end3.toString()); // 2021-04-03
```

Le dépassement peut également se produire pour le mois, pour les calendriers où différentes années ont un nombre différent de mois (généralement en raison des mois intercalaires).

```js
const start = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 2bis/11/2023 ; "bis" signifie mois intercalaire
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2024

// Compare:
const start = Temporal.PlainDate.from("2023-04-30[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2023
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2024; même jour que ci-dessus !
```

Notez que ce qui suit n'est pas un dépassement car le mois peut simplement augmenter&nbsp;:

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ days: 100 });
console.log(end.toString()); // 2021-04-11
```

Vous pouvez également générer une erreur si le composant de la date est hors de portée&nbsp;:

```js
const start = Temporal.PlainDate.from("2021-01-31");
const end = start.add({ months: 1 }, { overflow: "reject" }); // RangeError: date value "day" not in 1..28: 31

const start = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
const end = start.add({ years: 1 }, { overflow: "reject" }); // RangeError: invalid "monthCode" calendar field: M02L
```

### Ajouter des durées

Les parties fractionnaires d'une journée ne sont pas prises en compte.

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ hours: 25 }); // Même chose que d'ajouter 1 jour
console.log(end.toString()); // 2021-01-02
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainDate")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
