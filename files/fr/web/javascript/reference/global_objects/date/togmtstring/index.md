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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
