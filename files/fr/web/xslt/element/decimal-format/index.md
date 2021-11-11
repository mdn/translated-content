---
title: decimal-format
slug: Web/XSLT/Element/decimal-format
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/decimal-format
original_slug: Web/XSLT/decimal-format
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:decimal-format&gt;</code> définit les caractères et symboles à utiliser lors de la conversion de nombres en chaînes à l'aide de la fonction <code>format-number( )</code>.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:decimal-format
	name=NOM
	decimal-separator=CARACTÈRE
	grouping-separator=CARACTÈRE
	infinity=CHAÎNE
	minus-sign=CARACTÈRE
	NaN=CHAÎNE
	percent=CARACTÈRE
	per-mille=CARACTÈRE
	zero-digit=CARACTÈRE
	digit=CARACTÈRE
	pattern-separator=CARACTÈRE /&gt;</pre>
<h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<dl><dt><code>name</code>
</dt><dd>Définit un nom pour ce format.
</dd></dl>
<dl><dt><code>decimal-separator</code>
</dt><dd>Définit le caractère séparateur des décimales. Le caractère par défaut est (<code>.</code>).
</dd></dl>
<dl><dt><code>grouping-separator</code>
</dt><dd>Définit le caractère séparateur des milliers. Le caractère par défaut est (<code>,</code>).
</dd></dl>
<dl><dt><code>infinity</code>
</dt><dd>Définit la chaîne utilisée pour représenter l'infini. La chaîne par défaut est "<code>Infinity</code>".
</dd></dl>
<dl><dt><code>minus-sign</code>
</dt><dd>Définit le caractère du signe moins. Le caractère par défaut est le trait d'union (<code>-</code>).
</dd></dl>
<dl><dt><code>NaN</code>
</dt><dd>Définit la chaîné utilisée lorsque la valeur n'est pas un nombre. La chaîne par défaut est "<code>NaN</code>".
</dd></dl>
<dl><dt><code>percent</code>
</dt><dd>Définit le caractère du signe pourcentage. Le caractère par défaut est (<code>%</code>).
</dd></dl>
<dl><dt><code>per-mille</code>
</dt><dd>Définit le caractère signe pour mille. Le caractère par défaut est (<code>‰</code>).
</dd></dl>
<dl><dt><code>zero-digit</code>
</dt><dd>Définit le caractère pour le chiffre 0. Le caractère par défaut est (<code>0</code>).
</dd></dl>
<dl><dt><code>digit</code>
</dt><dd>Définit le caractère représentant un nombre dans le modèle de format. Le caractère par défaut est (<code>#</code>).
</dd></dl>
<dl><dt><code>pattern-separator</code>
</dt><dd>Définit le caractère séparant les sous-modèles positifs et négatifs dans le modèle de format. Le caractère par défaut est le point-virgule (<code>;</code>).
</dd></dl>
<h3 id="Type"> Type </h3>
<p>Haut niveau, doit être l'enfant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#format-number">XSLT 1.0, section 12.3</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté depuis 1.0 (Mozilla 1.0, Netscape 7.0).
</p>