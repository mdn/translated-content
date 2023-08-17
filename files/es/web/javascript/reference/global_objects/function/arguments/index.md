---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef("Objetos_globales", "Function")}} {{deprecated_header}}

### Resumen

Un objeto de tipo arreglo correspondiente a los argumentos pasados a la función.

### Descripción

Use el objeto [`arguments`](/es/Referencia_de_JavaScript_1.5/Funciones/arguments) disponible dentro de las funciones en vez de `Function.arguments`.

### Notas

En caso de recursividad, es decir, si la función `f` aparece varias veces en la pila de llamada, el valor de `f.arguments` representa los argumentos correspondientes a la invocación más reciente de la función.

### Ejemplo

```js
function f(n) {
  g(n - 1);
}
function g(n) {
  print("antes: " + g.arguments[0]);
  if (n > 0) f(n);
  print("después: " + g.arguments[0]);
}
f(2);
```

resultados:

```
antes: 1
antes: 0
después: 0
después: 1
```
