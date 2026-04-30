---
title: "Intl.NumberFormat : méthode formatRangeToParts()"
short-title: formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatRangeToParts()`** des instances de {{JSxRef("Intl.NumberFormat")}} retourne un tableau ({{JSxRef("Array")}}) d'objets contenant les jetons spécifiques à la locale à partir desquels il est possible de construire des chaînes de caractères personnalisées tout en préservant les parties spécifiques à la locale. Cela permet de fournir des intervalles de formatage personnalisés sensibles à la locale pour les chaînes de caractères représentant des nombres.

## Syntaxe

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Paramètres

- `startRange`
  - : Un nombre ({{JSxRef("Number")}}), un grand entier ({{JSxRef("BigInt")}}), ou une chaîne de caractères, à formater. Les chaînes de caractères sont analysées de la même manière que dans [la conversion de nombres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre), sauf que `formatRangeToParts()` utilisera la valeur exacte que représente la chaîne de caractères, évitant ainsi toute perte de précision lors de la conversion implicite en nombre.
- `endRange`
  - : Un nombre ({{JSxRef("Number")}}), un grand entier ({{JSxRef("BigInt")}}), ou une chaîne de caractères, à formater.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) d'objets contenant l'intervalle formaté en parties. Chaque objet possède trois propriétés, `type`, `value` et `source`, chacune contenant une chaîne de caractères. La concaténation des valeurs de `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/NumberFormat/formatRange", "formatRange()")}}. La propriété `type` peut avoir les mêmes valeurs que {{JSxRef("Intl/NumberFormat/formatToParts", "formatToParts()")}}, ou la valeur supplémentaire `"approximatelySign"` (voir ci-dessous). La propriété `source` peut être l'une des suivantes&nbsp;:

- `startRange`
  - : Le jeton fait partie du nombre de début.
- `endRange`
  - : Le jeton fait partie du nombre de fin.
- `shared`
  - : Le jeton est partagé entre le début et la fin&nbsp;; par exemple, le symbole de la devise. Tous les littéraux qui font partie du modèle d'intervalle lui-même, comme le séparateur `"—"`, sont également marqués comme `shared`.

Si les nombres de début et de fin sont formatés de la même manière, alors la sortie contient la même liste de jetons que l'appel de {{JSxRef("Intl/NumberFormat/formatToParts", "formatToParts()")}} sur le nombre de début, avec tous les jetons marqués comme `source: "shared"`. De plus, le premier jeton peut être un symbole «&nbsp;environ égal&nbsp;» (par exemple, `"~"`) avec `type: "approximatelySign"`. L'insertion de ce symbole dépend uniquement des paramètres de la locale et est insérée même lorsque `startRange === endRange`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `startRange` ou `endRange` est `NaN` ou une chaîne de caractères non convertible.
- {{JSxRef("TypeError")}}
  - : Levée si `startRange` ou `endRange` n'est pas défini.

## Exemples

### Utiliser la méthode `formatRangeToParts()`

La méthode `formatRange()` retourne des chaînes de caractères localisées opaques qui ne peuvent pas être manipulées directement&nbsp;:

```js
const startRange = 3500;
const endRange = 9500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(formatter.formatRange(startRange, endRange));
// "3.500,00—9.500,00 €"
```

Cependant, dans de nombreuses interfaces utilisateur, vous pouvez vouloir personnaliser le formatage de cette chaîne, ou l'intercaler avec d'autres textes. La méthode `formatRangeToParts()` produit les mêmes informations en parties&nbsp;:

```js
console.log(formatter.formatRangeToParts(startRange, endRange));

// Valeur de retour :
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "group", value: ".", source: "startRange" },
  { type: "integer", value: "500", source: "startRange" },
  { type: "decimal", value: ",", source: "startRange" },
  { type: "fraction", value: "00", source: "startRange" },
  { type: "literal", value: "—", source: "shared" },
  { type: "integer", value: "9", source: "endRange" },
  { type: "group", value: ".", source: "endRange" },
  { type: "integer", value: "500", source: "endRange" },
  { type: "decimal", value: ",", source: "endRange" },
  { type: "fraction", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
];
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
