---
title: value-of
slug: Web/XSLT/Element/value-of
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/value-of
original_slug: Web/XSLT/value-of
---
{{ XsltRef() }}

L'élément `<xsl:value-of>` évalue une expression XPath, la convertit en chaîne et écrit cette chaîne dans l'arbre de sortie.

### Syntaxe

    <xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />

### Attribut obligatoire

- `select`
  - : Définit l'expression XPath à évaluer et à écrire dans l'arbre de sortie.

### Attributs optionnels

- `disable-output-escaping` (Netscape ne sérialise pas le résultat de la transformation - la « sortie » ci-dessous - aussi cet attribut importe peu dans ce contexte. Pour sortir des entités HTML, employez leurs valeurs numériques à la place, par exemple `&#160` pour `&nbsp`).
  - : Définit si les caractères spéciaux sont échappés quand ils sont écrits sur la sortie. Les valeurs autorisées sont `yes` ou `no`. Par exemple, s'il est définit à `yes`, le caractère \<tt>>\</tt> est transmis brut ( `>` ). Dans le cas contraire, c'est `&gt` qui serait envoyée à la sortie.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 7.6.1](http://www.w3.org/TR/xslt#value-of).

### Support Gecko

Supporté, comme décrit ci-dessus.
