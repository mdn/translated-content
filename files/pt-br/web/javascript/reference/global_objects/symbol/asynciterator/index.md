---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
---

{{JSRef}}

O **`Symbol.asyncIterator`** é um símbolo conhecido que especifica o padrão AsyncIterator para um objeto. Se essa propriedade é configurada em um objeto, é um iterável assíncrono e pode ser usado in um [`for await...of`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for-await...of) loop.

## Descrição

O `Symbol.asyncIterator` é um símbolo built-in que é usado para um acessar o método `@@asyncIterator` de um objeto. Para que um objeto seja iterável assíncrono, ele deve ter uma chave `Symbol.asyncIterator`.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Iteráveis assíncronos definidos pelo usuário

Você consegue definir seu próprio iterável assíncrono configurando a propriedade `[Symbol.asyncIterator]` em um objeto.

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // resultado esperado:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
```

Quando criando uma API, lembre que iteráveis assíncronos são programados para representar algum iterável — como um fluxo de dados ou uma lista —, não para substituir completamente chamadas e eventos na maioria das situações.

### Iteráveis assíncronos

Não há atualmente objetos Javascript built-in que tenha a chave `[Symbol.asyncIterator]` configurada por padrão. Entretanto, a WHATWG Streams estão configurando para que o primeiro objeto built-in seja um iterável assíncrono, com a recente chegada do `[Symbol.asyncIterator]` nas especificações.

## Especificações

| Especificação                                                                |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-symbol.asynciterator', 'Symbol.asyncIterator')}} |

## Compatibilidade com navegadores

{{compat("javascript.builtins.Symbol.asyncIterator")}}

## Vejá também

- [Iteration protocols](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await... of](/pt-BR/docs/Web/JavaScript/Reference/Statements/for-await...of)
