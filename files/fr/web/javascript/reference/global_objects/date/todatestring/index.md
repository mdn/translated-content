---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---

{{JSRef}}

La méthode **`toDateString()`** renvoie la date contenue dans un objet {{jsxref("Date")}} sous la forme d'une chaîne de caractères lisible par un humain, en anglais américain et au format suivant :

1. Les trois premières lettre indiquent le jour
2. Les trois lettres suivantes indiquent le mois
3. Les deux chiffres suivants indiquent le jour du mois (et sont complétés avec un 0 devant si besoin)
4. Les quatre chiffres restants indiquent l'année (si besoin complétées avec des 0 comme préfixe)

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntaxe

```js
dateObj.toDateString();
```

### Valeur de retour

Une chaîne de caractères qui représente la date indiquée, dans un format anglais américain.

## Description

Les instances de {{jsxref("Date")}} représentent un point précis dans le temps. Appeler {{jsxref("Date.prototype.toString", "toString")}} retournera la date formatée sous une forme lisible par un humain, en anglais américain. Pour le moteur JavaScript [SpiderMonkey](/fr/docs/SpiderMonkey), ceci consiste en : la partie « date » (jour, mois et année) suivie de la partie « heure » (heures, minutes, secondes et fuseau horaire). Il est parfois préférable d'obtenir uniquement la partie « date » ; ceci est possible grâce à la méthode `toDateString()`.

La méthode `toDateString()` est particulièrement utile car, pour les moteurs implémentant fidèlement [ECMA-262](/fr/docs/Web/JavaScript/JavaScript_technologies_overview), il peut y avoir certaines différences dans la chaîne de caractères produite par `toString()` sur les objets `Date`. Le format dépend de l'implémentation et les techniques simples de découpage de texte peuvent ne pas produire un résultat cohérent à travers les différents moteurs.

## Exemples

### Utiliser simplement `toDateString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // écrit Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // écrit Wed Jul 28 1993
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
