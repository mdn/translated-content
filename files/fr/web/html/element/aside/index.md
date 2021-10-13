---
title: '<aside> : l''élément aparté'
slug: Web/HTML/Element/aside
tags:
  - Element
  - HTML
  - HTML sections
  - HTML5
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Sectioning content
  - Reference
  - Web
translation_of: Web/HTML/Element/aside
browser-compat: html.elements.aside
---
<div>{{HTMLRef}}</div>

<p>L'élément <strong><code>&lt;aside&gt;</code></strong> (en français, « aparté ») représente une partie d'un document dont le contenu n'a qu'un rapport indirect avec le contenu principal du document. Les apartés sont fréquemment présents sous la forme d'encadrés ou de boîtes de légende.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#sectioning_content">contenu de section</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a>. Notez qu'un élément <code>&lt;aside&gt;</code> ne doit pas être un descendant d'un élément <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Complementary_role">complementary</a></code></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="https://w3c.github.io/aria/#feed">feed</a>, <a href="https://w3c.github.io/aria/#none">none</a>, <a href="https://w3c.github.io/aria/#note">note</a>, <a href="https://w3c.github.io/aria/#presentation">presentation</a>, <a href="https://w3c.github.io/aria/#region">region</a>, <a href="https://w3c.github.io/aria/#search">search</a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément ne comprend que les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a>.</p>

<h2 id="usage_notes"><strong>Notes d'utilisation</strong></h2>

<p>On ne doit pas utiliser l'élément <code>&lt;aside&gt;</code> pour marquer du texte entre parenthèses, ce type de texte est considéré comme faisant partie du flux principal.</p>

<h2 id="example">Exemple</h2>

<p>Dans cet exemple, on utilise <code>&lt;aside&gt;</code> afin de baliser un paragraphe d'un article. Ici, le paragraphe n'est pas directement lié au contenu principal de l'article et c'est pour cela qu'on utilise cet élément.</p>

<pre class="brush: html">&lt;article&gt;
  &lt;p&gt;
    Le film Disney &lt;cite&gt;La petite Sirène&lt;/cite&gt; est
    sorti en salles en 1989.
  &lt;/p&gt;
  &lt;aside&gt;
    &lt;p&gt;
      Le film a gagné 87 millions de dollars pendant sa sortie initiale.
    &lt;/p&gt;
  &lt;/aside&gt;
  &lt;p&gt;
    Plus d'informations sur le film…
  &lt;/p&gt;
&lt;/article&gt;
</pre>

<h3 id="result">Résultat</h3>

<p>{{EmbedLiveSample("example", "100%", 150)}}</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>Les autres éléments en rapport avec les sections : <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/article"><code>&lt;article&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h1&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h2&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h3&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h4&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h5&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h6&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/hgroup"><code>&lt;hgroup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/header"><code>&lt;header&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a></li>
  <li><a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">Structures et sections d'un document HTML5</a></li>
  <li><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Complementary_role">ARIA : le rôle <code>complementary</code></a></li>
</ul>
