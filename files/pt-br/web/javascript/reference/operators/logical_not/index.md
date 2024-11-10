---
title: NOT lógico (!)
slug: Web/JavaScript/Reference/Operators/Logical_NOT
---

{{jsSidebar("Operators")}}

O operador lógico **NOT (`!`)** (complemento lógico, negação) leva a verdade à falsidade e a falsidade à verdade, por isso, é conhecido como um operador de "negação". Normalmente é usado com valores booleanos (lógicos). Quando usado com valores não booleanos, retorna `false` se seu único operando puder ser convertido em `true`; caso contrário, retorna `true`.

{{EmbedInteractiveExample("pages/js/expressions-logical-not.html", "shorter")}}

## Sintaxe

```js-nolint
!x
```

## Descrição

Retorna `false` se seu único operando puder ser convertido em `true`; caso contrário, retorna `true`.

Se um valor puder ser convertido em `true`, o valor será chamado
{{Glossary("truthy")}}. Se um valor puder ser convertido em `false`, o valor será denominado {{Glossary("falsy")}}.

Exemplos de expressões que podem ser convertidas em falso são:

- `null`;
- `NaN`;
- `0`;
- empty string (`""` or `''` or ` `` `);
- `undefined`.

Mesmo que o operador `!` possa ser usado com operandos que não sejam valores booleanos, ele ainda pode ser considerado um operador booleano, pois seu valor de retorno sempre pode ser convertido em um [primitivo booleano](/pt-BR/docs/Web/JavaScript/Data_structures#boolean_type). Para converter explicitamente seu valor de retorno (ou qualquer expressão em geral) para o valor booleano correspondente, use um operador NOT duplo (`!!`) ou o construtor {{jsxref("Boolean/Boolean", "Boolean")}} do JavaScript.

## Exemplos

### Usando NOT

O código a seguir mostra exemplos do operador lógico NOT `!`:

```js
!true; // !t returns false
!false; // !f returns true
!""; // !f returns true
!"Cat"; // !t returns false
```

### Duplo NOT (`!!`)

É possível usar alguns operadores NOT em série para forçar explicitamente a conversão de qualquer valor para um [primitivo booleano](/pt-BR/docs/Web/JavaScript/Data_structures#boolean_type) correspondente.
A conversão é baseada na "veracidade" ou "falsidade" do valor (veja
{{Glossary("truthy")}} e {{Glossary("falsy")}}).

A mesma conversão pode ser feita através da função {{jsxref("Boolean/Boolean", "Boolean()")}} do JavaScript.

```js
!!true; // !!truthy returns true
!!{}; // !!truthy returns true: any object is truthy...
!!new Boolean(false); // ...even Boolean objects with a false .valueOf()!
!!false; // !!falsy returns false
!!""; // !!falsy returns false
!!Boolean(false); // !!falsy returns false
```

### Conversão entre NOTs

A seguinte operação envolvendo **booleanos**:

```js-nolint
!!bCondition
```

é sempre igual a:

```js-nolint
bCondition
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
