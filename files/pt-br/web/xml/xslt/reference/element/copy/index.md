---
title: <xsl:copy>
slug: Web/XML/XSLT/Reference/Element/copy
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:copy>` transfere uma cópia superficial (o nó e qualquer nó de namespace associado) do nó atual para o documento de saída. Ele não copia nenhum filho ou atributo do nó atual.

## Sintaxe

```xml
<xsl:copy use-attribute-sets=LIST-OF-NAMES>
  TEMPLATE
</xsl:copy>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `use-attribute-sets`
  - : Lista os conjuntos de atributos que devem ser aplicados ao nó de saída, caso seja um elemento. Os nomes dos conjuntos devem ser separados por espaços em branco.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 7.5.

## Compatibilidade com Gecko

Suportado.
