---
title: Intl.NumberFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - NumberFormat
  - Propriété
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/NumberFormat/format
---
{{JSRef}}

La méthode **`Intl.NumberFormat.prototype.format()`** formate un nombre en fonction des options de locales et de formats définis dans l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}} correspondant.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html")}}

## Syntaxe

    numberFormat.format(nombre)

### Paramètres

- `nombre`
  - : Le nombre qu'on souhaite formater.

## Description

La fonction d'accesseur `format` permet de formater un nombre donné en une chaîne de caractères selon les options de locale et de format de l'objet {{jsxref("NumberFormat", "Intl.NumberFormat")}}.

## Exemples

### Utiliser `format()`

On peut utiliser la fonction renvoyée par `format` pour formater une valeur monétaire selon la locale russe :

```js
var options = {style: "currency", currency: "RUB"};
var numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
```

### Utiliser `format()` avec `map()`

On peut également utiliser la fonction `format` pour formater les nombres contenus dans un tableau. On notera que la fonction est liée à l'objet `NumberFormat` dont elle provient, on peut donc directement l'utiliser avec {{jsxref("Array.prototype.map")}}.

```js
var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat("es-ES");
var formatted = a.map(numberFormat.format);
console.log(formatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## Spécifications

| Spécification                                                                                                                                    | État                             | Commentaires        |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('ES Int 1.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}}                                         | {{Spec2('ES Int 1.0')}} | Définition initiale |
| {{SpecName('ES Int 2.0', '#sec-11.3.2', 'Intl.NumberFormat.prototype.format')}}                                         | {{Spec2('ES Int 2.0')}} |                     |
| {{SpecName('ES Int Draft', '#sec-Intl.NumberFormat.prototype.format', 'Intl.NumberFormat.prototype.format')}} | {{Spec2('ES Int Draft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.NumberFormat.format")}}

## Voir aussi

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
