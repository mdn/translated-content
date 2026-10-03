---
title: <xsl:output>
slug: Web/XML/XSLT/Reference/Element/output
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:output>` controla as características do documento de saída. Para funcionar corretamente no Netscape, este elemento, com o atributo method, deve ser utilizado. A partir da versão 7.0, `method="text"` funciona conforme esperado.

## Sintaxe

```xml
<xsl:output
  method="xml" | "html" | "text"
  version=STRING
  encoding=STRING
  omit-xml-declaration="yes" | "no"
  standalone="yes" | "no"
  doctype-public=STRING
  doctype-system=STRING
  cdata-section-elements=LIST-OF-NAMES
  indent="yes" | "no"
  media-type=STRING />
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `method`
  - : Especifica o formato de saída.
- `version`
  - : Especifica o valor do atributo version da declaração XML ou HTML no documento de saída. Este atributo só é usado quando `method="html"` ou `method="xml"`.
- `encoding`
  - : Especifica o valor do atributo `encoding` no documento de saída.
- `omit-xml-declaration`
  - : Indica se deve ou não incluir uma declaração XML na saída. Os valores aceitos são `yes` ou `no`.
- `standalone` (Não suportado.)
  - : Se presente, indica que uma declaração standalone deve aparecer no documento de saída e fornece seu valor. Os valores aceitos são `yes` ou `no`.
- `doctype-public`
  - : Especifica o valor do atributo `PUBLIC` da declaração `DOCTYPE` no documento de saída.
- `doctype-system`
  - : Especifica o valor do atributo `SYSTEM` da declaração `DOCTYPE` no documento de saída.
- `cdata-section-elements`
  - : Lista os elementos cujo conteúdo de texto deve ser escrito como seções `CDATA`. Os elementos devem ser separados por espaços em branco.
- `indent` (Não suportado.)
  - : Especifica se a saída deve ser recuada para indicar sua estrutura hierárquica.
- `media-type` (Não suportado.)
  - : Especifica o tipo MIME do documento de saída.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 16.

## Compatibilidade com Gecko

Suporte parcial. Veja os comentários acima.
