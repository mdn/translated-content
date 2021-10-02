---
title: IDBObjectStore.put()
slug: Web/API/IDBObjectStore/put
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/put
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>put()</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un autre <em>thread</em>, crée <a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone">un clone structuré</a> de la valeur puis enregistre ce clone dans le magasin d'objet. Cette méthode permet ainsi d'ajouter de nouveaux enregistrements ou de mettre à jour des enregistrements existants dans un magasin d'objet lorsque la transaction est en mode <code>readwrite</code> (lecture-écriture)</p>

<p>Si l'enregistrement est stocké avec succès, un évènement de succès sera déclenché sur la requête renvoyée par la méthode. La propriété <code>result</code> de cette requête contiendra la clé de l'enregistrement créé ou mis à jour. La propriété <code>transaction</code> de cette requête sera la transaction dans laquelle le magasin d'objet est ouvert.</p>

<p>La méthode <code>put()</code> permet d'ajouter ou de mettre à jour. Si on souhaite uniquement insérer, on utilisera plutôt {{domxref("IDBObjectStore.add")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var request = objectStore.put(monElement);
var request = objectStore.put(monElement, cleOptionnelle);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>monElement</code></dt>
 <dd>La valeur qu'on souhaite enregistrer.</dd>
 <dt><code>cleOptionnelle</code> {{optional_inline}}</dt>
 <dd>La clé qu'on souhaite utiliser pour identifier l'enregistrement. Si cet argument est absent, la valeur par défaut sera {{jsxref("null")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} qui recevra les évènements qui seront déclenchés suite à cette opération.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever une de ces exceptions {{domxref("DOMException")}} :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>ReadOnlyError</code></td>
   <td>La transaction associée à l'opération est uniquement <a href="/fr/docs/Web/API/IDBTransaction#Constantes">dans un mode de lecture seule</a>.</td>
  </tr>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>La transaction rattachée à l'objet {{domxref("IDBObjectStore")}} est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>L'une de ces conditions est vérifiée :</p>

    <ul>
     <li>Le magasin d'objet utilise des clés en ligne (<em>in-line keys</em>) ou dispose d'un générateur de clés et le paramètre pour la clé a été utilisé.</li>
     <li>Le magasin d'objet utilise des clés en ligne (<em>in-line keys</em>), ne  dispose pas d'un générateur de clés et le paramètre pour la clé n'a pas été utilisé.</li>
     <li>Le magasin d'objet utilise des clés en ligne (<em>in-line keys</em>), ne  dispose pas d'un générateur de clés et le chemin de clé du magasin d'objet ne déclenche pas une clé valide.</li>
     <li>Le paramètre pour la clé a été fourni mais la valeur n'est pas une clé valide.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'objet {{domxref("IDBObjectStore")}} a été supprimé ou déplacé.</td>
  </tr>
  <tr>
   <td><code>DataCloneError</code></td>
   <td>Les données à enregistrer n'ont pas pu être clonées par l'algorithme interne.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on effectue une requête pour obtenir l'enregistrement correspondant à un titre donné. Lorsque cette requête est réussie, on récupère l'enregistrement via la fonction <code>onsuccess</code>. Ensuite, on met à jour une des propriétés de l'enregistrement et on enregistre la valeur mise à jour dans le magasin d'objet avec une autre requête et <code>put()</code>.</p>

<pre class="brush: js">var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On obtient la liste to-do dont le titre correspond
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère les données de l'objet associé
  // à l'enregistrement
  var data = objectStoreTitleRequest.result;

  // On met à jour la valeur de notified avec "yes"
  data.notified = "yes";

  // On crée une autre requête pour appliquer cette
  // mise à jour en base de données
  var updateTitleRequest = objectStore.put(data);

  // On imprime la transaction à l'origine
  // de la requête
  console.log("La transaction originelle est " + updateTitleRequest.transaction);

  // Lorsque cette nouvelle requête a réussi. On affiche
  // les données grâce à la fonction displayData()
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
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-put-IDBRequest-any-value-any-key', 'put()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.put")}}</p>

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
