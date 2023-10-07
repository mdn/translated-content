---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
---

{{jsSidebar("Objects")}}

## Resumo

O valor `null` é um literal em JavaScript que representa um valor nulo ou "vazio" (p/ex: que aponta para um objeto inexistente). É um dos {{Glossary("Primitivo", "valores primitivos")}} do JavaScript.

## Sintaxe

```
null
```

## Descrição

O valor `null` é um literal, e não uma propriedade do objeto global (como o [`undefined`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined) pode ser). O desenhos das APIs, o null as vezes é devolvido no lugar de um objeto que era esperado. Quando fizer a checagem de um valor para `null` ou `undefined`, esteja ciente das [diferenças entre o operador de igualdade (==) e o de igualdade estrita (===)](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (em inglês). Uma conversão de tipos é realizada na operação de igualdade.

```js
// foo não existe, não foi definido e jamais foi inicializado:
> foo
"ReferenceError: foo is not defined"

// foo é conhecido e existe, mas não aponta para nenhum tipo ou valor:
> var foo = null; foo
"null"
```

### Diferenças entre `null` e `undefined`

```js
typeof null; // object (bug no ECMAScript, deveria ser null - http://2ality.com/2013/10/typeof-null.html)
typeof undefined; // undefined
null === undefined; // falso
null == undefined; // verdadeiro
```

## Especificações

| Especificação                                        | Status             | Comentários       |
| ---------------------------------------------------- | ------------------ | ----------------- |
| ECMAScript 1st Edition.                              | Standard           | Definição inicial |
| {{SpecName('ES5.1', '#sec-4.3.11', 'null value')}}   | {{Spec2('ES5.1')}} |                   |
| {{SpecName('ES6', '#sec-null-value', 'null value')}} | {{Spec2('ES6')}}   |                   |

## Compatibilidade com navegadores

{{Compat("javascript.operators.null")}}

## Veja também

- {{jsxref("Global_Objects/undefined", "undefined")}}
- {{jsxref("Global_Objects/NaN", "NaN")}}
