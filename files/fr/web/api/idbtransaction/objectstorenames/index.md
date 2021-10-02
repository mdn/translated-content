---
title: IDBTransaction.objectStoreNames
slug: Web/API/IDBTransaction/ObjectStoreNames
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/ObjectStoreNames
---
<div>{{APIRef("IndexedDB")}}{{SeeCompatTable}}</div>

<p>La propriété <strong><code>objectStoreNames</code></strong> de l'interface {{domxref("IDBTransaction")}} renvoie la {{domxref("DOMStringList","liste")}} des noms des magasins d'objets de la {{domxref("IDBTransaction","transaction")}} .</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var maBaseDeDonnees = transactionObj.objectStoreNames;</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une liste {{domxref("DOMStringList")}} contenant les noms des magasins d'objets liés à la transaction ({{domxref("IDBTransaction")}}).</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB2', '#dom-idbtransaction-objectstorenames', 'db')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.objectStoreNames")}}</p>

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
