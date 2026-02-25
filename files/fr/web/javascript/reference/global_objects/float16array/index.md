---
title: Float16Array
slug: Web/JavaScript/Reference/Global_Objects/Float16Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le tableau typé **`Float16Array`** représente un tableau de nombres à virgule flottante sur 16 bits dans l'ordre des octets de la plateforme. Si vous avez besoin de contrôler l'ordre des octets, utilisez plutôt {{JSxRef("DataView")}}. Le contenu est initialisé à `0` sauf si des données d'initialisation sont explicitement fournies. Une fois établi, vous pouvez référencer les éléments du tableau en utilisant les méthodes de l'objet ou la syntaxe standard d'index de tableau (c'est-à-dire la notation entre crochets).

`Float16Array` est une sous-classe de la classe cachée de {{JSxRef("TypedArray")}}.

> [!NOTE]
> La prise en charge de Float16 n'est pas universelle, que ce soit dans l'API JavaScript ou l'architecture CPU sous-jacente. Son utilisation peut entraîner des ralentissements des performances sur certaines plateformes. Elle est destinée à l'interaction avec des systèmes hautement optimisés et sensibles aux performances comme [les canevas à base de float <sup>(angl.)</sup>](https://github.com/w3c/ColorWeb-CG/blob/main/canvas_float.md), WebGPU, WebGL et les modèles d'apprentissage profond, y compris [stable diffusion <sup>(angl.)</sup>](https://github.com/huggingface/blog/blob/main/stable_diffusion.md).

## Constructeur

- {{JSxRef("Float16Array/Float16Array", "Float16Array()")}}
  - : Crée un nouvel objet `Float16Array`.

## Propriétés statiques

_Hérite aussi des propriétés statiques de son parent {{JSxRef("TypedArray")}}._

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Float16Array.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique correspondant à la taille d'un élément. `2` dans le cas de `Float16Array`.

## Méthodes statiques

_Hérite des méthodes statiques de son parent {{JSxRef("TypedArray")}}._

## Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("TypedArray")}}._

Ces propriétés sont définies sur `Float16Array.prototype` et partagées par toutes les instances de `Float16Array`.

- {{JSxRef("TypedArray/BYTES_PER_ELEMENT", "Float16Array.prototype.BYTES_PER_ELEMENT")}}
  - : Retourne une valeur numérique correspondant à la taille d'un élément. `2` dans le cas d'un `Float16Array`.
- {{JSxRef("Object/constructor", "Float16Array.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Float16Array`, la valeur initiale est le constructeur {{JSxRef("Float16Array/Float16Array", "Float16Array")}}.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("TypedArray")}}._

## Exemples

### Différentes manières de créer un `Float16Array`

```js
// À partir d'une longueur
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// À partir d'un tableau
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// À partir d'un autre TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// À partir d'un ArrayBuffer
const tampon = new ArrayBuffer(32);
const z = new Float16Array(tampon, 4, 4);
console.log(z.byteOffset); // 4

// À partir d'un itérable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16DepuisUnIterable = new Float16Array(iterable);
console.log(float16DepuisUnIterable);
// Float16Array [1, 2, 3]
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
