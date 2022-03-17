---
title: IDBRequest.error
slug: Web/API/IDBRequest/error
tags:
  - API
  - Error
  - IDBRequest
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBRequest/error
---
{{APIRef("IndexedDB")}}

La propriété **`error`** de l'interface {{domxref("IDBRequest")}} renvoie l'erreur associée lorsque la requête est un échec.

{{AvailableInWorkers}}

## Syntaxe

    var myError = request.error;

### Valeur

Une erreur {{domxref("DOMError")}} qui contient l'erreur pertinente. Pour Chrome 48 et les versions ultérieures, cette propriété est une {{domxref("DOMException")}} car `DOMError` a été retiré du standard pour le DOM. Les codes d'erreurs suivants sont utilisés selon les conditions d'erreur :

| Erreur               | Explication                                                                                                                                                                                                                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AbortError`         | Si on annule la transaction en cours, toutes les requêtes en cours reçoivent cette erreur.                                                                                                                                                                                                  |
| `ConstraintError`    | Erreur obtenue lorsqu'on tente d'insérer des données qui ne respectent pas une contrainte. C'est un type d'exception utilisé lorsqu'on crée des magasins d'objet et des index. On aura cette erreur lorsqu'on essaiera par exemple d'ajouter une clé qui existe déjà dans l'enregistrement. |
| `QuotaExceededError` | Erreur obtenue lorsque atteint le quota d'espace disque et que l'utilisateur refuse de céder plus d'espace mémoire.                                                                                                                                                                         |
| `UnknownError`       | Erreur obtenue lorsque l'opération a échoué pour des raisons qui ne sont pas propres à la base de données (par exemple une erreur d'écriture sur le disque).                                                                                                                                |
| `NoError`            | Valeur utilisée lorsque la requête est réussie.                                                                                                                                                                                                                                             |
| `VersionError`       | Erreur obtenue lorsqu'on essaye d'ouvrir une base de données avec une version inférieure à celle dont elle dispose déjà.                                                                                                                                                                    |

En plus des codes d'erreur envoyés à l'objet [`IDBRequest`](/fr/docs/Web/API/IDBRequest), les opérations asynchrones peuvent également déclencher des exceptions. La liste décrit les problèmes qui peuvent se produire lorsque la requête est en cours d'exécution mais d'autres problèmes peuvent apparaître lors de la construction de la requête. Ainsi, si la requête a échoué et que le résultat n'est pas disponible, l'exception `InvalidStateError` sera levée.

## Exemples

Dans l'exemple qui suit, on effectue une requête sur le titre de l'enregistrement. Le gestionnaire d'évèvenement `onsuccess` traite l'enregistrement obtenu depuis le magasin d'objet ({{domxref("IDBObjectStore")}}) et qui est disponible via `objectStoreTitleRequest.result`. Le gestionnaire met ensuite à jour une propriété de l'enregistrement puis replace l'enregistrement mis à jour dans le magasin d'objet.

On dispose également d'une fonction `onerror` qui permet d'indiquer l'erreur qui s'est produite si la requêté échoue. Pour consulter un exemple complet, voir [l'application de notifications To-do](https://github.com/mdn/to-do-notifications/) (cf. [la démonstration _live_](https://mdn.github.io/to-do-notifications/)).

```js
var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On récupère la liste de tâches avec ce titre
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère l'objet du résultat
  var data = objectStoreTitleRequest.result;

  // On met à jour la valeur de la propriété notified avec "yes"
  data.notified = "yes";

  // On crée une autre requête pour replacer l'élément
  // into the database
  var updateTitleRequest = objectStore.put(data);

  // Lorsque la requête est réussie, on utilise à nouveau
  // la fonction the displayData() pour mettre à jour
  // l'affichage
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};

objectStoreTitleRequest.onerror = function() {
  // S'il se produit une erreur pendant la requête
  // on l'enregistre
  console.log("Il y a eu une erreur pour la récupération des données : " + objectStoreTitleRequest.error);
};
```

## Spécifications

| Spécification                                                                    | État                         | Commentaires |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBRequest-error', 'error')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBRequest.error")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
