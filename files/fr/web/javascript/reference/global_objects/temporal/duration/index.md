---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

L'objet **`Temporal.Duration`** représente une différence entre deux points dans le temps, qui peut être utilisée dans les calculs de date/heure. Il est fondamentalement représenté comme une combinaison de valeurs d'années, de mois, de semaines, de jours, d'heures, de minutes, de secondes, de millisecondes, de microsecondes et de nanosecondes.

## Description

### Format de durée ISO 8601

Les objets `Duration` peuvent être sérialisés et analysés en utilisant le [format de durée ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) (avec quelques extensions définies par ECMAScript). La chaîne de caractères a la forme suivante (les espaces ne sont présents que pour la lisibilité et ne doivent pas être présents dans la chaîne de caractères réelle)&nbsp;:

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{Optional_Inline}}
  - : Un caractère de signe optionnel (`+` ou `-`), qui représente une durée positive ou négative. Par défaut, la durée est positive.
- `P`
  - : Un caractère littéral `P` ou `p` qui signifie «&nbsp;période&nbsp;».
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : Un nombre suivi d'un caractère littéral, qui représente le nombre d'années (`Y`), de mois (`M`), de semaines (`W`), de jours (`D`), d'heures (`H`), de minutes (`M`) ou de secondes (`S`), respectivement. Tous les composants existants sauf le dernier doivent être des entiers. Le dernier composant, s'il s'agit d'un composant temporel (heures, minutes ou secondes), peut avoir une partie fractionnaire de 1 à 9 chiffres, précédée d'un point ou d'une virgule, comme `PT0.0021S` ou `PT1.1H`. Les composants nuls peuvent être omis, mais au moins un composant doit être présent (même s'il a la valeur zéro, auquel cas la durée est nulle).
- `T`
  - : Un caractère littéral `T` ou `t` qui sépare la partie date de la partie temps, qui doit être présent si et seulement s'il y a au moins un composant après lui.

Voici quelques exemples&nbsp;:

| ISO 8601           | Signification                                                              |
| ------------------ | -------------------------------------------------------------------------- |
| `P1Y1M1DT1H1M1.1S` | 1 année, 1 mois, 1 jour, 1 heure, 1 minute, 1 seconde et 100 millisecondes |
| `P40D`             | 40 jours                                                                   |
| `P1Y1D`            | 1 année et 1 jour                                                          |
| `P3DT4H59M`        | 3 jours, 4 heures et 59 minutes                                            |
| `PT2H30M`          | 2 heures et 30 minutes                                                     |
| `P1M`              | 1 mois                                                                     |
| `PT1M`             | 1 minute                                                                   |
| `PT0.0021S`        | 2,1 millisecondes (2 millisecondes et 100 microsecondes)                   |
| `PT0S`             | zéro (représentation canonique)                                            |
| `P0D`              | zéro                                                                       |

> [!NOTE]
> Selon la norme ISO 8601-1, les semaines ne sont pas autorisées à apparaître avec d'autres unités, et les durées ne peuvent être que positives. En tant qu'extensions à la norme, ISO 8601-2, utilisée par Temporal, permet un caractère de signe au début de la chaîne de caractères et permet de combiner les semaines avec d'autres unités. Par conséquent, si votre durée est sérialisée dans une chaîne de caractères comme `P3W1D`, `+P1M` ou `-P1M`, notez que d'autres programmes peuvent ne pas l'accepter.

Lors de la sérialisation, la sortie respecte autant que possible les composants stockés, en préservant les composants [déséquilibrés](#équilibrage_des_durées). Cependant, les composants de sous-seconde sont sérialisés en une seule seconde fractionnaire, donc leurs valeurs précises, si elles sont déséquilibrées, peuvent être perdues. Le signe plus est omis pour les durées positives. La durée zéro est toujours sérialisée comme `PT0S`.

### Durées calendaires

Une _durée calendaire_ est une durée qui contient l'une des unités [calendaires](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendriers)&nbsp;: semaines, mois et années. Une durée non calendaire est portable et peut participer à des calculs de date/heure sans aucune information de calendrier, car elle représente de manière non ambiguë une quantité de temps fixe. Cependant, une durée calendaire n'est pas portable car le nombre de jours dans un mois ou une année dépend du système de calendrier et du point de référence temporel. Par conséquent, tenter d'effectuer une opération arithmétique sur une durée calendaire génère une erreur, car les durées ne suivent pas elles-mêmes un calendrier. Par exemple, si nous sommes en mai du calendrier grégorien, alors «&nbsp;1 mois&nbsp;» correspond à «&nbsp;31 jours&nbsp;», mais si nous sommes en avril, alors «&nbsp;1 mois&nbsp;» devient «&nbsp;30 jours&nbsp;». Pour ajouter ou soustraire des durées calendaires, vous devez les ajouter aux dates à la place&nbsp;:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // calendrier ISO 8601
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

D'autres opérations, `round()`, `total()`, et `compare()`, prennent une option `relativeTo` pour fournir les informations nécessaires sur le calendrier et le point de référence temporel. Cette option peut être un {{JSxRef("Temporal.PlainDate")}}, {{JSxRef("Temporal.PlainDateTime")}}, {{JSxRef("Temporal.ZonedDateTime")}}, ou sinon un objet ou une chaîne de caractères convertible en utilisant {{JSxRef("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (si l'option `timeZone` est fournie ou si la chaîne de caractères contient une annotation de fuseau horaire) ou {{JSxRef("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

Notez que la conversion de `days` en `hours` est également techniquement ambiguë, car la durée d'un jour peut varier en raison des changements de décalage, tels que l'heure d'été. Vous pouvez fournir un `relativeTo` zoné pour tenir compte de ces changements&nbsp;; sinon, des jours de 24 heures sont supposés.

### Équilibrage des durées

Il existe de nombreuses façons de représenter la même durée&nbsp;: par exemple, «&nbsp;1 minute et 30 secondes&nbsp;» et «&nbsp;90 secondes&nbsp;» sont équivalentes. Cependant, selon le contexte, une représentation peut être plus appropriée qu'une autre. Par conséquent, en général, l'objet `Duration` préserve autant que possible les valeurs d'entrée, afin que lorsqu'elle est formatée, elle s'affiche comme prévu.

Chaque composant d'une durée a sa plage optimale&nbsp;; les heures doivent être de 0 à 23, les minutes de 0 à 59, et ainsi de suite. Lorsque un composant dépasse sa plage optimale, l'excédent peut être «&nbsp;reporté&nbsp;» dans le composant suivant plus grand. Pour effectuer ce report, nous devons répondre à la question «&nbsp;combien de X y a-t-il dans un Y&nbsp;?&nbsp;», ce qui est une question compliquée pour les [unités calendaires](#durées_calendaires), donc dans ce cas, un calendrier est nécessaire. Notez également que par défaut, les `jours` sont directement reportés dans les `mois`&nbsp;; l'unité `semaines` n'est reportée que si elle est explicitement demandée. Si nous reportons autant que possible, le résultat final où tous les composants sont dans leur plage optimale est appelé une durée «&nbsp;équilibrée&nbsp;». Les durées déséquilibrées apparaissent généralement sous une forme «&nbsp;déséquilibré vers le haut&nbsp;», où la plus grande unité est déséquilibrée (par exemple, «&nbsp;27 heures et 30 minutes&nbsp;»)&nbsp;; d'autres formes, comme «&nbsp;23 heures et 270 minutes&nbsp;», sont rarement vues.

La méthode {{JSxRef("Temporal/Duration/round", "round()")}} équilibre toujours la durée dans la forme «&nbsp;déséquilibré vers le haut&nbsp;», jusqu'à l'option `largestUnit`. Avec une option `largestUnit` manuelle suffisamment grande, vous pouvez équilibrer complètement la durée. De même, les méthodes {{JSxRef("Temporal/Duration/add", "add()")}} et {{JSxRef("Temporal/Duration/subtract", "subtract()")}} équilibrent la durée résultante par rapport à la plus grande unité des durées d'entrée.

Notez que, comme le format de durée ISO 8601 représente les composantes inférieures à la seconde sous la forme d'un seul nombre fractionnaire, il n'est pas possible de conserver les composantes inférieures à la seconde non équilibrées lors de la sérialisation avec le format par défaut. Par exemple, «&nbsp;1000 millisecondes&nbsp;» est sérialisé sous la forme `"PT1S"`, puis désérialisé en «&nbsp;1 seconde&nbsp;». Si vous devez conserver les magnitudes des composantes inférieures à la seconde, vous devez les sérialiser manuellement en tant qu'objet JSON à la place (car par défaut, la méthode {{JSxRef("Temporal/Duration/toJSON", "toJSON()")}} sérialise la durée au format ISO 8601).

### Signe de la durée

Comme une durée est une différence entre deux points dans le temps, elle peut être positive, négative ou nulle. Par exemple, si vous affichez les heures des événements en temps relatif, les durées négatives peuvent représenter des événements passés, et les durées positives des événements futurs. Dans notre représentation utilisant une combinaison de composants temporels, le signe est stocké dans chaque composant&nbsp;: une durée négative a toujours tous les composants négatifs (ou nuls), et une durée positive a toujours tous les composants positifs (ou nuls). Construire une durée avec des composants de signes mixtes est invalide et sera rejeté par le constructeur ou la méthode {{JSxRef("Temporal/Duration/with", "with()")}}. Les méthodes `add()` et `subtract()` équilibreront la durée résultante pour éviter les signes mixtes.

## Constructeur

- {{JSxRef("Temporal/Duration/Duration", "Temporal.Duration()")}}
  - : Crée un nouvel objet `Temporal.Duration` en fournissant directement les données sous-jacentes.

## Méthodes statiques

- {{JSxRef("Temporal/Duration/compare", "Temporal.Duration.compare()")}}
  - : Retourne un nombre (-1, 0 ou 1) indiquant si la première durée est plus courte, égale ou plus longue que la deuxième durée.
- {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}
  - : Crée un nouvel objet `Temporal.Duration` à partir d'un autre objet `Temporal.Duration`, d'un objet avec des propriétés de durée ou d'une chaîne de caractères ISO 8601.

## Propriétés d'instance

Ces propriétés sont définies sur `Temporal.Duration.prototype` et partagées par toutes les instances de `Temporal.Duration`.

- {{JSxRef("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
  - : Retourne un booléen qui est `true` si cette durée représente une durée nulle, et `false` sinon. Équivaut à `duration.sign === 0`.
- {{JSxRef("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Temporal.Duration`, la valeur initiale est le constructeur {{JSxRef("Temporal/Duration/Duration", "Temporal.Duration()")}}.
- {{JSxRef("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
  - : Retourne un entier représentant le nombre de jours dans la durée.
- {{JSxRef("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
  - : Retourne un entier représentant le nombre d'heures dans la durée.
- {{JSxRef("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
  - : Retourne un entier représentant le nombre de microsecondes dans la durée.
- {{JSxRef("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
  - : Retourne un entier représentant le nombre de millisecondes dans la durée.
- {{JSxRef("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
  - : Retourne un entier représentant le nombre de minutes dans la durée.
- {{JSxRef("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
  - : Retourne un entier représentant le nombre de mois dans la durée.
- {{JSxRef("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
  - : Retourne un entier représentant le nombre de nanosecondes dans la durée.
- {{JSxRef("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
  - : Retourne un entier représentant le nombre de secondes dans la durée.
- {{JSxRef("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
  - : Retourne `1` si cette durée est positive, `-1` si elle est négative, et `0` si elle est nulle.
- {{JSxRef("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
  - : Retourne un entier représentant le nombre de semaines dans la durée.
- {{JSxRef("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
  - : Retourne un entier représentant le nombre d'années dans la durée.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Temporal.Duration"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

- {{JSxRef("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
  - : Retourne un nouvel objet `Temporal.Duration` avec la valeur absolue de cette durée (tous les champs conservent la même magnitude, mais le signe devient positif).
- {{JSxRef("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
  - : Retourne un nouvel objet `Temporal.Duration` avec la somme de cette durée et d'une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}). Le résultat est [équilibré](#équilibrage_des_durées).
- {{JSxRef("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
  - : Retourne un nouvel objet `Temporal.Duration` avec la valeur négative de cette durée (tous les champs conservent la même magnitude, mais le signe est inversé).
- {{JSxRef("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
  - : Retourne un nouvel objet `Temporal.Duration` avec la durée arrondie à l'unité la plus petite donnée et/ou [équilibrée](#équilibrage_des_durées) à l'unité la plus grande donnée.
- {{JSxRef("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
  - : Retourne un nouvel objet `Temporal.Duration` avec la différence entre cette durée et une durée donnée (sous une forme convertible par {{JSxRef("Temporal/Duration/from", "Temporal.Duration.from()")}}). Équivaut à [ajouter](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) la valeur [négative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) de l'autre durée.
- {{JSxRef("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
  - : Retourne une chaîne de caractères représentant cette durée dans le même [format ISO 8601](#format_de_durée_iso_8601) que l'appel de {{JSxRef("Temporal/Duration/toString", "toString()")}}. Destiné à être appelé implicitement par {{JSxRef("JSON.stringify()")}}.
- {{JSxRef("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
  - : Retourne une chaîne de caractères avec une représentation sensible à la langue de cette durée. Dans les implémentations avec le support de [l'API `Intl.DurationFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat), cette méthode délègue à `Intl.DurationFormat`.
- {{JSxRef("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant cette durée dans le [format ISO 8601](#format_de_durée_iso_8601).
- {{JSxRef("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
  - : Retourne un nombre représentant la durée totale dans l'unité donnée.
- {{JSxRef("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}}
  - : Lève une {{JSxRef("TypeError")}}, ce qui empêche les instances de `Temporal.Duration` d'être [converties implicitement en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#contraintes_des_primitives) lorsqu'elles sont utilisées dans des opérations arithmétiques ou de comparaison.
- {{JSxRef("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
  - : Retourne un nouvel objet `Temporal.Duration` représentant cette durée avec certains champs remplacés par de nouvelles valeurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Temporal")}}
