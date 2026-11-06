---
title: exsl:node-set()
slug: Web/XML/EXSLT/Reference/exsl/node-set
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`exsl:node-set()` retorna um conjunto de nós a partir de um fragmento de árvore de resultado, que é o que você obtém quando consulta o `xsl:variable` em vez de seu atributo select para buscar o valor de uma variável. Isso permite processar o XML criado dentro de uma variável em múltiplas etapas.

Você também pode usar `exsl:node-set()` para transformar strings em nós de texto.

## Sintaxe

```plain
exsl:node-set(object)
```

### Parâmetros

- `object`
  - : O objeto para o qual retornar o conjunto de nós correspondente.

### Valor de retorno

O conjunto de nós correspondente ao `object` especificado.

## Especificações

[EXSLT - EXSL:NODE-SET](https://exslt.github.io/exsl/functions/node-set/index.html)
