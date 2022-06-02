---
title: 'RangeError: invalid date'
slug: Web/JavaScript/Reference/Errors/Invalid_date
tags:
  - Erreurs
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_date
original_slug: Web/JavaScript/Reference/Erreurs/Invalid_date
---
{{jsSidebar("Errors")}}

## Message

```
RangeError: invalid date (Edge)
RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
```

## Type d'erreur

{{jsxref("RangeError")}}

## Quel est le problème ?

Une chaîne de caractères indiquant une date invalide a été fournie comme argument au constructeur {{jsxref("Date")}} ou à la méthode {{jsxref("Date.parse()")}}.

## Exemples

### Exemples invalides

Les chaînes de caractères qui ne peuvent pas être converties en date ou les dates qui contiennent des éléments illégaux pour le format ISO renvoient généralement {{jsxref("NaN")}}. Cependant, selon l'implémentation, les chaînes de caractères qui ne respectent pas le format ISO pour les dates peuvent déclencher une exception `RangeError: invalid date`. Les instructions suivantes déclencheront cette erreur dans Firefox :

```js example-bad
new Date('toto-truc 2014');
new Date('2014-25-23').toISOString();
new Date('toto-truc 2014').toString();
```

En revanche, cette instruction renverra {{jsxref("NaN")}} dans Firefox :

```js example-bad
Date.parse('toto-truc 2014'); // NaN
```

Pour plus de détails, consulter la documentation sur {{jsxref("Date.parse()")}}.

### Exemples valides

```js example-good
new Date('05 October 2011 14:48 UTC');
new Date(1317826080); // timestamp Unix pour le 5 octobre 2011 14:48:00 UTC
```

## Voir aussi

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
