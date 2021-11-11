---
title: tokenize
slug: Web/EXSLT/str/tokenize
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/str/tokenize
---
<p>{{ XsltRef() }}</p>

<p><br>
 <code>str:tokenize()</code> divise une chaîne en utilisant un ensemble de caractère comme délimiteur qui détermine l'endroit où doivent être fait les séparations, en retournant un ensemble de nœuds contenant les chaînes résultantes.</p>

<h3 id="Syntaxe">Syntaxe</h3>

<pre class="eval">str:tokenize(<em>chaîne</em>,<em>délimiteurs</em>)
</pre>

<h3 id="Arguments">Arguments</h3>

<dl>
 <dt><code>chaîne</code></dt>
 <dd>La chaîne à marquer.</dd>
 <dt><code>délimiteurs</code></dt>
 <dd>Chaque caractère de la chaîne est utilisé comme séparateur de mot pendant le marquage.</dd>
</dl>

<h3 id="Retourne">Retourne</h3>

<p>Un ensemble de nœuds d'éléments <code>token</code>, contenant chacun un <code>token</code> provenant de <code>chaîne</code>.</p>

<p>Par exemple :</p>

<pre class="eval">str:tokenize('2007-09-14-03T11:40:23', '-T:')
</pre>

<p>Retourne l'ensemble de nœuds suivant :</p>

<pre class="eval">&lt;token&gt;2007&lt;/token&gt;
&lt;token&gt;09&lt;/token&gt;
&lt;token&gt;14&lt;/token&gt;
&lt;token&gt;11&lt;/token&gt;
&lt;token&gt;40&lt;/token&gt;
&lt;token&gt;23&lt;/token&gt;
</pre>

<h3 id="D.C3.A9finition">Définition</h3>

<ul>
 <li><a class="external" href="http://www.exslt.org/regexp/functions/tokenize/index.html">EXSLT - STR:TOKENIZE (en)</a></li>
</ul>

<h3 id="Support_par_Gecko">Support par Gecko</h3>

<p>Supporté par Gecko 1.9 et ultérieur.</p>
