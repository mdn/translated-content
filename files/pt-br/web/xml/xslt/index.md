---
title: "XSLT: Extensible Stylesheet Language Transformations"
slug: Web/XML/XSLT
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

**Extensible Stylesheet Language Transformations (XSLT)** (em português,
Transformações da Linguagem de Folha de Estilo Extensível) é uma linguagem
baseada em [XML](/pt-BR/docs/Web/XML/Guides/XML_introduction) usada, em conjunto
com software de processamento especializado, para a transformação de documentos
XML.

Embora o processo seja chamado de "transformação", o documento original não é
alterado; em vez disso, um novo documento XML é criado com base no conteúdo de
um documento existente.
Em seguida, o novo documento pode ser serializado (saída) pelo processador na
sintaxe XML padrão ou em outro formato, como [HTML](/pt-BR/docs/Web/HTML) ou
texto simples.

XSLT é mais frequentemente usada para converter dados entre diferentes esquemas
XML ou para converter dados XML em páginas web ou documentos PDF.

## Referência

A [referência da XSLT](/pt-BR/docs/Web/XML/XSLT/Reference) fornece informações
detalhadas sobre XSLT, incluindo os elementos disponíveis.

- [Referência de elementos XSLT](/pt-BR/docs/Web/XML/XSLT/Reference/Element)
  - : Esta página descreve os elementos XSLT, com foco nos elementos de nível
    superior usados em `<xsl:stylesheet>` ou `<xsl:transform>` e instruções para
    templates.
    Também aborda brevemente os elementos de resultado literal (LREs), que
    copiam elementos não instrucionais como `<hr>` diretamente para a saída, e
    templates de valor de atributo que usam expressões XPath para definir
    valores de atributo.

## Guias

Os [guias da XSLT](/pt-BR/docs/Web/XML/XSLT/Guides) descrevem como transformar
XML, como usar parâmetros de instruções de processamento e erros comuns da XSLT.

- [Transformando XML com XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : A XSLT permite que a pessoa autora de uma folha de estilo transforme um
    documento XML primário de duas maneiras significativas: manipulando e
    classificando o conteúdo, incluindo uma reordenação completa, se desejado, e
    transformando o conteúdo em um formato diferente.
- [Especificando parâmetros usando instruções de processamento](/pt-BR/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : O Firefox permite que parâmetros de folha de estilo sejam especificados ao
    usar a instrução de processamento `<?xml-stylesheet?>`.
    Isso é feito usando a instrução de processamento `<?xslt-param?>` descrita
    neste documento.
- [Erros comuns da XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Common_errors)
  - : Este artigo lista alguns problemas comuns ao usar XSLT no Firefox.

## Veja também

- [XML](/pt-BR/docs/Web/XML)
- [XPath](/pt-BR/docs/Web/XML/XPath)
- [Introdução à XSLT](https://www.w3schools.com/xml/xsl_intro.asp) como usar
  XSLT para transformar documentos XML em outros formatos, como XHTML em
  w3schools.com.
- [O que é XSLT?](https://www.xml.com/pub/a/2000/08/holman/) introdução à XSLT e
  XPath, não assume conhecimento prévio das tecnologias.
