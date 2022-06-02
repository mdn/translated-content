---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
tags:
  - Chaîne
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/String/slice
original_slug: Web/JavaScript/Reference/Objets_globaux/String/slice
---
{{JSRef}}

La méthode **`slice()`** extrait une section d'une chaine de caractères et la retourne comme une nouvelle chaine de caractères. La chaîne de caractères courante n'est pas modifiée.

{{EmbedInteractiveExample("pages/js/string-slice.html")}}

## Syntaxe

```js
chn.slice(indiceDebut[, indiceFin])
```

### Paramètres

- `indiceDebut`
  - : L'indice base 0 auquel commencer l'extraction. Si négatif, il est traité comme (`longueurSource + indiceDebut`) où `longueurSource` est la longueur de la chaine de caractères (par exemple, si `indiceDebut` est -3, il sera traité comme `longueurSource - 3`). Si `indiceDebut` est supérieur à la longueur de la chaîne, `slice()` renvoie une chaîne vide.
- `indiceFin`
  - : Paramètre optionnel. Un indice base 0 _avant_ lequel terminer l'extraction. Le caractère à cet indice ne sera pas inclus. Si `indiceFin` est absent, `slice()` extraira jusqu'à la fin de la chaine de caractères. Si négatif, il sera traité comme (`longueurSource + indiceFin`) où `longueurSource` est la longueur de la chaine de caractères (par exemple s'il vaut `-3`, il sera traité comme `longueurSource - 3`)

### Valeur retournée

Une nouvelle chaîne de caractères contenant la section extraite de la chaîne.

## Description

`slice()` extrait le texte d'une chaine de caractères et retourne une nouvelle chaîne de caractères. Les changements au texte dans une chaine de caractères n'affectent pas l'autre chaîne.

`slice()` extrait jusqu'à `indiceFin`, mais sans l'inclure. Par exemple, `chn.slice(1, 4)` extrait du second caractère jusqu'au quatrième caractère (caractères d'indices 1, 2 et 3).

Par exemple, `chn.slice(2, -1)` extrait du troisième caractère jusqu'à l'avant-dernier caractère de la chaine de caractères.

## Exemples

### Utilisation de `slice()` pour créer une nouvelle chaîne de caractères

L'exemple suivant utilise `slice()` pour créer une nouvelle chaîne de caractères.

```js
var chn1 = 'Le matin est sur nous.', // la longueur de chn1 est de 22
    chn2 = chn1.slice(1, 8),
    chn3 = chn1.slice(3, -2),
    chn4 = chn1.slice(13),
    chn5 = chn1.slice(30);
console.log(chn2); // SORTIE : e matin
console.log(chn3); // SORTIE : matin est sur nou
console.log(chn4); // SORTIE : sur nous.
console.log(chn5); // SORTIE : ""
```

### Utilisation de `slice()` avec des indices négatifs

L'exemple suivant utilise `slice()` avec des indices négatifs.

```js
var chn = 'Le matin est sur nous.';
chn.slice(-3);     // retourne "us."
chn.slice(-3, -1); // retourne "us"
chn.slice(0, -1);  // retourne "Le matin est sur nous"
```

Dans l'exemple qui suit, on commence à chercher l'indice de début à partir de la fin de la chaîne avec l'argument `-11` et on utilise un indice de fin positif avec `16` :

```js
console.log(chn.slice(-11, 16)); // "st sur"
```

On utilise ensuite un indice de début positif (la recherche est effectuée depuis le début de la chaîne) et un indice de fin négatif pour parvenir au même résultat :

```js
console.log(chn.slice(10, -5)); // "st sur"
```

Enfin, on utilise deux indices négatifs : la position de début et la position de fin sont recherchées à parti de la fin de la chaîne :

```js
console.log(chn.slice(-11, -5)); // "st sur"
```

## Spécifications

| Spécification                                                                                                | Statut                       | Commentaire                                           |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée dans JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.13', 'String.prototype.slice')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.slice', 'String.prototype.slice')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.slice', 'String.prototype.slice')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.slice")}}

## Voir aussi

- {{jsxref("String.prototype.substr()")}} {{deprecated_inline}}
- {{jsxref("String.prototype.substring()")}}
- {{jsxref("Array.prototype.slice()")}}
