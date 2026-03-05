---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La propriété globale **`NaN`** est une valeur représentant une quantité qui n'est pas un nombre (<i lang="en">**N**ot **a** **N**umber</i> en anglais).

{{InteractiveExample("Démonstration JavaScript&nbsp;: NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// Sortie attendue : "1"

console.log(sanitize("NotANumber"));
// Sortie attendue : NaN
```

## Valeur

La même valeur numérique que {{JSxRef("Number.NaN")}}.

{{js_property_attributes(0,0,0)}}

## Description

`NaN` est une propriété de _l'objet global_. En d'autres termes, c'est une variable dans la portée globale.

Dans les navigateurs modernes, `NaN` est une propriété non configurable et non modifiable. Même lorsque ce n'est pas le cas, il faut éviter de la surcharger.

Il existe cinq types d'opérations différents qui retournent `NaN`&nbsp;:

- Conversion de nombre échouée (par exemple, explicitement comme `parseInt("blabla")`, `Number(undefined)`, ou implicitement comme `Math.abs(undefined)`)
- Opération mathématique dont le résultat n'est pas un nombre réel (par exemple, `Math.sqrt(-1)`)
- Forme indéterminée (par exemple, `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- Méthode ou expression dont l'opérande est ou devient contraint à `NaN` (par exemple, `7 ** NaN`, `7 * "blabla"`) — cela signifie que `NaN` est contagieux
- Autres cas où une valeur invalide doit être représentée comme un nombre (par exemple, une [Date](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) invalide `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` et ses comportements n'ont pas été inventés par JavaScript. Sa sémantique en arithmétique à virgule flottante (y compris le fait que `NaN !== NaN`) est définie par [IEEE 754 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Double_precision_floating-point_format). Les comportements de `NaN` incluent&nbsp;:

- Si `NaN` intervient dans une opération mathématique (mais pas dans les [opérations bit à bit](/fr/docs/Web/JavaScript/Reference/Operators#opérateurs_de_décalage_binaires)), le résultat est généralement aussi `NaN`. (Voir le [contre-exemple](#échapper_silencieusement_nan) ci-dessous.)
- Lorsque `NaN` est l'un des opérandes d'une comparaison relationnelle (`>`, `<`, `>=`, `<=`), le résultat est toujours `false`.
- `NaN` n'est égal (avec [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/fr/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) et [`!==`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) à aucune autre valeur — y compris à une autre valeur `NaN`.

`NaN` fait aussi partie des valeurs [équivalentes à faux](/fr/docs/Glossary/Falsy) en JavaScript.

## Exemples

### Tester les comparaisons avec `NaN`

Pour savoir si une valeur est `NaN`, utilisez {{JSxRef("Number.isNaN()")}} ou {{JSxRef("isNaN()")}} pour déterminer le plus clairement possible si une valeur est `NaN` — ou, puisque `NaN` est la seule valeur qui se compare inégal à elle-même, vous pouvez effectuer une auto-comparaison comme `x !== x`.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

Cependant, notez la différence entre `isNaN()` et `Number.isNaN()`&nbsp;: la première retourne `true` si la valeur est actuellement `NaN`, ou si elle va devenir `NaN` après avoir été convertie en nombre, tandis que la seconde retourne `true` uniquement si la valeur est actuellement `NaN`&nbsp;:

```js
isNaN("bonjour le monde"); // true
Number.isNaN("bonjour le monde"); // false
```

Pour la même raison, l'utilisation d'une valeur `BigInt` générera une erreur avec `isNaN()` et non avec `Number.isNaN()`&nbsp;:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

De plus, certaines méthodes de tableau ne peuvent pas trouver `NaN`, tandis que d'autres le peuvent. En particulier, celles qui recherchent un index ({{JSxRef("Array/indexOf", "indexOf()")}}, {{JSxRef("Array/lastIndexOf", "lastIndexOf()")}}) ne peuvent pas trouver `NaN`, tandis que celles qui recherchent une valeur ({{JSxRef("Array/includes", "includes()")}}) le peuvent&nbsp;:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Les méthodes acceptant un prédicat correctement défini peuvent toujours trouver NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

Pour plus d'informations sur `NaN` et sa comparaison, voir [Comparaison d'égalité et identité](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness).

### Valeurs `NaN` distinctes observables

Il est possible de produire deux nombres à virgule flottante ayant des représentations binaires différentes mais qui sont tous deux `NaN`, car dans le [codage IEEE 754 <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/NaN#Floating_point), tout nombre à virgule flottante avec un exposant `0x7ff` et une mantisse non nulle est `NaN`. En JavaScript, il est possible de manipuler les bits à l'aide des [tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays).

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Obtenir une représentation en octets de NaN
const n = f2b(NaN);
const m = f2b(NaN);
// Modifier le bit de signe, ce qui n'a pas d'importance pour NaN
n[7] += 2 ** 7;
// n[0] += 2**7; pour les processeurs gros-boutistes
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
// Modifier le premier bit, qui est le bit de poids faible de la mantisse et n'a pas d'importance pour NaN
m[0] = 1;
// m[7] = 1; pour les processeurs gros-boutistes
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan3)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### Échapper silencieusement `NaN`

`NaN` propagates through mathematical operations, so it's usually sufficient to test for `NaN` once at the end of calculation to detect error conditions. The only case where `NaN` gets silently escaped is when using [exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation) with an exponent of `0`, which immediately returns `1` without testing the base's value.

```js
NaN ** 0 === 1; // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Number.NaN")}}
- La méthode {{JSxRef("Number.isNaN()")}}
- La fonction {{JSxRef("isNaN()")}}
