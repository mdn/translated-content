---
title: current
slug: Web/XPath/Functions/current
---

{{XsltSidebar}}{{ XsltRef() }}

La fonction `current` peut être utilisée pour obtenir le nœud courant dans une instruction XSLT.

### Syntaxe

```
current()
```

### Retour

Un ensemble de nœuds contenant uniquement le nœud courant.

### Notes

Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath core.

Le nœud courant est toujours identique au nœud de contexte. Les deux exemples suivants sont sémantiquement équivalents&nbsp;:

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

### Définition

[XSLT 1.0, section 12.4](http://www.w3.org/TR/xslt#function-current).

### Support Gecko

Supportée.
