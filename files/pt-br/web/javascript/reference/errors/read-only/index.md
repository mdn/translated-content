---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
---

{{jsSidebar("Errors")}}

## Mensagem

```
TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #<Object> (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
```

## Tipo de Erro

{{jsxref("TypeError")}}

## O que deu errado?

A variável global ou propriedade do objeto foi definida como propriedade somente-leitura. (Tecnicamente, esse é um dado de [não-escrita](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Writable_attribute).)

Esse erro ocorre apenas em código no [strict mode](/pt-BR/docs/Web/JavaScript/Reference/Strict_mode). No modo não strict mode, essa atribuição é ignorada silenciosamente.

## Exemplos

### Casos inválidos

Propriedades somente-leitura não são super comuns, mas elas podem ser criadas utilizando {{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.freeze()")}}.

```js example-bad
"use strict";
var obj = Object.freeze({ nome: "Elsa", pontuacao: 157 });
obj.pontuacao = 0; // TypeError

("use strict");
Object.defineProperty(this, "CONTADOR_PULMAO", { value: 2, writable: false });
CONTADOR_PULMAO = 3; // TypeError

("use strict");
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

Existem também algumas propriedades somente-leitura nativas do Javascript. Talvez você já tentou redefinir um constante matemática.

```js example-bad
"use strict";
Math.PI = 4; // TypeError
```

Desculpe, você não pode fazer isso.

A variável global `undefined` também é somente-leitura, então você não pode silenciar o infame erro "undefined is not a function" fazendo isso:

```js example-bad
"use strict";
undefined = function () {}; // TypeError: "undefined" is read-only
```

### Casos válidos

```js example-good
"use strict";
var obj = Object.freeze({ nome: "Score", pontos: 157 });
obj = { nome: obj.nome, pontos: 0 }; // substituindo com o novo objeto funciona

("use strict");
var CONTADOR_PULMAO = 2; // uma `var` funciona, porque ela não é somente-leitura
CONTADOR_PULMAO = 3; // ok (anatomicamente improvável, porém...)
```

## Veja também

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.freeze()")}}
- ["Quais animais tem três pulmões?" no answers.com](https://www.answers.com/Q/Which_animals_have_three_lungs)
- [Klingons](https://aliens.wikia.com/wiki/Klingon) (uma outra resposta para essa pergunta)
