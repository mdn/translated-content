---
title: "Intl.NumberFormat : méthode formatRange()"
short-title: formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`formatRange()`** des instances de {{JSxRef("Intl.NumberFormat")}} formate un intervalle de nombres selon la locale et les options de formatage de cet objet `Intl.NumberFormat`.

## Syntaxe

```js-nolint
formatRange(startRange, endRange)
```

### Paramètres

- `startRange`
  - : Un nombre ({{JSxRef("Number")}}), un grand entier ({{JSxRef("BigInt")}}), ou une chaîne de caractères, à formater. Les chaînes de caractères sont analysées de la même manière que dans [la conversion de nombres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre), sauf que `formatRange()` utilisera la valeur exacte que représente la chaîne de caractères, évitant ainsi toute perte de précision lors de la conversion implicite en nombre.
- `endRange`
  - : Un nombre ({{JSxRef("Number")}}), un grand entier ({{JSxRef("BigInt")}}), ou une chaîne de caractères, à formater.

### Valeur de retour

Une chaîne de caractères représentant l'intervalle de nombres donné, formatée selon la locale et les options de formatage de cet objet {{JSxRef("Intl.NumberFormat")}}. Si les valeurs de début et de fin sont formatées de la même manière, la sortie ne contiendra qu'une seule valeur, éventuellement précédée d'un symbole «&nbsp;environ égal&nbsp;» (par exemple, `"~$3"`). L'insertion de ce symbole dépend uniquement des paramètres de la locale et est insérée même lorsque `startRange === endRange`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `startRange` ou `endRange` est `NaN` ou une chaîne de caractères non convertible.
- {{JSxRef("TypeError")}}
  - : Levée si `startRange` ou `endRange` n'est pas défini.

## Description

La fonction d'accesseur `formatRange` formate un intervalle de nombres en une chaîne de caractères selon la locale et les options de formatage de cet objet {{JSxRef("Intl.NumberFormat")}} à partir duquel elle est appelée.

## Exemples

### Utiliser la méthode `formatRange()`

Utilisez la fonction d'accesseur `formatRange` pour formater un intervalle de valeurs représentant des montants en devises&nbsp;:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "$3 - $5"

// Note : le symbole "environ égal" est ajouté si
// startRange et endRange arrondissent aux mêmes valeurs.
console.log(nf.formatRange(2.9, 3.1)); // "~$3"
```

```js
const nf = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "3-5 €"
console.log(nf.formatRange(2.9, 3.1)); // "~3 €"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("Number.prototype.toLocaleString()")}}
