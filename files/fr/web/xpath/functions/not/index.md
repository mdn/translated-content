---
title: not
slug: Web/XPath/Functions/not
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/not
original_slug: Web/XPath/Fonctions/not
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>not</code> évalue une expression booléenne et retourne la valeur opposée.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">not( <i>expression</i> )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>expression</i></code> (optionnel)
</dt><dd>L'expression est évaluée exactement comme si elle était passée en tant qu'argument à la fonction <a href="fr/XPath/Fonctions/boolean"> boolean()</a>.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p><code>True</code> pour une expression évaluée à <code>false</code> ; <code>false</code> pour une expression évaluée à <code>true</code>.
</p>
<h3 id="Notes"> Notes </h3>
<ul><li> Cette fonction devrait se comporter de façon identique à la fonction <a href="fr/XPath/Fonctions/boolean"> boolean()</a>, excepté qu'elle retourne la valeur opposée.
</li></ul>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xpath#function-not">XPath 1.0, section 4.3</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>