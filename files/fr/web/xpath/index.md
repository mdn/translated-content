---
title: XPath
slug: Web/XPath
---

{{XSLTRef}}

XPath est une abréviation pour _XML Path Language_ (qu'on pourrait traduire en français par « langage de chemin XML »). Ce langage utilise une syntaxe non-XML pour cibler différentes parties d'un document [XML](/fr/docs/Web/XML/XML_introduction). Il peut aussi être utilisé pour tester certains nœuds d'un document afin de déterminer s'ils suivent un motif particulier.

XPath est principalement utilisé avec [XSLT](/fr/docs/Web/XSLT), mais on peut tout aussi bien l'utiliser afin de naviguer dans le [DOM](/fr/docs/Web/API/Document_Object_Model) de tout document structuré avec un langage semblable à XML ([HTML](/fr/docs/Web/HTML) ou [SVG](/fr/docs/Web/SVG) par exemple) grâce à l'interface [`XPathExpression`](/fr/docs/Web/API/XPathExpression). Cela permet d'éviter les méthodes [`Document.getElementById()`](/fr/docs/Web/API/Document/getElementById) ou [`ParentNode.querySelectorAll()`](/fr/docs/Web/API/ParentNode/querySelectorAll) ou encore les propriétés [`Node.childNodes`](/fr/docs/Web/API/Node/childNodes).

XPath utilise une notation en chemin (à l'instar des URL) pour naviguer dans la structure hiérarchique d'un document XML. Sa syntaxe est qualifiée de « non-XML » car un chemin XPath peut être utilisé au sein d'URI ou de valeurs d'attribut XML.

> **Note :** La prise en charge de XPath est hétérogène. Si l'implémentation de Firefox est relativement correcte (malgré l'absence de volonté de l'améliorer encore), d'autres navigateurs implémentent une surface moindre de ces fonctionnalités (voire aucune). Si vous avez besoin d'une prothèse (_polyfill_), vous pouvez vous tourner vers [js-xpath](http://nchc.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js) ou [wicked-good-xpath](https://github.com/google/wicked-good-xpath).

## Documentation

- [Introduction à l'utilisation de XPath avec JavaScript](/fr/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
  - : Une utilisation de XPath qui n'est pas basée sur XSLT.
- [Axes XPath](/fr/docs/Web/XPath/Axes)
  - : La liste et la définition des axes sont définies dans la spécification XPath. Les axes sont utilisés afin de décrire les relations entre les nœuds.
- [Functions XPath](/fr/docs/Web/XPath/Functions)
  - : La liste et la description des fonctions principales de XPath et des additions propres à XSLT.
- [Transformer du XML avec XSLT](/fr/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT utilise XPath afin de cibler les segments d'un document XML pour ensuite les transformer.
- [Fragments de code XPath](/fr/docs/Web/XPath/Snippets)
  - : Un ensemble d'exemples de code réutilisables en JavaScript qui utilisent les API [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/).
- [Qu'est-ce que XSLT ? (en anglais)](https://www.xml.com/pub/a/2000/08/holman/)
  - : Une introduction à XSLT et XPath sans besoin de connaissances préalables. Le contexte, la structure, les concepts ainsi qu'une terminologie introductive sont fournis au lecteur.

## Outils

- [ChroPath](https://addons.mozilla.org/fr/firefox/addon/chropath-for-firefox/)
  - : Un module complémentaire de Firefox qui ajoute un panneau dédié à XPath au sein des outils de développement.
- [XPath tester](https://extendsclass.com/xpath-tester.html)
  - : Un outil en ligne pour tester des expressions XPath.

## Voir aussi

- [XSLT](/fr/docs/Web/XSLT), [XML](/fr/docs/Web/XML), [DOM](/fr/docs/Web/API/Document_Object_Model)
- [Comparaison entre XPath et les sélecteurs CSS](/fr/docs/Web/XPath/Comparison_with_CSS_selectors)
- **[XSLT](/fr/docs/Web/XSLT)**
- **[EXSLT](/fr/docs/Web/EXSLT)**
- **[XPath](/fr/docs/Web/XPath)**
- Guides

  1. [Comparaison entre XPath et les sélecteurs CSS](/fr/docs/Web/XPath/Comparison_with_CSS_selectors)
  2. [Exemples de fragments XPath](/fr/docs/Web/XPath/Snippets)

- [Axes XPath](/fr/docs/Web/XPath/Axes)
  {{ListSubpagesForSidebar("/fr/docs/Web/XPath/Axes")}}
- [Fonctions XPath](/fr/docs/Web/XPath/Functions){{ListSubpagesForSidebar("/fr/docs/Web/XPath/Functions")}}
