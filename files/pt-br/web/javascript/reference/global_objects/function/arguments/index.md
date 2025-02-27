---
title: Function.arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
---

{{JSRef}} {{deprecated_header}}

A propriedade **`function.arguments`** diz respeito a um objeto tipo array (array-like object) correspondente aos argumentos passados para uma função. Use somente a variável {{jsxref("Functions/arguments", "arguments")}} em vez disso.

## Descrição

A sintaxe `function.arguments` está obsoleta. A forma recomendada de acessar o objeto {{jsxref("Functions/arguments", "arguments")}} disponível dentro das funções, é simplesmente referenciar a variável {{jsxref("Functions/arguments", "arguments")}}.

No caso de recursão, ou seja, uma função f aparecer várias vezes na pilha de chamadas, o valor de `f.arguments` representa os argumentos correspondentes a invocação mais recente da função.

O valor da propriedade arguments é normalmente nulo (`null`) se não houver nenhuma invocação pendente da função em andamento (ou seja, a função foi chamada mas ainda não retornou).

## Exemplos

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("before: " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("after: " + g.arguments[0]);
}

f(2);

console.log("returned: " + g.arguments);

// Output

// before: 1
// before: 0
// after: 0
// after: 1
// returned: null
```

## Especificações

Não faz parte de nenhuma especificação.

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
