---
title: IndexedDB
slug: Web/API/IndexedDB_API
---

{{DefaultAPISidebar("IndexedDB")}}

IndexedDB est une API de bas niveau qui permet le stockage côté client de quantités importantes de données structurées, incluant des fichiers/blobs. Cette API utilise des index afin de permettre des recherches performantes sur ces données. Alors que [Web Storage](/fr/docs/Web/API/Web_Storage_API) est utile pour stocker de petites quantités de données, il est moins utile pour stocker de grandes quantités de données structurées. IndexedDB fournit une solution. Cette page est le point d'entrée pour tout ce qui concerne IndexedDB sur MDN - vous y trouverez les liens vers la référence complète de l'API et les guides d'utilisation, le support par les navigateurs, et quelques explications des concepts clés.

{{AvailableInWorkers}}

> **Note :** L'API IndexedDB est puissante, mais elle peut sembler trop compliquée dans les cas simples. Si vous préferez une API plus simple, essayez des librairies comme [localForage](https://localforage.github.io/localForage/), [dexie.js](http://www.dexie.org/), [ZangoDB](https://github.com/erikolson186/zangodb), [PouchDB](https://pouchdb.com/), [idb](https://www.npmjs.com/package/idb), [idb-keyval](https://www.npmjs.com/package/idb-keyval), [JsStore](http://jsstore.net/) et [lovefield](https://github.com/google/lovefield) qui offrent de nombreux avantages aux développeurs de IndexedDB.

## Concepts clés et utilisation

IndexedDB est un système de gestion de base de données transactionnel, similaire à un SGBD relationnel basé sur SQL. Cependant contrairement aux SGBD relationnels, qui utilisent des tables avec des colonnes fixes, IndexedDB est une base de données orientée objet basée sur JavaScript. IndexedDB vous permet de stocker et de récupérer des objets qui sont indexés avec une **clef**; tout objet supporté par [l'algorithme de clônage structuré](/fr/docs/Web/API/Web_Workers_API/algorithme_clonage_structure) peut être stocké. Vous devez spécifier le schéma de la base de données, ouvrir une connexion à votre base de données, puis récupérer et mettre à jour des données dans une série de **transactions**.

- Plus d'informations sur les [concepts derrière IndexedDB](/fr/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB).
- Apprenez à utiliser IndexedDB de manière asynchrone à partir des principes fondamentaux grâce à notre guide [Utiliser IndexedDB](/fr/docs/IndexedDB/Using_IndexedDB).
- Combinez IndexedDB pour le stockage des données en mode déconnecté avec les Service Workers pour stocker des assets en mode déconnecté, comme précisé dans [Faire fonctionner les PWAs en mode déconnecté grâce aux Service workers](/fr/docs/Web/Progressive_web_apps/Offline_Service_workers).

> **Note :** Comme la plupart des solutions de stockage en ligne, IndexedDB suit la politique [same-origin policy](http://www.w3.org/Security/wiki/Same_Origin_Policy). Alors même que vous pouvez accèder à des données stockées au sein d'un domaine, vous ne pouvez pas accéder à des données sur plusieurs domaines.

### Synchrone et asynchrone

Les opérations effectuées par IndexedDB sont réalisées de manière asynchrone, afin de ne pas bloquer l'application. IndexedDB comprend à la fois une API asynchrone et une API synchrone. L'API synchrone était à l'origine uniquement destinée pour un usage avec les [Web workers](/fr/docs/Utilisation_des_web_workers), mais elle a été retirée de la spécification parce qu'il était difficile de savoir si elle était nécessaire. Cependant l'API synchrone pourrait être ré-integrée si il y a une demande suffisante de la part des développeurs web.

### Limites de stockage et critères d'éviction

Il y a un certain nombre de technologies web pour stocker différents types de données côté client (par exemple, sur votre disque local). IndexedDB est la plus couramment citée. Le processus par lequel le navigateur calcule combien d'espace il doit allouer aux données web, et ce qu'il doit supprimer quand la limite est atteinte, n'est pas simple et varie entre les différents navigateurs. L'article [Limites de stockage du navigateur et critères d'éviction](/fr/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) tente d'expliquer ce fonctionnement, au moins pour le cas de Firefox.

## Interfaces

Pour accèder à une base de données, il faut apeller [`open()`](/fr/docs/Web/API/IDBFactory.open) sur l'attribut [`indexedDB`](/fr/docs/Web/API/IDBEnvironment.indexedDB) d'un objet [window](/fr/docs/DOM/window). Cette méthode retourne un objet {{domxref("IDBRequest")}}; Les opérations asynchrones communiquent avec l'application appelante en déclenchant des évènements sur les objets {{domxref("IDBRequest")}}.

### Se connecter à la base de données

- {{domxref("IDBEnvironment")}}
  - : Fournit un accès aux fonctionnalités d'IndexedDB. Implémenté par les objets {{domxref("window")}} et {{domxref("worker")}}.
- {{domxref("IDBFactory")}}
  - : Fournit un accès à la base de données.C'est l'interface implémentée par l'objet global [`indexedDB`](/fr/docs/Web/API/IDBEnvironment.indexedDB) et c'est donc le point d'entrée de l'API.
- {{domxref("IDBOpenDBRequest")}}
  - : Représente une requête d'ouverture de la base de données.
- {{domxref("IDBDatabase")}}
  - : Représente une connexion à la base de données. C'est le seul moyen d'obtenir une transaction sur la base de données.

### Récupérer et modifier les données

- {{domxref("IDBTransaction")}}
  - : Représente une transaction. Vous créez une transaction sur la base de données, spécifiez la portée (comme à quel magasin d'objets vous souhaitez accèder), et déterminez le type d'accès désiré (lecture seule ou lecture et écriture).
- {{domxref("IDBRequest")}}
  - : Interface générique qui récupère les requêtes à la base de données et fournit un accès aux résultats.
- {{domxref("IDBObjectStore")}}
  - : Représente un magasin d'objets qui permet l'accès à un ensemble de données d'une base de données IndexedDB, recherché par clé primaire.
- {{domxref("IDBIndex")}}
  - : Permet aussi d'accèder à un sous-ensemble de données d'une base IndexedDB mais utilise un index pour récupérer les enregistrements, au lieu d'une clé primaire. C'est parfois plus rapide qu'un usage de {{domxref("IDBObjectStore")}}.
- {{domxref("IDBCursor")}}
  - : Itérateur sur les magasins d'objets et les index.
- {{domxref("IDBCursorWithValue")}}
  - : Itérateur sur les magasins d'objets et les index et retourne la valeur courante du curseur.
- {{domxref("IDBKeyRange")}}
  - : Définit une portée de valeurs qui peut être utilisée pour récupérer des données de la base de données dans une certaine portée.
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : Définit une portée de valeurs qui peut être utilisée pour récupérer des données de la base de données dans une certaine portée, triées en fonction des règles de la localisation spécifiée pour un certain index (voir [`createIndex()`'s optionalParameters](/fr/docs/Web/API/IDBObjectStore/createIndex#Parameters)).

### Interfaces d'événements personnalisés

Cette spécification provoque des évènements avec les interfaces personnalisées suivantes:

- {{domxref("IDBVersionChangeEvent")}}
  - : `L'interface IDBVersionChangeEvent` indique que la version de la base de données à changé, résultat de la fonction de saisie d'un évènement {{domxref("IDBOpenDBRequest.onupgradeneeded")}}.

### Interfaces obsolètes

Une précedente version des spécifications a défini ces interfaces, désormais supprimées. Elles sont toujours documentées dans le cas où vous avez besoin de mettre à jour du code déja écrit :

- {{domxref("IDBVersionChangeRequest")}} {{deprecated_inline}}
  - : Représente une requête de changement de version de la base de données. Le moyen pour changer de version de la base de données a désormais changé (avec un appel de {{domxref("IDBFactory.open")}} sans aussi appeler {{domxref("IDBDatabase.setVersion")}}), et l'interface {{domxref("IDBOpenDBRequest")}} a désormais la fonction de l'ancienne (supprimée) {{domxref("IDBVersionChangeRequest")}}.
- {{domxref("IDBDatabaseException")}} {{deprecated_inline}}
  - : Représente une exception (erreur) qui peut survenir durant les opérations sur la base de données.
- {{domxref("IDBTransactionSync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBTransaction")}}.
- {{domxref("IDBObjectStoreSync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBObjectStore")}}.
- {{domxref("IDBIndexSync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBIndex")}}.
- {{domxref("IDBFactorySync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBFactory")}}.
- {{domxref("IDBEnvironmentSync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBEnvironment")}}.
- {{domxref("IDBDatabaseSync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBDatabase")}}.
- {{domxref("IDBCursorSync")}} {{deprecated_inline}}
  - : Version synchrone de {{domxref("IDBCursor")}}.

## Exemples

- [eLibri:](http://marco-c.github.io/eLibri/) Une application puissante de bibliothèque et de lecteur de livres électroniques, écrit par Marco Castelluccio, gagnant du _DevDerby IndexedDB_ de Mozilla.
- [To-do Notifications](https://github.com/chrisdavidmills/to-do-notifications/tree/gh-pages) ([voir la démonstration en ligne](https://mdn.github.io/dom-examples/to-do-notifications/)): L'application de référence pour les exemples de la documentation.
- [Stocker des images et des fichiers dans IndexedDB](http://hacks.mozilla.org/2012/02/storing-images-and-files-in-indexeddb/)

## Spécifications

{{Specifications}}

## Voir aussi

- [localForage](https://localforage.github.io/localForage/): Un _Polyfill_ fournissant une syntaxe clé-valeurs simple pour un stockage côté client; il utilise IndexedDB en arrière plan, mais se retourne d'abord sur WebSQL puis sur localStorage pour les navigateurs qui ne supportent pas IndexedDB.
- [dexie.js](http://www.dexie.org/) : Un _wrapper_ pour IndexedDB qui permet un développement plus rapide avec une syntaxe simple.
- [ZangoDB](https://github.com/erikolson186/zangodb)&nbsp;: Une interface comme MongoDB pour IndexedDB qui prend en charge la plupart des fonctionnalités familières de filtrage, projection, tri, mise à jour et agrégation de MongoDB.
- [JsStore](https://jsstore.net/)&nbsp;: Un contenu IndexedDB avec SQL comme syntaxe.
- [MiniMongo](https://github.com/mWater/minimongo)
- [PouchDB](https://pouchdb.com)
