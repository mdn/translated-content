---
title: "RegExp : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
l10n:
  sourceCommit: 939067a53bb5bb3787f2d536b83df2252d4e838e
---

La méthode **`toString()`** des instances de {{JSxRef("RegExp")}} retourne une chaîne de caractères représentant cette expression rationnelle.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.toString()", "taller")}}

```js interactive-example
console.log(new RegExp("a+b+c"));
// Résultat attendu : /a+b+c/

console.log(new RegExp("a+b+c").toString());
// Résultat attendu : "/a+b+c/"

console.log(new RegExp("bar", "g").toString());
// Résultat attendu : "/bar/g"

console.log(new RegExp("\n", "g").toString());
// Résultat attendu : "/\n/g"

console.log(new RegExp("\\n", "g").toString());
// Résultat attendu : "/\n/g"
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant l'objet donné.

## Description

L'objet {{JSxRef("RegExp")}} surcharge la méthode `toString()` de l'objet {{JSxRef("Object")}}. Il n'hérite donc pas de {{JSxRef("Object.prototype.toString()")}}. Pour les objets {{JSxRef("RegExp")}}, la méthode `toString()` retourne une représentation de l'expression rationnelle sous la forme d'une chaîne de caractères.

En pratique, elle lit les propriétés [`source`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) et [`flags`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) de l'expression rationnelle et retourne une chaîne de caractères sous la forme `/source/flags`. La valeur de retour de `toString()` est garantie d'être un littéral d'expression rationnelle analysable, bien qu'elle puisse ne pas être exactement le même texte que celui défini à l'origine pour l'expression rationnelle (par exemple, les indicateurs peuvent être réordonnés).

## Exemples

### Utiliser `toString()`

L'exemple qui suit affiche la chaîne de caractères correspondant à la valeur de l'objet {{JSxRef("RegExp")}}&nbsp;:

```js
const maRegExp = new RegExp("a+b+c");
console.log(maRegExp.toString()); // affiche "/a+b+c/"

const toto = new RegExp("truc", "g");
console.log(toto.toString()); // affiche "/truc/g"
```

### Expressions rationnelles vides et l'échappement

Puisque `toString()` accède à la propriété [`source`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source), une expression rationnelle vide retourne la chaîne de caractères `"/(?:)/"`, et les fins de ligne telles que `\n` sont échappées. Cela fait en sorte que la valeur retournée est toujours un littéral d'expression rationnelle valide.

```js
new RegExp().toString(); // "/(?:)/"

new RegExp("\n").toString() === "/\\n/"; // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.toString()")}}
