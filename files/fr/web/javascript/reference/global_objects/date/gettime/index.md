---
title: "Date : méthode getTime()"
short-title: getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`getTime()`** des instances de {{JSxRef("Date")}} retourne le nombre de millisecondes écoulées depuis [l'epoch](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), défini comme le début du 1er janvier 1970 à minuit UTC.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Date.prototype.getTime()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Millisecondes depuis le 1er janvier 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Résultat attendu : -14182940000
```

## Syntaxe

```js-nolint
getTime()
```

### Paramètres

Aucun.

### Valeur de retour

Un nombre représentant le [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), en millisecondes, de cette date. Retourne `NaN` si la date est [invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide).

## Description

Les objets `Date` sont fondamentalement représentés par un [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide), et cette méthode permet de récupérer ce timestamp. Vous pouvez utiliser cette méthode pour affecter une date et une heure à un autre objet {{JSxRef("Date")}}. Cette méthode est fonctionnellement équivalente à la méthode {{JSxRef("Date/valueof", "valueOf()")}}.

## Exemples

### Utiliser la méthode `getTime()` pour copier des dates

Construire un objet date avec la même valeur temporelle.

```js
// Puisque que les mois sont indexés à partir de zéro, l'anniversaire sera le 10 janvier 1995
const anniversaire = new Date(1994, 12, 10);
const copie = new Date();
copie.setTime(anniversaire.getTime());
```

### Mesurer un temps d'exécution

Soustraire deux appels consécutifs à `getTime()` sur des objets {{JSxRef("Date")}} nouvellement générés donne la durée écoulée entre ces deux appels. Cela peut être utilisé pour calculer le temps d'exécution de certaines opérations. Voir aussi {{JSxRef("Date.now()")}} pour éviter d'instancier des objets {{JSxRef("Date")}} inutiles.

```js
let fin, debut;

debut = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
fin = new Date();

console.log(
  `Durée de cette opération : ${fin.getTime() - debut.getTime()} msec`,
);
```

> [!NOTE]
> Dans les navigateurs qui prennent en charge la fonctionnalité de mesure temporelle haute résolution de {{DOMxRef("Performance API", "l'API Performance", "", "nocode")}}, {{DOMxRef("Performance.now()")}} peut fournir des mesures du temps écoulé plus fiables et précises que {{JSxRef("Date.now()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Date.prototype.setTime()")}}
- La méthode {{JSxRef("Date.prototype.valueOf()")}}
- La méthode statique {{JSxRef("Date.now()")}}
