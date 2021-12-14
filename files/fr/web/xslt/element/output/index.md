---
title: output
slug: Web/XSLT/Element/output
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/output
original_slug: Web/XSLT/output
---
{{ XsltRef() }}

L'élément `<xsl:output>` contrôle les caractéristiques du document de sortie. Pour fonctionner correctement dans Netscape, cet élément doit être utilisé, avec l'attribut `method`. À partir de Netscape 7.0, `method="text"` fonctionne comme prévu.

### Syntaxe

    <xsl:output
    	method="xml" | "html" | "text"
    	version=CHAÎNE
    	encoding=CHAÎNE
    	omit-xml-declaration="yes" | "no"
    	standalone="yes" | "no"
    	doctype-public=CHAÎNE
    	doctype-system=CHAÎNE
    	cdata-section-elements=LISTE-DE-NOMS
    	indent="yes" | "no"
    	media-type=CHAÎNE  />

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `method`
  - : Définit le format de sortie.

<!---->

- `version`
  - : Définit la valeur de l'attribut version dans la déclaration XML ou HTML du document de sortie. Cet attribut n'est utilisé qu'avec `method="html"` ou `method="xml"`.

<!---->

- `encoding`
  - : Définit la valeur de l'attribut `encoding` dans le document de sortie.

<!---->

- `omit-xml-declaration`
  - : Indique d'inclure ou non, une déclaration XML dans le document de sortie. Les valeurs possibles sont `yes` ou `no`.

<!---->

- `standalone` (Non supporté)
  - : Indique, si utilisé, qu'une déclaration autonome doit être incluse dans le document de sortie et donne sa valeur. Les valeurs possibles sont `yes` ou `no`.

<!---->

- `doctype-public`
  - : Définit la valeur de l'attribut `PUBLIC` de la déclaration du `DOCTYPE` dans le document de sortie.

<!---->

- `doctype-system`
  - : Définit la valeur de l'attribut `SYSTEM` de la déclaration du `DOCTYPE` dans le document de sortie.

<!---->

- `cdata-section-elements`
  - : Liste les éléments dont le contenu texte doit être écrit en tant que section `CDATA`. Les éléments sont séparés par des espaces.

<!---->

- `indent` (Non supporté.)
  - : Spécifie si la sortie doit indentée pour indiquer sa structure hiérarchique.

<!---->

- `media-type` (Non supporté.)
  - : Définit le type MIME du document de sortie.

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 16](http://www.w3.org/TR/xslt#output).

### Gecko support

Support partiel. Voir les commentaires ci-dessus.
