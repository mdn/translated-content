---
title: IDBTransaction.oncomplete
slug: conflicting/Web/API/IDBTransaction/complete_event
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/oncomplete
original_slug: Web/API/IDBTransaction/oncomplete
---
{{ APIRef("IndexedDB") }}

Le gestionnaire d'événement **`oncomplete`**, rattaché à l'interface {{domxref("IDBTransaction")}}, s'exécute au déclenchement d'un événement [`complete`](/fr/docs/Web/Events/complete) lorsque la transaction se termine avec succès.

> **Note :** Depuis Firefox 40, les transactions IndexedDB diminuent en efficacité pour gagner en efficience (voir {{Bug ( "1112702")}}). Auparavant, dans une transaction en [`readwrite`](#const_read_write), l'événement `complete` était déclenché seulement lorsque toutes les données étaient écrites sur le disque. Maintenant, l'événement `complete` est déclenché après que l'OS ai envoyé l'ordre d'écrire les données, mais potentiellement avant qu'elles aient été écrites sur le disque. L'événement `complete` peut ainsi être déclenché plus rapidement qu'auparavant. Cependant, il existe une chance infime pour que l'ensemble de la transaction soit perdue si le système d'exploitation plante ou s'il y a une perte de courant avant que les données aient été écrites sur le disque. Étant donné que ces événements catastrophiques sont rares, la plupart des utilisateurs ne devraient pas avoir à s'en préoccuper davantage.
>
> > **Attention :** Si vous devez vous assurer de l'efficacité d'une transaction pour une raison quelconque (par exemple, vous stockez des données critiques qui ne peuvent être recalculé plus tard), vous pouvez forcer l'enregistrement complet sur disque avant de déclencher l'événement `complete` en utilisant le mode `readwriteflush` (non-standard) expérimental (cf. {{domxref("IDBDatabase.transaction")}} ). Ce mode expérimentale ne peut être utilisé que si la préférence` dom.indexedDB.experimental `pref est réglée sur `true` dans `about: config`.
>
> {{AvailableInWorkers}}
>
> ## Syntaxe
>
> ```js
> transaction.oncomplete = function() { ... };
> ```
>
> ## Exemple
>
> Dans le code suivant, on ouvre une connexion à la base de donnée. Ensuite, sur cette connexion, on démarre une transaction (avec  {{domxref("IDBTransaction")}}) en lecture/écriture pour accéder au magasin d'objet `"toDoList"` et y ajouter un enregistrement grâce à la méthode {{domxref("IDBObjectStore.add")}}. On notera également la façon dont le gestionnaire d'événement {{domxref("IDBTransaction.onerror")}} est utilisé dans la transaction.
>
> Le gestionnaires d'événement **`oncomplete`** de la transaction permet d'afficher un message de succès sur la page.
>
> ```js
> // Connexion à la base de données
> var DBOpenRequest = window.indexedDB.open("toDoList", 4);
>
> DBOpenRequest.onsuccess = function(event) {
>   note.innerHTML += '<li>Connexion établie.</li>';
>
>   // Affectation de la connexion à la variable db.
>   db = DBOpenRequest.result;
>
>   // Exécution de la fonction addData () pour
>   // stocker des données dans la base
>   addData();
> };
>
> function addData() {
>   // Voici un nouvel objet prêt à être emmagasiné
>   newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];
>
>   // On ouvre une transaction en lecture/écriture
>   // prête au traitement des données sur la connexion
>   var transaction = db.transaction(["toDoList"], "readwrite");
>
>   // Voici le gestionnaire utilisé en cas de succès
>   // de l'ouverture de la transaction
>   transaction.oncomplete = function(event) {
>     note.innerHTML += '<li>Transaction terminée : modification de la base de données OK.</li>';
>   };
>
>   // Et celui utilisé en cas d'échec de
>   // l'ouverture de la transaction
>   transaction.onerror = function(event) {
>     note.innerHTML += '<li>L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.</li>';
>   };
>
>   // Puis, on ouvre l'accès au un magasin "toDoList"
>   // de la transaction
>   var objectStore = transaction.objectStore("toDoList");
>
>   // Enfin on ajoute l'enregistrement
>   var objectStoreRequest = objectStore.add(newItem[0]);
>   objectStoreRequest.onsuccess = function(event) {
>     // Et on signale l'ajout de l'enregistrement
>     note.innerHTML += '<li>Enregistrement ajouté.</li>';
>   };
>  };
> ```
>
> > **Note :** Pour un exemple de travail complet, voir notre application [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([exemple _live_ disponible](https://mdn.github.io/to-do-notifications/)).
>
> ## Spécifications
>
> | Spécification                                                                                        | État                         | Commentaires |
> | ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
> | {{SpecName('IndexedDB', '#widl-IDBTransaction-oncomplete', 'oncomplete')}} | {{Spec2('IndexedDB')}} |              |
>
> ## Compatibilité des  navigateurs
>
> {{Compat("api.IDBTransaction.oncomplete")}}
>
> ## Voir aussi
>
> - [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
> - Démarrer des transactions : {{domxref("IDBDatabase")}}
> - Manipuler des transactions : {{domxref("IDBTransaction")}}
> - Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
> - Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
> - Manipuler des curseurs : {{domxref("IDBCursor")}}
> - Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
