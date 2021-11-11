---
title: output
slug: Web/XSLT/Element/output
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/output
original_slug: Web/XSLT/output
---
<p>
{{ XsltRef() }}
</p><p>L'élément <code>&lt;xsl:output&gt;</code> contrôle les caractéristiques du document de sortie. Pour fonctionner correctement dans Netscape, cet élément doit être utilisé, avec l'attribut <code>method</code>. À partir de Netscape 7.0, <code>method="text"</code> fonctionne comme prévu.
</p>
<h3 id="Syntaxe"> Syntaxe </h3>
<pre>&lt;xsl:output
	method="xml" | "html" | "text"
	version=CHAÎNE
	encoding=CHAÎNE
	omit-xml-declaration="yes" | "no"
	standalone="yes" | "no"
	doctype-public=CHAÎNE
	doctype-system=CHAÎNE
	cdata-section-elements=LISTE-DE-NOMS
	indent="yes" | "no"
	media-type=CHAÎNE  /&gt;
</pre> <h3 id="Attributs_obligatoires"> Attributs obligatoires </h3>
<p>Aucun.
</p>
<h3 id="Attributs_optionnels"> Attributs optionnels</h3>
<dl><dt><code>method</code>
</dt><dd>Définit le format de sortie.
</dd></dl>
<dl><dt><code>version</code>
</dt><dd>Définit la valeur de l'attribut version dans la déclaration XML ou HTML du document de sortie. Cet attribut n'est utilisé qu'avec <code>method="html"</code> ou <code>method="xml"</code>.
</dd></dl>
<dl><dt><code>encoding</code>
</dt><dd>Définit la valeur de l'attribut <code>encoding</code> dans le document de sortie.
</dd></dl>
<dl><dt><code>omit-xml-declaration</code>
</dt><dd>Indique d'inclure ou non, une déclaration XML dans le document de sortie. Les valeurs possibles sont <code>yes</code> ou <code>no</code>.
</dd></dl>
<dl><dt><code>standalone</code> (Non supporté)
</dt><dd>Indique, si utilisé, qu'une déclaration autonome doit être incluse dans le document de sortie et donne sa valeur. Les valeurs possibles sont <code>yes</code> ou <code>no</code>.
</dd></dl>
<dl><dt><code>doctype-public</code>
</dt><dd>Définit la valeur de l'attribut <code>PUBLIC</code> de la déclaration du <code>DOCTYPE</code> dans le document de sortie.
</dd></dl>
<dl><dt><code>doctype-system</code>
</dt><dd>Définit la valeur de l'attribut <code>SYSTEM</code> de la déclaration du <code>DOCTYPE</code> dans le document de sortie.
</dd></dl>
<dl><dt><code>cdata-section-elements</code>
</dt><dd>Liste les éléments dont le contenu texte doit être écrit en tant que section <code>CDATA</code>. Les éléments sont séparés par des espaces.
</dd></dl>
<dl><dt><code>indent</code> (Non supporté.)
</dt><dd>Spécifie si la sortie doit indentée pour indiquer sa structure hiérarchique.
</dd></dl>
<dl><dt><code>media-type</code> (Non supporté.)
</dt><dd>Définit le type MIME du document de sortie.
</dd></dl>
<h3 id="Type"> Type </h3>
<p>Haut niveau, doit être l'enfant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code>.
</p>
<h3 id="D.C3.A9finition"> Définition </h3>
<p><a href="http://www.w3.org/TR/xslt#output">XSLT 1.0, section 16</a>.
</p>
<h3 id="Gecko_support"> Gecko support </h3>
<p>Support partiel. Voir les commentaires ci-dessus.
</p>