---
title: <xsl:element>
slug: Web/XML/XSLT/Reference/Element/element
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:element>` cria um elemento no documento de saída.

## Sintaxe

```xml
<xsl:element name=NAME namespace=URI use-attribute-sets=LIST-OF-NAMES >
  TEMPLATE
</xsl:element>
```

### Atributos obrigatórios

- `name`
  - : Especifica o nome desejado para o elemento de saída. O nome deve ser um QName válido.

### Atributos opcionais

- `namespace`
  - : Especifica o namespace do elemento de saída.
- `use-attribute-sets`
  - : Uma lista separada por espaços de nomes de elementos [`attribute-set`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/attribute-set) a serem aplicados ao elemento de saída do elemento `element`. Os atributos aplicados podem ser substituídos por elementos `attribute` aninhados.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 7.1.2.

## Compatibilidade com Gecko

Suportado.
