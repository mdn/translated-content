---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
---

{{JSRef}}

El objeto `WeakMap` es una colección de pares llave/valor en la que las llaves
deben ser objetos con valores de cualquier
[tipo de dato en JavaScript](/es/docs/Web/JavaScript/Data_structures#javascript_types),
y el cual no crea fuertes referencias a sus llaves.
Es decir, la presencia de un objeto como llave en un `WeakMap` no evita que el
objeto sea recolectado como basura. Una vez que se ha recopilado un objeto
utilizado como llave, sus valores correspondientes en cualquier `WeakMap` se
convierten en candidatos para la recolección de basura — siempre y cuando no se
les mencione fuertemente en otros lugares.

`WeakMap` permite asociar datos a objectos de una manera que no impide que se
recopilen los objectos llaves, incluso si los valores hacen referencia a las llaves.
Sin embargo, un `WeakMap` no permite observar la vitalidad de sus llaves, por lo
que no permite la enumeración; Si un `WeakMap` expusiera algún método para obtener
una lista de sus llaves, la lista dependería del estado de la recolección de basura,
introduciendo indeterminismo. Si quieres una lista de llaves,
se debe usar un {{jsxref("Map")}} en lugar de un `WeakMap`.

Puedes aprender más acerca de `WeakMap` en la sección de [objeto WeakMap](/es/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object)
de la guía [colecciónes con llaves](/es/docs/Web/JavaScript/Guide/Keyed_collections)

## Descripción

Las llaves de los WeakMaps solamente pueden ser del tipo `Object`. Los {{Glossary("Primitive", "Primitive data types")}} como claves no están permitidos (ej. un {{jsxref("Symbol")}} no pueden ser una clave de `WeakMap`).

### ¿Por qué WeakMap?

Una API de mapeo _podría_ ser implementada en JavaScript con dos arreglos (uno para las llaves, otro para los valores) compartidos por los cuatro métodos de la API.
Establecer elementos en este mapa implicaría colocar una llave y valor al final de cada uno de los arreglos simultáneamente.
Como resultado, los índices de la llave y el valor corresponderían a ambas matrices.
Obtener valores del mapa implicaría iterar a través de todas las llaves hasta encontrar una coincidencia, luego usar el índice de esta coincidencia para recuperar el valor correspondiente del arreglo de valores.

Tal implementación tendría dos inconvenientes principales:

1. El primero es una búsqueda *O(*n*)* (siendo _n_ el número de claves en el mapa) ya que ambas operaciones deben iterar a través de la lista de llaves para encontrar un valor coincidente.
2. El segundo inconveniente es un problema de pérdida de memoria por que los arreglos se aseguran que las referencias a cada llave y cada valor se mantengan indefinidamente. Estas referencias evitan que las llaves se recopilen como basura, incluso si no hay otras referencias al objeto. Esto también evitaría que los valores correspondientes se recopilen como basura.

Por el contrario, en un `WeakMap`, un objeto llave se refiere fuertemente a su contenido siempre que la llave no se recolecte como basura, pero débilmente a partir de ese momento. Como tal, un `WeakMap`:

- No evita la recolección de elementos no utilizados, lo que eventualmente elimina las referencias a la llave del objeto.
- Permite la recolección de basura de cualquier valor si no se hace referencia a sus objectos llave desde otro lugar que no sea un `WeakMap`.

`WeakMap` puede ser una construcción particularmente útil cuando se asignan llaves a información sobre la llave que es valiosa _solo si_ la llave no ha sido recolectada como basura.

Pero debido a que un `WeakMap` no permite observar la vida de sus llaves, sus llaves no son enumerables. No existe ningún método para obtener una lista de las llaves. Si lo hubiera, la lista dependería del estado de recolección de basura, introduciendo indeterminismo. Si desea tener una lista de llaves, debe usar {{jsxref("Map")}}.

## Constructor

- {{jsxref("WeakMap/WeakMap", "WeakMap()")}}
  - : Crea un nuevo objeto `WeakMap`.

## Métodos de instanciación

- {{jsxref("WeakMap.delete", "WeakMap.prototype.delete(<var>key</var>)")}}
  - : Elimina cualquier valor asociado a la `key`. `WeakMap.prototype.has(key)` regresará `false` después.
- {{jsxref("WeakMap.get", "WeakMap.prototype.get(<var>key</var>)")}}
  - : Regresa el valor asociado a la `key`, o `undefined` si no hay ninguno.
- {{jsxref("WeakMap.has", "WeakMap.prototype.has(<var>key</var>)")}}
  - : Devuelve un valor booleano que afirma si se ha asociado un valor a la `key` en el objeto `WeakMap` o no.
- {{jsxref("WeakMap.set", "WeakMap.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : Establece el `value` para la `key` en el objeto `WeakMap`. Devuelve el objeto `WeakMap`.

## Ejemplos

### Usando WeakMap

```js
const wm1 = new WeakMap(),
  wm2 = new WeakMap(),
  wm3 = new WeakMap();
const o1 = {},
  o2 = function () {},
  o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // El valor puede ser cualquier cosa, incluyendo un objeto o una función
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // Las llaves y los valores pueden ser cualquier objeto. ¡Incluso WeakMaps!

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, porque no hay llave para `o2` en `wm2`
wm2.get(o3); // undefined, porque ese es el valor estabecido

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (incluso si el valor en sí es 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

### Implementando una clase tipo-WeakMap con el método .clear()

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init);
  }
  clear() {
    this._wm = new WeakMap();
  }
  delete(k) {
    return this._wm.delete(k);
  }
  get(k) {
    return this._wm.get(k);
  }
  has(k) {
    return this._wm.has(k);
  }
  set(k, v) {
    this._wm.set(k, v);
    return this;
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `WeakMap` en `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Objetos WeakMap](/es/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object) en guía de [colecciónes con llaves](/es/docs/Web/JavaScript/Guide/Keyed_collections)
- [Ocultar detalles de implementación con ECMAScript 6 WeakMap](https://fitzgeraldnick.com/weblog/53/)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
