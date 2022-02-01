---
title: apply-templates
slug: Web/XSLT/Element/apply-templates
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/apply-templates
original_slug: Web/XSLT/apply-templates
---
{{ XsltRef() }}

L'élément `<xsl:apply-templates>` sélectionne un ensemble de nœuds dans l'arbre d'entrée et demande au processeur de leur appliquer les modèles appropriés.

### Syntaxe

    <xsl:apply-templates select=EXPRESSION mode=NOM>
    	<xsl:with-param> [optionnel]
    	<xsl:sort> [optionnel]
    </xsl:apply-templates>

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `select`
  - : Utilise une expression XPath qui spécifie les nœuds qui doivent être traités. Une astérisque (`*`) sélectionne l'ensemble des nœuds. Si cet attribut n'est pas défini, tous les nœuds enfants du nœud courant sont sélectionnés.

<!---->

- `mode`
  - : S'il existe plusieurs traitements définis pour un même nœud, permet de les différencier.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 5.4](http://www.w3.org/TR/xslt#section-Applying-Template-Rules).

### Support Gecko

Supporté.
