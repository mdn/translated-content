---
title: '<sup> : l''élément de mise en exposant'
slug: Web/HTML/Element/sup
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/sup
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;sup&gt;</code></strong> est utilisé, pour des raisons typographiques, afin d'afficher du texte en exposant (plus haut et généralement plus petit) par rapport au bloc de texte environnant.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut uniquement <a href="/fr/docs/Web/HTML/Attributs_universels">les attributs universels</a>.</p>

<h2 id="Notes_d'utilisation"><strong>Notes d'utilisation</strong></h2>

<p>Cet élément devrait uniquement être utilisé pour des raisons typographiques lorsque la position du texte est liée à la signification de ce texte (par exemple pour une formule mathématiques) ou aux règles typographiques (par exemple en français pour M<sup>lle</sup>, M<sup>me</sup> ou C<sup>ie</sup>).</p>

<p>Ainsi, on n'utilisera pas <code>&lt;sup&gt;</code> afin d'obtenir un effet visuel d'un logo par exemple. Pour un simple effet de mise en forme (hors typographie), on utilisera plutôt la propriété {{cssxref("vertical-align")}}, utilisée avec la valeur <code>super</code> (voire avec une valeur numérique si on souhaite être plus précis).</p>

<p>Voici quelques cas d'utilisation (non exhaustifs) pour <code>&lt;sup&gt;</code> :</p>

<ul>
 <li>L'utilisation d'exposants dans une formule mathématique : x<sup>2</sup>.

  <ul>
   <li>Dans le cadre de formules complexes, <a href="/fr/docs/Web/MathML">MathML</a> peut s'avérer plus pertinent que l'enchaînement d'éléments {{HTMLElement("sub")}} et <code>&lt;sup&gt;</code>.</li>
  </ul>
 </li>
 <li>L'affichage de lettres supérieures pour respecter certaines conventions typographiques (ex. M<sup>lle</sup>).</li>
 <li>La représentation de nombres ordinaux : 7<sup>e</sup> art.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Puissance_mathématique">Puissance mathématique</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Voici la fonction exponentielle :
  e&lt;sup&gt;x&lt;/sup&gt;.
&lt;/p&gt;
</pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Puissance_mathématique","100%","120")}}</p>

<h3 id="Lettres_supérieures">Lettres supérieures</h3>

<p>Bien que, techniquement, le lettrage supérieur ne corresponde pas à la mise en exposant, on voit souvent <code>&lt;sup&gt;</code> utilisé pour certaines abréviations.</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Robert a présenté son rapport à M&lt;sup&gt;lle&lt;/sup&gt; Bernard.
&lt;/p&gt;</pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Lettres_supérieures","650","80")}}</p>

<h3 id="Nombres_ordinaux">Nombres ordinaux</h3>

<h4 id="HTML_3">HTML</h4>

<pre class="brush: html">&lt;p&gt;
  Voici comment le nombre ordinal cinquième est écrit dans
  différentes langues
&lt;/p&gt;
&lt;ul&gt;
  &lt;li&gt;en français : 5&lt;sup&gt;e&lt;/sup&gt;&lt;/li&gt;
  &lt;li&gt;en anglais : 5&lt;sup&gt;th&lt;/sup&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

<h4 id="Résultat_3">Résultat</h4>

<p>{{EmbedLiveSample("Nombres_ordinaux", 650, 160)}}</p>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><dfn><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></dfn></th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>, <a href="/fr/docs/Web/HTML/Cat%C3%A9gorie_de_contenu#Contenu_phras.C3.A9">contenu phrasé</a>.</td>
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
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-sub-and-sup-elements', '&lt;sub&gt; and &lt;sup&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'text-level-semantics.html#the-sub-and-sup-elements', '&lt;sub&gt; and &lt;sup&gt;;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.sup")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'élément HTML {{HTMLElement("sub")}} permet un effet de mise en indice. Il est à noter que l'élément <code>&lt;sub&gt;</code> et l'élément <code>&lt;sup&gt;</code> ne peuvent pas être utilisés simultanément. Pour afficher le symbole chimique d'un élément, il faudra utiliser <a href="/fr/docs/Web/MathML">MathML</a> pour représenter à la fois le numéro atomique et le nombre de masse.</li>
 <li>Les éléments MathML {{MathMLElement("msub")}}, {{MathMLElement("msup")}} et {{MathMLElement("msubsup")}}.</li>
 <li>La propriété CSS {{cssxref("vertical-align")}}.</li>
</ul>
