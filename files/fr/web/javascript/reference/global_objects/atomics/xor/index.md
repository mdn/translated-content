---
title: Atomics.xor()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/xor
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/xor
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/xor
---
{{JSRef}}

La méthode statique **`Atomics.xor()`** calcule le résultat d'un OU exclusif (XOR) binaire entre une valeur donnée et une valeur du tableau partagé à un emplacement donné. Elle renvoie l'ancienne valeur qui était contenue à cette position. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{EmbedInteractiveExample("pages/js/atomics-xor.html")}}

## Syntaxe

    Atomics.xor(typedArray, index, valeur)

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` à laquelle calculer le OU exclusif binaire.
- `valeur`
  - : La valeur avec laquelle on souhaite calculer le OU exclusif binaire.

### Valeur de retour

L'ancienne valeur située à cet emplacement du tableau (`typedArray[index]`).

### Exceptions

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Description

L'opération binaire OU exclusif (XOR) renvoie 1 si `a` et `b` sont différents. La table de vérité correspondante est :

| `a` | `b` | `a ^ b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

Par exemple, le calcul d'un OU exclusif binaire entre 5 et 1 (`5 ^ 1`) renvoie `0100`, qui correspond à 4 en notation décimale.

    5  0101
    1  0001
       ----
    4  0100

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // renvoie 5, l'ancienne valeur
Atomics.load(ta, 0);   // 4
```

## Spécifications

| Spécification                                                                | État                         | Commentaires                     |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.xor', 'Atomics.xor')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics.xor")}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.or()")}}
