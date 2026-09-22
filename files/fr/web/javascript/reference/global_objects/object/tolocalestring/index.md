---
title: "Object : méthode toLocaleString()"
short-title: toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`toLocaleString()`** des instances de {{JSxRef("Object")}} retourne une chaîne de caractères représentant cet objet. Cette méthode est destinée à être surchargée par les objets dérivés à des fins spécifiques pour prendre en compte les locales.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.prototype.toLocaleString()")}}

```js interactive-example
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date.toLocaleString("ar-EG"));
// Résultat attendu : "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number = 123456.789;

console.log(number.toLocaleString("de-DE"));
// Résultat attendu : "123.456,789"
```

## Syntaxe

```js-nolint
toLocaleString()
```

### Paramètres

Aucun. Cependant, tous les objets qui redéfinissent cette méthode sont censés accepter au maximum deux paramètres, correspondant à `locales` et `options`, comme {{JSxRef("Number.prototype.toLocaleString")}}. Les positions des paramètres ne doivent pas être utilisées à d'autres fins.

### Valeur de retour

La valeur de retour de l'appel à `this.toString()`.

## Description

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `toLocaleString()`. La méthode `toLocaleString` de {{JSxRef("Object")}} retourne le résultat de l'appel à {{JSxRef("Object/toString", "this.toString()")}}.

Cette fonction est fournie pour donner aux objets une méthode générique `toLocaleString`, même si tous ne peuvent l'utiliser. Dans le langage de base, ces objets intégrés redéfinissent `toLocaleString` pour fournir un formatage spécifique à la locale&nbsp;:

- {{JSxRef("Array")}}&nbsp;: {{JSxRef("Array.prototype.toLocaleString()")}}
- {{JSxRef("Number")}}&nbsp;: {{JSxRef("Number.prototype.toLocaleString()")}}
- {{JSxRef("Date")}}&nbsp;: {{JSxRef("Date.prototype.toLocaleString()")}}
- {{JSxRef("TypedArray")}}&nbsp;: {{JSxRef("TypedArray.prototype.toLocaleString()")}}
- {{JSxRef("BigInt")}}&nbsp;: {{JSxRef("BigInt.prototype.toLocaleString()")}}

## Exemples

### Utiliser la méthode `toLocaleString()`

La méthode de base `toLocaleString()` appelle simplement `toString()`.

```js
const obj = {
  toString() {
    return "Mon Objet";
  },
};
console.log(obj.toLocaleString()); // "Mon Objet"
```

### Surcharger la méthode `toLocaleString()` pour les tableaux

{{JSxRef("Array.prototype.toLocaleString()")}} est utilisé pour afficher les valeurs d'un tableau sous forme de chaîne de caractères en appelant la méthode `toLocaleString()` de chaque élément et en joignant les résultats avec un séparateur spécifique à la locale. Par exemple&nbsp;

```js
const tableauTest = [4, 7, 10];

const prixEuro = tableauTest.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Surcharger la méthode `toLocaleString()` pour les dates

{{JSxRef("Date.prototype.toLocaleString()")}} est utilisé pour afficher les dates de manière plus adaptée aux locales spécifiques. Par exemple&nbsp;:

```js
const dateTest = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const dateAllemande = dateTest.toLocaleString("de");
// "29.5.2020, 18:04:24"

const dateFrancaise = dateTest.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Surcharger la méthode `toLocaleString()` pour les nombres

{{JSxRef("Number.prototype.toLocaleString()")}} est utilisé pour afficher les nombres de manière plus adaptée aux locales spécifiques, par exemple avec les séparateurs corrects. Par exemple&nbsp;:

```js
const nombreTest = 2901234564;
// "2901234564"

const nombreAllemand = nombreTest.toLocaleString("de");
// "2.901.234.564"

const nombreFrancais = nombreTest.toLocaleString("fr");
// "2 901 234 564"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.toString()")}}
