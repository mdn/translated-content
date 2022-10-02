---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
translation_of: Web/JavaScript/Reference/Global_Objects/Object/keys
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/keys
---
{{JSRef("Global_Objects", "Object")}}

## Resumen

El método `Object.keys()` devuelve un array de las propiedades **`names`** de un objeto, en el mismo orden como se obtienen en un loop normal

## Sintaxis

```
Object.keys(obj)
```

### Parámetros

- `obj`
  - : El objeto cuyas propiedades enumerables serán devueltas.

### Valor de retorno

Un array de strings que representan toda las propiedades del objeto

## Descripción

`Object.keys` devuelve un array cuyos elementos son strings correspondientes a las propiedades enumerables que se encuentran directamente en el object. El orden de las propiedades es el mismo que se proporciona al iterar manualmente sobre las propiedades del objeto.

## Ejemplos

```js
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// arreglo como objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// arreglo como objeto con nombres ordenados aleatoriamente
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo es una propiedad no enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
```

Si quieres todas las propiedades, incluso las no enumerables, mira {{jsxref("Object.getOwnPropertyNames()")}}.

## Notas

En ES5, si el argumento para este método no es un objeto (uno primitivo), causará un {{jsxref("Global_Objects/TypeError", "TypeError")}}. En ES2015, un argumento no-objeto será coaccionado hacia un objeto.

```js
> Object.keys("foo")
// TypeError: "foo" is not an object  (ES5)

> Object.keys("foo")
// ["0", "1", "2"]                    (ES2015)
```

## Polyfill

Para añadir soporte `Object.keys` en entornos más antiguos que no lo soportan de forma nativa, copia el siguiente fragmento:

```js
// De https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
```

Ten en cuenta que el código anterior incluye claves no-enumerables en IE7 (y quizás IE8), al pasar en un objeto desde una ventana diferente.

Para un simple Polyfill del Navegador, mira [Javascript - Compatibilidad de Object.keys en Navegadores](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## Especificaciones

| Especificación                                                               | Estado                       | Comentarios                                           |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.14', 'Object.keys')}}     | {{Spec2('ES5.1')}}     | Definición inicial. Implementado en JavaScript 1.8.5. |
| {{SpecName('ES2015', '#sec-object.keys', 'Object.keys')}} | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ESDraft', '#sec-object.keys', 'Object.keys')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Object.keys")}}

## Mira también

- [Propiedades de enumerabilidad y pertenencia](/es/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
