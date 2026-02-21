---
title: "Date : méthode getTimezoneOffset()"
short-title: getTimezoneOffset()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getTimezoneOffset()`** des instances de {{JSxRef("Date")}} retourne la différence en minutes entre le fuseau horaire UTC, et celui de l'heure locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getTimezoneOffset()")}}

```js interactive-example
const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-02:00");

console.log(date1.getTimezoneOffset());
// Résultat attendu : décalage horaire local en minutes
// (par exemple, -120). PAS le décalage horaire de l'objet date.

console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());
// Résultat attendu : true
```

## Syntaxe

```js-nolint
getTimezoneOffset()
```

### Paramètres

Aucun.

### Valeur de retour

Un nombre représentant la différence, en minutes, entre la date évaluée dans le fuseau horaire UTC et celle évaluée dans le fuseau horaire local. L'algorithme réel de l'heure locale dépend de l'implémentation, et la valeur de retour peut être zéro dans les environnements d'exécution sans données appropriées. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

`date.getTimezoneOffset()` retourne la différence, en minutes, entre `date` évaluée dans le fuseau horaire UTC et celle évaluée dans le fuseau horaire local — c'est-à-dire le fuseau horaire du système hôte dans lequel le navigateur est utilisé (si le code est exécuté depuis le Web dans un navigateur), ou sinon le système hôte de tout environnement d'exécution JavaScript (par exemple, un environnement Node.js) dans lequel le code est exécuté.

### Valeurs négatives et positives

Le nombre de minutes retourné par `getTimezoneOffset()` est positif si le fuseau horaire local est en retard sur l'UTC, et négatif si le fuseau horaire local est en avance sur l'UTC. Par exemple, pour UTC+10, `-600` sera retourné.

| Fuseau horaire actuel | Valeur retournée |
| --------------------- | ---------------- |
| UTC-8                 | 480              |
| UTC                   | 0                |
| UTC+3                 | -180             |

### Résultats variables dans les régions avec l'heure d'été (DST)

Dans une région qui passe chaque année à l'heure d'été (DST) puis revient à l'heure standard, selon la valeur de `date`, le nombre de minutes retourné par l'appel à `getTimezoneOffset()` peut ne pas être uniforme.

> [!NOTE]
> Le comportement de `getTimezoneOffset()` ne dépend jamais du moment où le code est exécuté — son comportement est toujours cohérent lorsqu'il s'exécute dans la même région. Seule la valeur de `date` affecte le résultat.

> [!NOTE]
> [De nombreux pays ont expérimenté le fait de ne pas changer l'heure deux fois par an <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Daylight_saving_time_by_country#Past_observance) et cela a signifié que l'heure d'été a continué pendant l'hiver également. Par exemple, au Royaume-Uni, l'heure d'été a duré du 18 février 1968 à 2h00 au 31 octobre 1971 à 3h00, donc pendant l'hiver les horloges n'ont pas été reculées.

Dans la plupart des implémentations, [la base de données des fuseaux horaires IANA <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Daylight_saving_time#IANA_time_zone_database) (tzdata) est utilisée pour déterminer précisément le décalage du fuseau horaire local au moment de la `date`. Cependant, si une telle information n'est pas disponible, une implémentation peut retourner zéro.

## Exemples

### Utiliser la méthode `getTimezoneOffset()`

```js
// Créer une instance Date pour l'heure locale courante
const dateLocaleCourante = new Date();
// Créer une instance Date pour 03:24 GMT-0200 le 1er mai 2016
const feteTravail2016a0324GMTmoins2 = new Date("2016-05-01T03:24:00-02:00");
dateLocaleCourante.getTimezoneOffset() ===
  feteTravail2016a0324GMTmoins2.getTimezoneOffset();
// true, toujours, dans tout fuseau qui ne passe pas à l'heure d'été chaque année
// false, parfois, dans tout fuseau qui passe à l'heure d'été chaque année
```

### getTimezoneOffset() et l'heure d'été (DST)

Dans les régions qui utilisent l'heure d'été, la valeur retournée peut changer en fonction de la période de l'année dans laquelle se trouve `date`. Ci-dessous, la sortie dans un environnement d'exécution à New York, où le fuseau horaire est UTC-05:00.

```js
const decalageHiverNY = new Date("2022-02-01").getTimezoneOffset(); // 300
const decalageEteNY = new Date("2022-08-01").getTimezoneOffset(); // 240
```

### getTimezoneOffset() et les données historiques

Pour des raisons historiques, le fuseau horaire d'une région peut changer constamment, même en ignorant l'heure d'été. Par exemple, ci-dessous est la sortie dans un environnement d'exécution à Shanghai, où le fuseau horaire est UTC+08:00.

```js
const decalageModerneSH = new Date("2022-01-27").getTimezoneOffset(); // -480
const decalageHistoriqueSH = new Date("1943-01-27").getTimezoneOffset(); // -540
```

Cela s'explique par le fait que pendant [la guerre sino-japonaise](https://fr.wikipedia.org/wiki/Seconde_guerre_sino-japonaise), lorsque Shanghai était sous contrôle japonais, le fuseau horaire a été changé pour UTC+09:00 afin de s'aligner sur celui du Japon (en pratique, il s'agissait d'une «&nbsp;heure d'été toute l'année&nbsp;»), et cela a été enregistré dans la base de données IANA.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Date")}}
