---
title: "Array : méthode reduce()"
short-title: reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`reduce()`** des instances {{JSxRef("Array")}} exécute une fonction de rappel «&nbsp;de réduction&nbsp;» fournie par l'utilisateur·ice sur chaque élément du tableau, dans l'ordre, en transmettant la valeur retournée par le calcul précédent. Le résultat final de l'exécution du réducteur sur tous les éléments du tableau est une seule valeur.

La première fois que la fonction de rappel est exécutée, il n'y a pas de «&nbsp;valeur retournée par le calcul précédent&nbsp;». Si elle est fournie, une valeur initiale peut être utilisée à la place. Sinon, l'élément du tableau d'index 0 est utilisé comme valeur initiale et l'itération commence à l'élément suivant (index 1 au lieu de l'index 0).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.reduce()")}}

```js interactive-example
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Résultat attendu : 10
```

## Syntaxe

```js-nolint
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Paramètres

- `callbackFn`
  - : La fonction de rappel à exécuter pour chaque élément du tableau. Sa valeur de retour devient la valeur du paramètre `accumulator` lors de l'appel suivant de `callbackFn`. Pour le dernier appel, la valeur de retour devient la valeur retournée par `reduce()`. La fonction est appelée avec les arguments suivants&nbsp;:
    - `accumulator`
      - : La valeur résultant de l'appel précédent de `callbackFn`. Lors du premier appel, sa valeur est `initialValue` si ce dernier est défini&nbsp;; sinon, sa valeur est `array[0]`.
    - `currentValue`
      - : La valeur de l'élément courant. Lors du premier appel, sa valeur est `array[0]` si `initialValue` est défini&nbsp;; sinon, sa valeur est `array[1]`.
    - `currentIndex`
      - : L'index de `currentValue` dans le tableau. Lors du premier appel, sa valeur est `0` si `initialValue` est défini&nbsp;; sinon `1`.
    - `array`
      - : Le tableau sur lequel `reduce()` a été appelé.
- `initialValue` {{Optional_Inline}}
  - : La valeur à laquelle `accumulator` est initialisé lors du premier appel de la fonction de rappel.
    Si `initialValue` est défini, `callbackFn` commence à s'exécuter avec la première valeur du tableau comme `currentValue`.
    Si `initialValue` n'est pas défini, `accumulator` est initialisé à la première valeur du tableau, et `callbackFn` commence à s'exécuter avec la seconde valeur du tableau comme `currentValue`. Dans ce cas, si le tableau est vide (et qu'il n'y a donc pas de première valeur à retourner comme `accumulator`), une erreur est levée.

### Valeur de retour

La valeur qui résulte de l'exécution de la fonction de rappel «&nbsp;de réduction&nbsp;» sur l'ensemble du tableau jusqu'à la fin.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si le tableau ne contient aucun élément et que la valeur initiale n'est pas définie.

## Description

La méthode `reduce()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle exécute une fonction de rappel «&nbsp;de réduction&nbsp;» sur tous les éléments du tableau, dans l'ordre croissant des indices, et les accumule en une seule valeur. À chaque itération, la valeur retournée par `callbackFn` est transmise à nouveau à `callbackFn` lors de l'appel suivant en tant qu'`accumulator`. La dernière valeur de `accumulator` (c'est-à-dire la valeur retournée par `callbackFn` lors de la dernière itération du tableau) devient la valeur retournée par `reduce()`. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` n'est appelée que pour les indices du tableau qui ont des valeurs attribuées. Elle n'est pas appelée pour les cases vides dans un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

Contrairement aux autres [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives), `reduce()` n'accepte pas d'argument `thisArg`. `callbackFn` est toujours appelée avec la valeur `undefined` pour `this`, qui est remplacée par `globalThis` si `callbackFn` n'est pas en mode strict.

`reduce()` est un concept central de la [programmation fonctionnelle](https://fr.wikipedia.org/wiki/Programmation_fonctionnelle)&nbsp;: il n'est pas possible d'y modifier une valeur, donc pour accumuler toutes les valeurs d'un tableau, il faut retourner une nouvelle valeur d'accumulateur à chaque itération. Cette convention s'applique à `reduce()` en JavaScript&nbsp;: il convient d'utiliser [l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ou d'autres méthodes de copie pour créer de nouveaux tableaux et objets comme accumulateur, plutôt que de modifier l'existant. Si vous décidez de modifier l'accumulateur au lieu de le copier, veillez à toujours retourner l'objet modifié dans la fonction de rappel, sinon l'itération suivante recevra la valeur `undefined`. Cependant, copier l'accumulateur peut entraîner une utilisation accrue de la mémoire et une dégradation des performances&nbsp;: voir [Quand ne pas utiliser reduce()](#quand_ne_pas_utiliser_reduce) pour plus de détails. Dans ces cas, pour éviter de mauvaises performances et un code illisible, il est préférable d'utiliser une boucle `for` à la place.

La méthode `reduce()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

### Cas particuliers

Si le tableau ne contient qu'un seul élément (peu importe sa position) et qu'aucune `initialValue` n'est fournie, ou si `initialValue` est fournie mais que le tableau est vide, la valeur unique sera retournée _sans_ appeler `callbackFn`.

Si `initialValue` est fournie et que le tableau n'est pas vide, la méthode reduce appellera toujours la fonction de rappel en commençant à l'index 0.

Si `initialValue` n'est pas fournie, la méthode reduce se comporte différemment selon que la longueur du tableau est supérieure à 1, égale à 1 ou égale à 0, comme illustré dans l'exemple suivant&nbsp;:

```js
const getMax = (a, b) => Math.max(a, b);

// la fonction de rappel est appelée pour chaque élément du tableau à partir de l'index 0
[1, 100].reduce(getMax, 50); // 100
[50].reduce(getMax, 10); // 50

// la fonction de rappel est appelée une fois pour l'élément à l'index 1
[1, 100].reduce(getMax); // 100

// la fonction de rappel n'est pas appelée
[50].reduce(getMax); // 50
[].reduce(getMax, 1); // 1

[].reduce(getMax); // TypeError
```

## Exemples

### Fonctionnement de `reduce()` sans valeur initiale

Le code ci-dessous montre ce qu'il se passe si l'on appelle `reduce()` avec un tableau et sans valeur initiale.

```js
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
```

La fonction de rappel sera appelée quatre fois, avec les arguments et valeurs de retour suivants à chaque appel&nbsp;:

|                 | `accumulator` | `currentValue` | `index` | Valeur retournée |
| --------------- | ------------- | -------------- | ------- | ---------------- |
| Premier appel   | `15`          | `16`           | `1`     | `31`             |
| Deuxième appel  | `31`          | `17`           | `2`     | `48`             |
| Troisième appel | `48`          | `18`           | `3`     | `66`             |
| Quatrième appel | `66`          | `19`           | `4`     | `85`             |

Le paramètre `array` ne change jamais pendant le processus&nbsp;: il reste toujours `[15, 16, 17, 18, 19]`. La valeur retournée par `reduce()` sera celle du dernier appel de la fonction de rappel (`85`).

### Fonctionnement de `reduce()` avec une valeur initiale

Ici, on réduit le même tableau avec le même algorithme, mais en passant une `initialValue` de `10` comme second argument à `reduce()`&nbsp;:

```js
[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10,
);
```

La fonction de rappel sera appelée cinq fois, avec les arguments et valeurs de retour suivants à chaque appel&nbsp;:

|                 | `accumulator` | `currentValue` | `index` | Valeur retournée |
| --------------- | ------------- | -------------- | ------- | ---------------- |
| Premier appel   | `10`          | `15`           | `0`     | `25`             |
| Deuxième appel  | `25`          | `16`           | `1`     | `41`             |
| Troisième appel | `41`          | `17`           | `2`     | `58`             |
| Quatrième appel | `58`          | `18`           | `3`     | `76`             |
| Cinquième appel | `76`          | `19`           | `4`     | `95`             |

La valeur retournée par `reduce()` dans ce cas sera `95`.

### Additionner les valeurs d'un tableau d'objets

Pour additionner les valeurs contenues dans un tableau d'objets, il **faut** fournir une `initialValue` afin que chaque élément soit traité par la fonction.

```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

### Chaînage séquentiel de fonctions

La fonction `pipe` prend une séquence de fonctions et retourne une nouvelle fonction. Lorsque cette nouvelle fonction est appelée avec un argument, la séquence de fonctions est appelée dans l'ordre, chacune recevant la valeur retournée par la fonction précédente.

```js
const pipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => fn(acc), initialValue);

// Briques de base pour la composition
const double = (x) => 2 * x;
const triple = (x) => 3 * x;
const quadruple = (x) => 4 * x;

// Fonctions composées pour multiplier par des valeurs spécifiques
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Utilisation
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

### Exécuter des promesses en séquence

Le [chaînage de promesses](/fr/docs/Web/JavaScript/Guide/Using_promises#composition) est essentiellement un chaînage de fonctions comme démontré dans la section précédente, mais réalisé de façon asynchrone.

```js
// À comparer avec pipe : fn(acc) devient acc.then(fn),
// et initialValue est garanti d'être une promesse
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialValue));

// Briques de base pour la composition
const p1 = async (a) => a * 5;
const p2 = async (a) => a * 2;
// Les fonctions composées peuvent aussi retourner des non-promesses, car les valeurs sont
// toutes enveloppées dans des promesses au final
const f3 = (a) => a * 3;
const p4 = async (a) => a * 4;

asyncPipe(p1, p2, f3, p4)(10).then(console.log); // 1200
```

`asyncPipe` peut aussi être implémenté avec `async`/`await`, ce qui montre mieux sa similarité avec `pipe`&nbsp;:

```js
const asyncPipe =
  (...functions) =>
  (initialValue) =>
    functions.reduce(async (acc, fn) => fn(await acc), initialValue);
```

### Utiliser `reduce()` avec des tableaux creux

`reduce()` ignore les éléments manquants dans les tableaux creux, mais n'ignore pas les valeurs `undefined`.

```js
console.log([1, 2, , 4].reduce((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduce((a, b) => a + b)); // NaN
```

### Appeler `reduce()` sur des objets ressemblant à des tableaux

La méthode `reduce()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 99, // ignoré par reduce() car length vaut 3
};
console.log(
  Array.prototype.reduce.call(objetSimilaireTableau, (x, y) => x + y),
);
// 9
```

### Quand ne pas utiliser `reduce()`

Les fonctions d'ordre supérieur polyvalentes comme `reduce()` peuvent être puissantes mais parfois difficiles à comprendre, surtout pour les développeur·euse·s JavaScript moins expérimenté·e·s. Si le code est plus clair avec d'autres méthodes de tableau, il faut peser la lisibilité face aux autres avantages de `reduce()`.

Notez que `reduce()` est toujours équivalent à une boucle `for...of`, sauf qu'au lieu de modifier une variable dans la portée supérieure, on retourne la nouvelle valeur à chaque itération&nbsp;:

```js
const val = array.reduce((acc, cur) => update(acc, cur), initialValue);

// Équivalent à :
let val = initialValue;
for (const cur of array) {
  val = update(val, cur);
}
```

Comme indiqué précédemment, la raison pour laquelle on peut vouloir utiliser `reduce()` est d'imiter les pratiques de programmation fonctionnelle avec des données immuables. Ainsi, les développeur·euse·s qui respectent l'immuabilité de l'accumulateur copient souvent tout l'accumulateur à chaque itération, comme ceci&nbsp;:

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = Object.hasOwn(allNames, name) ? allNames[name] : 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});
```

Ce code est inefficace, car chaque itération doit copier tout l'objet `allNames`, qui peut être volumineux selon le nombre de noms uniques. Ce code a une complexité dans le pire des cas en `O(N^2)`, où `N` est la longueur de `names`.

Une meilleure alternative consiste à _muter_ l'objet `allNames` à chaque itération. Cependant, si `allNames` est de toute façon modifié, il peut être préférable de convertir le `reduce()` en boucle `for`, ce qui est bien plus lisible&nbsp;:

```js example-bad
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  allNames[name] = currCount + 1;
  // retourner allNames, sinon l'itération suivante reçoit undefined
  return allNames;
}, Object.create(null));
```

```js example-good
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
const countedNames = Object.create(null);
for (const name of names) {
  const currCount = countedNames[name] ?? 0;
  countedNames[name] = currCount + 1;
}
```

Ainsi, si votre accumulateur est un tableau ou un objet et que vous le copiez à chaque itération, vous pouvez accidentellement introduire une complexité quadratique dans votre code, ce qui dégradera rapidement les performances sur de grandes données. Cela s'est produit dans du code réel&nbsp;: voir par exemple [Rendre Tanstack Table 1000x plus rapide avec un changement d'une ligne <sup>(angl.)</sup>](https://jpcamara.com/2023/03/07/making-tanstack-table.html).

Quelques cas d'usage acceptables de `reduce()` sont donnés ci-dessus (notamment la somme d'un tableau, le chaînage de promesses et le chaînage de fonctions). Il existe d'autres cas où de meilleures alternatives à `reduce()` existent.

- Aplatir un tableau de tableaux. Utilisez plutôt {{JSxRef("Array/flat", "flat()")}}.

  ```js example-bad
  const flattened = array.reduce((acc, cur) => acc.concat(cur), []);
  ```

  ```js example-good
  const flattened = array.flat();
  ```

- Regrouper des objets selon une propriété. Utilisez plutôt {{JSxRef("Object.groupBy()")}}.

  ```js example-bad
  const groups = array.reduce((acc, obj) => {
    const key = obj.name;
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
  ```

  ```js example-good
  const groups = Object.groupBy(array, (obj) => obj.name);
  ```

- Concaténer des tableaux contenus dans un tableau d'objets. Utilisez plutôt {{JSxRef("Array/flatMap", "flatMap()")}}.

  ```js example-bad
  const friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"] },
    { name: "Bob", books: ["Guerre et Paix", "Roméo et Juliette"] },
    { name: "Alice", books: ["Le Seigneur des anneaux", "Shining"] },
  ];
  const allBooks = friends.reduce((acc, cur) => [...acc, ...cur.books], []);
  ```

  ```js example-good
  const allBooks = friends.flatMap((person) => person.books);
  ```

- Retirer les doublons d'un tableau. Utilisez plutôt {{JSxRef("Set")}} et {{JSxRef("Array.from()")}}.

  ```js example-bad
  const uniqArray = array.reduce(
    (acc, cur) => (acc.includes(cur) ? acc : [...acc, cur]),
    [],
  );
  ```

  ```js example-good
  const uniqArray = Array.from(new Set(array));
  ```

- Éliminer ou ajouter des éléments dans un tableau. Utilisez plutôt {{JSxRef("Array/flatMap", "flatMap()")}}.

  ```js example-bad
  // Prend un tableau de nombres et sépare les carrés parfaits en leurs racines carrées
  const roots = array.reduce((acc, cur) => {
    if (cur < 0) return acc;
    const root = Math.sqrt(cur);
    if (Number.isInteger(root)) return [...acc, root, root];
    return [...acc, cur];
  }, []);
  ```

  ```js example-good
  const roots = array.flatMap((val) => {
    if (val < 0) return [];
    const root = Math.sqrt(val);
    if (Number.isInteger(root)) return [root, root];
    return [val];
  });
  ```

  Si vous ne faites qu'éliminer des éléments d'un tableau, vous pouvez aussi utiliser {{JSxRef("Array/filter", "filter()")}}.

- Rechercher des éléments ou tester si des éléments satisfont une condition. Utilisez plutôt {{JSxRef("Array/find", "find()")}} et {{JSxRef("Array/find", "findIndex()")}} ou {{JSxRef("Array/some", "some()")}} et {{JSxRef("Array/every", "every()")}}. Ces méthodes ont l'avantage supplémentaire de retourner le résultat dès qu'il est certain, sans parcourir tout le tableau.

  ```js example-bad
  const allEven = array.reduce((acc, cur) => acc && cur % 2 === 0, true);
  ```

  ```js example-good
  const allEven = array.every((val) => val % 2 === 0);
  ```

Dans les cas où `reduce()` est le meilleur choix, une bonne documentation et des noms de variables sémantiques peuvent aider à atténuer les problèmes de lisibilité.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.map()")}}
- La méthode {{JSxRef("Array.prototype.flat()")}}
- La méthode {{JSxRef("Array.prototype.flatMap()")}}
- La méthode {{JSxRef("Array.prototype.reduceRight()")}}
- La méthode {{JSxRef("TypedArray.prototype.reduce()")}}
- La méthode {{JSxRef("Object.groupBy()")}}
- La méthode {{JSxRef("Map.groupBy()")}}
- [Prothèse d'émulation de `Array.prototype.reduce` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.reduce` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.reduce)
