---
title: "<abbr> : l'élément d'abréviation"
slug: Web/HTML/Element/abbr
tags:
  - Acronym
  - Definitions
  - Element
  - HTML
  - HTML text-level semantics
  - HTML:Flow content
  - HTML:Palpable Content
  - HTML:Phrasing content
  - Reference
  - Web
  - abbr
  - abbreviation
  - semantics
translation_of: Web/HTML/Element/abbr
browser-compat: html.elements.abbr
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;abbr&gt;</code></strong> (<strong>abréviation</strong> en français) représente une abréviation ou un acronyme ; l'attribut facultatif <a href="/fr/docs/Web/HTML/Global_attributes#attr-title"><code>title</code></a> peut fournir une explication ou une description de l'abréviation. S'il est présent, <code>title</code> doit contenir cette description complète et rien d'autre.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9">contenu phrasé</a>, <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Contenu autorisé</dfn></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9">Contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Omission de balises</dfn></th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Parents autorisés</dfn></th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_phras.c3.a9">contenu phrasé</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a></td>
    </tr>
  </tbody>
 </table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément n'a pas d'autres attributs que les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a>.</p>

<p>On notera que l'attribut <strong><code>title</code></strong> possède ici une sémantique spécifique et il représente la description complète de l'abréviation. Souvent, mais pas nécessairement, il s'affiche comme une info-bulle au survol de la souris.</p>

<p>Chaque élément <code>&lt;abbr&gt;</code> est indépendant, rattacher un titre à l'un ne l'associe pas aux abréviations identiques qui suivent.</p>

<h2 id="usage_notes">Notes d'utilisation</h2>

<h3 id="typical_use_cases">Cas d'usage généraux</h3>

<p>Il n'est pas obligatoire d'utiliser <code>&lt;abbr&gt;</code> pour toutes les abréviations d'un document mais voici quelques cas où cet élément s'avère pertinent :</p>

<ul>
  <li>Lorsqu'une abréviation est utilisée et qu'on souhaite fournir une définition ou une explication en dehors du contenu du document, on utilisera <code>&lt;abbr&gt;</code> avec un attribut <a href="/fr/docs/Web/HTML/Global_attributes#attr-title"><code>title</code></a> adéquat.</li>
  <li>Lorsqu'une abréviation fait partie d'un jargon ou d'un vocabulaire qui risque d'être inconnu du lecteur, un élément <code>&lt;abbr&gt;</code> avec un attribut <code>title</code> explicatif pourra être utilisé.</li>
  <li>Lorsqu'on souhaite bénéficier de la sémantique liée à l'abréviation (par exemple pour les manipuler en script ou les mettre en forme avec des feuilles de style), on pourra utiliser <code>&lt;abbr&gt;</code> pour identifier ces contenus.</li>
  <li>Lorsqu'on souhaite définir des termes qui sont des abréviations, on pourra utiliser une combinaison de <code>&lt;abbr&gt;</code> et de <a href="/fr/docs/Web/HTML/Element/dfn"><code>&lt;dfn&gt;</code></a>. Voir ci-après pour un exemple.</li>
</ul>

<h3 id="grammar_considerations">Grammaire</h3>

<p>Lorsqu'il est présent, le nombre (grammatical) du texte de l'attribut <code><strong>title</strong></code> devrait correspondre à celui du contenu de l'élément <code>abbr</code>. C'est également le cas dans les langues avec plus de deux genres grammaticaux (par exemple, l'arabe, en plus des catégories pour le singulier et le pluriel, possède également une catégorie double).</p>

<h2 id="default_styling">Mise en forme par défaut</h2>

<p>Le but de cet élément est purement explicatif. Tous les navigateurs l'affichent en ligne (<code><a href="/fr/docs/Web/CSS/display">display</a>: inline</code>) par défaut mais le reste de la mise en forme par défaut peut varier d'un navigateur à l'autre :</p>

<ul>
  <li>Certains navigateurs tels qu'Internet Explore lui appliquent la même mise en forme qu'à un élément <a href="/fr/docs/Web/HTML/Element/span"><code>&lt;span&gt;</code></a>.</li>
  <li>Opera, Firefox et d'autres navigateurs souligne l'abréviation avec une ligne de points.</li>
  <li>D'autres navigateurs ne soulignent pas le texte mais l'écrivent en petites majuscules. Pour éviter ce comportement, on pourra utiliser la règle CSS <code><a href="/fr/docs/Web/CSS/font-variant">font-variant</a>: none</code>.</li>
</ul>

<h2 id="examples">Exemples</h2>

<h3 id="marking_up_an_abbreviation_semantically">Baliser une abréviation pour marquer la sémantique</h3>

<p>On peut baliser une abréviation sans fournir de description ou de définition, il suffit d'utiliser <code>&lt;abbr&gt;</code> sans attribut.</p>

<h4 id="html">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Nous allons voir le &lt;abbr&gt;HTML&lt;/abbr&gt; qui sert à construire
  des pages web.
&lt;/p&gt;</pre>

<h4 id="result">Résultat</h4>

<p>{{EmbedLiveSample("marking_up_an_abbreviation_semantically", "100%", 80)}}</p>

<h3 id="styling_abbreviations">Mettre en forme des abréviations</h3>

<p>CSS peut être utilisé pour appliquer une mise en forme particulière sur les abréviations.</p>

<h4 id="html_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;Avec &lt;abbr&gt;CSS&lt;/abbr&gt;, on peut mettre en forme les éléments.&lt;/p&gt;</pre>

<h4 id="css">CSS</h4>

<pre class="brush: css">abbr {
  font-variant: all-small-caps;
}</pre>

<h4 id="result_2">Résultat</h4>

<p>{{EmbedLiveSample("styling_abbreviations", "100%", 80)}}</p>

<h3 id="providing_an_expansion">Fournir une description</h3>

<p>On peut ajouter un attribut <a href="/fr/docs/Web/HTML/Global_attributes#attr-title"><code>title</code></a> afin de fournir une description de l'abréviation ou de l'acronyme.</p>

<h4 id="html_3">HTML</h4>

<pre class="brush: html">&lt;p&gt;Et là je lui ai répondu &lt;abbr title="Laugh Out Loud"&gt;LOL&lt;/abbr&gt;.&lt;/p&gt;</pre>

<h4 id="result_3">Résultat</h4>

<p>{{EmbedLiveSample("providing_an_expansion", "100%", 80)}}</p>

<h3 id="defining_an_abbreviation">Définir une abréviation</h3>

<p>Il est possible d'utiliser l'élément <code>&lt;abbr&gt;</code> avec <a href="/fr/docs/Web/HTML/Element/dfn"><code>&lt;dfn&gt;</code></a> afin de formellement définir une abréviation.</p>

<h4 id="html_4">HTML</h4>

<pre class="brush: html">&lt;p&gt;&lt;dfn id="html"&gt;&lt;abbr title="HyperText Markup Language"&gt;HTML&lt;/abbr&gt;
&lt;/dfn&gt; est un langage de balise qui permet de créer la structure
et d'organiser la sémantique d'une page web.&lt;/p&gt;

&lt;p&gt;Une &lt;dfn id="spec"&gt;spécification&lt;/dfn&gt;
(&lt;abbr title="spécification"&gt;spec&lt;/abbr&gt;) est un document qui décrit,
de façon détaillée comme une technologie ou une API fonctionne et comment
l'utiliser.&lt;/p&gt;</pre>

<h4 id="result_4">Résultat</h4>

<p>{{EmbedLiveSample("defining_an_abbreviation", "100%", 160)}}</p>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>C'est une bonne pratique que d'épeler l'acronyme ou l'abréviation lorsqu'elle est utilisée pour la première fois. Cela permet au lecteur de mieux comprendre le terme, notamment si celui-ci est technique ou appartient à un jargon spécifique.</p>

<h4 id="example">Exemple</h4>

<pre class="brush: html">&lt;p&gt;JavaScript Object Notation (&lt;abbr&gt;JSON&lt;/abbr&gt;) est un format léger
  d'échange de données.&lt;/p&gt;
</pre>

<p>Cela peut servir aux personnes qui découvrent ces concepts pour la première fois ou pour les personnes souffrant de troubles cognitifs.</p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations">Utiliser l'élément <code>&lt;abbr&gt;</code></a></li>
</ul>
