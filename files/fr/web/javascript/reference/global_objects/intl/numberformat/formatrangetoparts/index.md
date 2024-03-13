---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
---

{{JSRef}}

La méthode **`Intl.Numberformat.prototype.formatRangeToParts()`** permet de formater des chaînes de caractères produites par des objets `NumberFormat` en tenant compte de la locale.

## Syntaxe

```js
formatRangeToParts();
formatRangeToParts(debutIntervalle, finIntervalle);
```

### Paramètres

- `debutIntervalle`

  - : Une valeur numérique [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) ou [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

- `finIntervalle`
  - : Une valeur numérique [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) ou [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

### Valeur de retour

Un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) d'objets qui contiennent les différents fragments représentant l'intervalle numérique pour la locale.

## Description

La méthode `formatRangeToParts()` est utile lorsqu'on souhaite construire des chaînes localisées sur mesure qui représentent des intervalles numériques. Elle renvoie un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) dont les éléments sont des objets décrivant chaque fragment localisé qui permet de construire une chaîne de caractères sur mesure tout en préservant la localisation. La structure du tableau renvoyé par la méthode `formatRangeToParts()` ressemble à&nbsp;:

```js
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "literal", value: "-", source: "shared" },
  { type: "integer", value: "5", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

Les types de valeur possibles pour les fragments sont&nbsp;:

- `"currency"`
  - : La chaîne de caractères représentant la devise, telle que les symboles `"$"` et `"€"` ou les noms `"Dollar"`, `"Euro"` selon comment `currencyDisplay` est indiqué.
- `"decimal"`
  - : La chaîne de caractères représentant le séparateur décimal (par exemple `"."`).
- `"fraction"`
  - : La chaîne de caractères représentant la partie fractionnaire.
- `"group"`
  - : La chaîne de caractères pour la séparation entre les groupes (par exemple `","`).
- `"infinity"`
  - : La chaîne de caractères pour représenter l'infini ([`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity)) (par exemple `"∞"`).
- `"integer"`
  - : La chaîne de caractères représentant la partie entière.
- `"literal"`
  - : Toute chaîne de caractères ou blanc utilisé pour le formatage de la valeur numérique.
- `"minusSign"`
  - : La chaîne de caractères représentant le signe moins (par exemple `"-"`).
- `"nan"`
  - : La chaîne de caractères représentant la valeur [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) (`"NaN"`).
- `"plusSign"`
  - : La chaîne de caractères représentant le signe plus (par exemple `"+"`).
- `"percentSign"`
  - : La chaîne de caractères représentant le signe de pourcentage (par exemple `"%"`).
- `"unit"`
  - : La chaîne de caractères représentant l'unité, telle que `"l"` ou `"litres"` selon comment `unitDisplay` est indiqué.

## Exemples

### Comparer `formatRange()` et `formatRangeToParts()`

`NumberFormat.formatRange()` produit des chaînes de caractères localisées qui ne peuvent pas être manipulées directement&nbsp;:

```js
const debutIntervalle = 3500;
const finIntervalle = 9500;

const formateur = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formateur.formatRange(debutIntervalle, finIntervalle);
// "3.500,00–9.500,00 €"
```

Toutefois, s'il est nécessaire de personnaliser la chaîne de caractères finale en utilisant les fragments localisés, on peut utiliser la méthode `formatRangeToParts()` qui fournit les fragments formatés de la chaîne de caractères et qui tiennent compte de la locale&nbsp;:

```js
formateur.formatRangeToParts(debutIntervalle, finIntervalle)

// Valeur de retour :
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "group", value: ".", source: "startRange" },
  { type: "integer", value: "500", source: "startRange" },
  { type: "decimal", value: ",", source: "startRange" },
  { type: "fraction", value: "00", source: "startRange" },
  { type: "literal", value: "–", source: "shared" },
  { type: "integer", value: "9", source: "endRange" },
  { type: "group", value: ".", source: "endRange" },
  { type: "integer", value: "500", source: "endRange" },
  { type: "decimal", value: ",", source: "endRange" },
  { type: "fraction", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [`Intl.NumberFormat.prototype.format`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format)
- La méthode analogue pour le formatage d'intervalle de dates&nbsp;: [`Intl.DateTimeFormat.prototype.formatRangeToParts()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts)
