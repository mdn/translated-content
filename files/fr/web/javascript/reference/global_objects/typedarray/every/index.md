---
title: TypedArray.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/every
---

{{JSRef}}

La méthode **`every()`** teste si tous les éléments du tableau typé satisfont une condition implémentée par la fonction de test fournie. Cette méthode utilise le même algorithme {{jsxref("Array.prototype.every()")}}. Pour le reste de cet article, _TypedArray_ correspond à un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#les_objets_typedarray).

{{InteractiveExample}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, -20, -30, -40, -50]);

console.log(int8.every(isNegative));
// Expected output: true

```

## Syntaxe

```js
typedarray.every(callback[, thisArg])>
```

### Paramètres

- `callback`

  - : La fonction utilisée pour tester chaque élément du tableau. Elle utilise trois arguments :

    - `valeurCourante`
      - : L'élément du tableau typé qui est en cours de traitement.
    - `index`
      - : L'indice de l'élément du tableau typé en cours de traitement.
    - `array`
      - : Le tableau typé sur lequel on a appelé la méthode `every`.

- `thisArg`
  - : Paramètre optionnel, la valeur à utiliser en tant que `this` lors de l'exécution de `callback`.

### Valeur de retour

`true` si la fonction de rappel obtient une valeur équivalente à vrai (_truthy_) pour chaque élément du tableau typé, `false` sinon.

## Description

La méthode `every` exécute la fonction `callback` fournie pour chaque élément du tableau typé jusqu'à ce que `callback` renvoie une valeur fausse (une valeur qui vaut `false` lorsqu'elle est convertie en un booléen). Si un tel élément est trouvé, la méthode `every` renvoie immédiatement `false`. Dans le cas contraire, si `callback` renvoie une valeur vraie pour tous les éléments, la méthode `every` renverra `true`.

`callback` est appelé avec trois arguments : la valeur de l'élément, l'indice de cet élément et le tableau qui est parcouru.

Si le paramètre `thisArg` est utilisé, il sera passé à la fonction `callback` en tant que valeur `this`. Sinon, la valeur `undefined` sera utilisée comme valeur `this`. La valeur `this` définitivement prise en compte par la fonction `callback` est déterminée selon [les règles usuelles de détermination de `this`](/fr/docs/Web/JavaScript/Reference/Operators/this).

`every` ne modifie pas le tableau typé sur lequel elle a été appelée.

## Exemples

### Tester la taille des éléments d'un tableau typé

Dans l'exemple suivant, on teste si tous les éléments du tableau typé sont supérieurs à 10 :

```js
function estGrand(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(estGrand); // false
new Uint8Array([12, 54, 18, 130, 44]).every(estGrand); // true
```

### Tester les éléments d'un tableau typé avec les fonctions fléchées

[Les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) permettent d'utiliser une syntaxe plus concise pour parvenir au même résultat :

```js
new Uint8Array([12, 5, 8, 130, 44]).every((elem) => elem >= 10); // false
new Uint8Array([12, 54, 18, 130, 44]).every((elem) => elem >= 10); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
