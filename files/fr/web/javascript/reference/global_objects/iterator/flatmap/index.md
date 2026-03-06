---
title: "Iterator : méthode flatMap()"
short-title: flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/flatMap
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`flatMap()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide d'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur) qui prend chaque élément de l'itérateur original, le passe à travers une fonction de mappage, et produit les éléments retournés par la fonction de mappage (qui sont contenus dans un autre itérateur ou itérable).

## Syntaxe

```js-nolint
flatMap(callbackFn)
```

### Paramètres

- `callbackFn`
  - : Une fonction à exécuter pour chaque élément produit par l'itérateur. Elle doit retourner un itérateur ou un itérable qui produit des éléments à être produits par `flatMap()`. Notez que contrairement à {{JSxRef("Array.prototype.flatMap()")}}, vous ne pouvez pas retourner des valeurs uniques non itérables. La fonction est appelée avec les arguments suivants&nbsp;:
    - `element`
      - : L'élément courant en cours de traitement.
    - `index`
      - : L'indice de l'élément courant en cours de traitement.

### Valeur de retour

Un nouvel [objet d'aide d'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objets_daide_à_litérateur). La première fois que la méthode `next()` de l'objet d'aide d'itérateur est appelée, elle appelle `callbackFn` sur le premier élément produit par l'itérateur sous-jacent, et la valeur de retour, qui doit être un itérateur ou un itérable, est produite un par un par l'objet d'aide d'itérateur (comme {{JSxRef("Operators/yield*", "yield*")}}). L'élément suivant est récupéré de l'itérateur sous-jacent lorsque le précédent retourné par `callbackFn` est terminé. Lorsque l'itérateur sous-jacent est terminé, l'objet d'aide d'itérateur est également terminé (la méthode `next()` produit `{ valeur: undefined, fait: true }`).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `callbackFn` retourne une valeur non itérable ou un primitif de type chaîne de caractères.

## Description

`flatMap` accepte deux types de valeurs de retour de `callbackFn`&nbsp;: un itérateur ou un itérable. Ils sont traités de la même manière que {{JSxRef("Iterator.from()")}}&nbsp;: si la valeur de retour est itérable, la méthode `[Symbol.iterator]()` est appelée et la valeur de retour est utilisée&nbsp;; sinon, la valeur de retour est traitée comme un itérateur et sa méthode `next()` est appelée.

```js
[1, 2, 3]
  .values()
  .flatMap((x) => {
    let estTermine = false;
    const it = {
      next() {
        if (estTermine) {
          return { valeur: undefined, fait: true };
        }
        estTermine = true;
        return { valeur: x, fait: false };
      },
    };
    switch (x) {
      case 1:
        // Un itérable qui n'est pas un itérateur
        return { [Symbol.iterator]: () => it };
      case 2:
        // Un itérateur qui n'est pas itérable
        return it;
      case 3:
        // Un itérateur itérable est traité comme un itérable
        return {
          ...it,
          [Symbol.iterator]() {
            console.log("Symbol.iterator appelé");
            return it;
          },
        };
      default:
        return undefined;
    }
  })
  .toArray();
// Affiche "Symbol.iterator appelé"
// Retourne [1, 2, 3]
```

## Exemples

### Fusionner des maps

L'exemple suivant fusionne deux objets {{JSxRef("Map")}} en un seul&nbsp;:

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const map2 = new Map([
  ["d", 4],
  ["e", 5],
  ["f", 6],
]);

const fusion = new Map([map1, map2].values().flatMap((x) => x));
console.log(fusion.get("a")); // 1
console.log(fusion.get("e")); // 5
```

Cela évite de créer des copies temporaires du contenu de la map. Notez que le tableau `[map1, map2]` doit d'abord être converti en itérateur (en utilisant {{JSxRef("Array.prototype.values()")}}), car {{JSxRef("Array.prototype.flatMap()")}} ne fusionne que les tableaux, pas les itérables.

```js
new Map([map1, map2].flatMap((x) => x)); // Map(1) {undefined => undefined}
```

### Retourner des chaînes de caractères

Les chaînes de caractères sont itérables, mais `flatMap()` rejette spécifiquement les primitives de type chaîne de caractères retournées par `callbackFn`, car le comportement d'itération par points de code n'est souvent pas ce que vous souhaitez.

```js example-bad
[1, 2, 3]
  .values()
  .flatMap((x) => String(x))
  .toArray(); // TypeError: Iterator.prototype.flatMap called on non-object
```

Vous pouvez vouloir l'envelopper dans un tableau à la place afin que toute la chaîne soit produite en une seule fois&nbsp;:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => [String(x)])
  .toArray(); // ['1', '2', '3']
```

Ou, si le comportement d'itération par points de code est souhaité, vous pouvez utiliser {{JSxRef("Iterator.from()")}} pour le convertir en un itérateur approprié&nbsp;:

```js
[1, 2, 3]
  .values()
  .flatMap((x) => Iterator.from(String(x * 10)))
  .toArray();
// ['1', '0', '2', '0', '3', '0']
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Iterator.prototype.flatMap` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-helpers)
- [Prothèse d'émulation es-shims de `Iterator.prototype.flatMap` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
