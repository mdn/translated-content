---
title: Atomics.and()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/and
---

{{JSRef}}

La méthode statique **`Atomics.and()`** calcule un ET binaire avec une valeur donnée, à un emplacement donné du tableau. Elle renvoie l'ancienne valeur qui était contenue à cet emplacement. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{EmbedInteractiveExample("pages/js/atomics-and.html")}}

## Syntaxe

```js
Atomics.and(typedArray, index, valeur);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position dans `typedArray` où calculer le ET binaire.
- `valeur`
  - : Le nombre avec lequel on souhaite calculer le ET binaire.

### Valeur de retour

L'ancienne valeur qui était contenue à (`typedArray[index]`).

### Exceptions levée

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Description

Un ET binaire fournit la valeur 1 uniquement si `a` et `b` valent 1. La table de vérité pour l'opération ET est :

| `a` | `b` | `a & b` |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

Ainsi, si on calcule le ET binaire de 5 et 1 avec l'instruction `5 & 1`, cela fournira la valeur `0001`, qui correspond à 1 en notation décimale.

```
5  0101
1  0001
   ----

1  0001
```

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // renvoie 0, l'ancienne valeur
Atomics.load(ta, 0); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.or()")}}
- {{jsxref("Atomics.xor()")}}
