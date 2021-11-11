---
title: highest
slug: Web/EXSLT/math/highest
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/math/highest
---
<p>{{ XsltRef() }}<br>
 <code>math:highest()</code> retourne le nœud de l'ensemble de nœuds spécifié possédant la plus grande valeur (où la plus grande valeur est calculée avec <code><a href="fr/EXSLT/math/max">math:max()</a></code>).</p>

<p>Un nœud a sa valeur maximale si sa valeur de chaîne convertie en nombre est égale à la valeur maximale.</p>

<p>{{ Note() }}</p>

<h3 id="Syntaxe">Syntaxe</h3>

<pre class="eval">math:highest(<em>ensembleNœud</em>)
</pre>

<h3 id="Arguments">Arguments</h3>

<dl>
 <dt><code>ensembleNœud</code></dt>
 <dd>L'ensemble de nœuds pour lequel il faut retourner la plus grande valeur.</dd>
</dl>

<h3 id="Retourne">Retourne</h3>

<p>Un fragment d'arbre résultat consistant en copies des nœuds retournés par la fonction <code><a href="fr/EXSLT/math/max">math:max()</a></code>.</p>

<h3 id="D.C3.A9finition">Définition</h3>

<ul>
 <li><a class="external" href="http://www.exslt.org/regexp/functions/highest/index.html">EXSLT - MATH:HIGHEST (en)</a></li>
</ul>

<h3 id="Support_par_Gecko">Support par Gecko</h3>

<p>Supporté par Gecko 1.9 et ultérieur.</p>
