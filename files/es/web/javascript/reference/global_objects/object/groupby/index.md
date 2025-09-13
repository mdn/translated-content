---
title: Object.groupBy()
short-title: groupBy()
slug: Web/JavaScript/Reference/Global_Objects/Object/groupBy
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

> [!NOTE]
> En algunas versiones de ciertos navegadores, este método fue implementado como el método `Array.prototype.group()`. Debido a problemas de compatibilidad web, ahora es implementado como un método estático. Consulta la [tabla de compatibilidad con navegadores](#browser_compatibility) para más detalles.

El método estático **`Object.groupBy()`** agrupa los elementos de un iterable según las cadenas que devuelve la función proporcionada. El objeto resultante incluye una propiedad distinta para cada grupo, y cada una contiene un arreglo con los elementos que pertenecen a ese grupo.

Este método se debe usar cuando los nombres de los grupos pueden representarse como cadenas de texto. Si se necesita agrupar elementos utilizando como clave un valor arbitrario, se debe usar {{jsxref("Map.groupBy()")}} en su lugar.

{{InteractiveExample("JavaScript Demo: Object.groupBy()", "taller")}}

```js interactive-example
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

## Sintaxis

```js-nolint
Object.groupBy(items, callbackFn)
```

### Parámetros

- `items`
  - : Un [iterable](/es/docs/Web/JavaScript/Reference/Iteration_protocols#el_protocolo_iterable) (como un {{jsxref("Array")}}) cuyos elementos se agruparán.
- `callbackFn`
  - : Una función que se ejecuta por cada elemento del iterable. Debe devolver un valor que pueda usarse como clave de propiedad (una cadena o un [symbol](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) indicando el grupo del elemento actual. La función es llamada con los siguientes parámetros:
    - `element`
      - : El elemento actual que está siendo procesado.
    - `index`
      - : El índice del elemento actual que esta siendo procesado.

### Valor regresado

Un [objeto de prototipo `null`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) que contiene propiedades para cada grupo. A cada propiedad se le asigna un arreglo con los elementos del grupo correspondiente.

## Descripción

`Object.groupBy()` llama a la función `callbackFn` una vez por cada elemento del iterable. Esta función debe devolver una cadena o un symbol (los valores de otros tipos son [transformados en cadenas](/es/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)) que indique el grupo al que pertenece el elemento. Los valores devueltos por `callbackFn` se utilizan como claves del objeto retornado por `Object.groupBy()`. Para cada valor devuelto por la función, se crea una clave que agrupa en un arreglo a todos los elementos correspondientes.

Tanto los elementos del objeto devuelto como los del iterable original son los mismos (no son {{Glossary("deep copy", "copias profundas")}}). Cualquier cambio en la estructura interna de los elementos se reflejará tanto en el iterable original como en el objeto devuelto.

## Ejemplos

### Utilizando Object.groupBy()

Primero definimos un arreglo que contiene objetos que representan un inventario de distintos alimentos. Cada comida tiene un `type` y un `quantity`.

```js
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];
```

El siguiente código agrupa los elementos según sea el valor de su propiedad `type`.

```js
const result = Object.groupBy(inventory, ({ type }) => type);

/* El resultado es:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

La función flecha simplemente devuelve la propiedad `type` de cada elemento del arreglo cada vez que es llamada. Nótese que el argumento de la función `{ type }` es un ejemplo básico de la sintaxis de [desestructuración de objetos para parámetros de función](/es/docs/Web/JavaScript/Reference/Operators/Destructuring#desempacar_campos_de_objetos_pasados_como_parámetro_de_función). Esto extrae la propiedad `type` del objeto que se pasa como parámetro y la asigna a una variable llamada `type` dentro del cuerpo de la función. Es una forma muy concisa de acceder a los valores relevantes de los elementos dentro de una función.

También podemos crear grupos a partir de valores inferidos de una o más propiedades de los elementos. A continuación se muestra un ejemplo muy similar, que clasifica los elementos en los grupos `ok` o `restock`, según el valor de la propiedad `quantity`.

```js
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = Object.groupBy(inventory, myCallback);

/* El resultado es:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Object.groupBy` en `core-js`](https://github.com/zloirock/core-js#array-grouping)
- [es-shims polyfill de `Object.groupBy`](https://www.npmjs.com/package/object.groupby)
- Guía de [colecciones indexadas](/es/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Map.groupBy()")}}
