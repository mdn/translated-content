---
title: Constructor Proxy()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
l10n:
  sourceCommit: d85a7ba8cca98c2f6cf67a0c44f0ffd467532f20
---

{{JSRef}}

El constructor **`Proxy()`** crea objetos {{jsxref("Proxy")}}.

## Sintaxis

```js-nolint
new Proxy(target, handler)
```

> **Nota:** `Proxy()` solo se puede construir con [`new`](/es/docs/Web/JavaScript/Reference/Operators/new). Intentar llamarlo sin `new` arroja un {{jsxref("TypeError")}}.

### Parameters

- `target`
  - : Un objeto de destino para envolver con `Proxy`. Puede ser cualquier tipo de objeto, incluida una matriz nativa, una función o incluso otro proxy.
- `handler`
  - : Un objeto cuyas propiedades son funciones que definen el comportamiento del proxy cuando se realiza una operación en él.

## Descripción

Utilice el constructor `Proxy()` para crear un nuevo objeto `Proxy`.
Este constructor toma dos argumentos obligatorios:

- `target` es el objeto para el que desea crear el proxy
- `handler` es el objeto que define el comportamiento personalizado del proxy.

Un manejador vacío creará un proxy que se comporta, en casi todos los aspectos, exactamente como el objetivo. Al definir cualquiera de un conjunto de funciones en el objeto `handler`, puede personalizar aspectos específicos del comportamiento del proxy. Por ejemplo, al definir `get()` puede proporcionar una versión personalizada del [acceso a la propiedad](/es/docs/Web/JavaScript/Reference/Operators/Property_accessors) del objetivo.

### Funciones del manejador

Esta sección enumera todas las funciones de manejador que puede definir. Las funciones de manejador a veces se denominan _trampas_, porque atrapan las llamadas al objeto de destino subyacente.

- {{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}
  - : Una trampa para una llamada de función.
- {{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}
  - : Una trampa para el operador {{JSxRef("Operators/new", "new")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
  - : Una trampa para {{JSxRef("Object.defineProperty")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
  - : Una trampa para el operador {{JSxRef("Operators/delete", "delete")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}
  - : Una trampa para obtener valores de propiedad.
- {{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor",
    "handler.getOwnPropertyDescriptor()")}}
  - : Una trampa para {{JSxRef("Object.getOwnPropertyDescriptor")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
  - : Una trampa para {{JSxRef("Object.getPrototypeOf")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}
  - : Una trampa para el operador {{JSxRef("Operators/in", "in")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
  - : Una trampa para {{JSxRef("Object.isExtensible")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
  - : Una trampa para {{JSxRef("Object.getOwnPropertyNames")}} y {{JSxRef("Object.getOwnPropertySymbols")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions",
    "handler.preventExtensions()")}}
  - : Una trampa para {{JSxRef("Object.preventExtensions")}}.
- {{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}
  - : Una trampa para establecer valores de propiedad.
- {{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
  - : Una trampa para {{JSxRef("Object.setPrototypeOf")}}.

## Ejemplos

### Accesores de propiedad proxy selectivamente

En este ejemplo, el objetivo tiene dos propiedades, `notProxied` y `proxied`. Definimos un controlador que devuelve un valor diferente para `proxied` y permite cualquier otro acceso al objetivo.

```js
const target = {
  notProxied: "Valor original",
  proxied: "Valor original",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "Valor reemplazado";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "Valor original"
console.log(proxy.proxied); // "Valor reemplazado"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [`Proxy` y `Reflect` en la Guía de JavaScript](/es/docs/Web/JavaScript/Guide/Meta_programming)
- {{jsxref("Global_Objects/Reflect", "Reflect")}}
