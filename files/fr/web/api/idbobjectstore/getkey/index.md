---
title: IDBObjectStore.getKey()
slug: Web/API/IDBObjectStore/getKey
tags:
  - IBDObjectStore
  - IndexedDB
  - Method
  - Méthode
  - Reference
  - Storage
  - Web API
translation_of: Web/API/IDBObjectStore/getKey
---
<p>{{APIRef("IndexedDB")}}</p>

<p>La méthode <strong><code>getKey()</code></strong> de l'interface {{domxref("IDBObjectStore")}} retourne un objet {{domxref("IDBRequest")}}, et, dans un <em>thread</em> séparé, retourne la clé sélectionnée par la requête spécifiée. Cela permet de retrouver un enregistrement spécifique depuis un espace de stockage déterminé.</p>

<p>Si la clé a bien été retrouvée, alors un clone structuré (une copie conforme) sera créée et servira comme résultat à l'objet de requête.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">let <var>request</var> = <var>objectStore</var>.getKey(<var>key</var>);</pre>

<h3 id="Parameters">Paramètres</h3>

<dl>
  <dt><em>key</em></dt>
  <dd>La clé ou l'intervale de clé qui identifie l'enregistrement à retrouver.</dd>
</dl>

<h3 id="Return_Value">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} sur lequel les événements ultérieurs liés à cette opération sont déclenchés.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut provoquer une {{domxref("DOMException")}} de l'un des types suivants :</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>La transaction de ce {{domxref("IDBObjectStore")}} est inactive.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>La clé ou la plage de clés fournie contient une clé invalide.</td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>Le {{domxref("IDBObjectStore")}} a été supprimé ou retiré.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">let openRequest = indexedDB.open("telemetry");
openRequest.onsuccess = (event) =&gt; {
  let db = event.target.result;
  let store = db.transaction("netlogs").objectStore("netlogs");

  let today = new Date();
  let yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  let request = store.getKey(IDBKeyRange(yesterday, today));
  request.onsuccess = (event) =&gt; {
    let when = event.target.result;
    alert("La 1ère activité des dernières 24 heures s'est produite à " + when);
  };
};</pre>

<h2 id="Specifications">Spécifications</h2>

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
      <td>{{SpecName('IndexedDB 2', '#dom-idbobjectstore-getkey', 'getKey()')}}</td>
      <td>{{Spec2('IndexedDB 2')}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.getKey")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB">Utiliser IndexedDB</a></li>
  <li>Transactions de départ : {{domxref("IDBDatabase")}}</li>
  <li>Utilisation des transactions : {{domxref("IDBTransaction")}}</li>
  <li>Réglage d'une fourchette de clés : {{domxref("IDBKeyRange")}}</li>
  <li>Récupération et modification de vos données : {{domxref("IDBObjectStore")}}</li>
  <li>Utilisation des curseurs : {{domxref("IDBCursor")}}</li>
  <li>Exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">Notifications des tâches</a> (<a href="https://mdn.github.io/to-do-notifications/">voir l'exemple en direct</a>.)</li>
</ul>
