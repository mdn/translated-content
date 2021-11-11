---
title: when
slug: Web/XSLT/Element/when
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/when
original_slug: Web/XSLT/when
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:when&gt;</code> apparaît toujours dans un élément <code>&lt;xsl:choose&gt;</code>, et se comporte comme une structure conditionelle 'case'.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:when test=EXPRESSION&gt;
	MODÈLE
&lt;/xsl:when&gt;</pre> <h3 id="Attribut_obligatoire"> Attribut obligatoire </h3>
<dl><dt><code>test</code>
</dt><dd>Définit une expression booléenne à évaluer. Si elle est vraie, le contenu de l'élément est exécuté ; sinon, il est ignoré.
</dd></dl>
<h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Type"> Type </h3>
<p>Sous-instruction, apparaît toujours dans un élément <code>&lt;xsl:choose&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose">XSLT 1.0, section 9.2</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>