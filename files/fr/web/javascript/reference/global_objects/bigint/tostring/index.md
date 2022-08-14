---
title: BigInt.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toString
tags:
  - BigInt
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt/toString
---
{{JSRef}}

The **`toString()`** method returns a string representing the specified {{jsxref("BigInt")}} object. The trailing "n" is not part of the string.

{{EmbedInteractiveExample("pages/js/bigint-tostring.html")}}

## Syntaxe

```js
bigIntObj.toString([base])
```

### Paramètres

- `base`{{optional_inline}}
  - : Ce paramètre optionnel est compris entre 2 et 36 et indique la base à utiliser pour représenter les valeurs numériques.

### Valeur de retour

Une chaîne de caractères représentant l'objet {{jsxref("BigInt")}} courant.

### Exceptions

- {{jsxref("RangeError")}}
  - : Si la base fournie comme argument `toString()` est inférieure à 2 ou supérieure à 36, cela déclenchera une exception {{jsxref("RangeError")}}.

## Description

L'objet {{jsxref("BigInt")}} surcharge la méthode `toString()` de {{jsxref("Object")}}. Il n'hérite pas ou n'utilise pas {{jsxref("Object.prototype.toString()")}}. Pour les objets {{jsxref( "BigInt")}}, la méthode `toString()` renvoie une représentation textuelle de l'objet dans la base indiquée.

La méthode `toString()` analyse le premier argument qui lui est passé et tente de renvoyer une représentation textuelle dans cette base. Pour les bases supérieures à 10, ce seront les lettres de l'alphabet pour indiquer les chiffres supérieurs à 9. Pour les nombres hexadécimaux (base 16), les lettres `a` à `f` sont utilisées par exemple.

Si l'argument `base` n'est pas indiquée, ce sera la base 10 qui sera considérée par défaut.

Si `bigIntObj` est négatif, le signe est conservé, y compris lorsque la base est 2 (dans ce cas, la chaîne renvoyée sera la représentation binaire précédée par un signe `-` et **non** le complément à deux de `bigIntObj`).

## Exemples

### Utiliser `toString()`

```js
17n.toString();      // '17'
66n.toString(2);     // '1000010'
254n.toString(16);   // 'fe'
-10n.toString(2);    // -1010'
-0xffn.toString(2);  // '-11111111'
```

### Gestion du zéro négatif en `BigInt`

Il n'existe pas de zéro négatif pour `BigInt` car les entiers ne gèrent pas de concept de zéro négatif. `-0.0` est un concept relatif à la représentation flottante IEEE et n'est présent que pour le type {{jsxref("Number")}}.

```js
(-0n).toString();      // '0'
BigInt(-0).toString(); // '0'
```

## Spécifications

| Spécification                                                                                      | État                    |
| -------------------------------------------------------------------------------------------------- | ----------------------- |
| [Proposition pour `BigInt`](https://tc39.github.io/proposal-bigint/#sec-bigint.prototype.tostring) | Proposition de niveau 3 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.BigInt.toString")}}

## Voir aussi

- {{jsxref("BigInt.prototype.toLocaleString()")}}
- {{jsxref("BigInt.prototype.valueOf()")}}
- {{jsxref("Number.prototype.toString()")}}
