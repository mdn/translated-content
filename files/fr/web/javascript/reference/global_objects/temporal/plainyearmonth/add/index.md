---
title: "Temporal.PlainYearMonth : méthode add()"
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

La méthode **`add()`** des instances de {{JSxRef("Temporal.PlainYearMonth")}} retourne un nouvel objet `Temporal.PlainYearMonth` représentant cette année et ce mois avancés d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntaxe

```js-nolint
add(duration)
add(duration, options)
```

### Paramètres

- `duration`
  - : Une chaîne de caractères, un objet, ou une instance de {{JSxRef("Temporal.Duration")}} représentant la durée à ajouter à ce `PlainYearMonth`. Elle est convertie en `Temporal.Duration` en utilisant le même algorithme que {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{Optional_Inline}}
  - : Un objet contenant la propriété suivante&nbsp;:
    - `overflow` {{Optional_Inline}}
      - : Une chaîne de caractères définissant le comportement lorsque un composant de date est hors plage. Valeurs possibles&nbsp;:
        - `"constrain"` (par défaut)
          - : Le composant de date est [contraint](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#fixer_les_dates_invalides) à la plage valide.
        - `"reject"`
          - : Un objet {{JSxRef("RangeError")}} est levé si le composant de date est hors plage.

### Valeur de retour

Un nouvel objet `Temporal.PlainYearMonth` représentant cette année et ce mois définis par le `PlainYearMonth` d'origine, plus la durée.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le résultat n'est pas dans la [plage représentable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#dates_représentables), qui est ±(10<sup>8</sup> + 1) jours, ou environ ±273 972,6 ans, à partir de l'époque Unix.

## Description

La valeur de `duration` est traitée de la manière suivante&nbsp;:

- Avancer du nombre d'années indiqué, en conservant le même `monthCode`. Si le `monthCode` est invalide dans l'année résultante (impossible pour le calendrier grégorien et ISO 8601, mais possible pour les calendriers avec des mois intercalaires), nous ajustons en fonction de l'option `overflow`&nbsp;: pour `constrain`, nous choisissons un autre mois selon les conventions culturelles des utilisateurs de ce calendrier. Par exemple, comme le mois intercalaire est généralement considéré comme un doublon d'un autre mois, nous pouvons choisir le mois dont il est un doublon.
- Avancer du nombre de mois indiqué, en ajustant l'année si nécessaire.
- Pour toutes les unités inférieures à `months` (semaines, jours, heures, minutes, secondes, millisecondes, microsecondes, nanosecondes), elles sont converties en nombre de jours. Tous les calendriers couramment pris en charge utilisent des semaines de longueur fixe, donc le nombre de semaines est simplement converti en nombre de jours. Si la règle est plus complexe, nous pouvons adopter une approche similaire au décalage des mois. Ensuite, nous avançons de ce nombre de jours, en commençant par le premier jour du mois, en ajustant le mois et l'année si nécessaire. Les durées inférieures à la longueur du mois en cours n'ont donc aucun effet.

Le jour de référence interne est ensuite choisi comme étant le premier jour valide du mois, indépendamment du jour de référence d'origine ou du nombre de jours dans la durée. Pour le calendrier grégorien, un dépassement ne peut pas se produire car chaque année a toujours 12 mois, et tout incrément inférieur à un mois est simplement ignoré.

Ajouter une durée est équivalent à [soustraire](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract) sa [négation](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Exemples

### Ajouter une durée dans le calendrier ISO 8601

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2022-03

const end2 = start.add({ years: -1, months: -2, weeks: -3, days: -4 });
console.log(end2.toString()); // 2019-11

const distance = Temporal.PlainYearMonth.from("2020-01").until("2021-01"); // 366 days
const end3 = start.add(distance);
console.log(end3.toString()); // 2022-01
```

### Ajouter une durée dans un calendrier non ISO

```js
const start = Temporal.PlainYearMonth.from("2021-02-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 12/2020
console.log(start.toString()); // 2021-01-13[u-ca=chinese]
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 1/2021
console.log(end.toString()); // 2021-02-12[u-ca=chinese]

// Ajouter un jour supplémentaire n'a aucun effet
const end2 = start.add({ months: 1, days: 1 });
console.log(end2.toLocaleString("en-US", { calendar: "chinese" })); // 1/2021
// Le jour de référence ne change pas, car c'est toujours le premier jour du mois chinois
console.log(end2.toString()); // 2021-02-12[u-ca=chinese]

// Début dans un mois intercalaire
const start2 = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(start2.toLocaleString("en-US", { calendar: "hebrew" })); // Adar I 5730
// Fin dans un autre mois intercalaire
const end3 = start2.add({ years: 3 });
console.log(end3.toLocaleString("en-US", { calendar: "hebrew" })); // Adar I 5733
```

### Ajouter une durée avec dépassement

Si nous avançons de quelques années et que le mois correspondant est invalide dans cette année, nous ajustons le mois en fonction de l'option `overflow`.

```js
// Début dans un mois intercalaire
const start = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
// Les années bissextiles hébraïques se produisent tous les 2 ou 3 ans, et 5731 n'est pas une année bissextile
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "hebrew" })); // Adar 5731
console.log(end.monthCode); // M06
console.log(end.toString()); // 1971-02-26[u-ca=hebrew]

// Toute addition de mois supplémentaire est basée sur l'année-mois ajustée
const end2 = start.add({ years: 1, months: 2 });
console.log(end2.monthCode); // M08
console.log(end2.toString()); // 1971-04-26[u-ca=hebrew]

// Comparer avec la même addition dans un ordre différent qui ne provoque pas de dépassement :
const end3 = start.add({ months: 2 }).add({ years: 1 });
console.log(end3.monthCode); // M07
console.log(end3.toString()); // 1971-03-27[u-ca=hebrew]
```

Notez que ce qui suit n'est pas un dépassement, car l'année peut simplement augmenter&nbsp;:

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ months: 100 });
console.log(end.toString()); // 2029-05
```

Vous pouvez également générer une erreur si le composant de date est hors de portée&nbsp;:

```js
const start = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
const end = start.add({ years: 1 }, { overflow: "reject" }); // RangeError: invalid "monthCode" calendar field: M05L
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal.PlainYearMonth")}}
- L'objet {{JSxRef("Temporal.Duration")}}
- La méthode {{JSxRef("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
