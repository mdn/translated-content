---
title: Bitwise AND (&)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND
---

{{jsSidebar("Operadores")}}

O operador bitwise AND (`&`) retorna `1` em cada posição do bit em que os bits corrrespondentes de ambos os operandos são `1`.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and.html")}}

## Sintaxe

```js-nolint
a & b
```

## Descrição

Os operandos são convertidos em inteiros de 32 bits e expressos por uma série de bits (zeros e uns). Números com mais de 32 bits têm seus bits mais significativos descartados. Por exemplo, o seguinte inteiro com mais de 32 bits será convertido em um de 32 bits
inteiro:

```
Antes: 11100110111110100000000000000110000000000001
Depois:            10100000000000000110000000000001
```

Cada bit no primeiro operando é emparelhado com o bit correspondente no segundo
operando: _primeiro bit_ para o _primeiro bit_ , _segundo bit_ para o _segundo bit_, e assim por diante.

O operador é aplicado a cada par de bits e o resultado é construído em bitwase.

A tabela verdade para a operação AND é:

| a   | b   | a AND b |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

```
     9 (base 10) = 00000000000000000000000000001001 (base 2)
    14 (base 10) = 00000000000000000000000000001110 (base 2)
                   --------------------------------
14 & 9 (base 10) = 00000000000000000000000000001000 (base 2) = 8 (base 10)
```

A operação AND bit a bit (Bitwase) de qualquer número `x` com `0` produz
`0` .

## Exemplos

### Usando bitwase AND

```js
//  5: 00000000000000000000000000000101
//  2: 00000000000000000000000000000010
5  e  2 ; // 0
```

## Especificações

{{Specifications}}

## Compatibilidade de navegadores

{{Compat}}

## Veja também

- [Operadores Bitwise no JS guide](/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
- [Operador de atribuição Bitwise AND](/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
