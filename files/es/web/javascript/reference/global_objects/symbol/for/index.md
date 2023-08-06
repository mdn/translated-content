---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: ef59c2d0399ba62ec2632810564ab12a198af868
---

{{JSRef}}

El método **`Symbol.for(key)`** busca los símbolos existentes en un registro de símbolos en tiempo de ejecución con la clave dada y lo devuelve si lo encuentra. En caso contrario, se crea un nuevo símbolo en el registro global de símbolos con esta clave.

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## Sintaxis

```js
Symbol.for(key);
```

### Parametros

- `key`
  - : String, obligatoria. La clave del símbolo (y también se utiliza para la descripción del símbolo).

### Valor de retorno

Un símbolo existente con la clave dada si se encuentra; en caso contrario, se crea un nuevo símbolo y se devuelve.

## Descripción

A diferencia de `Symbol()`, la función `Symbol.for()` crea un símbolo disponible en una lista global de registro de símbolos. Además, `Symbol.for()` no crea necesariamente un nuevo símbolo en cada llamada, sino que comprueba primero si un símbolo con la `key` dada ya está presente en el registro. En ese caso, se devuelve ese símbolo. Si no se encuentra ningún símbolo con la clave dada, `Symbol.for()` creará un nuevo símbolo global.

### Registro mundial de símbolos

El registro global de símbolos es una lista con la siguiente estructura de registros y se inicializa vacía:

| Nombre del campo | Valor                                                      |
| ---------------- | ---------------------------------------------------------- |
| [[key]]          | Una clave de cadena utilizada para identificar un símbolo. |
| [[symbol]]       | Un símbolo que se almacena globalmente.                    |

## Ejemplos

### Uso de Symbol.for()

```js
Symbol.for("foo"); // crear un nuevo símbolo global
Symbol.for("foo"); // obtener el símbolo ya creado

// El mismo símbolo global, pero no localmente
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// La clave también se utiliza como descripción
const sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

Para evitar conflictos de nombres con sus claves de símbolos globales y otros símbolos globales (del código de la biblioteca), puede ser una buena idea poner un prefijo a sus símbolos:

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Symbol.keyFor()")}}
