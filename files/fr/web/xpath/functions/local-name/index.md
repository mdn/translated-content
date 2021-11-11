---
title: local-name
slug: Web/XPath/Functions/local-name
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/local-name
original_slug: Web/XPath/Fonctions/local-name
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>local-name</code> retourne une chaîne représentant le nom local du premier nœud d'un ensemble de nœuds donné.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">local-name( [<i>ensemble-de-nœuds</i>] )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>ensemble-de-nœuds</i></code> (optionnel)
</dt><dd>Le nom local du premier nœud de cet ensemble de nœuds sera retourné. Si cet argument est omis, le nœud de contexte courant sera utilisé.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Une chaîne.
</p>
<h3 id="Notes"> Notes </h3>
<ul><li> Le nom local est la partie locale d'un <a href="http://www.w3.org/TR/xpath#dt-expanded-name">nom étendu</a>.
</li></ul>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-local-name">XPath 1.0, section 4.1</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>