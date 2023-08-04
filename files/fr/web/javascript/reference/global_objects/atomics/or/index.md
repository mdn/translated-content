---
title: Atomics.or()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/or
---

{{JSRef}}

La méthode statique **`Atomics.or()`** calcule le résultat d'un OU binaire entre une valeur donnée et une valeur du tableau typé et y place le résultat obtenu. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.

{{EmbedInteractiveExample("pages/js/atomics-or.html")}}

## Syntaxe

```js
Atomics.or(typedArray, index, value);
```

### Paramètres

- `typedArray`
  - : Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.
- `index`
  - : La position du tableau `typedArray` sur laquelle calculer le OU binaire.
- `valeur`
  - : Le nombre avec lequel calculer le OU binaire.

### Valeur de retour

L'ancienne valeur contenue à l'emplacement du tableau (`typedArray[index]`).

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si le type de `typedArray` n'est pas un des types entiers autorisés.
- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas tableau typé partagé.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Description

L'opération binaire OU renvoie 1 si `a` ou `b` valent 1. La table de vérité de cette opération est :

| `a` | `b` | `a \| b` |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

Par exemple, un OU binaire appliqué entre 5 et 1 (`5 | 1`) renvoie `0101`, ce qui correspond à 5 en notation décimale.

```
5  0101
1  0001
   ----

5  0101
```

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 2;

Atomics.or(ta, 0, 1); // renvoie 2, l'ancienne valeur
Atomics.load(ta, 0); // 3
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.and()")}}
- {{jsxref("Atomics.xor()")}}
