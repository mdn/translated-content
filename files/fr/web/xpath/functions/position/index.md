---
title: position
slug: Web/XPath/Functions/position
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/position
original_slug: Web/XPath/Fonctions/position
---
<p>{{ XsltRef() }}</p>

<p><br>
 La fonction <code>position</code> retourne un nombre égal à la position du contexte dans le contexte d'évaluation d'expression.</p>

<h3 id="Syntaxe">Syntaxe</h3>

<pre class="eval">position()
</pre>

<h3 id="Retour">Retour</h3>

<p>Un nombre entier égal à la position du contenu dans le contexte d'évaluation d'expression.</p>

<h3 id="Notes">Notes</h3>

<ul>
 <li>Notez que la numérotation de la position d'un n&amp;oelig:ud dans un contexte commence à 1. Le premier nœud a donc la position 1.</li>
</ul>

<ul>
 <li>Le contexte est déterminé par le reste du chemin :</li>
</ul>

<pre class="eval">&lt;xsl:template match="//a[position() = 5]"&gt;
 &lt;!-- cet exemple 'attrape' le cinquième élément "a"
         n'importe où dans le document. --&gt;
&lt;/xsl:template&gt;
</pre>

<pre class="eval">&lt;xsl:template match="//div[@class='foo']/bar[position() = 1]"&gt;
 &lt;!-- cet exemple 'attrape' le premier
         élément "bar" enfant d'un élément "div"
         avec un attribut "class" valant "foo" --&gt;
&lt;/xsl:template&gt;
</pre>

<h3 id="D.C3.A9finition">Définition</h3>

<p><a href="http://www.w3.org/TR/xpath#function-position">XPath 1.0, section 4.1</a>.</p>

<h3 id="Support_Gecko">Support Gecko</h3>

<p>Supportée.</p>