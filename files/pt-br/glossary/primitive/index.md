---
title: Primitivo
slug: Glossary/Primitive
---

## Resumo

Um **primitivo** (valor primitivo, tipo de dados primitivo) é um dado que não é representado através de um {{Glossary("Objeto")}} e, por consequência, não possui métodos.

## Em detalhes

Na maior parte do tempo, um valor primitivo é representado diretamente através do mais baixo nível da implementação de uma linguagem.

No {{Glossary("JavaScript")}}, existem 6 tipos primitivos:

- {{Glossary("String")}}
- {{Glossary("Number")}}
- {{Glossary("Boolean")}}
- {{Glossary("Null")}}
- {{Glossary("undefined")}}
- {{Glossary("Symbol")}} (novo no {{Glossary("ECMAScript")}} 6)

Todos os primitivos são **imutáveis** (não podem ter o seu valor modificado).

### Wrappers em JavaScript

> NT: O termo "wrapper" em português significa "que envolve". No entanto, em tecnologia, é comum se usar a versão em inglês que possui o mesmo significado.

À exceção do `null` e do `undefined`, todos os primitivos tem um objeto wrapper equivalente:

- {{jsxref("String")}} para o primitivo string.
- {{jsxref("Number")}} para o primitivo .
- {{jsxref("Boolean")}} para o primitivo Boolean.
- {{jsxref("Symbol")}} para o primitivo Symbol.

O método [valueOf()](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf) do objeto wrapper retorna o valor primitivo.

> NT: É possível verificar o tipo da variável digitando typeof+nomedavariavel. Para saber mais, verifique [typeof](/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof).

## Referências externas

- [Primitive data types on Wikipedia](http://en.wikipedia.org/wiki/Primitive_data_type) (em inglês)
- [Tipo de dado](https://pt.wikipedia.org/wiki/Tipo_de_dado)
