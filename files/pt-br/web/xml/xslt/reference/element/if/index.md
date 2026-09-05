---
title: <xsl:if>
slug: Web/XML/XSLT/Reference/Element/if
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:if>` contém um atributo `test` e um template. Se o teste for avaliado como verdadeiro, o template é processado. Nesse sentido, é semelhante a uma instrução `if` em outras linguagens. Para obter a funcionalidade de uma instrução if-then-else, no entanto, use o elemento `<xsl:choose>` com um filho `<xsl:when>` e um filho `<xsl:otherwise>`.

## Sintaxe

```xml
<xsl:if test=EXPRESSION>
  TEMPLATE
</xsl:if>
```

### Atributos obrigatórios

- `test`
  - : Contém uma expressão XPath que pode ser avaliada (usando as regras definidas para `boolean( )`, se necessário) como um valor booleano. Se o valor for verdadeiro, o template é processado; caso contrário, nenhuma ação é tomada.

### Atributos opcionais

Nenhum.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSL, seção 9.1.

## Compatibilidade com Gecko

Suportado.
