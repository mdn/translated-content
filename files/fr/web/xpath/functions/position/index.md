---
title: position
slug: Web/XPath/Functions/position
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/position
original_slug: Web/XPath/Fonctions/position
---
{{ XsltRef() }}

La fonction `position` retourne un nombre égal à la position du contexte dans le contexte d'évaluation d'expression.

### Syntaxe

    position()

### Retour

Un nombre entier égal à la position du contenu dans le contexte d'évaluation d'expression.

### Notes

- Notez que la numérotation de la position d'un n\&oelig:ud dans un contexte commence à 1. Le premier nœud a donc la position 1.

<!---->

- Le contexte est déterminé par le reste du chemin :

<!---->

    <xsl:template match="//a[position() = 5]">
     <!-- cet exemple 'attrape' le cinquième élément "a"
             n'importe où dans le document. -->
    </xsl:template>

<!---->

    <xsl:template match="//div[@class='foo']/bar[position() = 1]">
     <!-- cet exemple 'attrape' le premier
             élément "bar" enfant d'un élément "div"
             avec un attribut "class" valant "foo" -->
    </xsl:template>

### Définition

[XPath 1.0, section 4.1](http://www.w3.org/TR/xpath#function-position).

### Support Gecko

Supportée.
