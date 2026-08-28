---
title: "Iterator : méthode join()"
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{SeeCompatTable}}

La méthode **`join()`** des instances de {{JSxRef("Iterator")}} est similaire à {{JSxRef("Array.prototype.join()")}}&nbsp;: elle retourne une chaîne de caractères qui est la concaténation de tous les éléments produits par l'itérateur, séparés par une virgule ou une chaîne de caractères de séparateur définie. Si l'itérateur n'a qu'un seul élément, cet élément est converti en chaîne de caractères sans utiliser le séparateur.

## Syntaxe

```js-nolint
join()
join(separator)
```

### Paramètres

- `separator` {{Optional_Inline}}
  - : Chaîne de caractères utilisée pour séparer chaque paire d'éléments adjacents de l'itérateur. Si omis, les éléments sont séparés par une virgule («&nbsp;,&nbsp;»).

### Valeur de retour

Une chaîne de caractères qui est la concaténation de tous les éléments produits par l'itérateur. Les éléments sont [convertis en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères). Si un élément est `undefined` ou `null`, il est converti en une chaîne de caractères vide au lieu de `"null"` ou `"undefined"`. Si l'itérateur est vide, la chaîne de caractères vide est retournée.

## Description

Voir {{JSxRef("Array.prototype.join()")}} pour plus de détails sur le fonctionnement de `join()`. Contrairement à la plupart des autres méthodes d'aide aux itérateurs, elle ne fonctionne pas bien avec les itérateurs infinis, car elle n'est pas paresseuse.

## Exemples

### Utiliser `join()`

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().take(5).join()); // "1,1,2,3,5"
console.log(fibonacci().take(5).join(" - ")); // "1 - 1 - 2 - 3 - 5"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Iterator.prototype.join` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-join)
- [La prothèse d'émulation es-shims de `Iterator.prototype.join` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- la méthode {{JSxRef("Iterator.prototype.reduce()")}}
- la méthode {{JSxRef("Array.prototype.join()")}}
