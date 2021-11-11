---
title: split
slug: Web/EXSLT/str/split
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/str/split
---
<p>{{ XsltRef() }}</p>

<p><br>
 <code>str:split()</code> divise une chaîne en utilisation un motif pour déterminer où doivent être fait les séparations, en retournant un ensemble de nœuds contenant les chaînes résultantes.</p>

<h3 id="Syntaxe">Syntaxe</h3>

<pre class="eval">str:split(<em>chaîne</em>,<em>motif</em>)
</pre>

<h3 id="Arguments">Arguments</h3>

<dl>
 <dt><code>chaîne</code></dt>
 <dd>La chaîne à diviser.</dd>
 <dt><code>motif</code></dt>
 <dd>Le motif indiquant les endroits de division de la chaîne.</dd>
</dl>

<h3 id="Retourne">Retourne</h3>

<p>Un ensemble de nœuds d'éléments <code>token</code>, contenant chacun un <code>token</code> provenant de <code>chaîne</code>.</p>

<p>Par exemple :</p>

<pre class="eval">str:split('livre, téléphone, ordinateur, chaise', ', ')
</pre>

<p>Retourne l'ensemble de nœuds suivant :</p>

<pre class="eval">&lt;token&gt;livre&lt;/token&gt;
&lt;token&gt;téléphone&lt;/token&gt;
&lt;token&gt;ordinateur&lt;/token&gt;
&lt;token&gt;chaise&lt;/token&gt;
</pre>

<h3 id="D.C3.A9finition">Définition</h3>

<ul>
 <li><a class="external" href="http://www.exslt.org/regexp/functions/split/index.html">EXSLT - STR:SPLIT (en)</a></li>
</ul>

<h3 id="Support_par_Gecko">Support par Gecko</h3>

<p>Supporté par Gecko 1.9 et ultérieur.</p>
