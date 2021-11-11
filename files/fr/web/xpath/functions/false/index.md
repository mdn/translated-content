---
title: 'false'
slug: Web/XPath/Functions/false
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/false
original_slug: Web/XPath/Fonctions/false
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>false</code> retourne le booléen <code>false</code>.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">false()
</pre>
<h3 id="Retour"> Retour </h3>
<p>Booléen <code>false</code>.
</p>
<h3 id="Notes"> Notes </h3>
<p>Cette fonction est utile dans les comparaisons :
</p>
<pre class="eval">&lt;xsl:if test="boolean((1 &gt; 2) = false())"&gt;
 L'expression évaluée comme fausse
&lt;/xsl:if&gt;
</pre>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-false">XPath 1.0, section 4.3</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>