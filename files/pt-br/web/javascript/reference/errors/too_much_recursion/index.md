---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## Mensagem

```
Error: Out of stack space (Edge)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded (Chrome)
```

## Tipo de erro

{{jsxref("InternalError")}}.

## O que deu errado?

Uma função que invoca a si mesma é chamada _função recursiva_. Assim que uma condição é atendida, a função para de se invocar.

De certa forma, recursão é análoga a um loop. Ambos executam o mesmo código múltiplas vezes, e ambos exigem uma condição (para evitar um loop infinito ou, nesse caso, uma recursão infinita). Quando são feitas excessivas invocações, ou a função não possui uma condição para interromper a recursividade, este erro é lançado.

## Exemplos

Esta função recursiva roda 10 vezes, como definido pela condição de saída.

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" é a condição de saída
    return;
  }
  loop(x + 1); // o código recursivo em si
}
loop(0);
```

Mudar esta condição para um valor extremamente alto não vai funcionar:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

A seguinte função recursiva não possui condição de saída. Assim, ela vai continuar se invocando indefinidamente (até que o erro seja lançado e a execução interrom).

```js example-bad
function loop(x) {
  // Não há condição de saída

  loop(x + 1); // Código recursivo
}

loop(0);

// InternalError: too much recursion
```

## Veja também

- {{Glossary("Recursion")}}
- [Funções recursivas](/pt-BR/docs/Web/JavaScript/Guide/Functions#Recursion)
