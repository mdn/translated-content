---
title: value-of
slug: Web/XSLT/Element/value-of
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/value-of
original_slug: Web/XSLT/value-of
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:value-of&gt;</code> évalue une expression XPath, la convertit en chaîne et écrit cette chaîne dans l'arbre de sortie.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre class="eval">&lt;xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  /&gt;
</pre>
<h3 id="Attribut_obligatoire"> Attribut obligatoire </h3>
<dl><dt><code>select</code>
</dt><dd>Définit l'expression XPath à évaluer et à écrire dans l'arbre de sortie.
</dd></dl>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<dl><dt><code>disable-output-escaping</code> (Netscape ne sérialise pas le résultat de la transformation - la « sortie » ci-dessous - aussi cet attribut importe peu dans ce contexte. Pour sortir des entités HTML, employez leurs valeurs numériques à la place, par exemple <code>&amp;#160</code> pour <code>&amp;nbsp</code>).
</dt><dd>Définit si les caractères spéciaux sont échappés quand ils sont écrits sur la sortie. Les valeurs autorisées sont <code>yes</code> ou <code>no</code>. Par exemple, s'il est définit à <code>yes</code>, le caractère &lt;tt&gt;&gt;&lt;/tt&gt; est transmis brut ( <code>&gt;</code> ). Dans le cas contraire, c'est <code>&amp;gt</code> qui serait envoyée à la sortie.
</dd></dl>
<h3 id="Type"> Type </h3>
<p>Instruction, apparaît dans un modèle.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#value-of">XSLT 1.0, section 7.6.1</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté, comme décrit ci-dessus.
</p>