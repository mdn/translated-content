---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
translation_of: Web/JavaScript/Reference/Global_Objects/Array/at
browser-compat: javascript.builtins.Array.at
---
{{JSRef}}

La méthode **`at()`** prend un entier en argument et renvoie l'élément du tableau situé à cet indice. Des valeurs entières positives ou négatives peuvent être utilisées en argument. Dans ce dernier cas, la recherche est effectuée depuis la fin du tableau.

L'accès aux éléments d'un tableau en utilisant les crochets ne permet que d'utiliser des indices positifs&nbsp;: `array[0]` renverra le premier élément, `array[array.length-1]` renverra le dernier. Avec `array.at(-1)`, on peut avoir une écriture plus concise pour accéder au dernier élément. Voir les exemples ci-après.

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Syntaxe

```js
at(indice)
```

### Paramètres

- `indice`
  - : L'indice (c'est-à-dire la position) de l'élément du tableau qu'on souhaite récupérer. Il est possible d'utiliser des valeurs négatives pour récupérer un élément en comptant depuis la fin du tableau.

### Valeur de retour

L'élément du tableau situé à l'indice indiqué. Si aucune valeur ne peut être trouvé à l'indice donné, c'est [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) qui est renvoyé.

## Exemples

### Renvoyer la dernière valeur d'un tableau

L'exemple qui suit fournit une fonction qui renvoie le dernier élément trouvé dans un tableau.

```js
// Le tableau avec des éléments
const corbeille = ['pomme', 'banane', 'poiree'];

// Une fonction qui renvoie le dernier 
// élément d'un tableau
function dernierElem(arr) {
  return arr.at(-1);
}

// On récupère le dernier élément du
// tableau 'corbeille'
const item1 = dernierElem(corbeille);
console.log(item1);
// Affiche 'pear' dans la console

// On ajoute un élément au tableau
// 'corbeille'
corbeille.push('orange');
const item2 = dernierElem(corbeille);
console.log(item2);
// Affiche 'orange' dans la console
```

### Comparaison de méthodes

On compare ici différentes façons d'accéder à l'avant-dernier élément d'un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)). Bien que toutes les méthodes présentées ici soient valides et équivalentes, on pourra noter la concision et la lisibilité de la méthode `at()`.

```js
// Un tableau de valeurs
const couleurs = ['rouge', 'vert', 'bleu'];

// En utilisant la propriété length
const avecLength = couleurs[couleurs.length-2];
console.log(avecLength); 
// Affiche 'vert' dans la console

// En utilisant la méthode slice()
// qui renvoie un tableau
const avecSlice = couleurs.slice(-2, -1);
console.log(avecSlice[0]); 
// Affiche 'vert' dans la console

// En utilisant la méthode at()
const avecAt = couleurs.at(-2);
console.log(avecAt); 
// Affiche 'vert' dans la console
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Array.prototype.find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find) qui renvoie une valeur selon un test donné
- [`Array.prototype.includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) qui teste si une valeur existe dans le tableau
- [`Array.prototype.indexOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) qui renvoie l'indice d'un élément donné
- Prothèses d'émulation (<i lang="en">polyfills</i>)
  - [Celle de la proposition TC39](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
  - [Celle de `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
