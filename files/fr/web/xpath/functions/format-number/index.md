---
title: format-number
slug: Web/XPath/Functions/format-number
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/format-number
original_slug: Web/XPath/Fonctions/format-number
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>format-number</code> évalue un nombre et retourne une chaîne représentant le nombre dans un format donné.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">format-number( <i>nombre</i> , <i>motif</i> [, <i>format-décimal</i>] )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>nombre</i></code>
</dt><dd>Le nombre à formater.
</dd></dl>
<dl><dt><code><i>motif</i></code>
</dt><dd>Une chaîne au format de la classe <a href="http://java.sun.com/products/jdk/1.1/docs/api/java.text.DecimalFormat.html">Decimal Format (en)</a> du JDK 1.1. La notice du JDK 1.1 n'est plus disponible. Vous trouverez ici la notice pour le JSE 6: <a href="http://java.sun.com/javase/6/docs/api/java/text/DecimalFormat.html">Decimal Format (en)</a>
</dd></dl>
<dl><dt><code><i>format-décimal</i></code> (optionnel)
</dt><dd>Le nom d'un élément <code><a href="fr/XSLT/decimal-format"> xsl:decimal-format</a></code> qui définit le format de nombre à utiliser. Si il est omis, le format décimal par défaut est utilisé.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Une chaîne représentant le nombre dans le nouveau format.
</p>
<h3 id="Notes"> Notes </h3>
<p>Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath principale.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#function-format-number">XSLT 1.0, section 12.3</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>