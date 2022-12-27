---
title: get ArrayBuffer[@@species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
tags:
  - ArrayBuffer
  - JavaScript
  - Propiedad
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/@@species
original_slug: Web/JavaScript/Referencia/Objetos_globales/ArrayBuffer/@@species
---
{{JSRef}}

La propiedad de acceso **`ArrayBuffer[@@species]`** devuelve el constructor `ArrayBuffer`.

## Sintaxis

```
ArrayBuffer[Symbol.species]
```

## Descripción

La propiedad de acceso `species` devuelve el constructor predeterminado para los objetos `ArrayBuffer`. Los constructores de subclase pueden anularlo para cambiar la asignación del constructor.

## Ejemplos

La propiedad `species` devuelve la función constructora predeterminada, que es el constructor `ArrayBuffer` para los objetos `ArrayBuffer`:

```js
ArrayBuffer[Symbol.species]; // función ArrayBuffer()
```

En un objeto de colección derivado (por ejemplo, su búfer de array personalizado `MyArrayBuffer`), `MyArrayBuffer` species es el constructor `MyArrayBuffer`. Sin embargo, es posible que desee sobrescribir esto para devolver objetos `ArrayBuffer` principales en sus métodos de clase derivados:

```js
class MyArrayBuffer extends ArrayBuffer {
  // Overwrite MyArrayBuffer species to the parent ArrayBuffer constructor
  static get [Symbol.species]() { return ArrayBuffer; }
}
```

## Especificaciones

| Especificación                                                                                                           | Estado                       | Comentario          |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}}     | {{Spec2('ES6')}}         | Definición inicial. |
| {{SpecName('ESDraft', '#sec-get-arraybuffer-@@species', 'get ArrayBuffer [ @@species ]')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.ArrayBuffer.@@species")}}

## Ver también

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
