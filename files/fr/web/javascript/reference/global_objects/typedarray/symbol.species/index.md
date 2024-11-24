---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
original_slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
---

{{JSRef}}

La propriété d'accesseur **`TypedArray[@@species]`** renvoie le constructeur [du tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray).

## Syntaxe

```js
TypedArray[Symbol.species];
```

où TypedArray vaut :

- [`Int8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int8Array)
- [`Uint8Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
- [`Uint8ClampedArray`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray)
- [`Int16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int16Array)
- [`Uint16Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array)
- [`Int32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Int32Array)
- [`Uint32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array)
- [`Float32Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float32Array)
- [`Float64Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Float64Array)

## Description

L'accesseur `species` renvoie le constructeur par défaut pour les tableaux typés. Les constructeurs des sous-classes peuvent surcharger ce symbole pour modifier l'affectation du constructeur.

## Exemples

La propriété `species` renvoie le constructeur par défaut qui est l'un des constructeurs de tableau typé (selon le type [de tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray#Les_objets_TypedArray) de l'objet) :

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

Pour un objet construit sur mesure (par exemple une tableau `MonTableauTypé`), le symbole `species` de `MonTableauTypé` sera le constructeur `MonTableauTypé`. Mais on peut vouloir surcharger ce comportement pour renvoyer le constructeur du type parent :

```js
class MonTableauTypé extends Uint8Array {
  // On surcharge species pour MonTableauTypé
  // pour récupérer le constructeur Uint8Array
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
