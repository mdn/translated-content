---
title: "Number : propriété statique MIN_SAFE_INTEGER"
short-title: MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
l10n:
  sourceCommit: c1c0f13171a9e266210f0b284243b2996fc3ec91
---

La propriété statique **`Number.MIN_SAFE_INTEGER`** représente le nombre entier sûr minimal en JavaScript, ou -(2<sup>53</sup> - 1).

Pour les entiers plus petits, envisagez d'utiliser le type {{JSxRef("BigInt")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.MIN_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

console.log(Number.MIN_SAFE_INTEGER);
// Résultat attendu : -9007199254740991

console.log(x);
// Résultat attendu : -9007199254740992

console.log(x === y);
// Résultat attendu : true
```

## Valeur

`-9007199254740991` (-9 007 199 254 740 991, ou environs -9 quadrillions).

{{js_property_attributes(0, 0, 0)}}

## Description

[Le format de nombre à virgule flottante double précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) n'a que 52 bits pour représenter la [mantisse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#encodage_des_valeurs_numériques), il ne peut donc représenter en toute sécurité que les entiers compris entre -(2<sup>53</sup> - 1) et 2<sup>53</sup> - 1. «&nbsp;Sûr&nbsp;» dans ce contexte fait référence à la capacité de représenter exactement les entiers et de les comparer correctement. Par exemple, `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` est évalué à true, ce qui est mathématiquement incorrect. Voir {{JSxRef("Number.isSafeInteger()")}} pour plus d'informations.

Comme mentionné dans {{JSxRef("Number.EPSILON")}}, la précision des nombres dépend de leur magnitude. `Number.MIN_SAFE_INTEGER` représente la plus petite valeur pour laquelle les opérations au niveau des entiers peuvent être effectuées avec précision, mais vous pouvez toujours effectuer des calculs significatifs sur des nombres plus petits, simplement sans précision au niveau des entiers. Le plus grand nombre représentable en JavaScript est en fait {{JSxRef("Number.MAX_VALUE")}}, qui est approximativement 1,7976931348623157 × 10<sup>308</sup>.

Puisque `MIN_SAFE_INTEGER` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.MIN_SAFE_INTEGER`, plutôt que comme une propriété d'une valeur numérique.

## Exemples

### Utiliser `MIN_SAFE_INTEGER`

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.MIN_SAFE_INTEGER` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.MIN_SAFE_INTEGER` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-constants)
- La propriété statique {{JSxRef("Number.MAX_SAFE_INTEGER")}}
- La méthode statique {{JSxRef("Number.isSafeInteger()")}}
- L'objet {{JSxRef("BigInt")}}
