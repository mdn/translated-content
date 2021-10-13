---
title: <i>
slug: Web/HTML/Element/i
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/i
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;i&gt;</code></strong> représente un morceau de texte qui se différencie du texte principal. Cela peut par exemple être le cas pour des termes techniques, des phrases dans une langue étrangère ou encore l'expression des pensées d'un personnage. Le contenu de cet élément est généralement affiché en italique.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément possède uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  La phrase latine
  &lt;i class="latin"&gt;
    Veni, vidi, vici
  &lt;/i&gt;
  est souvent employée en littérature.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","100%","200")}}</p>

<h2 id="Notes">Notes</h2>

<p>Dans certaines versions antérieures de HTML, la balise <code>&lt;i&gt;</code> ne jouait qu'un rôle de mise en forme, utilisé pour afficher le texte en italique (de la même façon que la balise &lt;b&gt; était utilisée pour afficher le texte en gras). Désormais, ces balises ont un rôle strictement sémantique et l'élément &lt;i&gt; représente une portion de texte dont la sémantique est différente, la représentation choisie pour cela par le navigateur étant la plupart du temps une mise en italique. Cela signifie que le navigateur affiche généralement le contenu en italique comme c'était le cas auparavant mais que ce traitement de mise en forme n'est plus du tout obligatoire.</p>

<p>Cet élément ne doit être utilisé seulement si aucun autre ne permet d'exprimer la sémantique du contenu de façon plus appropriée. Ainsi :</p>

<ul>
 <li>{{HTMLElement("em")}} doit être utilisé pour insister, mettre l'accent sur le contenu</li>
 <li>{{HTMLElement("strong")}} doit être utilisé pour exprimer l'importance du contenu</li>
 <li>{{HTMLElement("mark")}} doit être utilisé pour exprimer la pertinence du contenu</li>
 <li>{{HTMLElement("cite")}} doit être utilisé pour marquer le nom d'une œuvre telle qu'un livre, une pièce ou une chanson.</li>
 <li>{{HTMLElement("dfn")}} doit être utilisé pour souligner l'occurence d'un mot utilisée pour sa définition</li>
</ul>

<p>C'est une bonne pratique que d'utiliser l'attribut <code><strong>class</strong></code> pour identifier les raisons qui poussent à utiliser cet élément. Cela permet par exemple de maintenir la mise en forme du document plus efficacement grâce aux feuilles de style CSS.</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Tous les rôles sont autorisés.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td><dfn>Interface DOM </dfn> {{domxref("HTMLElement")}}. </td>
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
   <td>{{SpecName('HTML WHATWG', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-i-element', '&lt;i&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'present/graphics.html#h-15.2.1', '&lt;b&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.i")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("em")}} qui permet d'indiquer une emphase et qui ne doit pas être confondu avec l'élément <code>&lt;i&gt;</code></li>
</ul>
