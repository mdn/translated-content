---
title: number
slug: Web/XPath/Functions/number
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/number
original_slug: Web/XPath/Fonctions/number
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>number</code> convertit un objet en un nombre et retourne ce nombre.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">number( [<i>objet</i>] )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><i><code>objet</code></i> (optionnel)
</dt><dd>L'objet à convertir en nombre.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Le nombre résultant après conversion de l'objet.
</p>
<h3 id="Notes"> Notes </h3>
<ul><li> Les chaînes sont converties en nombre en enlevant les espaces précédant le nombre dans la chaîne et en ignorant tout ce qui suit le nombre. Si la chaîne ne correspond pas à ce motif, alors elle est convertie en <code>NaN</code> </li><li> Le booléen <code>true</code> est converti en 1. <code>False</code> est converti en 0. </li><li> Un ensemble de nœuds est d'abord converti en chaîne comme lors d'un appel à la fonction <a href="fr/XPath/Fonctions/string">string()</a> puis il est traité de la même façon qu'une chaîne.
</li><li> Un objet qui n'est pas d'un des quatre types de base est converti en nombre avec une méthode qui dépend de son type. </li></ul>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-number">XPath 1.0, section 4.4</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>