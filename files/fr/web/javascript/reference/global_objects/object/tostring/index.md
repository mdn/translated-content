---
title: Object.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toString
---

{{JSRef}}

La méthode **`toString()`** renvoie une chaîne de caractères représentant l'objet.

{{EmbedInteractiveExample("pages/js/object-prototype-tostring.html")}}

## Syntaxe

```js
obj.toString();
```

### Valeur de retour

Une chaîne de caractères représentant l'objet.

## Description

Chaque object possède une méthode `toString()` qui est appelée de façon automatique à chaque fois que l'objet doit être représenté sous forme de texte ou à chaque fois qu'on utilise un objet et que la valeur attendue est une chaîne de caractères. Par défaut, chaque objet qui descend d'`Object` hérite de la méthode `toString()`. Si cette méthode n'est pas surchargée, `toString()` renvoie "\[object _type_]", où `type` est le type de l'objet. Par exemple :

```js
var o = new Object();
o.toString(); // renvoie [object Object]
```

> **Note :** À partir de JavaScript 1.8.5 `toString()`, lorsqu'elle est appelée sur {{jsxref("null")}} renvoie `[object Null]`, et lorsqu'elle est appelée sur {{jsxref("undefined")}} renvoie `[object Undefined]`, ce qui est conforme à ECMAScript 5 et aux errata qui ont suivis. Voir l'exemple ci-après [Utiliser `toString` pour détecter le type d'un objet](#detect).

## Exemples

### Surcharger la méthode `toString()` par défaut

Il est possible de surcharger la méthode `toString()`. La méthode `toString()` ne prend pas d'argument et doit renvoyer une chaîne de caractères. La méthode `toString()` peut renvoyer n'importe quelle valeur mais elle sera plus pertinente si elle renvoie des informations sur l'objet courant.

Le code qui suit définit un type d'objet `Chien` et instancie `monChien`, qui est de type `Chien` :

```js
function Chien(nom, race, couleur, sexe) {
  this.nom = nom;
  this.race = race;
  this.couleur = couleur;
  this.sexe = sexe;
}

monChien = new Chien("Gabby", "Labrador", "chocolat", "femelle");
```

Si on appelle la méthode `toString()` sur cet objet, on aura le résultat suivant (provenant de la méthode originale, héritée d'{{jsxref("Object")}}) :

```js
monChien.toString(); // renvoie [object Object]
```

Dans le code qui suit, on surcharge la méthode `toString()` avec `chienToString()`. Cette méthode produit une chaîne qui contient l'ensemble des propriétés (race, couleur, sexe, nom) de l'objet :

```js
Chien.prototype.toString = function chienToString() {
  var ret =
    "Le chien " +
    this.nom +
    " est un " +
    this.race +
    " " +
    this.sexe +
    " " +
    this.couleur;
  return ret;
};
```

En utilisant la fonction ci-avant, à chaque fois que `monChien` sera utilisé là où on attend une chaîne, le moteur JavaScript appellera automatique la fonction `chienToString()` qui renverra la chaîne suivante :

```js
Le chien Gabby est un labrador femelle chocolat.
```

### Utiliser `toString()` pour détecter le type d'un objet

`toString()` peut être utilisée pour tous les objets afin d'obtenir son type. Pour utiliser `Object.prototype.toString()` avec n'importe quel objet, il sera nécessaire d'appeler {{jsxref("Function.prototype.call()")}} ou {{jsxref("Function.prototype.apply()")}} (pour éviter les versions surchargées).

```js
var toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]

// Depuis JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("Symbol.toPrimitive")}}
