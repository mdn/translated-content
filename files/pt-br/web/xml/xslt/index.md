---
title: "XSLT: Extensible Stylesheet Language Transformations"
short-title: XSLT
slug: Web/XML/XSLT
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

**Extensible Stylesheet Language Transformations (XSLT)** é uma linguagem baseada em [XML](/pt-BR/docs/Web/XML/Guides/XML_introduction) usada, em conjunto com software de processamento especializado, para a transformação de documentos XML.

Embora o processo seja chamado de "transformação", o documento original não é alterado; em vez disso, um novo documento XML é criado com base no conteúdo de um documento existente. Em seguida, o novo documento pode ser serializado (gerado) pelo processador na sintaxe XML padrão ou em outro formato, como [HTML](/pt-BR/docs/Web/HTML) ou texto simples.

O XSLT é usado com mais frequência para converter dados entre diferentes esquemas XML ou para converter dados XML em páginas da web ou documentos PDF.

## Referência

A [referência XSLT](/pt-BR/docs/Web/XML/XSLT/Reference) fornece informações detalhadas sobre XSLT, incluindo os elementos disponíveis.

- [Referência de elementos XSLT](/pt-BR/docs/Web/XML/XSLT/Reference/Element)
  - : Esta página descreve os elementos XSLT, com foco nos elementos de nível superior usados em `<xsl:stylesheet>` ou `<xsl:transform>` e nas instruções para templates.
    Ela também aborda brevemente os elementos de resultado literal (LREs), que copiam elementos que não são instruções como `<hr>` diretamente para a saída, e os templates de valor de atributo que usam expressões XPath para definir valores de atributos.

## Guias

Os [guias de XSLT](/pt-BR/docs/Web/XML/XSLT/Guides) descrevem como transformar XML, como usar parâmetros de PI e erros comuns de XSLT.

- [Transformando XML com XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : O XSLT permite que um autor de folha de estilos transforme um documento XML primário de duas maneiras significativas: manipulando e ordenando o conteúdo, incluindo uma reordenação completa dele, se desejado, e transformando o conteúdo em um formato diferente.
- [Especificando parâmetros usando instruções de processamento](/pt-BR/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : O Firefox permite que parâmetros de folha de estilos sejam especificados ao usar a instrução de processamento `<?xml-stylesheet?>`. Isso é feito usando o PI `<?xslt-param?>` descrito neste documento.
- [Erros comuns de XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Common_errors)
  - : Este artigo lista alguns problemas comuns ao usar XSLT no Firefox.

## Veja também

- [XML](/pt-BR/docs/Web/XML)
- [XPath](/pt-BR/docs/Web/XML/XPath)
- [Introdução ao XSLT](https://www.w3schools.com/xml/xsl_intro.asp) como usar XSLT para transformar documentos XML em outros formatos, como XHTML no w3schools.com
- [O que é XSLT?](https://www.xml.com/pub/a/2000/08/holman/) introdução ao XSLT e XPath, sem presumir conhecimento prévio das tecnologias
