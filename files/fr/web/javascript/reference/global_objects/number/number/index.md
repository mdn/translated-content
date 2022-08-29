---
title: Constructeur Number()
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
translation_of: Web/JavaScript/Reference/Global_Objects/Number/Number
browser-compat: javascript.builtins.Number.Number
---
{{JSRef}}

Le **constructeur `Number()`** permet de créer un objet [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number).

## Syntaxe

```js
new Number(valeur)
```

### Paramètres

- `valeur`
  - : La valeur numérique de l'objet à créer.

## Exemples

### Créer des objets `Number`

```js
const a = new Number('123'); // a === 123 vaut false
const b = Number('123');     // b === 123 vaut true
a instanceof Number;         // true
b instanceof Number;         // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Number` (incluant les fonctionnalités récentes sur la prise en charge des littéraux binaires et octaux, avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN)
- L'objet global [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math)
- Les objets [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) qui permettent de représenter des entiers avec une précision arbitraire
