---
title: "Warning: unreachable code after return statement"
slug: Web/JavaScript/Reference/Errors/Stmt_after_return
---

{{jsSidebar("Errors")}}

## Mensaje

```
Warning: unreachable code after return statement (Firefox)
```

## Tipo de error

Advertencia

## Qué va mal?

Código inalcanzable después de una sentencia de retorno puede ocurrir en estas situaciones:

- Cuando se usa una expresión despues de una sentencia {{jsxref("Statements/return", "return")}}
- Cuando se usa una sentencia de retorno sin punto y coma pero inluye una expresion directamente despues.

Cuando una expresion existe después de una sentencia de retorno válida, se da una advertencia para indicar que el código después de la sentencia de retorno es inalcanzable, lo que significa que nunca será ejecutado.

¿Porqué deberia tener un punto y coma despues de la sentencia de retorno? En el caso de sentencias sin punto y coma, estas pueden no ser claras, puede que el desarrollador intentara retornar el resultado de la sentencia en la siguiente línea, o detener la ejecución y retornar. La advertencia indica que hay una ambiguedad en la forma en la que la sentencia de retorno está escrita.

Advertencias no seran mostradas por retornos sin punto y coma si la sentencia lo sigue:

- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Statements/function", "function")}}

## Ejemplos

### Casos invalidos

```js example-bad
function f() {
  var x = 3;
  x += 4;
  return x; // return sale de la funcion inmediatamente
  x -= 3; // esta linea nunca se ejecutara ; es inalcanzable
}

function f() {
  return; // es tratado como `return;`
  3 + 4; //la funcion regresa, y esta linea nunca es alcanzada
}
```

### Casos validos

```js example-good
function f() {
  var x = 3;
  x += 4;
  x -= 3;
  return x; // OK: regreso despues de todas las otras declaraciones
}

function f() {
  return 3 + 4; // OK: sin punto y coma regresa la expresion en la misma linea
}
```

## Ve tambien

- {{jsxref("Statements/return", "Automatic Semicolon Insertion", "#Automatic_Semicolon_Insertion", 1)}}
