---
title: Storage.length
slug: Web/API/Storage/length
tags:
  - API
  - Propriété
  - Reference
  - Stockage
  - Web Stockage
translation_of: Web/API/Storage/length
---
<p>{{APIRef("Web Storage API")}}</p>

<p>La propriété en lecture seule de l'interface {{domxref("Storage")}} retourne un entier représentant le nombre d'items stockés dans l'objet <code>Storage</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>aLength</em> = <em>storage</em>.length;</pre>

<h3 id="Retour">Retour</h3>

<p>Un entier.</p>

<h2 id="Exemple">Exemple</h2>

<p>La fonction suivante ajoute trois éléments au localStorage du domaine courant puis retourne le nombre d'éléments dans le storage:</p>

<pre class="brush: js">function populateStorage() {
  localStorage.setItem('bgcolor', 'yellow');
  localStorage.setItem('font', 'Helvetica');
  localStorage.setItem('image', 'cats.png');

  localStorage.length; // retourne 3 si localStorage est vide au préalable
}</pre>

<div class="note">
<p><strong>Note :</strong> Pour voir ceci utilisé dans un exemple concret, regardez notre <a href="https://mdn.github.io/dom-examples/web-storage/">Web Storage Demo</a>.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-length', 'Storage.length')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Storage.length")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Utilisation de l'API de stockage web</a></li>
</ul>
