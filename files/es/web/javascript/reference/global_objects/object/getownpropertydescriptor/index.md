---
title: Object.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
---

{{JSRef}}

El método **`Object.getOwnPropertyDescriptor()`** regresa como descripción de propiedad para una propiedad propia (eso es, una presente directamente en el objeto, no presente por la fuerza a través de la cadena de prototipo del objeto) de un objeto dado.

## Síntaxis

```
Object.getOwnPropertyDescriptor(obj, prop)
```

### Parametros

- `obj`
  - : El objeto en el que se busca la propiedad.
- `prop`
  - : El nombre de la propiedad del cuál se obtendrá la descripción.

### Valor de retorno

Un descriptor de propiedad de una propiedad dada si existe en el objeto, {{jsxref("undefined")}} en cualquier otro caso.

## Descripción

Éste método permite la examinación precisa de la descripción de una propiedad. Una propiedad en JavaScript consiste de el nombre de una cadena de valor y un descriptor de propiedad. Información más detallada acerca de los tipos de descripciones y sus atributos puede ser encontrada en {{jsxref("Object.defineProperty()")}}.

Una descripción de propiedad es un registro con alguno de los siguientes atributos:

- `value`
  - : El valor asociado con la propiedad (descriptores de datos unicamente).
- **`writable`**
  - : `true` si y solo si el valor asociado con la propiedad puede ser cambiada (descriptores de datos unicamente).
- `get`
  - : Una función que sirve como método de acceso para la propiedad, o {{jsxref("undefined")}} si no hay método de acceso (métodos de acceso de descripciones unicamente).
- `set`
  - : Una función que sirve como método de establecimiento para la propieda, o {{jsxref("undefined")}} si no hay método de establecimiento (métodos de establecimiento de descripciones unicamente).
- `configurable`
  - : `true` si y solo si el tipo de ésta descripción de propiedad puede ser cambiada y si la propiedad puede ser eliminada del objeto correspondiente.
- `enumerable`
  - : `true` si y solo si ésta propiedad aparece durante la enumeración de las propiedades del objeto correspondiente.

## Ejemplos

```js
var o, d;

o = {
  get foo() {
    return 17;
  },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
// d is { configurable: true, enumerable: true, get: /* la función de acceso */, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
// d is { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, "baz", {
  value: 8675309,
  writable: false,
  enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "baz");
// d es { value: 8675309, writable: false, enumerable: false, configurable: false }
```

## Notas

En ES5, si el primer argumento que se le pasa a éste método no es un objeto (primitivo), entonces causará un {{jsxref("TypeError")}}. En ES6, un no-objeto pasado como primer argumento será convertido (coerción) a un objeto en primera instancia.

```js
Object.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not an object  // Código ES5

Object.getOwnPropertyDescriptor("foo", 0);
// {configurable:false, enumerable:true, value:"f", writable:false}  // Código ES6
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
