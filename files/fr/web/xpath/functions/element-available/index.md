---
title: element-available
slug: Web/XPath/Functions/element-available
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/element-available
original_slug: Web/XPath/Fonctions/element-available
---
<p>
{{ XsltRef() }}
</p><p><br>
La fonction <code>element-available</code> détermine si un élément est disponible et retourne la valeur booléenne <code>true</code> ou <code>false</code>.
</p>
<h3 id="Syntaxe">Syntaxe </h3>
<pre class="eval">element-available( <i>QName</i> )
</pre>
<h3 id="Arguments"> Arguments </h3>
<dl><dt><code><i>QName</i></code>
</dt><dd>Doit s'évaluer en un QName valide. Le QName est développé en <i>nom étendu</i> à l'aide des déclarations d'espaces de nommage s'appliquant à l'expression. Le nom étendu est constitué d'une partie locale, une chaîne, et d'une URI d'espace de nommage.
</dd></dl>
<h3 id="Retour"> Retour </h3>
<p>Retourne <code>true</code> si et seulement si le nom étendu est un nom d'instruction. Si le nom étendu a une URI d'espace de nommage égale à l'URI de l'espace de nommage XSLT, alors il se rapporte à un élément défini par XSLT. Autrement, il se rapporte à un élément d'extension. Si le nom étendu a une URI d'espace de nommage null, la fonction <code>element-available</code> retournera <code>false</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#function-element-available">XSLT 1.0, section 15</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supportée.
</p>