---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

XPath significa XML Path Language (em português, Linguagem de Caminho XML).
Ela utiliza uma sintaxe não XML para fornecer uma maneira flexível de endereçar
(apontar para) diferentes partes de um documento
[XML](/pt-BR/docs/Web/XML/Guides/XML_introduction).
Também pode ser usada para testar nós endereçados dentro de um documento para
determinar se eles correspondem a um padrão ou não.

O XPath é usado principalmente em [XSLT](/pt-BR/docs/Web/XML/XSLT), mas também
pode ser usado como uma forma muito mais poderosa de navegar pelo
[DOM](/pt-BR/docs/Web/API/Document_Object_Model) de qualquer documento de
linguagem semelhante a XML usando {{DOMxRef("XPathExpression")}}, como
[HTML](/pt-BR/docs/Web/HTML) e [SVG](/pt-BR/docs/Web/SVG), em vez de depender
dos métodos {{DOMxRef("Document.getElementById()")}} ou
{{DOMxRef("Document.querySelectorAll()")}}, das propriedades
{{DOMxRef("Node.childNodes")}} e de outros recursos do Core DOM.

O XPath usa uma notação de caminho (como em URLs) para navegar pela estrutura
hierárquica de um documento XML.
Ele usa uma sintaxe não XML para que possa ser usado em URIs e valores de
atributos XML.

## Guias

Os [guias XPath](/pt-BR/docs/Web/XML/XPath/Guides) abordam trechos práticos de
código e descrevem como usar XPath em JavaScript.

- [Introdução ao uso do XPath em JavaScript](/pt-BR/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Descreve um uso não XSLT do XPath.
- [Trechos de código XPath](/pt-BR/docs/Web/XML/XPath/Guides/Snippets)
  - : Estas são funções utilitárias JavaScript, que podem ser usadas em seu
    próprio código, com base nas APIs XPath.

## Referência

A [referência do XPath](/pt-BR/docs/Web/XML/XPath/Reference) aborda todos os
eixos e funções XPath documentados no MDN.

- [XPath:Axes](/pt-BR/docs/Web/XML/XPath/Reference/Axes)
  - : Lista e definição dos eixos definidos na especificação XPath.
    Os eixos são usados para descrever os relacionamentos entre nós.
- [XPath:Functions](/pt-BR/docs/Web/XML/XPath/Reference/Functions)
  - : Lista e descrição das principais funções XPath e adições específicas da
    XSLT ao XPath.

## Veja também

- [XSLT](/pt-BR/docs/Web/XML/XSLT), [XML](/pt-BR/docs/Web/XML),
  [DOM](/pt-BR/docs/Web/API/Document_Object_Model)
- [Transformando XML com XSLT](/pt-BR/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Comparação de seletores CSS e XPath](/pt-BR/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [O que é XSLT?](https://www.xml.com/pub/a/2000/08/holman/) apresenta a XSLT e
  o XPath, incluindo histórico, contexto, estrutura, conceitos e terminologia -
  xml.com (2000)
- [Testador XPath](https://extendsclass.com/xpath-tester.html)
  Construtor/Depurador XPath online
