---
title: Symbol() constructor
slug: Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
l10n:
  sourceCommit: dc3dc7a9522107392cfea07243ff3c2cb34cb9a4
---

{{JSRef}}

El constructor `Symbol()` devuelve un valor de tipo **symbol**, pero está incompleto como constructor porque no soporta la sintaxis "`new Symbol()`" y no está pensado para ser heredado. Puede utilizarse como valor de una cláusula [`extends`](/es/docs/Web/JavaScript/Reference/Classes/extends) de una definición de `class`, pero una llamada a [`super`](/es/docs/Web/JavaScript/Reference/Operators/super) provocará una excepción.

{{EmbedInteractiveExample("pages/js/symbol-constructor.html", "taller")}}

## Sintaxis

```js
Symbol();
Symbol(description);
```

### Parámetros

- `description` {{optional_inline}}
  - : Una cadena. Una descripción del símbolo que puede utilizarse para la depuración pero no para acceder al símbolo en sí.

## Ejemplos

### Crear símbolos

Para crear un nuevo símbolo primitivo, se escribe `Symbol()` con una cadena opcional como descripción:

```js
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
```

El código anterior crea tres nuevos símbolos. Tenga en cuenta que `Symbol("foo")` no coacciona la cadena `"foo"` en un símbolo. Cada vez crea un nuevo símbolo:

```js
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

La siguiente sintaxis con el operador {{jsxref("Operators/new", "new")}} lanzará un {{jsxref("TypeError")}}:

```js
let sym = new Symbol(); // TypeError
```

Esto evita que los autores creen un objeto envolvente explícito `Symbol` en lugar de un nuevo valor de símbolo y podría ser sorprendente ya que la creación de objetos envolventes explícitos alrededor de tipos de datos primitivos es generalmente posible (por ejemplo, `new Boolean`, `new String` y `new Number`).

Si realmente quieres crear un objeto envolvente `Symbol`, puedes utilizar la función `Object()`:

```js
let sym = Symbol("foo");
let symObj = Object(sym);
typeof sym; // => "symbol"
typeof symObj; // => "object"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Glosario: Tipo de datos de los símbolos](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
