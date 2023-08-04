---
title: Expressão da função async
slug: Web/JavaScript/Reference/Operators/async_function
---

{{jsSidebar("Operators")}}A palavra chave async pode ser usado para definir funções async dentro das expressões.Você tambem pode definir funções async usando a declaração de função async.

## Sintaxe

```
async function [nome]([parametro1[, parametro2[, ..., parametroN]]]) {
    declarações
}
```

Como no [ES2015](/pt-BR/docs/), você tambem pode usar [arrow functions](/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Parâmetros

- `nome`
  - : O nome da função.Pode ser omitida, na qual a função se torna anonima . O nome é somente local para o corpo da função.
- `parametroN`
  - : O nome do argumento passado para a função.
- `declarações`
  - : As declarações que compoem o corpo da função .

## Descrição

Uma expressão `async function` é muito similar, e tem quase a mesma sintaxe de uma {{jsxref('Statements/async_function', 'declaração async function')}}. A principal diferença entre uma expressão `async function` e uma declaração `async function` é o _nome da função_, que pode ser omitido em expressões `async function` para criar _funções anônimas_. Uma expressão `async function` pode ser utilizada como um {{Glossary("IIFE")}} (Immediately Invoked Function Expression, em tradução livre: Expressão de Função Invocada Imediatamente) que roda assim que definido. Veja também o capítulo sobre [funções](/pt-BR/docs/Web/JavaScript/Reference/Functions) para mais informações.

## Exemplos

### Exemplo simples

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

(async function (x) {
  // async function expression usada como uma IIFE
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + (await a) + (await b);
})(10).then((v) => {
  console.log(v); // imprime 60 após 2 segundo.
});

var add = async function (x) {
  // async function expression atribuída a uma variável
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
};

add(10).then((v) => {
  console.log(v); // imprime 60 após 4 segundos.
});
```

## Especificações

| Especificação                                                                | Status               | Comentário                   |
| ---------------------------------------------------------------------------- | -------------------- | ---------------------------- |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}} | {{Spec2('ESDraft')}} | Definição inicial no ES2017. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.async_function")}}

## Veja também

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
