---
title: <header>
slug: Web/HTML/Element/header
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/header
---
<div>{{HTMLRef}}</div>

<p>L'<strong>élément HTML <code>&lt;header&gt;</code></strong> représente un groupe de contenu introductif ou de contenu aidant à la navigation. Il peut contenir des éléments de titre, mais aussi d'autres éléments tels qu'un logo, un formulaire de recherche, etc.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}</div>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a> mais sans élément descendant qui soit {{HTMLElement("footer")}} ou <code>&lt;header&gt;</code></td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>. Il est à noter qu'un élément <code>&lt;header&gt;</code> ne doit pas descendre d'un élément {{HTMLElement("address")}}, {{HTMLElement("footer")}} ou d'un autre élément <code>&lt;header&gt;</code>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>{{ARIARole("group")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Notes_dutilisation">Notes d'utilisation</h2>

<p>L'élément <code>&lt;header&gt;</code> n'est pas une section de contenu et n'introduit donc pas de nouvelle section dans ls <a href="/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document">structure</a>. Cela dit, un élément <code>&lt;header&gt;</code> est généralement destiné à contenir l'en-tête de la section environnante (un élément <code>h1</code>-<code>h6</code>), mais ce <strong>n'est pas</strong> obligatoire.</p>

<h3 id="Usage_historique">Usage historique</h3>

<p>Bien que l'élément <code>&lt;header&gt;</code> ne fasse pas partie de la spécification HTML avant {{glossary("HTML5")}} , il existait de façon implicite depuis les premières versions. <a href="http://info.cern.ch/">En consultant le premier site web</a>, il était originellement utilisé comme l'élément <code>&lt;head&gt;</code>. À un moment donné, il a été décidé d'utiliser un nom différent. Cela a permis à <code>&lt;header&gt;</code> d'être libre de remplir un rôle différent par la suite.</p>

<h2 id="Attributs">Attributs</h2>

<p>Comme tous les éléments HTML, cet élément possède les <a href="/fr/docs/Web/HTML/Attributs_universels">attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="En-tête_de_page">En-tête de page</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;header&gt;
  &lt;h1&gt;Titre principal&lt;/h1&gt;
  &lt;img src="mdn-logo-sm.png" alt="MDN logo"&gt;
&lt;/header&gt;</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("En-tête_de_page","100%","200")}}</p>

<h3 id="En-tête_pour_un_article">En-tête pour un article</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;article&gt;
  &lt;header&gt;
    &lt;h2&gt;La planète Terre&lt;/h2&gt;
    &lt;p&gt;Publié le &lt;time datetime="2017-10-04"&gt;4 octobre 2017&lt;/time&gt; par Jeanne Smith&lt;/p&gt;
  &lt;/header&gt;
  &lt;p&gt;Nous vivons sur une planète bleue et verte&lt;/p&gt;
  &lt;p&gt;&lt;a href="https://example.com/the-planet-earth/"&gt;Poursuivre la lecture…&lt;/a&gt;&lt;/p&gt;
&lt;/article&gt;
</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("En-tête_pour_un_article","100%","200")}}</p>

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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-header-element', '&lt;header&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'sections.html#the-header-element', '&lt;header&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.header")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Autres éléments liés à la section d'un document : {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}</li>
 <li><a href="/fr/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document">Plan et sections d'un document HTML5</a></li>
</ul>
