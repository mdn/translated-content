---
title: choose
slug: Web/XSLT/Element/choose
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/choose
original_slug: Web/XSLT/choose
---
<p>
{{ XsltRef() }}
</p><p><br>
L'élément <code>&lt;xsl:choose&gt;</code> définit un choix parmi un certain nombre d'alternatives. Il se comporte comme l'instruction switch d'un langage procédural.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:choose&gt;
	&lt;xsl:when&gt;
	&lt;xsl:otherwise&gt; [optionnel]
&lt;/&lt;xsl:choose&gt;</pre> <h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<p>Aucun.
</p>
<h3 id="Type"> Type </h3>
<p>Instruction, apparaît dans un modèle. Il contient un ou plusieurs éléments <code>&lt;xsl:when&gt;</code>, et éventuellement un élément final <code>&lt;xsl:otherwise&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose">XSLT 1.0, section 9.2</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>