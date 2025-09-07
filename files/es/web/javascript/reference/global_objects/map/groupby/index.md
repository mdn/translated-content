---
title: Map.groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Map/groupBy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

> [!NOTE]
> En algunas versiones de algunos navegadores, este método fue implementado como el método `Array.prototype.groupToMap()`. Debido a problemas de compatibilidad web, ahora es implementado como un método estático. Revise la [tabla de compatibilidad con navegadores](#compatibilidad_con_navegadores) para más detalles.

El método estático **`Map.groupBy()`** agrupa los elementos de un iterable, utilizando los valores regresados por la función provista. El objeto {{jsxref("Map")}} regresado utiliza los valores únicos de la función de prueba como llaves, los cuales pueden utilizarse para obtener el arreglo de elementos en cada grupo.

El método es útil principalmente cuando se quiere agrupar elementos que están asociados con un objeto, y particularmente cuando el objeto puede cambiar con el tiempo. Si el objeto es invariante, podrías en su lugar representarlo utilizando una cadena de caracteres _string_, y agrupando los elementos con {{jsxref("Object.groupBy()")}}.

{{InteractiveExample("JavaScript Demo: Map.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## Sintaxis

```js-nolint
Map.groupBy(items, callbackFn)
```

### Parámetros

- `items`
  - : Un [iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#el_protocolo_iterador) (así como un {{jsxref("Array")}}) cuyos elementos serán agrupados.
- `callbackFn`
  - : Una función que se ejecuta por cada elemento en el iterable. Debe regresar un valor ({{Glossary("object")}} o un {{Glossary("primitive")}}) indicando el grupo del elemento actual. La función es llamada con los siguientes argumentos:
    - `element`
      - : El elemento actual que está siendo procesado.
    - `index`
      - : El índice del elemento actual que esta siendo procesado.

### Valor regresado

Un objeto {{jsxref("Map")}} con llaves para cada grupo, cada llave asignada a un arreglo que contiene los elementos del grupo asociado.

## Descripción

`Map.groupBy()` llama a la función de devolución de llamada `callbackFn` pasada como parámetro, una vez por cada elemento en el iterable. La función de devolución de llamada debe regresar un valor indicando el grupo del elemento asociado. Los valores regresados por la `callbackFn` son utilizados como llaves para el {{jsxref("Map")}} regresado por `Map.groupBy()`. Cada llave tiene asociado un arreglo que contiene todos los elementos para los cuales la función de devolución de llamada regresó el mismo valor.

Los elementos en el objeto {{jsxref("Map")}} regresado por la función y en el iterable original, son los mismos (sin {{Glossary("deep copy", "copias profundas")}}). Al cambiar la estructura interna de los elementos, esta se vera reflejada en ambos, el iterable original y el {{jsxref("Map")}} regresado por la función.

Este método es util cuando necesitas agrupar información que está relacionada a un objeto en particular y que potencialmente puede cambiar con el tiempo. Esto es debido a que, incluseo si el objeto es modificado, continuará funcionando como llave para el objeto `Map` regresado por la función. Si en su lugar creas una representación _string_ para el objeto y la utilizas como la llave para agrupar en {{jsxref("Object.groupBy()")}}, debes mantener el mapeo entre el objeto original y su representacion de acuerdo a como el objeto cambia.

> [!NOTE]
> Para accesar los grupos en el objeto `Map` regresado por la función, debes utilizar el mismo objeto que fue usado como llave en el `Map` (a pesar de que puedes modificar sus propiedades). No puedes usar otro objeto que de casulaidad tiene el mismo nombre y las mismas propiedades.

`Map.groupBy` no lee el valor de `this`. Puede ser llamado en cualquier objeto y regresará una nueva instancia de {{jsxref("Map")}}.

## Ejemplos

### Utilizando Map.groupBy()

Primero definimos un arreglo que contenga objetos que representen un inventario de diferentes alimentos. Cada alimento tiene un `type` y un `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

El código de abajo utiliza `Map.groupBy()` con una función flecha que regresa las llaves de objeto llamadas `restock` o `sufficient`, dependiendo de si la propiedad del elemento es `quantity < 6`. El objeto `result` que regresa, es un `Map` así que necesitamos llamar `get()` con la llave para obtener el arreglo.

```js
const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

Note que el argumento `{ quantity }` de la función, es un ejemplo básico de la [sintaxis de destructuración de objetos pasados como parámetros de función](/es/docs/Web/JavaScript/Reference/Operators/Destructuring#desempacar_campos_de_objetos_pasados_como_parámetro_de_función). Esto desempaca la propiedad `quantity` del objeto pasado como parámetro, y lo asigna a la variable llamada `quantity` en el cuerpo de la función. Esta es una forma muy concisa de accesar los valores relevantes de elementos, dentro de una función.

La llave de un `Map` puede ser modificada y aún usarse. Sin embargo no puedes recrear la llave y aún usarla. Por esa razón es importante que cualquiera que necesite usar el _map_ mantenga una referencia de sus llaves.

```js
// La llave puede ser modificada y aún usarse
restock["fast"] = true;
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]

// Una nueva llave no puede ser usada, incluso si tiene la misma estructura!
const restock2 = { restock: true };
console.log(result.get(restock2)); // undefined
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Map.groupBy` en `core-js`](https://github.com/zloirock/core-js#array-grouping)
- Guía de [Colleciones indexadas](/es/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Map/Map", "Map()")}}
- {{jsxref("Object.groupBy()")}}
