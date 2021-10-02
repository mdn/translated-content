---
title: IDBDatabase.createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBDatabase/createObjectStore
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>createObjectStore()</code></strong>, rattachée à l'interface {{domxref("IDBDatabase")}}, permet d'ajouter un magasin d’objet ou un index à la base de donnée et renvoie un accès vers celui-ci.</p>

<p>Cette méthode utilise deux paramètres : le nom du magasin d'objets et un objet qui permettra de définir des propriétés optionnelles supplémentaires.</p>

<p>Cette méthode ne peut être appelée que lors d'une transaction en mode <a href="/fr/docs/Web/API/IDBTransaction"><code>versionchange</code></a>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var objectStore = db.createObjectStore(name, optionalParameters);
</pre>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt><code>name</code></dt>
 <dd>Le nom du magasin d'objet à ajouter. Il est possible d'ajouter un magasin d’objet dont le nom est la chaîne vide (!).</dd>
 <dt><code>optionalParameters</code> {{optional_inline}}</dt>
 <dd>
 <p>Un objet qui permet de décrire plus finement le magasin d'objets avec ces propriétés :</p>

 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Propriété</th>
    <th scope="col">Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>keyPath</code></td>
    <td>Le chemin de la clé utilisé par le magasin d'objet. Si ce paramètre est vide ou non spécifié, le magasin d'objets utilisera une clé externe. Le <code>keyPath</code> peut aussi être un tableau.</td>
   </tr>
   <tr>
    <td><code>autoIncrement</code></td>
    <td>Si <code>true</code>, le magasin d’objet implémentera un générateur de clé. La valeur par défaut est <code>false</code>.</td>
   </tr>
  </tbody>
 </table>

 <p>Les autres propriétés seront ignorés.</p>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<dl>
 <dt>{{domxref("IDBObjectStore")}}</dt>
 <dd>Le magasin d'objets qui vient d'être créé.</dd>
</dl>

<h2 id="Exceptions">Exceptions</h2>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd>Cette exception {{domxref("DOMException")}} est levée si la méthode n'est pas appelée lors d'une transaction en mode <code>versionchange</code>. Pour les anciens navigateurs basés sur WebKit, il faut d'abord appeler {{domxref("IDBVersionChangeRequest.setVersion")}}.</dd>
 <dt><code>TransactionInactiveError</code></dt>
 <dd>Cette exception {{domxref("DOMException")}} est levée si la méthode est appelée sur une base de données qui n'existe pas (elle a par exemple été effacée). Dans les versions antérieures à Firefox 41, ce dernier levait une erreur <code>InvalidStateError</code>, cela est désormais corrigé (cf. {{bug("1176165")}}).</dd>
 <dt><code>ConstraintError</code></dt>
 <dd>Un magasin d'objet portant le même nom (la casse est importante) existe déjà dans cette base de donnée.</dd>
 <dt><code>InvalidAccessError</code></dt>
 <dd>Si la valeur <code>autoIncrement</code> est à <code>true</code> et que le chemin de clé n'est pas renseigné ou est un tableau vide.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js"> // Ouverture de la base de données
  var request = window.indexedDB.open("toDoList", 4);

  /* Gestionnaire d'événement qui intervient lors de la
     mise en place d'une nouvelle version de la base de
     données, que la base n'existe pas et soit ajoutée
     ou qu'un nouveau numéro de version soit passé à
     window.indexedDB.open
     Il est seulement mis en œuvre dans les
     navigateurs récents */
  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '&lt;li&gt;Erreur du chargement de la base de données.&lt;/li&gt;';
    };

    // On ajoute un magasin d'objet à la base de données

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // définition des index de ce magasin d'objets

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '&lt;li&gt;Magasin d\'objet ajouté.&lt;/li&gt;';
  };
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBDatabase-createObjectStore-IDBObjectStore-DOMString-name-IDBObjectStoreParameters-optionalParameters', 'createObjectStore()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBDatabase.createObjectStore")}}</p>

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
