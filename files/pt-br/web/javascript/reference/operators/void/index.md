---
title: void operator
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

O **`operador void`** avalia a expressão dada e, em seguida, retorna {{jsxref("Global_Objects/undefined", "undefined")}}.

## Sintaxe

```
void expressão
```

## Descrição

Este operador permite a inserção de expressões que produzem efeitos secundários em lugares onde uma expressão que avalia a ação {{jsxref("Global_Objects/undefined", "undefined")}} é desejada.

O operador `void` é muitas vezes utilizado apenas para obter o valor primitivo `undefined`, geralmente usando "`void(0)`" (o que equivale a "`void 0`"). Nestes casos, a variável global {{jsxref("Global_Objects/undefined", "undefined")}} pode ser utilizado em vez (supondo que ele não tenha sido atribuído a um valor não-padrão).

## Chamada imediata das expressões da função

Quando usamos uma [Chamada imediata das expressões da função](/pt-BR/docs/Glossary/IIFE), valores nulos podem ser usado para forçar a palavra-chave da função a ser tratada como uma expressão em vez de uma declaração.

```js
void (function iife() {
  var bar = function () {};
  var baz = function () {};
  var foo = function () {
    bar();
    baz();
  };
  var biz = function () {};

  foo();
  biz();
})();
```

## JavaScript URIs

Quando o navegador segue uma URI `javascript`, ele avalia o código na URI e então troca o conteúdo da página pelo valor retornado por este, a não ser que o valor retornado seja {{jsxref("Global_Objects/undefined", "undefined")}}. O operador `void` pode ser usado para retornar {{jsxref("Global_Objects/undefined", "undefined")}}. Por exemplo:

```html
<a href="javascript:void(0);">Clique aqui para não fazer nada</a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  Clique aqui para o papel de parede ser verde
</a>
```

Note que no entanto o pseudo protocolo `javascript:` tem seu uso desencorajado perante outras alternativas como _unobtrusive event handlers_.

## Specificações

| Specificação                                                   | Status             | Comentário                                        |
| -------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| ECMAScript 1                                                   | Standard           | Initial definition. Implemented in JavaScript 1.1 |
| {{SpecName('ES5.1', '#sec-11.4.2', 'The void Operator')}}      | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-void-operator', 'The void Operator')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.operators.void")}}

## Veja também

- [`undefined`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined)
