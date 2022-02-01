---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
tags:
  - BigInt
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt/asIntN
---
{{JSRef}}

La méthode statique **`BigInt.asIntN()`** permet d'écréter un nombre `BigInt` pour obtenir un entier signé entre 2^(largeur-1) et 2^(largeur-1)-1.

{{EmbedInteractiveExample("pages/js/bigint-asintn.html")}}

## Syntaxe

    var resultat = BigInt.asIntN(largeur, bigint);

### Paramètres

- `largeur`
  - : La quantité de bits disponible pour stocker l'entier.
- `bigint`
  - : L'entier qu'on souhaite stocker sur le nombre de bits indiqués.

### Valeur de retour

La valeur de `bigint` modulo 2^`largeur` comme entier signé.

## Exemples

La méthode `BigInt.asIntN()` peut être utile pour rester dans une arithmétique sur 64 bits :

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775807n
// négatif car dépassement sur le nombre de bits
```

## Spécifications

| Spécification                                                                | État                     |
| ---------------------------------------------------------------------------- | ------------------------ |
| [BigInt proposal](https://tc39.github.io/proposal-bigint/#sec-bigint.asintn) | Proposition de niveau 3. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.BigInt.asIntN")}}

## Voir aussi

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
