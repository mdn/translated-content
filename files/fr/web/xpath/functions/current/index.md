---
title: current
slug: Web/XPath/Functions/current
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/current
original_slug: Web/XPath/Fonctions/current
---
<p>
{{ XsltRef() }}
</p><p>La fonction <code>current</code> peut être utilisée pour obtenir le nœud courant dans une instruction XSLT.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">current()
</pre>
<h3 id="Retour"> Retour </h3>
<p>Un ensemble de nœuds contenant uniquement le nœud courant.
</p>
<h3 id="Notes"> Notes </h3>
<p>Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath core.
</p><p>Le nœud courant est toujours identique au nœud de contexte. Les deux exemples suivants sont sémantiquement équivalents :
</p>
<pre class="eval">&lt;xsl:value-of select="current()"/&gt;
</pre>
<pre class="eval">&lt;xsl:value-of select="."/&gt;
</pre>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#function-current">XSLT 1.0, section 12.4</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>