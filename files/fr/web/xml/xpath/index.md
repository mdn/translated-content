---
title: XPath
slug: Web/XML/XPath
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

XPath est une abréviation pour <i lang="en">XML Path Language</i> (qu'on peut traduire en français par «&nbsp;langage de chemin XML&nbsp;»). Ce langage utilise une syntaxe non-XML pour cibler différentes parties d'un document [XML](/fr/docs/Web/XML/Guides/XML_introduction). Il peut aussi être utilisé pour tester certains nœuds d'un document afin de déterminer s'ils suivent un motif particulier.

XPath est principalement utilisé avec [XSLT](/fr/docs/Web/XML/XSLT), mais on peut tout aussi bien l'utiliser afin de naviguer dans le [DOM](/fr/docs/Web/API/Document_Object_Model) de tout document structuré avec un langage semblable à XML ([HTML](/fr/docs/Web/HTML) ou [SVG](/fr/docs/Web/SVG) par exemple) grâce à l'interface {{DOMxRef("XPathExpression")}}. Cela permet d'éviter les méthodes {{DOMxRef("Document.getElementById()")}} ou {{DOMxRef("Document.querySelectorAll()")}}, les propriétés {{DOMxRef("Node.childNodes")}} et d'autres fonctionnalités du DOM Core.

XPath utilise une notation en chemin (à l'instar des URL) pour naviguer dans la structure hiérarchique d'un document XML. Sa syntaxe est qualifiée de non-XML, car un chemin XPath peut être utilisé au sein d'URI ou de valeurs d'attribut XML.

## Guides

Les [guides XPath](/fr/docs/Web/XML/XPath/Guides) couvrent des extraits pratiques et décrivent comment utiliser XPath en JavaScript.

- [Introduction à l'utilisation de XPath en JavaScript](/fr/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : Décrit une utilisation de XPath sans XSLT.
- [Extraits XPath](/fr/docs/Web/XML/XPath/Guides/Snippets)
  - : Ce sont des fonctions utilitaires JavaScript, qui peuvent être utilisées dans votre propre code, basées sur les API XPath.

## Référence

La [référence XPath](/fr/docs/Web/XML/XPath/Reference) couvre tous les axes et fonctions XPath documentés sur MDN.

- [XPath:Axes](/fr/docs/Web/XML/XPath/Reference/Axes)
  - : Liste et définition des axes définis dans la spécification XPath. Les axes sont utilisés pour décrire les relations entre les nœuds.
- [XPath:Functions](/fr/docs/Web/XML/XPath/Reference/Functions)
  - : Liste et description des fonctions XPath de base et des ajouts spécifiques à XSLT dans XPath.

## Voir aussi

- [XSLT](/fr/docs/Web/XML/XSLT), [XML](/fr/docs/Web/XML), [DOM](/fr/docs/Web/API/Document_Object_Model)
- [Transformer du XML avec XSLT](/fr/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
- [Comparaison des sélecteurs CSS et XPath](/fr/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
- [Qu'est-ce que XSLT&nbsp;? <sup>(angl.)</sup>](https://www.xml.com/pub/a/2000/08/holman/) introduit XSLT et XPath, y compris le contexte, la structure, les concepts et la terminologie - xml.com (2000)
- [Testeur XPath <sup>(angl.)</sup>](https://extendsclass.com/xpath-tester.html) Constructeur/Débogueur XPath en ligne
