---
title: "Intl.ListFormat : méthode formatToParts()"
short-title: formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/formatToParts
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatToParts()`** des instances de {{JSxRef("Intl.ListFormat")}} retourne un tableau d'objets représentant chaque partie de la chaîne formatée qui serait retournée par {{JSxRef("Intl/ListFormat/format", "format()")}}. Elle est utile pour construire des chaînes personnalisées à partir des éléments propres à la locale.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.ListFormat.prototype.formatToParts()", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatterEn = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

const formatterFr = new Intl.ListFormat("fr", {
  style: "long",
  type: "conjunction",
});

const partValuesEn = formatterEn.formatToParts(vehicles).map((p) => p.value);
const partValuesFr = formatterFr.formatToParts(vehicles).map((p) => p.value);

console.log(partValuesEn);
// Résultat attendu : "["Motorcycle", ", ", "Bus", ", and ", "Car"]"
console.log(partValuesFr);
// Résultat attendu : "["Motorcycle", ", ", "Bus", " et ", "Car"]"
```

## Syntaxe

```js-nolint
formatToParts(list)
```

### Paramètres

- `list`
  - : Un objet itérable, tel qu'un tableau, contenant des chaînes de caractères. Si vous l'omettez, cela formate un tableau vide, ce qui peut prêter à confusion, il est donc conseillé de toujours passer explicitement une liste.

### Valeur de retour

Un tableau ({{JSxRef("Array")}}) d'objets contenant la liste formatée en fragments. Chaque objet possède deux propriétés, `type` et `value`, chacune contenant une chaîne de caractères. La concaténation des chaînes de caractères de `value`, dans l'ordre fourni, donnera la même chaîne de caractères que {{JSxRef("Intl/ListFormat/format", "format()")}}. La propriété `type` peut prendre l'une des valeurs suivantes&nbsp;:

- `literal`
  - : Toute chaîne de caractères qui fait partie du modèle de formatage&nbsp;; par exemple `", "`, `", and"`, etc.
- `element`
  - : Un élément de la liste, exactement tel que fourni.

## Exemples

### Utiliser la méthode `formatToParts()`

```js
const fruits = ["Apple", "Orange", "Pineapple"];
const maListeFormattee = new Intl.ListFormat("en-GB", {
  style: "long",
  type: "conjunction",
});

console.table(maListeFormattee.formatToParts(fruits));
// [
//  { "type": "element", "value": "Apple" },
//  { "type": "literal", "value": ", " },
//  { "type": "element", "value": "Orange" },
//  { "type": "literal", "value": " and " },
//  { "type": "element", "value": "Pineapple" }
// ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.ListFormat")}}
- La méthode {{JSxRef("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
