---
title: <xsl:preserve-space>
slug: Web/XML/XSLT/Reference/Element/preserve-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:preserve-space>` define os elementos no documento de origem para os quais os espaços em branco devem ser preservados. Se houver mais de um elemento, separe os nomes com um caractere de espaço em branco. Preservar espaços em branco é a configuração padrão, portanto este elemento só precisa ser usado para neutralizar um elemento `<xsl:strip-space>`.

## Sintaxe

```xml
<xsl:preserve-space elements=LIST-OF-ELEMENT-NAMES />
```

### Atributos obrigatórios

- `elements`
  - : Especifica os elementos para os quais os espaços em branco devem ser preservados.

### Atributos opcionais

Nenhum.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 3.4

## Compatibilidade com Gecko

Compatível.
