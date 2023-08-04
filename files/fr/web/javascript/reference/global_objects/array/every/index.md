---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
---

{{JSRef}}

La méthode **`every()`** permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.

> **Note :** Cette méthode renvoie `true` pour n'importe quelle condition utilisée sur un tableau vide.

{{EmbedInteractiveExample("pages/js/array-every.html")}}

## Syntaxe

```js
arr.every(callback[, thisArg])
```

### Paramètres

- `callback`

  - : La fonction sur laquelle on souhaite tester chaque élément du tableau. Elle prend en compte trois arguments :

    - `currentValue`
      - : La valeur de l'élément à traiter.
    - `index`{{Optional_inline}}
      - : L'indice de l'élément du tableau à tester.
    - `array`{{Optional_inline}}
      - : Le tableau sur lequel on a appelé la méthode `every`.

- `thisArg`{{Optional_inline}}
  - : Paramètre optionnel. La valeur à utiliser pour `this` lors de l'exécution de la fonction.

### Valeur de retour

`true` si la fonction de rappel obtient une valeur équivalente à vrai (_truthy_) pour chaque élément du tableau et `false` sinon.

## Description

La méthode `every` exécute la fonction `callback` fournie sur chacun des éléments contenus dans le tableau jusqu'à ce qu'un élément pour lequel la fonction `callback` renvoie une valeur fausse (_falsy value_) soit trouvé. Si un tel élément est trouvé, la méthode `every` renvoie directement `false`. Sinon, si la fonction `callback` a renvoyé une valeur vraie pour tous les éléments, la méthode `every` renverra `true`. La fonction `callback` n'est appelée que pour les indices du tableau pour lesquels il existe des valeurs affectées. Elle n'est pas appelée pour les indices supprimés ou ceux qui n'ont jamais reçu de valeur.

`callback` est appelée avec trois arguments : la valeur de l'élément en cours de traitement, l'indice de l'élément dans le tableau et le tableau qui est parcouru.

Si un paramètre `thisArg` est fourni à la méthode `every`, ce sera la valeur `this` de la fonction `callback`. Si ce paramètre n'est pas fourni, la valeur `undefined` sera utilisée comme valeur pour `this`. La valeur `this` « définitivement » utilisée par la fonction `callback` est déterminée selon [les règles usuelles de détermination de `this`](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this).

`every` ne modifie pas le tableau sur lequel elle a été appelée.

Les éléments traités par la méthode `every` sont définis lors du premier appel à `callback`. Les éléments ajoutés au tableau après que l'appel à `every` ait commencé ne seront pas traités par la fonction `callback`. Si des éléments du tableau sont modifiés, la valeur passée à la fonction `callback` sera celle qu'ils ont au moment où `every` les traitera. Les éléments qui sont supprimés ne sont pas traités par la fonction `every`.

`every` agit de la même façon que le quantificateur mathématiques « pour tous », notamment pour le cas au limite d'un tableau vide pour lequel elle renvoie `true` (on dit qu'il est trivialement vrai que tous les éléments d'un [ensemble vide](https://fr.wikipedia.org/wiki/Ensemble_vide#Difficult.C3.A9s_de_la_notion_d.27ensemble_vide) respectent n'importe quelle condition).

## Exemples

### Tester la valeur des éléments d'un tableau

Dans l'exemple suivant, on teste si tous les éléments du tableau sont supérieurs à 10.

```js
function estAssezGrand(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(estAssezGrand); // false
[12, 54, 18, 130, 44].every(estAssezGrand); // true
```

### Utiliser les fonctions fléchées avec `every`

{{jsxref("Fonctions/Fonctions_fléchées","Les fonctions fléchées","","1")}} permettent d'utiliser une syntaxe plus concise pour effectuer le même test.

```js
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
[
  { a: 1, b: 2 },
  { a: 1, b: 3 },
].every((elem) => elem.a === 1); // true
[
  { a: 2, b: 2 },
  { a: 1, b: 3 },
].every((elem) => elem.a === 1); // false
```

## Prothèse d'émulation (_polyfill_)

`every` fut ajouté avec la cinquième édition du standard ECMA-262. Pour cette raison, il n'est pas nécessairement présent dans les différentes implémentations de ce standard. Afin de faire fonctionner du code dans un environnement qui ne possède pas cette fonctionnalité, on pourra utiliser le fragment de code suivant au début des scripts. Cet algorithme correspond exactement à celui défini dans la cinquième édition du standard ECMA-262. On prend l'hypothèse que `Object` et `TypeError` ont leurs valeurs originales (n'ont pas été modifiés) et que `callbackfn.call` correspond bien à la valeur originale de {{jsxref("Function.prototype.call")}}

```js
if (!Array.prototype.every) {
  Array.prototype.every = function (callbackfn, thisArg) {
    "use strict";
    var T, k;

    if (this == null) {
      throw new TypeError("this vaut null ou n est pas défini");
    }

    // 1. Soit O le résultat de l'appel à ToObject auquel on a
    // passé this comme argument
    var O = Object(this);

    // 2. Soit lenValue le résultat de l'appel de la méthode interne
    //   Get sur O avec l'argument "length".
    // 3. Soit len le résultat de ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. Si IsCallable(callbackfn) est faux, on lève une exception
    // TypeError.
    if (typeof callbackfn !== "function") {
      throw new TypeError();
    }

    // 5. Si thisArg a été fourni : soit T cette valeur thisArg, undefined sinon.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Soit k égal à 0.
    k = 0;

    // 7. On répète tant que k < len
    while (k < len) {
      var kValue;

      // a. Soit Pk la valeur de ToString(k).
      //   (ce qui est implicite pour les opérandes gauche de in)
      // b. Soit kPresent le résultat de l'appel de la méthode
      //    interne de O avec l'argument Pk.
      //    Cette étape peut être combinée avec l'étape c
      // c. Si kPresent vaut true, alors
      if (k in O) {
        // i. Soit kValue le résultat de l'appel de la méthode
        //    interne Get de O avec l'argument Pk.
        kValue = O[k];

        // ii. Soit testResult le résultat de l'appel de la méthode
        //     interne Call de callbackfn avec T comme valeur this et
        //     la liste d'argument contenant kValue, k, et O.
        var testResult = callbackfn.call(T, kValue, k, O);

        // iii. Si ToBoolean(testResult) vaut false, on renvoie false.
        if (!testResult) {
          return false;
        }
      }
      k++;
    }
    return true;
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
