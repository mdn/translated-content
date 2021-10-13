---
title: '<q> : l''élément de citation en incise'
slug: Web/HTML/Element/q
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/q
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML<strong> <code>&lt;q&gt;</code></strong> indique que le texte qu'il contient est une citation en incise. La plupart des navigateurs modernes entoure le texte de cet élément avec des marques de citation. Cet élément est destiné aux citations courtes qui ne nécessitent pas de sauts de paragraphe. Pour les plus grandes citations, on utilisera l'élément {{HTMLElement("blockquote")}}.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/q.html", "tabbed-shorter")}}</div>

<div class="note">
<p><strong>Note :</strong> La plupart des navigateurs récents ajoutent automatiquement des guillemets autours du contenu d'un élément <code>&lt;q&gt;</code> mais il peut être nécessaire d'ajouter une règle CSS pour les ajouter dans les anciens navigateurs.</p>
</div>

<h2 id="Attributs">Attributs</h2>

<p>Comme tous les autres éléments HTML, cet élément inclut <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("cite")}}</dt>
 <dd>La valeur de cet attribut est une URL désignant la source du message ou de l'information citée. Cet attribut est prévu pour fournir des renseignements concernant le contexte ou la référence de cette citation.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;Chaque fois que Kenny est tué, Stan dira
   &lt;q cite="http://fr.wikipedia.org/wiki/Kenny_McCormick#Le_dialogue_rituel"&gt;
     Oh mon Dieu, ils ont tué Kenny !
   &lt;/q&gt;.
&lt;/p&gt;
</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples","300","120")}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>, <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible">contenu tangible</a>.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">Contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Tout élément acceptant du <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>Tous les rôles sont autorisés.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLQuoteElement")}}</td>
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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-q-element', '&lt;q&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-q-element', '&lt;q&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/text.html#h-9.2.2', '&lt;q&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.q")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("blockquote")}} pour les citations longues</li>
 <li>{{HTMLElement("cite")}} pour les sources des citations</li>
</ul>
