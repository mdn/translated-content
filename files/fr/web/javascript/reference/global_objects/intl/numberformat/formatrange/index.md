---
title: Intl.NumberFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
browser-compat: javascript.builtins.Intl.NumberFormat.formatRange
---
{{JSRef}}

La méthode **`Intl.NumberFormat.prototype.formatRange()`** formate un intervalle numérique selon la locale et les options de formatage associées à l'objet [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) sur lequel la méthode est appelée.

## Syntaxe

```js
formatRange(debutIntervalle, finIntervalle)
```

### Paramètres

- `debutIntervalle`
  - : Une valeur numérique [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) ou [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

- `finIntervalle`
  - : Une valeur numérique [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) ou [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt).

## Description

L'accesseur `formatRange` donne une fonction qui formate un intervalle numérique en une chaîne de caractères selon les options de locale et de formatage associées à l'objet [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) sur lequel il est appelé.

## Exemples

### Utiliser `formatRange()`

On utilise ici la fonction `formatRange()` pour formater un intervalle de valeurs représentant des montants en devises&nbsp;:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // → "$3 - $5"
console.log(nf.formatRange(2.9, 3.1)); // → "~$3"
```

```js
const nf = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5); // → "3-5 €"
console.log(nf.formatRange(2.9, 3.1); // → "~3 €"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.NumberFormat`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [`Number.prototype.toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
