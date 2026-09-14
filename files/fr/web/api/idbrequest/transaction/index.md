---
title: IDBRequest.transaction
slug: Web/API/IDBRequest/transaction
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

La propriété **`transaction`** en lecture seule de l'interface IDBRequest renvoie la transaction pour la requête, c'est-à-dire la transaction dans laquelle la requête est effectuée.

Cette propriété peut être `null` pour les requêtes non effectuées dans des transactions, comme pour les requêtes renvoyées par {{domxref("IDBFactory.open")}} — dans ce cas, vous vous connectez simplement à une base de données, donc il n'y a pas de transaction à renvoyer. Si une mise à niveau de version est nécessaire lors de l'ouverture d'une base de données, alors pendant le gestionnaire d'événements {{domxref("IDBOpenDBRequest.upgradeneeded_event", "upgradeneeded")}}, la propriété **`transaction`** sera une {{domxref("IDBTransaction")}} avec {{domxref("IDBTransaction.mode", "mode")}} égal à `"versionchange"`, et peut être utilisée pour accéder aux magasins d'objets et index existants, ou annuler la mise à niveau. Après la mise à niveau, la propriété **`transaction`** sera à nouveau `null`.

### Valeur

Une {{domxref("IDBTransaction")}}.

## Exemple

L'exemple suivant demande un titre d'enregistrement donné, `onsuccess` obtient l'enregistrement associé du {{domxref("IDBObjectStore","magasin d'objects")}} (mis à disposition en tant que `objectStoreTitleRequest.result`), on met à jour une propriété de l'enregistrement, puis le sauve dans le magasin d'objects. La transaction à l'origine de la deuxième requête est affichée sur la console du développeur (Ps, les deux requêtes proviennent de la même transaction). En bas est une fonction onerror qui affiche le code d'erreur si la requête échoue. Pour un exemple de travail complet, voir notre application [Notifications des tâches à faire <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple en direct](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
const title = "Chien de garde";

// Ouvrez une transaction comme d'habitude
const objectStore = db
  .transaction(["listeDeTaches"], "readwrite")
  .objectStore("listeDeTaches");

// Obtenez l'objet "listeDeTaches" qui a ce titre
const objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = () => {
  // Prenez l'objet de données renvoyé comme résultat
  const data = objectStoreTitleRequest.result;

  // Mettre à jour la valeur notified de l'objet à "oui"
  data.notified = "oui";

  // Créer une autre requête qui insère le nouvelle élément dans la base de données
  const updateTitleRequest = objectStore.put(data);

  // Affiche la transaction à l'origine de la deuxième requête
  console.log(
    " la transaction à l'origine de ces requêtes est " +
      updateTitleRequest.transaction,
  );

  // Lorsque cette requête réussit, appelle de la fonction displayData() pour
  // mettre à jour l'affichage
  updateTitleRequest.onsuccess = () => {
    displayData();
  };
};
```

Cet exemple montre comment la propriété **`transaction`** peut être utilisé pendant une mise à niveau de version pour accéder à des {{domxref("IDBObjectStore","magasins d'objects")}} existants&nbsp;:

```js
const openRequest = indexedDB.open("db", 2);
console.log(openRequest.transaction); // Affiche "null".

openRequest.onupgradeneeded = (event) => {
  console.log(openRequest.transaction.mode); // Affiche "versionchange".
  const db = openRequest.result;
  if (event.oldVersion < 1) {
    // Nouvelle base de données, créer un magasin d'objets "livres".
    db.createObjectStore("livres");
  }
  if (event.oldVersion < 2) {
    // Mise à niveau de la base de données v1: ajoute un index sur "titre"
    // pour stocker les livres.
    const bookStore = openRequest.transaction.objectStore("livres");
    bookStore.createIndex("par_titre", "titre");
  }
};

openRequest.onsuccess = () => {
  console.log(openRequest.transaction); // Affiche "null".
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Démarrer des transactions&nbsp;: {{domxref("IDBDatabase")}}
- Utiliser des transactions&nbsp;: {{domxref("IDBTransaction")}}
- Définir une plage de clés&nbsp;: {{domxref("IDBKeyRange")}}
- Récupérer et modifier vos données&nbsp;: {{domxref("IDBObjectStore")}}
- Utiliser des curseurs&nbsp;: {{domxref("IDBCursor")}}
- Exemple de référence&nbsp;: [Notifications des tâches à faire <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([Voir l'exemple en direct](https://mdn.github.io/dom-examples/to-do-notifications/)).
