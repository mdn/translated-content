---
title: <xsl:stylesheet>
slug: Web/XML/XSLT/Reference/Element/stylesheet
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:stylesheet>` (ou o equivalente elemento `<xsl:transform>`) é o elemento mais externo de uma folha de estilos.

## Declaração de namespace

Um pseudo-atributo necessário para identificar o documento como uma folha de estilos XSLT. Tipicamente é `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

## Sintaxe

```xml
<xsl:stylesheet
  version="NUMBER"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  id="NAME"
  extension-element-prefixes="LIST-OF-NAMES"
  exclude-result-prefixes="LIST-OF-NAMES">
    ENTIRE STYLESHEET
</xsl:stylesheet>
```

### Atributos obrigatórios

- `version`
  - : Especifica a versão do XSLT exigida por esta folha de estilos.

### Atributos opcionais

- `exclude-result-prefixes`
  - : Especifica qualquer namespace usado neste documento que não deve ser enviado ao documento de saída. A lista é separada por espaços em branco.
- `extension-element-prefixes`
  - : Especifica uma lista separada por espaços de quaisquer prefixos de namespace para elementos de extensão neste documento.
- `default-collation`
  - : Especifica o agrupamento padrão usado por todas as expressões {{Glossary("XPath")}} que aparecem em atributos ou templates de valor de texto que têm o elemento como ancestral, a menos que seja substituído por outro atributo `default-collation` em um elemento interno. Também determina o agrupamento usado por determinadas construções XSLT (como [`<xsl:key>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/key) e [`<xsl:for-each-group>`](/pt-BR/docs/Web/XSLT/Element/for-each-group)) dentro de seu escopo.
- `default-mode`
  - : Define o valor padrão para o atributo `mode` de todos os elementos [`<xsl:template>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/template) e [`<xsl:apply-templates>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/apply-templates) dentro de seu escopo.
- `default-validation`
  - : Define o valor padrão do atributo `validation` de todas as instruções relevantes que aparecem dentro de seu escopo.
- `expand-text`
  - : Determina se os nós de texto descendentes do elemento são tratados como templates de valor de texto.
- `id`
  - : Especifica um `id` para esta folha de estilos. É mais frequentemente usado quando a folha de estilos está embutida em outro documento XML.
- `input-type-annotations`
  - : Especifica se as anotações de tipo são removidas do elemento para que os mesmos resultados sejam produzidos independentemente de os documentos de origem terem sido validados em relação a um esquema ou não.
- `use-when`
  - : Determina se o elemento e todos os nós que o têm como ancestral são excluídos da folha de estilos.
- `xpath-default-namespace`
  - : Especifica o namespace que será usado se o nome do elemento não tiver prefixo ou um nome de tipo sem prefixo dentro de uma expressão XPath.

### Tipo

Elemento mais externo obrigatório da folha de estilos.

## Especificações

{{Specifications}}
