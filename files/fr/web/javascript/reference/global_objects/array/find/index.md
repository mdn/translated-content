---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/find
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/find
---
{{JSRef}}

La méthode **`find()`** renvoie la **valeur** du **premier élément trouvé** dans le tableau qui respecte la condition donnée par la fonction de test passée en argument. Sinon, la valeur {{jsxref("undefined")}} est renvoyée.

{{EmbedInteractiveExample("pages/js/array-find.html")}}

Voir aussi la méthode {{jsxref("Array.findIndex", "findIndex()")}} qui renvoie l'**index** de l'élément trouvé et non sa valeur. Si on souhaite repérer la position d'un élément donné dans le tableau, on pourra utiliser {{jsxref("Array.prototype.indexOf()")}}. Si on souhaite déterminer si un tableau contient un élément donné, on pourra utiliser la méthode {{jsxref("Array.prototype.includes()")}}.

## Syntaxe

```js
arr.find(callback(element[, index[, tableau]])[, thisArg])
```

### Paramètres

- `callback`

  - : Fonction à exécuter sur chaque valeur du tableau, elle prend 3 arguments&nbsp;:

    - `element`
      - : L'élément actuellement traité dans le tableau.
    - `index`{{optional_inline}}
      - : L'index de l'élément actuellement traité dans le tableau
    - `array`{{optional_inline}}
      - : Le tableau pour lequel la méthode `find` a été appelée.

- `thisArg` {{optional_inline}}
  - : Ce paramètre est optionnel. Objet à utiliser en tant que `this` lorsque la fonction `callback` est exécutée.

### Valeur de retour

La valeur du premier élément du tableau qui réussit le test, sinon {{jsxref("undefined")}}.

## Description

La méthode `find` exécute la fonction `callback` une fois pour chaque élément présent dans le tableau jusqu'à ce qu'elle retourne une valeur vraie (qui peut être convertie en `true`). Si un élément est trouvé, `find` retourne immédiatement la valeur de l'élément. Autrement, `find` retourne `undefined`. La méthode `callback` est seulement appelée pour les index du tableau pour lesquels on dispose d'une valeur. Elle n'est pas appelée pour les index supprimés ou pour ceux qui n'ont pas de valeur.

La méthode `callback` est appelée avec trois arguments&nbsp;: la valeur de l'élément, l'index de l'élément, et l'objet correspondant au tableau traversé.

Si le paramètre `thisArg` est fourni à `find`, il sera utilisé comme le `this` pour chaque exécution de la fonction `callback`. S'il n'est pas fourni, alors {{jsxref("undefined")}} sera utilisé.

`find` ne modifie pas le tableau à partir duquel elle est appelée.

L'intervalle des éléments inspectés par `find` est défini avant la première exécution de `callback`. Les éléments ajoutés au tableau après l'appel à `find` ne seront pas inspectés par la fonction `callback`. Si un élément existant est modifié avant le passage du `callback`, alors la valeur traitée par le `callback` sera celle présente lors du passage de `find` sur son index. Les éléments supprimés ne seront pas traités.

## Exemples

### Trouver un objet dans un tableau grâce à une de ses propriétés

```js
const inventaire = [
  {nom: 'pommes', quantité: 2},
  {nom: 'bananes', quantité: 0},
  {nom: 'cerises', quantité: 5}
];

function estCerises(fruit) {
  return fruit.nom === 'cerises';
}

console.log(inventaire.find(estCerises));
// { nom: 'cerises', quantité: 5}
```

#### Utiliser les fonctions fléchées ES6/ES2015

```js
const inventaire = [
                     {nom: 'pommes', quantité: 2},
                     {nom: 'bananes', quantité: 0},
                     {nom: 'cerises', quantité: 5}
                   ];

const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
console.log(resultat);
// { nom: 'cerises', quantité: 5}
```

### Trouver un nombre premier dans un tableau

Dans l'exemple suivant, on cherche un nombre premier parmi les éléments d'un tableau (ou retourne `undefined` s'il n'y en a pas ).

```js
function estPremier(element, index, array) {
    let début = 2;
    while (début <= Math.sqrt(element)) {
        if (element % début ++ < 1) return false;
    }
    return (element > 1);
}

console.log( [4, 6, 8, 12].find(estPremier) ); // undefined, rien trouvé
console.log( [4, 5, 8, 12].find(estPremier) ); // 5
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires        |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.find', 'Array.prototype.find')}} | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-array.prototype.find', 'Array.prototype.find')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.find")}}

## Voir aussi

- {{jsxref("Array.prototype.findIndex()")}} – trouver et renvoyer un index
- {{jsxref("Array.prototype.includes()")}} – tester si une valeur existe dans le tableau
- {{jsxref("Array.prototype.filter()")}} – trouver tous les éléments correspondants
- {{jsxref("Array.prototype.every()")}} – tester l'ensemble des éléments d'un tableau
- {{jsxref("Array.prototype.some()")}} – tester si au moins un élément du tableau respecte un critère
