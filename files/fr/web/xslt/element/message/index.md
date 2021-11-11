---
title: message
slug: Web/XSLT/Element/message
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/message
original_slug: Web/XSLT/message
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:message&gt;</code> écrit un message de sortie (dans la console JavaScript) et, éventuellement, met fin à l'exécution de la feuille de styles. Il peut être utile pour le débogage.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:message terminate="yes" | "no" &gt;
	MODÈLE
&lt;/xsl:message&gt;</pre> <h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<dl><dt><code>terminate</code>
</dt><dd>Défini à <code>yes</code>, il indique que l'exécution doit être interrompue. La valeur par défaut est <code>no</code> : dans ce cas, le message est envoyé et l'exécution se poursuit.
</dd></dl>
<h3 id="Type"> Type </h3>
<p>Instruction, apparaît dans un modèle.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#message">XSLT 1.0, section 13</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>