---
title: Window.localStorage
slug: Web/API/Window/localStorage
tags:
  - API
  - Propriété
  - Reference
  - Stockage
  - Stockage Web
  - Window
  - WindowLocalStorage
  - lecture seule
  - localStorage
translation_of: Web/API/Window/localStorage
---
<p>{{APIRef("Web Storage API")}}</p>

<p>La propriété <code>localStorage</code> vous permet d'accéder à un objet local {{domxref("Storage")}}. Le <code>localStorage</code> est similaire au <code><a href="/en-US/docs/Web/API/Window.sessionStorage">sessionStorage</a></code>. La seule différence : les données stockées dans le <code>localStorage</code> n'ont pas de délai d'expiration, alors que les données stockées dans le <code>sessionStorage</code> sont nettoyées quand la session navigateur prend fin — donc quand on ferme le navigateur.</p>

<p>Il convient de noter que les données stockées dans <code>localStorage</code> ou <code>sessionStorage</code> <strong>sont spécifiques au protocole de la page.</strong></p>

<p>Les clés et les valeurs <strong>sont toujours</strong> des chaînes de caractères (à noter que, comme pour les objets, les clés entières seront automatiquement converties en chaînes de caractères).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">monStockage = localStorage;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet {{DOMxRef("Storage")}} qui peut être utilisé pour accéder à l'espace de stockage local de l'origine actuelle.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt><code>SecurityError</code></dt>
 <dd>La demande viole une décision politique, ou l'origine n'est pas <a href="/fr/docs/Web/Security/Same_origin_policy_for_JavaScript">un schéma/hôte/port valide</a> (cela peut se produire si l'origine utilise le shéma <code>file:</code> ou <code>data:</code>, par exemple). Par exemple, l'utilisateur peut configurer son navigateur de manière à refuser la permission de conserver des données pour l'origine spécifiée.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>L'extrait de code suivant accède à l'objet local {{domxref("Storage")}} du domaine courant et lui ajoute une entrée en utilisant {{domxref("Storage.setItem()")}}.</p>

<pre class="brush: js">localStorage.setItem('monChat', 'Tom');</pre>

<p>La syntaxe pour la lecture de l'article <code>localStorage</code> est la suivante :</p>

<pre class="brush: js">var cat = localStorage.getItem('myCat');</pre>

<p>La syntaxe pour la suppression de l'élément <code>localStorage</code> est la suivante :</p>

<pre class="brush: js">localStorage.removeItem('myCat');</pre>

<p>La syntaxe pour supprimer tous les éléments de <code>localStorage</code> est la suivante :</p>

<pre class="brush: js">// Effacer tous les éléments
localStorage.clear();
</pre>

<div class="note">
<p><strong>Note :</strong> Se référer à l'article <a href="/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Using the Web Storage API</a> pour voir un exemple complet.</p>
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
   <td>{{SpecName("HTML WHATWG", "webstorage.html#dom-localstorage", "localStorage")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>

<p>{{Compat("api.Window.localStorage")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Using the Web Storage API</a></li>
 <li>{{domxref("Storage/LocalStorage")}}</li>
 <li>{{domxref("Window/SessionStorage")}}</li>
 <li>{{domxref("Window.sessionStorage")}}</li>
</ul>
