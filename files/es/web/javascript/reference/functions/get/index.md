---
title: get
slug: Web/JavaScript/Reference/Functions/get
---

{{jsSidebar("Funciones")}}

Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.

## Sintaxis

`{get prop() { . . . } }`

## Parámetros

- `prop`
  - : el nombre de la propiedad a unir con la función dada

## Descripción

A veces es deseable permitir acceso a una propiedad que retorna un valor dinámicamente calculado, o si desea mostrar el estado de alguna variable interna sin requerir el uso de llamadas a métodos explícitos. En JavaScript, esto se puede lograr con el uso de un getter (captador). No es posible tener simultáneamente un getter ligado a una propiedad y que dicha propiedad tenga actualmente un valor, aunque es posible usar un getter junto con un setter para crear un tipo de pseudo-propiedad.

Tenga en cuenta lo siguiente al trabajar con la sintaxis `get`:

- Puede tener un identificador que sea un número o una cadena.
- Debe tener exactamente cero parametros (ver [Cambio ES5 incompatible: las funciones getter y setter literal deben tener ahora exactamente cero o un argumento](http://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) para mas información);
- No debe haber múltiples getters para una misma propiedad (`{ get x() { }, get x() { } }` y `{ x: ..., get x() { } }` están prohibidos).

El getter puede ser removido usando el operador {{jsxref("Operadores/delete", "delete")}}.

## Ejemplos

### Definir un getter con el operador `get`

Esto creará una pseudo-propiedad `latest` (ver ejemplo) del objecto `o` que podría retornar la más reciente entrada dentro de `o.log`:

```js
var o = {
  get latest() {
    if (this.log.length > 0) {
      return this.log[this.log.length - 1];
    } else {
      return null;
    }
  },
  log: [],
};
```

Note que intentar asignar un valor a `latest` no lo cambiará.

### Borrar un getter usando el operador `delete`

```js
delete o.latest;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulta también

- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__defineGetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [Defining Getters and Setters](/es/JavaScript/Guide/Working_with_Objects#Defining_Getters_and_Setters) in JavaScript Guide
