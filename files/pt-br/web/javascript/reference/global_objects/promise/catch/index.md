---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}O método **catch()** retorna uma Promise e lida apenas com casos rejeitados. Ele possui o mesmo comportamento de quando chamamos {{jsxref("Promise.then", "Promise.prototype.then(undefined, onRejected)")}} (de fato, chamando `obj.catch(onRejected)` internamente é chamado `obj.then(undefined, onRejected)`).

## Sintaxe

```
p.catch(onRejected);

p.catch(function(motivo) {
   // rejeição
});
```

### Parâmetros

- onRejected

  - : Uma {{jsxref("Function")}} chamada quando a `Promise` é rejeitada. Esta função possui um argumento:
    **reason** da rejeição.
    O motivo da rejeição.

    A Promise retornada pelo `catch()` é rejeitada apenas se `onRejected` cospe um erro ou se o o retorno da Promise foi rejeitada por si mesmo, ou seja, foi resolvida.

### Valor de retorno

Internamente chamamos `Promise.prototype.then` sobre o objeto que é chamando passando parâmetros como `undefined` e `onRejected` no manipulador de eventos. Então retornamos o valor da chamada que é {{jsxref("Promise")}}.

> **Aviso:** O exemplo abaixo está cuspindo uma string. Isso é considerado uma má prática. Sempre cuspir uma instance de erro (Error). Em todo caso, a parte que faz a captura deve fazer verificaçoes sobre os argumentos para saber se é uma string ou um erro e você poderá perder informações valiosas como stack traces.

**Demonstração de uma camada interna:**

```js
// Sobrescrevendo o techo original de  Promise.prototype.then/catch adicionando alguns logs
(function (Promise) {
  var originalThen = Promise.prototype.then;
  var originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function () {
    console.log(
      "> > > > > > chamando .then em %o com argumentos: %o",
      this,
      arguments,
    );
    return originalThen.apply(this, arguments);
  };
  Promise.prototype.catch = function () {
    console.log(
      "> > > > > > chamando .catch em %o com argumentos: %o",
      this,
      arguments,
    );
    return originalCatch.apply(this, arguments);
  };
})(this.Promise);

// chamando um catch em uma Promise já resolvida.
Promise.resolve().catch(function XXX() {});

// logs:
// > > > > > > chamando .catch na Promise{} com os argumentos: Arguments{1} [0: function XXX()]
// > > > > > > chamando .then na Promise{} com os argumentos: Arguments{2} [0: undefined, 1: function XXX()]
```

## Description

O método `catch` pode ser útil para manipulação de erros na composição da sua promise.

## Exemplos

### Usando o método `catch`

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Sucesso");
});

p1.then(function (value) {
  console.log(value); // "Sucesso!"
  throw "Ah, não!";
})
  .catch(function (e) {
    console.log(e); // "Ah, não!"
  })
  .then(
    function () {
      console.log("Após um catch, a sequencia é restaurada");
    },
    function () {
      console.log("Não engatilhado devido ao catch");
    },
  );

// O seguinte se comporta da mesma maneira que o anterior
p1.then(function (value) {
  console.log(value); // "Sucesso!"
  return Promise.reject("Ah, não!");
})
  .catch(function (e) {
    console.log(e); // "Ah, não!"
  })
  .then(
    function () {
      console.log("Após um catch, a sequencia é restaurada");
    },
    function () {
      console.log("Não engatilhado devido ao catch");
    },
  );
```

## Especificações

| Especificação                                                                      | Status               | Comentário                              |
| ---------------------------------------------------------------------------------- | -------------------- | --------------------------------------- |
| {{SpecName('ES6', '#sec-promise.prototype.catch', 'Promise.prototype.catch')}}     | {{Spec2('ES6')}}     | Initial definition in an ECMA standard. |
| {{SpecName('ESDraft', '#sec-promise.prototype.catch', 'Promise.prototype.catch')}} | {{Spec2('ESDraft')}} |                                         |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Promise.catch")}}

## Veja também

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
