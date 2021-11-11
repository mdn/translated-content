---
title: key
slug: Web/XSLT/Element/key
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/key
original_slug: Web/XSLT/key
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:key&gt;</code> déclare une clef nommée qui peut être utilisée dans toute la feuille de styles à l'aide de la fonction <code>key( )</code>.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:key name=NOM match=EXPRESSION
	use=EXPRESSION /&gt; </pre>
<h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<dl><dt><code>name</code>
</dt><dd>Définit un nom pour cette clef. Le nom doit être un QName valide.
</dd><dt><code>match</code>
</dt><dd>Définit les nœuds sur lesquels cette clef est applicable.
</dd><dt><code>use</code>
</dt><dd>Définit une expression XPath qui sera utilisée pour déterminer la valeur de la clef pour chacun des nœuds sur lesquels elle est applicable.
</dd></dl>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<p>Aucun.
</p>
<h3 id="Type"> Type </h3>
<p>Haut niveau, doit être l'enfant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#key">XSLT 1.0, section 12.2</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>