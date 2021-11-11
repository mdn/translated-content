---
title: preserve-space
slug: Web/XSLT/Element/preserve-space
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/preserve-space
original_slug: Web/XSLT/preserve-space
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:preserve-space&gt;</code> définit les éléments du document source pour lesquels les espaces doivent être préservées. Si il y a plus d'un élément, leurs noms doivent être séparés par des espaces. La politique par défaut est de conserver les espaces, cet élément n'est donc utile que pour contrer l'effet de <code>&lt;xsl:strip-space&gt;</code>.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre class="eval">&lt;xsl:preserve-space elements=LISTE-DE-NOMS-D-ÉLÉMENTS  /&gt;
</pre>
<h3 id="Attribut_obligatoire"> Attribut obligatoire </h3>
<dl><dt><code>elements</code>
</dt><dd>Définit les éléments pour lesquels les espaces doivent être préservées.
</dd></dl>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<p>Aucun.
</p>
<h3 id="Type"> Type </h3>
<p>Haut niveau, doit être un enfant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#strip">XSLT 1.0, section 3.4</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>