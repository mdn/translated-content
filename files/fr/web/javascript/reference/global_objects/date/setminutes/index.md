---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
---

{{JSRef}}

La méthode **`setMinutes()`** définit les minutes pour la date donnée, selon l'heure locale.

{{EmbedInteractiveExample("pages/js/date-setminutes.html")}}

## Syntaxe

```js
dateObj.setMinutes(valeurMinutes[, valeurSecondes[, valeurMs]])
```

### Versions antérieures à JavaScript 1.3

```js
dateObj.setMinutes(valeurMinutes);
```

### Paramètres

- `valeurMinutes`
  - : Un entier entre 0 et 59, représentant les minutes.
- `valeurSecondes`
  - : Paramètre optionnel, un entier entre 0 et 59, représentant les secondes. Si `valeurSecondes` est utilisé, il faut également utiliser `valeurMinutes`.
- `valeurMs`
  - : Paramètre optionel, un nombre entre 0 et 999, représentant les millièmes de secondes. Si `valeurMs` est utilisé, il faut également utiliser `valeurMinutes` et `valeurSecondes`.

### Valeur de retour

Le nombre de millisecondes écoulées entre le premier janvier 1970 minuit, UTC et la date mise à jour.

## Description

Si `valeurSecondes` et `valeurMs` ne sont pas indiquées, les valeurs renvoyées par les méthodes {{jsxref("Date.getSeconds", "getSeconds()")}} et {{jsxref("Date.getMilliseconds", "getMilliseconds()")}} seront utilisées.

Si un paramètre est en dehors des limites attendues, `setMinutes()` tentera de mettre à jour la date en conséquence. Par exemple, si on utilise la valeur 100 pour `valeurSecondes`, les minutes (`valeurMinutes`) seront incrémentées de 1 (`valeurMinutes` + 1), et 40 sera utilisé pour les secondes.

## Exemples

### Utiliser `setMinutes()`

```js
var leGrandJour = new Date();
leGrandJour.setMinutes(45);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
