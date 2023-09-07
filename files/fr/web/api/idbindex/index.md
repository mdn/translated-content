---
title: IDBIndex
slug: Web/API/IDBIndex
---

{{APIRef("IndexedDB")}}

L'interface **`IDBIndex`** de l'{{domxref("IndexedDB_API","API IndexedDB")}} est un accès à un index d'un magasins d'objet. Un index permet de trier les enregistrements d'un magasin d'objet sur une autre clé que la clé primaire.

Un index contient des enregistrements persistent. Chaque enregistrement est composé d'une clé ( la valeur du chemin de clé) et d'une valeur (la clé primaire de l'enregistrement dans le magasin d'objet). Les enregistrements de l'index se mettent automatiquement à jour lorsque un enregistrement du magasin d'objet est ajouté , mise à jour ou supprimé. Chaque enregistrement de l'index ne peut référer qu'a un enregistrement du magasin d'objet. Un magasin d'objet peut avoir plusieurs index et lorsque le magasin d'objet change tout les index sont mis à jour automatiquement.

On peut retrouver les enregistrement sur une partie des clés, voir {{domxref("IDBKeyRange","intervalle de clé")}}.

{{AvailableInWorkers}}

## Méthodes

Hérite de: [EventTarget](/fr/docs/Web/API/EventTarget)

- {{domxref("IDBIndex.count()")}}
  - : Fait un {{domxref("IDBRequest","requête")}} sur l'index. La requête compte le nombre d'enregistrements dans cet index ou sur l'{{domxref("IDBKeyRange","intervalle de clé")}} passé en paramètre.
- {{domxref("IDBIndex.get()")}}
  - : Fait une {{domxref("IDBRequest","requête")}} pour renvoyer le premier enregistrement correspondant à la clé ou l'{{domxref("IDBKeyRange","")}} du magasin d'objet suivant l'index.
- {{domxref("IDBIndex.getKey()")}}
  - : Fait une {{domxref("IDBRequest","requête")}} pour renvoyer la clé primaire correspondant à la clé ou à l'{{domxref("IDBKeyRange","intervalle de clé")}} de l'index. Si une clé est trouvé le résultat de la requête contiendra seulement la clé primaire de l'enregistrement et non l'enregistrement comme le fait {{domxref("IDBIndex.get")}}.
- {{domxref("IDBIndex.getAll()")}}
  - : Fait une {{domxref("IDBRequest","requête")}} qui renvoie un tableau ordonné suivant les clés, des clones structurés des enregistrements de l'{{domxref("IDBIndex","index relié")}}. On peut limité le nombre d'enregistrements en les filtrants suivant leurs clés ou en paramétrant le compteur.
- {{domxref("IDBIndex.getAllKeys()")}}
  - : Ferrais une {{domxref("IDBRequest","requête")}} qui renverrait la liste de toutes les clés des enregistrements de l'index. On pourrait limiter le nombre d'enregistrements en les filtrants suivant leurs clés ou en paramétrant le compteur.
- {{domxref("IDBIndex.openCursor()")}}
  - : Fait une {{domxref("IDBRequest","requête")}} récursive suivant un {{domxref("IDBCursorWithValue","curseur avec valeur")}} qui itère l'index {{domxref("IDBObjectStore","relié")}} sur l'{{domxref("IDBKeyRange","intervalle de clé")}} spécifié.
- {{domxref("IDBIndex.openKeyCursor()")}}
  - : Fait une {{domxref("IDBRequest","requête")}} récursive suivant un {{domxref("IDBCursor","curseur")}} qui itère l'index {{domxref("IDBObjectStore","relié")}} sur l'{{domxref("IDBKeyRange","intervalle de clé")}} spécifié.

## Propriétés

- {{domxref("IDBIndex.isAutoLocale")}} {{readonlyInline}} {{ Non-Standard_inline() }}
  - : Renvoie un {{domxref("Boolean","booléen")}} indiquant si la valeur de `locale` à été paramétré sur `auto` lors de la mise en place de l'index (voir les paramètres `{{domxref("IDBObjectStore.createIndex")}}`).
- {{domxref("IDBIndex.locale")}} {{readonlyInline}} {{ Non-Standard_inline() }}
  - : Renvoie la localisation de l'index (par exemple fr, ou `en-US`) `si la localisation à été spécifie lors de la mise en place de l'index` (voir les paramètres {{domxref("IDBObjectStore.createIndex")}}).
- {{domxref("IDBIndex.name")}} {{readonlyInline}}
  - : Renvoie le nom de l'index.
- {{domxref("IDBIndex.objectStore")}} {{readonlyInline}}
  - : Renvoie un {{domxref("IDBObjectStore","accès au magasin d'objet")}} que référence l'index.
- {{domxref("IDBIndex.keyPath")}} {{readonlyInline}}
  - : Renvoie le chemin de clé de l'index. Si l'index n'est pas [automatiquement mise à jour](/fr/IndexedDB/Index#gloss_auto-populated) la propriété vaux `null`.
- {{domxref("IDBIndex.multiEntry")}} {{readonlyInline}}
  - : Renvoie un {{domxref("Boolean","booléen")}} qui indique comment l'index gère le chemin de clé si c'est un tableau.
- {{domxref("IDBIndex.unique")}} {{readonlyInline}}
  - : Renvoie un {{domxref("Boolean","booléen")}} qui indique l'index interdit la duplication d'enregistrement sur sa clé.

## Exemple

Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index `lName`.

Finalement, On itère sur tous les enregistrements pour en insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.

```js
function displayDataByIndex() {
  tableEntry.innerHTML = "";

  //ouvre un transaction
  var transaction = db.transaction(["contactsList"], "readonly");
  //accés au magasin d'objet
  var objectStore = transaction.objectStore("contactsList");

  //on récupère l'index
  var myIndex = objectStore.index("lName");

  //un curseur qui itère sur l'index
  var request = myIndex.openCursor();
  request.onsuccess = function (event) {
    var cursor = request.result;
    if (cursor) {
      var tableRow = document.createElement("tr");
      tableRow.innerHTML =
        "<td>" +
        cursor.value.id +
        "</td>" +
        "<td>" +
        cursor.value.lName +
        "</td>" +
        "<td>" +
        cursor.value.fName +
        "</td>" +
        "<td>" +
        cursor.value.jTitle +
        "</td>" +
        "<td>" +
        cursor.value.company +
        "</td>" +
        "<td>" +
        cursor.value.eMail +
        "</td>" +
        "<td>" +
        cursor.value.phone +
        "</td>" +
        "<td>" +
        cursor.value.age +
        "</td>";
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log("Tous les enregistrements ont été affichés.");
    }
  };
}
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple en direct](https://mdn.github.io/dom-examples/to-do-notifications/).)
