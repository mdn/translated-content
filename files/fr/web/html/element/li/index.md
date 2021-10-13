---
title: <li>
slug: Web/HTML/Element/li
tags:
  - Contenu de groupage HTML
  - Element
  - HTML
  - Reference
translation_of: Web/HTML/Element/li
---
<div>{{HTMLRef}}</div>

<p>L'élément HTML <strong><code>&lt;li&gt;</code></strong> est utilisé pour représenter un élément dans une liste. Il doit être contenu dans un élément parent : une liste ordonnée ({{HTMLElement("ol")}}), une liste non ordonnée ({{HTMLElement("ul")}}) ou un menu ({{HTMLElement("menu")}}). Dans les menus et les listes non ordonnées, les éléments de liste sont habituellement affichés en utilisant des puces. Dans les listes ordonnées, ils sont habituellement affichés avec compteur croissant à gauche, tel qu'un nombre ou une lettre.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/li.html", "tabbed-shorter")}}</div>

<h2 id="Attributs">Attributs</h2>

<p>Cet élément inclut les <a href="/fr/docs/Web/HTML/Attributs_universels">attributs universels</a>.</p>

<dl>
 <dt>{{htmlattrdef("value")}}</dt>
 <dd><p>Cette valeur entière indique la valeur ordinale en cours de l'élément de liste tel que défini par l'élément {{HTMLElement("ol")}}. La seule valeur autorisée pour cet attribut est un nombre, même si la liste est affichée avec des chiffres romains ou des lettres. Les éléments de la liste qui suivent celui-ci continueront la numérotation à partir de la valeur indiquée. L'attribut <strong>value</strong> n'a pas de signification pour les listes non ordonnées ({{HTMLElement("ul")}}) ou pour les menus ({{HTMLElement("menu")}}).</p>
 <div class="note"><p><strong>Note :</strong> Cet attribut a été déprécié en HTML4 mais a été réintroduit en HTML5.</p></div>
 <div class="note"><p><strong>Note :</strong> Avant {{Gecko("9.0")}}, des valeurs négatives étaient incorrectement converties en 0. A partir de {{Gecko("9.0")}}, toutes les valeurs entières ont été correctement analysées.</p></div>
 </dd>
 <dt>{{htmlattrdef("type")}} {{Deprecated_inline}}</dt>
 <dd><p>Cet attribut de caractère indique le type de numérotation utilisé pour la liste :</p>
 <ul>
  <li><code>a</code> : lettres minuscules</li>
  <li><code>A</code> : lettres majuscules</li>
  <li><code>i</code> : chiffres romains en minuscules</li>
  <li><code>I</code> : chiffres romains en majuscules</li>
  <li><code>1</code> : nombres</li>
 </ul>
 <p>Ce type surcharge celui utilisé par son élément parent {{HTMLElement("ol")}} si présent.</p>
  <div class="note">
    <p><strong>Note :</strong> Cet attribut a été déprécié : utilisez la propriété CSS {{cssxref("list-style-type")}} à la place.</p>
  </div>
 </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Liste_ordonnée">Liste ordonnée</h3>

<h4 id="HTML">HTML</h4>

<pre><code>&lt;ol&gt;
    &lt;li&gt;premier article&lt;/li&gt;
    &lt;li&gt;second article&lt;/li&gt;
    &lt;li&gt;troisième article&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<h4 id="Résultat">Résultat</h4>

<p>{{EmbedLiveSample("Liste_ordonnée")}}</p>

<h3 id="Liste_ordonnée_démarrant_avec_un_indice_donné">Liste ordonnée démarrant avec un indice donné</h3>

<h4 id="HTML_2">HTML</h4>

<pre><code>&lt;ol type="I"&gt;
    &lt;li value="3"&gt;troisième article&lt;/li&gt;
    &lt;li&gt;quatrième article&lt;/li&gt;
    &lt;li&gt;cinquième article&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<h4 id="Résultat_2">Résultat</h4>

<p>{{EmbedLiveSample("Liste_ordonnée_démarrant_avec_un_indice_donné")}}</p>

<h3 id="Liste_non_ordonnée">Liste non ordonnée</h3>

<h4 id="HTML_3">HTML</h4>

<pre><code>&lt;ul&gt;
    &lt;li&gt;premier article&lt;/li&gt;
    &lt;li&gt;second article&lt;/li&gt;
    &lt;li&gt;troisième article&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<h4 id="Résultat_3">Résultat</h4>

<p>{{EmbedLiveSample("Liste_non_ordonnée")}}</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Pour d'autres exemples plus détaillés, voir les pages {{HTMLElement("ol")}} et {{HTMLElement("ul")}}.</p>
</div>

<h2 id="Résumé_technique">Résumé technique</h2>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/fr/docs/Web/HTML/Catégorie_de_contenu">Catégories de contenu</a></th>
   <td>Aucune.</td>
  </tr>
  <tr>
   <th scope="row">Contenu autorisé</th>
   <td><a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux">Contenu de flux</a>.</td>
  </tr>
  <tr>
   <th scope="row">Omission de balises</th>
   <td>La balise de fin peut être absente si l'élément est immédiatement suivi par un autre élément {{HTMLElement("li")}} ou s'il n'y a plus d'autre contenu dans son élément parent.</td>
  </tr>
  <tr>
   <th scope="row">Parents autorisés</th>
   <td>Un élément {{HTMLElement("ul")}}, {{HTMLElement("ol")}} ou {{HTMLElement("menu")}}. Bien que ce ne soit pas un usage conforme, l'élément obsolète {{HTMLElement("dir")}} peut également être un parent.</td>
  </tr>
  <tr>
   <th scope="row">Rôles ARIA autorisés</th>
   <td>{{ARIARole("menuitem")}}, {{ARIARole("menuitemcheckbox")}}, {{ARIARole("menuitemradio")}}, {{ARIARole("option")}}, {{ARIARole("presentation")}}, {{ARIARole("radio")}}, {{ARIARole("separator")}}, {{ARIARole("tab")}}, {{ARIARole("treeitem")}}.</td>
  </tr>
  <tr>
   <th scope="row">Interface DOM</th>
   <td>{{domxref("HTMLLIElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'semantics.html#the-li-element', '&lt;li&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'grouping-content.html#the-li-element', '&lt;li&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'struct/lists.html#h-10.2', '&lt;li&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>L'attribut <code>type</code> a été déprécié.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("html.elements.li")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Les autres éléments liés aux listes : {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} et {{HTMLElement("dir")}} (obsolète) ;</li>
 <li>Les propriétés CSS qui peuvent être particulièrement utiles pour mettre en forme l'élément <code>&lt;li&gt;</code> :
  <ul>
   <li>la propriété {{cssxref("list-style")}}, pour choisir la manière d'afficher l'ordinal,</li>
   <li>les <a href="/fr/docs/Web/CSS/Compteurs_CSS">compteurs CSS</a>, pour gérer des listes imbriquées complexes,</li>
   <li>la propriété {{cssxref("margin")}}, pour contrôler l'indentation de l'élément de liste.</li>
  </ul>
 </li>
</ul>
