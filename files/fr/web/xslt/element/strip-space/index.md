---
title: strip-space
slug: Web/XSLT/Element/strip-space
---

{{ XsltRef() }}

L'élément `<xsl:strip-space>` définit les éléments du document source dont les noeuds descendants ne contenant que des espaces doivent être supprimés.

### Syntaxe

```xml
<xsl:strip-space elements=LISTE-DE-NOMS-D-ÉLÉMENTS  />
```

### Attribut obligatoire

- `elements`
  - : Définit une liste d'éléments du document source, séparés par des espaces, desquels les nœuds ne comportant que des espaces doivent être supprimés.

### Attributs optionnels

Aucun.

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 3.4](http://www.w3.org/TR/xslt#strip).

### Support Gecko

Supporté.
