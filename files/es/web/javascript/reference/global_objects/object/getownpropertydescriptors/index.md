---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

El método **`Object.getOwnPropertyDescriptors()`** regresa todos los descriptores de propiedad propios de un objeto dado.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## Sintáxis

```js
Object.getOwnPropertyDescriptors(obj);
```

### Parámetros

- `obj`
  - : El objeto para el cual obtener todos los descriptores de propiedad.

### Valores devueltos

Un objeto que contiene todos los descriptores de propiedad propios de un objeto.

## Descripción

Este método permite la examinación de la descripción precisa de todas las propiedades de un objeto. Una propiedad en JavaScript consiste en un valor-cadena nombre y un descriptor de propiedad. Más información acerca de los tipos de descriptores de propiedad y sus atributos pueden ser encontrados en {{jsxref("Object.defineProperty()")}}.

Un descriptor de propiedad es un registro con algunos de los siguientes atributos:

- `value`
  - : El valor asociado con la propiedad (solo descriptores de datos).
- **`writable`**
  - : `true` si y solo si el valor asociado con la propiedad puede ser cambiado (solo descriptores de datos).
- `get`
  - : Un función que sirve como un getter para la propiedad, o {{jsxref("undefined")}} si no hay getter (solo descriptores de acceso).
- `set`
  - : Una función que sirve como un setter para la propiedad, o {{jsxref("undefined")}} si no hay setter (solo descriptores de acceso).
- `configurable`
  - : `true` si y solo si el tipo de este descriptor de propiedad puede ser cambiado y si la propiedad puede ser borrada de el objeto correspondiente.
- `enumerable`
  - : `true` si y solo si esta propiedad aparece durante la enumeración de las propiedad en el objeto correspondiente.

## Ejemplos

### Creando un clon superficial

Mientras el método {{jsxref("Object.assign()")}} solo copiará las propiedades enumerables y propias de un objeto fuente a un objeto destino, puedes usar este método y {{jsxref("Object.create()")}} para una copia superficial entre dos objetos desconocidos:

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### Creando una subclase

Una manera típica de crear una subclase es definir la subclase, establecer su prototipo a una instancia de la superclase, y después definir propiedades en esa instancia. Esto puede ponerse incómodo especialmente por los getters y setters. En cambio, tú puedes usar este código para establecer el prototipo:

```js
function superclass() {}
superclass.prototype = {
  // Define tus métodos y propiedades aquí
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // Define tus métodos y propiedades aquí
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
