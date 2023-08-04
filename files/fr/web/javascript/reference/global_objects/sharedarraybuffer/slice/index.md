---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
---

{{JSRef}}

La méthode **`SharedArrayBuffer.prototype.slice()`** renvoie un nouvel objet {{jsxref("SharedArrayBuffer")}} dont le contenu est une copie des octets de l'objet `SharedArrayBuffer` courant entre un indice de début (inclus) et un indice de fin (exclus) (autrement dit, on copie une « tranche » du tampon courant). Si l'indice de début ou de fin est négatif, la position sera comptée à partir de la fin du tableau plutôt qu'à partir du début. L'algorithme appliqué est le même que {{jsxref("Array.prototype.slice()")}}_._

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}

## Syntaxe

```js
sab.slice();
sab.slice(début);
sab.slice(début, fin);
```

### Paramètres

- `début` {{optional_inline}}

  - : L'indice auquel commencer l'extraction (le début du tableau se situe à l'indice 0).

    Si la valeur est négative, `début` indique le décalage à partir de la fin du tableau. Ainsi `slice(-2)` permettra d'extraire les deux derniers éléments du tableau.

    Si `début` est absent, `slice` commencera l'extraction à partir de l'indice 0.

- `fin` {{optional_inline}}

  - : L'indice auquel finir l'extraction. Attention, la valeur du tableau pour cet indice n'est pas incluse dans l'extraction.

    Ainsi, `slice(1,4)` permettra d'extraire entre le deuxième et le quatrième élément (c'est-à-dire les trois éléments dont les indices sont respectivement 1, 2 et 3).

    Si `fin` est un indice négatif, il indique le décalage à partir de la fin du tableau. Autrement dit `slice(2,-1)` permettra d'extraire les éléments du tampon à partir du troisième élément et jusqu'à l'avant-avant-dernier élément.

    Si `fin` est absent, `slice` réalisera l'extraction jusqu'à la fin de la séquence (`sab.byteLength`).

### Valeur de retour

Un nouvel objet {{jsxref("SharedArrayBuffer")}} qui contient les éléments extraits.

## Exemples

```js
var sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Array.prototype.slice()")}}
