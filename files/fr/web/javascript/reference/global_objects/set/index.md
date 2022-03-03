---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set
original_slug: Web/JavaScript/Reference/Objets_globaux/Set
---
{{JSRef}}

L'objet **`Set`** (Ensemble en français) permet de stocker des valeurs _uniques_, de n'importe quel type, que ce soit des valeurs d'un {{Glossary("Primitive", "type primitif")}} ou des objets.

{{EmbedInteractiveExample("pages/js/set-prototype-constructor.html")}}

## Syntaxe

     new Set([itérable]);

### Paramètres

- `itérable`
  - : Paramètre optionnel. Si un objet [itérable](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) est donné comme argument, l'ensemble de ses éléments sera ajouté au nouvel objet Set. Si {{jsxref("null")}} est fourni comme argument ou qu'aucun argument n'est fourni, il sera traité comme {{jsxref("undefined")}}.

### Valeur de retour

Un nouvel objet `Set`.

## Description

Les objets `Set` sont des ensembles de valeurs. Il est possible d'itérer sur les éléments contenus dans l'objet `Set` dans leur ordre d'insertion. **Une valeur donnée ne peut apparaître qu'une seule fois par `Set`.**

### Égalité des valeurs

Chaque valeur d'un `Set` doit être unique, il faut donc tester l'égalité des valeurs contenues. Cette égalité n'est pas la même que celle de l'opérateur ===. Notamment, pour les objets `Set`, `+0` (qui, selon l'égalité stricte, est égal à `-0`) et `-0` sont des valeurs différentes. Cela a toutefois été changé avec la dernière version d'ECMAScript 2015 (ES6). Voir le tableau de compatibilité ci-après quant à la prise en charge de l'égalité des clés pour `0` et `-0`.

{{jsxref("NaN")}} and {{jsxref("undefined")}} peuvent être enregistrés dans un objet `Set`. `NaN` est considéré comme `NaN` (bien que `NaN !== NaN`).

## Propriétés

- `Set.length`

  - : La valeur de la propriété `length` est 0.

    > **Note :** Pour compter le nombre d'éléments d'un objet `Set`, on utilisera {{jsxref("Set.prototype.size")}}.

- {{jsxref("Set.@@species", "get Set[@@species]")}}
  - : Le constructeur utilisé pour créer des objets dérivés.
- {{jsxref("Set.prototype")}}
  - : Représente le prototype du constructeur `Set`. Cela permet d'ajouter des propriétés à tous les objets `Set`.

## Instances de `Set`

Toutes les instances de `Set` héritent de {{jsxref("Set.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Set/prototype','Propriétés')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Set/prototype','Méthodes')}}

## Exemples

### Utiliser l'objet `Set`

```js
var monSet = new Set();

monSet.add(1);         // { 1 }
monSet.add(5);         // { 1, 5 }
monSet.add("du texte");// { 1, 5, "du texte" }

monSet.has(1); // true
monSet.has(3); // false, 3 n'a pas été ajouté à l'ensemble
monSet.has(5);              // true
monSet.has(Math.sqrt(25));  // true
monSet.has("Du Texte".toLowerCase()); // true

monSet.size; // 3

monSet.delete(5); // retire 5 du set
monSet.has(5);    // false, 5 a été retiré de l'ensemble

monSet.size; // 2, on a retiré une valeur de l'ensemble
console.log(monSet); // Set [ 1, "du texte" ]
```

### Itérer sur des ensembles (`Set`)

```js
// On itère sur les différents éléments de l'ensemble
// ici on affiche : 1, "du texte"
for (let item of monSet) console.log(item);

// ici on affiche les clés de l'ensemble : 1, "du texte"
for (let item of monSet.keys()) console.log(item);

// ici on affiche les valeurs de l'ensemble : 1, "du texte"
for (let item of monSet.values()) console.log(item);

// ici on affiche les clés de l'ensemble : 1, "du texte"
//(ici, les clés et les valeurs sont les mêmes)
for (let [clé, valeur] of monSet.entries()) console.log(clé);

// Une méthode de conversion avec Array.from
var monTableau = Array.from(monSet);    // [1, "du texte"]

// Cela fonctionnera également dans un document HTML
monSet.add(document.body);
monSet.has(document.querySelector("body")); // true

// convertir un tableau (Array) en ensemble (Set) et vice versa
monSet2 = new Set([1,2,3,4]);
monSet2.size; // 4
[...monSet2]; // [1,2,3,4]

// L'intersection peut être calculée avec
var intersection = new Set([...set1].filter(x => set2.has(x)));

// La différence pourra être simulée avec
var différence = new Set([...set1].filter(x => !set2.has(x)));

// On peut itérer sur les entrées d'un ensemble avec forEach
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
```

### Implémenter des opérations ensemblistes

```js
function isSuperset(set, subset) {
  for (var elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  var union = new Set(setA);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
}

function intersection(setA, setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}

function difference (setA, setB) {
  var difference = new Set(setA);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

// Exemples
var setA = new Set([1,2,3,4]),
    setB = new Set([2,3]),
    setC = new Set([3,4,5,6]);

isSuperset(setA, setB);   // => true
union(setA, setC);        // => Set [1, 2, 3, 4, 5, 6]
intersection(setA, setC); // => Set [3, 4]
difference(setA, setC);   // => Set [1, 2]
```

### Les relations avec les objets `Array`

```js
var monTableau = ["valeur1", "valeur2", "valeur3"];

// On peut utiliser le constructeur Set pour transformer un Array en Set
var monSet = new Set(monTableau);

monSet.has("valeur1"); // renvoie true

// Et utiliser l'opérateur de décomposition pour transformer un Set en Array.
console.log([...monSet]); // affichera la même chose que monTableau
```

### Les relations avec les objets `String`

    var maChaine = "CouCou";

    var monEnsemble = new Set(maChaine);
    // Set {"C","o","u" }
    monEnsemble.size; // 3

### Dédoublonner un tableau

```js
const nombres = [2,3,4,4,2,2,2,4,4,5,5,6,6,7,5,32,3,4,5];
console.log([...new Set(nombres)]);
// affichera [2, 3, 4, 5, 6, 7, 32]
```

## Spécifications

| Spécification                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-set-objects', 'Set')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-set-objects', 'Set')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Set")}}

## Voir aussi

- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
