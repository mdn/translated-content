---
title: Set.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Set/clear
tags:
  - ECMAScript6
  - JavaScript
  - Prototype
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/clear
original_slug: Web/JavaScript/Referencia/Objetos_globales/Set/clear
---
{{JSRef}}

El método **`clear()`** remueve todos los elementos de un objeto `Set`.

## Sintaxis

```
mySet.clear();
```

### Valor de retorno

{{jsxref("undefined")}}.

## Ejemplos

### Usando el método clear

```js
var mySet = new Set();
mySet.add(1);
mySet.add("foo");

mySet.size;       // 2
mySet.has("foo"); // true

mySet.clear();

mySet.size;       // 0
mySet.has("bar")  // false
```

## Especificaciones

| Especificación                                                                                       | Estado                       | Comentario          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-set.prototype.clear', 'Set.prototype.clear')}}         | {{Spec2('ES6')}}         | Initial definition. |
| {{SpecName('ESDraft', '#sec-set.prototype.clear', 'Set.prototype.clear')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidad de navegadores

{{Compat("javascript.builtins.Set.clear")}}

## Ver también

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.delete()")}}
