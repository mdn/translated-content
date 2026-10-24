---
title: <xsl:attribute>
slug: Web/XML/XSLT/Reference/Element/attribute
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:attribute>` cria um atributo no documento de saída, utilizando quaisquer valores que possam ser acessados a partir da folha de estilo. O elemento deve ser definido antes de qualquer outro elemento do documento de saída dentro do elemento do documento de saída para o qual ele estabelece valores de atributo. Porém, pode aparecer após ou dentro de elementos que não farão parte da saída (como `<xsl:choose>` ou `<xsl:apply-templates>`, etc.).

## Sintaxe

```xml
<xsl:attribute name=NAME namespace=URI>
  TEMPLATE
</xsl:attribute>
```

### Atributos obrigatórios

- `name`
  - : Especifica o nome do atributo a ser criado no documento de saída. O nome deve ser um QName válido.

### Atributos opcionais

- `namespace`
  - : Define o URI de namespace para este atributo no documento de saída. Não é possível definir o prefixo de namespace relacionado com este elemento.

### Tipo

Instrução, aparece dentro de um template ou de um elemento `<xsl:attribute-set>`.

## Especificações

XSLT, seção 7.1.3.

## Compatibilidade com Gecko

Suportado.
