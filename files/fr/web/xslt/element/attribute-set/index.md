---
title: attribute-set
slug: Web/XSLT/Element/attribute-set
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/attribute-set
original_slug: Web/XSLT/attribute-set
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:attribute-set&gt;</code> crée un ensemble nommé d'attributs, qui peut être appliqué dans son intégralité au document de sortie, de façon similaire aux styles CSS nommés.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:attribute-set name=NOM use-attribute-sets=LISTE-DE-NOMS&gt;
	&lt;xsl:attribute&gt;
&lt;/xsl:attribute-set&gt;</pre>
<h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<dl><dt><code>name</code>
</dt><dd>Définit le nom de l'ensemble d'attributs. Le nom doit être un <a href="http://www.w3.org/TR/REC-xml-names/#ns-qualnames">QName</a> valide.
</dd></dl>
<h3 id="Attributs_optionnels"> Attributs optionnels </h3>
<dl><dt><code>use-attribute-sets</code>
</dt><dd>Construit un ensemble d'attributs à partir d'autres ensembles d'attributs. Les noms des ensembles composants doivent être séparés par une espace et ils ne doivent pas s'inclure eux-mêmes directement ou indirectement.
</dd></dl>
<h3 id="Type"> Type </h3>
<p>Haut niveau, doit être l'enfant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code>.
</p>
<h3 id="D.C3.A9fini"> Défini </h3>
<p><a href="http://www.w3.org/TR/xslt#attribute-sets">XSLT 1.0, section 7.1.4</a>.
</p>
<h3 id="Support_Gecko"> Support Gecko </h3>
<p>Supporté.
</p>