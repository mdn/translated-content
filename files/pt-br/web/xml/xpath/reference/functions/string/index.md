---
title: string
slug: Web/XML/XPath/Reference/Functions/string
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `string` converte o argumento fornecido em uma string.

## Sintaxe

```plain
string( [object] )
```

### Parâmetros

- `object` (opcional)
  - : O objeto a ser convertido em string. Se omitido, o nó de contexto é usado.

### Valor de retorno

Uma string.

## Descrição

- Se o objeto for um conjunto de nós, o valor de string do primeiro nó do conjunto é retornado.
- Um número é convertido da seguinte forma:
  - NaN é convertido para a string NaN.
  - Zero positivo é convertido para a string 0.
  - Zero negativo é convertido para a string 0.
  - Infinito positivo é convertido para a string Infinity.
  - Infinito negativo é convertido para a string -Infinity.
  - Números decimais entre -1 e 1 são convertidos para uma string com um único 0 antes do ponto decimal.
  - O booleano true é convertido para a string true.
  - O booleano false é convertido para a string false.

## Especificações

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-string)

## Compatibilidade com Gecko

Compatível.
