---
title: <xsl:namespace-alias>
slug: Web/XML/XSLT/Reference/Element/namespace-alias
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:namespace-alias>` é um dispositivo raramente utilizado que mapeia um namespace na folha de estilos para um namespace diferente na árvore de saída. O uso mais comum desse elemento é na geração de uma folha de estilos a partir de outra folha de estilos. Para evitar que um elemento de resultado literal normalmente prefixado com `xsl:` (que deve ser copiado como está para a árvore de resultado) seja mal interpretado pelo processador, é atribuído a ele um namespace temporário que é re-convertido apropriadamente de volta ao namespace XSLT na árvore de saída.

## Sintaxe

```xml
<xsl:namespace-alias stylesheet-prefix=NAME result-prefix=NAME />
```

### Atributos obrigatórios

- `stylesheet-prefix`
  - : Especifica o namespace temporário.
- `result-prefix`
  - : Especifica o namespace desejado para a árvore de saída.

### Atributos opcionais

Nenhum.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 7.1.1

## Compatibilidade com Gecko

Não suportado no momento.
