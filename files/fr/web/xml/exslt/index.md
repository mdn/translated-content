---
title: EXSLT
slug: Web/XML/EXSLT
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

EXSLT est un ensemble d'extensions à [XSLT](/fr/docs/Web/XML/XSLT) organisé en modules qui fournissent des fonctions pour effectuer des transformations sur un document XML.
Pour utiliser une fonction EXSLT, il faut déclarer l'espace de noms dans lequel se trouve la fonction, puis utiliser le préfixe approprié lors de l'appel de la fonction.

Par exemple, pour utiliser le module des expressions rationnelles&nbsp;:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    <!-- … -->
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    <!-- … -->
  </xsl:template>
</xsl:stylesheet>
```

## Référence

La [référence EXSLT](/fr/docs/Web/XML/EXSLT/Reference) décrit les espaces de noms et les fonctions pour les opérations courantes, les mathématiques, les expressions rationnelles, la manipulation d'ensembles et la manipulation de chaînes de caractères.

### Commun

Le module commun d'EXSLT fournit des fonctions de base qui étendent les capacités de XSLT. L'espace de noms du module commun est `http://exslt.org/common`.

- [`exsl:node-set()`](/fr/docs/Web/XML/EXSLT/Reference/exsl/node-set)
- [`exsl:object-type()`](/fr/docs/Web/XML/EXSLT/Reference/exsl/object-type)

### Mathématiques

Le module mathématique d'EXSLT fournit des fonctions pour manipuler des valeurs numériques et comparer des nœuds. L'espace de noms du module mathématique est `http://exslt.org/math`.

- [`math:highest()`](/fr/docs/Web/XML/EXSLT/Reference/math/highest)
- [`math:lowest()`](/fr/docs/Web/XML/EXSLT/Reference/math/lowest)
- [`math:max()`](/fr/docs/Web/XML/EXSLT/Reference/math/max)
- [`math:min()`](/fr/docs/Web/XML/EXSLT/Reference/math/min)

### Expressions rationnelles

Le module des expressions rationnelles d'EXSLT fournit des fonctions qui permettent de tester, de rechercher et de remplacer du texte à l'aide d'expressions rationnelles de style JavaScript.
L'espace de noms du module des expressions rationnelles d'EXSLT est `http://exslt.org/regular-expressions`.

- [`regexp:match()`](/fr/docs/Web/XML/EXSLT/Reference/regexp/match)
- [`regexp:replace()`](/fr/docs/Web/XML/EXSLT/Reference/regexp/replace)
- [`regexp:test()`](/fr/docs/Web/XML/EXSLT/Reference/regexp/test)

### Ensembles

Le module des ensembles d'EXSLT propose des fonctions qui permettent de manipuler des ensembles. L'espace de noms de ces fonctions est `http://exslt.org/sets`.

- [`set:difference()`](/fr/docs/Web/XML/EXSLT/Reference/set/difference)
- [`set:distinct()`](/fr/docs/Web/XML/EXSLT/Reference/set/distinct)
- [`set:intersection()`](/fr/docs/Web/XML/EXSLT/Reference/set/intersection)
- [`set:has-same-node()`](/fr/docs/Web/XML/EXSLT/Reference/set/has-same-node)
- [`set:leading()`](/fr/docs/Web/XML/EXSLT/Reference/set/leading)
- [`set:trailing()`](/fr/docs/Web/XML/EXSLT/Reference/set/trailing)

### Chaînes de caractères

Le module des chaînes de caractères d'EXSLT fournit des fonctions qui permettent la manipulation des chaînes de caractères. L'espace de noms pour ce module est `http://exslt.org/strings`.

- [`str:concat()`](/fr/docs/Web/XML/EXSLT/Reference/str/concat)
- [`str:split()`](/fr/docs/Web/XML/EXSLT/Reference/str/split)
- [`str:tokenize()`](/fr/docs/Web/XML/EXSLT/Reference/str/tokenize)

## Voir aussi

- [Site web d'EXSLT <sup>(angl.)</sup>](https://exslt.github.io/)
