---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/namespace-uri
original_slug: Web/XPath/Fonctions/namespace-uri
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>namespace-uri</code> retourne une chaîne représentant l'URI de l'espace de nommage du premier nœud d'un ensemble de nœuds donné.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">namespace-uri( [<i>ensemble-de-nœuds</i>] )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>ensemble-de-nœuds</i></code> (optionnel)
</dt><dd>L'URI de l'espace de nommage du premier nœud de cet ensemble de nœuds sera retournée. Si cet argument est omis, le nœud de contexte courant sera utilisé.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Une chaîne représentant l'URI de l'espace de nommage dans lequel se trouve le nœud donné.
</p>
<h3 id="Notes"> Notes </h3>
<ul><li> S'il n'y a pas d'espace de nommage spécifié pour le noeud donné, la chaîne retournée sera une chaîne vide.
</li></ul>
<ul><li> Pour les nœuds autres que les nœuds <code>element</code> et <code>attribute</code>, la chaîne retournée sera toujours une chaîne vide.
</li></ul>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-local-name">XPath 1.0, section 4.1</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>