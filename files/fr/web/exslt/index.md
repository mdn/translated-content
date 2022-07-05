---
title: EXSLT
slug: Web/EXSLT
tags:
  - EXSLT
  - Référence_XSLT
  - XSLT
translation_of: Web/EXSLT
---
{{ XsltRef() }}
EXSLT est un ensemble d'extensions à [XSLT](fr/XSLT). Un certain nombre de modules existent&nbsp;; ceux qui sont supportés par Firefox sont listés ci-dessous&nbsp;:

- [Common](#Common) (`exsl`)
  - : Fournit des éléments et des fonctions basiques d'extension.
- [Math](#Math) (`math`)
  - : Fournit des routines de comparaison de nœuds.
- [Expressions rationnelles](#Expressions_rationnelles) (`regexp`)
  - : Fournit des facilités pour l'utilisation d'expressions rationnelles dans la syntaxe JavaScript.
- [Sets](#Sets) (`set`)
  - : Fournit des routines pour la manipulation d'ensembles.
- [Strings](#Strings) (`str`)
  - : Fournit des fonctions de manipulation de chaînes.

### Utilisation de EXSLT

Pour utiliser une fonction EXSLT, il faut déclarer son espace de noms comme espace de noms d'extension dans votre feuille de style. Par exemple, pour utiliser le package regexp&nbsp;:

    <xsl:stylesheet version="1.0"
                    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                    xmlns:regexp="http://exslt.org/regular-expressions">

      <xsl:template match="/">
        …
        <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
        …
      </xsl:template>

    </xsl:stylesheet>

### Common

Le package EXSLT Common fournit des fonctions de base qui étendent les capacités de XSLT. L'espace de noms pour le package Common est `http://exslt.org/common`.

#### Fonctions

- [exsl:node-set](fr/EXSLT/exsl/node-set)
- [exsl:object-type](fr/EXSLT/exsl/object-type)

### Math

Le package EXSLT Math fournit des fonctions permettant de travailler avec des valeurs numériques et de comparer des nœuds. L'espace de noms pour le package Math est `http://exslt.org/math`.

#### Fonctions

- [math:highest](fr/EXSLT/math/highest)
- [math:lowest](fr/EXSLT/math/lowest)
- [math:max](fr/EXSLT/math/max)
- [math:min](fr/EXSLT/math/min)

### Expressions rationnelles

Le package EXSLT Expressions rationnelles fournit des fonctions permettant de tester, chercher et remplace du texte à l'aide d'expressions rationnelles de style JavaScript.

L'espace de noms pour le package Expressions rationnelles est `http://exslt.org/regular-expressions`.

#### Fonctions

- [regexp:match](fr/EXSLT/regexp/match)
- [regexp:replace](fr/EXSLT/regexp/replace)
- [regexp:test](fr/EXSLT/regexp/test)

### Sets

Le package EXSLT Sets fournit des fonctions permettant des manipulations d'ensembles. L'espace de noms pour ces fonctions est `http://exslt.org/sets`.

#### Fonctions

- [set:difference](fr/EXSLT/set/difference)
- [set:distinct](fr/EXSLT/set/distinct)
- [set:intersection](fr/EXSLT/set/intersection)
- [set:has-same-node](fr/EXSLT/set/has-same-node)
- [set:leading](fr/EXSLT/set/leading)
- [set:trailing](fr/EXSLT/set/trailing)

### Strings

Le package EXSLT Strings fournit des fonctions permettant la manipulation de chaînes. L'espace de noms pour le package Strings est `http://exslt.org/strings`.

#### Fonctions

- [str:concat](fr/EXSLT/str/concat)
- [str:split](fr/EXSLT/str/split)
- [str:tokenize](fr/EXSLT/str/tokenize)

### Voir également

- [Site Web d'EXSLT](http://www.exslt.org/)
