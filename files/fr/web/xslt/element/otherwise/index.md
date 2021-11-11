---
title: otherwise
slug: Web/XSLT/Element/otherwise
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/otherwise
original_slug: Web/XSLT/otherwise
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:otherwise&gt;</code> est utilisé pour définir une action qui doit être exécutée lorsqu'aucune condition <code>&lt;xsl:when&gt;</code> ne s'applique. Elle est comparable aux instructions <code>else</code> ou <code>default</code> d'autres langages de programmation.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:otherwise&gt;
	MODÈLE
&lt;/xsl:otherwise&gt;</pre> <h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<p>Aucun.
</p>
<h3 id="Type"> Type </h3>
<p>Sous-instruction, doit apparaître comme le dernier enfant d'un élément <code>&lt;xsl:choose&gt;</code>, dans un modèle.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose">XSLT 1.0, section 9.2</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>