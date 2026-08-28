---
title: "Number : méthode statique isSafeInteger()"
short-title: isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Number.isSafeInteger()`** détermine si la valeur fournie est un nombre qui est un _entier sûr_.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.isSafeInteger()")}}

```js interactive-example
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Précision sûre.";
  }
  return "La précision peut être perdue !";
}

console.log(warn(2 ** 53));
// Résultat attendu : "La précision peut être perdue !"

console.log(warn(2 ** 53 - 1));
// Résultat attendu : "Précision sûre."
```

## Syntaxe

```js-nolint
Number.isSafeInteger(testValue)
```

### Paramètres

- `testValue`
  - : La valeur à tester pour savoir si c'est un entier sûr.

### Valeur de retour

La valeur booléenne `true` si la valeur donnée est un nombre qui est un entier sûr. Sinon `false`.

## Description

Les entiers sûrs sont tous les entiers de -(2<sup>53</sup> - 1) à 2<sup>53</sup> - 1, inclus (±9 007 199 254 740 991). Un entier sûr est un entier qui&nbsp;:

- peut exactement être représenté avec un nombre à précision double selon IEEE-754, et
- dont la représentation IEEE-754 ne peut pas être le résultat de l'arrondi d'un autre entier pour s'adapter à la représentation IEEE-754.

Par exemple, 2<sup>53</sup> - 1 est un entier sûr&nbsp;: il peut être représenté exactement, et aucun autre entier n'est arrondi à cette valeur selon les règles d'arrondi IEEE-754. En revanche, 2<sup>53</sup> n'est _pas_ un entier sûr&nbsp;: il peut être représenté exactement en IEEE-754, mais l'entier 2<sup>53</sup> + 1 ne peut pas être représenté directement en IEEE-754 et est arrondi à 2<sup>53</sup> selon les règles d'arrondi au plus proche et à zéro.

La gestion des valeurs supérieures ou inférieures à \~9 quadrillions avec une précision totale nécessite l'utilisation d'une [bibliothèque d'arithmétique à précision arbitraire <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). Voir [Ce que tout programmeur doit savoir sur l'arithmétique en virgule flottante <sup>(angl.)</sup>](https://floating-point-gui.de/) pour plus d'informations sur les représentations en virgule flottante des nombres.

Pour les entiers plus grands, envisagez d'utiliser le type {{JSxRef("BigInt")}}.

## Exemples

### Utiliser `isSafeInteger()`

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Number.isSafeInteger` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-number)
- [La prothèse d'émulation es-shims de `Number.isSafeInteger` <sup>(angl.)</sup>](https://www.npmjs.com/package/number.issafeinteger)
- L'objet {{JSxRef("Number")}}
- La propriété statique {{JSxRef("Number.MIN_SAFE_INTEGER")}}
- La propriété statique {{JSxRef("Number.MAX_SAFE_INTEGER")}}
- L'objet {{JSxRef("BigInt")}}
