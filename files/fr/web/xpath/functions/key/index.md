---
title: key
slug: Web/XPath/Functions/key
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/key
original_slug: Web/XPath/Fonctions/key
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>key</code> retourne un ensemble de nœuds ayant la valeur donnée pour la clef donnée.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">key( <i>nom-de-clef</i> , <i>valeur</i> )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>nom-de-clef</i></code>
</dt><dd>Une chaîne contenant le nom de l'élément <code><a href="fr/XSLT/key"> xsl:key</a></code> à utiliser.
</dd></dl>
<dl><dt><code><i>valeur</i></code>
</dt><dd>L'ensemble de nœuds retourné contiendra chaque nœud qui possède cette valeur pour la clef donnée.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Un ensemble de nœuds.
</p>
<h3 id="Notes"> Notes </h3>
<ul><li> L'élément <code><a href="fr/XSLT/key"> xsl:key</a></code> définit quel attribut de quels éléments donnés sera utilisé pour la comparaison.
</li></ul>
<p>Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath principale.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#function-key">XSLT 1.0, section 12.2</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>