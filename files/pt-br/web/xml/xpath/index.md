---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

XPath é a abreviação de XML Path Language. Utiliza uma sintaxe não-XML para fornecer uma forma flexível de endereçar (apontar para) diferentes partes de um documento [XML](/pt-BR/docs/Web/XML/Guides/XML_introduction). Também pode ser usado para testar os nós endereçados em um documento e determinar se eles correspondem a um padrão ou não.

XPath é utilizado principalmente no [XSLT](/pt-BR/docs/Web/XML/XSLT), mas também pode ser usado como uma forma muito mais poderosa de navegar pelo [DOM](/pt-BR/docs/Web/API/Document_Object_Model) de qualquer documento de linguagem semelhante ao XML usando {{DOMxRef("XPathExpression")}}, como [HTML](/pt-BR/docs/Web/HTML) e [SVG](/pt-BR/docs/Web/SVG), em vez de depender dos métodos {{DOMxRef("Document.getElementById()")}} ou {{DOMxRef("Document.querySelectorAll()")}}, da propriedade {{DOMxRef("Node.childNodes")}} e de outros recursos do núcleo DOM.

XPath usa uma notação de caminho (como em URLs) para navegar pela estrutura hierárquica de um documento XML. Usa uma sintaxe não-XML para que possa ser utilizado em URIs e valores de atributos XML.

## Guias

Os [guias de XPath](/pt-BR/docs/Web/XML/XPath/Guides) cobrem fragmentos práticos e descrevem como usar XPath em JavaScript.

- [Introdução ao uso de XPath em JavaScript](/pt-BR/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Descreve um uso de XPath sem XSLT.
- [Fragmentos de XPath](/pt-BR/docs/Web/XML/XPath/Guides/Snippets)
  - : Estas são funções utilitárias JavaScript que podem ser usadas no seu próprio código, baseadas nas APIs do XPath.

## Referência

A [referência de XPath](/pt-BR/docs/Web/XML/XPath/Reference) cobre todos os eixos e funções do XPath documentados na MDN.

- [XPath:Eixos](/pt-BR/docs/Web/XML/XPath/Reference/Axes)
  - : Lista e definição dos eixos definidos na especificação XPath. Os eixos são usados para descrever os relacionamentos entre nós.
- [XPath:Funções](/pt-BR/docs/Web/XML/XPath/Reference/Functions)
  - : Lista e descrição das funções principais do XPath e adições específicas do XSLT ao XPath.

## Veja também

- [XSLT](/pt-BR/docs/Web/XML/XSLT), [XML](/pt-BR/docs/Web/XML), [DOM](/pt-BR/docs/Web/API/Document_Object_Model)
- [Transformando XML com XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Comparação de seletores CSS e XPath](/pt-BR/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/) apresenta XSLT e XPath, incluindo histórico, contexto, estrutura, conceitos e terminologia - xml.com (2000)
- [XPath tester](https://extendsclass.com/xpath-tester.html) construtor/depurador de XPath online
