---
title: StorageManager.persist()
slug: Web/API/StorageManager/persist
translation_of: Web/API/StorageManager/persist
---
<p>{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}</p>

<p>La méthode <strong><code>persist()</code></strong> de l’interface {{domxref("StorageManager")}} fait une demande de permission d’utiliser un stockage persistant, et renvoie une {{jsxref('Promise')}} qui se résoud en <code>true</code> si la permission est accordée et le mode de boîte est persistant, et <code>false</code> dans le cas contraire.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">navigator.storage.persist().then(function(persistent) { ... })</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une {{jsxref('Promise')}} qui se résoud en un {{jsxref('Boolean')}}.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">if (navigator.storage &amp;&amp; navigator.storage.persist)
  navigator.storage.persist().then(function(persistent) {
    if (persistent)
      console.log("Le stockage ne sera pas nettoyé sauf en cas d’action humaine explicite");
    else
      console.log("Le stockage peut être nettoyé par l’UA en cas de pression de stockage.");
  });</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Storage','#dom-storagemanager-persist','persist')}}</td>
   <td>{{Spec2('Storage')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.StorageManager.persist")}}</p>
