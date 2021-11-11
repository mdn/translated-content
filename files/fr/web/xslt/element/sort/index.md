---
title: sort
slug: Web/XSLT/Element/sort
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/sort
original_slug: Web/XSLT/sort
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:sort&gt;</code> définit les paramètres de tri pour des nœuds sélectionnés par <code>&lt;xsl:apply-templates&gt;</code> ou par <code>&lt;xsl:for-each&gt;</code>.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre class="eval">&lt;xsl:sort
	select=EXPRESSION
	order="ascending" | "descending"
	case-order="upper-first"| "lower-first"
	lang=XML:LANG-CODE
	data-type="text" | "number" /&gt;
</pre>
<h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<dl><dt><code>select</code>
</dt><dd>Utilise une expression XPath pour définir les nœuds à classer.
</dd></dl>
<dl><dt><code>order</code>
</dt><dd>Définit si les nœuds doivent être classés dans l'ordre ascendant ou descendant. La valeur par défaut est <code>ascending</code>.
</dd></dl>
<dl><dt><code>case-order</code>
</dt><dd>Indique si ce sont les majuscules ou les minuscules qui apparaitront en premier. Les valeurs autorisées sont <code>upper-first</code> et <code>lower-first</code>.
</dd></dl>
<dl><dt><code>lang</code>
</dt><dd>Définit la langue à utiliser pour le classement.
</dd></dl>
<dl><dt><code>data-type</code>
</dt><dd>Définit si les éléments doivent être ordonnés alphabétiquement ou numériquement. Les valeurs autorisées sont <code>text</code> et <code>number</code> ; <code>text</code> est la valeur par défaut.
</dd></dl>
<h3 id="Type"> Type </h3>
<p>Sous-instruction, apparaît toujours comme un enfant de &lt;xsl:for-each&gt;, où il doit apparaître avant le modèle lui-même, ou comme enfant de <code>&lt;xsl:apply-templates&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<ul><li> <a href="http://www.w3.org/TR/xslt#sorting">XSLT 1.0, section 10 (en)</a>.
</li><li> <a href="http://xmlfr.org/w3c/TR/xslt/#sorting">XSLT 1.0, tri (fr)</a>.
</li></ul>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>