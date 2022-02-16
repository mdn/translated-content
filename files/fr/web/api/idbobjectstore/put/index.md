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
{{APIRef("IndexedDB")}}

La méthode **`put()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un autre _thread_, crée [un clone structuré](https://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) de la valeur puis enregistre ce clone dans le magasin d'objet. Cette méthode permet ainsi d'ajouter de nouveaux enregistrements ou de mettre à jour des enregistrements existants dans un magasin d'objet lorsque la transaction est en mode `readwrite` (lecture-écriture)

Si l'enregistrement est stocké avec succès, un évènement de succès sera déclenché sur la requête renvoyée par la méthode. La propriété `result` de cette requête contiendra la clé de l'enregistrement créé ou mis à jour. La propriété `transaction` de cette requête sera la transaction dans laquelle le magasin d'objet est ouvert.

La méthode `put()` permet d'ajouter ou de mettre à jour. Si on souhaite uniquement insérer, on utilisera plutôt {{domxref("IDBObjectStore.add")}}.

{{AvailableInWorkers}}

## Syntaxe

    var request = objectStore.put(monElement);
    var request = objectStore.put(monElement, cleOptionnelle);

### Paramètres

- `monElement`
  - : La valeur qu'on souhaite enregistrer.
- `cleOptionnelle` {{optional_inline}}
  - : La clé qu'on souhaite utiliser pour identifier l'enregistrement. Si cet argument est absent, la valeur par défaut sera {{jsxref("null")}}.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} qui recevra les évènements qui seront déclenchés suite à cette opération.

### Exceptions

Cette méthode peut lever une de ces exceptions {{domxref("DOMException")}} :

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
      <td>
        La transaction associée à l'opération est uniquement
        <a href="/fr/docs/Web/API/IDBTransaction#Constantes"
          >dans un mode de lecture seule</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>
        La transaction rattachée à l'objet
        {{domxref("IDBObjectStore")}} est inactive.
      </td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>L'une de ces conditions est vérifiée :</p>
        <ul>
          <li>
            Le magasin d'objet utilise des clés en ligne (<em>in-line keys</em>)
            ou dispose d'un générateur de clés et le paramètre pour la clé a été
            utilisé.
          </li>
          <li>
            Le magasin d'objet utilise des clés en ligne (<em>in-line keys</em
            >), ne  dispose pas d'un générateur de clés et le paramètre pour la
            clé n'a pas été utilisé.
          </li>
          <li>
            Le magasin d'objet utilise des clés en ligne (<em>in-line keys</em
            >), ne  dispose pas d'un générateur de clés et le chemin de clé du
            magasin d'objet ne déclenche pas une clé valide.
          </li>
          <li>
            Le paramètre pour la clé a été fourni mais la valeur n'est pas une
            clé valide.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        L'objet {{domxref("IDBObjectStore")}} a été supprimé ou
        déplacé.
      </td>
    </tr>
    <tr>
      <td><code>DataCloneError</code></td>
      <td>
        Les données à enregistrer n'ont pas pu être clonées par l'algorithme
        interne.
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans l'exemple suivant, on effectue une requête pour obtenir l'enregistrement correspondant à un titre donné. Lorsque cette requête est réussie, on récupère l'enregistrement via la fonction `onsuccess`. Ensuite, on met à jour une des propriétés de l'enregistrement et on enregistre la valeur mise à jour dans le magasin d'objet avec une autre requête et `put()`.

```js
var title = "Walk dog";

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
};
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBObjectStore-put-IDBRequest-any-value-any-key', 'put()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.put")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
