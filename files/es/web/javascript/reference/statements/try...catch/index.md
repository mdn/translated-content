---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
---

{{jsSidebar("Statements")}}

La declaración **`try...catch`** señala un bloque de instrucciones a intentar (**`try`**), y especifica una respuesta si se produce una excepción (**`catch`**).

{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}

## Sintaxis

```
try {
    try_statements
}
[catch (exception_var_1 if condition_1) { // non-standard
    catch_statements_1
}]
...
[catch (exception_var_2) {
    catch_statements_2
}]
[finally {
    finally_statements
}]
```

- `try_statements`

  - : Las sentencias que serán ejecutadas.

- `catch_statements_1`, `catch_statements_2`

  - : Sentencias que se ejecutan si una excepción es lanzada en el bloque `try`.

- `exception_var_1`, `exception_var_2`

  - : Identificador que contiene un objeto de excepcion asociado a la cláusula `catch`.

- `condition_1`

  - : Una expresión condicional.

- `finally_statements`
  - : Sentencias que se ejecutan después de que se completa la declaración `try` . Estas sentencias se ejecutan independientemente de si una excepcion fue lanzada o capturada.

## Descripción

La sentencia `try` consiste en un bloque `try` que contiene una o más sentencias. Las llaves `{}` se deben utilizar siempre `,` incluso para una bloques de una sola sentencia. Al menos un bloque `catch` o un bloque `finally` debe estar presente. Esto nos da tres formas posibles para la sentencia `try`:

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

Un bloque `catch` contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque `try`. Si cualquier sentencia dentro del bloque `try` (o en una funcion llamada desde dentro del bloque `try`) lanza una excepción, el control cambia inmediatamente al bloque `catch` . Si no se lanza ninguna excepcion en el bloque `try`, el bloque `catch` se omite.

La bloque `finally` se ejecuta despues del bloque `try` y el/los bloque(s) `catch` hayan finalizado su ejecución. Éste bloque siempre se ejecuta, independientemente de si una excepción fue lanzada o capturada.

Puede anidar una o más sentencias `try`. Si una sentencia `try` interna no tiene una bloque `catch`, se ejecuta el bloque `catch` de la sentencia `try` que la encierra.

Usted también puede usar la declaración `try` para manejar excepciones de JavaScript. Consulte la [Guía de JavaScript](/es/docs/Web/JavaScript/Guide) para obtener mayor información sobre excepciones de JavaScript.

### Bloque catch incondicional

Cuando solo se utiliza un bloque `catch`, el bloque `catch` es ejecutado cuando cualquier excepción es lanzada. Por ejemplo, cuando la excepción ocurre en el siguiente código, el control se transfiere a la cláusula `catch`.

```js
try {
  throw "myException"; // genera una excepción
} catch (e) {
  // sentencias para manejar cualquier excepción
  logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
}
```

El bloque `catch` especifíca un identificador ( `e` en el ejemplo anterior) que contiene el valor de la excepción. Este valor está solo disponible en el {{Glossary("Scope", "scope")}} de el bloque `catch`.

### Bloques catch condicionales

Tambien se pueden crear "bloques `catch` condicionales", combinando bloques `try...catch` con estructuras `if...else if...else` como estas:

```js
try {
    myroutine();  // puede lanzar tres tipos de excepciones
} catch (e) {
    if (e instanceof TypeError) {
        // sentencias para manejar excepciones TypeError
    } else if (e instanceof RangeError) {
        // sentencias para manejar excepciones RangeError
    } else if (e instanceof EvalError) {
        // sentencias para manejar excepciones EvalError
    } else {
       // sentencias para manejar cualquier excepción no especificada
       logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
}
```

### El identificador de excepciones

Cuando una excepción es lanzada en el bloque `try`, `exception_var` (por ejemplo, la `e` en `catch (e)`) guarda el valor de la excepción. Se puede usar éste identificador para obtener información acerca de la excepción que fue lanzada. Este valor está solo disponible en el {{Glossary("Scope", "scope")}} de el bloque `catch`.

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### La cláusula `finally`

La cláusula `finally` contiene sentencias a ejecutarse después de que las cláusulas `try` y `catch` se ejecuten, pero antes de las sentencias que le siguen al bloque `try..catch..finally`. Note que la cláusula `finally` se ejecuta sin importar si una excepción es o no lanzada. Si una excepción es lanzada, las instrucciones en la cláusula `finally` se ejecutan incluso si ninguna cláusula `catch` maneja la excepción.

Usted puede usar la cláusula finally para hacer que su script falle plácidamente cuando una excepción ocurra; por ejemplo, para hacer una limpieza general, usted puede necesitar liberar un recurso que su script haya retenido.

Puede parecer extraño tener una cláusula relacionada a una excepción que se ejecuta sin importar si hay una excepción o no, pero esta concepción en realidad sirve a un propósito. El punto importante no es que la cláusula `finally` siempre se ejecuta, si no más bien que el codigo ordinario que le sigue a `try..catch` no.

Por ejemplo, si otra excepción ocurre dentro de un bloque `catch` de una declaración `try`, cualquier codigo restante en el mismo bloque exterior `try` que encierra ese `try..catch` (o en el flujo principal, si no es un bloque `try` exterior) , no será ejecutado, dado que el control es inmediatamente transferido al bloque `catch` del `try` exterior (o el generador de error interno, si no es en un bloque `try`).

Por lo tanto, cualquier rutina de limpieza hecha en esa sección encerrada (o la principal) antes de que exista, será saltada. Sin embargo, si la declaración `try` tiene un bloque `finally`, entonces el código de ese bloque `finally` será ejecutado primero para permitir tal limpieza, y ENTONCES el bloque `catch` de la otra declaración `try` (o el generador de error) tomará el control para manejar la segunda excepción.

Ahora, si esa rutina de limpieza debiera ser hecha ya sea que el código del `try..catch` tenga éxito o no, entonces si el bloque `finally` se ejecutase solo después de una excepción, el mismo código de limpieza tendría que estar presente dentro y fuera del bloque `finally`, y por lo tanto no hay razón para no tener el bloque `finally` solo, y dejarlo ejecutarse sin importar si hay excepciones o no.

El siguiente ejemplo abre un archivo y despues ejecuta sentencias que usan el archivo (JavaScript del lado del servidor permite acceder a archivos). Si una excepción es lanzada mientras el archivo está abierto, la cláusula `finally` cierra el archivo antes de que el script falle. El código en `finally` también se ejecuta después de un retorno explícito de los bloques `try` o `catch`.

```js
openMyFile();
try {
  // retiene un recurso
  writeMyFile(theData);
} finally {
  closeMyFile(); // siempre cierra el recurso
}
```

## Ejemplos

### Bloques try anidados

Primero, veamos que pasa con esto:

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "finally"
// "outer" "oops"
```

Ahora, si nosotros ya capturamos la excepción en una declaración try interna agregando un bloque catch.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
```

Y ahora vamos a relanzar el error.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Cualquier excepción dada será capturada solo una vez por el bloque catch más cercano a menos que sea relanzado. Por supuesto cualquier nueva excepción que se origine en el bloque 'interno' (porque el código en el bloque catch puede hacer algo que lanze un error), será capturado por el bloque 'externo'.

### Retornando de un bloque finally

Si el bloque `finally` retorna un valor, este valor se convierte en el valor de retorno de toda la producción `try-catch-finally`, a pesar de cualquier sentencia `return` en los bloques `try` y `catch`. Esto incluye excepciones lanzadas dentro del bloque catch.

```js
(function () {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// Output:
// "inner" "oops"
// "finally"
```

El "oops" externo no es lanzado debido al retorno en el bloque finally. Lo mismo aplicaría para cualquier valor retornado del bloque catch.

Vea los ejemplos para {{jsxref("Sentencias/throw", "throw")}}.

## Vea también

- {{jsxref("Error")}}
- {{jsxref("Sentencias/throw", "throw")}}
