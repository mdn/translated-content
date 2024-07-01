---
title: while
slug: Web/JavaScript/Reference/Statements/while
---

{{jsSidebar("Statements")}}

## Resumen

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia

## Sintaxis

```
while (condicion)
  sentencia
```

- `condicion`

  - : Una expresión que se evalúa antes de cada paso del bucle. Si esta condición se evalúa como verdadera, se ejecuta `sentencia`. Cuando la condición se evalúa como false, la ejecución continúa con la `sentencia` posterior al bucle `while`.

- `sentencia`
  - : Una sentecia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro de un bucle, utiliza una sentencia {{jsxref("Sentencias/block", "block")}} (`{ ... }`) para agrupar esas sentencias.

## Ejemplos

El siguiente bucle `while` itera mientras `n` es menor que tres.

```js
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

Cada interación, el bucle incrementa `n` y la añade a `x`. Por lo tanto, `x` y `n` toman los siguientes valores:

- Después del primer pase: `n` = 1 y `x` = 1
- Después del segundo pase: `n` = 2 y `x` = 3
- Después del tercer pase: `n` = 3 y `x` = 6

Después de completar el tercer pase, la condición `n` < 3 no será verdadera más tiempo, por lo que el bucle terminará.

## Vea También

- {{jsxref("Sentencias/do...while", "do...while")}}
- {{jsxref("Sentencias/for", "for")}}
