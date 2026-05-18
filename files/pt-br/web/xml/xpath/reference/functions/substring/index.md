---
title: substring
slug: Web/XML/XPath/Reference/Functions/substring
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `substring` retorna uma parte de uma determinada string.

## Sintaxe

```plain
substring(string, start)
substring(string, start, length)
```

### Parâmetros

- `string`
  - : A string a ser avaliada.
- `start`
  - : A posição dentro de `string` onde a substring começa.
- `length` {{optional_inline}}
  - : O comprimento da substring.
    Se omitido, a string retornada conterá todos os caracteres desde a posição `start` até o fim de `string`.

### Valor de retorno

Uma string.

## Descrição

Assim como em outras funções XPath, a posição não é baseada em zero. O primeiro caractere na string tem a posição 1, não 0.

## Especificações

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring)

## Compatibilidade com Gecko

Compatível.
