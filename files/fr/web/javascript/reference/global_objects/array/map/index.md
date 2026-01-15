---
title: "Array : méthode map()"
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`map()`** des instances de {{JSxRef("Array")}} crée un nouveau tableau rempli avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.map()")}}

```js interactive-example
const array = [1, 4, 9, 16];

// Passer une fonction à map
const mapped = array.map((x) => x * 2);

console.log(mapped);
// Résultat attendu : Array [2, 8, 18, 32]
```

## Syntaxe

```js-nolint
map(callbackFn)
map(callbackFn, thisArg)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément du tableau. Sa valeur de retour est ajoutée comme un élément du nouveau tableau. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément en cours de traitement dans le tableau.
    - `index`
      - : L'indice de l'élément en cours de traitement dans le tableau.
    - `array`
      - : Le tableau sur lequel `map()` a été appelée.
- `thisArg` {{Optional_Inline}}
  - : Une valeur à utiliser comme `this` lors de l'exécution de `callbackFn`. Voir [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives).

### Valeur de retour

Un nouveau tableau composé des images de la fonction de rappel.

## Description

La méthode `map()` est une [méthode itérative](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives). Elle appelle la fonction `callbackFn` fournie une fois pour chaque élément du tableau et construit un nouveau tableau à partir des résultats. Consultez la section [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives) pour plus d'informations sur le fonctionnement général de ces méthodes.

`callbackFn` n'est appelée que pour les indices du tableau qui ont des valeurs affectées. Elle n'est pas appelée pour les cases vides dans les [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

La méthode `map()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

Puisque `map` construit un nouveau tableau, l'appeler sans utiliser le tableau retourné est une mauvaise pratique&nbsp;: utilisez plutôt {{JSxRef("Array/forEach", "forEach")}} ou {{JSxRef("Statements/for...of", "for...of")}}.

## Exemples

### Créer un tableau des racines carrées d'un tableau de nombres

Le code suivant prend un tableau de nombres et crée un nouveau tableau contenant les racines carrées des nombres du premier tableau.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots vaut désormais  [1, 2, 3]
// numbers vaut toujours [1, 4, 9]
```

### Utiliser `map` pour reformater des objets dans un tableau

Le code suivant prend un tableau d'objets et crée un nouveau tableau contenant les objets nouvellement reformatés.

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));

console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
console.log(kvArray);
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]
```

### Utiliser `parseInt()` avec `map()`

Il est courant d'utiliser la fonction de rappel avec un seul argument (l'élément parcouru). Certaines fonctions sont également souvent utilisées avec un seul argument, même si elles acceptent des arguments optionnels supplémentaires. Ces habitudes peuvent conduire à des comportements déroutants. Considérez&nbsp;:

```js
["1", "2", "3"].map(parseInt);
```

On pourrait s'attendre à obtenir `[1, 2, 3]`, mais le résultat réel est `[1, NaN, NaN]`.

{{JSxRef("parseInt")}} est souvent utilisée avec un argument, mais en accepte deux. Le premier est une expression et le second est la base. La fonction de rappel de `Array.prototype.map` reçoit 3 arguments&nbsp;: l'élément, l'indice et le tableau. Le troisième argument est ignoré par {{JSxRef("parseInt")}} — mais _pas_ le second&nbsp;! C'est la source de la confusion possible.

Voici un exemple concis des étapes d'itération&nbsp;:

```js
/* première itération  (index vaut 0) : */ parseInt("1", 0); // 1
/* deuxième itération (index vaut 1) : */ parseInt("2", 1); // NaN
/* troisième itération  (index vaut 2) : */ parseInt("3", 2); // NaN
```

Pour résoudre ce problème, définissez une autre fonction qui ne prend qu'un seul argument&nbsp;:

```js
["1", "2", "3"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Vous pouvez aussi utiliser la fonction {{JSxRef("Number")}}, qui ne prend qu'un seul argument&nbsp;:

```js
["1", "2", "3"].map(Number); // [1, 2, 3]

// Mais contrairement à parseInt(), Number() retournera aussi un flottant ou une notation exponentielle résolue :
["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]

// Pour comparaison, si on utilise parseInt() sur le tableau ci-dessus :
["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
```

Voir le sujet de discussion [Un problème d'argument optionnel en JavaScript <sup>(angl.)</sup>](https://wirfs-brock.com/allen/posts/166) par Allen Wirfs-Brock.

### Le tableau mappé contient `undefined`

Lorsque {{JSxRef("undefined")}} ou rien n'est retourné, le tableau résultant contient `undefined`. Si vous souhaitez supprimer l'élément à la place, chaînez une méthode {{JSxRef("Array/filter", "filter()")}}, ou utilisez la méthode {{JSxRef("Array/flatMap", "flatMap()")}} et retournez un tableau vide pour signifier la suppression.

```js
const nombres = [1, 2, 3, 4];
const nombresFiltres = nombres.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// l'index commence à 0, donc nombresFiltres vaut 1, 2, 3 et undefined.
// nombresFiltres vaut [1, 2, 3, undefined]
// nombres vaut toujours [1, 2, 3, 4]
```

### Mapping avec effets de bord

La fonction de rappel peut avoir des effets de bord.

```js
const cart = [5, 15, 25];
let total = 0;
const withTax = cart.map((cost) => {
  total += cost;
  return cost * 1.2;
});
console.log(withTax); // [6, 18, 30]
console.log(total); // 45
```

Ce n'est pas recommandé, car les méthodes de copie sont à utiliser de préférence avec des fonctions pures. Dans ce cas, il vaut mieux parcourir le tableau deux fois.

```js
const cart = [5, 15, 25];
const total = cart.reduce((acc, cost) => acc + cost, 0);
const withTax = cart.map((cost) => cost * 1.2);
```

Parfois, ce schéma va à l'extrême et la seule chose utile que fait `map()` est de provoquer des effets de bord.

```js
const products = [
  { name: "sports car" },
  { name: "laptop" },
  { name: "phone" },
];

products.map((product) => {
  product.price = 100;
});
```

Comme mentionné précédemment, c'est une mauvaise pratique. Si vous n'utilisez pas la valeur de retour de `map()`, utilisez `forEach()` ou une boucle `for...of` à la place.

```js
products.forEach((product) => {
  product.price = 100;
});
```

Ou, si vous souhaitez créer un nouveau tableau&nbsp;:

```js
const productsWithPrice = products.map((product) => ({
  ...product,
  price: 100,
}));
```

### Utiliser le troisième argument de `callbackFn`

L'argument `array` est utile si vous souhaitez accéder à un autre élément du tableau, en particulier lorsque vous n'avez pas de variable existante qui fait référence au tableau. L'exemple suivant utilise d'abord `filter()` pour extraire les valeurs positives puis utilise `map()` pour créer un nouveau tableau où chaque élément est la moyenne de ses voisins et de lui-même.

```js
const nombres = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const moyennes = nombres
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Sans l'argument arr, il n'y a aucun moyen d'accéder facilement
    // au tableau intermédiaire sans le stocker dans une variable.
    const precedent = arr[idx - 1];
    const suivant = arr[idx + 1];
    let compte = 1;
    let total = num;
    if (precedent !== undefined) {
      compte++;
      total += precedent;
    }
    if (suivant !== undefined) {
      compte++;
      total += suivant;
    }
    const moyenne = total / compte;
    // Arrondir à deux décimales
    return Math.round(moyenne * 100) / 100;
  });
console.log(moyennes); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]
```

L'argument `array` n'est pas le tableau en cours de construction — il n'est pas possible d'accéder au tableau en cours de construction depuis la fonction de rappel.

### Utiliser `map()` sur des tableaux creux

Un tableau creux reste creux après `map()`. Les indices des cases vides restent vides dans le tableau retourné, et la fonction de rappel ne sera pas appelée pour elles.

```js
console.log(
  [1, , 3].map((x, index) => {
    console.log(`Visite ${index}`);
    return x * 2;
  }),
);
// Visite 0
// Visite 2
// [2, empty, 6]
```

### Appeler `map()` sur des objets qui ne sont pas des tableaux

La méthode `map()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 5, // ignoré par map() car length vaut 3
};
console.log(Array.prototype.map.call(objetSimilaireTableau, (x) => x ** 2));
// [ 4, 9, 16 ]
```

Cet exemple montre comment parcourir une collection d'objets collectés par `querySelectorAll`. Cela fonctionne car `querySelectorAll` retourne un `NodeList` (qui est une collection d'objets). Dans ce cas, on retourne toutes les valeurs des `option` sélectionnées à l'écran&nbsp;:

```js
const elems = document.querySelectorAll("select option:checked");
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

Vous pouvez aussi utiliser {{JSxRef("Array.from()")}} pour transformer `elems` en tableau, puis accéder à la méthode `map()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.forEach()")}}
- La méthode {{JSxRef("Array.from()")}}
- La méthode {{JSxRef("TypedArray.prototype.map()")}}
- L'objet global {{JSxRef("Map")}}
- [Prothèse d'émulation de `Array.prototype.map` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.map` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.map)
