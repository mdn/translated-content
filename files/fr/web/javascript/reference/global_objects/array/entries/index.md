---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}

La méthode **`entries()`** renvoie un nouvel objet de type **`Array Iterator`** qui contient le couple clef/valeur pour chaque éléments du tableau.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## Syntaxe

```js
arr.entries();
```

### Valeur de retour

Un nouvel objet qui est un itérateur pour {{jsxref("Array")}}.

## Exemples

### Parcourir un tableau avec ses index et éléments

```js
const arr = ["a", "b", "c"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
// 0 "a"
// 1 "b"
// 2 "c"
```

### Boucle `for...of`

On peut avoir le même résultat en utilisant une boucle [for...of](/fr/docs/Web/JavaScript/Reference/Instructions/for...of) :

```js
var arr = ["a", "b", "c"];
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [`for...of`](/fr/docs/Web/JavaScript/Reference/Instructions/for...of)
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration)
