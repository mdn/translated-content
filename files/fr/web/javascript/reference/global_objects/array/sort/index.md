---
title: "Array : méthode sort()"
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/Array/sort
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`sort()`** des instances de {{JSxRef("Array")}} trie les éléments d'un tableau _[en place](https://fr.wikipedia.org/wiki/Algorithme_en_place)_ et retourne la référence vers ce même tableau, désormais trié. L'ordre de tri par défaut est croissant, basé sur la conversion des éléments en chaînes de caractères, puis la comparaison de leurs séquences d'unités de code UTF-16.

La complexité temporelle et spatiale du tri n'est pas garantie, car elle dépend de l'implémentation.

Pour trier les éléments d'un tableau sans modifier le tableau original, utilisez {{JSxRef("Array/toSorted", "toSorted()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.sort()")}}

```js interactive-example
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Résultat attendu : Array ["Dec", "Feb", "Jan", "March"]

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);
// Résultat attendu : Array [1, 100000, 21, 30, 4]
```

## Syntaxe

```js-nolint
sort()
sort(compareFn)
```

### Paramètres

- `compareFn` {{Optional_Inline}}
  - : Une fonction qui détermine l'ordre des éléments. La fonction est appelée avec les arguments suivants&nbsp;:
    - `a`
      - : Le premier élément à comparer. Ne sera jamais `undefined`.
    - `b`
      - : Le second élément à comparer. Ne sera jamais `undefined`.

    Elle doit retourner un nombre où&nbsp;:
    - Une valeur négative indique que `a` doit précéder `b`.
    - Une valeur positive indique que `a` doit suivre `b`.
    - Zéro ou `NaN` indique que `a` et `b` sont considérés comme égaux.

    Pour s'en souvenir, rappelez-vous que `(a, b) => a - b` trie les nombres par ordre croissant.

    Si ce paramètre est omis, les éléments du tableau sont convertis en chaînes de caractères, puis triés selon la valeur du point de code Unicode de chaque caractère.

### Valeur de retour

La référence vers le tableau d'origine, désormais trié. Notez que le tableau est trié _[en place](https://fr.wikipedia.org/wiki/Algorithme_en_place)_, aucune copie n'est réalisée.

## Description

Si `compareFn` n'est pas fourni, tous les éléments du tableau qui ne valent pas `undefined` sont triés en les convertissant en chaînes de caractères et en comparant ces chaînes selon l'ordre des unités de code UTF-16. Par exemple, «&nbsp;banane&nbsp;» sera trié avant «&nbsp;cerise&nbsp;». Dans un tri numérique, 9 sera trié avant 80, mais comme les nombres sont convertis en chaînes de caractères, «&nbsp;80&nbsp;» arrive avant «&nbsp;9&nbsp;» selon l'ordre Unicode. Tous les éléments valant `undefined` sont placés à la fin du tableau.

La méthode `sort()` préserve les cases vides. Si le tableau source est un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), les cases vides sont déplacées à la fin du tableau, et arrivent toujours après tous les `undefined`.

> [!NOTE]
> En UTF-16, les caractères Unicode au-dessus de `\uFFFF` sont encodés avec deux unités de code _surrogates_, de l'intervalle `\uD800` - `\uDFFF`. La valeur de chaque unité de code est prise séparément en compte pour la comparaison. Ainsi, le caractère formé par la paire _surrogate_ `\uD855\uDE51` sera trié avant le caractère `\uFF3A`.

Si `compareFn` est fourni, tous les éléments du tableau qui ne valent pas `undefined` sont triés selon la valeur de retour de la fonction de comparaison (tous les éléments `undefined` sont placés à la fin du tableau, sans appel à `compareFn`).

| Valeur de retour de `compareFn(a, b)` | Ordre de tri                             |
| ------------------------------------- | ---------------------------------------- |
| > 0                                   | trie `a` après `b`, par exemple `[b, a]` |
| < 0                                   | trie `a` avant `b`, par exemple `[a, b]` |
| === 0                                 | conserve l'ordre d'origine de `a` et `b` |

Ainsi, la fonction de comparaison a la forme suivante&nbsp;:

```js-nolint
function compareFn(a, b) {
  if (a est inférieur à b selon un critère de tri) {
    return -1;
  } else if (a est supérieur à b selon le critère de tri) {
    return 1;
  }
  // a doit être égal à b
  return 0;
}
```

Plus formellement, le comparateur doit respecter les propriétés suivantes pour garantir un tri correct&nbsp;:

- _Pur_&nbsp;: Le comparateur ne modifie pas les objets comparés ni aucun état externe. (Ceci est important car il n'y a aucune garantie sur _quand_ et _comment_ le comparateur sera appelé, donc chaque appel ne doit produire aucun effet visible à l'extérieur.)
- _Stable_&nbsp;: Le comparateur retourne le même résultat pour la même paire d'entrées.
- _Réflexif_&nbsp;: `compareFn(a, a) === 0`.
- _Antisymétrique_&nbsp;: `compareFn(a, b)` et `compareFn(b, a)` doivent être tous deux `0` ou avoir des signes opposés.
- _Transitif_&nbsp;: Si `compareFn(a, b)` et `compareFn(b, c)` sont tous deux positifs, nuls ou négatifs, alors `compareFn(a, c)` a la même positivité que les deux précédents.

Un comparateur respectant les contraintes ci-dessus pourra toujours retourner `1`, `0` et `-1`, ou retourner systématiquement `0`. Par exemple, si un comparateur ne retourne que `1` et `0`, ou seulement `0` et `-1`, il ne pourra pas trier correctement car l'_antisymétrie_ est rompue. Un comparateur qui retourne toujours `0` ne modifiera pas le tableau, mais reste fiable.

Le comparateur lexicographique par défaut respecte toutes les contraintes ci-dessus.

Pour comparer des nombres plutôt que des chaînes, la fonction de comparaison peut soustraire `b` à `a`. La fonction suivante triera le tableau par ordre croissant (si le tableau ne contient pas `NaN`)&nbsp;:

```js
function compareNombres(a, b) {
  return a - b;
}
```

La méthode `sort()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_génériques_de_tableau). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières. Bien que les chaînes de caractères soient aussi assimilables à des tableaux, cette méthode ne doit pas être appliquée sur elles, car les chaînes sont immuables.

## Exemples

### Création, affichage et tri d'un tableau

L'exemple suivant crée quatre tableaux et affiche le tableau original, puis les tableaux triés. Les tableaux numériques sont triés sans fonction de comparaison, puis triés avec une fonction de comparaison.

```js
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
```

### Tri d'un tableau d'objets

On peut trier un tableau d'objets en comparant la valeur de l'une de leurs propriétés.

```js
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// trier par valeur
items.sort((a, b) => a.value - b.value);

// trier par nom
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignorer les majuscules/minuscules
  const nameB = b.name.toUpperCase(); // ignorer les majuscules/minuscules
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // les noms sont égaux
  return 0;
});
```

### Tri de chaînes de caractères non ASCII

Pour trier des chaînes contenant des caractères non {{Glossary("ASCII")}}, c'est-à-dire des caractères accentués (e, é, è, a, ä, etc.) ou des chaînes dans d'autres langues que l'anglais, utilisez {{JSxRef("String.prototype.localeCompare()")}}. Cette fonction permet de comparer ces caractères afin qu'ils apparaissent dans le bon ordre.

```js
const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
items.sort((a, b) => a.localeCompare(b));

// items vaut ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### Tri avec map

La fonction `compareFn` peut être appelée plusieurs fois par élément du tableau. Selon la nature de `compareFn`, cela peut entraîner un surcoût important. Plus la fonction de comparaison est complexe et plus le tableau est grand, plus il peut être efficace d'utiliser [`map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map) pour le tri. L'idée est de parcourir le tableau une fois pour extraire les valeurs utilisées pour le tri dans un tableau temporaire, de trier ce tableau temporaire, puis de parcourir ce tableau temporaire pour obtenir l'ordre souhaité.

```js
// le tableau à trier
const data = ["delta", "alpha", "charlie", "bravo"];

// le tableau temporaire contient les objets avec la position et la valeur de tri
const mapped = data.map((v, i) => ({ i, value: someSlowOperation(v) }));

// tri du tableau temporaire contenant les valeurs réduites
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

const result = mapped.map((v) => data[v.i]);
```

Il existe une bibliothèque open source appelée [mapsort <sup>(angl.)</sup>](https://github.com/Pimm/mapsort) qui applique cette approche.

### `sort()` retourne la référence du même tableau

La méthode `sort()` retourne une référence vers le tableau d'origine, donc toute modification du tableau retourné modifie également le tableau d'origine.

```js
const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort((a, b) => a - b);
// numbers et sorted valent tous deux [1, 1, 3, 4, 5]
sorted[0] = 10;
console.log(numbers[0]); // 10
```

Si vous souhaitez que `sort()` ne modifie pas le tableau d'origine, mais retourne un tableau [copié superficiellement](/fr/docs/Glossary/Shallow_copy) comme d'autres méthodes de tableau (par exemple, [`map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)), utilisez la méthode {{JSxRef("Array/toSorted", "toSorted()")}}. Vous pouvez aussi faire une copie superficielle avant d'appeler `sort()`, en utilisant la [syntaxe de l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ou [`Array.from()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```js
const numbers = [3, 1, 4, 1, 5];
// [...numbers] crée une copie superficielle, donc sort() ne modifie pas l'original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
console.log(numbers[0]); // 3
```

### Stabilité du tri

Depuis la version 10 (ou ECMAScript 2019), la spécification impose que `Array.prototype.sort` soit stable.

Par exemple, supposons que vous ayez une liste d'élèves avec leurs notes. Notez que la liste d'élèves est déjà pré-triée par nom par ordre alphabétique&nbsp;:

```js
const students = [
  { name: "Alex", grade: 15 },
  { name: "Devlin", grade: 15 },
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
];
```

Après avoir trié ce tableau par la propriété `grade` par ordre croissant&nbsp;:

```js
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
```

La variable `students` aura alors la valeur suivante&nbsp;:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // ordre d'origine conservé pour les mêmes notes (tri stable)
  { name: "Devlin", grade: 15 }, // ordre d'origine conservé pour les mêmes notes (tri stable)
];
```

Il est important de noter que les élèves ayant la même note (par exemple, Alex et Devlin) restent dans le même ordre qu'avant l'appel à sort. C'est ce que garantit un algorithme de tri stable.

Avant la version 10 (ou ECMAScript 2019), la stabilité du tri n'était pas garantie, ce qui pouvait donner&nbsp;:

```js
[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // ordre d'origine non conservé
  { name: "Alex", grade: 15 }, // ordre d'origine non conservé
];
```

### Tri avec un comparateur mal formé

Si une fonction de comparaison ne respecte pas toutes les règles de pureté, stabilité, réflexivité, antisymétrie et transitivité, comme expliqué dans la [description](#description), le comportement du programme n'est pas défini.

Par exemple&nbsp;:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? 1 : 0);
arr.sort(compareFn);
```

La fonction `compareFn` ici n'est pas bien formée, car elle ne respecte pas l'antisymétrie&nbsp;: si `a > b`, elle retourne `1`&nbsp;; mais en inversant `a` et `b`, elle retourne `0` au lieu d'une valeur négative. Ainsi, le tableau résultant sera différent selon les moteurs JavaScript. Par exemple, V8 (utilisé par Chrome, Node.js, etc.) et JavaScriptCore (utilisé par Safari) ne trieront pas le tableau et retourneront `[3, 1, 4, 1, 5, 9]`, tandis que SpiderMonkey (utilisé par Firefox) retournera le tableau trié par ordre croissant, soit `[1, 1, 3, 4, 5, 9]`.

Cependant, si la fonction `compareFn` est modifiée pour retourner `-1` ou `0`&nbsp;:

```js
const arr = [3, 1, 4, 1, 5, 9];
const compareFn = (a, b) => (a > b ? -1 : 0);
arr.sort(compareFn);
```

V8 et JavaScriptCore le trient alors par ordre décroissant, comme `[9, 5, 4, 3, 1, 1]`, tandis que SpiderMonkey le retourne tel quel&nbsp;: `[3, 1, 4, 1, 5, 9]`.

En raison de cette incohérence d'implémentation, il est toujours conseillé de s'assurer que votre comparateur est bien formé en respectant les cinq contraintes.

### Utilisation de `sort()` sur des tableaux creux

Les cases vides sont déplacées à la fin du tableau.

```js
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
```

### Appel de `sort()` sur des objets qui ne sont pas des tableaux

La méthode `sort()` lit la propriété `length` de `this`. Elle collecte ensuite toutes les propriétés à clé entière existantes dans l'intervalle de `0` à `length - 1`, les trie, puis les réécrit. S'il manque des propriétés dans l'intervalle, les propriétés finales correspondantes sont [supprimées](/fr/docs/Web/JavaScript/Reference/Operators/delete), comme si les propriétés inexistantes étaient triées vers la fin.

```js
const objetSimilaireTableau = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.sort.call(objetSimilaireTableau));
// { '0': 4, '1': 5, length: 3, unrelated: 'foo' }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.reverse()")}}
- La méthode {{JSxRef("Array.prototype.toSorted()")}}
- La méthode {{JSxRef("String.prototype.localeCompare()")}}
- La méthode {{JSxRef("TypedArray.prototype.sort()")}}
- [Prothèse d'émulation de `Array.prototype.sort` avec un comportement moderne (tri stable) dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Getting things sorted in V8 <sup>(angl.)</sup>](https://v8.dev/blog/array-sort) sur v8.dev (2018)
- [Tri stable de `Array.prototype.sort` <sup>(angl.)</sup>](https://v8.dev/features/stable-sort) sur v8.dev (2019)
- [Stabilité de `Array.prototype.sort` <sup>(angl.)</sup>](https://mathiasbynens.be/demo/sort-stability) par Mathias Bynens
