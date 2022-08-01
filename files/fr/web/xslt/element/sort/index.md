---
title: sort
slug: Web/XSLT/Element/sort
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/sort
original_slug: Web/XSLT/sort
---
{{ XsltRef() }}

L'élément `<xsl:sort>` définit les paramètres de tri pour des nœuds sélectionnés par `<xsl:apply-templates>` ou par `<xsl:for-each>`.

### Syntaxe

```xml
<xsl:sort
  select=EXPRESSION
  order="ascending" | "descending"
  case-order="upper-first"| "lower-first"
  lang=XML:LANG-CODE
  data-type="text" | "number" />
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `select`
  - : Utilise une expression XPath pour définir les nœuds à classer.

<!---->

- `order`
  - : Définit si les nœuds doivent être classés dans l'ordre ascendant ou descendant. La valeur par défaut est `ascending`.

<!---->

- `case-order`
  - : Indique si ce sont les majuscules ou les minuscules qui apparaitront en premier. Les valeurs autorisées sont `upper-first` et `lower-first`.

<!---->

- `lang`
  - : Définit la langue à utiliser pour le classement.

<!---->

- `data-type`
  - : Définit si les éléments doivent être ordonnés alphabétiquement ou numériquement. Les valeurs autorisées sont `text` et `number`&nbsp;; `text` est la valeur par défaut.

### Type

Sous-instruction, apparaît toujours comme un enfant de \<xsl:for-each>, où il doit apparaître avant le modèle lui-même, ou comme enfant de `<xsl:apply-templates>`.

### Définition

- [XSLT 1.0, section 10 (en)](http://www.w3.org/TR/xslt#sorting).
- [XSLT 1.0, tri (fr)](http://xmlfr.org/w3c/TR/xslt/#sorting).

### Support Gecko

Supporté.
