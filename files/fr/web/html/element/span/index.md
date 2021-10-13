---
title: <span>
slug: Web/HTML/Element/span
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/span
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;span&gt;</code></strong> est un conteneur générique en ligne (<em>inline</em>) pour les contenus phrasés. Il ne représente rien de particulier. Il peut être utilisé pour grouper des éléments afin de les mettre en forme (grâce aux attributs {{htmlattrxref("class")}} ou {{htmlattrxref("id")}} et aux règles <a href="/fr/docs/Web/CSS">CSS</a>) ou parce qu'ils partagent certaines valeurs d'attribut comme {{htmlattrxref("lang")}}. Il doit uniquement être utilisé lorsqu'aucun autre élément sémantique n'est approprié. <code>&lt;span&gt;</code> est très proche de l'élément {{HTMLElement("div")}}, mais l'élément <code>&lt;div&gt;</code> est <a href="/fr/docs/Web/HTML/Éléments_en_bloc">un élément de bloc</a>, alors que <code>&lt;span&gt;</code> est <a href="/fr/docs/Web/HTML/Éléments_en_ligne">un élément en ligne</a>.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;p&gt;&lt;span&gt;Un peu de texte&lt;/span&gt;&lt;/p&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">p span {
  background: green;
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","100")}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Contenu autorisé</dfn></th>
   <td><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Omission de balises</dfn></th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row"><dfn>Parents autorisés</dfn></th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, ou tout élément acceptant du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Any</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLSpanElement")}} (avant HTML 5, l'interface était {{domxref("HTMLElement")}})</td>
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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-span-element', '&lt;span&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-span-element', '&lt;span&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>L'interface DOM est désormais {{domxref("HTMLSpanElement")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/global.html#edef-SPAN', '&lt;span&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.span")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("div")}}</li>
</ul>
