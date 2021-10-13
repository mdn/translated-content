---
title: <hgroup>
slug: Web/HTML/Element/hgroup
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/hgroup
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;hgroup&gt;</code></strong> représente un titre de plusieurs niveaux pour une section d'un document. Il regroupe un ensemble d'éléments <code><a href="/fr/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;–&lt;h6&gt;</a></code>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/hgroup.html", "tabbed-standard")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Notes_d'utilisation">Notes d'utilisation</h2>

<div class="note">
<p><strong>Note :</strong> l'élement <code>&lt;hgroup&gt;</code> a été retiré de la spécification HTML5 (W3C) mais est toujours inscrit dans la version WHATWG de HTML. Il est partiellement implémenté dans la plupart des navigateurs et à ce titre, il est peu probable qu'il disparaisse.<br>
 Cependant, le but d'un élément <code>&lt;hgroup&gt;</code> est d'affecter la façon dont les titres sont affichés <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm">par l'algorithme de mise en plan défini dans la spécification HTML</a>. <strong>Cet algorithme n'est pas implémenté dans la plupart des navigateurs </strong>et la sémantique de l'élément <code>&lt;hgroup&gt;</code> est donc uniquement théorique.<br>
 La spécification HTML5 (W3C) fournit quelques indications pour baliser <a href="https://www.w3.org/TR/html52/common-idioms-without-dedicated-elements.html#common-idioms-without-dedicated-elements">les sous-titres et les titres alternatifs</a> sans requérir à <code>&lt;hgroup&gt;</code>.</p>
</div>

<p>L'élément <code>&lt;hgroup&gt;</code> permet de regrouper le titre principal d'une section avec son (ou ses) sous-titre(s) afin d'obtenir un titre sur plusieurs niveaux sémantiques.</p>

<p>Autrement dit, l'élément <code>&lt;hgroup&gt;</code> évite que l'utilisation d'éléments <code><a href="/fr/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;–&lt;h6&gt;</a></code> secondaires crée différentes sections dans le plan (ce qui est le résultat obtenu normalement lorsque <code><a href="/fr/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;–&lt;h6&gt;</a></code> sont utilisés hors d'un <code>&lt;hgroup&gt;</code>).</p>

<p>Dans le plan d'un document, obtenu par <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm">l'algorithme défini dans la spécification HTML</a>, l'élément <code>&lt;hgroup&gt;</code> forme une seule entité logique contenant l'ensemble des éléments-fils <code><a href="/fr/docs/Web/HTML/Element/Heading_Elements">&lt;h1&gt;–&lt;h6&gt;</a></code> du <code>&lt;hgroup&gt;</code> et qui fait donc apparaître une seule section pour ce groupe de titres dans le plan.</p>

<p>Pour afficher le contenu d'un tel titre, l'agent utilisateur doit choisir comment représenter l'élément <code>&lt;hgroup&gt;</code> afin d'exprimer notamment les différents niveaux. Voici quelques exemples des approches qui seraient possibles :</p>

<ul>
 <li>Un élément <code>&lt;hgroup&gt;</code> peut afficher un titre où les deux points (:) sont utilisés comme séparateur entre le titre principal et le premier titre secondaire</li>
 <li>Un élément <code>&lt;hgroup&gt;</code> peut afficher le titre principal, suivi du/des titre(s) secondaires entre parenthèses</li>
</ul>

<p>Prenons ce document HTML par exemple :</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;title&gt;HTML Standard&lt;/title&gt;
&lt;body&gt;
  &lt;hgroup id="document-title"&gt;
    &lt;h1&gt;HTML&lt;/h1&gt;
    &lt;h2&gt;Living Standard — Last Updated 12 August 2016&lt;/h2&gt;
  &lt;/hgroup&gt;
  &lt;p&gt;Some intro to the document.&lt;/p&gt;
  &lt;h2&gt;Table of contents&lt;/h2&gt;
  &lt;ol id=toc&gt;...&lt;/ol&gt;
  &lt;h2&gt;First section&lt;/h2&gt;
  &lt;p&gt;Some intro to the first section.&lt;/p&gt;
&lt;/body&gt;</pre>

<p>Le rendu de ce document pourrait être :</p>

<p><img alt="" src="outline-colon.png"></p>

<p>Où on voit que le titre principal est suivi de deux points puis d'un espace avant le titre secondaire, <em>Living Standard — Last Updated 12 August 2016</em>.</p>

<p>On pourrait également avoir cet affichage :</p>

<p><img alt="Plan rendu en incluant un élément &lt;hgroup&gt;, avec des parenthèses autour du titre secondaire" src="outline-paren.png"></p>

<p>Ici, le titre secondaire est placé entre parenthèses après le titre principal.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;hgroup id="document-title"&gt;
  &lt;h1&gt;HTML&lt;/h1&gt;
  &lt;h2&gt;Living Standard — dernière mise à jour le 12 août 2016&lt;/h2&gt;
&lt;/hgroup&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>
<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_de_titre">contenu de titre</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td>Un ou plusieurs éléments {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balise</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>{{ARIARole("tab")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>
<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-hgroup-element', '&lt;hgroup&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.hgroup")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les autres éléments HTML relatifs aux sections du document : {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}</li>
 <li><a href="/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document">Les sections et le plan d'un document HTML5</a></li>
</ul>
