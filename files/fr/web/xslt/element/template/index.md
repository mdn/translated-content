---
title: template
slug: Web/XSLT/Element/template
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/template
original_slug: Web/XSLT/template
---
{{ XsltRef() }}

L'élément `<xsl:template>` définit un modèle produisant une sortie. Au moins l'un des atttributs match et set doit posséder une valeur.

### Syntaxe

```xml
<xsl:template
  match=MOTIF
  name=NOM
  mode=NOM
  priority=NOMBRE>
  <xsl:param> [optionnel]
  MODÈLE
</xsl:template>
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `match`
  - : Définit le motif qui détermine les éléments auxquels ce modèle doit être appliqué. Il devient attribut obligatoire si l'attribut `name` n'est pas présent.

<!---->

- `name`
  - : Définit un nom pour ce modèle, par lequel il sera invoqué à l'aide de l'élément `<xsl:call-template>`.

<!---->

- `mode`
  - : Définit un mode particulier pour ce modèle, qui peut correspondre à un attribut de l'élément `<xsl:apply-templates>`. Utile pour traiter la même information de différentes façons.

<!---->

- `priority`
  - : Définit une priorité pour ce modèle, sous forme d'un nombre quelconque, à l'eception de `Infinity` (infini). Le processeur utilise ce nombre lorsque plusieurs modèles s'appliquent au même nœud.

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 5.3](http://www.w3.org/TR/xslt#section-Defining-Template-Rules).

### Support Gecko

Supporté.
