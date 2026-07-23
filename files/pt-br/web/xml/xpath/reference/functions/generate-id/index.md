---
title: generate-id
slug: Web/XML/XPath/Reference/Functions/generate-id
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `generate-id` gera um ID único para o primeiro nó em um determinado conjunto de nós e retorna uma string contendo esse ID.

## Sintaxe

```plain
generate-id( [node-set] )
```

### Parâmetros

- `node-set` (opcional)
  - : Um ID será gerado para o primeiro nó neste conjunto de nós. Se omitido, o nó de contexto atual será utilizado.

### Valor de retorno

Uma string contendo o ID gerado.

## Descrição

- O mesmo ID deve ser gerado toda vez para o mesmo nó no documento atual na transformação atual.
- O ID gerado pode não ser o mesmo em transformações subsequentes.

Esta função é uma adição específica do XSLT ao XPath. Não faz parte da biblioteca de funções XPath principal.

## Especificações

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-generate-id)

## Compatibilidade com Gecko

Suportado.
