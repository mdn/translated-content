---
title: Array.prototype.splice()
slug: Web/JavaScript/Reference/Global_Objects/Array/splice
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/splice
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/splice
---
{{JSRef}}

La méthode **`splice()`** modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments [à même le tableau](https://en.wikipedia.org/wiki/In-place_algorithm).On peut ainsi vider ou remplacer une partie d'un tableau.

{{EmbedInteractiveExample("pages/js/array-splice.html")}}

## Syntaxe

```js
var tabElementsSupprimes = array.splice(début, nbASupprimer[, élem1[, élem2[, ...]]])
```

### Paramètres

- `début`
  - : L'indice à partir duquel commencer à changer le tableau (l'indice du premier élement étant `0`). Si sa valeur est supérieure à la longueur du tableau `array.length`, `début` est ramené à la longueur du tableau `array.length`. S'il est négatif, le changement commencera d'autant d'éléments à partir de la fin du tableau, c'est à dire à partir de l'index  `array.length + début`. Si `array.length + début` est inférieur à `0`, le changement commencera à l'index `0`.
- `nbASupprimer`
  - : Un entier indiquant le nombre d'anciens éléments à remplacer.
    Si ce paramètre est absent ou si sa valeur est supérieure ou égale à `array.length - début`, alors les éléments entre `début` et la fin du tableau seront supprimés. Si `nbASupprimer` vaut 0, aucun élément ne sera supprimé. Dans ce cas, il est nécessaire de spécifier au moins un nouvel élément.
- `élemN`
  - : Les éléments à ajouter au tableau à partir de `début`. Si vous ne spécifiez pas de nouvel élément, les anciens éléments seront simplement supprimés du tableau.

### Valeur de retour

Un tableau contenant les éléments supprimés. Si un seul élément est supprimé, un tableau contenant un unique élément est retourné.

## Description

Si vous spécifiez un nombre différent d'éléments à insérer et d'éléments à supprimer, le tableau aura une longueur différente après l'appel de la méthode.

## Exemples

### Utiliser `splice`

Le script suivant illustre l'utilisation de `splice` :

```js
var mesPoissons  = ["scalaire", "clown", "mandarin", "chirurgien"];

// supprime 0 élément à partir de l'index 2, et insère "tambour"
var enleves = mesPoissons.splice(2, 0, "tambour");
// mesPoissons est ["scalaire", "clown", "tambour", "mandarin", "chirurgien"]
// enleves est [], aucun élément supprimé

// supprime 1 élément à partir de l'index 3
enleves = mesPoissons.splice(3, 1);
// mesPoissons est ["scalaire", "clown", "tambour", "chirurgien"]
// enleves est ["mandarin"]

// supprime 1 élément à partir de l'index 2, et insère "trompette"
enleves = mesPoissons.splice(2, 1, "trompette");
// mesPoissons est ["scalaire", "clown", "trompette", "chirurgien"]
// enleves est ["tambour"]

// supprime 2 éléments à partir de l'index 0, et insère "perroquet", "anémone" et"bleu"
enleves = mesPoissons.splice(0, 2, "perroquet", "anémone", "bleu");
// mesPoissons est ["perroquet", "anémone", "bleu", "trompette", "chirurgien"]
// enleves est ["scalaire", "clown"]

// supprime 2 éléments à partir de l'indice 2
enleves = mesPoissons.splice(mesPoissons.length - 3, 2);
// mesPoissons est ["perroquet", "anémone", "chirurgien"]
// enleves est ["bleu", "trompette"]

var mesPoissons = ["perroquet", "anémone", "bleu", "trompette", "chirurgien"];
// on retire trois éléments à partir de l'indice 2
enleves = mesPoissons.splice(2);
// mesPoissons vaut ["perroquet", "anémone"]
// enleves vaut ["bleu", "trompette", "chirurgien"]

var mesAnimaux = ["cheval", "chien", "chat", "dauphin"];
enleves = mesAnimaux.splice(-2, 1);

// mesAnimaux vaut ["cheval", "chien", "dauphin"]
// enleves vaut ["chat"]
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array.prototype.splice', 'Array.prototype.splice')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.splice', 'Array.prototype.splice')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-15.4.4.12', 'Array.prototype.splice')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.splice")}}

## Voir aussi

- {{jsxref("Array.prototype.push", "push")}} / {{jsxref("Array.prototype.pop", "pop")}} pour ajouter/supprimer des éléments en fin de tableau
- {{jsxref("Array.prototype.unshift", "unshift")}} / {{jsxref("Array.prototype.shift", "shift")}} pour ajouter/supprimer des éléments en début de tableau
- {{jsxref("Array.prototype.concat", "concat")}} qui renvoie un nouveau tableau résultat de la concaténation d'un tableau avec un autre tableau ou d'autres valeurs
