---
title: "Number : propriété statique EPSILON"
short-title: EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Number.EPSILON`** représente la différence entre 1 et la plus petite valeur en virgule flottante supérieure à 1.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.EPSILON")}}

```js interactive-example
const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// Résultat attendu : 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// Résultat attendu : true
```

## Valeur

2<sup>-52</sup>, soit approximativement `2.2204460492503130808472633361816E-16`.

{{js_property_attributes(0, 0, 0)}}

## Description

`Number.EPSILON` est la différence entre 1 et le nombre représentable suivant dans le format `Number`, car le [format à virgule flottante en double précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) n'a que 52 bits pour représenter la [mantisse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#encodage_des_valeurs_numériques), et le bit le plus bas a une importance de 2<sup>-52</sup>.

Notez que la précision absolue des nombres à virgule flottante diminue à mesure que le nombre augmente, car l'exposant croît tandis que la précision de la mantisse reste la même. {{JSxRef("Number.MIN_VALUE")}} est le plus petit nombre positif représentable, beaucoup plus petit que `Number.EPSILON`.

Puisque `EPSILON` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.EPSILON`, plutôt que comme une propriété d'une valeur numérique.

## Exemples

### Tester l'égalité

Tout système de codage des nombres utilisant un nombre fini de bits, quelle que soit la base choisie (par exemple, décimale ou binaire), est _nécessairement_ incapable de représenter tous les nombres exactement, car vous essayez de représenter un nombre infini de points sur la droite numérique en utilisant une quantité finie de mémoire. Par exemple, un système en base 10 (décimal) ne peut pas représenter 1/3 exactement, et un système en base 2 (binaire) ne peut pas représenter `0.1` exactement. Ainsi, par exemple, `0.1 + 0.2` n'est pas exactement égal à `0.3`&nbsp;:

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

Pour cette raison, il est souvent conseillé de **ne jamais comparer les nombres à virgule flottante avec `===`**. À la place, on peut considérer que deux nombres sont égaux s'ils sont _suffisamment proches_ l'un de l'autre. La constante `Number.EPSILON` est généralement un seuil raisonnable pour les erreurs si l'arithmétique est autour de l'ordre de grandeur de `1`, car `EPSILON`, en essence, définit à quel point le nombre «&nbsp;1&nbsp;» est précis.

```js
function egal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 0.2;
const y = 0.3;
const z = 0.1;
console.log(egal(x + z, y)); // true
```

Cependant, `Number.EPSILON` est inapproprié pour toute opération arithmétique sur une plus grande magnitude. Si vos données sont de l'ordre de grandeur de 10<sup>3</sup>, la partie décimale a une précision beaucoup plus faible que `Number.EPSILON`&nbsp;:

```js
function egal(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(x + y); // 2000.3000000000002 ; erreur de 10^-13 au lieu de 10^-16
console.log(egal(x + y, z)); // false
```

Dans ce cas, une tolérance plus grande est nécessaire. Comme les nombres comparés ont une magnitude d'environ `2000`, un multiplicateur tel que `2000 * Number.EPSILON` crée une tolérance suffisante pour cet exemple.

```js
function egal(x, y, tolerance = Number.EPSILON) {
  return Math.abs(x - y) < tolerance;
}

const x = 1000.1;
const y = 1000.2;
const z = 2000.3;
console.log(egal(x + y, z, 2000 * Number.EPSILON)); // true
```

En plus de la magnitude, il est important de considérer la _précision_ de vos entrées. Par exemple, si les nombres sont collectés à partir d'un champ de formulaire et que la valeur d'entrée ne peut être ajustée que par pas de `0.1` (c'est-à-dire [`<input type="number" step="0.1">`](/fr/docs/Web/HTML/Reference/Attributes/step)), il est généralement logique de permettre une tolérance beaucoup plus grande, telle que `0.01`, puisque les données n'ont qu'une précision de `0.1`.

> [!NOTE]
> Point important à retenir&nbsp;: ne vous contentez pas d'utiliser `Number.EPSILON` comme seuil pour les tests d'égalité. Utilisez un seuil approprié à la magnitude et à la précision des nombres que vous comparez.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.EPSILON` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.EPSILON` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-constants)
- L'objet {{JSxRef("Number")}}
