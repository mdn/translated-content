---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
tags:
  - Date
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toJSON
original_slug: Web/JavaScript/Reference/Objets_globaux/Date/toJSON
---
{{JSRef}}

La méthode **`toJSON()`** renvoie une chaîne représentant l'objet {{jsxref("Date")}} sous forme {{Glossary("JSON")}}

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntaxe

```js
dateObj.toJSON()
```

### Valeur de retour

Une chaîne de caractères représentant la date indiquée.

## Description

Les instances de {{jsxref("Date")}} identifient un instant précis dans le temps. Appeler `toJSON()` renvoie une chaîne de caractères formatée en JSON (en utilisant {{jsxref("Date.prototype.toISOString", "toISOString()")}}), représentant la valeur de l'objet `Date`. Cette méthode est généralement utilisée, par défaut, pour sérialiser les objets `Date` lors d'une sérialisation au format JSON.

## Exemple

### Utiliser `toJSON()`

```js
var jsonDate = (new Date()).toJSON();
var retourVersDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires                                            |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.9.5.44', 'Date.prototype.toJSON')}}                     | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}}     | {{Spec2('ES6')}}         |                                                         |
| {{SpecName('ESDraft', '#sec-date.prototype.tojson', 'Date.prototype.toJSON')}} | {{Spec2('ESDraft')}} |                                                         |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Date.toJSON")}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
