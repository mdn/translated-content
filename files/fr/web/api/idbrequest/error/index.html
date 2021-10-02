---
title: IDBRequest.error
slug: Web/API/IDBRequest/error
tags:
  - API
  - Error
  - IDBRequest
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBRequest/error
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>error</code></strong> de l'interface {{domxref("IDBRequest")}} renvoie l'erreur associée lorsque la requête est un échec.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var myError = request.error;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une erreur {{domxref("DOMError")}} qui contient l'erreur pertinente. Pour Chrome 48 et les versions ultérieures, cette propriété est une {{domxref("DOMException")}} car <code>DOMError</code> a été retiré du standard pour le DOM. Les codes d'erreurs suivants sont utilisés selon les conditions d'erreur :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Erreur</th>
   <th scope="col">Explication</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>AbortError</code></td>
   <td>Si on annule la transaction en cours, toutes les requêtes en cours reçoivent cette erreur.</td>
  </tr>
  <tr>
   <td><code>ConstraintError</code></td>
   <td>Erreur obtenue lorsqu'on tente d'insérer des données qui ne respectent pas une contrainte. C'est un type d'exception utilisé lorsqu'on crée des magasins d'objet et des index. On aura cette erreur lorsqu'on essaiera par exemple d'ajouter une clé qui existe déjà dans l'enregistrement.</td>
  </tr>
  <tr>
   <td><code>QuotaExceededError</code></td>
   <td>Erreur obtenue lorsque atteint le quota d'espace disque et que l'utilisateur refuse de céder plus d'espace mémoire.</td>
  </tr>
  <tr>
   <td><code>UnknownError</code></td>
   <td>Erreur obtenue lorsque l'opération a échoué pour des raisons qui ne sont pas propres à la base de données (par exemple une erreur d'écriture sur le disque).</td>
  </tr>
  <tr>
   <td><code>NoError</code></td>
   <td>Valeur utilisée lorsque la requête est réussie.</td>
  </tr>
  <tr>
   <td><code>VersionError</code></td>
   <td>Erreur obtenue lorsqu'on essaye d'ouvrir une base de données avec une version inférieure à celle dont elle dispose déjà.</td>
  </tr>
 </tbody>
</table>

<p>En plus des codes d'erreur envoyés à l'objet {{domxref("IDBRequest")}}, les opérations asynchrones peuvent également déclencher des exceptions. La liste décrit les problèmes qui peuvent se produire lorsque la requête est en cours d'exécution mais d'autres problèmes peuvent apparaître lors de la construction de la requête. Ainsi, si la requête a échoué et que le résultat n'est pas disponible, l'exception <code>InvalidStateError </code>sera levée.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on effectue une requête sur le titre de l'enregistrement. Le gestionnaire d'évèvenement <code>onsuccess</code> traite l'enregistrement obtenu depuis le magasin d'objet ({{domxref("IDBObjectStore")}}) et qui est disponible via <code>objectStoreTitleRequest.result</code>. Le gestionnaire met ensuite à jour une propriété de l'enregistrement puis replace l'enregistrement mis à jour dans le magasin d'objet.</p>

<p>On dispose également d'une fonction <code>onerror</code> qui permet d'indiquer l'erreur qui s'est produite si la requêté échoue. Pour consulter un exemple complet, voir <a href="https://github.com/mdn/to-do-notifications/">l'application de notifications To-do</a> (cf. <a href="https://mdn.github.io/to-do-notifications/">la démonstration <em>live</em></a>).</p>

<pre class="brush: js">var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On récupère la liste de tâches avec ce titre
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère l'objet du résultat
  var data = objectStoreTitleRequest.result;

  // On met à jour la valeur de la propriété notified avec "yes"
  data.notified = "yes";

  // On crée une autre requête pour replacer l'élément
  // into the database
  var updateTitleRequest = objectStore.put(data);

  // Lorsque la requête est réussie, on utilise à nouveau
  // la fonction the displayData() pour mettre à jour
  // l'affichage
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};

objectStoreTitleRequest.onerror = function() {
  // S'il se produit une erreur pendant la requête
  // on l'enregistre
  console.log("Il y a eu une erreur pour la récupération des données : " + objectStoreTitleRequest.error);
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
   <td>{{SpecName('IndexedDB', '#widl-IDBRequest-error', 'error')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBRequest.error")}}</p>

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
