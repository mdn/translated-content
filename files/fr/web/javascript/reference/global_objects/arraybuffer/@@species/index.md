---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
tags:
  - ArrayBuffer
  - JavaScript
  - Propriété
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
original_slug: Web/JavaScript/Reference/Objets_globaux/ArrayBuffer/@@species
---
{{JSRef}}

La propriété d'accesseur **`ArrayBuffer[@@species]`** renvoie le constructeur `ArrayBuffer`.

## Syntaxe

```js
ArrayBuffer[Symbol.species]
```

## Description

L'accesseur `species` renvoie le constructeur par défaut pour les objets `ArrayBuffer`. Les constructeurs des sous-classes peuvent surcharger ce symbole pour modifier l'affectation du constructeur.

## Exemples

La propriété `species` renvoie le constructeur par défaut, soit `ArrayBuffer` dans le cas des objets `ArrayBuffer` :

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

Pour un objet dérivé (par exemple une classe sur mesure `MonArrayBuffer`), le symbole `species` renverra le constructeur `MonArrayBuffer`. Il est possible de surcharger ce comportement pour renvoyer le constructeur `ArrayBuffer` :

```js
class MonArrayBuffer extends ArrayBuffer {
  // On surcharge species pour renvoyer
  // le constructeur parent ArrayBuffer
  static get [Symbol.species]() { return ArrayBuffer; }
}
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.ArrayBuffer.@@species")}}

## Voir aussi

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
