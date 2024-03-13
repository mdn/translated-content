---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
---

{{JSRef}}

La méthode **`slice()`** renvoie un objet tableau, contenant une copie superficielle (_shallow copy_) d'une portion du tableau d'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.

{{EmbedInteractiveExample("pages/js/array-slice.html")}}

## Syntaxe

```js
arr.slice();
arr.slice(début);
arr.slice(début, fin);
```

### Paramètres

- `début` {{optional_inline}}

  - : Indice (à partir de zéro) depuis lequel commencer l'extraction. S'il s'agit d'un indice négatif, `début` indique un décalage depuis la fin de la séquence. Par exemple, `slice(-2)` extrait les avant-dernier et dernier éléments dans la séquence.

    Si `début` est absent, `slice()` commencera depuis 0. Si `début` est supérieur à la taille du tableau, c'est un tableau vide qui sera renvoyé.

- `fin` {{optional_inline}}
  - : Indice (à partir de zéro) auquel arrêter l'extraction. `slice()` extrait jusqu'à cet indice, mais pas l'élément situé en `fin` lui-même. `slice(1,4)` extrait du deuxième au quatrième élément (les éléments d'indices 1, 2 et 3). S'il s'agit d'un indice négatif, `fin` indique un décalage depuis la fin de la séquence. `slice(2,-1)` extrait du troisième à l'avant-dernier élément dans la séquence. Si `fin` n'est pas fourni, `slice()` extraira jusqu'à la fin de la séquence (`arr.length`). Si `fin` est supérieur à la longueur de la séquence, `slice()` fera une extraction jusqu'à la fin de la séquence.

### Valeur de retour

Un nouveau tableau contenant les éléments extraits.

## Description

`slice()` ne modifie pas le tableau original, mais renvoie une nouvelle copie du tableau (_shallow copy_ — copie superficielle) dont les éléments sont des copies des éléments extraits du tableau original. Les éléments du tableau original sont copiés dans le nouveau tableau de la manière suivante&nbsp;:

- Pour les références à des objets (et non les objets eux-mêmes), `slice()` copie ces références dans le nouveau tableau. Tant l'original que le nouveau tableau font référence au même objet. Si un objet référencé est modifié, ces changements sont visibles tant pour le nouveau que pour l'ancien tableau.
- Pour les chaines de caractères, les nombres et les booléens, `slice()` copie ces chaines de caractères, ces nombres et ces valeurs booléennes dans le nouveau tableau. Les modifications sur ces chaînes, nombres ou booléens dans l'un des tableaux n'affectent pas l'autre tableau (NB : lorsque l'on parle de chaine de caractères, de nombre ou de booléen ici, on parle exclusivement de leur _type primitif_, pas des _objets_ {{jsxref("String")}}, {{jsxref("Number")}} ou {{jsxref("Boolean")}} — voir par exemple [différences entre objet String et type primitif pour les chaines de caractères](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String#Les_différences_entre_les_objets_String_et_le_type_primitif_pour_les_chaînes_de_caractères)).

Si un nouvel élément est ajouté à l'un ou l'autre tableau, le second n'est pas affecté.

## Exemples

### Renvoyer un fragment d'un tableau existant

```js
var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
var agrumes = fruits.slice(1, 3);

// fruits vaut --> ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
// agrumes vaut --> ["Orange", "Citron"]
```

### Utiliser `slice()`

Dans l'exemple qui suit, `slice()` crée un nouveau tableau, `nouvelleVoiture`, à partir de `maVoiture`. Chacun d'entre eux contient une référence à l'objet `maHonda`. Lorsque la couleur de `maHonda` est changée en bordeaux, les deux tableaux reflètent ce changement.

```js
// Avec slice, crée nouvelleVoiture depuis maVoiture
var maHonda = { couleur&nbsp;: "rouge", roues&nbsp;: 4, moteur&nbsp;: { cylindres&nbsp;: 4, capacité&nbsp;: 2.2 } };
var maVoiture = [maHonda, 2, "excellente condition", "achetée en 1997"];
var nouvelleVoiture = maVoiture.slice(0, 2);

// Affiche les valeurs de maVoiture, nouvelleVoiture et la couleur de maHonda
// référencées depuis chacun des tableaux.
console.log("maVoiture = " + JSON.stringify(maVoiture));
console.log("nouvelleVoiture = " + JSON.stringify(nouvelleVoiture));
console.log("maVoiture[0].couleur = " + maVoiture[0].couleur);
console.log("nouvelleVoiture[0].couleur = " + nouvelleVoiture[0].couleur);

// Change la couleur de maHonda.
maHonda.couleur = "bordeaux";
console.log("La nouvelle couleur de ma Honda est " + maHonda.couleur);

// Affiche la couleur de maHonda référencées depuis les deux tableaux.
console.log("maVoiture[0].couleur = " + maVoiture[0].couleur);
console.log("nouvelleVoiture[0].couleur = " + nouvelleVoiture[0].couleur);
```

Ce script affichera&nbsp;:

```js
maVoiture = [{couleur:"rouge", roues:4, moteur:{cylindres:4, capacité:2.2}}, 2,
             "excellente condition", "achetée en 1997"]
nouvelleVoiture = [{couleur:"rouge", roues:4, moteur:{cylindres:4, capacité:2.2}}, 2]
maVoiture[0].couleur = rouge
nouvelleVoiture[0].couleur = rouge
La nouvelle couleur de ma Honda est bordeaux
maVoiture[0].couleur = bordeaux
nouvelleVoiture[0].couleur = bordeaux
```

## Utilisation avec les objets similaires aux tableaux

La méthode `slice()` peut aussi être appelée pour convertir des objets/collections similaires à des tableaux, en un nouveau tableau. L'objet {{jsxref("Fonctions/arguments", "arguments")}} d'une fonction est un exemple d'objet similaire à un tableau.

```js
function list() {
  return Array.prototype.slice.call(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

Il est possible de lier avec la fonction `call` de {{jsxref("Function.prototype")}} et on peut effectuer la réduction avec `[].slice.call(arguments)` plutôt qu'avec `Array.prototype.slice.call`. Voici comment on peut simplifier avec {{jsxref("Function.prototype.bind", "bind")}} :

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments, 0);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Array.prototype.splice()")}}
