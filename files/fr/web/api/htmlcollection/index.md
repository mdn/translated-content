---
title: HTMLCollection
slug: Web/API/HTMLCollection
tags:
  - API
  - DOM
  - Reference
translation_of: Web/API/HTMLCollection
---
<p>{{APIRef("HTML DOM")}}</p>

<p>L'interface <strong>HTMLCollection</strong> est constituée d'une collection générique (à la manière d'un tableau similaire à <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments">arguments</a>) d'éléments (dans l'ordre du document) et offre des méthodes et des propriétés pour sélectionner ces éléments dans la liste.</p>

<p><strong>Note:</strong> Cette interface est appelée <code>HTMLCollection</code> pour des raisons historiques (avant DOM4, les collections implémentant cette interface pouvaient uniquement êtres constituées d'élements HTML).</p>

<p>Une HTMLCollection dans le DOM HTML est automatiquement mise à jour quand le document concerné change.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("HTMLCollection.length")}} {{readonlyInline}}</dt>
 <dd>Retourne le nombre d'éléments de la collection.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("HTMLCollection.item()")}}</dt>
 <dd>Retourne le nœud spécifique à l'<code>index</code> basé sur zéro donné dans la liste. Retourne <code>null</code> si l'<code>index</code> est hors de portée.</dd>
 <dt>{{domxref("HTMLCollection.namedItem()")}}</dt>
 <dd>Retourne le nœud spécifique dont l'ID ou, à défaut, le nom correspond à la chaîne de caractères fournie par <code>name</code>. La recherche par nom est faite seulement en dernier ressort, uniquement en HTML, et seulement si l'élément référencé supporte l'attribut <code>name</code>. Retourne <code>null</code> si aucun nœud n'existe pour le nom donné.</dd>
</dl>

<h2 id="Utilisation_en_JavaScript">Utilisation en JavaScript</h2>

<p><code>HTMLCollection</code> expose aussi directement ses membres comme propriétés, par nom et par index. Les ID HTML peuvent contenir : et . comme caractères valides, ce qui nécessite d'utiliser la notation entre crochets pour accèder aux propriétés. Actuellement, HTMLCollections ne reconnait pas  purement les ID numériques, ce qui provoquerait des conflits avec l'accès de "array-style" , bien qu'HTML5 le permette.</p>

<p>Par exemple, en supposant qu'il y ait un élément <code>&lt;form&gt;</code> <em>(formulaire)</em> dans le document et que son <code>id</code> soit <code>"myForm" </code>:</p>

<pre class="brush: html"><code>var elem1, elem2;

// document.forms est une HTMLCollection

elem1 = document.forms[0];
elem2 = document.forms.item(0);

alert(elem1 === elem2); // affiche : "true" <em>(vrai)</em>

elem1 = document.forms.myForm;
elem2 = document.forms.namedItem("myForm");

alert(elem1 === elem2); // affiche : "true"

elem1 = document.forms["named.item.with.periods"];</code></pre>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>Certains navigateurs se comportent différemment quand il y a plus d'un élément correspondant à la chaîne utilisée comme index (ou l'argument <code>namedItem</code>). Firefox 8 se comporte comme spécifié dans DOM 2 et DOM4, en retournant le premier élément correspondant. Les navigateurs WebKit et Internet Explorer, dans ce cas, retournent une autre <code>HTMLCollection</code> et Opera retourne un {{domxref("NodeList")}} de tous les éléments correspondants.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#htmlcollection', 'HTMLCollection')}}</td>
   <td>{{ Spec2('DOM WHATWG') }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-75708506', 'HTMLCollection')}}</td>
   <td>{{ Spec2('DOM2 HTML') }}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-html.html#ID-75708506', 'HTMLCollection')}}</td>
   <td>{{ Spec2('DOM1') }}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("NodeList")}}</li>
 <li>{{domxref("HTMLFormControlsCollection")}}, {{domxref("HTMLOptionsCollection")}}</li>
</ul>
