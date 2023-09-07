---
title: 'SyntaxError: "use strict" no permitida en función con parámetros complejos'
slug: Web/JavaScript/Reference/Errors/Strict_non_simple_params
---

{{jsSidebar("Errors", "Errores")}}

La excepción de JavaScript: "`'use strict' no permitida en función`" ocurre cuando se usa una directiva `"use strict"` en la parte superior de una función con {{jsxref("Functions/Default_parameters", "parámetros predeterminados", "", 1)}}, {{jsxref("Functions/rest_parameters", "parámetros rest", "", 1)}} o {{jsxref("Operators/Destructuring_assignment" , "Desestructuración de parámetros", "", 1)}}.

## Mensaje

Edge:

```
No se puede aplicar el modo estricto en funciones con una lista de parámetros complejos
```

Firefox:

```
SyntaxError: "use strict" no permitido en la función con parámetro predeterminado
SyntaxError: "use strict" no permitido en la función con parámetro rest
SyntaxError: "use strict" no permitido en la función con parámetro de desestructuración
```

Chrome:

```
SyntaxError: directiva ilegal 'use strict' en función con una lista de parámetros complejos
```

## Tipo `Error`

{{jsxref("SyntaxError")}}.

## ¿Qué salió mal?

Se escribió una directiva `"use strict"` en la parte superior de una función que tiene uno de los siguientes parámetros:

- {{jsxref("Functions/Default_parameters", "Parámetros predeterminados", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Parámetros rest", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Desestructuración de parámetros", "", 1)}}

No está permitida una directiva `"use strict"` en la parte superior de dichas funciones según la especificación ECMAScript.

## Ejemplos

### Declaración de función

En este caso, la función `sum` tiene los parámetros predeterminados `a = 1` y `b = 2`:

```js example-bad
function sum(a = 1, b = 2) {
  SyntaxError: 'use strict' no permitida en la función con parámetros predeterminados
  'use strict';
  return a + b;
}
```

Si la función debe estar en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode), y todo el script o la función adjunta también está bien que esté en modo estricto, puedes mover la directiva `"use strict"` fuera de la función:

```js example-good
"use strict";
function sum(a = 1, b = 2) {
  return a + b;
}
```

### Expresión `Function`

Una expresión `function` puede usar otra solución alternativa:

```js example-bad
var sum = function sum([a, b]) {
  // SyntaxError: "use strict" no permitido en función con parámetros de desestructuración
  'use strict';
  return a + b;
};
```

Esta se puede convertir a la siguiente expresión:

```js example-good
var sum = (function () {
  "use strict";
  return function sum([a, b]) {
    return a + b;
  };
})();
```

### Función de flecha

Si una función de flecha necesita acceder a la variable `this`, puedes usar la función de flecha como función circundante:

```js example-bad
var callback = (...args) => {
  SyntaxError: "use strict" no permitido en la función con parámetro rest
  'use strict';
  return this.run(args);
};
```

Esta se puede convertir a la siguiente expresión:

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## Ve también

- {{jsxref("Strict_mode", "Modo estricto", "", 1)}}
- {{jsxref("Statements/function", "Declaración de función", "", 1)}}
- {{jsxref("Operators/function", "Expresión function", "", 1)}}
- {{jsxref("Functions/Default_parameters", "Parámetros predeterminados", "", 1)}}
- {{jsxref("Functions/rest_parameters", "Parámetros rest", "", 1)}}
- {{jsxref("Operators/Destructuring_assignment", "Desestructuración de parámetros", "", 1)}}
