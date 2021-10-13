---
title: <small>
slug: Web/HTML/Element/small
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/small
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;small&gt;</code></strong> permet de représenter des commentaires ou des textes à écrire en petits caractères (des termes d'un contrat, des mentions relatives au droit d'auteur, etc.) quelle que soit la présentation.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
   Voici une phrase avant des infos à
   présenter en plus petit.
   &lt;small&gt;© tous droits réservés&lt;/small&gt;
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","120")}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Catégories de contenu</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>Aucune, la balise ouvrante et la balise fermante doivent toutes les deux être présentes.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a> ou tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Tous les rôles sont autorisés.</td>
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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-small-element', '&lt;small&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-small-element', '&lt;small&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'present/graphics.html#edef-SMALL', '&lt;small&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.small")}}</p>

<h2 id="Notes">Notes</h2>

<p>Bien que l'élément <code>&lt;small&gt;</code> et les éléments <code>&lt;b&gt;</code> et <code>&lt;i&gt;</code> soient souvent considérés comme allant à l'encontre du découpage structure/présentation, ils sont tous valides en HTML5. Les auteurs doivent appliquer leur esprit critique afin de déterminer s'il est préférable d'employer <code>&lt;small&gt;</code> ou des règles CSS.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("b")}}</li>
 <li>{{HTMLElement("font")}}</li>
 <li>{{HTMLElement("style")}}</li>
</ul>
