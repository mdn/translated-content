---
title: Date.prototype.toGMTString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
tags:
  - Date
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toGMTString
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toGMTString
---
{{JSRef}} {{deprecated_header}}

La méthode **`toGMTString()`** convertit une date en une chaîne de caractères, en utilisant les conventions Internet pour GMT. Le format exact de la valeur renvoyée par `toGMTString()` varie en fonction de la plateforme et du navigateur web. En général, le texte produit est formaté pour être lisible par un humain.

> **Note :** `toGMTString()` est obsolète et ne doit plus être utilisé. Il existe encore uniquementpour des questions de compatibilité. La méthode {{jsxref("Date.prototype.toUTCString", "toUTCString()")}} doit être utilisée à la place.

## Syntaxe

```js
dateObj.toGMTString()
```

### Valeur de retour

Une chaîne de caractères représentant la date indiquée selon la convention internet pour GMT (_Greenwich Mean Time_).

## Exemples

### Utiliser `toGMTString()`

Dans cet exemple, la méthode `toGMTString()` convertit la date vers GMT (UTC) en utilisant la différence avec le fuseau horaire du système d'exploitation. Elle renvoie une chaîne de caractères similaire à celle de l'exemple. La forme exacte de cette chaîne de caractères dépend de la plateforme.

```js
var aujourdhui = new Date();
var str = aujourdhui.toGMTString();  // Obsolète ! Utilisez toUTCString()

console.log(str);               // Mon, 18 Dec 1995 17:28:35 GMT
```

## Spécifications

| Spécification                                                                                                        | État                         | Commentaires                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Définition initiale et déjà déclarée comme dépréciée. Implémentée avec JavaScript 1.0.      |
| {{SpecName('ES5.1', '#sec-B.2.6', 'Date.prototype.toGMTString')}}                             | {{Spec2('ES5.1')}}     | Définie dans l'annexe informative sur la compatibilité.                                     |
| {{SpecName('ES6', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}}     | {{Spec2('ES6')}}         | Définie dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web. |
| {{SpecName('ESDraft', '#sec-date.prototype.togmtstring', 'Date.prototype.toGMTString')}} | {{Spec2('ESDraft')}} | Définie dans l'annexe normative sur les fonctionnalités additionnelles des navigateurs web. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toGMTString")}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
