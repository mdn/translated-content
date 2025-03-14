---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
---

{{JSRef}}

El método **`handler.set()`** captura las asignaciones de un valor a una determinada propiedad.

## Sintaxis

```js
var p = new Proxy(target, {
  set: function (target, property, value, receiver) {},
});
```

### Parámetros

El método `set` recibe los siguientes parámetros. `this` se asocia al handler.

- `target`
  - : El objeto objetivo.
- `property`
  - : El nombre de la propiedad a la que se le asignará el valor.
- `value`
  - : El nuevo valor asignado a la propiedad.
- `receiver`

  - : El objeto al que originalmente iba dirigida la asignación. Normalmente es el proxy. Sin embargo el manejador o `set` handler puede ser llamado de forma indirecta a través de un prototipo entre otros.

    Por ejemplo, suponga que un escript ejecuta la sentencia `obj.name = "jen"`, y `obj` no es un proxy, y no posee la propiedad `.name`, pero tiene un proxy en su cadena de prototipos. El manejador `set` de este proxy será llamado y obj será pasado como el receiver.

### Valor Devuelto

El método `set` debe devolver un valor booleano. Devolverá `true` para indicar que la asignación se ha llevado a cabo con éxito. Si devuelve `false`, y la asignación tiene lugar en modo estricto, se lanzará un error de tipo `TypeError`.

## Descripción

El método **`handler.set`** captura la asignación de un valor a una propiedad.

### Qué intercepta

Las siguientes operaciones son capturadas:

- Asignación a propiedades: `proxy[foo] = bar` y `proxy.foo = bar`
- Asignación a propiedades heredadas: `Object.create(proxy)[foo] = bar`
- {{jsxref("Reflect.set()")}}

### Invariantes

Si los siguientes invariantes son violados, el proxy lanzará un {{jsxref("TypeError")}}:

- El valor de la propiedad no puede ser diferente al de la correspondiente propiedad del objeto, si esta es una propiedad no configurable, o sin permisos de escritura.
- No se puede asignar un valor a una propiedad si la correspondiente propiedad en el objeto objetivo es no configurable y tiene `undefined` como su atributo \[\[Set]].
- En modo estricto, la devolución de `false` pro parte del manejador `set` lanzará una excepción del tipo {{jsxref("TypeError")}}.

## Ejemplos

El siguiente código captura la asignación de un valor a una propiedad.

```js
var p = new Proxy(
  {},
  {
    set: function (target, prop, value, receiver) {
      target[prop] = value;
      console.log("property set: " + prop + " = " + value);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "propiedad asignada: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.set()")}}
