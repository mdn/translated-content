---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
translation_of: Web/JavaScript/Reference/Global_Objects/WeakSet
original_slug: Web/JavaScript/Referencia/Objetos_globales/WeakSet
browser-compat: javascript.builtins.WeakSet
---
{{JSRef}}

El objeto **`WeakSet`** te permite almacenar _objetos_ débiles en una colección.

## Descripción

Los objetos `WeakSet` son colecciones de objetos. Al igual que {{jsxref("Set")}},
cada objecto `WeakSet` puede estar solo una vez; todos los objetos en una colección `WeakSet` son unicos.

Las principales diferencias con el objeto {{jsxref("Set")}} son:

- `WeakSet` son colecciones de **objetos solamente**. No pueden contener valores arbitrarios de cualquier tipo, como pueden hacerlo los {{jsxref("Set")}}.
- El `WeakSet` es _débil_, lo que significa que las referencias a objectos en un `WeakSet` se mantienen _débilmente_. Si no existen otras referencias a un objecto almacenado en `WeakSet`, esos objectos pueden ser recolectados como basura.

  > **Nota:** Esto también significa que no hay una lista de objectos actuales almacenados en la colección. Los `WeakSets` no son enumerables.

### Caso de uso: Detección de referencias circulares

Las funciones que se llaman recursivamente necesitan una forma de
protección contra las estructuras de datos circulares mediante el seguimiento
de los objetos que ya se han procesado.

Los `WeakSet` son ideales para este propósito:

```js
// Ejecuta una devolución de llamada en todo lo almacenado dentro de un objeto
function execRecursively(fn, subject, _refs = null) {
  if (!_refs) _refs = new WeakSet();

  // Evita la recursividad infinita
  if (_refs.has(subject)) return;

  fn(subject);
  if ("object" === typeof subject) {
    _refs.add(subject);
    for (let key in subject) execRecursively(fn, subject[key], _refs);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // ¡Referencia circular!
execRecursively((obj) => console.log(obj), foo);
```

Aquí, se crea un `WeakSet` en la primera ejecución, y es pasado con cada llamada
de función subsiguiente (usando el parámetro interno `_refs`).

El número de objetos o su orden de recorrido es irrelevante, por lo que un `WeakSet`
es más adecuado (y eficaz) que un {{jsxref("Set")}} para rastrear referencias de
objetos, especialmente si hay una gran cantidad de objetos involucrados.

## Constructor

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : Crea un nuevo objeto `WeakSet`.

## Métodos de instancia

- {{jsxref("WeakSet.add", "WeakSet.prototype.add(<var>value</var>)")}}
  - : Añade `valor` al objeto `WeakSet`.
- {{jsxref("WeakSet.delete", "WeakSet.prototype.delete(<var>value</var>)")}}
  - : Elimina `value` del `WeakSet`. `WeakSet.prototype.has(value)` devolverá `false` después.
- {{jsxref("WeakSet.has", "WeakSet.prototype.has(<var>value</var>)")}}
  - : Devuelve un valor booleano que afirma si `value` está presente en el objeto `WeakSet` o no.

## Ejemplos

### Usando el objeto WeakSet

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // elimina foo del conjunto
ws.has(foo); // false, foo ha sido eliminado
ws.has(bar); // true, bar se mantiene
```

Tenga en cuenta que `foo !== bar`. Si bien son objetos similares,
_no son **el mismo objeto**_. Y así ambos se añaden al conjunto.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `WeakSet` en `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
