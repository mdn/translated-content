---
title: "Date : méthode setYear()"
short-title: setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Deprecated_Header}}

La méthode **`setYear()`** des instances de {{JSxRef("Date")}} définit l'année pour une date définie selon l'heure locale.

Cependant, la façon dont la méthode héritée `setYear()` définit les valeurs d'année diffère de celle de la méthode préférée {{JSxRef("Date/setFullYear", "setFullYear()")}} — et dans certains cas, diffère aussi de la façon dont `new Date()` et {{JSxRef("Date.parse()")}} définissent les valeurs d'année. Plus précisément, pour des nombres à deux chiffres, comme `22` et `61`&nbsp;:

- `setYear()` interprète tout nombre à deux chiffres comme un décalage par rapport à `1900`&nbsp;; ainsi `date.setYear(22)` résulte en la valeur d'année étant définie à `1922`, et `date.setYear(61)` résulte en la valeur d'année étant définie à `1961`. (En revanche, tandis que `new Date(61, 1)` résulte également en la valeur d'année étant définie à `1961`, `new Date("2/1/22")` résulte en la valeur d'année étant définie à `2022`; et de même pour {{JSxRef("Date.parse()")}}).
- {{JSxRef("Date/setFullYear", "setFullYear()")}} n'effectue aucune interprétation particulière mais utilise la valeur littérale à deux chiffres telle quelle pour définir l'année&nbsp;; ainsi, `date.setFullYear(61)` résulte en la valeur d'année étant définie à `0061`, et `date.setFullYear(22)` résulte en la valeur d'année étant définie à `0022`.

En raison de ces différences de comportement, il ne faut plus utiliser la méthode héritée `setYear()`, mais plutôt la méthode préférée {{JSxRef("Date/setFullYear", "setFullYear()")}}.

## Syntaxe

```js-nolint
setYear(yearValue)
```

### Paramètres

- `yearValue`
  - : Un entier.

### Valeur de retour

Modifie l'objet {{JSxRef("Date")}} en place et retourne son nouveau [timestamp](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide). Si un paramètre vaut `NaN` (ou d'autres valeurs qui sont [contrainte](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre) en `NaN`, comme `undefined`), la date est définie sur [Date invalide](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date#lepoch_les_timestamps_et_la_date_invalide) et `NaN` est retourné.

## Description

Si `yearValue` est un nombre entre 0 et 99 (inclus), alors l'année pour `dateObj` est fixée à `1900 + yearValue`. Sinon, l'année pour `dateObj` est fixée à `yearValue`.

## Exemples

### Utiliser la méthode `setYear()`

Les deux premières instructions définissent l'année 1996. La troisième définit l'année 2000.

```js
const leGrandJour = new Date();

leGrandJour.setYear(96);
leGrandJour.setYear(1996);
leGrandJour.setYear(2000);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Date.prototype.setYear` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-date)
- La méthode {{JSxRef("Date.prototype.getFullYear()")}}
- La méthode {{JSxRef("Date.prototype.getUTCFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setFullYear()")}}
- La méthode {{JSxRef("Date.prototype.setUTCFullYear()")}}
