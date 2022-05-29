---
title: name
slug: Web/XPath/Functions/name
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/name
original_slug: Web/XPath/Fonctions/name
---
{{ XsltRef() }}

La fonction `name` retourne une chaîne représentant le QName du premier nœud d'un ensemble de nœuds donné.

### Syntaxe

```
name( [ensemble-de-nœuds] )
```

### Arguments

- `ensemble-de-nœuds` (optionnel)
  - : Le QName du premier nœud de cet ensemble de nœuds sera retourné. Si cet argument est omis, le nœud de contexte courant sera utilisé.

### Retour

Une chaîne représentant le QName d'un nœud.

### Notes

- Le [QName](http://www.w3.org/TR/REC-xml-names/#NT-QName) est le _nom qualifié_ du nœud, incluant le préfixe de son espace de nommage et son nom local.

### Définition

[XPath 1.0, section 4.1](http://www.w3.org/TR/xpath#function-local-name).

### Support Gecko

Supportée.
