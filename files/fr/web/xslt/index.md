---
title: XSLT
slug: Web/XSLT
translation_of: Web/XSLT
---
{{XSLTRef}}

<div id="Quick_links">
  <ol>
    <li><strong><a href="/fr/docs/Web/XSLT">XSLT</a></strong></li>
    <li><strong><a href="/fr/docs/Web/EXSLT">EXSLT</a></strong></li>
    <li><strong><a href="/fr/docs/Web/XPath">XPath</a></strong></li>
    <li class="toggle">
      <details open><summary>Guides</summary>
        <ol>
          <li><a href="/fr/docs/Web/XSLT/Common_errors">Erreurs fréquentes avec XSLT</a></li>
          <li><a href="/fr/docs/Web/XSLT/PI_Parameters">Paramètres PI</a></li>
          <li><a href="/fr/docs/Web/XSLT/XSLT_JS_interface_in_Gecko">L'interface XSLT/JavaScript de Gecko</a></li>
          <li><a href="/fr/docs/Web/XSLT/Transforming_XML_with_XSLT">Transformer du XML avec XSLT</a></li>
          <li><a href="/fr/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations">Utiliser l'interface JavaScript Mozilla pour les transformations XSL</a></li>
        </ol>
      </details>
    </li>
    <li class="toggle">
      <details open><summary><a href="/fr/docs/XSLT/Element">Éléments XSLT</a></summary>{{ListSubpagesForSidebar("/fr/docs/Web/XSLT/Element", "", "", "&lt;xsl:", "&gt;")}}</details>
    </li>
  </ol>
</div>

**Extensible Stylesheet Language Transformations (XSLT)** est un langage basé sur le [XML](/fr/docs/Web/XML/XML_introduction) utilisé avec des logiciels de traitements spécialisés pour la transformation de documents XML.

Bien que le traitement soit souvent qualifié de transformation, le document original reste inchangé et c'est un nouveau document XML qui est créé à partir du contenu d'un document existant. Ensuite, le nouveau document pourra être sérialisé par le mécanisme de traitement afin de produire un résultat au format XML standard ou dans un autre format comme [HTML](/fr/docs/Web/HTML) ou encore du texte brut.

XSLT est le plus souvent utilisé pour convertir des données entre différents schémas XML ou pour convertir des données XML en pages web ou en documents PDF.

## Documentation

- [Référence des éléments XSLT](/fr/docs/Web/XSLT/Element)
  - : La référence indiquant la documentation pour chaque élément XSLT.
- [Transformer du XML avec XSLT](/fr/docs/Web/XSLT/Transforming_XML_with_XSLT)
  - : XSLT permet d'utiliser une feuille de style pour transformer un document XML initial de deux façons&nbsp;: manipuler et trier le contenu (y compris en réordonnant l'ensemble du document si besoin) d'une part et transformer le contenu dans un format différent d'autre part.
- [Utiliser l'interface JavaScript Mozilla pour les transformations XSL](/fr/docs/Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations)
  - : Ce document décrit l'interface JavaScript pour le moteur de traitement XSLT dans Mozilla 1.2 et les versions ultérieures.
- [Définir les paramètres utilisant des instructions de traitement](/fr/docs/Web/XSLT/PI_Parameters)
  - : Firefox permet d'indiquer des paramètres de feuille de styles en utilisant l'instruction de traitement `<?xml-stylesheet?>`. Cela se fait en avec l'instruction de traitement `<?xslt-param?>`, décrite dans cet article.
- [Tutoriel XSLT](https://www.w3schools.com/xml/xsl_intro.asp)
  - : Ce tutoriel [W3Schools](https://www.w3schools.com) indique comment utiliser XSLT pour transformer les documents XML dans d'autres formats, comme du XHTML.
- [Qu'est-ce que XSLT&nbsp;?](https://www.xml.com/pub/a/2000/08/holman/)
  - : Cet article est une riche introduction à XSLT et à XPath, sans connaissance particulière nécessaire des technologies. Il guide la lectrice ou le lecteur parmi le contexte, les raisons de ce langage, sa structure, ses concepts et sa terminologie.
- [Erreurs fréquentes avec XSLT](/fr/docs/Web/XSLT/Common_errors)
  - : Cet article liste certains des problèmes fréquemment rencontrés en utilisant XSLT avec Firefox.

## Sujets connexes

- [XML](/fr/docs/Web/XML/XML_introduction)
- [XPath](/fr/docs/Web/XPath)
