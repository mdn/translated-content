---
title: String.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
---

{{JSRef}}

La méthode **`lastIndexOf()`** renvoie l'indice, dans la chaîne courante, de la dernière occurence de la valeur donnée en argument. Si cette sous-chaîne n'est pas trouvée, la méthode renvoie -1. La recherche s'effectue de la fin vers le début de la chaîne, à partir de `indiceDébut`.

{{EmbedInteractiveExample("pages/js/string-lastindexof.html")}}

## Syntaxe

```js
str.lastIndexOf(valeurRecherchée[, indiceDébut])
```

### Paramètres

- `valeurRecherchée`
  - : Une chaîne qu'on recherche dans la chaîne courante. Si ce paramètre n'est pas défini et que `indiceDébut` est utilisé, c'est ce dernier qui sera renvoyé par la fonction.
- `indiceDébut` {{optional_inline}}
  - : Paramètre optionnel. L'emplacement, dans la chaîne courante, à partir duquel effectuer la recherche (en partant de la fin de la chaîne et en remontant vers le début). Cela peut être n'importe quel entier. La valeur par défaut est `+Infinity`. Si `indiceDébut > str.length`, toute la chaîne sera parcourue. Si `indiceDébut < 0`, on aura le même comportement que si `indiceDébut` valait 0.

### Valeur de retour

L'indice de la dernière occurrence de la valeur indiquée, `-1` si elle n'est pas trouvée.

## Description

Les caractères d'une chaîne de caractères sont indexés de gauche à droite. L'indice du premier caractère vaut 0 et l'indice du dernier caractère vaut `maChaîne.length - 1`.

```js
"canal".lastIndexOf("a"); // renvoie 3
"canal".lastIndexOf("a", 2); // renvoie 1
"canal".lastIndexOf("a", 0); // renvoie -1
"canal".lastIndexOf("x"); // renvoie -1
"canal".lastIndexOf("c", -5); // renvoie 0
"canal".lastIndexOf("c", 0); // renvoie 0
"canal".lastIndexOf(""); // renvoie 5
"canal".lastIndexOf("", 2); // renvoie 2
```

> **Note :** `'abab'.lastIndexOf('ab', 2)` renvoie `2` et pas `0` car l'argument `indiceDébut` ne limite que le début de la correspondance recherchée ( qui est `'ab'`)

### Sensibilité à la casse

La méthode `lastIndexOf()` est sensible à la casse (une lettre en minuscule (i) est différente d'une lettre en majuscule (I)). Ainsi, le résultat de l'expression suivante sera -1 :

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // renvoie -1
```

## Exemples

Dans l'exemple suivant, on utilise {{jsxref("String.prototype.indexOf()", "indexOf()")}} et `lastIndexOf()` pour situer certaines valeurs dans la chaîne `"Brave new world"`.

```js
var maChaîne = "Brave new world";

console.log("Indice du premier w " + maChaîne.indexOf("w"));
// Affiche 8
console.log("Indice du dernier w " + maChaîne.lastIndexOf("w"));
// Affiche 10

console.log('Indice du premier "new" ' + maChaîne.indexOf("new"));
// Affiche 6
console.log('Indice du dernier "new" ' + maChaîne.lastIndexOf("new"));
// Affiche 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
