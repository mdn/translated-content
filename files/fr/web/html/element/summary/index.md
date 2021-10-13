---
title: '<summary> : l''élément de révélation d''un résumé'
slug: Web/HTML/Element/summary
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/summary
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;summary&gt;</code></strong> représente une boîte permettant de révéler le contenu d'un résumé ou d'une légende pour le contenu d'un élément {{HTMLElement("details")}}. En cliquant sur l'élément <code>&lt;summary&gt;</code>, on passe de l'état affiché à l'état masqué (et vice versa) de l'élément <code>&lt;details&gt;</code> parent.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/summary.html","tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Notes_dutilisation">Notes d'utilisation</h2>

<p>Un élément <code>&lt;summary&gt;</code> peut contenir des éléments de titre, du texte simple ou tout contenu HTML pouvant être placé au sein d'un paragraphe.</p>

<p>Un élément <code>&lt;summary&gt;</code> peut uniquement être utilisé comme le premier élément fils d'un élément <code>&lt;details&gt;</code>. Lorsque l'utilisateur clique sur le résumé, l'élément <code>&lt;details&gt;</code> parent change d'état (affiché ou masqué) et un évènement {{event("toggle")}} est envoyé à l'élément <code>&lt;details&gt;</code> (ce qui permet de détecter un changement d'état via un script).</p>

<h3 id="Libellé_par_défaut">Libellé par défaut</h3>

<p>Si l'élément <code>&lt;summary&gt;</code> est absent au sein d'un élément <code>&lt;details&gt;</code>, c'est le titre contenu dans l'élément {{HTMLElement("details")}} qui sera utilisé.</p>

<h3 id="Mise_en_forme_par_défaut">Mise en forme par défaut</h3>

<p>La mise en forme par défaut pour <code>&lt;summary&gt;</code> est <code>display: list-item</code>, tel qu'indiqué dans <a href="https://html.spec.whatwg.org/multipage/rendering.html#the-details-and-summary-elements">le standard HTML</a>. Cela permet de modifier ou de retirer l'icône affiché pour le contrôle d'affichage/masquage. Par défaut, cette icône est généralement un triangle.</p>

<p>Si la mise en forme est surchargée avec <code>display: block</code>, l'icône triangulaire qui révèle le contenu sera masquée.</p>

<p>Voir la section ci-après sur la compatibilité des navigateurs à ce sujet car certains navigateurs ne prennent pas en charge tout ces aspects.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;details open&gt;
  &lt;summary&gt;Détails produit&lt;/summary&gt;
  &lt;p&gt;Ce produit a été fabriqué par
  ACME et respecte les pandas.&lt;/p&gt;
&lt;/details&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple_simple","100%","160")}}</p>

<h3 id="Utilisation_de_titres">Utilisation de titres</h3>

<p>Il est possible d'utiliser des titres au sein d'un résumé.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;details open&gt;
  &lt;summary&gt;&lt;h4&gt;Détails produit&lt;/h4&gt;&lt;/summary&gt;
  &lt;ol&gt;
    &lt;li&gt;Date de fabrication : 01 janvier 2018&lt;/li&gt;
    &lt;li&gt;Numéro de lot : LMA2542501&lt;/li&gt;
    &lt;li&gt;Date limite de consommation : 31 août 2018&lt;/li&gt;
  &lt;/ol&gt;
&lt;/details&gt;</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Utilisation_de_titres", 650, 120)}}</p>

<h3 id="Utiliser_avec_divers_éléments_HTML">Utiliser avec divers éléments HTML</h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;details open&gt;
  &lt;summary&gt;&lt;strong&gt;Détails&lt;/strong&gt;&lt;/summary&gt;
  &lt;ol&gt;
    &lt;li&gt;Date de fabrication : 01 janvier 2018&lt;/li&gt;
    &lt;li&gt;Numéro de lot : LMA2542501&lt;/li&gt;
    &lt;li&gt;Date limite de consommation : 31 août 2018&lt;/li&gt;
  &lt;/ol&gt;
&lt;/details&gt;</pre>

<h4 id="Résultat_3">Résultat</h4>

<p>{{EmbedLiveSample("Utiliser_avec_divers_éléments_HTML", 650, 120)}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a> ou un élément décrivant du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_titre">contenu de titre</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>Aucune, la balise ouvrante et la balise fermante sont obligatoires.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Un élément {{HTMLElement("details")}}.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>{{ARIARole("button")}}</td>
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
   <td>{{SpecName('HTML WHATWG', 'interactive-elements.html#the-summary-element', '&lt;summary&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'interactive-elements.html#the-summary-element', '&lt;summary&gt;')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.summary")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("details")}}</li>
</ul>
