---
title: Bitwise XOR (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
---

{{jsSidebar("Operators")}}

O operador bitwise XOR (`^`) retorna o numero 1 em cada posição de bit para a qual os bits correspondentes de ambos, mas não de ambos os operandos, são `1`s.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor.html")}}

## Sintaxe

```
a ^ b
```

## Descrição

Os operandos são convertidos em números inteiros de 32 bits e expressados por uma série de bits (zeros e uns). Numeros com mais de 32 bits descartam seus bits mais significativos. Por exemplo, o número inteiro a seguir com mais de 32 bits será convertido em um número inteiro de 32 bits:

```plain
Antes: 11100110111110100000000000000110000000000001
Depois:            10100000000000000110000000000001
```

Cada bit no primeiro operando é emparelhado com o bit correspondente no segundo operando: primeiro bit para o primeiro bit, segundo bit para o segundo bit e assim por diante.

O operador é aplicado para cada par de bits e o resultado é construído em bitwise.

A tabela verdade para a operação XOR é:

| a   | b   | a XOR b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 1       |
| 1   | 0   | 1       |
| 1   | 1   | 0       |

```js
.    9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 ^ 9 (base 10) = 00000000000000000000000000000111 (base 2) = 7 (base 10)
```

Bitwise XORing any number `x` with `0` yields `x`.

## Exemplos

### Usando bitwise XOR

```js
// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 ^ 9;
// 7  (00000000000000000000000000000111)
```

## Especificações

| Specification                                                                   |
| ------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#prod-BitwiseXORExpression', 'Bitwise XOR expression')}} |

## Compatibilidade com navegadores

{{Compat("javascript.operators.bitwise_xor")}}

## Leia também

- [Bitwise operators in the JS guide](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise)
- [Bitwise XOR assignment operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
