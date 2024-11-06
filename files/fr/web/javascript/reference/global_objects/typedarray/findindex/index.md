---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
---

{{JSRef}}

La méthode **`findIndex()`** renvoie un **indice** d'un élément d'un tableau typé si cet élément remplit une condition définie par une fonction de test donnée. S'il n'y a aucun élément satisfaisant, -1 sera renvoyé.

Voir aussi la méthode {{jsxref("TypedArray.find", "find()")}} qui renvoie la **valeur** de l'élément trouvé (au lieu de son indice).

{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}

## Syntaxe

```js
typedarray.findIndex(callback[, thisArg])
```

### Paramètres

- `callback`

  - : La fonction à exécuter pour chaque valeur du tableau typé. Elle prend trois arguments :

    - `élément`
      - : L'élément du tableau typé en cours de traitement.
    - `index`
      - : L'indice de l'élément du tableau typé en cours de traitement.
    - `array`
      - : Le tableau typé sur lequel la méthode `findIndex` a été appelée.

- `thisArg`
  - : Paramètre optionnel, l'objet à utiliser en tant que `this` pour les appels à `callback`.

### Valeur de retour

Un indice du tableau pour lequel l'élément remplit la condition décrite par la fonction, `-1` sinon.

## Description

La méthode `findIndex` exécute la fonction `callback` une fois pour chacun des éléments présent dans le tableau typé jusqu'à ce que `callback` renvoie une valeur vraie pour un élément. Si un tel élément est trouvé, `findIndex` retournera immédiatement l'indice de cet élément. Sinon, `findIndex` renverra -1. `callback` est appelé uniquement pour les éléments du tableau qui possèdent une valeur, les éléments qui ont été supprimés ou qui n'ont pas de valeur ne sont pas traités.

`callback` est appelé avec trois arguments : la valeur de l'élément, son indice et le tableau typé qui est parcouru.

Si un paramètre `thisArg` a été fourni à `findIndex`, celui-ci sera utilisé en tant que `this` pour chaque appel de `callback`. Dans le cas contraire, la valeur {{jsxref("undefined")}} sera utilisée.

`findIndex` ne modifie pas le tableau typé sur lequel elle a été appelée.

La liste des éléments traités par `findIndex` est définie avant le premier appel à `callback`. Les éléments qui sont ajoutés au tableau typés après que `findIndex` ait débuté ne sont pas traités par `callback`. Si un élément est modifié par un appel à `callback` précédent, la valeur passée à `callback` lors du traitement sera celle au moment où `findIndex` traite l'indice de l'élément. Les éléments qui sont supprimés ne sont pas pris en compte.

## Exemples

Dans l'exemple suivant, on utilise la méthode pour trouver l'indice d'un nombre premier dans le tableau typé (ou -1 dans le cas où il n'y a pas de nombre premier) :

```js
function estPremier(élément, index, array) {
  var début = 2;
  while (début <= Math.sqrt(élément)) {
    if (élément % début++ < 1) {
      return false;
    }
  }
  return élément > 1;
}

var uint8 = new Uint8Array([4, 6, 8, 12]);
var uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(estPremier)); // -1, non trouvé
console.log(uint16.findIndex(estPremier)); // 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
