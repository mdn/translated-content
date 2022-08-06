---
title: key
slug: Web/XSLT/Element/key
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/key
original_slug: Web/XSLT/key
---
{{ XsltRef() }}

L'élément `<xsl:key>` déclare une clef nommée qui peut être utilisée dans toute la feuille de styles à l'aide de la fonction `key( )`.

### Syntaxe

```xml
<xsl:key name=NOM match=EXPRESSION
  use=EXPRESSION />
```

### Attributs obligatoires

- `name`
  - : Définit un nom pour cette clef. Le nom doit être un QName valide.
- `match`
  - : Définit les nœuds sur lesquels cette clef est applicable.
- `use`
  - : Définit une expression XPath qui sera utilisée pour déterminer la valeur de la clef pour chacun des nœuds sur lesquels elle est applicable.

### Attributs optionnels

Aucun.

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 12.2](http://www.w3.org/TR/xslt#key).

### Support Gecko

Supporté.
