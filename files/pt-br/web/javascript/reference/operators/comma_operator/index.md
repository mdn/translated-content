---
title: Operador Vírgula
slug: Web/JavaScript/Reference/Operators/Comma_operator
---

{{jsSidebar("Operators")}}

## Sumário

o **operador vírgula** avalia o valor de seus operandos (da esquerda para a direita) e retorna o valor do último operando.

## Sintaxe

```
expr1, expr2, expr3...
```

## Parameters

- `expr1`, `expr2, expr3...`
  - : Quaisquer expressões.

## Descrição

Você pode usar o operador vírgula quando desejar incluir múltiplas expressões em um lugar que requer uma única expressão. O uso mais comum desse operador é suprir múltiplos parâmetros em um loop `for`.

## Exemplo

Se `a` é um array de 2 dimensões com 10 elementos de um lado, o seguinte código usa o operador vírgula para incrementar duas variáveis mutuamente. Note que a vírgula na declaração `var` _**não**_ é o operador vírgula, porque ele não existe dentro de uma expressão. Além disso, ela é uma caractere especial nas declarações `var` para combinar múltiplas delas em uma única. Embora praticamente a vírgula comporte-se quase que igualmente ao operador vírgula. O código imprime os valores dos elementos diagonais da matriz:

```js
for (var i = 0, j = 9; i <= 9; i++, j--)
  document.writeln("a[" + i + "][" + j + "] = " + a[i][j]);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [for loop](/pt-BR/docs/Web/JavaScript/Reference/Statements/for)
