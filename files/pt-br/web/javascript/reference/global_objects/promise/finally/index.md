---
title: Promise.prototype.finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
---

{{JSRef}}

O método **`finally()`** retorna uma {{jsxref("Promise")}}. Quando a promise for estabelecida, tenha ela sido realizada ou rejeitada, executa-se a função callback especificada. Isso permite a execução de um código que acontecerá independentemente da `Promise` ter sido realizada (com sucesso) ou rejeitada (com falha).

Assim, você pode evitar a duplicação do código em ambos os handlers {{jsxref("Promise.then", "then()")}} e {{jsxref("Promise.catch", "catch()")}} da `Promise`.

## Sintaxe

```
p.finally(quandoEstabelecida);

p.finally(function() {
   // concluída (realizada ou rejeitada)
});
```

### Parâmetros

- `quandoEstabelecida`
  - : Uma {{jsxref("Function")}} chamada quando a `Promise` é concluída.

### Valor de retorno

Retorna uma {{jsxref("Promise")}} onde o manipulador `finally` é definido como a função especificada, `quandoEstabelecida`.

## Descrição

O método `finally()` pode ser útil quando você deseja realizar algum tipo de processamento ou limpeza quando a promise for estabelecida, independentemente de seu resultado (sucesso ou falha).

O método `finally()` é bastante similar a chamar `.then(quandoEstabelecida, quandoEstabelecida)`. Porém, existem algumas diferenças:

- Ao passar a função na linha (entre os parênteses do método), você precisa passá-la apenas uma vez, ao invés de ser forçado a declará-la duas vezes ou a definir em uma variável.
- O callback de `finally` não poderá receber nenhum argumento, já que não existem meios confiáveis de determinar se a promise foi realizada ou rejeitada. Seu uso é para quando você realmente _não se importa_ com os possíveis motivos de uma falha ou possíveis valores retornados de um sucesso, não tendo, portanto, razão para fornecê-los.
- Diferentemente de `Promise.resolve(2).then(() => {}, () => {})` (será resolvido como `undefined`), `Promise.resolve(2).finally(() => {})` será resolvido como `2`.
- De maneira semelhante, diferentemente de `Promise.reject(3).then(() => {}, () => {})` (que será resolvido como `undefined`), `Promise.reject(3).finally(() => {})` será rejeitado como `3`.

> **Nota:** Um `throw` (ou retorno de uma promise rejeitada) no callback de `finally` rejeitará a nova promise com a razão de rejeição especificada na chamada de `throw()`.

## Exemplos

```js
let carregando = true;

fetch(minhaRequisicao)
  .then(function (resposta) {
    var tipoConteudo = response.headers.get("content-type");
    if (tipoConteudo && tipoConteudo.includes("application/json")) {
      return resposta.json();
    }
    throw new TypeError("Opa, isso não é JSON!");
  })
  .then(function (json) {
    /* processamento do seu JSON */
  })
  .catch(function (erro) {
    console.log(erro);
  })
  .finally(function () {
    carregando = false;
  });
```

## Especificações

| Specification                                                     | Status  | Comment |
| ----------------------------------------------------------------- | ------- | ------- |
| [TC39 proposal](https://github.com/tc39/proposal-promise-finally) | Stage 4 |         |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise.finally")}}

## Veja também

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.catch()")}}
