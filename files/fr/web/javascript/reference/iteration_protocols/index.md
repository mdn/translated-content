---
title: Les protocoles d'itération
slug: Web/JavaScript/Reference/Iteration_protocols
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Les **protocoles d'itération** ne sont pas de nouvelles constructions ou syntaxes du langage, mais des _protocoles_. Ces protocoles peuvent être implémentés par n'importe quel objet en respectant certaines conventions.

Il existe deux protocoles concernant l'itération&nbsp;: [le protocole «&nbsp;itérable&nbsp;»](#le_protocole_«_itérable_») et [le protocole «&nbsp;itérateur&nbsp;»](#le_protocole_«_itérateur_»).

## Le protocole « itérable »

**Le protocole itérable** permet aux objets JavaScript de définir ou de personnaliser leur comportement d'itération, par exemple les valeurs parcourues dans une construction {{JSxRef("Statements/for...of", "for...of")}}. Certains types natifs sont des [itérables natifs](#les_itérables_natifs) avec un comportement d'itération par défaut, comme {{JSxRef("Array")}} ou {{JSxRef("Map")}}, tandis que d'autres types (comme {{JSxRef("Object")}}) ne le sont pas.

Pour qu'un objet soit **itérable**, il doit implémenter la méthode **`[Symbol.iterator]()`**, c'est-à-dire que l'objet (ou l'un des objets de sa [chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) doit posséder une propriété dont la clé est `[Symbol.iterator]`, accessible via la constante {{JSxRef("Symbol.iterator")}}&nbsp;:

- `[Symbol.iterator]()`
  - : Une fonction sans argument qui retourne un objet conforme au [protocole «&nbsp;itérateur&nbsp;»](#le_protocole_«_itérateur_»).

Chaque fois qu'un objet doit être parcouru (par exemple au début d'une boucle {{JSxRef("Statements/for...of", "for...of")}}), sa méthode `[Symbol.iterator]()` est appelée sans argument, et l'**itérateur** retourné est utilisé pour obtenir les valeurs à parcourir.

Notez que lorsque cette fonction sans argument est appelée, elle l'est en tant que méthode sur l'objet itérable. Ainsi, à l'intérieur de la fonction, le mot-clé `this` permet d'accéder aux propriétés de l'objet itérable afin de décider quoi fournir lors de l'itération.

Cette fonction peut être une fonction ordinaire ou une fonction génératrice, de sorte qu'un objet itérateur est retourné lorsqu'elle est invoquée. À l'intérieur de cette fonction génératrice, chaque entrée peut être fournie à l'aide de `yield`.

## Le protocole « itérateur »

**Le protocole itérateur** définit une façon standard de produire une suite de valeurs (finie ou infinie), et éventuellement une valeur de retour lorsque toutes les valeurs ont été générées.

Un objet est un itérateur lorsqu'il implémente une méthode **`next()`** avec la sémantique suivante&nbsp;:

- `next()`
  - : Une fonction qui accepte zéro ou un argument et qui retourne un objet conforme à l'interface `IteratorResult` (voir ci‑dessous). Si une valeur non objet est retournée (par exemple `false` ou `undefined`) alors qu'une fonctionnalité native du langage (comme `for...of`) utilise l'itérateur, une {{JSxRef("TypeError")}} ("iterator.next() returned a non-object value") sera levée.

Toutes les méthodes du protocole itérateur (`next()`, `return()` et `throw()`) doivent retourner un objet implémentant l'interface `IteratorResult`. Cet objet doit posséder les propriétés suivantes&nbsp;:

- `done` {{Optional_Inline}}
  - : Un booléen qui vaut `false` si l'itérateur a pu produire la valeur suivante de la suite. (Ceci équivaut à ne pas préciser la propriété `done` du tout.)

    A la valeur `true` si l'itérateur a terminé sa séquence. Dans ce cas, `value` précise éventuellement la valeur de retour de l'itérateur.

- `value` {{Optional_Inline}}
  - : Toute valeur JavaScript retournée par l'itérateur. Peut être omise lorsque `done` vaut `true`.

En pratique, aucune des deux propriétés n'est strictement requise&nbsp;; si un objet sans ces propriétés est retourné, cela équivaut effectivement à `{ done: false, value: undefined }`.

Si un itérateur retourne un résultat avec `done: true`, tout appel ultérieur à `next()` doit aussi retourner `done: true`, même si cela n'est pas imposé au niveau du langage.

La méthode `next` peut recevoir une valeur qui sera mise à disposition dans le corps de la méthode. Aucune fonctionnalité native du langage ne transmettra de valeur. La valeur passée à la méthode `next` des [générateurs](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator) deviendra la valeur de l'expression `yield` correspondante.

Optionnellement, l'itérateur peut aussi implémenter les méthodes **`return(value)`** et **`throw(exception)`**, qui, lorsqu'elles sont appelées, indiquent à l'itérateur que l'appelant a fini de l'itérer et permettent d'effectuer tout nettoyage nécessaire (par exemple fermer une connexion à une base de données).

- `return(value)` {{Optional_Inline}}
  - : Une fonction qui accepte zéro ou un argument et qui retourne un objet conforme à l'interface `IteratorResult`, généralement avec `value` égal à la valeur passée et `done` égal à `true`. Appeler cette méthode indique à l'itérateur que l'appelant n'entend pas appeler `next()` davantage et permet d'effectuer des actions de nettoyage. Lorsque des fonctionnalités natives appellent `return()` pour le nettoyage, `value` vaut toujours `undefined`.
- `throw(exception)` {{Optional_Inline}}
  - : Une fonction qui accepte zéro ou un argument et qui retourne un objet conforme à l'interface `IteratorResult`, généralement avec `done` égal à `true`. Appeler cette méthode indique à l'itérateur que l'appelant signale une condition d'erreur, et `exception` est typiquement une instance d'{{JSxRef("Error")}}. Aucune fonctionnalité native n'appelle `throw()` pour le nettoyage&nbsp;; c'est une particularité des générateurs pour la symétrie `return`/`throw`.

> [!NOTE]
> Il est impossible de savoir par introspection (c.-à-d. sans appeler réellement `next()` et vérifier l'objet retourné) si un objet implémente le protocole itérateur.

Il est très facile de rendre un itérateur également itérable&nbsp;: il suffit d'implémenter une méthode `[Symbol.iterator]()` qui retourne `this`.

```js
// Satisfait à la fois le Protocole Iterator et Iterable
const monIterateur = {
  next() {
    // …
  },
  [Symbol.iterator]() {
    return this;
  },
};
```

Un tel objet s'appelle un <i lang="en">iterable iterator</i>. Ainsi, un itérateur peut être consommé par les syntaxes qui attendent des itérables&nbsp;; il est donc rarement utile d'implémenter uniquement le protocole itérateur sans implémenter aussi itérable. (En fait, presque toutes les syntaxes et API attendent des _itérables_, pas des _itérateurs_.) Le [generator object](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator) en est un exemple&nbsp;:

```js
const generatorObject = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

console.log(typeof generatorObject.next);
// "function" — il possède une méthode next (qui retourne le résultat attendu), donc c'est un itérateur

console.log(typeof generatorObject[Symbol.iterator]);
// "function" — il possède une méthode [Symbol.iterator] (qui retourne l'itérateur approprié), donc c'est un itérable

console.log(generatorObject[Symbol.iterator]() === generatorObject);
// true — sa méthode [Symbol.iterator] retourne l'objet lui‑même (un itérateur), donc c'est un itérateur itérable
```

Tous les itérateurs natifs héritent de {{JSxRef("Iterator", "Iterator.prototype")}}, qui implémente la méthode `[Symbol.iterator]()` en retournant `this`, de sorte que les itérateurs natifs sont aussi itérables.

Cependant, quand c'est possible, il est préférable que `iterable[Symbol.iterator]()` retourne des itérateurs différents qui commencent toujours au début, comme le fait [`Set.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).

## Les protocoles d'itérateur asynchrone et d'itérable asynchrone

Il existe une autre paire de protocoles utilisée pour l'itération asynchrone, appelés **itérateur asynchrone** et **itérable asynchrone**. Ils possèdent des interfaces très similaires à celles des protocoles itérable et itérateur, sauf que chaque valeur retournée par les appels aux méthodes de l'itérateur est encapsulée dans une promesse.

Un objet implémente le protocole d'itérable asynchrone lorsqu'il implémente les méthodes suivantes&nbsp;:

- [`[Symbol.asyncIterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
  - : Une fonction sans argument qui retourne un objet conforme au protocole d'itérateur asynchrone.

Un objet implémente le protocole d'itérateur asynchrone lorsqu'il implémente les méthodes suivantes&nbsp;:

- `next()`
  - : Une fonction qui accepte zéro ou un argument et qui retourne une promesse. La promesse est résolue avec un objet conforme à l'interface `IteratorResult`, et les propriétés ont les mêmes sémantiques que celles de l'itérateur synchrone.
- `return(value)` {{Optional_Inline}}
  - : Une fonction qui accepte zéro ou un argument et qui retourne une promesse. La promesse est résolue avec un objet conforme à l'interface `IteratorResult`, et les propriétés ont les mêmes sémantiques que celles de l'itérateur synchrone.
- `throw(exception)` {{Optional_Inline}}
  - : Une fonction qui accepte zéro ou un argument et qui retourne une promesse. La promesse est résolue avec un objet conforme à l'interface `IteratorResult`, et les propriétés ont les mêmes sémantiques que celles de l'itérateur synchrone.

## Interactions entre le langage et les protocoles d'itération

Le langage définit des API qui produisent ou consomment des itérables et des itérateurs.

### Itérables natifs

{{JSxRef("String")}}, {{JSxRef("Array")}}, {{JSxRef("TypedArray")}}, {{JSxRef("Map")}}, {{JSxRef("Set")}} et [`Segments`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) (retourné par [`Intl.Segmenter.prototype.segment()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)) sont tous des itérables natifs, car chacun de leurs objets `prototype` implémente une méthode `[Symbol.iterator]()`. De plus, l'objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) et certains types de collections DOM comme {{DOMxRef("NodeList")}} sont aussi des itérables.
Il n'existe aucun objet dans le langage JavaScript de base qui soit un itérable asynchrone. Certaines API web, comme {{DOMxRef("ReadableStream")}}, définissent la méthode `Symbol.asyncIterator` par défaut.

Les [fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*) retournent des [objets générateurs](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator), qui sont des itérateurs itérables. Les [fonctions génératrices asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function*) retournent des [objets générateurs asynchrones](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator), qui sont des itérateurs itérables asynchrones.

Les itérateurs retournés par les itérables natifs héritent tous d'une classe commune {{JSxRef("Iterator")}}, qui implémente la méthode `[Symbol.iterator]() { return this; }` mentionnée plus haut, ce qui les rend tous itérateurs itérables. La classe `Iterator` fournit aussi des [méthodes utilitaires](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#méthodes_utilitaires_diterateur) en plus de la méthode `next()` requise c le protocole d'itérateur. Vous pouvez inspecter la chaîne de prototypes d'un itérateur en l'affichant dans une console graphique.

```plain
console.log([][Symbol.iterator]());

Array Iterator {}
  [[Prototype]]: Array Iterator     ==> Ceci est le prototype partagé par tous les itérateurs de tableau
    next: ƒ next()
    Symbol(Symbol.toStringTag): "Array Iterator"
    [[Prototype]]: Object           ==> Ceci est le prototype partagé par tous les itérateurs natifs
      Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
      [[Prototype]]: Object         ==> Ceci est Object.prototype
```

### API natives acceptant des itérables

De nombreuses API acceptent des itérables. Quelques exemples&nbsp;:

- {{JSxRef("Map/Map", "Map()")}}
- {{JSxRef("WeakMap/WeakMap", "WeakMap()")}}
- {{JSxRef("Set/Set", "Set()")}}
- {{JSxRef("WeakSet/WeakSet", "WeakSet()")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.allSettled()")}}
- {{JSxRef("Promise.race()")}}
- {{JSxRef("Promise.any()")}}
- {{JSxRef("Array.from()")}}
- {{JSxRef("Object.groupBy()")}}
- {{JSxRef("Map.groupBy()")}}

```js
const monObjet = {};

new WeakSet(
  (function* () {
    yield {};
    yield monObjet;
    yield {};
  })(),
).has(monObjet); // true
```

### Syntaxes attendant des itérables

Certaines instructions et expressions attendent des itérables, par exemple les boucles {{JSxRef("Statements/for...of", "for...of")}}, [la syntaxe de décomposition et l'étalement des paramètres](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), {{JSxRef("Operators/yield*", "yield*")}}, et [l'affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring)&nbsp;:

```js
for (const valeur of ["a", "b", "c"]) {
  console.log(valeur);
}
// "a"
// "b"
// "c"

console.log([..."abc"]); // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

console.log(gen().next()); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
console.log(a); // "a"
```

Lorsque les syntaxes natives parcourent un itérateur et que le dernier résultat de `done` est `false` (c'est-à-dire que l'itérateur peut encore produire des valeurs) mais qu'aucune valeur supplémentaire n'est nécessaire, la méthode `return` sera appelée si elle existe. Cela peut arriver, par exemple, si un `break` ou un `return` est rencontré dans une boucle `for...of`, ou si tous les identifiants sont déjà liés lors d'une décomposition de tableau.

```js
const obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        i++;
        console.log("Retourne", i);
        if (i === 3) return { done: true, value: i };
        return { done: false, value: i };
      },
      return() {
        console.log("Fermeture");
        return { done: true };
      },
    };
  },
};

const [a] = obj;
// Retourne 1
// Fermeture

const [b, c, d] = obj;
// Retourne 1
// Retourne 2
// Retourne 3
// Fin atteinte (le dernier appel a retourné `done: true`),
// donc `return` n'est pas appelé
console.log([b, c, d]); // [1, 2, undefined] ; la valeur associée à `done: true` n'est pas accessible

for (const b of obj) {
  break;
}
// Retourne 1
// Fermeture
```

La boucle [`for await...of`](/fr/docs/Web/JavaScript/Reference/Statements/for-await...of) et [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*) dans les [fonctions génératrices asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function*) (mais pas dans les [fonctions génératrices synchrones](/fr/docs/Web/JavaScript/Reference/Statements/function*)) sont les seuls moyens d'interagir avec des itérables asynchrones. Utiliser `for...of`, l'étalement, etc. sur un itérable asynchrone qui n'est pas aussi synchrone (c'est-à-dire qui possède `[Symbol.asyncIterator]()` mais pas `[Symbol.iterator]()`) provoquera une TypeError&nbsp;: x n'est pas itérable.

## Gestion des erreurs

L'itération implique un transfert de contrôle entre l'itérateur et le consommateur, la gestion des erreurs se fait donc dans les deux sens&nbsp;: comment le consommateur gère les erreurs levées par l'itérateur, et comment l'itérateur gère les erreurs levées par le consommateur. Lorsque vous utilisez l'une des méthodes natives d'itération, le langage peut aussi lever des erreurs si l'itérable enfreint certains {{Glossary("invariant", "invariants")}}. Nous décrirons comment les syntaxes natives génèrent et gèrent les erreurs, ce qui peut servir de guide pour votre propre code si vous parcourez manuellement l'itérateur.

### Itérables mal formés

Des erreurs peuvent survenir lors de l'acquisition de l'itérateur à partir de l'itérable. L'invariant imposé ici est que l'itérable doit produire un itérateur valide&nbsp;:

- Il possède une méthode `[Symbol.iterator]()` appelable.
- La méthode `[Symbol.iterator]()` retourne un objet.
- L'objet retourné par `[Symbol.iterator]()` possède une méthode `next()` appelable.

Lorsque vous utilisez une syntaxe native pour initier l'itération sur un itérable mal formé, une TypeError est levée.

```js example-bad
const nonWellFormedIterable = { [Symbol.iterator]: 1 };
[...nonWellFormedIterable]; // TypeError : nonWellFormedIterable n'est pas itérable
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError : [Symbol.iterator]() a retourné une valeur non objet
nonWellFormedIterable[Symbol.iterator] = () => ({});
[...nonWellFormedIterable]; // TypeError : nonWellFormedIterable[Symbol.iterator]().next n'est pas une fonction
```

For async iterables, if its `[Symbol.asyncIterator]()` property has value `undefined` or `null`, JavaScript falls back to using the `[Symbol.iterator]` property instead (and wraps the resulting iterator into an async iterator by [forwarding](#forwarding_errors) the methods). Otherwise, the `[Symbol.asyncIterator]` property must conform to the above invariants too.

Ce type d'erreurs peut être évité en validant l'itérable avant d'essayer de l'itérer. Cependant, cela reste assez rare car, en général, vous connaissez le type de l'objet que vous parcourez. Si vous recevez cet itérable d'un autre code, il vaut mieux laisser l'erreur se propager à l'appelant afin qu'il sache qu'une entrée invalide a été fournie.

### Erreurs lors de l'itération

La plupart des erreurs surviennent lors de l'avancement de l'itérateur (appel de `next()`). L'invariant imposé ici par le langage est que la méthode `next()` doit retourner un objet (pour les itérateurs asynchrones, un objet après l'attente). Sinon, une TypeError est levée.

Si l'invariant est rompu ou si la méthode `next()` lève une erreur (pour les itérateurs asynchrones, elle peut aussi retourner une promesse rejetée), l'erreur est propagée à l'appelant. Pour les syntaxes natives, l'itération en cours est interrompue sans nouvelle tentative ni nettoyage (en supposant que si la méthode `next()` a levé l'erreur, elle a déjà effectué le nettoyage). Si vous appelez manuellement `next()`, vous pouvez intercepter l'erreur et réessayer d'appeler `next()`, mais en général il faut supposer que l'itérateur est déjà fermé.

Si l'appelant décide d'interrompre l'itération pour une raison autre que les erreurs du paragraphe précédent, par exemple lorsqu'il entre dans un état d'erreur dans son propre code (par exemple, lors du traitement d'une valeur invalide produite par l'itérateur), il doit appeler la méthode `return()` sur l'itérateur, si elle existe. Cela permet à l'itérateur d'effectuer tout nettoyage nécessaire. La méthode `return()` n'est appelée que pour les sorties prématurées—si `next()` retourne `done: true`, la méthode `return()` n'est pas appelée, en supposant que l'itérateur a déjà effectué le nettoyage.

La méthode `return()` peut aussi être invalide&nbsp;! Le langage impose également que la méthode `return()` retourne un objet et lève une `TypeError` sinon. Si la méthode `return()` lève une erreur, celle‑ci est propagée à l'appelant. Cependant, si la méthode `return()` est appelée parce que l'appelant a rencontré une erreur dans son propre code, alors cette erreur prime sur l'erreur levée par la méthode `return()`.

Habituellement, l'appelant implémente la gestion des erreurs comme ceci&nbsp;:

```js
try {
  for (const value of iterable) {
    // …
  }
} catch (e) {
  // Gérer l'erreur
}
```

Le `catch` pourra intercepter les erreurs levées lorsque `iterable` n'est pas un itérable valide, lorsque `next()` lève une erreur, lorsque `return()` lève une erreur (si la boucle `for` se termine prématurément), et lorsque le corps de la boucle `for` lève une erreur.

La plupart des itérateurs sont implémentés avec des fonctions génératrices, nous allons donc montrer comment les fonctions génératrices gèrent typiquement les erreurs&nbsp;:

```js
function* gen() {
  try {
    yield doSomething();
    yield doSomethingElse();
  } finally {
    cleanup();
  }
}
```

L'absence de `catch` ici fait que les erreurs levées par `doSomething()` ou `doSomethingElse()` sont propagées à l'appelant de `gen`. Si ces erreurs sont interceptées dans la fonction génératrice (ce qui est également conseillé), la fonction génératrice peut décider de continuer à produire des valeurs ou de se terminer prématurément. Cependant, le bloc `finally` est nécessaire pour les générateurs qui maintiennent des ressources ouvertes. Le bloc `finally` est garanti de s'exécuter, soit lorsque le dernier `next()` est appelé, soit lorsque `return()` est appelé.

### Transmission des erreurs

Certaines syntaxes intégrées enveloppent un itérateur dans un autre itérateur. Elles incluent l'itérateur produit par la méthode {{JSxRef("Iterator.from()")}}, les [méthodes utilitaires d'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#méthodes_utilitaires_diterateur) (`map()`, `filter()`, `take()`, `drop()` et `flatMap()`), [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*), ainsi qu'un enveloppeur caché utilisé lorsque vous appliquez l'itération asynchrone (`for await...of`, `Array.fromAsync`) à des itérateurs synchrones. L'itérateur enveloppé est alors responsable de transférer les erreurs entre l'itérateur interne et l'appelant.

- Tous les itérateurs enveloppants transfèrent directement la méthode `next()` de l'itérateur interne, y compris sa valeur de retour et les erreurs levées.
- Les itérateurs enveloppants transfèrent généralement directement la méthode `return()` de l'itérateur interne. Si la méthode `return()` n'existe pas sur l'itérateur interne, celui-ci renvoie `{ done: true, value: undefined }` à la place. Dans le cas des assistants (<i lang="en">helpers</i> en anglais) d'itérateur&nbsp;: si la méthode `next()` de l'assistant n'a pas été appelée, après avoir tenté d'appeler `return()` sur l'itérateur interne, l'itérateur courant retourne toujours `{ done: true, value: undefined }`. Ceci est cohérent avec les fonctions génératrices lorsque l'exécution n'est pas encore entrée dans l'expression `yield*`.
- `yield*` est la seule syntaxe intégrée qui transfère la méthode `throw()` de l'itérateur interne. Pour des informations sur la façon dont [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*) transfère les méthodes `return()` et `throw()`, voir sa propre référence.

## Exemples

### Itérables définis par l'utilisateur·ice

Vous pouvez créer vos propres itérables ainsi&nbsp;:

```js
const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

console.log([...myIterable]); // [1, 2, 3]
```

### Itérateur simple

Les itérateurs sont par nature à l'état brut. Si vous ne le définissez pas comme une [fonction génératrice](/fr/docs/Web/JavaScript/Reference/Statements/function*) (comme le montre l'exemple ci‑dessus), il est généralement conseillé d'encapsuler l'état dans une fermeture.

```js
function makeIterator(array) {
  let nextIndex = 0;
  return {
    next() {
      return nextIndex < array.length
        ? {
            value: array[nextIndex++],
            done: false,
          }
        : {
            done: true,
          };
    },
  };
}

const it = makeIterator(["yo", "ya"]);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

### Itérateur infini

```js
function idMaker() {
  let index = 0;
  return {
    next() {
      return {
        value: index++,
        done: false,
      };
    },
  };
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// …
```

### Définir un itérable avec un générateur

```js
function* makeGenerator(array) {
  let nextIndex = 0;
  while (nextIndex < array.length) {
    yield array[nextIndex++];
  }
}

const gen = makeGenerator(["yo", "ya"]);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done); // true

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const it = idMaker();

console.log(it.next().value); // 0
console.log(it.next().value); // 1
console.log(it.next().value); // 2
// …
```

### Définir un itérable avec une classe

L'encapsulation de l'état peut également se faire avec des [champs privés (<i lang="en">private fields</i>)](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements).

```js
class SimpleClass {
  #data;

  constructor(data) {
    this.#data = data;
  }

  [Symbol.iterator]() {
    // Utiliser un nouvel index pour chaque itérateur. Cela permet
    // d'effectuer plusieurs itérations sur l'itérable en toute sécurité
    // dans des cas non triviaux, par exemple l'utilisation de break ou des
    // boucles imbriquées sur le même itérable.
    let index = 0;

    return {
      // Remarque : l'utilisation d'une fonction fléchée permet à this
      // de pointer vers l'objet retourné par [Symbol.iterator]() plutôt que
      // vers next()
      next: () => {
        if (index >= this.#data.length) {
          return { done: true };
        }
        return { value: this.#data[index++], done: false };
      },
    };
  }
}

const simple = new SimpleClass([1, 2, 3, 4, 5]);

for (const val of simple) {
  console.log(val); // 1 2 3 4 5
}
```

### Redéfinir les itérables intégrés

Par exemple, un objet {{JSxRef("String")}} est un itérable intégré&nbsp;:

```js
const someString = "hi";
console.log(typeof someString[Symbol.iterator]); // "function"
```

L'[itérateur par défaut](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) de `String` retourne les points de code de la chaîne de caractères un par un&nbsp;:

```js
const iterator = someString[Symbol.iterator]();
console.log(`${iterator}`); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

Vous pouvez redéfinir le comportement d'itération en fournissant votre propre `[Symbol.iterator]()`&nbsp;:

```js
// il faut construire explicitement un objet String pour éviter l'emboîtement automatique
const someString = new String("hi");

someString[Symbol.iterator] = function () {
  return {
    // il s'agit de l'objet itérateur, qui retourne un seul élément (la chaîne "au revoir")
    next() {
      return this._first
        ? { value: "au revoir", done: (this._first = false) }
        : { done: true };
    },
    _first: true,
  };
};
```

Remarquez comment la redéfinition de `[Symbol.iterator]()` affecte le comportement des constructions intégrées qui utilisent le protocole d'itération&nbsp;:

```js
console.log([...someString]); // ["au revoir"]
console.log(`${someString}`); // "hi"
```

### Modifications concurrentes lors de l'itération

Presque tous les itérables partagent la même sémantique de base&nbsp;: ils ne copient pas les données au moment où l'itération commence. Ils conservent plutôt un pointeur et le déplacent. Par conséquent, si vous ajoutez, supprimez ou modifiez des éléments dans la collection pendant que vous l'itérez, vous risquez involontairement de modifier si d'autres éléments _inchangés_ de la collection sont visités. C'est très similaire au fonctionnement des [méthodes itératives de tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#modification_du_tableau_initial_dans_les_méthodes_itératives).

Considérez le cas suivant utilisant un {{DOMxRef("URLSearchParams")}}&nbsp;:

```js
const searchParams = new URLSearchParams(
  "deleteme1=value1&key2=value2&key3=value3",
);

// Supprimez les clés indésirables
for (const [key, value] of searchParams) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    searchParams.delete(key);
  }
}

// Affiche :
// deleteme1
// key3
```

Remarquez qu'il n'affiche jamais `key2`. En effet, un `URLSearchParams` est, en interne, une liste de paires clé‑valeur. Lorsque `deleteme1` est parcouru puis supprimé, toutes les autres entrées sont décalées d'une position vers la gauche, de sorte que `key2` prend la position qu'occupait `deleteme1`, et lorsque le pointeur passe à la clé suivante, il tombe sur `key3`.

Certaines implémentations d'itérables évitent ce problème en attribuant des valeurs «&nbsp;<i lang="en">tombstone</i>&nbsp;» afin d'empêcher le décalage des valeurs restantes. Considérez le code similaire utilisant une `Map`&nbsp;:

```js
const myMap = new Map([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);

for (const [key, value] of myMap) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myMap.delete(key);
  }
}

// Affiche :
// deleteme1
// key2
// key3
```

Remarquez qu'il affiche toutes les clés. En effet, `Map` ne décale pas les clés restantes lorsqu'une clé est supprimée. Si vous souhaitez implémenter quelque chose de similaire, voici à quoi cela pourrait ressembler&nbsp;:

```js
const tombstone = Symbol("tombstone");

class MyIterable {
  #data;
  constructor(data) {
    this.#data = data;
  }
  delete(deletedKey) {
    for (let i = 0; i < this.#data.length; i++) {
      if (this.#data[i][0] === deletedKey) {
        this.#data[i] = tombstone;
        return true;
      }
    }
    return false;
  }
  *[Symbol.iterator]() {
    for (const data of this.#data) {
      if (data !== tombstone) {
        yield data;
      }
    }
  }
}

const myIterable = new MyIterable([
  ["deleteme1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
for (const [key, value] of myIterable) {
  console.log(key);
  if (key.startsWith("deleteme")) {
    myIterable.delete(key);
  }
}
```

> [!WARNING]
> Les modifications concurrentes sont en général très sujettes aux bogues et déroutantes. À moins de connaître précisément comment l'itérable est implémenté, il est préférable d'éviter de modifier la collection pendant que vous l'itérez.

## Spécifications

{{Specifications}}

## Voir aussi

- Le guide des [Iterateurs et générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
- La déclaration {{JSxRef("Statements/function*", "function*")}}
- La propriété statique {{JSxRef("Symbol.iterator")}}
- L'objet {{JSxRef("Iterator")}}
