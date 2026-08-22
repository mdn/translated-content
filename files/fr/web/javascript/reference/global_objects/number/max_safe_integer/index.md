---
title: "Number : propriété statique MAX_SAFE_INTEGER"
short-title: MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
l10n:
  sourceCommit: c1c0f13171a9e266210f0b284243b2996fc3ec91
---

La propriété statique **`Number.MAX_SAFE_INTEGER`** représente le nombre entier sûr maximal en JavaScript (2<sup>53</sup> - 1).

Pour les entiers plus grands, envisagez d'utiliser le type {{JSxRef("BigInt")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.MAX_SAFE_INTEGER")}}

```js interactive-example
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Sortie attendue : 9007199254740991

console.log(x);
// Sortie attendue : 9007199254740992

console.log(x === y);
// Sortie attendue : true
```

## Valeur

`9007199254740991` (9 007 199 254 740 991, ou \~9 quadrillions).

{{js_property_attributes(0, 0, 0)}}

## Description

[Le format de nombre à virgule flottante double précision <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) n'a que 52 bits pour représenter la [mantisse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#encodage_des_valeurs_numériques), il ne peut donc représenter en toute sécurité que les entiers compris entre -(2<sup>53</sup> - 1) et 2<sup>53</sup> - 1. «&nbsp;Sûr&nbsp;» dans ce contexte fait référence à la capacité de représenter exactement les entiers et de les comparer correctement. Par exemple, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` est évalué à true, ce qui est mathématiquement incorrect. Voir {{JSxRef("Number.isSafeInteger()")}} pour plus d'informations.

Comme mentionné dans {{JSxRef("Number.EPSILON")}}, la précision des nombres dépend de leur magnitude. `Number.MAX_SAFE_INTEGER` représente la plus grande valeur pour laquelle les opérations au niveau des entiers peuvent être effectuées avec précision, mais vous pouvez toujours effectuer des calculs significatifs sur des nombres plus grands, simplement sans précision au niveau des entiers. Le plus grand nombre représentable en JavaScript est en fait {{JSxRef("Number.MAX_VALUE")}}, qui est approximativement 1,7976931348623157 × 10<sup>308</sup>.

Puisque `MAX_SAFE_INTEGER` est une propriété statique de {{JSxRef("Number")}}, vous l'utilisez toujours comme `Number.MAX_SAFE_INTEGER`, plutôt que comme une propriété d'une valeur numérique.

## Exemples

### Valeur de retour de `MAX_SAFE_INTEGER`

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Relation entre `MAX_SAFE_INTEGER` et `EPSILON`

{{JSxRef("Number.EPSILON")}} est 2<sup>-52</sup>, tandis que `MAX_SAFE_INTEGER` est 2<sup>53</sup> - 1 — les deux sont dérivés de la largeur de la mantisse, qui est de 53 bits (avec le bit le plus élevé étant toujours 1). Les multiplier donne une valeur très proche — mais pas égale — de 2.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.MAX_SAFE_INTEGER` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.MAX_SAFE_INTEGER` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-constants)
- La propriété statique {{JSxRef("Number.MIN_SAFE_INTEGER")}}
- La propriété statique {{JSxRef("Number.MAX_VALUE")}}
- La méthode statique {{JSxRef("Number.isSafeInteger()")}}
- L'objet {{JSxRef("BigInt")}}
