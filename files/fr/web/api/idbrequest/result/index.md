---
title: IDBRequest.result
slug: Web/API/IDBRequest/result
translation_of: Web/API/IDBRequest/result
browser-compat: api.IDBRequest.result
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>result</code></strong>, rattachée à l'interface <a href="/fr/docs/Web/API/IDBRequest"><code>IDBRequest</code></a>, renvoie le résultat de la requête. Si la requête échoue et que le résultat n'est pas disponible, une exception <code>InvalidStateError</code> sera levée.</p>

<div class="note">
  <p><strong>Note :</strong> Cette fonctionnalité est disponible via les <a href="/fr/docs/Web/API/Web_Workers_API">Web Workers</a>.</p>
</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
let resultat = request.result;
</pre>

<h3 id="value">Valeur</h3>

<p>La valeur du résultat de la requête (le type dépend des objets du magasin d'objets).</p>

<h2 id="example">Exemple</h2>

<p>Dans l'exemple qui suit, on souhaite récupérer l'enregistrement qui correspond à un titre donné. Le gestionnaire d'évènements <code>onsuccess</code> permet de récupérer l'enregistrement contenu dans le magasin d'objet (<a href="/fr/docs/Web/API/IDBObjectStore"><code>IDBObjectStore</code></a>) (via <code>objectStoreTitleRequest.result</code>). Ensuite, on met à jour une propriété de cet enregistrement et on replace cet enregistrement dans le magasin d'objet. Pour un exemple fonctionnel complet, voir <a href="https://github.com/mdn/to-do-notifications/">l'application To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">voir l'exemple <i>live</i></a>).</p>

<pre class="brush: js;">
let title = "Promener le chien";

// On ouvre une transaction en lecture/écriture
let objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On récupère l'objet qui possède le titre souhaité
let objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On agit sur les données de l'objet de la requête
  let data = objectStoreTitleRequest.result;

  // On met à jour la propriété notified avec "yes"
  data.notified = "yes";

  // On crée une autre requête pour réinsérer l'objet dans la base
  let updateTitleRequest = objectStore.put(data);

  // Lorsque cette seconde requête est terminée, on lance displayData() pour rafraîchir l'écran
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une transaction : <a href="/fr/docs/Web/API/IDBDatabase"><code>IDBDatabase</code></a></li>
 <li>Utiliser les transactions : <a href="/fr/docs/Web/API/IDBTransaction"><code>IDBTransaction</code></a></li>
 <li>Définir un intervalle de clés : <a href="/fr/docs/Web/API/IDBKeyRange"><code>IDBKeyRange</code></a></li>
 <li>Récupérer et modifier les données : <a href="/fr/docs/Web/API/IDBObjectStore"><code>IDBObjectStore</code></a></li>
 <li>Utiliser les curseurs : <a href="/fr/docs/Web/API/IDBCursor"><code>IDBCursor</code></a></li>
 <li>Exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <i>live</i></a>).</li>
</ul>
