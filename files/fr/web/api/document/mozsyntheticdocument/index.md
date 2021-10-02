---
title: Document.mozSyntheticDocument
slug: Web/API/Document/mozSyntheticDocument
tags:
  - API
  - DOM
  - Document
  - Propriétés
translation_of: Web/API/Document/mozSyntheticDocument
---
<p>{{ ApiRef("DOM") }}</p>

<p>Indique si le document est synthétique ou non ; c'est-à-dire un document représentant une image autonome, une vidéo, un son ou analogue.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval"><em>var isSynthetic</em> = <em>document</em>.mozSyntheticDocument;
</pre>

<p>En retour, <code>isSynthetic</code> est <code>true</code> (<em>vrai</em>) si le document est synthétique ; sinon, <code>false</code> (<em>faux</em>).</p>

<h2 id="Example">Exemple</h2>

<p>Il peut être utile, si vous avez un élément de menu contextuel que vous souhaitez uniquement afficher pour les documents synthétiques (ou, inversement, pour les documents qui ne sont pas synthétiques).</p>

<pre class="eval">var isSynthetic = document.mozSyntheticDocument;

if (isSynthetic) {
  /* insert your menu item here */
}
</pre>

<h2 id="Specification">Spécifications</h2>

<p>Ne fait partie d'aucune spécification.</p>
