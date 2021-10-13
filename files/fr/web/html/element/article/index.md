---
title: '<article> : l''élément de contenu d''un article'
slug: Web/HTML/Element/article
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
  - Web
translation_of: Web/HTML/Element/article
browser-compat: html.elements.article
---
<div>{{HTMLRef}}</div>

<p>L'élément <strong><code>&lt;article&gt;</code></strong> représente une composition autonome dans un document, une page, une application ou un site, destinée à être distribuée ou réutilisée de manière indépendante (par exemple, dans le cadre d'une syndication). Exemples : un message de forum, un article de magazine ou de journal, ou un article de blog, une fiche produit, un commentaire soumis par un utilisateur, un widget ou gadget interactif, ou tout autre élément de contenu indépendant.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}</div>

<p>Un document donné peut contenir plusieurs articles ; par exemple, sur un blog qui affiche le texte de chaque article l'un après l'autre au fur et à mesure que le lecteur fait défiler, chaque message sera contenu dans un élément <code>&lt;article&gt;</code>, avec éventuellement une ou plusieurs <code>&lt;section&gt;</code> à l'intérieur.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#sectioning_content">contenu de section</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">contenu de flux</a>. Un élément <code>&lt;article&gt;</code> ne doit pas être un descendant d'un élément <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="/fr/docs/Web/Accessibility/ARIA/Roles/Article_Role"><code>article</code></a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="https://w3c.github.io/aria/#application">application</a>, <a href="https://w3c.github.io/aria/#document">document</a>, <a href="https://w3c.github.io/aria/#feed">feed</a>, <a href="https://w3c.github.io/aria/#main">main</a>, <a href="https://w3c.github.io/aria/#none">none</a>, <a href="https://w3c.github.io/aria/#presentation">presentation</a>, <a href="https://w3c.github.io/aria/#region">region</a>.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a>.</td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément n'a pas d'autres attributs que les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a>, communs à tous les éléments.</p>

<h2 id="usage_notes">Notes d'utilisation</h2>

<ul>
  <li>Chaque <code>&lt;article&gt;</code> autonome, qui n'est pas imbriqué dans un autre élément <code>&lt;article&gt;</code>, devrait être identifié typiquement, en incluant un élément de titre <code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code>.</li>
  <li>Quand un élément <code>&lt;article&gt;</code> est imbriqué dans un autre, l'élément contenu représente un article relatif à l'élément contenant. Par exemple, les commentaires d'une parution de blog peuvent être un élément <code>&lt;article&gt;</code> inclus dans l'<code>&lt;article&gt;</code> représentant la parution en elle-même.</li>
  <li>Des informations à propos de l'auteur d'un élément <code>&lt;article&gt;</code> peuvent être fournies au travers de l'élément <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a>, mais cela ne s'applique pas aux éléments <code>&lt;article&gt;</code> imbriqués.</li>
  <li>La date et l'heure de publication d'un élément <code>&lt;article&gt;</code> peuvent être donnés en utilisant l'attribut <a href="/fr/docs/Web/HTML/Element/time#attr-datetime"><code>datetime</code></a> d'un élément <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a>. <em>Notez que l'attribut <a href="/fr/docs/Web/HTML/Element/time#attr-pubdate"><code>pubdate</code></a> de <a href="/fr/docs/Web/HTML/Element/time"><code>&lt;time&gt;</code></a> ne fait plus partie de la norme W3C HTML 5.</em></li>
</ul>

<h2 id="example">Exemple</h2>

<pre class="brush: html">&lt;article class="film_review"&gt;
  &lt;header&gt;
    &lt;h2&gt;Jurassic Park&lt;/h2&gt;
  &lt;/header&gt;
  &lt;section class="main_review"&gt;
    &lt;p&gt;Les dinosaures étaient super !&lt;/p&gt;
  &lt;/section&gt;
  &lt;section class="user_reviews"&gt;
    &lt;article class="user_review"&gt;
      &lt;p&gt;Beaucoup trop effrayant pour moi&lt;/p&gt;
      &lt;footer&gt;
        &lt;p&gt;
          Posté le
          &lt;time datetime="2015-05-16 19:00"&gt;16 mai&lt;/time&gt;
          par Lisa.
        &lt;/p&gt;
      &lt;/footer&gt;
    &lt;/article&gt;
    &lt;article class="user_review"&gt;
      &lt;p&gt;Je suis d'accord, les dinosaures sont mes préférés&lt;/p&gt;
      &lt;footer&gt;
        &lt;p&gt;
          Posté le
          &lt;time datetime="2015-05-17 19:00"&gt;17 mai&lt;/time&gt;
          par Gilles Stella.
        &lt;/p&gt;
      &lt;/footer&gt;
    &lt;/article&gt;
  &lt;/section&gt;
  &lt;footer&gt;
    &lt;p&gt;
      Posté le
      &lt;time datetime="2015-05-15 19:00"&gt;15 mai&lt;/time&gt;
      par Staff.
    &lt;/p&gt;
  &lt;/footer&gt;
&lt;/article&gt;</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>Les autres éléments liés aux sections d'un document : <a href="/fr/docs/Web/HTML/Element/body"><code>&lt;body&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/nav"><code>&lt;nav&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/section"><code>&lt;section&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/aside"><code>&lt;aside&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h1&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h2&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h3&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h4&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h5&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/Heading_Elements"><code>&lt;h6&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/hgroup"><code>&lt;hgroup&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/header"><code>&lt;header&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a></li>
  <li><a href="/fr/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines">Sections et structure d'un document HTML5</a></li>
</ul>
