---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le tableau typé **`BigInt64Array`** représente un tableau d'entiers signés sur 64 bits dans l'ordre d'octets de la plateforme. Si vous avez besoin de contrôler l'ordre des octets, utilisez plutôt {{JSxRef("DataView")}}. Le contenu est initialisé à `0n` sauf si des données d'initialisation sont fournies explicitement. Une fois créé, vous pouvez accéder aux éléments du tableau en utilisant les méthodes de l'objet ou la syntaxe d'indice standard (c'est‑à‑dire la notation entre crochets).

`BigInt64Array` est une sous-classe de la classe cachée {{JSxRef("TypedArray")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: BigInt64Array", "taller")}}

```js interactive-example
const buffer = new ArrayBuffer(24);
const bigint64 = new BigInt64Array(buffer);
bigint64[0] = 5886014448488689n;
bigint64[1] = 1881938909131133n;
bigint64[2] = 1898875537769492n;

bigint64[0] = 6118793953620967n;
console.log(bigint64);
// Sortie attendue : BigInt64Array [6118793953620967n, 1881938909131133n, 1898875537769492n]

console.log(bigint64[2]);
// Sortie attendue : 1898875537769492n

console.log("Longueur de Array :", bigint64.length);
// Sortie attendue : Longueur de Array : 3

console.log("Longueur en octets de Array :", bigint64.byteLength);

// Sortie attendue : Longueur en octets de Array : 24
console.log("Décalage en octets de Array :", bigint64.byteOffset);
// Sortie attendue : Décalage en octets de Array : 0

bigint64.set([100n, 200n], 1);
console.log(bigint64);
// Sortie attendue : BigInt64Array [6118793953620967n, 100n, 200n]
```

## Constructeur

- {{JSxRef("BigInt64Array/BigInt64Array", "BigInt64Array()")}}
  - : Crée un nouvel objet `BigInt64Array`.

## Propriétés statiques

_Hérite également des propriétés statiques de son parent {{JSxRef("TypedArray")}}_.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Retourne un nombre indiquant la taille d'un élément. `8` dans le cas de `BigInt64Array`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}_.

## Propriétés d'instance

_Hérite également des propriétés d'instance de son parent {{JSxRef("TypedArray")}}_.

Ces propriétés sont définies sur `BigInt64Array.prototype` et sont partagées par toutes les instances de `BigInt64Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Cette propriété retourne un nombre correspondant à la quantité d'octets pour un élément du tableau. `8` dans le cas d'un `BigInt64Array`.
- {{JSxRef("Object/constructor", "BigInt64Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `BigInt64Array`, la valeur initiale est le constructeur {{JSxRef("BigInt64Array/BigInt64Array", "BigInt64Array")}}.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}_.

## Exemples

### Différentes façons de créer un objet `BigInt64Array`

```js
// Construction à partir d'une longueur
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// Construction à partir d'un tableau typé
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array[1n, 2n, 3n]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- L'objet {{JSxRef("TypedArray")}}
- L'objet {{JSxRef("ArrayBuffer")}}
- L'objet {{JSxRef("DataView")}}
