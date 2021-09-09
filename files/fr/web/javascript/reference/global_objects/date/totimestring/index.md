---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toTimeString
---
{{JSRef}}

La méthode **`toTimeString()`**renvoie la partie « heure » de l'objet `Date` dans un format lisible par un humain, en anglais américain.

{{EmbedInteractiveExample("pages/js/date-totimestring.html")}}

## Syntaxe

    dateObj.toTimeString()

### Valeur de retour

Une chaîne de caractères qui représente l'heure de la date indiquée dans un format anglais américain.

## Description

Une instance de {{jsxref("Date")}} représente un instant précis dans le temps. Appeler {{jsxref("Date.toString", "toString()")}} renverra la date formatée de façon à être lisible par un humain, en anglais américain. Pour le moteur JavaScript [SpiderMonkey](/fr/docs/SpiderMonkey), ceci consiste en la partie « date » (jour, mois, année) suivie de la partie « heure » (heures, minutes, secondes, et fuseau horaire). Parfois, il est préférable d'obtenir seulement la partie « heure » ; c'est ce que renvoie la méthode `toTimeString().`

La méthode `toTimeString()` est particulièrement utile parce que les moteurs implémentant [ECMA-262](/fr/docs/JavaScript/Language_Resources) peuvent obtenir des résultats différents avec la méthode {{jsxref("Date.prototype.toString()", "toString()")}} (en effet, le format dépend de l'implémentation). Ceci peut empêcher les manipulations de textes simples d'avoir des résultats cohérents au sein des différents moteurs/navigateurs.

## Exemple

### Utiliser `toTimeString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString());     // Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // 14:39:07 GMT-0600 (PDT)
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                                                                 | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.9.5.4', 'Date.prototype.toTimeString')}}                             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-date.prototype.totimestring', 'Date.prototype.toTimeString')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-date.prototype.totimestring', 'Date.prototype.toTimeString')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toTimeString")}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
