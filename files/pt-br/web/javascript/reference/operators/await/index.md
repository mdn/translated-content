---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}

O operador `await` é utilizado para esperar por uma {{jsxref("Promise")}}. Ele pode ser usado apenas dentro de uma {{jsxref("Statements/async_function", "async function")}}.

## Sintaxe

```
[rv] = await expressão;
```

- `expressão`
  - : Uma {{jsxref("Promise")}} ou qualquer valor para esperar uma resolução.
- `rv`
  - : Retorna um valor final da promise, ou o próprio valor se ele não for uma `Promise`.

## Descrição

A expressão `await` faz a execução de uma função `async` pausar, para esperar pelo retorno da `Promise`, e resume a execução da função `async` quando o valor da Promise é resolvido. Ele então retorna o valor final da Promise. Se esse valor não for uma `Promise`, ele é convertido para uma `Promise` resolvida.

Se a `Promise` for rejeitada, a expressão `await` invoca uma Exception com o valor rejeitado.

## Exemplos

Se uma `Promise` é passada para uma expressão `await`, ele espera pela sefinalização da `Promise` e retorna seu valor final.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

Se o valor não for uma `Promise`, ele converte o valor para uma `Promise` resolvida, e espera por ele.

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

Se a `Promise` for rejeitada, o valor rejeitado é invocado em uma Exception.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

## Especificações

| Especificação                                                                 | Status               | Comentário                   |
| ----------------------------------------------------------------------------- | -------------------- | ---------------------------- |
| {{SpecName('ESDraft', '#sec-async-function-definitions', 'async functions')}} | {{Spec2('ESDraft')}} | Definição inicial no ES2017. |

## Compatibilidade com navegadores

{{Compat("javascript.operators.await")}}

## Veja também

- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
