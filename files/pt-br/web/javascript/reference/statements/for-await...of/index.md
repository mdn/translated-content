---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
---

{{jsSidebar("Statements")}}

A **declaração `for await...of`** cria um loop que itera sobre objetos iteráveis assíncronos, bem como sobre iteráveis síncronos, incluindo: {{jsxref("String")}}, {{jsxref("Array")}}, `Array`-como objetos (e.g., {{jsxref("Functions/arguments", "arguments")}} or {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, e iteráveis async/sync. Invoca um hook de iteração personalizado com instruções a serem executadas para o valor de cada propriedade do objeto.

## Sintaxe

```
for await (variável of iterável) {
  // declaração
}
```

- `variável`
  - : Em cada iteração, o valor de uma propriedade diferente é atribuído à _variável_. A _variável_ pode ser declarada como `const`, `let` ou `var`.
- `iterável`
  - : Objeto cujas propriedades iteráveis devem ser iteradas.

### Iterando sobre iteráveis assíncronos

Você também pode iterar sobre um objeto que explicidamente implementa protocolo iterável assíncrono(_async iterable protocol_):

```js
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      },
    };
  },
};

(async function () {
  for await (let num of asyncIterable) {
    console.log(num);
  }
})();

// 0
// 1
// 2
```

### Iterando sobre generators assíncronos

Como os geradores assíncronos implementam o protocolo assíncrono Iterator, eles podem fazer um loop usando `for await... of`

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function () {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

Para termos um exemplo mais concreto de iteração sobre um generator assíncrono usando `for await... of`, considere iterar sobre dados obtidos através de um fecth de uma API. Este exemplo cria primeiro um iterador assíncrono para um stream de dados e depois usa-o para encontrar o tamanho da resposta da API.

```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// Obtém dados do URL e calcula o tamanho da resposta usando o generator assíncrono
async function getResponseSize(url) {
  const response = await fetch(url);
  // Guardará o tamanho do response em bytes.
  let responseSize = 0;
  // O for-wait-loop irá iterar de forma assíncrona sobre cada parte do response.
  for await (const chunk of streamAsyncIterator(response.body)) {
    // Incrementa o valor do responseSize
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`);
  // output esperado:"Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

## Especificações

| Specification                                                                                                                        | Status               | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------- | ------- |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'ECMAScript Language: The for-in, for-of, and for-await-of Statements')}} | {{Spec2('ESDraft')}} |         |

## Compatibilidade com navegadores

{{Compat("javascript.statements.for_await_of")}}

## Veja também

- {{jsxref("Statements/for...of")}}
