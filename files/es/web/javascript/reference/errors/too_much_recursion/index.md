---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## Mensaje

```
InternalError: too much recursion
```

## Tipo de error

{{jsxref("InternalError")}}.

## ¿Qué ha ido mal?

Una función que se llama a sí misma es una función recursiva. Podemos decir que la recursión es análoga a un bucle. Ambos ejecutan el mismo código varias veces y ambos requieren de una condición de fin (para evitar un bucle infinito o recursión infinita). Cuando hay recursión infinita o mucha recursión, JavaScript lanza este error.

## Ejemplos

Esta función recursiva se ejecuta 10 veces, debido a la condición de salida.

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" es la condición de salida
    return;
  }
  // hacer cosas
  loop(x + 1); // llamada recursiva
}
loop(0);
```

Si establecemos esta condición para un valor muy alto, no funcionará:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) {
    return;
  }
  // hacer cosas
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion (demasiada recursión)
```

## See also

- {{Glossary("Recursion")}}
- [Recursive functions](/es/docs/Web/JavaScript/Guide/Functions#Recursion)
