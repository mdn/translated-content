---
title: Constructor Object()
slug: Web/JavaScript/Reference/Global_Objects/Object/Object
l10n:
  sourceCommit: effd5de5e42bfe045c3bf44b2d7b14f4d6146785
---

{{JSRef}}

El **constructor `Object`** convierte la entrada en un objeto. Su comportamiento depende del tipo de entrada.

- Si el valor es [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) o {{jsxref("undefined")}}, este crea y regresa un objeto vacio.
- En caso contrario, devuelve un objeto de un tipo que corresponde al valor dado.
- Si el valor ya es un objeto, devuelve el valor.

## Sintaxis

```js-nolint
new Object(value)
Object(value)
```

> **Nota:** `Object()` puede ser llamado con o sin [`new`](/es/docs/Web/JavaScript/Reference/Operators/new). Ambos crean un nuevo objeto.

### Parametros

- `value`
  - : Cualquier valor.

## Ejemplos

### Creando un nuevo Objeto

```js
const o = new Object();
o.foo = 42;

console.log(o);
// { foo: 42 }
```

### Uso de objetos dados tipos indefinidos y nulos

Los siguientes ejemplos almacenan un objeto `Object` vacio en `o`

```js
const o = new Object();
```

```js
const o = new Object(undefined);
```

```js
const o = new Object(null);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Inicializador de objetos](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer)
