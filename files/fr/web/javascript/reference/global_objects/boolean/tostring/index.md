---
title: "Boolean : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des valeurs {{JSxRef("Boolean")}} retourne une chaîne de caractères représentant la valeur booléenne spécifiée.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Boolean.prototype.toString()")}}

```js interactive-example
const flag1 = new Boolean(true);

console.log(flag1.toString());
// Sortie attendue : "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// Sortie attendue : "true"
```

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères qui représente l'objet {{JSxRef("Boolean")}}.

## Description

L'objet {{JSxRef("Boolean")}} surcharge la méthode `toString` de {{JSxRef("Object")}}&nbsp;; il n'hérite pas de
{{JSxRef("Object.prototype.toString()")}}. Pour les valeurs de type `Boolean`, la méthode `toString` retourne une représentation sous forme de chaîne de caractères de la valeur booléenne, qui est soit `"true"` soit `"false"`.

La méthode `toString()` exige que sa valeur `this` soit une valeur primitive ou un objet enveloppe `Boolean`. Elle lève une exception {{JSxRef("TypeError")}} pour d'autres valeurs de `this` sans tenter de les convertir en booléen.

Parce que `Boolean` ne possède pas de méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), JavaScript appelle automatiquement la méthode `toString()` lorsqu'un _objet_ `Boolean` est utilisé dans un contexte où une chaîne de caractères est attendue, comme dans un [littéral de gabarit](/fr/docs/Web/JavaScript/Reference/Template_literals). Cependant, les valeurs _primitives_ booléennes n'utilisent pas la méthode `toString()` pour être [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères) — elles sont directement converties en utilisant le même algorithme que l'implémentation initiale de `toString()`.

```js
Boolean.prototype.toString = () => "Surchargé";
console.log(`${true}`); // "true"
console.log(`${new Boolean(true)}`); // "Surchargé"
```

## Exemples

### Utiliser `toString()`

Dans ce code, `flag.toString()` retourne `"true"`&nbsp;:

```js
const flag = new Boolean(true);
console.log(flag.toString()); // "true"
console.log(false.toString()); // "false"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.toString()")}}
