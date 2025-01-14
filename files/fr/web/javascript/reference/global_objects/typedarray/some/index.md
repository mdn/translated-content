---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
---

{{JSRef}}

La méthode **`some()`** teste si certains éléments du tableau typé remplissent une condition décrite par la fonction de test donnée. Cette méthode utilise le même algorithme que {{jsxref("Array.prototype.some()")}}_._ Dans le reste de cet article _TypedArray_ correspond à un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}

## Syntaxe

```js
typedarray.some(callback[, thisArg])
```

### Paramètres

- `callback`

  - : La fonction à tester pour chaque élément. Elle prend trois arguments :

    - `valeurCourante`
      - : L'élément du tableau typé en cours de traitement.
    - `index`
      - : L'indice de l'élément du tableau typé en cours de traitement.
    - `array`
      - : Le tableau typé sur lequel la méthode `some` a été appelée.

- `thisArg`
  - : Paramètre optionnel, la valeur à utiliser en tant que `this` lors de l'exécution de `callback`.

### Valeur de retour

`true` si la fonction de rappel renvoie une valeur équivalente à `true` pour chaque élément du tableau typé, `false` sinon.

## Description

La méthode `some` exécute la fonction `callback` fournie pour chaque élément du tableau typé jusqu'à ce que `callback` renvoie une valeur vraie (une valeur qui vaut `true` lorsqu'elle est convertie en un booléen). Si un tel élément est trouvé, la méthode `some` renvoie immédiatement `true`. Dans le cas contraire, si `callback` renvoie une valeur fausse pour tous les éléments, la méthode `some` renverra `false`.

`callback` est appelé avec trois arguments : la valeur de l'élément, l'indice de cet élément et le tableau qui est parcouru.

Si le paramètre `thisArg` est utilisé, il sera passé à la fonction `callback` en tant que valeur `this`. Sinon, la valeur `undefined` sera utilisée comme valeur `this`. La valeur `this` définitivement prise en compte par la fonction `callback` est déterminée selon [les règles usuelles de détermination de `this`](/fr/docs/Web/JavaScript/Reference/Operators/this).

`some` ne modifie pas le tableau typé sur lequel elle a été appelée.

## Exemples

### Tester la valeur des éléments d'un tableau typé

Dans l'exemple qui suit, on teste s'il existe au moins un élément du tableau typé qui est supérieur à 10.

```js
function supérieurÀ10(élément, index, array) {
  return élément > 10;
}
new Uint8Array([2, 5, 8, 1, 4]).some(supérieurÀ10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(supérieurÀ10); // true
```

### Tester la valeur des éléments avec les fonctions fléchées

[Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) permettent d'utiliser une syntaxe plus concise pour arriver au même résultat :

```js
new Uint8Array([2, 5, 8, 1, 4]).some((elem) => elem > 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some((elem) => elem > 10); // true
```

## Prothèse d'émulation (_polyfill_)

Il n'existe pas d'objet global intitulé _TypedArray_, la prothèse doit donc uniquement être employée si nécessaire :

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, "some", {
    value: Array.prototype.some,
  });
}
```

S'il faut également prendre en charge les moteurs JavaScript qui ne prennent pas en charge la méthode {{jsxref("Object.defineProperty")}}, mieux vaut ne pas ajouter de prothèse du tout pour `TypedArray.prototype` car on ne peut pas les rendre non-énumérables.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
