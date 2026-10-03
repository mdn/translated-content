---
title: system-property
slug: Web/XML/XPath/Reference/Functions/system-property
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `system-property` retorna um objeto que representa a propriedade do sistema fornecida.

## Sintaxe

```plain
system-property(name)
```

### Parâmetros

- `name` (opcional)
  - : O nome da propriedade do sistema. O argumento deve ser avaliado como uma string que é um QName. O QName é expandido em um nome usando as declarações de namespace em escopo para a expressão. A função system-property retorna um objeto que representa o valor da propriedade do sistema identificada pelo nome. Se não houver tal propriedade do sistema, a string vazia deve ser retornada.

### Valor de retorno

Um objeto que representa a propriedade do sistema fornecida.

## Descrição

- xsl:version, um número que fornece a versão do XSLT implementada pelo processador; para processadores XSLT que implementam a versão do XSLT especificada por este documento, este é o número 1.0
- xsl:vendor, uma string que identifica o fornecedor do processador XSLT
- xsl:vendor-url, uma string contendo uma URL que identifica o fornecedor do processador XSLT; tipicamente esta é a página principal (página inicial) do site do fornecedor.

## Especificações

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-system-property)

## Compatibilidade com Gecko

Compatível.
