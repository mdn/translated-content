---
title: WeakMap.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/get
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Prototype
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/get
original_slug: Web/JavaScript/Referencia/Objetos_globales/WeakMap/get
---
{{JSRef}}

El método **`get()`** devuelve un elemento específico del objeto `WeakMap`.

{{EmbedInteractiveExample("pages/js/weakmap-prototype-get.html")}}

## Sintaxis

```
wm.get(key);
```

### Parámetros

- key
  - : Requerido. Es la llave del elemento a retornar desde el objeto WeakMap.

### Valores devueltos

El elemento asociado con la llave específica en el objeto WeakMap. Si la llave no está presente, devolverá {{jsxref("undefined")}}.

## Ejemplos

### Usando el método `get`

```js
var wm = new WeakMap();
wm.set(window, 'foo');

wm.get(window); // Devuelve "foo".
wm.get('baz');  // Devuelve undefined.
```

## Especificaciones

| Especificación                                                                                           | Estado                       | Comentarios         |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-weakmap.prototype.get', 'WeakMap.prototype.get')}} | {{Spec2('ES2015')}}     | Definición inicial. |
| {{SpecName('ESDraft', '#sec-weakmap.prototype.get', 'WeakMap.prototype.get')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.WeakMap.get")}}

## Vea también

- {{jsxref("WeakMap")}}
- {{jsxref("WeakMap.set()")}}
- {{jsxref("WeakMap.has()")}}
