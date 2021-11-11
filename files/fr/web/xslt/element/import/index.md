---
title: import
slug: Web/XSLT/Element/import
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/import
original_slug: Web/XSLT/import
---
<p>{{ XsltRef() }}</p>

<p>L'élément <code>&lt;xsl:import&gt;</code> est un élément de haut niveau qui sert à importer le contenu d'une feuille de styles dans une autre. Généralement, le contenu importé a une priorité inférieure à celui de la feuille qui effectue l'importation. Ceci contraste avec <a href="/fr/docs/Web/XSLT/include">&lt;xsl:include&gt;</a> où les contenus des deux feuilles ont exactement la même priorité.</p>

<h3 id="Syntaxe">Syntaxe</h3>

<p>&lt;xsl:import href=URI /&gt;</p>

<h3 id="Attribut_obligatoire">Attribut obligatoire</h3>

<dl>
 <dt><code>href</code></dt>
 <dd>Définit l'URI de la feuille de styles à importer.</dd>
</dl>

<h3 id="Attributs_optionnels">Attributs optionnels</h3>

<p>Aucun.</p>

<h3 id="Type">Type</h3>

<p>Haut niveau, doit apparaître avant tout autre descendant de <code>&lt;xsl:stylesheet&gt;</code> ou de <code>&lt;xsl:transform&gt;</code> dans la feuille de styles qui effectue l'importation.</p>


<h3 id="Définition">Définition</h3>

<p><a href="http://www.w3.org/TR/xslt#import">XSLT 1.0, section 2.6.2</a>.</p>

<h3 id="Support_Gecko">Support Gecko</h3>

<p>Support presque complet, quelques problèmes avec les variables et les paramètres de haut niveau dans Mozilla 1.0.</p>
