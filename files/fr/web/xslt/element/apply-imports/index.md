---
title: apply-imports
slug: Web/XSLT/Element/apply-imports
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/apply-imports
original_slug: Web/XSLT/apply-imports
---
{{ XsltRef() }}

L'élément `<xsl:apply-imports>`, utilisé la plupart du temps dans les feuilles de styles complexes, est assez mystérieux. Les règles de priorité de l'importation imposent que les règles de modèles des feuilles de styles principales aient une priorité supérieure aux règles de modèles des feuilles de styles importées. Cependant, il est parfois utile de forcer le processeur à utiliser une règle de modèle de la feuille de styles importée (de priorité plus basse) plutôt que la règle équivalente de la feuille de styles principale.

### Syntaxe

```xml
<xsl:apply-imports />
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

Aucun.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 5.6](http://www.w3.org/TR/xslt#apply-imports).

### Support Gecko

Supportée.
