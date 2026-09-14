---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

## Resumen

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

## Sintaxis

```
for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
```

- `expresion-inicial`
  - : Una expresión (incluyendo las expresiones de asignación) o la declaración de variable. Típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave `var`. Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle `for`. El resultado de esta expresión es descartado.

- `condicion`
  - : Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta `sentencia`. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de `for`.

- `expresion-final`
  - : Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la `condicion`. Generalmente se usa para actualizar o incrementar la variable contador.

- `sentencia`
  - : Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia {{jsxref("Statements/block", "block")}} (`{ ... }`) para agrupar aquellas sentecias.

### Ejemplos

#### Ejemplo: Usando `for`

La siguiente sentencia `for` comienza mediante la declaración de la variable `i` y se inicializa a `0`. Comprueba que `i` es menor que nueve, realiza las dos sentencias con éxito e incrementa `i` en 1 después de cada pase del bucle.

```js
for (var i = 0; i < 9; i++) {
  n += i;
  mifuncion(n);
}
```

## Vea También

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/Empty", "empty")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/do...while", "do...while")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Statements/for...of", "for...of")}}
