---
title: message
slug: Web/XSLT/Element/message
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/message
original_slug: Web/XSLT/message
---
{{ XsltRef() }}

L'élément `<xsl:message>` écrit un message de sortie (dans la console JavaScript) et, éventuellement, met fin à l'exécution de la feuille de styles. Il peut être utile pour le débogage.

### Syntaxe

```xml
<xsl:message terminate="yes" | "no" >
  MODÈLE
</xsl:message>
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `terminate`
  - : Défini à `yes`, il indique que l'exécution doit être interrompue. La valeur par défaut est `no`&nbsp;: dans ce cas, le message est envoyé et l'exécution se poursuit.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 13](http://www.w3.org/TR/xslt#message).

### Support Gecko

Supporté.
