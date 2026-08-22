---
title: substring-before
slug: Web/XML/XPath/Reference/Functions/substring-before
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `substring-before` retorna uma string que é a parte de uma determinada string antes de uma substring fornecida.

## Sintaxe

```plain
substring-before( haystack, needle )
```

### Parâmetros

- `haystack`
  - : A string a ser avaliada. Parte desta string será retornada.
- `needle`
  - : A substring a ser procurada. Tudo antes da primeira ocorrência de `needle` em `haystack` será retornado.

### Valor de retorno

Uma string.

### Exemplos

| Exemplo XPath                   | Saída            |
| ------------------------------- | ---------------- |
| `substring-before('aa-bb','-')` | `aa`             |
| `substring-before('aa-bb','a')` | `(string vazia)` |
| `substring-before('aa-bb','b')` | `aa-`            |
| `substring-before('aa-bb','q')` | (string vazia)   |

## Especificações

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring-before)

## Compatibilidade com Gecko

Compatível.
