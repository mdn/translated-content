---
title: stylesheet
slug: Web/XSLT/Element/stylesheet
---

{{ XsltRef() }}

L'élément `<xsl:stylesheet>` (ou son équivalent `<xsl:transform>`) est l'élément le plus externe d'une feuille de style, celui qui contient tout les autres éléments.

### Déclaration de l'espace de nommage

Un pseudo-attribut est nécessaire pour identifier le document comme étant une feuille de style XSLT. Typiquement, on utilise `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

### Syntaxe

```xml
<xsl:stylesheet
  version=NOMBRE
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  id=NOM
  extension-element-prefixes=LISTE-DE-NOMS
  exclude-result-prefixes=LISTE-DE-NOMS>
    FEUILLE DE STYLE ENTIÈRE
</xsl:stylesheet>
```

### Attribut obligatoire

- `version`
  - : Définit la version de XSLT requise par cette feuille de style.

### Attributs optionnels

- `id` (Supporté comme dans Netscape 7.0 uniquement s'il est explicitement appelé par une DTD intégrée)
  - : Définit un identifiant `id` pour cette feuille de style. Cet attribut est le plus souvent utilisé lorsque la feuille de style est incorporée dans un autre document XML.

<!---->

- extension-element-prefixes (Non supporté)
  - : Définit la liste des préfixes des espaces de nommage pour les éléments d'extension présent dans ce document. Les noms sont séparés par des espaces.

<!---->

- exclude-result-prefixes
  - : Définit tous les espaces de nommage utilisés dans le document qui ne doivent pas être envoyés vers le document de sortie. Les noms sont séparés par des espaces.

### Type

Élément le plus externe de la feuille de style, obligatoire.

### Définition

[XSLT 1.0, section 2.2](http://www.w3.org/TR/xslt#stylesheet-element).

### Support Gecko

Support partiel. Voir les commentaires ci-dessus.
