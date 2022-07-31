---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/setMonth
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/setMonth
---
{{JSRef}}

La méthode **`setMonth()`** définit le mois de la date, selon l'heure locale et l'année courante de l'objet {{jsxref("Date")}}

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## Syntaxe

```js
dateObj.setMonth(valeurMois[, valeurJour])
```

### Versions antérieures à JavaScript 1.3

```js
dateObj.setMonth(valeurMois)
```

### Paramètres

- `valeurMois`
  - : Un entier entre 0 et 11 (représentant les mois de janvier à décembre).
- `valeurJour`
  - : Paramètre optionnel, un entier entre 1 et 31, représentant le jour du mois.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si le paramètre `valeurJour` n'est pas utilisé, la valeur renvoyée par la méthode {{jsxref("Date.getDate", "getDate()")}} sera utilisée.

Si un paramètre que vous renseignez n'est pas dans les limites attendues, `setMonth()` tentera de mettre à jour la date en conséquence. Par exemple, si la valeur 15 est utilisée pour `valeurMois`, l'année sera incrémenté de 1 (année + 1), et 3 sera utilisé pour le mois.

> **Note :** Attention aux jours du mois lorsqu'on utilise `setMonth()`. En effet, `setMonth()` cherchera à aboutir à une date correcte et on peut avoir des surprises pour les transitions entre les mois. Ainsi, en 2016 (où février a eu 29 jours), on aura le cas suivant :
>
> ```js
> var finDuMois = new Date(2016, 7, 31); // le 31 août 2016
> finDuMois.setMonth(1);
>
> console.log(finDuMois.toLocaleString()); // 02/03/2016 à 00:00:00
> ```

## Exemples

### Utiliser `setMonth()`

```js
var leGrandJour = new Date();
leGrandJour.setMonth(6);
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.38', 'Date.prototype.setMonth')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.setmonth', 'Date.prototype.setMonth')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.setMonth")}}

## Voir aussi

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
