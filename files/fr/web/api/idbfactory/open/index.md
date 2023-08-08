---
title: IDBFactory.open()
slug: Web/API/IDBFactory/open
---

{{APIRef("IndexedDB")}}

La méthode **`open()`** de l'interface {{domxref("IDBFactory")}} lance une requête pour ouvrir une [connexion à une base de données](/fr/docs/Web/API/API_IndexedDB#Se_connecter_à_la_base_de_données).

La méthode renvoie immédiatement un objet {{domxref("IDBOpenDBRequest")}} puis effectue l'opération d'ouverture de façon asynchrone. Si l'opération réussit, un évènement `success` sera éms sur l'objet `IDBOpenDBRequest` renvoyé par la méthode, et la propriété `result` de l'évènement aura la valeur de l'objet {{domxref("IDBDatabase")}} associé à la connexion.

Si une erreur se produit lors de la connexion, un évènement `error` sera émis sur l'objet `IDBOpenDBRequest` renvoyé par la méthode.

Cette méthode peut également émettre les évènements `upgradeneeded`, `blocked` ou `versionchange`.

{{AvailableInWorkers}}

## Syntaxe

La syntaxe standard est la suivante&nbsp;:

```js
var IDBOpenDBRequest = indexedDB.open(nom);
var IDBOpenDBRequest = indexedDB.open(nom, version);
```

### Paramètres

- `nom`
  - : Le nom de la base de données qu'on souhaite ouvrir.
- `version` {{optional_inline}}
  - : Paramètre optionnel qui représente la version de la base de données qu'on veut ouvrir. Si ce paramètre n'est pas fourni et que la base de données existe, une connexion sera ouverte sans changer la version de la base de données. Si ce paramètre n'est pas fourni est que la base de données n'existe pas, elle sera créée avec une version `1`.

#### Objet options expérimental de Gecko

- `options` (`version` et `storage`) {{optional_inline}} {{deprecated_inline}}

  - : Dans Gecko, à partir de [la version 26](/fr/Firefox/Releases/26), il est possible de passer en paramètre un objet `options` non standard, qui contienne le numéro de version de la base de données (équivalent donc au paramètre `version` définit ci-avant), et également une valeur `storage` qui décrit si on souhaite utiliser un stockage permanent (avec la valeur `persistent`) ou un stockage temporaire (avec la valeur `temporary`).

    > **Attention :** l'attribut `storage` est déprécié et sera prochainement retiré de Gecko. Vous devriez utiliser {{domxref("StorageManager.persist()")}} à la place pour obtenir un stockage persistant.

> **Note :** Vous pouvez consulter l'article [les limites de stockage du navigateur et les critères d'éviction](/fr/docs/Web/API/API_IndexedDB/Browser_storage_limits_and_eviction_criteria) pour en savoir plus sur les différents types de stockage disponibles et la façon dont Firefox gère les données côté client.

### Valeur de retour

Un objet {{domxref("IDBOpenDBRequest")}} sur lequel sont déclenchés les différents évènements liés à cette requête.

### Exceptions

Cette méthode peut lever une {{domxref("DOMException")}} de type suivant&nbsp;:

| Exception   | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `TypeError` | La valeur de version est zéro ou un nombre négatif ou n'est pas un nombre. |

## Exemples

Voici un exemple d'ouverture de la base de données `toDoList` en utilisant la syntaxe standard et le paramètre `version`&nbsp;:

```js
var request = window.indexedDB.open("toDoList", 4);
```

Dans le fragment de code qui suit, on effectue une requête pour ouvrir une base de données et on inclut des gestionnaires d'évènements pour gérer la réussite ou l'échec de l'ouverture. Pour consulter un exemple fonctionnel complet, vous pouvez étudier notre application [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([cf. l'exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
var note = document.querySelector("ul");

window.indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB;
// NE PAS utiliser "var indexedDB = ..." si on n’est pas dans une fonction.
// On pourrait avoir besoin de références vers quelques objets window.IDB* :
window.IDBTransaction =
  window.IDBTransaction ||
  window.webkitIDBTransaction ||
  window.msIDBTransaction;
window.IDBKeyRange =
  window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// Mozilla n’a jamais préfixé ces objets, donc on n’a pas besoin de window.mozIDB*

// On ouvre la version 4 de la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// On ajoute deux gestionnaires d'évènements
// Le premier utilisé en cas d'échec
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Erreur lors du chargement de la base.</li>";
};

// Et le second en cas de réussite
DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Base de données initialisée.</li>";

  // On stocke le résultat de l'ouverture dans la
  // variable db qui sera utilisée par la suite
  // pour d'autres opérations
  db = DBOpenRequest.result;
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions&nbsp;: {{domxref("IDBDatabase")}}
- Manipuler des transactions&nbsp;: {{domxref("IDBTransaction")}}
- Définir un intervalle de clés&nbsp;: {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier&nbsp;: {{domxref("IDBObjectStore")}}
- Manipuler des curseurs&nbsp;: {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB&nbsp;: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
