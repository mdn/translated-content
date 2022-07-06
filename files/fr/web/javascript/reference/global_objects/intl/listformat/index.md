---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat
browser-compat: javascript.builtins.Intl.ListFormat
---
{{JSRef}}

L'objet **`Intl.ListFormat`** permet de formater des listes de façon différente selon la locale utilisée.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Constructeur

- [`Intl.ListFormat()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat)
  - : Crée un nouvel objet `Intl.ListFormat`.

## Méthodes statiques

- [`Intl.ListFormat.supportedLocalesOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/supportedLocalesOf)
  - : Renvoie un tableau qui contient les locales, parmi celles fournies en arguments, qui sont prises en charge sans avoir à recourir à la locale par défaut de l'environnement d'exécution.

## Méthodes des instances

- [`Intl.ListFormat.prototype.format()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format)
  - : Renvoie une chaîne de caractères, formatée selon la locale, qui représente les éléments de la liste.
- [`Intl.ListFormat.prototype.formatToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts)
  - : Renvoie un tableau d'objets qui sont chacun des fragments pouvant être utilisés pour formater la liste de valeurs en tenant compte de la locale.

## Exemples

### Utiliser `format()`

Dans l'exemple qui suit, on voit comment créer un formateur de liste pour l'anglais.

```js
const list = ['Motorcycle', 'Bus', 'Car'];

 console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).format(list));
// > Motorcycle, Bus and Car

 console.log(new Intl.ListFormat('en-GB', { style: 'short', type: 'disjunction' }).format(list));
// > Motorcycle, Bus or Car

 console.log(new Intl.ListFormat('en-GB', { style: 'narrow', type: 'unit' }).format(list));
// > Motorcycle Bus Car
```

### Utiliser `formatToParts()`

Dans l'exemple qui suit, on voit comment créer un formateur de liste, renvoyant les fragments, pour l'anglais.

```js
const list = ['Motorcycle', 'Bus', 'Car'];
console.log(new Intl.ListFormat('en-GB', { style: 'long', type: 'conjunction' }).formatToParts(list));

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Une prothèse d'émulation pour `Intl.ListFormat` avec la bibliothèque FormatJS](https://formatjs.io/docs/polyfills/intl-listformat)
