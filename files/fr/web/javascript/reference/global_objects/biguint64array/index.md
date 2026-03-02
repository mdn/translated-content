---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le tableau typé **`BigUint64Array`** représente un tableau d'entiers non signés sur 64 bits dans l'ordre d'octets de la plateforme. Si vous avez besoin de contrôler l'ordre des octets, utilisez plutôt {{JSxRef("DataView")}}. Le contenu est initialisé à `0n` sauf si des données d'initialisation sont fournies explicitement. Une fois créé, vous pouvez accéder aux éléments du tableau en utilisant les méthodes de l'objet ou la syntaxe d'indice standard (c'est‑à‑dire la notation entre crochets).

`BigUint64Array` est une sous-classe de la classe cachée {{JSxRef("TypedArray")}}.

## Constructeur

- {{JSxRef("BigUint64Array/BigUint64Array", "BigUint64Array()")}}
  - : Crée un nouvel objet `BigUint64Array`.

## Propriétés statiques

_Hérite également des propriétés statiques de son parent {{JSxRef("TypedArray")}}_.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : Cette propriété retourne un nombre correspondant à la quantité d'octets pour un élément du tableau. Dans le cas de `BigUint64Array`, ce sera `8`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}_.

## Propriétés d'instance

_Hérite également des propriétés d'instance de son parent {{JSxRef("TypedArray")}}_.

Ces propriétés sont définies sur `BigUint64Array.prototype` et sont partagées par toutes les instances de `BigUint64Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Cette propriété retourne un nombre correspondant à la quantité d'octets pour un élément du tableau. `8` dans le cas d'un `BigUint64Array`.
- {{JSxRef("Object/constructor", "BigUint64Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `BigUint64Array`, la valeur initiale est le constructeur {{JSxRef("BigUint64Array/BigUint64Array", "BigUint64Array")}}.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}_.

## Exemples

### Différentes façons de créer un objet `BigUint64Array`

```js
// Construction à partir d'une longueur
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// Construction à partir d'un tableau
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// Construction à partir d'un tableau typé
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// Construction à partir d'un ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// Construction à partir d'un itérable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array[1n, 2n, 3n]
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
