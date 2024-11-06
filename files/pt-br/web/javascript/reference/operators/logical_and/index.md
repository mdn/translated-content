---
title: AND lógico (&&)
slug: Web/JavaScript/Reference/Operators/Logical_AND
---

{{jsSidebar("Operators")}}

O operador lógico **AND (`&&`)** (conjunção lógica) para um conjunto de operandos booleanos será `true` se e somente se todos os operandos forem `true`. Caso contrário, será `false`.

Geralmente, o operador retorna o valor do primeiro operando {{Glossary("falsy")}} encontrado ao avaliar da esquerda para a direita ou retorna o valor do último operando se todos forem {{Glossary("truthy")}}.

## Exemplo

{{EmbedInteractiveExample("pages/js/expressions-logical-and.html", "shorter")}}

## Sintaxe

```js-nolint
expr1 && expr2
```

## Descrição

O AND lógico (`&&`) avalia operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando {{Glossary("falsy")}} que encontrar; se todos os valores forem {{Glossary("truthy")}}, o valor do último operando é retornado.

Se um valor puder ser convertido em `true`, o valor é denominado como {{Glossary("truthy")}}. Se um valor puder ser convertido em `false`, então valor será denominado {{Glossary("falsy")}}.

Exemplos de expressões que podem ser convertidas em `false` são:

- `false`;
- `null`;
- `NaN`;
- `0`;
- string vazia (`""` ou `''` ou ` `` `);
- `undefined`.

O operador AND lógico (`&&`) preserva valores não booleanos e os retorna como estão:

```js
result = "" && "foo"; // result retorna "" (string vazia)
result = 2 && 0; // result retorna 0
result = "foo" && 4; // result retorna 4
```

Mesmo que o operador `&&` possa ser usado com operandos não booleanos, ele ainda é considerado um operador booleano, pois seu valor de retorno sempre pode ser convertido em um [boolean primitive](/pt-BR/docs/Web/JavaScript/Data_structures#boolean_type).
Para converter explicitamente seu valor de retorno (ou qualquer expressão em geral) para o valor booleano correspondente, use um double [`operador NOT`](/pt-BR/docs/Web/JavaScript/Reference/Operators/Logical_NOT) ou o construtor {{jsxref("Global_Objects/Boolean/Boolean", "Boolean")}}.

### Avaliação de curto-circuito

A expressão AND lógica é um operador de curto-circuito. Ou seja, à medida que cada operando é convertido em um booleano, se o resultado de uma conversão for `false`, o operador AND para e retorna o valor original desse operando falso; ele **não** avalia nenhum dos operandos restantes.

Considere o pseudocódigo abaixo.

```
(alguma expressao falsa aqui) && expr
```

A `expr` **nunca é avaliada** porque o primeiro operando `(alguma expressao falsa aqui)` é avaliado como {{Glossary("falsy")}}. Se `expr` for uma função, a função nunca será chamada. Veja o exemplo abaixo:

```js
function A() {
  console.log("chamou A");
  return false;
}
function B() {
  console.log("chamou B");
  return true;
}

console.log(A() && B());
// registra "chamou A" no console devido à chamada da função A,
// && é avaliado como false (porque a função A retorna false), então false é registrado no console;
// o operador AND entra em curto-circuito aqui e ignora a função B
```

### Operador precedente

O operador AND tem uma precedência maior que o operador OR, o que significa que o operador `&&` é executado antes do operador `||` (consulte [precedência de operadores](/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)).

```js
true || (false && false); // true
true && (false || false); // false
2 === 3 || (4 < 0 && 1 === 1); // false
```

## Exemplos

### Usando AND

O código a seguir mostra exemplos do operador `&&` (AND lógico).

```js
a1 = true && true; // t && t retorna true
a2 = true && false; // t && f retorna false
a3 = false && true; // f && t retorna false
a4 = false && 3 === 4; // f && f retorna false
a5 = "Cat" && "Dog"; // t && t retorna "Dog"
a6 = false && "Cat"; // f && t retorna false
a7 = "Cat" && false; // t && f retorna false
a8 = "" && false; // f && f retorna ""
a9 = false && ""; // f && f retorna false
```

### Regras de conversão para booleanos

#### Convertendo AND para OR

A seguinte operação envolvendo **booleanos**:

```js-nolint
bCondition1 && bCondition2
```

é sempre igual a:

```js-nolint
!(!bCondition1 || !bCondition2)
```

#### Convertendo OR para AND

A seguinte operação envolvendo **booleanos**:

```js-nolint
bCondition1 || bCondition2
```

é sempre igual a:

```js-nolint
!(!bCondition1 && !bCondition2)
```

### Removendo parênteses aninhados

Como as expressões lógicas são avaliadas da esquerda para a direita, sempre é possível remover os parênteses de uma expressão complexa desde que certas regras sejam seguidas.

A seguinte operação composta envolvendo **booleanos**:

```js-nolint
bCondition1 || (bCondition2 && bCondition3)
```

é sempre igual a:

```js-nolint
bCondition1 || bCondition2 && bCondition3
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Boolean")}}
- {{Glossary("Truthy")}}
- {{Glossary("Falsy")}}
