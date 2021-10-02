---
title: IDBRequest.readyState
slug: Web/API/IDBRequest/readyState
tags:
  - API
  - IDBRequest
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBRequest/readyState
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>readyState</code></strong>, rattachée à l'interface {{domxref("IDBRequest")}}, est une propriété en lecture seule qui indique l'état de la requête.</p>

<p>Chaque requête démarre avec l'état <code>pending</code> (c'est-à-dire en attente). Cet état vaut ensuite <code>done</code> (fini) lorsque la requête est terminée (en cas de réussite de l'opération comme en cas d'échec).</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>currentReadyState</em> = <em>request</em>.readyState;</pre>

<h3 id="Valeur">Valeur</h3>

<p>La valeur {{domxref("IDBRequestReadyState")}} de la requête, qui peut être l'un de deux valeurs. <code>pending</code> lorsque la requête est en attente, <code>done</code> lorsque celle-ci est finie.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on effectue une requête sur un enregistrement avec un titre donné et on recupère l'enregistrement associé grâce au gestionnaire d'évènement <code>onsuccess</code> à partir du magasin d'objets {{domxref("IDBObjectStore")}}. Ensuite, on met à jour une des propriétés de cet enregistrement et on replace cet objet mis à jour dans le magasin d'objets via une autre requête. La valeur de la propriété <code>readyState</code> pour la deuxième requête est affichée dans la console. Pour consulter un exemple fonctionnel complet, vous pouvez vous référer à notre appliction <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">cf. également l'exemple <em>live</em></a>).</p>

<pre class="brush: js">var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On récupère l'enregistrement avec le titre souhaité
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère les données du résultat de la requête
  var data = objectStoreTitleRequest.result;

  // On met à jour la propriété notified de l'objet
  // avec la valeur "yes"
  data.notified = "yes";

  // Ensuite, on crée une autre requête pour insérer
  // l'enregistrement dans la base de données
  var updateTitleRequest = objectStore.put(data);

  // On affiche l'état de la requête dans la console
  console.log("La valeur de readyState est " + updateTitlerequest.readyState);

  // Lorsque cette deuxième requête est appliquée,
  // on exécute la fonction displayData() afin d'afficher
  // les données à jour
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
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
   <td>{{SpecName('IndexedDB', '#widl-IDBRequest-readyState', 'readyState')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#dom-idbrequest-readystate", "readyState")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBRequest.readyState")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Manipuler IndexedDB</a></li>
 <li>Démarrer des transactions : {{domxref("IDBDatabase")}}</li>
 <li>Manipuler des transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}</li>
 <li>Manipuler des curseurs : {{domxref("IDBCursor")}}</li>
 <li>Exemple de référence pour IndexedDB : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a></li>
</ul>
