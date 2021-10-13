---
title: '<dl> : l''élément de liste de descriptions'
slug: Web/HTML/Element/dl
tags:
  - Definition List
  - Description list
  - Element
  - HTML
  - HTML grouping content
  - HTML:Flow content
  - HTML:Palpable Content
  - Reference
  - Web
translation_of: Web/HTML/Element/dl
browser-compat: html.elements.dl
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;dl&gt;</code></strong> représente une liste de descriptions sous la forme d'une liste de paires associant des termes (fournis par des éléments <a href="/fr/docs/Web/HTML/Element/dt"><code>&lt;dt&gt;</code></a>) et leurs descriptions ou définitions (fournies par des éléments <a href="/fr/docs/Web/HTML/Element/dd"><code>&lt;dd&gt;</code></a>). On utilisera par exemple cet élément pour implémenter un glossaire.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}</div>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a></th>
      <td><a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content">Contenu de flux</a> et, si les éléments enfants de <code>&lt;dl&gt;</code> incluent une paire avec un nom et une valeur, du <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content">contenu tangible</a>.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
      <p>Zéro ou plusieurs groupes composés d'un ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/dt"><code>&lt;dt&gt;</code></a>, chacun suivi par un ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/dd"><code>&lt;dd&gt;</code></a> entre lesquels on pourra éventuellement avoir des éléments <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> et <a href="/fr/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a>.</p>
  
      <p>Selon le WHATWG : un ou plusieurs éléments <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a> éventuellement entrecoupés d'éléments <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a> ou <a href="/fr/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a>.</p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément acceptant du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Pas de rôle correspondant</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td><a href="https://w3c.github.io/aria/#group">group</a>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/List_role">list</a></code>, <code><a href="https://w3c.github.io/aria/#none">none</a></code>, <a href="https://w3c.github.io/aria/#presentation">presentation</a></td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLDListElement"><code>HTMLDListElement</code></a></td>
    </tr>
  </tbody>
</table>

<h2 id="attributes">Attributs</h2>

<p>Cet élément inclut <a href="/fr/docs/Web/HTML/Global_attributes">les attributs universels</a>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="single_term_and_description">Un seul terme et une seule définition</h3>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Firefox&lt;/dt&gt;
  &lt;dd&gt;
    Un navigateur Web libre, open-source, multi-plateforme
    dévelopé par la Mozilla Corporation et des centaines de
    volontaires.
  &lt;/dd&gt;
  &lt;!-- D'autres termes et leurs descriptions --&gt;
&lt;/dl&gt;</pre>

<p>{{EmbedLiveSample("single_term_and_description", "", 120)}}</p>

<h3 id="multiple_terms_single_description">Plusieurs termes avec une même définition</h3>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Firefox&lt;/dt&gt;
  &lt;dt&gt;Mozilla Firefox&lt;/dt&gt;
  &lt;dt&gt;Fx&lt;/dt&gt;
  &lt;dd&gt;
    Un navigateur Web libre, open-source, multi-plateforme
    dévelopé par la Mozilla Corporation et des centaines de
    volontaires.
  &lt;/dd&gt;
  &lt;!-- D'autres termes et leurs définitions --&gt;
&lt;/dl&gt;</pre>

<p>{{EmbedLiveSample("multiple_terms_single_description", "", 180)}}</p>

<h3 id="single_term_multiple_descriptions">Un seul terme avec plusieurs définitions</h3>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Firefox&lt;/dt&gt;
  &lt;dd&gt;
    Un navigateur Web libre, open-source, multi-plateforme
    dévelopé par la Mozilla Corporation et des centaines de
    volontaires.
  &lt;/dd&gt;
  &lt;dd&gt;
    Le petit panda, panda roux, panda fuligineux ou panda
    éclatant (<em>Ailurus fulgens</em>), est un mammifère originaire
    de l'Himalaya et de la Chine méridionale.
  &lt;/dd&gt;
  &lt;!-- D'autres termes et leurs définitions --&gt;
&lt;/dl&gt;</pre>

<p>{{EmbedLiveSample("single_term_multiple_descriptions", "", 180)}}</p>

<h3 id="multiple_terms_and_descriptions">Termes et descriptions multiples</h3>

<p>Il est également possible de définir plusieurs termes avec plusieurs descriptions correspondantes, en combinant les exemples ci-dessus.</p>

<h3 id="metadata">Métadonnées</h3>

<p>Les listes de définitions sont utiles lorsqu'on souhaite afficher des métadonnées sous forme d'une liste de clés-valeurs.</p>

<pre class="brush: html">&lt;dl&gt;
  &lt;dt&gt;Nom&lt;/dt&gt;
  &lt;dd&gt;Godzilla&lt;/dd&gt;
  &lt;dt&gt;Né le&lt;/dt&gt;
  &lt;dd&gt;1952&lt;/dd&gt;
  &lt;dt&gt;Lieu de naissance&lt;/dt&gt;
  &lt;dd&gt;Japon&lt;/dd&gt;
  &lt;dt&gt;Couleur&lt;/dt&gt;
  &lt;dd&gt;Vert&lt;/dd&gt;
&lt;/dl&gt;</pre>

<p>Conseil : il peut être pratique de définir un séparateur clé-valeur dans le CSS, par exemple :</p>

<pre class="brush: css">dt::after {
  content: ": ";
}</pre>

<h3 id="wrapping_name-value_groups_in_htmlelementdiv_elements">Intégration de groupes nom-valeur dans les éléments <code>&lt;div&gt;</code>.</h3>

<p><a href="/fr/docs/Glossary/WHATWG">WHATWG</a> HTML permet d'envelopper chaque groupe nom-valeur d'un élément <a href="/fr/docs/Web/HTML/Element/dl"><code>&lt;dl&gt;</code></a> dans un élément <a href="/fr/docs/Web/HTML/Element/div"><code>&lt;div&gt;</code></a>. Cela peut être utile lors de l'utilisation de <a href="/fr/docs/Web/HTML/Microdata">microdonnées</a>, ou lorsque les <a href="/fr/docs/Web/HTML/Global_attributes">attributs universels</a> s'appliquent à un groupe entier, ou encore à des fins de style.</p>

<pre class="brush: html">&lt;dl&gt;
  &lt;div&gt;
    &lt;dt&gt;Nom&lt;/dt&gt;
    &lt;dd&gt;Godzilla&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;dt&gt;Né le&lt;/dt&gt;
    &lt;dd&gt;1952&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;dt&gt;Lieu de naissance&lt;/dt&gt;
    &lt;dd&gt;Japon&lt;/dd&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;dt&gt;Couleur&lt;/dt&gt;
    &lt;dd&gt;Vert&lt;/dd&gt;
  &lt;/div&gt;
&lt;/dl&gt;</pre>

<h2 id="notes">Notes</h2>

<p>Cet élément ne doit pas être utilisé (de même que les éléments <a href="/fr/docs/Web/HTML/Element/ul"><code>&lt;ul&gt;</code></a>), dans le seul but de créer une indentation sur la page. Bien que cela fonctionne parfaitement, c'est une pratique déconseillée qui mêle mise en forme et sémantique. Cela modifie le rôle que doivent avoir les listes de définitions.</p>

<p>Pour changer l'indentation de la définition d'un terme, il faut utiliser la propriété <a href="/fr/docs/Web/CSS">CSS</a> <a href="/fr/docs/Web/CSS/margin"><code>margin</code></a>.</p>

<h2 id="accessibility_concerns">Accessibilité</h2>

<p>Les lecteurs d'écran annoncent <code>&lt;dl&gt;</code> de façon différente. À partir d'iOS 14, VoiceOver annoncera que le contenu de <code>&lt;dl&gt;</code> est une liste lors de la navigation au curseur (mais pas via la lecture générale). Il faut donc s'assurer que la relation entre les éléments de la liste est bien communiquée grâce aux contenus des éléments.</p>

<ul>
  <li><a href="https://codepen.io/aardrian/debug/NzGaKP">CodePen - Les camarades HTML : dt &amp; dd</a> <small>(en)</small></li>
  <li><a href="https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html">VoiceOver sous iOS 14 prend en charge les listes de descriptions</a> <small>(en)</small></li>
 </ul>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/dt"><code>&lt;dt&gt;</code></a></li>
  <li>L'élément <a href="/fr/docs/Web/HTML/Element/dd"><code>&lt;dd&gt;</code></a></li>
</ul>
