---
title: <s>
slug: Web/HTML/Element/s
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/s
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;s&gt;</code></strong> permet d'afficher du texte qui est barré car il n'est plus pertinent ou car il est obsolète. <code>&lt;s&gt;</code> ne doit pas être employé pour indiquer des éditions dans un document (on utilisera alors {{HTMLElement("del")}} et {{HTMLElement("ins")}}).</p>

<div>{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p&gt;
  &lt;s&gt;Le plat du jour : saumon à la hollandaise&lt;/s&gt; &lt;em&gt;plus disponible&lt;/em&gt;
&lt;/p&gt;</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples")}}</p>

<h2 id="Accessibilité">Accessibilité</h2>

<p>Par défaut, la plupart des outils d'assistance n'annoncent pas la présence de l'élément <code>s</code>. On peut le rendre annonçable via la propriété CSS {{cssxref("content")}} et grâce aux pseudo-éléments {{cssxref("::before")}} et {{cssxref("::after")}}.</p>

<pre>s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [Début du texte rayé]";
}

s::after {
  content: " [Fin du texte rayé] ";
}
</pre>

<p>Certaines personnes qui utilisent des lecteurs d'écran désactivent sciemment ces annonces pour éviter une verbosité trop importante. Il est donc important de ne pas abuser de cette technique et de ne l'appliquer qu'à des situations où il est nécessaire de comprendre que du contenu a été rayé.</p>

<ul>
 <li><a href="https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/"><em>Short note on making your mark (more accessible) | The Paciello Group</em> (en anglais)</a></li>
 <li><a href="http://adrianroselli.com/2017/12/tweaking-text-level-styles.html"><em>Tweaking Text Level Styles | Adrian Roselli</em> (en anglais)</a></li>
</ul>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Attributs_universels">Catégories de contenu</a></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">Contenu phrasé</a> ou <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">contenu de flux</a>.</td>
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
   <td>Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé">contenu phrasé</a>.</td>
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
   <td>{{SpecName('HTML WHATWG','semantics.html#the-s-element','s element')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C','text-level-semantics.html#the-s-element','s element')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.s")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{obsolete_inline}} {{HTMLElement("strike")}} qui était un ancien synonyme de <code>&lt;s&gt;</code>, désormais obsolète et qui ne doit plus être utilisé sur le Web</li>
 <li>{{HTMLElement("del")}} qui est utilisé afin d'indiquer des données ou des portions de texte qui ont été supprimées</li>
 <li>La propriété CSS {{cssxref("text-decoration-line")}} qui permet de contrôler l'aspect de la ligne utilisée sur le contenu de l'élément {{HTMLElement("s")}}</li>
</ul>
