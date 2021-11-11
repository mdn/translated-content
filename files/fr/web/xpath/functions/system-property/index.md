---
title: system-property
slug: Web/XPath/Functions/system-property
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/system-property
original_slug: Web/XPath/Fonctions/system-property
---
{{ XsltRef() }}

La fonction `system-property()` retourne un objet représentant la propriété système donnée.

### Syntaxe

    system-property( nom )

### Arguments

- _`nom`_ (optionnel)
  - : Le nom de la propriété système. L'argument s'évaluer en une chaîne qui est un QName. Le QName est développé en un nom à l'aide des déclarations d'espaces de nommage s'appliquant à l'expression. La fonction `system-property()` retourne un objet représentant la valeur de la propriété système identifiée par le nom. Si cette propriété système n'existe pas, une chaîne vide est retournée.

### Retour

Un objet représentant le propriété système donnée.

### Notes

- xsl:version, un nombre correspondant à la version de XSLT implémentée par le processeur ; pour les processeurs XSLT implémentant la version de XSLT définit dans ce document, ce nombre est 1.0.
- xsl:vendor, une chaîne identifiant le vendeur du processeur XSLT.
- xsl:vendor-url, une chaîne contenant une URL qui identifie le vendeur du processeur XSLT ; généralement, il s'agit de l'adresse de la page Web du vendeur.

### Définition

[XSLT 1.0, section 12.4](http://www.w3.org/TR/xslt#function-system-property).

### Support Gecko

Supportée.
