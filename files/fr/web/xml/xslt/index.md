---
title: "XSLT : Transformations de feuilles de style extensibles"
short-title: XSLT
slug: Web/XML/XSLT
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

**Extensible Stylesheet Language Transformations (XSLT)** est un langage basé sur le [XML](/fr/docs/Web/XML/Guides/XML_introduction) utilisé, en association avec des logiciels de traitement spécialisés, pour la transformation de documents XML.

Bien que ce processus soit qualifié de «&nbsp;transformation&nbsp;», le document d'origine n'est pas modifié&nbsp;; un nouveau document XML est plutôt créé à partir du contenu d'un document existant. Ce nouveau document peut ensuite être sérialisé (sortie) par le processeur dans une syntaxe XML standard ou dans un autre format, tel que le [HTML](/fr/docs/Web/HTML) ou du texte brut.

XSLT est le plus souvent utilisé pour convertir des données entre différents schémas XML ou pour convertir des données XML en pages web ou en documents PDF.

## Référence

La [référence XSLT](/fr/docs/Web/XML/XSLT/Reference) fournit des informations détaillées sur XSLT, y compris les éléments disponibles.

- [Référence des éléments XSLT](/fr/docs/Web/XML/XSLT/Reference/Element)
  - : Cette page décrit les éléments XSLT, en se concentrant sur les éléments de niveau supérieur utilisés dans `<xsl:stylesheet>` ou `<xsl:transform>` et les instructions pour les modèles.
    Elle couvre également brièvement les éléments de résultat littéral (LRE), qui copient directement dans la sortie les éléments qui ne sont pas des instructions comme `<hr>`, ainsi que les modèles de valeur d'attribut qui utilisent des expressions XPath pour définir les valeurs des attributs.

## Guides

Les [guides XSLT](/fr/docs/Web/XML/XSLT/Guides) décrivent comment transformer du XML, comment utiliser les paramètres PI et les erreurs courantes en XSLT.

- [Transformer du XML avec XSLT](/fr/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT permet à un·e auteur·ice de feuille de style de transformer un document XML principal de deux manières significatives&nbsp;: en manipulant et en triant le contenu, y compris en le réorganisant complètement si nécessaire, et en transformant le contenu dans un format différent.
- [Définir des paramètres à l'aide des instructions de traitement](/fr/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox permet de définir des paramètres de feuille de style lors de l'utilisation de l'instruction de traitement `<?xml-stylesheet?>`. Cela se fait à l'aide de l'instruction de traitement `<?xslt-param?>` décrite dans ce document.
- [Erreurs XSLT courantes](/fr/docs/Web/XML/XSLT/Guides/Common_errors)
  - : Cet article répertorie certains problèmes courants lors de l'utilisation de XSLT dans Firefox.

## Voir aussi

- [XML](/fr/docs/Web/XML)
- [XPath](/fr/docs/Web/XML/XPath)
- [Introduction à XSLT <sup>(angl.)</sup>](https://www.w3schools.com/xml/xsl_intro.asp) comment utiliser XSLT pour transformer des documents XML en d'autres formats, comme XHTML sur w3schools.com
- [Qu'est-ce que XSLT&nbsp;? <sup>(angl.)</sup>](https://www.xml.com/pub/a/2000/08/holman/) introduction à XSLT et XPath, sans présupposer de connaissances préalables sur ces technologies
