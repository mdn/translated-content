---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toDateString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toDateString
---
{{JSRef}}

La méthode **`toDateString()`** renvoie la date contenue dans un objet {{jsxref("Date")}} sous la forme d'une chaîne de caractères lisible par un humain, en anglais américain et au format suivant :

1.  Les trois premières lettre indiquent le jour
2.  Les trois lettres suivantes indiquent le mois
3.  Les deux chiffres suivants indiquent le jour du mois (et sont complétés avec un 0 devant si besoin)
4.  Les quatre chiffres restants indiquent l'année (si besoin complétées avec des 0 comme préfixe)

{{EmbedInteractiveExample("pages/js/date-todatestring.html")}}

## Syntaxe

    dateObj.toDateString()

### Valeur de retour

Une chaîne de caractères qui représente la date indiquée, dans un format anglais américain.

## Description

Les instances de {{jsxref("Date")}} représentent un point précis dans le temps. Appeler {{jsxref("Date.prototype.toString", "toString")}} retournera la date formatée sous une forme lisible par un humain, en anglais américain. Pour le moteur JavaScript [SpiderMonkey](/fr/docs/SpiderMonkey), ceci consiste en : la partie « date » (jour, mois et année) suivie de la partie « heure » (heures, minutes, secondes et fuseau horaire). Il est parfois préférable d'obtenir uniquement la partie « date » ; ceci est possible grâce à la méthode `toDateString()`.

La méthode `toDateString()` est particulièrement utile car, pour les moteurs implémentant fidèlement [ECMA-262](/fr/docs/JavaScript/Language_Resources), il peut y avoir certaines différences dans la chaîne de caractères produite par `toString()` sur les objets `Date`. Le format dépend de l'implémentation et les techniques simples de découpage de texte peuvent ne pas produire un résultat cohérent à travers les différents moteurs.

## Exemples

### Utiliser simplement `toDateString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // écrit Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // écrit Wed Jul 28 1993
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                 | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.9.5.3', 'Date.prototype.toDateString')}}                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toDateString")}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
