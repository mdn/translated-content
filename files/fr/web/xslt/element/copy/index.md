---
title: copy
slug: Web/XSLT/Element/copy
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/copy
original_slug: Web/XSLT/copy
---
{{ XsltRef() }}

L'élément `<xsl:copy>` transfert une copie limitée (le nœud et tous les nœuds d'espace de nommage associés) du nœud courant vers le document de sortie. Il ne copie aucun enfant ni attribut du nœud courant.

### Syntaxe

    <xsl:copy use-attribute-sets=LISTE-DE-NOMS>
    	MODÈLE
    </xsl:copy>

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `use-attribute-sets`
  - : Liste les ensembles d'attributs qui doivent être appliqués au nœud de sortie, si c'est un élément. Les noms des ensembles doivent être séparés par des espaces.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 7.5](http://www.w3.org/TR/xslt#copying).

### Support Gecko

Supporté.
