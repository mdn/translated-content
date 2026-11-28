---
title: number
slug: Web/XML/XPath/Reference/Functions/number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `number` converte um objeto em um número e retorna o número.

## Sintaxe

```plain
number( [object] )
```

### Parâmetros

- `object` (opcional)
  - : O objeto a ser convertido em número. Se este argumento for omitido, o nó de contexto atual será usado.

### Valor de retorno

O número resultante após a conversão do objeto.

## Descrição

- Strings são convertidas em número removendo os espaços em branco iniciais na string antes do número e ignorando os espaços em branco após o número. Se a string não corresponder a esse padrão, então a string é convertida para NaN.
- O booleano true é convertido para 1. False é convertido para 0.
- Um conjunto de nós é primeiro convertido em string como se fosse por uma chamada à função [string()](/pt-BR/docs/Web/XML/XPath/Reference/Functions/string) e depois convertido da mesma forma que um argumento string.
- Um objeto de um tipo diferente dos quatro tipos básicos é convertido em número de uma forma que depende desse tipo.

## Especificações

[XPath 1.0 4.4](https://www.w3.org/TR/xpath-10/#function-number)

## Compatibilidade com Gecko

Compatível.
