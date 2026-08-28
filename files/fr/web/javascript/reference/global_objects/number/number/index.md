---
title: Constructeur Number()
short-title: Number()
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Number()`** crée des objets {{JSxRef("Number")}}. Lorsqu'il est appelé en tant que fonction, il retourne des valeurs primitives de type `Number`.

## Syntaxe

```js-nolint
new Number(value)
Number(value)
```

> [!NOTE]
> `Number()` peut être appelé avec ou sans {{JSxRef("new")}}, mais avec des effets différents. Voir [valeur de retour](#valeur_de_retour).

### Paramètres

- `value`
  - : La valeur numérique de l'objet à créer.

### Valeur de retour

Lorsque `Number()` est appelé en tant que fonction (sans {{JSxRef("new")}}), il retourne `value` [converti en primitive de type nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique). En particulier, les valeurs de grand entier ({{JSxRef("BigInt")}}) sont converties en nombres au lieu de générer une erreur. Si `value` est absent, il devient `0`.

Lorsque `Number()` est appelé en tant que constructeur (avec `new`), il utilise le processus de coercition ci-dessus et retourne un objet {{JSxRef("Number")}} enveloppant, qui n'est **pas** une primitive.

> [!WARNING]
> Vous devez rarement utiliser `Number` en tant que constructeur.

## Exemples

### Créer des objets `Number`

```js
const a = new Number("123"); // a === 123 vaut false
const b = Number("123"); // b === 123 vaut true
a instanceof Number; // vaut true
b instanceof Number; // vaut false
typeof a; // "object"
typeof b; // "number"
```

### Utiliser `Number()` pour convertir un `BigInt` en nombre

`Number()` est le seul cas où un `BigInt` peut être converti en nombre sans générer d'erreur, car c'est très explicite.

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

Notez que cela peut entraîner une perte de précision si le `BigInt` est trop grand pour être [représenté en toute sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation pour le comportement moderne de `Number` (avec prise en charge des littéraux binaires et octaux) dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- La propriété native {{JSxRef("NaN")}}
- L'objet {{JSxRef("Math")}}
- L'objet {{JSxRef("BigInt")}}
