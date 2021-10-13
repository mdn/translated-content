---
title: '<mark> : l''élément de marquage du texte'
slug: Web/HTML/Element/mark
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/mark
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;mark&gt;</code></strong> représente un texte marqué ou surligné à cause de sa pertinence dans le contexte. Il peut par exemple être utilisé afin d'indiquer les correspondances d'un mot-clé recherché au sein d'un document.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Notes_d'utilisation"><strong>Notes d'utilisation</strong></h2>

<ul>
 <li>Au sein d'une citation ({{HTMLElement("q")}}) ou dans un autre bloc ({{HTMLElement("blockquote")}}), le texte surligné marque généralement du texte référencé en dehors de la citation  ou qui est indiqué pour demander une attention particulière bien que l'auteur ne considère pas ce texte comme important.</li>
 <li>Au sein du texte principal, le texte surligné marque du texte d'une pertinence partiulière pour l'utilisateur (par exemple lorsqu'il recherche un terme en particulier).</li>
 <li><code>&lt;mark&gt;</code> ne doit pas être utilisé pour de la coloration syntaxique, c'est l'élément {{HTMLElement("span")}} qui devra être utilisé.</li>
 <li><code>&lt;mark&gt;</code> ne doit pas être confondu avec {{HTMLElement("strong")}}. L'élément {{HTMLElement("strong")}} est utilisé afin d'indiquer des fragments de texte <em>importants</em> alors que <code>&lt;mark&gt;</code> est utilisé afin d'indiquer des fragments de texte <em>pertinents</em>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  L'élément &amp;lt;mark&amp;gt; est utilisé pour
  &lt;mark&gt;mettre en avant&lt;/mark&gt;
  du texte pertinent dans le contexte.
&lt;/p&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Exemple_simple","100%","100%")}}</p>

<h3 id="Identifier_des_passages">Identifier des passages</h3>

<p>Dans cet exemple, on utilise <code>&lt;mark&gt;</code> pour marquer les résultats d'une recherche dans un passage.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;It is a dark time for the Rebellion. Although the Death
Star has been destroyed, &lt;mark class="match"&gt;Imperial&lt;/mark&gt;
troops have driven the Rebel forces from their hidden base and
pursued them across the galaxy.&lt;/p&gt;

&lt;p&gt;Evading the dreaded &lt;mark class="match"&gt;Imperial&lt;/mark&gt;
Starfleet, a group of freedom fighters led by Luke Skywalker
has established a new secret base on the remote ice world of
Hoth.&lt;/p&gt;</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Identifier_des_passages", 650, 130)}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément <code>mark</code>. On peut le rendre annonçable via la propriété CSS {{cssxref("content")}} et grâce aux pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}}.</p>

<pre>mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [Début du marquage]";
}

mark::after {
  content: " [Fin du marquage] ";
}
</pre>

<p>Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été marqué.</p>

<ul>
 <li><a href="https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/"><em>Short note on making your mark (more accessible) | The Paciello Group</em> (en anglais)</a></li>
 <li><a href="http://adrianroselli.com/2017/12/tweaking-text-level-styles.html"><em>Tweaking Text Level Styles | Adrian Roselli</em> (en anglais)</a></li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément qui accepte <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">du contenu phrasé</a>.</td>
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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-mark-element','&lt;mark&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-mark-element', '&lt;mark&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.mark")}}</p>
