---
title: IDBObjectStore.openKeyCursor()
slug: Web/API/IDBObjectStore/openKeyCursor
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/openKeyCursor
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>openKeyCursor()</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} dont le résultat sera un curseur ({{domxref("IDBCursor")}}) qui pourra être utilisé afin de parcourir les enregistrements correspondants. Cette méthode est utilisée afin de parcourir les clés d'un magasin d'objets grâce à un curseur.</p>

<p>Afin de déterminer si le curseur a bien été ajouté, on pourra écouter l'évènement <code>success</code> sur le résultat de la méthode.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>requete</em> = <em>objectStore</em>.openKeyCursor(<em>optionalKeyRange</em>, <em>optionalDirection</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>optionalKeyRange</code></dt>
 <dd>L'intervalle de clés qu'on souhaite parcourir. Si une seule clé est fournie, l'intervalle constitué ne contiendra que cette clé. Si aucune valeur n'est passée en argument, le curseur produit parcourera tous les enregistrements du magasin d'objets.</dd>
 <dt><code>optionalDirection</code></dt>
 <dd>Un objet {{domxref("IDBCursorDirection")}} qui indique la direction dans laquelle le curseur doit parcourir les évènements. La valeur par défaut est <code>"next"</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les différents évènements relatifs à cette opération.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant l'un des types suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>Le magasin d'objets ({{domxref("IDBObjectStore")}} ou l'index ({{domxref("IDBIndex")}}) a été supprimé.</td>
  </tr>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>La transaction associée au magasin d'objet ({{domxref("IDBObjectStore")}}) est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>La clé ou l'intervalle de clés indiqué est invalide.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code suivant, on crée une transaction, on l'utilise sur un magasin d'objets donné puis on utilise le curseur pour parcourir tous les enregistrements du magasin d'objets :</p>

<pre class="brush: js">var transaction = db.transaction("name", "readonly");
var objectStore = transaction.objectStore("name");
var request = objectStore.openKeyCursor();
request.onsuccess = function(event) {
  var cursor = event.target.result;
  if(cursor) {
    // cursor.key contient la clé de l'enregistrement courant
    // à la différence de openCursor, il n'y a pas de cursor.value
    cursor.continue();
  } else {
    // Il n'y a plus d'autres résultats
  }
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB2', '#dom-idbobjectstore-openkeycursor', 'openKeyCursor')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.openKeyCursor")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une connexion : {{domxref("IDBDatabase")}}</li>
 <li>Utiliser les transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer et modifier les données : {{domxref("IDBObjectStore")}}</li>
 <li>Utiliser les curseurs {{domxref("IDBCursor")}}</li>
 <li>Exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <em>live</em></a>).</li>
</ul>
