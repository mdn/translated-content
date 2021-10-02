---
title: IndexedDB
slug: Web/API/IndexedDB_API
tags:
  - API
  - Avancé
  - Bases de données
  - IndexedDB
  - Stockage
translation_of: Web/API/IndexedDB_API
original_slug: Web/API/API_IndexedDB
---
<p>{{DefaultAPISidebar("IndexedDB")}}</p>

<p>IndexedDB est une API de bas niveau qui permet le stockage côté client de quantités importantes de données structurées, incluant des fichiers/blobs. Cette API utilise des index afin de permettre des recherches performantes sur ces données. Alors que <a href="/fr/docs/Web/API/Web_Storage_API">Web Storage</a> est utile pour stocker de petites quantités de données, il est moins utile pour stocker de grandes quantités de données structurées. IndexedDB fournit une solution. Cette page est le point d'entrée pour tout ce qui concerne IndexedDB sur MDN - vous y trouverez les liens vers la référence complète de l'API et les guides d'utilisation, le support par les navigateurs, et quelques explications des concepts clés.</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
<p><strong>Note :</strong> L'API IndexedDB est puissante, mais elle peut sembler trop compliquée dans les cas simples. Si vous préferez une API plus simple, essayez des librairies comme <a href="https://localforage.github.io/localForage/">localForage</a>, <a href="http://www.dexie.org/">dexie.js</a>, <a href="https://github.com/erikolson186/zangodb">ZangoDB</a>, <a href="https://pouchdb.com/">PouchDB</a>, <a href="https://www.npmjs.com/package/idb">idb</a>, <a href="https://www.npmjs.com/package/idb-keyval">idb-keyval</a>, <a href="http://jsstore.net/">JsStore</a> et <a href="https://github.com/google/lovefield">lovefield</a> qui offrent de nombreux avantages aux développeurs de IndexedDB.</p>
</div>

<h2 id="Concepts_clés_et_utilisation">Concepts clés et utilisation</h2>

<p>IndexedDB est un système de gestion de base de données transactionnel, similaire à un SGBD relationnel basé sur SQL. Cependant contrairement aux SGBD relationnels, qui utilisent des tables avec des colonnes fixes, IndexedDB est une base de données orientée objet basée sur JavaScript. IndexedDB vous permet de stocker et de récupérer des objets qui sont indexés avec une <strong>clef</strong>; tout objet supporté par <a href="/fr/docs/Web/API/Web_Workers_API/algorithme_clonage_structure">l'algorithme de clônage structuré</a> peut être stocké. Vous devez spécifier le schéma de la base de données, ouvrir une connexion à votre base de données, puis récupérer et mettre à jour des données dans une série de <strong>transactions</strong>.</p>

<ul>
 <li>Plus d'informations sur les <a href="/fr/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB">concepts derrière IndexedDB</a>.</li>
 <li>Apprenez à utiliser IndexedDB de manière asynchrone à partir des principes fondamentaux grâce à notre guide <a href="/fr/docs/IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a>.</li>
 <li>Combinez IndexedDB pour le stockage des données en mode déconnecté avec les Service Workers pour stocker des assets en mode déconnecté, comme précisé dans <a href="/fr/docs/Web/Progressive_web_apps/Offline_Service_workers">Faire fonctionner les PWAs en mode déconnecté grâce aux Service workers</a>.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Comme la plupart des solutions de stockage en ligne, IndexedDB suit la politique <a href="http://www.w3.org/Security/wiki/Same_Origin_Policy">same-origin policy</a>. Alors même que vous pouvez accèder à des données stockées au sein d'un domaine, vous ne pouvez pas accéder à des données sur plusieurs domaines.</p>
</div>

<h3 id="Synchrone_et_asynchrone">Synchrone et asynchrone</h3>

<p>Les opérations effectuées par IndexedDB sont réalisées de manière asynchrone, afin de ne pas bloquer l'application. IndexedDB comprend à la fois une API asynchrone et une API synchrone. L'API synchrone était à l'origine uniquement destinée pour un usage avec les <a href="/fr/docs/Utilisation_des_web_workers">Web workers</a>, mais elle a été retirée de la spécification parce qu'il était difficile de savoir si elle était nécessaire. Cependant l'API synchrone pourrait être ré-integrée si il y a une demande suffisante de la part des développeurs web.</p>

<h3 id="Limites_de_stockage_et_critères_déviction">Limites de stockage et critères d'éviction</h3>

<p>Il y a un certain nombre de technologies web pour stocker différents types de données côté client (par exemple sur votre disque local). IndexedDB est la plus couramment citée. Le processus par lequel le navigateur calcule combien d'espace il doit allouer aux données web, et ce qu'il doit supprimer quand la limite est atteinte, n'est pas simple et varie entre les différents navigateurs.<a href="/fr/docs/IndexedDB/Browser_storage_limits_and_eviction_criteria"> L'article "limites de stockage des navigateurs et critères d'éviction"</a> tente d'expliquer ce fonctionnement, au moins pour le cas de Firefox.</p>

<h2 id="Interfaces">Interfaces</h2>

<p>Pour accèder à une base de données, il faut apeller <a href="/fr/docs/Web/API/IDBFactory.open"><code>open()</code></a> sur l'attribut <a href="/fr/docs/Web/API/IDBEnvironment.indexedDB"><code>indexedDB</code></a> d'un objet <a href="/fr/docs/DOM/window">window</a>. Cette méthode retourne un objet {{domxref("IDBRequest")}}; Les opérations asynchrones communiquent avec l'application appelante en déclenchant des évènements sur les objets {{domxref("IDBRequest")}}.</p>

<h3 id="Se_connecter_à_la_base_de_données">Se connecter à la base de données</h3>

<dl>
 <dt>{{domxref("IDBEnvironment")}}</dt>
 <dd>Fournit un accès aux fonctionnalités d'IndexedDB. Implémenté par les objets {{domxref("window")}} et {{domxref("worker")}}.</dd>
 <dt>{{domxref("IDBFactory")}}</dt>
 <dd>Fournit un accès à la base de données.C'est l'interface implémentée par l'objet global <a href="/fr/docs/Web/API/IDBEnvironment.indexedDB"><code>indexedDB</code></a> et c'est donc le point d'entrée de l'API.</dd>
 <dt>{{domxref("IDBOpenDBRequest")}}</dt>
 <dd>Représente une requête d'ouverture de la base de données.</dd>
 <dt>{{domxref("IDBDatabase")}}</dt>
 <dd>Représente une connexion à la base de données. C'est le seul moyen d'obtenir une transaction sur la base de données.</dd>
</dl>

<h3 id="Récupérer_et_modifier_les_données">Récupérer et modifier les données</h3>

<dl>
 <dt>{{domxref("IDBTransaction")}}</dt>
 <dd>Représente une transaction. Vous créez une transaction sur la base de données, spécifiez la portée (comme à quel magasin d'objets vous souhaitez accèder), et déterminez le type d'accès désiré (lecture seule ou lecture et écriture).</dd>
 <dt>{{domxref("IDBRequest")}}</dt>
 <dd>Interface générique qui récupère les requêtes à la base de données et fournit un accès aux résultats.</dd>
 <dt>{{domxref("IDBObjectStore")}}</dt>
 <dd>Représente un magasin d'objets qui permet l'accès à un ensemble de données d'une base de données IndexedDB, recherché par clé primaire.</dd>
 <dt>{{domxref("IDBIndex")}}</dt>
 <dd>Permet aussi d'accèder à un sous-ensemble de données d'une base IndexedDB mais utilise un index pour récupérer les enregistrements, au lieu d'une clé primaire. C'est parfois plus rapide qu'un usage de {{domxref("IDBObjectStore")}}.</dd>
 <dt>{{domxref("IDBCursor")}}</dt>
 <dd>Itérateur sur les magasins d'objets et les index.</dd>
 <dt>{{domxref("IDBCursorWithValue")}}</dt>
 <dd>Itérateur sur les magasins d'objets et les index et retourne la valeur courante du curseur.</dd>
 <dt>{{domxref("IDBKeyRange")}}</dt>
 <dd>Définit une portée de valeurs qui peut être utilisée pour récupérer des données de la base de données dans une certaine portée.</dd>
 <dt>{{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}</dt>
 <dd>Définit une portée de valeurs qui peut être utilisée pour récupérer des données de la base de données dans une certaine portée, triées en fonction des règles de la localisation spécifiée pour un certain index (voir <a href="/fr/docs/Web/API/IDBObjectStore/createIndex#Parameters"><code>createIndex()</code>'s optionalParameters</a>).</dd>
</dl>

<h3 id="Interfaces_dévénements_personnalisés">Interfaces d'événements personnalisés</h3>

<p>Cette spécification provoque des évènements avec les interfaces personnalisées suivantes:</p>

<dl>
 <dt>{{domxref("IDBVersionChangeEvent")}}</dt>
 <dd><code>L'interface IDBVersionChangeEvent</code> indique que la version de la base de données à changé, résultat de la fonction de saisie d'un évènement  {{domxref("IDBOpenDBRequest.onupgradeneeded")}}.</dd>
</dl>

<h3 id="Interfaces_obsolètes">Interfaces obsolètes</h3>

<p>Une précedente version des spécifications a défini ces interfaces, désormais supprimées. Elles sont toujours documentées dans le cas où vous avez besoin de mettre à jour du code déja écrit :</p>

<dl>
 <dt>{{domxref("IDBVersionChangeRequest")}} {{obsolete_inline}}</dt>
 <dd>Représente une requête de changement de version de la base de données. Le moyen pour changer de version de la base de données a désormais changé (avec un appel de {{domxref("IDBFactory.open")}} sans aussi appeler {{domxref("IDBDatabase.setVersion")}}), et l'interface  {{domxref("IDBOpenDBRequest")}} a désormais la fonction de l'ancienne (supprimée) {{domxref("IDBVersionChangeRequest")}}.</dd>
 <dt>{{domxref("IDBDatabaseException")}}  {{obsolete_inline}}</dt>
 <dd>Représente une exception (erreur) qui peut survenir durant les opérations sur la base de données.</dd>
 <dt>{{domxref("IDBTransactionSync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de {{domxref("IDBTransaction")}}.</dd>
 <dt>{{domxref("IDBObjectStoreSync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de {{domxref("IDBObjectStore")}}.</dd>
 <dt>{{domxref("IDBIndexSync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de  {{domxref("IDBIndex")}}.</dd>
 <dt>{{domxref("IDBFactorySync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de {{domxref("IDBFactory")}}.</dd>
 <dt>{{domxref("IDBEnvironmentSync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de {{domxref("IDBEnvironment")}}.</dd>
 <dt>{{domxref("IDBDatabaseSync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de {{domxref("IDBDatabase")}}.</dd>
 <dt>{{domxref("IDBCursorSync")}} {{obsolete_inline}}</dt>
 <dd>Version synchrone de {{domxref("IDBCursor")}}.</dd>
</dl>

<h2 id="Example">Exemples</h2>

<ul>
 <li><a href="http://marco-c.github.io/eLibri/">eLibri:</a> Une application puissante de bibliothèque et de lecteur de livres électroniques, écrit par Marco Castelluccio, gagnant du <em>DevDerby IndexedDB</em> de Mozilla.</li>
 <li><a href="https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">voir la démonstration en ligne</a>): L'application de référence pour les exemples de la documentation.</li>
 <li><a href="http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/">Stocker des images et des fichiers dans IndexedDB</a></li>
</ul>

<h2 id="Browser_compatibility">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="https://localforage.github.io/localForage/">localForage</a>: Un <em>Polyfill</em> fournissant une syntaxe clé-valeurs simple pour un stockage côté client; il utilise IndexedDB en arrière plan, mais se retourne d'abord sur WebSQL puis sur localStorage pour les navigateurs qui ne supportent pas IndexedDB.</li>
 <li><a href="http://www.dexie.org/">dexie.js</a> : Un <em>wrapper </em>pour IndexedDB qui permet un développement plus rapide avec une syntaxe simple.</li>
 <li><a href="https://github.com/erikolson186/zangodb">ZangoDB </a>: Une interface MongoDB-like pour indexedDB qui prend en charge la plupart des fonctionnalités familières de filtrage, projection, tri, mise à jour et agrégation de MongoDB.</li>
 <li><a href="http://jsstore.net/">JsStore </a>: Un contenu indexedDB avec SQL comme syntaxe.</li>
 <li><a href="https://github.com/mWater/minimongo">MiniMongo</a></li>
 <li><a href="https://pouchdb.com">PouchDB</a></li>
</ul>
