---
title: substring-after
slug: Web/XML/XPath/Reference/Functions/substring-after
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `substring-after` retorna uma string que é o restante de uma determinada string após uma substring fornecida.

## Sintaxe

```plain
substring-after( haystack, needle )
```

### Parâmetros

- `haystack`
  - : A string a ser avaliada. Parte desta string será retornada.
- `needle`
  - : A substring a ser procurada. Tudo após a primeira ocorrência de `needle` em `haystack` será retornado.

### Valor de retorno

Uma string.

### Exemplos

| Exemplo XPath                  | Saída          |
| ------------------------------ | -------------- |
| `substring-after('aa-bb','-')` | `bb`           |
| `substring-after('aa-bb','a')` | `a-bb`         |
| `substring-after('aa-bb','b')` | `b`            |
| `substring-after('aa-bb','q')` | (string vazia) |

## Especificações

[XPath 1.0 4.2](https://www.w3.org/TR/xpath-10/#function-substring-after)

## Compatibilidade com Gecko

Compatível.
