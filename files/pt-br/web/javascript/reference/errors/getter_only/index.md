---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
---

{{jsSidebar("Errors")}}

A exceção apenas do modo [strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode) do Javascript "setting getter-only property" ocorre quando é feita a tentativa de definir um novo valor para uma propriedade para qual apenas um [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) está especificado.

## Mensagem

```js
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #<Object> which has only a getter (Chrome)
```

## Tipo de Erro

{{jsxref("TypeError")}} no [modo strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode) apenas.

## O que deu errado?

Tem uma tentativa de definir um novo valor para uma propriedade para qual apenas um [getter](/pt-BR/docs/Web/JavaScript/Reference/Functions/get) está especificado.
Isto será silenciosamente ignorado no modo non-strict, enquanto vai lançar um {{jsxref("TypeError")}} no [modo strict](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode).

## Exemplos

### Propriedades sem setter

O exemplo abaixo mostra como definir um getter para uma propriedade. Isso não especifica um [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set), então um
`TypeError` vai ser lançado quando for feita a tentativa de definir a propriedade `temperatura` para `30`. Para mais detalhes veja também a página {{jsxref("Object.defineProperty()")}}.

```js example-bad
"use strict";

function Arquivo() {
  var temperatura = null;
  Object.defineProperty(this, "temperatura", {
    get: function () {
      console.log("get!");
      return temperatura;
    },
  });
}

var arq = new Arquivo();
arq.temperatura; // 'get!'

arq.temperatura = 30;
// TypeError: setting getter-only property "temperatura"
```

Para corrigir este erro, você vai ter que remover a linha 16, onde é feita a tentativa de definir a propriedade temperatura,
ou você vai precisar implementar um [setter](/pt-BR/docs/Web/JavaScript/Reference/Functions/set) para a propriedade, desta forma, por exemplo:

```js example-good
"use strict";

function Arquivo() {
  var temperatura = null;
  var arquivo = [];

  Object.defineProperty(this, "temperatura", {
    get: function () {
      console.log("get!");
      return temperatura;
    },
    set: function (value) {
      temperatura = value;
      arquivo.push({ val: temperatura });
    },
  });

  this.getArquivo = function () {
    return arquivo;
  };
}

var arq = new Arquivo();
arq.temperatura; // 'get!'
arq.temperatura = 11;
arq.temperatura = 13;
arq.getArquivo(); // [{ val: 11 }, { val: 13 }]
```

## Veja também

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
