---
title: document.createDocumentFragment
slug: Web/API/Document/createDocumentFragment
tags:
  - API
  - DOM
  - Document
  - HTML
  - Méthode
  - Reference
translation_of: Web/API/Document/createDocumentFragment
---
<div>{{ApiRef("DOM")}}</div>

<p>Crée un nouvel objet vide de type  {{domxref("DocumentFragment")}}.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">var <var>fragment</var> = document.createDocumentFragment();
</pre>

<p><code>fragment</code> est une référence vers un objet vide de type  {{domxref("DocumentFragment")}} .</p>

<h2 id="Description">Description</h2>

<p>Les objets <code>DocumentFragments</code> sont analogues à des nœuds du DOM, mais ne font jamais partie de l'arbre DOM. Le cas d'usage le plus courant consiste à créer un fragment pour y stocker des éléments, puis à ajouter en une seule opération le fragment à l'arbre DOM, ce qui a pour effet de le remplacer par tous ses éléments enfants.</p>

<p>Le principal avantage de cette méthode de mise à jour du DOM vient du fait que le fragment est stocké en mémoire, et pas dans l'arbre DOM lui-même, de sorte que le modifier ne déclenche pas de <a href="http://code.google.com/speed/articles/reflow.html">reflow</a> (le calcul des positions et de la géométrie de chacun des éléments de la page affichée). Par conséquent, l´utilisation de fragments pour effectuer des mises à jour du DOM donne souvent lieu à une <a href="http://ejohn.org/blog/dom-documentfragments/">amélioration des performance</a>s.</p>

<h2 id="Example">Exemple</h2>

<p>Cet exemple crée une liste des principaux navigateurs du web.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;ul id="ul"&gt;
&lt;/ul&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var element  = document.getElementById('ul'); // en supposant qu'ul existe
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera',
    'Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Example", 600, 140)}}</p>

<h2 id="Spécification">Spécification</h2>

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
   <td>{{SpecName('DOM WHATWG', '#dom-document-createdocumentfragment', 'Document.createDocumentFragment()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale dans la spécification DOM 1.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Document.createDocumentFragment")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>
</div>

<ul>
 <li>{{domxref("DOMImplementation.createDocument", "document.implementation.createDocument()")}}</li>
 <li>{{domxref("documentFragment")}}</li>
</ul>
