---
title: Intl.DateTimeFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/DateTimeFormat/format
---
{{JSRef}}

La méthode **`Intl.DateTimeFormat.prototype.format()`** est un accesseur formate une date selon les options de locale et de format de l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html")}}

## Syntaxe

```js
dateTimeFormat.format(date)
```

### Paramètres

- `date`
  - : La date à formater.

## Description

L'accesseur `format` permet de formater une date en une chaîne de caractères en fonction des options de locale et de format définies pour l'objet {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}.

## Exemples

### Utiliser `format`

On peut utiliser la fonction renvoyée par l'accesseur `format` pour formater une date. Par exemple selon la locale serbe :

```js
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
var dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// → "недеља, 7. април 2013."
```

### Utiliser `format` avec `map()`

On peut également utiliser la fonction renvoyée par l'accesseur `format` pour formater toutes les dates d'un tableau. On observe que la fonction est liée à l'objet `DateTimeFormat` dont elle provient, on peut donc la passer directement à {{jsxref("Array.prototype.map()")}}.

```js
var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
var options = {year: "numeric", month: "long"};
var dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
var formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// → "setembro de 2012; dezembro de 2012; abril de 2012"
```

### Comparaison des dates formatées et des valeurs statiques

La plupart du temps, le format renvoyé par `format()` est cohérent. Toutefois, cela peut évoluer à l'avenir et n'est pas garanti pour l'ensemble des langues (de telles variations sont souhaitables et permises par la spécification). Ainsi, IE et Edge ajoutent des caractères de contrôle bidirectionnels autour des dates afin que le texte produit ait une directionalité cohérente avec le texte avec lequel elles seront concaténées.

Aussi, mieux vaut ne pas comparer un résultat fourni par `format()` avec une valeur statique :

```js example-bad
let d = new Date("2019-01-01T00:00:00.000000Z");
let formattedDate = Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}).format(d);

"1.1.2019, 01:00:00" === formattedDate;
// true pour Firefox et les autres
// false pour IE et Edge
```

> **Note :** Voir aussi ce fil [StackOverflow](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results) pour plus de détails et d'exemples.

## Spécifications

| Spécification                                                                                                                            | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}}                                         | {{Spec2('ES Int 1.0')}} | Définition initiale. |
| {{SpecName('ES Int 2.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}}                                         | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#sec-Intl.DateTimeFormat.prototype.format', 'Intl.DateTimeFormat.format')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.DateTimeFormat.format")}}

## Voir aussi

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString")}}
- {{jsxref("Date.prototype.toLocaleDateString")}}
- {{jsxref("Date.prototype.toLocaleTimeString")}}
