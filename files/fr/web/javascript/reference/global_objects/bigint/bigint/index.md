---
title: Constructeur BigInt()
short-title: BigInt()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`BigInt()`** retourne des valeurs primitives de type `BigInt`.

## Syntaxe

```js-nolint
BigInt(value)
```

> [!NOTE]
> `BigInt()` ne s'utilise pas avec l'opérateur [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new). Tenter de le construire avec `new` lève une erreur {{JSxRef("TypeError")}}.

### Paramètres

- `value`
  - : La valeur à convertir en valeur `BigInt`. Il peut s'agir d'une chaînes de caractères, d'un entier, d'une valeur booléenne ou d'un autre `BigInt`.

### Valeur de retour

Une valeur {{JSxRef("BigInt")}}. Les valeurs numériques doivent être des entiers et sont converties en `BigInt`. La valeur booléenne `true` devient `1n`, et `false` devient `0n`. Les chaînes de caractères sont analysées comme s'il s'agissait du texte source de littéraux entiers, ce qui signifie qu'elles peuvent comporter des espaces blancs au début et à la fin et être préfixées par `0b`, `0o` ou `0x`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si le paramètre est un nombre non entier.
- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Le paramètre ne peut pas être converti en primitif.
    - Après conversion en primitif, le résultat est {{JSxRef("undefined")}}, {{JSxRef("Operators/null", "null")}}, {{JSxRef("symbol")}}.
- {{JSxRef("SyntaxError")}}
  - : Levée si le paramètre est une chaîne de caractère qui ne peut pas être interprété comme un `BigInt`.

## Exemples

### Utiliser `BigInt()` pour convertir un nombre en `BigInt`

`BigInt()` est le seul cas où un nombre peut être converti en `BigInt` sans lever d'exception, car c'est très explicite. Cependant, seuls les entiers sont autorisés.

```js
BigInt(123); // 123n
BigInt(123.3); // RangeError : le nombre 123.3 ne peut pas être converti en BigInt car ce n'est pas un entier
```

### Utiliser des chaînes de caractères

```js
BigInt("123"); // 123n
BigInt("0b10101"); // 21n, soit 10101 en binaire
BigInt("0o123"); // 83n, soit 123 en octal
BigInt("0x123"); // 291n, soit 123 en hexadécimal
BigInt("  123  "); // 123n, les espaces blancs en début et fin sont autorisés
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La valeur {{JSxRef("BigInt")}}
