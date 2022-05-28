---
title: string
slug: Web/XPath/Functions/string
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/string
original_slug: Web/XPath/Fonctions/string
---
{{ XsltRef() }}

La fonction `string` convertit l'argument passé en une chaîne.

### Syntaxe

```
string( [objet] )
```

### Arguments

- `objet` (optionnel)
  - : L'objet à convertir en une chaîne. Si il est omis, le nœud du contexte est utilisé.

### Retour

Une chaîne.

### Notes

- Si l'objet est un ensemble de nœuds, la valeur de la chaîne du premier nœud de l'ensemble est retournée.
- Un nombre est converti comme suit&nbsp;:

  - NaN est converti en la chaîne `NaN`.
  - Zéro positif est converti en `0`.
  - Zéro négatif est converti en `0`.
  - Infini positif est converti en la chaîne `Infinity`.
  - Infini négatif est converti en la chaîne `-Infinity`.
  - Les nombres décimaux entre -1 et 1 sont convertis en chaîne comportant un unique 0 avant le séparateur décimale.

### Définition

[XPath 1.0, section 4.2](http://www.w3.org/TR/xpath#function-string).

### Support Gecko

Supportée.
