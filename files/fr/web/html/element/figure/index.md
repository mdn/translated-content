---
title: '<figure> : l''élément de figure avec légende facultative'
slug: Web/HTML/Element/figure
tags:
  - Element
  - HTML
  - HTML grouping content
  - Information
  - Presentation
  - Reference
  - figure
translation_of: Web/HTML/Element/figure
browser-compat: html.elements.figure
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;figure&gt;</code></strong> représente un contenu autonome, éventuellement accompagné d'une légende facultative, qui est spécifiée à l'aide de l'élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a>. La figure, sa légende et son contenu sont référencés comme une seule unité.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/figure.html","tabbed-shorter")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots">racine de sectionnement</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Un élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a> suivi d'un <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a> ou du contenu de flux suivi d'un élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a> ou du contenu de flux.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise ouvrante et la balise fermante sont toutes les deux obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Figure_Role"><code>figure</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Sans descendant <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a> descendant : <a href="https://www.w3.org/TR/html-aria/#dfn-any-role">n'importe quel rôle</a>, sinon aucun rôle autorisé.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément prend uniquement en charge <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<h2 id="usage_notes">Notes d'utilisation</h2>

<ul>
  <li>Généralement, un élément <code>&lt;figure&gt;</code> est utilisé pour une image, une illustration, un diagramme, un fragment de code ou autre qui est référencé depuis le flux principal du document. Toutefois, cet élément peut être déplacé vers une autre partie du document ou en annexe sans que cela ait un impact sur le flux principal.</li>
  <li><code>&lt;figure&gt;</code> est <a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#sectioning_roots">une racine de sectionnement</a>, son contenu est donc exclu du plan général du document.</li>
  <li>Une légende peut être associée avec l'élément <code>&lt;figure&gt;</code> en insérant un élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a> à l'intérieur (en premier ou dernier élément enfant). C'est le premier élément <code>&lt;figcaption&gt;</code> qui sera trouvé dans la figure qui sera affiché comme légende.</li>
</ul>

<h2 id="examples">Exemples</h2>

<h3 id="images">Images</h3>

<pre class="brush: html">&lt;!-- Une simple image --&gt;
&lt;figure&gt;
  &lt;img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="Le logo de MDN."&gt;
&lt;/figure&gt;

&lt;!-- Une image avec une légende --&gt;
&lt;figure&gt;
  &lt;img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="Le logo de MDN."&gt;
  &lt;figcaption&gt;Logo MDN&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<div>{{EmbedLiveSample("images", "100%", 400)}}</div>

<h3 id="code_snippets">Extrait de code</h3>

<pre class="brush: html">&lt;figure&gt;
  &lt;figcaption&gt;Obtenir les détails du navigateur&lt;/figcaption&gt;
  &lt;pre&gt;
    function NavigatorExample(){
      let txt;
      txt = "Nom de code: " + navigator.appCodeName;
      txt += "Nom du navigateur : " + navigator.appName;
      txt += "Version : " + navigator.appVersion ;
      txt += "Cookies activés : " + navigator.cookieEnabled;
      txt += "Plate-forme: " + navigator.platform;
      txt += "En-tête d'agent utilisateur : " + navigator.userAgent;
      console.log("NavigatorExample", txt);
    }
  &lt;/pre&gt;
&lt;/figure&gt;</pre>

<div>{{EmbedLiveSample("code_snippets", "100%", 250)}}</div>

<h3 id="quotations">Citation</h3>

<pre class="brush: html">&lt;figure&gt;
  &lt;figcaption&gt;
    &lt;cite&gt;Edsger Dijkstra : &lt;/cite&gt;
  &lt;/figcaption&gt;
  &lt;p&gt;« Si le débogage correspond au retrait de bogues,
    alors la programmation correspond à l'ajout de bogues. »
  &lt;/p&gt;
&lt;/figure&gt;</pre>

<div>{{EmbedLiveSample("quotations","", 150)}}</div>

<h3 id="poems">Poème</h3>

<pre class="brush: html">&lt;figure&gt;
  &lt;p style="white-space:pre"&gt;
    Bid me discourse, I will enchant thine ear,
      Or like a fairy trip upon the green,
    Or, like a nymph, with long dishevell'd hair,
      Dance on the sands, and yet no footing seen:
    Love is a spirit all compact of fire,
      Not gross to sink, but light, and will aspire.
  &lt;/p&gt;
  &lt;figcaption&gt;&lt;cite&gt;Venus and Adonis&lt;/cite&gt;.
    By: William Shakespeare&lt;/figcaption&gt;
&lt;/figure&gt;</pre>

<div>{{EmbedLiveSample("poems", "100%", 260)}}</div>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/figcaption"><code>&lt;figcaption&gt;</code></a></li>
</ul>
