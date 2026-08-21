---
title: "Number : méthode statique isInteger()"
short-title: isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Number.isInteger()`** détermine si la valeur passée est un entier.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.isInteger()")}}

```js interactive-example
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Ça rentre !";
  }
  return "Ça NE rentre PAS !";
}

console.log(fits(5, 10));
// Sortie attendue : "Ça rentre !"

console.log(fits(5, 11));
// Sortie attendue : "Ça NE rentre PAS !"
```

## Syntaxe

```js-nolint
Number.isInteger(value)
```

### Paramètres

- `value`
  - : La valeur dont on souhaite savoir si elle est entière ou non.

### Valeur de retour

La valeur booléenne `true` si la valeur donnée est un entier. Sinon `false`.

## Description

Si la valeur cible est un entier, retourne `true`, sinon retourne `false`. Si la valeur est {{JSxRef("NaN")}} ou {{JSxRef("Infinity")}}, retourne `false`. La méthode retourne également `true` pour les nombres à virgule flottante pouvant être représentés sous forme d'entiers. Elle retourne toujours `false` si la valeur n'est pas un nombre.

Notez que certains littéraux numériques, bien qu'ils ne semblent pas être des entiers, représentent en réalité des entiers — en raison de la limite de précision du codage des nombres à virgule flottante ECMAScript (IEEE-754). Par exemple, `5.0000000000000001` ne diffère de `5` que de `1e-16`, ce qui est trop petit pour être représenté. (À titre de référence, [`Number.EPSILON`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON) stocke la distance entre 1 et le prochain nombre à virgule flottante représentable supérieur à 1, soit environ `2,22e-16`.) Par conséquent, `5.0000000000000001` est représenté avec le même encodage que `5`, ce qui fait que `Number.isInteger(5.0000000000000001)` retourne `true`.

De la même manière, les nombres de l'ordre de grandeur de [`Number.MAX_SAFE_INTEGER`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) subi une perte de précision et font que `Number.isInteger` retourne `true` même lorsqu'il ne s'agit pas d'un entier. (Le seuil réel varie en fonction du nombre de bits nécessaires pour représenter le nombre décimal — par exemple, `Number.isInteger(4500000000000000.1)` est `true`, mais `Number.isInteger(4500000000000000.5)` est `false`.)

## Exemples

### Utiliser `isInteger()`

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true
Number.isInteger(5.000000000000001); // false
Number.isInteger(5.0000000000000001); // true, à cause d'une perte de précision
Number.isInteger(4500000000000000.1); // true, à cause d'une perte de précision
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.isInteger` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.isInteger` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.isinteger)
- L'objet {{JSxRef("Number")}}
