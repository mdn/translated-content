---
title: '<address> : l''élément d''adresse de contact'
slug: Web/HTML/Element/address
tags:
  - Address
  - Author
  - Contact
  - Contact Information
  - Element
  - Email
  - Email Address
  - HTML
  - HTML sections
  - HTML:Flow content
  - HTML:Palpable Content
  - Reference
  - Web
translation_of: Web/HTML/Element/address
browser-compat: html.elements.address
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;address&gt;</code></strong> indique des informations de contact pour une personne, un groupe de personnes ou une organisation.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}</div>

<p>L'information de contact fournie via cet élément peut prendre n'importe quelle forme pertinente : ce peut être une adresse physique, une URL, une adresse électronique, un numéro de téléphone, des coordonnées géographiques, etc. Ces informations devraient contenir le nom de la personne, du groupe de personne ou de l'organisation à laquelle le contact fait référence.</p>

<p>Cet élément peut être employé dans un élément <a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a> pour indiquer la personne qui écrit l'article ou être utilisé dans l'en-tête de la page pour fournir une adresse d'entreprise.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, mais sans élément <code>&lt;address&gt;</code> inclus, sans contenu de titre (<a href="/fr/docs/Web/HTML/Element/hgroup"><code>&lt;hgroup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h1&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h2&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h3&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h4&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h5&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h6&gt;</code></a>), sans contenu de section (<a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a>), et sans <a href="/fr/docs/Web/HTML/Element/header"><code>&lt;header&gt;</code></a> ou élément <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte un <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">contenu de flux</a> mais pas d'éléments <code>&lt;address&gt;</code>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Aucun rôle correspondant</a></td>
     </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>. Avant Gecko 2.0 (Firefox 4), Gecko implémentait cet élément en utilisant l'interface <a href="/fr/docs/Web/API/HTMLSpanElement"><code>HTMLSpanElement</code></a>.</td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément n'a pas d'autres attributs que les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a>, communs à tous les éléments.</p>

<h2 id="usage_notes">Notes d'utilisation</h2>

<ul>
  <li>Pour représenter une adresse arbitraire, qui n'est pas relative à l'information de contact, on utilisera l'élément <a href="/fr/docs/Web/HTML/Element/p"><code>&lt;p&gt;</code></a> plutôt que l'élément <code>&lt;address&gt;</code>.</li>
  <li>Cet élément ne doit pas contenir plus d'informations que l'information de contact, par exemple une date de publication (qui appartiendrait à l'élément <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a>).</li>
  <li>Typiquement un élément <code>&lt;address&gt;</code> peut être placé dans l'élément <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a> de la section courante, s'il y en a une.</li>
</ul>

<h2 id="example">Exemple</h2>

<pre class="brush: html">&lt;address&gt;
  Vous pouvez contacter l'auteur à l'adresse
  &lt;a href="http://www.undomaine.com/contact"&gt;www.undomaine.com&lt;/a&gt;.&lt;br&gt;
  Si vous relevez quelques bogues que ce soient, merci de contacter
  &lt;a href="mailto:webmaster@somedomain.com"&gt;le webmaster&lt;/a&gt;.&lt;br&gt;
  Vous pouvez aussi venir nous voir :&lt;br&gt;
  Mozilla Foundation&lt;br&gt;
  1981 Landings Drive&lt;br&gt;
  Building K&lt;br&gt;
  Mountain View, CA 94043-0801&lt;br&gt;
  USA
&lt;/address&gt;
</pre>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample("example", "100%", 190)}}</p>

<p>Bien que le rendu par défaut du texte de l'élément <code>&lt;address&gt;</code> utilise le même style par défaut que les éléments <a href="/fr/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/em"><code>&lt;em&gt;</code></a>, il est plus approprié d'utiliser cet élément lorsque l'on traite d'informations de contact, étant donné qu'il apporte des informations sémantiques supplémentaires.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>Les autres éléments liés aux sections d'un document : <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h1&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h2&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h3&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h4&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h5&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h6&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/hgroup"><code>&lt;hgroup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/header"><code>&lt;header&gt;</code></a> ;</li>
  <li><a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">Sections et titres d'un document HTML5</a></li>
</ul>
