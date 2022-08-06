---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/find
original_slug: Web/JavaScript/Reference/Objets_globaux/TypedArray/find
---
{{JSRef}}

La méthode **`find()`** renvoie une **valeur** du tableau typé si un élément du tableau remplit la condition définie par la fonction de test fournie. Si aucun élément ne remplit la condition, la valeur {{jsxref("undefined")}} sera renvoyée. Pour la suite de cet article _TypedArray_ correspond à l'un des [types de tableaux typés](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

Voir également la page sur la méthohde {{jsxref("TypedArray.findIndex", "findIndex()")}} qui renvoie l'**indice** de l'élément trouvé (et non sa valeur).

{{EmbedInteractiveExample("pages/js/typedarray-find.html")}}

## Syntaxe

```js
typedarray.find(callback[, thisArg])
```

### Paramètres

- `callback`

  - : La fonction à exécuter pour chaque valeur du tableau typé. Elle prend trois arguments :

    - `élément`
      - : L'élément du tableau typé en cours de traitement.
    - `index`
      - : L'indice de l'élément du tableau typé en cours de traitement.
    - `array`
      - : Le tableau sur lequel la méthode `find` a été appelée.

- `thisArg`
  - : Paramètre optionnel, il correspond à l'objet à utiliser en tant que `this` lors de l'exécution de la fonction `callback`.

### Valeur de retour

Une valeur du tableau qui remplit la condition définie par la fonction de rappel, {{jsxref("undefined")}} sinon.

## Description

La méthode `find` exécute la fonction `callback` une fois pour chacun des éléments présents dans le tableau typé jusqu'à ce que la fonction `callback` renvoie une valeur vraie. Si un tel élément est trouvé, `find` retourne immédiatement la valeur de cet élément, sinon `find` renvoie {{jsxref("undefined")}}. `callback` est appelée uniquement pour les indices du tableau typé qui possèdent une valeur, elle n'est pas appelée pour les indices qui ont été supprimés ou qui ne possèdent pas de valeurs.

`callback` est invoquée avec trois arguments : la valeur de l'élément, son indice et le tableau typé parcouru.

Si la paramètre `thisArg` est utilisé, il sera utilisé en tant que `this` pour chaque appel à `callback`. S'il n'est pas fourni, la valeur {{jsxref("undefined")}} sera utilisée.

`find` ne modifie pas le tableau typé sur lequel elle est appelé.

La liste des éléments traités par `find` est définie avant le premier appel à `callback`. Les éléments qui sont ajoutés au tableau typé après que l'appel à `find` ait commencé ne seront pas traités par `callback`. Si un élément du tableau qui n'a pas encore été traité est modifié par un appel précédent de `callback`, la valeur utilisée au moment où il est traité est celle qu'il aura lorsque `find` atteindra cet indice. Les éléments qui sont supprimés ne sont pas traités par la fonction.

## Exemples

### Trouver un nombre premier

Dans l'exemple qui suit, on cherche un élément d'un tableau typé qui est un nombre premier (on renvoie `undefined` s'il n'y a pas de nombre premier).

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

var uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(estPremier)); // 5
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.find', '%TypedArray%.prototype.find')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.find', '%TypedArray%.prototype.find')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.TypedArray.find")}}

## Voir aussi

- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.every()")}}
