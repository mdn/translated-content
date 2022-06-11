---
title: Utiliser IndexedDB
slug: Web/API/IndexedDB_API/Using_IndexedDB
tags:
  - Avancé
  - Base de données
  - Guide
  - IndexedDB
  - Stockage
  - Tutoriel
translation_of: Web/API/IndexedDB_API/Using_IndexedDB
original_slug: Web/API/API_IndexedDB/Using_IndexedDB
---
IndexedDB est un moyen de stocker des données de manière persistante dans un navigateur. Cela vous laisse créer des applications web avec de riches possibilités de requêtes indépendamment de la disponibilité du réseau puisque vos applications peuvent fonctionner en ligne ou hors-ligne.

## À propos de ce document

Ce tutoriel vous guide à travers l'utilisation de l'API asynchrone de IndexedDB. Si vous n'êtes pas familier avec le principe de IndexedDB, vous devriez d'abord lire [les concepts basiques d'IndexedDB](/fr/docs/Web/API/Indexeddb_API/Basic_Concepts_Behind_IndexedDB).

Pour la documentation de référence sur l'API d'IndexedDB, voyez l'article [IndexedDB](/fr/docs/Web/API/Indexeddb_API) et ses sous-parties, qui détaille les types d'objets utilisés par IndexedDB, ainsi que les méthodes sur l'API asynchrone (l'API synchrone a été retirée de la spécification).

## Modèle de base

Le modèle de base qu'IndexedDB utilise est le suivant :

1.  Ouvrir une base de données.
2.  Créer un objet de stockage dans la base de données.
3.  Démarrer une transaction, et faire des requêtes pour faire quelques opérations sur des bases de données, comme ajouter, ou récupérer des données.
4.  Attendre que l'exécution soit terminée, en écoutant le bon type d'événement DOM.
5.  Faire quelque chose avec les résultats (qui peuvent être trouvés dans l'objet de la requête).

Maintenant que nous avons ces grands concepts en poche, nous pouvons voir des choses plus concrètes.

## Créer et structurer l'objet de stockage

Étant donné que la spécification évolue encore, les implémentations actuelles de IndexedDB se cachent sous les préfixes du navigateur. Les fournisseurs de navigateurs peuvent avoir des implémentations différentes de l'API IndexedDB standard jusqu'à ce que la spécification se soit solidifiée. Mais une fois qu'un consensus est atteint sur la norme, les fournisseurs l'implémentent sans les balises de préfixe. Actuellement, certaines implémentations ont supprimé le préfixe : Internet Explorer 10, Firefox 16, Chrome 24. Lorsqu'ils utilisent un préfixe, les navigateurs basés sur Gecko utilisent le préfixe `moz`, tandis que les navigateurs WebKit utilisent le préfixe `webkit`.

### Utiliser une version expérimentale d'IndexedDB

Au cas où vous souhaiteriez tester votre code dans des navigateurs qui utilisent toujours un préfixe, vous pouvez utiliser le code suivant :

```js
// Sur la ligne suivante, vous devez inclure les préfixes des implémentations que vous souhaitez tester.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// N'UTILISEZ PAS "var indexedDB = ..." si vous n'êtes pas dans une fonction.
// De plus, vous pourriez avoir besoin de réferences à des objets window.IDB*:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
// (Mozilla n'a jamais préfixé ces objets, donc nous n'avons pas besoin de window.mozIDB*)
```

Faites attention aux implémentations qui utilisent un préfixe ; elles peuvent être boguées, incomplètes, voire suivre une ancienne version de la spécification. Il n'est donc pas recommandé d'utiliser en production. Il serait préférable de ne pas supporter ces navigateurs :

```js
if (!window.indexedDB) {
    window.alert("Votre navigateur ne supporte pas une version stable d'IndexedDB. Quelques fonctionnalités ne seront pas disponibles.")
}
```

### Ouvrir une base de données

On commence l'ensemble du processus comme ceci :

```js
// Ouvrons notre première base
var request = window.indexedDB.open("MyTestDatabase", 3);
```

Vous avez vu ? Ouvrir une base de données est comme n'importe quelle autre opération — vous avez juste à le "demander".

La requête "open" n'ouvre pas la base de données ni ne démarre une transaction aussitôt. L'appel de la fonction `open()` retourne un objet [`IDBOpenDBRequest`](/en-US/docs/IndexedDB/IDBOpenDBRequest) avec un résultat  (success) ou une valeur d'erreur qui permet de la gérer comme un évènement. La plupart des autres fonctions asynchrones dans IndexedDB fonctionnent de la même façon ; Elles retournent un objet [`IDBRequest`](/en-US/docs/IndexedDB/IDBRequest) avec le résultat ou une erreur. Le résultat de la fonction "open" est une instance de [`IDBDatabase`](/en-US/docs/IndexedDB/IDBDatabase).

Le second paramètre de la méthode open est la version de la base de données. La version de la base détermine le schéma de celle-ci — Les objets stockés dans la base de données et leur structure. Si la base de données n'existe pas déjà, elle est créée via l'opération `open()`, puis, un événement `onupgradeneeded` est déclenché et vous créez le schéma de la base dans le gestionnaire pour cet événement. Si la base de données existe, mais que vous spécifiez un numéro de version plus élevé, un événement `onupgradeneeded` est déclenché immédiatement, vous permettant de mettre à jour le schéma dans son gestionnaire – plus d'informations dans [Updating the version of the database](#Updating_the_version_of_the_database) plus bas et la page référence {{ domxref("IDBFactory.open") }}.

> **Attention :** Le numéro de version est un nombre "`unsigned long long`" ce qui signifie qu'il peut s'agir d'un entier très grand. Cela veut également dire que vous ne pouvez pas utiliser de réél, sinon, il sera converti au nombre entier le plus proche (inférieur) et la transaction peut ne pas démarrer ou ne pas déclencher l'événement `upgradeneeded`. Par exemple, n'utilisez pas 2.4 comme un numéro de version :
> `var request = indexedDB.open("MyTestDatabase", 2.4); // Ne faites pas ça, même si la version sera arrondie à 2`

#### Générer des gestionnaires

La première chose que vous ferez avec la plupart des requêtes que vous générerez sera d'ajouter des gestionnaires de succès ou d'erreurs :

```js
request.onerror = function(event) {
  // Faire quelque chose avec request.errorCode !
};
request.onsuccess = function(event) {
  // Faire quelque chose avec request.result !
};
```

Laquelle de ces deux fonctions, `onsuccess()` or `onerror()`, sera appelée ? Si tout se passe bien, un évènement success (qui est un évènement DOM dont la propriété `type` est à `"success"`) est déclenché avec `request` comme cible. Une fois déclenché, la fonction `onsuccess()` de `request` est lancée avec l'évènement success comme argument. S’il y avait un quelconque problème, un évènement erreur (qui est un évènement DOM dont la propriété `type` est définie à `"error"`) est lancée dans `request`. Cela déclenche la fonction `onerror()` avec l'évènement d'erreur comme argument.

L'API IndexedDB est conçue pour minimiser le recours à la gestion des erreurs, donc vous ne serez pas amené à voir beaucoup d'évènements erreurs (du moins, pas tant que vous utilisez l'API !). Cependant, dans le cas d'une ouverture de base de données, il y a quelques conditions qui génèrent des évènements d'erreurs. Le problème le plus courant est que l'utilisateur a décidé d'interdire l'accès à la création de base de données. Un des principaux objectifs d’IndexedDB est de permettre un stockage important de données pour l'utilisation hors-ligne. (Pour en savoir plus sur la capacité de stockage de chaque navigateur, voyez [Storage limits](/en/IndexedDB#Storage_limits)).

Évidemment, les navigateurs ne peuvent permettre qu'une publicité en ligne ou un site malicieux pollue votre ordinateur, donc ils informent l’utilisateur la première fois qu'une application web tente d'ouvrir un espace de stockage IndexedDB. L'utilisateur peut choisir de permettre ou refuser l'accès. En ce qui concerne l’utilisation d’IndexedDB en mode privé, les données restent en mémoire jusqu’à ce que la session privée soit close (Navigation privée pour Firefox et mode Incognito pour Chrome, mais dans Firefox, cela [n'est pas encore implémenté](https://bugzilla.mozilla.org/show_bug.cgi?id=781982) depuis novembre 2015, aussi vous ne pouvez pas utiliser IndexedDB dans le mode privé de Firefo du tout).

Maintenant, en admettant qu’un utilisateur ait accepté la création d'une base, et que vous receviez un évènement "success" qui déclenche le callback _(rappel)_ "success" ; que se passe-il après ? La requête a génèré un appel à `indexedDB.open()`, donc `request.result` est une instance de `IDBDatabase`, et vous voulez garder en mémoire cela pour plus tard. Votre code devrait ressembler à ceci :

```js
var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function(event) {
  alert("Pourquoi ne permettez-vous pas à ma web app d'utiliser IndexedDB?!");
};
request.onsuccess = function(event) {
  db = event.target.result;
};
```

#### Gérer les erreurs

Comme mentionné ci-dessus, les évènements d’erreur génèrent des info-bulles. Ils sont rattachés à la requête qui a généré l’erreur, puis la bulle de l'évènement est transmis à la transaction, et enfin à l'objet de la base de données. Si vous souhaitez éviter d'ajouter un gestionnaire d'erreurs à chaque requête, vous pouvez en ajouter un unique à l'objet de la base de donnée, de cette manière :

```js
db.onerror = function(event) {
  // Gestionnaire d'erreur générique pour toutes les erreurs de requêtes de cette base
  alert("Database error: " + event.target.errorCode);
};
```

Une des erreurs courantes possibles lorsqu'on ouvre une base de données, c'est `VER_ERR`. Celle-ci indique que la version de la base de données stockée sur le disque est _supérieure_ à la version que vous êtes en train d'essayer d'ouvrir. C'est un cas qui doit toujours être pris en considération par le gestionnaire d'erreurs.

### Créer ou mettre à jour une version de base de données

Lorsque vous créez une nouvelle base de données, ou que vous augmentez le numéro de version d'une base existante (en spécifiant un numéro de version supérieur à celui que vous aviez auparavant, lors de [Ouvrir une base de données](#ouvrir_une_base_de_données)), l'évènement `onupgradeneeded` sera déclenché et un objet `IDBVersionChangeEvent` sera passé à un évènement `onversionchange` dans `request.result` (la variable `db` dans l'exemple). Dans le gestionnaire d’évènement `upgradeneeded`, vous devez créer les objets de stockage requis pour cette version de base :

```js
// Cet évènement est seulement implémenté dans des navigateurs récents
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Crée un objet de stockage pour cette base de données
  var objectStore = db.createObjectStore("name", { keyPath: "myKey" });
};
```

Dans ce cas, la base de données disposera aussitôt des objets de stockage de la version précédente de la base, donc vous n’aurez pas à créer de nouveau ces objets de stockage. Vous aurez seulement besoin de créer de nouveaux objets de stockage, ou d'en supprimer de la version précédente si vous n'en avez plus besoin. Si vous avez besoin de changer un objet de stockage existant  (par exemple, pour changer la `keyPath`), alors vous devez supprimer l’ancien objet de stockage et le créer à nouveau avec les nouveaux paramètres. Notez que ceci supprimera les informations dans l'objet de stockage ! Si vous avez besoin de sauvegarder ces informations, vous devez les lire et les sauvegarder quelque part avant de mettre à jour la base de données.

Essayer de créer un objet de stockage avec un nom déjà existant (ou essayer de supprimer un objet de stockage avec un nom qui n'existe pas encore) renverra une erreur.

Si l'évènement `onupgradeneeded` quitte avec succès, le gestionnaire `onsuccess` de la requête d'ouverture de la base de données sera déclenché.

Blink/Webkit supporte la version courante de la spécification, telle que livrée dans Chrome 23+ et Opera 17+ ; IE10+ également. Les autres implémentations plus anciennes ne prennent pas en charge `indexedDB.open(name, version).onupgradeneeded`. Pour plus d'informations sur la mise à jour de version de base de données sur les anciens Webkit/Blink, référez vous à [IDBDatabase reference article](/en/IndexedDB/IDBDatabase#setVersion%28%29_.0A.0ADeprecated).

### Structurer la base de données

Maintenant, structurons la base de données. IndexedDB utilise des objets de stockage plutôt que des tableaux, et une seule base de données peut contenir un nombre quelconque d'objets de stockage. Chaque fois qu'une valeur est stockée dans un objet de stockage, elle est associée à une clé. Il y a différentes manières pour une clé d'être définie, selon que l'objet de stockage utilise un [key path](/en/IndexedDB#gloss_key_path) _(chemin de clé)_ ou un [key generator](/en/IndexedDB#gloss_key_generator) _(générateur de clé)_.

Le tableau suivant montre les différentes manières d'attribuer des clés.

| Key Path _chemin de clé_ (`keyPath`) | Key Generator _générateur de clé_ (`autoIncrement`) | Description                                                                                                                                                                                                                                                                                                          |
| ------------------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Non                                  | Non                                                 | L'objet de stockage peut contenir n'importe quel type de valeur, même des valeurs primitives comme des nombres ou des chaînes de caractères. Vous devez fournir un argument clé séparé chaque fois que vous souhaitez ajouter une nouvelle valeur.                                                                   |
| Oui                                  | Non                                                 | L'objet de stockage peut contenir des objets JavaScript. Les objets doivent avoir une propriété qui a le même nom que le key path.                                                                                                                                                                                   |
| Non                                  | Oui                                                 | L'objet de stockage peut contenir n'importe quel type de valeur. La clé est générée pour vous automatiquement, ou vous pouvez fournir un argument clé séparé si vous voulez utiliser une clé spécifique.                                                                                                            |
| Oui                                  | Oui                                                 | L'objet de stockage peut contenir des objets JavaScript. Normalement, une clé est générée, et sa valeur est stockée dans l'objet dans une propriété avec le même nom que le key path. Cependant, si une telle propriété existe, sa valeur est utilisée en tant que clé, plutôt que la génération d'une nouvelle clé. |

Vous pouvez aussi créer des index sur un objet de stockage, à condition que l'objet de stockage contienne des objets, et non des primitives. Un index vous permet de consulter les valeurs stockées dans un objet de stockage en utilisant la valeur d'une propriété de l'objet stocké, plutôt que la clé de l'objet.

En outre, les index ont la capacité d'appliquer des contraintes simples sur les données stockées. En paramétrant l'option `unique` lorsque l'on crée un index, ce dernier fait que deux objets ne peuvent être enregistrés en ayant la même valeur pour le chemin de clé de l'index. Par exemple, si vous avez un objet de stockage qui contient un ensemble de personnes, et que vous voulez vous assurer que deux personnes n’aient pas la même adresse de courriel, vous pouvez utiliser un index avec le paramètre `unique` à `true`.

Cela peut sembler confus, mais ce simple exemple devrait illustrer ces concepts. D'abord, nous définissons quelques données client à utiliser dans notre exemple :

```js
// Voici à quoi ressemblent nos données client.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];
```

Bien sûr, vous n'utiliseriez pas le numéro de sécurité sociale comme clé primaire dans une table clients parce que tout le monde n'a pas de numéro de sécurité sociale, et vous pourriez stocker leur date de naissance au lieu de leur âge, mais laissons ces choix non pertinents pour des raisons de commodité et continuons.

Maintenant, voyons la création d'une base de données pour stocker ces données :

```js
const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  // Gestion des erreurs.
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // Créer un objet de stockage qui contient les informations de nos clients.
  // Nous allons utiliser "ssn" en tant que clé parce qu'il est garanti d'être
  // unique - du moins, c'est ce qu'on en disait au lancement.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Créer un index pour rechercher les clients par leur nom. Nous pourrions
  // avoir des doublons (homonymes), alors on n'utilise pas d'index unique.
  objectStore.createIndex("name", "name", { unique: false });

  // Créer un index pour rechercher les clients par leur adresse courriel. Nous voulons nous
  // assurer que deux clients n'auront pas la même, donc nous utilisons un index unique.
  objectStore.createIndex("email", "email", { unique: true });

  // Utiliser la transaction "oncomplete" pour être sûr que la création de l'objet de stockage
  // est terminée avant d'ajouter des données dedans.
  objectStore.transaction.oncomplete = function(event) {
    // Stocker les valeurs dans le nouvel objet de stockage.
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    for (var i in customerData) {
      customerObjectStore.add(customerData[i]);
    }
  }
};
```

Comme indiqué précédemment, `onupgradeneeded` est le seul endroit où vous pouvez modifier la structure de la base de données. Dans cette méthode, vous pouvez créer et supprimer des objets de stockage, construire et supprimer des index.

Les objets de stockage sont créés avec un simple appel à `createObjectStore()`. La méthode prend le nom du stockage et un paramètre de type objet. Même si les paramètres sont optionnels, ils vous laissent définir d'importantes propriétés et redéfinir le type d'un objet de stockage que vous voulez créer. Dans notre cas, nous avons demandé un objet de stockage nommé "customers" et défini un `keyPath`, qui est la propriété rendant unique un objet individuel dans le stockage. Cette propriété dans l'exemple est "ssn" puisqu'un numéro de sécurité sociale est garanti unique. "ssn" doit être présent sur chaque objet stocké dans `objectStore`.

Nous avons aussi demandé un index nommé «&nbsp;<i lang="en">name</i>&nbsp;» qui examine la propriété `name` dans les objets stockés. Comme avec `createObjectStore()`, `createIndex()` prend un paramètre de type objet facultatif (`options`) qui définit le type d'index à créer. Ajouter des objets qui n'auront pas de propriété `name` fonctionnera, mais ces objets n'apparaîtront pas dans l'index «&nbsp;<i lang="en">name</i>&nbsp;».

Nous pouvons récupérer les objets client stockés, en utilisant directement leur `ssn` dans l'objet de stockage, ou en utilisant leur nom via l’index `name`. Pour en savoir plus sur ce fonctionnement, se référer à la section [utiliser un index](/en/IndexedDB/Using_IndexedDB#Using_an_index).

### Utiliser le générateur de clés

Paramétrer un marqueur `autoIncrement` lorsque l'on crée un objet de stockage activera le générateur de clés pour cet objet de stockage. Par défault, ce marqueur n'est pas défini.

Avec la générateur de clés, une clé sera générée automatiquement lorsque vous ajoutez une valeur dans un objet de stockage. Le compteur initial pour la génération de clés est toujours défini à 1 lorsque l'objet de stockage est créé pour la première fois. Fondamentalement, une nouvelle clé auto-générée sera incrémentée de 1 par rapport à la précédente. Le nombre courant d'un générateur de clé ne décroit jamais, à moins qu'un résultat d'opération sur la base soit annulé, par exemple, l'abandon d'une transaction sur la base. En conséquence, supprimer un enregistrement, voire l'ensemble des enregistrements d'un objet de stockage n'affecte jamais le générateur de clés d'un objet de stockage.

Nous pouvons créer un autre objet de stockage avec un générateur de clés comme ci-dessous :

```js
// Ouverture d'indexedDB.
var request = indexedDB.open(dbName, 3);

request.onupgradeneeded = function (event) {

    var db = event.target.result;

    // Création d'un autre objet appelé "names" avec l'option autoIncrement définie à true.
    var objStore = db.createObjectStore("names", { autoIncrement : true });

    // Puisque l'objet "names" a un générateur de clés, la clé pour la valeur name est générée automatiquement.
    // Les enregistrements ajoutés ressembleront à ceci :
    // key : 1 => value : "Bill"
    // key : 2 => value : "Donna"
    for (var i in customerData) {
        objStore.add(customerData[i].name);
    }
}
```

Pour plus de détails sur le générateur de clés, voyez ["W3C Key Generators"](http://www.w3.org/TR/IndexedDB/#key-generator-concept).

## Ajouter, récupérer et supprimer des données

Avant de faire quoi que ce soit avec votre nouvelle base de données, vous aurez besoin de démarrer une transaction. Les transactions viennent de l'objet base de données, et vous devez spécifier sur quel objet vous souhaitez faire pointer la transaction. Une fois dans la transaction, vous pouvez accéder à l'objet de stockage qui contient vos données et faire vos requêtes. Puis, vous devez décider si vous allez appliquer des changements à la base de données, ou si vous avez juste besoin de la lire. Les transactions disposent de trois modes disponibles: `readonly` _(lecture seule)_, `readwrite` _(lecture/écriture)_, et `versionchange` _(changement de version)_.

Pour changer le "schéma" ou la structure de la base de données — qui implique de créer ou supprimer des objets de stockage ou des index — la transaction doit être en mode `versionchange`. Cette transaction est ouverte en appelant la méthode {{domxref("IDBFactory.open")}}  avec une `version` spécifiée. (Dans les navigateurs WebKit, qui n'ont pas implémenté la dernière spécification, la méthode {{domxref("IDBFactory.open")}} prend seulement un paramètre, le `nom` de la base de données ; Vous devez donc appeler {{domxref("IDBVersionChangeRequest.setVersion")}} pour établir la transaction `versionchange`.)

Pour lire les enregistrements d'un objet de stockage existant, la transaction peut être en mode `readonly`ou `readwrite`. Pour appliquer des changements à un objet de stockage existant, la transaction doit être en mode `readwrite`. Vous démarrez ces transactions avec {{domxref("IDBDatabase.transaction")}}. La méthode accepte deux paramètres : les `storeNames` (la portée, définie comme un tableau des objets de stockage auxquels vous souhaitez accéder) et le `mode` (`readonly` ou `readwrite`) pour la transaction. La méthode retourne un objet de transaction contenant la méthode {{domxref("IDBIndex.objectStore")}}, que vous utilisez pour accéder à votre objet de stockage. Par défaut, lorsqu'aucun mode n'est spécifié, les transactions démarrent en mode `readonly`.

> **Note :** À partir de Firefox 40, les transactions IndexedDB ont des garanties de durabilité relachées afin d'augmenter les performances (voir {{Bug("1112702")}}.) Auparavant, lors d'une transaction `readwrite` {{domxref("IDBTransaction.oncomplete")}} était déclenché seulement lorsque les données étaient garanties pour une écriture sur le disque. Dans Firefox 40+ l'évènement `complete` est déclenché une fois que l'OS a autorisé l'écriture de données, mais potentiellement avant que les données soient réellement écrites sur le disque. L'évènement `complete` peut ainsi être livré plus vite qu'avant, cependant, il existe un petit risque que l'ensemble de la transaction soit perdu si l'OS s'effondre ou si un problème électrique survient avant que les données soient écrites. Comme de tels évènements catastrophiques sont rares, la plupart des utilisateurs n'ont pas à s'en soucier. Si vous devez vous assurer de la durabilité pour quelconque raison que ce soit (par exemple, vous stockez des données critiques qui ne peuvent être recalculées plus tard) vous pouvez forcer une transaction à écrire sur le disque avant que l'évènement `complete` ne soit délivré en créant une transaction utilisant un mode expérimental (non-standard) `readwriteflush`  (se référer à {{domxref("IDBDatabase.transaction")}}.

Vous pouvez accélérer l'accès à vos données en utilisant le bon mode et la bonne portée dans la transaction. Voici deux astuces :

- Lorsque vous définissez la portée, spécifiez uniquement les objets de stockage dont vous avez besoin. De cette manière, vous pouvez exécuter plusieurs transactions simultanément sans qu'elles se chevauchent.
- Spécifier le mode `readwrite` pour une transaction seulement lorsque c'est nécessaire. Vous pouvez exécuter simulaténement plusieurs transactions `readonly` avec chevauchements, mais vous ne pouvez avoir qu'une seule transaction `readwrite` dans un objet de stockage. Pour en savoir plus, regardez la définition des _[transactions](/en-US/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#Database)_ dans l'article des [concepts de base](/en-US/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB).

### Ajouter des données dans la base de données

Si vous venez juste de créer une base de données, alors vous souhaitez probablement écrire dedans. Voici comment ça se passe :

```js
var transaction = db.transaction(["customers"], "readwrite");
// Note: Les anciennes implémentations utilisent la constante dépréciée IDBTransaction.READ_WRITE au lieu de "readwrite".
// Au cas où vous souhaitiez mettre en oeuvre ces implémentations, vous pouvez écrire :
// var transaction = db.transaction(["customers"], IDBTransaction.READ_WRITE);
```

La fonction `transaction()` prend deux arguments (bien que l'un d'eux soit facultatif) et retourne un objet transaction. Le premier argument est une liste d'objets de stockage que la transaction va traiter. Vous pouvez passer un tableau vide si vous voulez que la transaction traite l'ensemble des objets de stockage, mais ne le faites pas, parce que la spécification indique qu'un tableau vide devrait générer une InvalidAccessError. Si vous ne spécifiez rien pour le deuxième argument, vous démarrerez une transaction "read-only" _(lecture seule)_ . Si vous souhaitez aussi écrire, vous devrez passer l'option `"readwrite"` _(lecture/écriture)_.

Maintenant que vous avez une transaction, vous devez comprendre sa durée de vie. Les transactions sont étroitement liées à la boucle de l'évènement. Si vous établissez une transaction et si vous sortez de la boucle d'évènements sans l'utiliser, alors la transaction deviendra inactive. La seule manière de garder la transaction active est d'y insérer une requête. Lorsque la requête est terminée, vous obtenez un évènement DOM, et en supposant que la requête ait réussi, vous avez une autre opportunité d'étendre la transaction durant ce "callback" _(rappel)_. Si vous sortez de la boucle d'évènements sans étendre la transaction, alors elle devient inactive, etc… Tant qu'il reste des demandes en attente, la transaction reste active. La durée de vie des transactions est vraiment très simple, mais cela peut prendre un peu de temps de la maîtriser. Quelques exemples supplémentaires aideront. Si vous commencez à voir des codes d'erreur `TRANSACTION_INACTIVE_ERR`, alors vous avez raté quelque chose.

Les transactions peuvent recevoir des évènements DOM de trois types : `error` _(erreur)_, `abort` _(abandonnée)_ et `complete` _(terminée)_. Nous avons déjà parlé du fait que les `error` créent des bulles, ainsi une transaction peut recevoir des évènements d'erreur venant de n'importe quelle requête l'ayant généré. Un point plus subtil ici, c'est que le comportement par défaut d'une erreur est d'abandonner la transaction là où elle a eu lieu. A moins que vous gériez l’erreur en appelant d'abord `stopPropagation()` sur l’évènement erreur, puis que vous fassiez quelque chose d'autre, la transaction complète sera annulée. Cette conception vous oblige à réfléchir et gérer les erreurs, mais vous pouvez toujours ajouter un gestionnaire d'erreurs "fourre-tout" à la base de données si la gestion d'erreurs fines est trop lourde. Si vous ne gérez pas un évènement d'erreur, ou si vous appelez `abort()` sur la transaction, alors la transaction est annulée et un évènement `abort` est lancé sur la transaction. Sinon, une fois que toutes les demandes en instance sont terminées, vous recevez un évènement `complete`. Si vous faites beaucoup d'opérations sur les bases de données, alors suivre la transaction plutôt que les requêtes individuelles, peut certainement vous aider.

Maintenant que vous avons une transaction, nous avons besoin de récupérer l'objet de stockage de celle-ci. Les transactions vous permettent seulement d'avoir l'objet de stockage que vous avez spécifié lors de la création de la transaction. Puis, vous pouvez ajouter toutes les données dont vous avez besoin.

```js
// Faire quelque chose lorsque toutes les données sont ajoutées à la base de données.
transaction.oncomplete = function(event) {
  alert("All done!");
};

transaction.onerror = function(event) {
  // N'oubliez pas de gérer les erreurs !
};

var objectStore = transaction.objectStore("customers");
for (var i in customerData) {
  var request = objectStore.add(customerData[i]);
  request.onsuccess = function(event) {
    // event.target.result == customerData[i].ssn;
  };
}
```

La méthode `result` d’une requête venant d'un appel à `add()` est la clé de la valeur qui vient d'être ajoutée. Dans ce cas, ce devrait être équivalent à la propriété `ssn` de l'objet qui vient d'être ajouté, puisque l'objet de stockage utilise la propriété `ssn` pour le key path. Notez que la fonction `add()` requiert qu'aucun objet déjà présent dans la base ait la même clé. Si vous essayez de modifier une entrée existante, ou si vous ne vous en occupez pas, vous pouvez utiliser la fonction `put()`, comme montré plus loin dans la section [Mettre à jour une entrée dans la base de données](#mettre_à_jour_une_entrée_dans_la_base_de_données).

### Supprimer des données dans la base de données

Supprimer des données est très similaire :

```js
var request = db.transaction(["customers"], "readwrite")
                .objectStore("customers")
                .delete("444-44-4444");
request.onsuccess = function(event) {
  // c'est supprimé !
};
```

### Récupérer des données de la base de données

Maintenant que la base de données dispose de quelques informations, vous pouvez les récupérer de plusieurs façons. D'abord, la plus simple `get()`. Vous devez fournir une clé pour récupérer la valeur, comme ceci :

```js
var transaction = db.transaction(["customers"]);
var objectStore = transaction.objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function(event) {
  // gestion des erreurs!
};
request.onsuccess = function(event) {
  // Faire quelque chose avec request.result !
  alert("Name for SSN 444-44-4444 is " + request.result.name);
};
```

Ça fait beaucoup de code pour une "simple" récupération. Voici comment le raccourcir un peu, en supposant que vous gériez les erreurs au niveau de la base de données :

```js
db.transaction("customers").objectStore("customers").get("444-44-4444").onsuccess = function(event) {
  alert("Name for SSN 444-44-4444 is " + event.target.result.name);
};
```

Vous voyez comment ça fonctionne ? Comme il n'y a qu'un seul objet de stockage, vous pouvez éviter de passer une liste d'objets dont vous avez besoin dans votre transaction, et juste passer le nom comme une chaîne de caractères. Aussi, nous faisons seulement une lecture de la base, donc nous n'avons pas besoin d'une transaction `"readwrite"`. Appeler une `transaction()` sans spécifier de mode nous donne une transaction `"readonly"`. Une autre subtilité ici est que nous n'enregistrons pas l'objet de notre requête dans une variable. Comme l’évènement DOM a la requête comme cible, vous pouvez utiliser l'évènement pour récupérer la propriété `result`.

Vous pouvez accélérer l’accès à vos données en limitant la portée et le mode de la transaction. Voici deux astuces :

- Lors de la définition de la [scope](/fr/docs/IndexedDB/Using_IndexedDB$edit#scope) _(portée)_, spécifiez seulement l’objet de stockage dont vous avez besoin. De cette manière, vous pouvez avoir de multiples opérations simultanées sans qu’elles se chevauchent.
- Spécifier une transaction en mode readwrite uniquement lorsque c’est nécessaire. Vous pouvez avoir de multiples opérations simultanées en lecture seule, mais vous ne pouvez avoir qu’une transaction "readwrite" _(lecture/écriture)_ sur un objet de stockage. Pour en savoir plus, voir la définition relative aux [transactions in the Basic Concepts article](/en-US/docs/IndexedDB/Basic_Concepts_Behind_IndexedDB#gloss_transaction).

### Mettre à jour une entrée dans la base de données

Maintenant que nous avons récupéréré quelques données, les mettre à jour et en insérer est assez simple. Mettons à jour l’exemple précédent :

```js
var objectStore = db.transaction(["customers"], "readwrite").objectStore("customers");
var request = objectStore.get("444-44-4444");
request.onerror = function(event) {
  // Gestion des erreurs!
};
request.onsuccess = function(event) {
  // On récupère l'ancienne valeur que nous souhaitons mettre à jour
  var data = request.result;

  // On met à jour ce(s) valeur(s) dans l'objet
  data.age = 42;

  // Et on remet cet objet à jour dans la base
  var requestUpdate = objectStore.put(data);
   requestUpdate.onerror = function(event) {
     // Faire quelque chose avec l’erreur
   };
   requestUpdate.onsuccess = function(event) {
     // Succès - la donnée est mise à jour !
   };
};
```

Ici, nous avons créé une variable `objectStore` et nous avons recherché un enregistrement d’un client, identifié par la valeur ssn (`444-44-4444`). Nous avons ensuite mis le résultat dans une variable (`data`), mis à jour la propriété `age` de cet objet, puis créé une deuxième requête (`requestUpdate`) pour mettre l'enregistrement du client dans l'`objectStore`, en écrasant la valeur précédente.

> **Note :** dans ce cas, nous avons eu à spécifier une transaction `readwrite` puisque nous voulions écrire dans la base, et pas seulement la lire.

### Utiliser un curseur

Utiliser `get()` nécessite de connaître la clé que vous souhaitez récupérer. Si vous voulez parcourir toutes les valeurs de l’objet de stockage, alors vous devez utiliser un curseur. Voici comment ça marche :

```js
var objectStore = db.transaction("customers").objectStore("customers");

objectStore.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
    cursor.continue();
  }
  else {
    alert("No more entries!");
  }
};
```

La fonction `openCursor()` prend en compte plusieurs arguments. En premier, vous pouvez spécifier une plage de résultats à récupérer en utilisant un objet  "key range" que nous allons voir dans une minute. En deuxième, vous pouvez spécifier la direction vers laquelle vous souhaitez itérer. Dans l’exemple ci-dessus, nous avons itéré tous les objets dans l’ordre ascendant. Le "callback" _(rappel)_ de réussite pour les curseurs est un peu spécial. L'objet cursor lui-même est le `result` _(résutat)_ de la requête (au-dessus, nous utilisons le raccourci `event.target.result`). Puis la clé et valeur courante peuvent être trouvées dans les propriétés `key`*(clé)*  et `value` _(valeur)_ de l’objet cursor. Si vous souhaitez continuer, vous devez appeler `continue()` sur le curseur. Lorsque vous avez atteint la fin des données (ou s’il n’y a plus d’entrées qui correspondent à votre requête `openCursor()` ) , vous aurez toujours votre callback success, mais la propriété `result` sera `undefined`.

Une utilisation classique avec les curseurs est de récupérer tous les objets dans un objet de stockage et de les mettre dans un tableau, comme ceci :

```js
var customers = [];

objectStore.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    customers.push(cursor.value);
    cursor.continue();
  }
  else {
    alert("Got all customers: " + customers);
  }
};
```

> **Note :** Mozilla a aussi implémenté `getAll()` pour gérer ce cas (et `getAllKeys()`, qui est actuellement caché derrière la préférence `dom.indexedDB.experimental`  dans about:config) . ceux-ci ne font pas partie d' IndexedDB standard, et peuvent disparaître dans le futur. Nous les avons inclus partceque nous pensons qu'ils sont utiles. Le code suivant fait exactement la même chose que ci-dessus :
>
> ```js
> objectStore.getAll().onsuccess = function(event) {
>   alert("Got all customers: " + event.target.result);
> };
> ```
>
> Il y a un coût de performance associé avec la recherche de la propriété `value` du curseur, parce que l'objet est créé paresseusement. Quand vous utilisez `getAll()` par exemple, Gecko doit créer tous les objets à la fois. Si vous êtes seulement intéressé par la lecture de chaque clé, pour l'instance, il est beaucoup plus efficace d'utiliser un curseur que `getAll()`. Si vous essayez d'obtenir un tableau de tous les objets d'un objet de stockage, utilisez `getAll()`.

### Utiliser un index

Le stockage des données des clients utilisant le SSN comme clé est logique puisque le SSN identifie un individu unique. (Que ce soit une bonne idée pour la vie privée est une question différente, et en dehors du champ de cet article). Si vous devez rechercher un client par son nom, vous devrez toutefois faire itérer sur toutes les clés SSN dans la base de données jusqu'à ce que vous trouviez la bonne. La recherche de cette manière serait très lente, alors, vous pouvez utiliser un index.

```js
// D'abord, assurez-vous de créer un index dans request.onupgradeneeded:
// objectStore.createIndex("name", "name");
// Autrement, vous obtiendrez une DOMException.

var index = objectStore.index("name");

index.get("Donna").onsuccess = function(event) {
  alert("Donna's SSN is " + event.target.result.ssn);
};
```

Le "name" du curseur n'est pas unique, donc il pourrait y avoir plus d'une entrée avec le `name` attribué à  `"Donna"`. Dans ce cas, vous obtenez toujours celui qui a la valeur clé la plus basse .

Si vous avez besoin d'accèder à toutes les entrées avec un `name` donné, vous pouvez utiliser un curseur. Vous pouvez ouvrir deux types différents de curseurs sur les index. Un curseur normal situe la propriété index de l'objet dans l'objet de stockage. Un curseur de clés situe la propriété index des clés utilisées pour stocker l'objet dans l'objet de stockage. Les différences sont illustrées ici :

```js
// Utilisation d'un curseur normal pour saisir tous les enregistrements des objets client
index.openCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key est un nom, comme "Bill", et cursor.value est l'objet entier.
    alert("Name: " + cursor.key + ", SSN: " + cursor.value.ssn + ", email: " + cursor.value.email);
    cursor.continue();
  }
};

// Utilisation d'un curseur de clés pour saisir les clés des enregistrements des objets client
index.openKeyCursor().onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // cursor.key est un nom, comme "Bill", et cursor.value est le SSN.
    // Pas moyen d'obtenir directement le reste de l'objet stocké .
    alert("Name: " + cursor.key + ", SSN: " + cursor.value);
    cursor.continue();
  }
};
```

### Spécifier l'intervalle et la direction du curseur

Si vous souhaitez limiter l'intervalle de valeurs que vous voyez dans un curseur, vous pouvez utiliser un objet `IDBKeyRange` et le donner comme premier argument à `openCursor()` ou `openKeyCursor()` . Vous pouvez créer un intervalle de clés qui n'autorise qu'une seule clé, ou qui a des limites inférieure et supérieure, ou qui a des bornes inférieure et supérieure. La limite peut être "closed" _(fermée)_ (c'est-à-dire que l'intervalle de clés comprend les valeurs données) ou "open" _(ouverte)_ (c'est-à-dire que la plage de clés n'inclut pas les valeurs données. Voici comment cela fonctionne :

```js
// Correspond seulement à "Donna"
var singleKeyRange = IDBKeyRange.only("Donna");

// Correspond à n'importe quoi contenant "Bill", y compris "Bill"
var lowerBoundKeyRange = IDBKeyRange.lowerBound("Bill");

// Correspond à n'importe quoi contenant "Bill", mais pas "Bill"
var lowerBoundOpenKeyRange = IDBKeyRange.lowerBound("Bill", true);

// Correspond à n'importe quoi, mais  "Donna" exclus.
var upperBoundOpenKeyRange = IDBKeyRange.upperBound("Donna", true);

// Correspond à n'importe quoi compris entre "Bill" et "Donna", mais "Donna" exclus.
var boundKeyRange = IDBKeyRange.bound("Bill", "Donna", false, true);

// Pour utiliser un des intervalles de clés, placez le en premier argument de openCursor()/openKeyCursor()
index.openCursor(boundKeyRange).onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Faire quelque chose avec la sélection.
    cursor.continue();
  }
};
```

Parfois, vous voudrez peut-être itérer dans l'ordre décroissant plutôt que dans l'ordre croissant (la direction par défaut pour tous les curseurs). Le changement de direction est réalisé en passant `prev` à la fonction `openCursor()` antérieure comme second argument :

```js
objectStore.openCursor(boundKeyRange, "prev").onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Faire quelque chose avec les entrées.
    cursor.continue();
  }
};
```

Si vous souhaitez simplement spécifier un changement de direction, mais ne pas limiter les résultats, vous pouvez simplement passer "null" comme premier argument :

```js
objectStore.openCursor(null, "prev").onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Faire quelque chose avec les entrées.
    cursor.continue();
  }
};
```

Étant donné que l'index "name" n'est pas unique, il peut y avoir plusieurs entrées où le `name` est le même. Notez qu'une telle situation ne peut pas se produire avec les objets stockés car la clé doit toujours être unique. Si vous souhaitez filtrer les doublons pendant l'itération du curseur sur les index, vous pouvez passer `nextunique` (ou `prevunique` si vous revenez en arrière) comme paramètre de direction. Lorsque nextunique ou prevunique sont utilisés, l'entrée avec la clé la plus basse est toujours celle retournée.

```js
index.openKeyCursor(null, "nextunique").onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    // Faire quelque chose avec les entrées.
    cursor.continue();
  }
};
```

Voyez "[IDBCursor Constants](/en-US/docs/Web/API/IDBCursor?redirectlocale=en-US&redirectslug=IndexedDB%2FIDBCursor#Constants)" pour les arguments de direction valides.

## La version change alors qu'une application Web est ouverte dans un autre onglet

Lorsque votre application Web change de telle sorte qu'une modification de version est nécessaire pour votre base de données, vous devez considérer ce qui se passe si l'utilisateur a l'ancienne version de votre application ouverte dans un onglet, puis charge la nouvelle version de votre application dans une autre . Lorsque vous appelez `open()` avec une version plus grande que la version actuelle de la base de données, toutes les autres bases de données ouvertes doivent reconnaître explicitement la demande avant de commencer à modifier la base de données (un événement `onblocked`  _(bloqué)_ est déclenché jusqu'à ce qu'elles soient fermées ou rechargées). Voici comment cela fonctionne :

```js
var openReq = mozIndexedDB.open("MyTestDatabase", 2);

openReq.onblocked = function(event) {
  //  Si un autre onglet est chargé avec la base de données, il doit être fermé
  // avant que nous puissions continuer.
  alert("Veuillez fermer tous les ongles ouverts sur ce site!");
};

openReq.onupgradeneeded = function(event) {
  // Toutes les autres bases de données ont été fermées. Tout régler.
  db.createObjectStore(/* ... */);
  useDatabase(db);
}

openReq.onsuccess = function(event) {
  var db = event.target.result;
  useDatabase(db);
  return;
}

function useDatabase(db) {
  // Assurez-vous d'ajouter un gestionnaire pour être averti si une autre page demande
  // un changement de version. Nous devons fermer la base de données.
  // Cela permet à l'autre page de mettre à niveau la base de données.
  //  Si vous ne le faites pas, la mise à niveau ne se produira que lorsque l'utilisateur fermera l'onglet .
  db.onversionchange = function(event) {
    db.close();
    alert("A new version of this page is ready. Please reload!");
  };

  //  Faire quelque chose avec la base de données .
}
```

Vous devriez également écouter les erreurs `VersionError` pour gérer le cas où les applications déjà ouvertes déclencheraient un code conduisant à une nouvelle tentative d'ouverture de la base de données, mais en utilisant une version désuète.

## Sécurité

IndexedDB utilise le principe " same-origin " _(même origine)_, ce qui signifie qu'il relie le stockage à l'origine du site qui le crée (généralement, c'est le domaine ou le sous-domaine du site), de sorte qu'il ne peut être consulté par aucune autre origine.

Le contenu de la fenêtre de tiers (par exemple le contenu de {{htmlelement("iframe")}}) peut accèder à IndexedDB pour l'origine dans laquelle il est intégré, à moins que le navigateur ne soit configuré pour [ne jamais accepter de cookies tiers](https://support.mozilla.org/en-US/kb/disable-third-party-cookies) (voir le {{bug("1147821")}}).

## Avertissement concernant l'arrêt du navigateur

Lorsque le navigateur s'arrête (parce que l'utilisateur a choisi l'option Quit ou Exit), le disque contenant la base de données est supprimé de manière inattendue ou les permissions sont perdues dans le magasin de base de données, les choses suivantes se produisent :

1.  Chaque transaction sur chaque base de données affectée (ou toutes les bases de données ouvertes, dans le cas de l'arrêt du navigateur) est interrompue avec un `AbortError`. L'effet est le même que si {{domxref("IDBTransaction.abort()")}} est appelé sur chaque transaction.
2.  Une fois toutes les transactions terminées, la connexion à la base de données est fermée .
3.  Enfin, l'objet {{domxref("IDBDatabase")}} représentant la connexion à la base de données reçoit un évènement {{event("close")}} . Vous pouvez utiliser un gestionnaire d'évènements  {{domxref("IDBDatabase.onclose")}} pour écouter ces évènements, afin de savoir quand une base de données est fermée de façon inattendue .

Le comportement décrit ci-dessus est nouveau et n'est disponible que pour les versions de navigateur suivantes : Firefox 50, Google Chrome 31 (approximativement).

Avant ces versions de navigateurs, les transactions étaient interrompues silencieusement et aucun événement {{event ("close")}} n'était déclenché, donc il n'y avait aucun moyen de détecter une fermeture de base de données inattendue.

Étant donné que l'utilisateur peut quitter le navigateur à tout moment, cela signifie que vous ne pouvez pas compter sur une transaction particulière à compléter, et sur les navigateurs plus anciens, vous n'êtes même pas informé quand elles ne sont pas terminées. Il y a plusieurs conséquences à ce comportement.

Tout d'abord, vous devez vous occuper de toujours laisser votre base de données dans un état cohérent à la fin de chaque transaction. Par exemple, supposons que vous utilisiez IndexedDB pour stocker une liste d'éléments que l'utilisateur est autorisé à éditer. Vous enregistrez la liste après l'édition en effaçant l'objet de stockage puis en écrivant la nouvelle liste. Si vous effacez l'objet de stockage dans une transaction et que vous écrivez la nouvelle liste dans une autre transaction, il existe un danger : si le navigateur se ferme après l'effacement mais avant l'écriture, votre base de données est vide. Pour éviter cela, vous devez combiner l'effacement et l'écriture en une seule transaction.

Ensuite, vous ne devez jamais lier les transactions de base de données pour les événements unload _(déchargement_). Si l'événement unload est déclenché par la fermeture du navigateur, toutes les transactions créées dans le gestionnaire d'événements unload ne seront jamais terminées. Une approche intuitive, pour le maintien de certaines informations dans les sessions du navigateur, est de le lire à partir de la base de données, lorsque le navigateur (ou une page particulière) est ouvert, le mettre à jour à mesure que l'utilisateur interagit avec le navigateur, puis l'enregistrer dans la base de données lorsque le navigateur ( ou page) se ferme. Cependant, cela ne fonctionne pas. Les transactions de la base de données sont créées dans le gestionnaire d'événements unload, mais comme elles sont asynchrones, elles sont interrompues avant qu'elles puissent s'exécuter.

En fait, il n'y a aucun moyen de garantir que les transactions IndexedDB seront terminées, même avec un arrêt normal du navigateur. Voir {{bug (870645)}}. Comme solution de rechange pour cette notification d'arrêt normal, vous pouvez suivre vos transactions et ajouter un événement `beforeunload` pour avertir l'utilisateur si des transactions ne sont pas encore terminées au moment du déchargement.

Au-moins, avec l'ajout des notifications d'annulation et {{domxref ("IDBDatabase.onclose")}}, vous pouvez savoir quand cela s'est produit.

## Le tri et les langues

Mozilla a implémenté la capacité d'effectuer un tri des données IndexedDB localisées sur Firefox 43+. Par défaut, IndexedDB n'a pas pris en charge l'internationalisation des chaînes de tri, et était trié comme s'il s'agissait d'un texte anglais. Par exemple, "b", "á", "z", "a" devaient être triés comme suit :

- a
- b
- z
- á

ce qui n'est évidemment pas la façon dont les utilisateurs souhaitent que leurs données soient triées - Aaron et Áaron, par exemple, doivent aller l'un à côté de l'autre dans une liste de contacts. L'obtention d'un tri international approprié exige donc que l'ensemble des données soit appelé dans la mémoire et que le tri soit exécuté par le JavaScript côté client, ce qui n'est pas très efficace.

Cette nouvelle fonctionnalité permet aux développeurs de spécifier une "locale" _(langue)_ lors de la création d'un index en utilisant {{domxref("IDBObjectStore.createIndex()")}} (vérifiez ses paramètres). Dans ce cas, lorsqu'un curseur est utilisé pour itérer sur l'ensemble de données , et si vous souhaitez spécifier un tri local, vous pouvez utiliser un {{domxref ("IDBLocaleAwareKeyRange")}}.

{{domxref("IDBIndex")}} a également eu de nouvelles propriétés qui lui ont été ajoutées pour spécifier la langue : `locale` (retourne la langue si elle est spécifiée, ou null sinon) et `isAutoLocale` (retourne `true` _(vrai)_ si l'index a été créé avec une "locale auto", ce qui signifie que la langue par défaut de la plate-forme est utilisée, sinon `false`).

> **Note :** Cette fonctionnalité est couramment cachée derrière une marque (flag) — pour l'activer et l'expérimenter, aller à about:config et activez `dom.indexedDB.experimental`.

## Exemple complet d'IndexedDB

### HTML Content

```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <h1>IndexedDB Demo: storing blobs, e-publication example</h1>
    <div class="note">
      <p>
        Works and tested with:
      </p>
      <div id="compat">
      </div>
    </div>

    <div id="msg">
    </div>

    <form id="register-form">
      <table>
        <tbody>
          <tr>
            <td>
              <label for="pub-title" class="required">
                Title:
              </label>
            </td>
            <td>
              <input type="text" id="pub-title" name="pub-title" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="pub-biblioid" class="required">
                Bibliographic ID:<br/>
                <span class="note">(ISBN, ISSN, etc.)</span>
              </label>
            </td>
            <td>
              <input type="text" id="pub-biblioid" name="pub-biblioid"/>
            </td>
          </tr>
          <tr>
            <td>
              <label for="pub-year">
                Year:
              </label>
            </td>
            <td>
              <input type="number" id="pub-year" name="pub-year" />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <label for="pub-file">
                File image:
              </label>
            </td>
            <td>
              <input type="file" id="pub-file"/>
            </td>
          </tr>
          <tr>
            <td>
              <label for="pub-file-url">
                Online-file image URL:<br/>
                <span class="note">(same origin URL)</span>
              </label>
            </td>
            <td>
              <input type="text" id="pub-file-url" name="pub-file-url"/>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="button-pane">
        <input type="button" id="add-button" value="Add Publication" />
        <input type="reset" id="register-form-reset"/>
      </div>
    </form>

    <form id="delete-form">
      <table>
        <tbody>
          <tr>
            <td>
              <label for="pub-biblioid-to-delete">
                Bibliographic ID:<br/>
                <span class="note">(ISBN, ISSN, etc.)</span>
              </label>
            </td>
            <td>
              <input type="text" id="pub-biblioid-to-delete"
                     name="pub-biblioid-to-delete" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="key-to-delete">
                Key:<br/>
                <span class="note">(for example 1, 2, 3, etc.)</span>
              </label>
            </td>
            <td>
              <input type="text" id="key-to-delete"
                     name="key-to-delete" />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="button-pane">
        <input type="button" id="delete-button" value="Delete Publication" />
        <input type="button" id="clear-store-button"
               value="Clear the whole store" class="destructive" />
      </div>
    </form>

    <form id="search-form">
      <div class="button-pane">
        <input type="button" id="search-list-button"
               value="List database content" />
      </div>
    </form>

    <div>
      <div id="pub-msg">
      </div>
      <div id="pub-viewer">
      </div>
      <ul id="pub-list">
      </ul>
    </div>
```

### CSS Content

```css
body {
  font-size: 0.8em;
  font-family: Sans-Serif;
}

form {
  background-color: #cccccc;
  border-radius: 0.3em;
  display: inline-block;
  margin-bottom: 0.5em;
  padding: 1em;
}

table {
  border-collapse: collapse;
}

input {
  padding: 0.3em;
  border-color: #cccccc;
  border-radius: 0.3em;
}

.required:after {
  content: "*";
  color: red;
}

.button-pane {
  margin-top: 1em;
}

#pub-viewer {
  float: right;
  width: 48%;
  height: 20em;
  border: solid #d092ff 0.1em;
}
#pub-viewer iframe {
  width: 100%;
  height: 100%;
}

#pub-list {
  width: 46%;
  background-color: #eeeeee;
  border-radius: 0.3em;
}
#pub-list li {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-right: 0.5em;
}

#msg {
  margin-bottom: 1em;
}

.action-success {
  padding: 0.5em;
  color: #00d21e;
  background-color: #eeeeee;
  border-radius: 0.2em;
}

.action-failure {
  padding: 0.5em;
  color: #ff1408;
  background-color: #eeeeee;
  border-radius: 0.2em;
}

.note {
  font-size: smaller;
}

.destructive {
  background-color: orange;
}
.destructive:hover {
  background-color: #ff8000;
}
.destructive:active {
  background-color: red;
}
```

### JavaScript Content

```js
(function () {
  var COMPAT_ENVS = [
    ['Firefox', ">= 16.0"],
    ['Google Chrome',
     ">= 24.0 (you may need to get Google Chrome Canary), NO Blob storage support"]
  ];
  var compat = $('#compat');
  compat.empty();
  compat.append('<ul id="compat-list"></ul>');
  COMPAT_ENVS.forEach(function(val, idx, array) {
    $('#compat-list').append('<li>' + val[0] + ': ' + val[1] + '</li>');
  });

  const DB_NAME = 'mdn-demo-indexeddb-epublications';
  const DB_VERSION = 1; //  Utilisez un "long long" pour cette valeur (ne pas utiliser un flottant (float))
  const DB_STORE_NAME = 'publications';

  var db;

  //  Utilisé pour garder une trace de la vue affichée pour éviter de la recharger inutilement
  var current_view_pub_key;

  function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      //  Le mieux utiliser "this" que "req" pour obtenir le résultat et éviter
      // les problèmes avec "garbage collection".
      // db = req.result;
      db = this.result;
      console.log("openDb DONE");
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(
        DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });

      store.createIndex('biblioid', 'biblioid', { unique: true });
      store.createIndex('title', 'title', { unique: false });
      store.createIndex('year', 'year', { unique: false });
    };
  }

  /**
   * @paramètre {string}(chaîne de caractères) store_name
   * @paramètre {string}(chaîne de caractères) mode either "readonly" ou "readwrite"
   */
  function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  function clearObjectStore(store_name) {
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req = store.clear();
    req.onsuccess = function(evt) {
      displayActionSuccess("Store cleared");
      displayPubList(store);
    };
    req.onerror = function (evt) {
      console.error("clearObjectStore:", evt.target.errorCode);
      displayActionFailure(this.error);
    };
  }

  function getBlob(key, store, success_callback) {
    var req = store.get(key);
    req.onsuccess = function(evt) {
      var value = evt.target.result;
      if (value)
        success_callback(value.blob);
    };
  }

  /**
   * @paramètre objet de stockage {IDBObjectStore=}
   */
  function displayPubList(store) {
    console.log("displayPubList");

    if (typeof store == 'undefined')
      store = getObjectStore(DB_STORE_NAME, 'readonly');

    var pub_msg = $('#pub-msg');
    pub_msg.empty();
    var pub_list = $('#pub-list');
    pub_list.empty();
    //  Réinitialisation de l'iframe afin qu'il n'indique pas le contenu précédent
    newViewerFrame();

    var req;
    req = store.count();
    // Les requêtes sont exécutées dans l'ordre où elles ont été faites en-dehors de la
    // transaction,  et leurs résultats sont retournés dans le même ordre.
    // Ainsi, le texte du compteur ci-dessous sera affiché avant la liste de pub actuelle
    // (ce n'est pas algorithmiquement important dans ce cas) .
    req.onsuccess = function(evt) {
      pub_msg.append('<p>There are <strong>' + evt.target.result +
                     '</strong> record(s) in the object store.</p>');
    };
    req.onerror = function(evt) {
      console.error("add error", this.error);
      displayActionFailure(this.error);
    };

    var i = 0;
    req = store.openCursor();
    req.onsuccess = function(evt) {
      var cursor = evt.target.result;

      //  Si le curseur pointe vers quelque chose, demandez les données
      if (cursor) {
        console.log("displayPubList cursor:", cursor);
        req = store.get(cursor.key);
        req.onsuccess = function (evt) {
          var value = evt.target.result;
          var list_item = $('<li>' +
                            '[' + cursor.key + '] ' +
                            '(biblioid: ' + value.biblioid + ') ' +
                            value.title +
                            '</li>');
          if (value.year != null)
            list_item.append(' - ' + value.year);

          if (value.hasOwnProperty('blob') &&
              typeof value.blob != 'undefined') {
            var link = $('<a href="' + cursor.key + '">File</a>');
            link.on('click', function() { return false; });
            link.on('mouseenter', function(evt) {
                      setInViewer(evt.target.getAttribute('href')); });
            list_item.append(' / ');
            list_item.append(link);
          } else {
            list_item.append(" / No attached file");
          }
          pub_list.append(list_item);
        };

        //  Passer à l'objet de stockage suivant
        cursor.continue();

        // Ce compteur sert seulement à créer des identifiants distincts
        i++;
      } else {
        console.log("No more entries");
      }
    };
  }

  function newViewerFrame() {
    var viewer = $('#pub-viewer');
    viewer.empty();
    var iframe = $('<iframe />');
    viewer.append(iframe);
    return iframe;
  }

  function setInViewer(key) {
    console.log("setInViewer:", arguments);
    key = Number(key);
    if (key == current_view_pub_key)
      return;

    current_view_pub_key = key;

    var store = getObjectStore(DB_STORE_NAME, 'readonly');
    getBlob(key, store, function(blob) {
      console.log("setInViewer blob:", blob);
      var iframe = newViewerFrame();

      // Il n'est pas possible de définir un lien direct vers
      // le blob pour fournir un moyen de le télécharger directement.
      if (blob.type == 'text/html') {
        var reader = new FileReader();
        reader.onload = (function(evt) {
          var html = evt.target.result;
          iframe.load(function() {
            $(this).contents().find('html').html(html);
          });
        });
        reader.readAsText(blob);
      } else if (blob.type.indexOf('image/') == 0) {
        iframe.load(function() {
          var img_id = 'image-' + key;
          var img = $('<img id="' + img_id + '"/>');
          $(this).contents().find('body').html(img);
          var obj_url = window.URL.createObjectURL(blob);
          $(this).contents().find('#' + img_id).attr('src', obj_url);
          window.URL.revokeObjectURL(obj_url);
        });
      } else if (blob.type == 'application/pdf') {
        $('*').css('cursor', 'wait');
        var obj_url = window.URL.createObjectURL(blob);
        iframe.load(function() {
          $('*').css('cursor', 'auto');
        });
        iframe.attr('src', obj_url);
        window.URL.revokeObjectURL(obj_url);
      } else {
        iframe.load(function() {
          $(this).contents().find('body').html("No view available");
        });
      }

    });
  }

  /**
   * @paramètre {string} (chaîne de caractères) biblioid (identifiant bibliothèque)
   * @paramètre {string} (chaîne de caractères) title (titre)
   * @paramètre {number} (nombre) year (année)
   * @paramètre {string} (chaîne de caractères) url : l'URL de l'image à télécharger et stocker sur le pc
   *   IndexedDB database. La ressource derrière cette URL assujettie à
   *   "Same origin policy", donc pour que cette méthode fonctionne, l'URL doit venir de
   *   la même origine que le site web/l'application sur lequel le code est déployé.
   */
  function addPublicationFromUrl(biblioid, title, year, url) {
    console.log("addPublicationFromUrl:", arguments);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    //  Définir le type de réponse recherché à "blob"
    // http://www.w3.org/TR/XMLHttpRequest2/#the-response-attribute
    xhr.responseType = 'blob';
    xhr.onload = function (evt) {
                           if (xhr.status == 200) {
                             console.log("Blob retrieved");
                             var blob = xhr.response;
                             console.log("Blob:", blob);
                             addPublication(biblioid, title, year, blob);
                           } else {
                             console.error("addPublicationFromUrl error:",
                                           xhr.responseText, xhr.status);
                           }
                         };
    xhr.send();

    // Nous ne pouvons pas utiliser jQuery ici car, à partir de jQuery 1.8.3,
    // le nouveau "blob" responseType n'est pas géré.
    // http://bugs.jquery.com/ticket/11461
    // http://bugs.jquery.com/ticket/7248
    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   xhrFields: { responseType: 'blob' },
    //   success: function(data, textStatus, jqXHR) {
    //     console.log("Blob retrieved");
    //     console.log("Blob:", data);
    //     // addPublication(biblioid, title, year, data);
    //   },
    //   error: function(jqXHR, textStatus, errorThrown) {
    //     console.error(errorThrown);
    //     displayActionFailure("Error during blob retrieval");
    //   }
    // });
  }

  /**
   * @paramètre {string} (chaîne de caractères) biblioid (identifiant bibliothèque)
   * @paramètre {string} (chaîne de caractères) title (titre)
   * @paramètre {number} (nombre) year (année)
   * @paramètre {Blob=} blob
   */
  function addPublication(biblioid, title, year, blob) {
    console.log("addPublication arguments:", arguments);
    var obj = { biblioid: biblioid, title: title, year: year };
    if (typeof blob != 'undefined')
      obj.blob = blob;

    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == 'DataCloneError')
        displayActionFailure("This engine doesn't know how to clone a Blob, " +
                             "use Firefox");
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      displayActionSuccess();
      displayPubList(store);
    };
    req.onerror = function() {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }

  /**
   * @paramètre {string} (chaîne de caractères) biblioid (identifiant bibliothèque)
   */
  function deletePublicationFromBib(biblioid) {
    console.log("deletePublication:", arguments);
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req = store.index('biblioid');
    req.get(biblioid).onsuccess = function(evt) {
      if (typeof evt.target.result == 'undefined') {
        displayActionFailure("No matching record found");
        return;
      }
      deletePublication(evt.target.result.id, store);
    };
    req.onerror = function (evt) {
      console.error("deletePublicationFromBib:", evt.target.errorCode);
    };
  }

  /**
   * @paramètre {number} (nombre) key (clé)
   * @paramètre {IDBObjectStore=} store (objet de stockage)
   */
  function deletePublication(key, store) {
    console.log("deletePublication:", arguments);

    if (typeof store == 'undefined')
      store = getObjectStore(DB_STORE_NAME, 'readwrite');

    // Selon les spécifications http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // le résultat de l'objet de stockage, l'algorithme de l'opération de suppression est
    // "undefined" (indéfini), donc il n'est pas possible de savoir si certains enregistrements
    // ont été effectivement supprimés en lisant le résultat de la requête.
    var req = store.get(key);
    req.onsuccess = function(evt) {
      var record = evt.target.result;
      console.log("record:", record);
      if (typeof record == 'undefined') {
        displayActionFailure("No matching record found");
        return;
      }
      // Attention:  La même clé utilisée pour la création doit être transmise pour
      // la suppression.  Si la clé était un nombre pour la création, elle doit
      // être un nombre pour la suppression.
      req = store.delete(key);
      req.onsuccess = function(evt) {
        console.log("evt:", evt);
        console.log("evt.target:", evt.target);
        console.log("evt.target.result:", evt.target.result);
        console.log("delete successful");
        displayActionSuccess("Deletion successful");
        displayPubList(store);
      };
      req.onerror = function (evt) {
        console.error("deletePublication:", evt.target.errorCode);
      };
    };
    req.onerror = function (evt) {
      console.error("deletePublication:", evt.target.errorCode);
      };
  }

  function displayActionSuccess(msg) {
    msg = typeof msg != 'undefined' ? "Success: " + msg : "Success";
    $('#msg').html('<span class="action-success">' + msg + '</span>');
  }
  function displayActionFailure(msg) {
    msg = typeof msg != 'undefined' ? "Failure: " + msg : "Failure";
    $('#msg').html('<span class="action-failure">' + msg + '</span>');
  }
  function resetActionStatus() {
    console.log("resetActionStatus ...");
    $('#msg').empty();
    console.log("resetActionStatus DONE");
  }

  function addEventListeners() {
    console.log("addEventListeners");

    $('#register-form-reset').click(function(evt) {
      resetActionStatus();
    });

    $('#add-button').click(function(evt) {
      console.log("add ...");
      var title = $('#pub-title').val();
      var biblioid = $('#pub-biblioid').val();
      if (!title || !biblioid) {
        displayActionFailure("Required field(s) missing");
        return;
      }
      var year = $('#pub-year').val();
      if (year != '') {
        // Le mieux est d'utiliser Number.isInteger si le moteur a EcmaScript 6
        if (isNaN(year))  {
          displayActionFailure("Invalid year");
          return;
        }
        year = Number(year);
      } else {
        year = null;
      }

      var file_input = $('#pub-file');
      var selected_file = file_input.get(0).files[0];
      console.log("selected_file:", selected_file);
      // Garder une référence sur la façon de réinitialiser l'entrée du fichier dans l'interface
      // utilisateur une fois que nous avons sa valeur, mais au lieu de faire cela nous utiliserons
      // plutôt un type "reset" entré dans le formulaire HTML .
      // file_input.val(null);
      var file_url = $('#pub-file-url').val();
      if (selected_file) {
        addPublication(biblioid, title, year, selected_file);
      } else if (file_url) {
        addPublicationFromUrl(biblioid, title, year, file_url);
      } else {
        addPublication(biblioid, title, year);
      }

    });

    $('#delete-button').click(function(evt) {
      console.log("delete ...");
      var biblioid = $('#pub-biblioid-to-delete').val();
      var key = $('#key-to-delete').val();

      if (biblioid != '') {
        deletePublicationFromBib(biblioid);
      } else if (key != '') {
        // Le mieux est d'utiliser Number.isInteger si le moteur a EcmaScript 6
        if (key == '' || isNaN(key))  {
          displayActionFailure("Invalid key");
          return;
        }
        key = Number(key);
        deletePublication(key);
      }
    });

    $('#clear-store-button').click(function(evt) {
      clearObjectStore();
    });

    var search_button = $('#search-list-button');
    search_button.click(function(evt) {
      displayPubList();
    });

  }

  openDb();
  addEventListeners();

})(); // Immediately-Invoked Function Expression (IIFE)
```

{{ LiveSampleLink('Full_IndexedDB_example', "Test the online live demo") }}

## Voir aussi

Référence :

- [IndexedDB API Reference](/en/IndexedDB)
- [Indexed Database API Specification](http://www.w3.org/TR/IndexedDB/)
- [Using IndexedDB in chrome](/en-US/docs/IndexedDB/Using_IndexedDB_in_chrome)
- [Using JavaScript generators in Firefox](/en-US/docs/Web/API/IndexedDB_API/Using_JavaScript_Generators_in_Firefox)
- IndexedDB [interface files](https://mxr.mozilla.org/mozilla-central/find?text=&string=dom%2FindexedDB%2F.*%5C.idl&regexp=1) dans le code source de Firefox

Tutoriels :

- [Databinding UI Elements with IndexedDB](http://www.html5rocks.com/en/tutorials/indexeddb/uidatabinding/)
- [IndexedDB — The Store in Your Browser](http://msdn.microsoft.com/en-us/scriptjunkie/gg679063.aspx)

Bibliothèques :

- [localForage](https://localforage.github.io/localForage/)&nbsp;: un polyfill qui fournit un nom simple — la syntaxe de valeur pour le stockage de données côté client, qui utilise IndexedDB en arrière-plan, mais retourne à WebSQL puis à localStorage pour les navigateurs qui ne prennent pas en charge IndexedDB.
- [dexie.js](https://www.dexie.org/)&nbsp;: une enveloppe pour IndexedDB qui permet un développement de code beaucoup plus rapide grâce à une syntaxe simple et agréable.
- [ZangoDB](https://github.com/erikolson186/zangodb)&nbsp;: une interface comme MongoDB pour IndexedDB qui prend en charge la plupart des fonctionnalités familières de filtrage, projection, tri, mise à jour et agrégation de MongoDB.
- [JsStore](http://jsstore.net/) : Une enveloppe d'IndexedDB simple et avancée ayant une syntaxe SQL.
