---
title: ceiling
slug: Web/XPath/Functions/ceiling
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/ceiling
original_slug: Web/XPath/Fonctions/ceiling
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>ceiling</code> évalue un nombre décimal et retourne le plus petit nombre entier supérieur ou égal au nombre évalué.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">ceiling( <i>nombre</i> )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>nombre</i></code>
</dt><dd>Le nombre décimal à évaluer.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Le plus petit entier supérieur ou égal à <code><i>nombre</i></code>.
</p><p>Par exemple :
</p>
<pre class="eval"><code>ceiling (<i>5.2</i>)</code> = <var>6</var><br>
<code>ceiling (<i>-5.2</i>)</code> = <var>-5</var>
</pre>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-ceiling">XPath 1.0, section 4.4</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>