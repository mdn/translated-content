---
title: Symbol.unscopables
slug: Web/JavaScript/Reference/Global_Objects/Symbol/unscopables
l10n:
  sourceCommit: 552892d8fc6707c47ae879aef32e6ac3023166ee
---

{{JSRef}}

El símbolo conocido como **`Symbol.unscopables`** se utiliza para especificar un valor de objeto cuyos nombres de propiedades propias y heredadas se excluyen de los enlaces de entorno [`with`](/es/docs/Web/JavaScript/Reference/Statements/with) del objeto asociado.

{{EmbedInteractiveExample("pages/js/symbol-unscopables.html")}}

## Descripción

El símbolo `@@unscopables` (`Symbol.unscopables`) puede definirse en cualquier objeto para excluir los nombres de propiedades de ser expuestos como variables léxicas en los enlaces de entorno [`with`](/es/docs/Web/JavaScript/Reference/Statements/with). Tenga en cuenta que si utiliza [Modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode), las declaraciones `with` no están disponibles y probablemente tampoco necesiten este símbolo.

Establecer una propiedad a `true` en un objeto `unscopable` la hará _unscopable_ y por tanto no aparecerá en las variables de ámbito léxico. Establecer una propiedad a `false` la hará `scopable` y por lo tanto aparecerá en las variables de ámbito léxico.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Scoping con sentencias

El siguiente código funciona bien en ES5 y posteriores. Sin embargo, en ECMAScript 2015 y posteriores, se introdujo el método {{jsxref("Array.prototype.keys()")}}. Eso significa que dentro del entorno `with` "keys" sería ahora el método y no la variable. Fue entonces cuando se introdujo el símbolo `unscopable`. Un ajuste incorporado de `unscopables` se implementa como {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}} para evitar que algunos de los métodos de Array se encuentren dentro de la declaración `with`.

```js
const keys = [];

with (Array.prototype) {
  keys.push("something");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

### Unscopables en objetos

También puede establecer `unscopables` para sus propios objetos.

```js
const obj = {
  foo: 1,
  bar: 2,
};

obj[Symbol.unscopables] = {
  foo: false,
  bar: true,
};

with (obj) {
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Array.@@unscopables", "Array.prototype[@@unscopables]")}}
- Sentencia [`with`](/es/docs/Web/JavaScript/Reference/Statements/with) (no disponible en [Strict mode](/es/docs/Web/JavaScript/Reference/Strict_mode))
