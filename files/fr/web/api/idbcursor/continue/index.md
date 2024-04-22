---
title: IDBCursor.continue()
slug: Web/API/IDBCursor/continue
---

{{APIRef("IndexedDB")}}

La méthode **`continue()`** de l'interface {{domxref("IDBCursor")}} fait avancer le curseur jusqu'à la prochaine position qui corrrespond à une clé donnée si celle-ci est passée en paramètre, si aucune clé n'est indiquée, le curseur avancera à la position qui suit immédiatement la position actuelle (dans la direction de progression du curseur).

{{AvailableInWorkers}}

## Syntaxe

```js
curseur.continue(cléOptionnelle);
```

### Paramètres

- `cléOptionnelle`
  - : La clé sur laquelle se positionne le curseur.

### Exceptions

Cette méthode peut déclencher des exceptions {{domxref("DOMException")}} de type :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>La transaction de l'IDBCursor est inactive.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>
          Le paramètre <code><em>cléOptionnelle</em></code> peut:
        </p>
        <ul>
          <li>Être invalide.</li>
          <li>
            Être inférieur ou égal à la position de ce curseur et la direction
            du curseur <code>next</code> ou <code>nextunique</code>.
          </li>
          <li>
            Être supérieur ou égal à la position de ce curseur et la direction
            de ce curseur <code>prev</code> ou <code>prevunique</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>Le curseur est en itération ou il a itéré au-delà de la plage.</td>
    </tr>
  </tbody>
</table>

## Exemple

Dans ce petit morceau de code, on fait une transaction, on récupère un magasin d'objet, puis on utilise un curseur afin d'itérer sur les enregistrements contenus dans le magasin. Il n'est pas nécessaire de sélectionner les données selon une clé, on peut simplement toutes les récupérer. On notera qu'à chaque itération de la boucle, on récupère les données correspondantes à l'enregistrement grâce au curseur sous la forme `curseur.value.toto`. Pour étudier un exemple de travail complet, voir [notre exemple IDBCursor](https://github.com/mdn/dom-examples/tree/main/indexeddb-examples/idbcursor) ([voir l'exemple live](https://mdn.github.io/dom-examples/indexeddb-examples/idbcursor/)).

```js
function afficheDonnee() {
  var transaction = db.transaction(["granListAlbum"], "readonly");
  var objectStore = transaction.objectStore("granListAlbum");

  objectStore.openCursor().onsuccess = function (event) {
    var curseur = event.target.result;
    if (curseur) {
      var listItem = document.createElement("li");
      listItem.innerHTML =
        curseur.value.titreAlbum + ", " + curseur.value.annee;
      list.appendChild(listItem);

      curseur.continue();
    } else {
      console.log("Entrées toutes affichés.");
    }
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
