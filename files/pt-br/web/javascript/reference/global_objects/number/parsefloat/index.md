---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---

{{JSRef}}

## Resumo

O método **Number.parseFloat()** converte a string recebida como argumento e a retorna como um número de ponto flutuante. Este método se comporta de maneira idêntica a da função global {{jsxref("Global_Objects/parseFloat", "parseFloat")}} e é parte da especificação ECMAScript 6 (seu propósito é a modularização dos objetos globais).

## Sintaxe

```
Number.parseFloat(string)
```

### Parâmetros

- `string`
  - : Uma string que represente o valor que se deseja converter.

### Retorno

- `string`
  - : Um número de ponto flutuante a partir da string dada. Se a string não puder ser convertida em para um número, {{jsxref("Global_Objects/NaN","NaN")}} é retornado.

## Descrição

Este método tem a mesma funcionalidade do método global: {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}

```
Number.parseFloat === parseFloat; // true
```

Por favor veja {{jsxref("parseFloat", "parseFloat()")}} para mais detalhes e exemplos.

## Especificações

{{Specifications}}

## Compatibilidade dos Navegadores

{{Compat}}

## Veja também

- O objeto {{jsxref("Global_Objects/Number", "Number")}} ao qual o método parseFloat pertence.
- O método global {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}.
