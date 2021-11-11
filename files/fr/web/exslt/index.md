---
title: EXSLT
slug: Web/EXSLT
tags:
  - EXSLT
  - Référence_XSLT
  - XSLT
translation_of: Web/EXSLT
---
<p>
{{ XsltRef() }}
EXSLT est un ensemble d'extensions à <a href="fr/XSLT">XSLT</a>. Un certain nombre de modules existent ; ceux qui sont supportés par Firefox sont listés ci-dessous :
</p>
<dl><dt> <a href="#Common">Common</a> (<code>exsl</code>)
</dt><dd> Fournit des éléments et des fonctions basiques d'extension.
</dd><dt> <a href="#Math">Math</a> (<code>math</code>)
</dt><dd> Fournit des routines de comparaison de nœuds.
</dd><dt> <a href="#Expressions_rationnelles">Expressions rationnelles</a> (<code>regexp</code>)
</dt><dd> Fournit des facilités pour l'utilisation d'expressions rationnelles dans la syntaxe JavaScript.
</dd><dt> <a href="#Sets">Sets</a> (<code>set</code>)
</dt><dd> Fournit des routines pour la manipulation d'ensembles.
</dd><dt> <a href="#Strings">Strings</a> (<code>str</code>)
</dt><dd> Fournit des fonctions de manipulation de chaînes.
</dd></dl>
<h3 id="Utilisation_de_EXSLT"> Utilisation de EXSLT </h3>
<p>Pour utiliser une fonction EXSLT, il faut déclarer son espace de noms comme espace de noms d'extension dans votre feuille de style. Par exemple, pour utiliser le package regexp :
</p>
<pre class="eval">&lt;xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions"&gt;

  &lt;xsl:template match="/"&gt;
    …
    &lt;xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/&gt;
    …
  &lt;/xsl:template&gt;

&lt;/xsl:stylesheet&gt;
</pre>
<h3 id="Common"> Common </h3>
<p>Le package EXSLT Common fournit des fonctions de base qui étendent les capacités de XSLT. L'espace de noms pour le package Common est <code>http://exslt.org/common</code>.
</p>
<h4 id="Fonctions"> Fonctions </h4>
<ul><li> <a href="fr/EXSLT/exsl/node-set">exsl:node-set</a>
</li><li> <a href="fr/EXSLT/exsl/object-type">exsl:object-type</a>
</li></ul>
<h3 id="Math"> Math </h3>
<p>Le package EXSLT Math fournit des fonctions permettant de travailler avec des valeurs numériques et de comparer des nœuds. L'espace de noms pour le package Math est <code>http://exslt.org/math</code>.
</p>
<h4 id="Fonctions_2"> Fonctions </h4>
<ul><li> <a href="fr/EXSLT/math/highest">math:highest</a>
</li><li> <a href="fr/EXSLT/math/lowest">math:lowest</a>
</li><li> <a href="fr/EXSLT/math/max">math:max</a>
</li><li> <a href="fr/EXSLT/math/min">math:min</a>
</li></ul>
<h3 id="Expressions_rationnelles"> Expressions rationnelles </h3>
<p>Le package EXSLT Expressions rationnelles fournit des fonctions permettant de tester, chercher et remplace du texte à l'aide d'expressions rationnelles de style JavaScript.
</p><p>L'espace de noms pour le package Expressions rationnelles est <code>http://exslt.org/regular-expressions</code>.
</p>
<h4 id="Fonctions_3"> Fonctions </h4>
<ul><li> <a href="fr/EXSLT/regexp/match">regexp:match</a>
</li><li> <a href="fr/EXSLT/regexp/replace">regexp:replace</a>
</li><li> <a href="fr/EXSLT/regexp/test">regexp:test</a>
</li></ul>
<h3 id="Sets"> Sets </h3>
<p>Le package EXSLT Sets fournit des fonctions permettant des manipulations d'ensembles. L'espace de noms pour ces fonctions est <code>http://exslt.org/sets</code>.
</p>
<h4 id="Fonctions_4"> Fonctions </h4>
<ul><li> <a href="fr/EXSLT/set/difference">set:difference</a>
</li><li> <a href="fr/EXSLT/set/distinct">set:distinct</a>
</li><li> <a href="fr/EXSLT/set/intersection">set:intersection</a>
</li><li> <a href="fr/EXSLT/set/has-same-node">set:has-same-node</a>
</li><li> <a href="fr/EXSLT/set/leading">set:leading</a>
</li><li> <a href="fr/EXSLT/set/trailing">set:trailing</a>
</li></ul>
<h3 id="Strings"> Strings </h3>
<p>Le package EXSLT Strings fournit des fonctions permettant la manipulation de chaînes. L'espace de noms pour le package Strings est <code>http://exslt.org/strings</code>.
</p>
<h4 id="Fonctions_5"> Fonctions </h4>
<ul><li> <a href="fr/EXSLT/str/concat">str:concat</a>
</li><li> <a href="fr/EXSLT/str/split">str:split</a>
</li><li> <a href="fr/EXSLT/str/tokenize">str:tokenize</a>
</li></ul>
<h3 id="Voir_.C3.A9galement"> Voir également </h3>
<ul><li> <a class="external" href="http://www.exslt.org/">Site Web d'EXSLT</a>
</li></ul>
<p><br>
</p><p><br>
</p>
<div class="noinclude">
</div>
{{ languages( { "en": "en/EXSLT", "es": "es/EXSLT", "ja": "ja/EXSLT", "pl": "pl/EXSLT" } ) }}
