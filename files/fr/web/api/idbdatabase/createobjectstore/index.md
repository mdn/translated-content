---
title: IDBDatabase.createObjectStore()
slug: Web/API/IDBDatabase/createObjectStore
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBDatabase/createObjectStore
---
{{APIRef("IndexedDB")}}

La méthode **`createObjectStore()`**, rattachée à l'interface {{domxref("IDBDatabase")}}, permet d'ajouter un magasin d’objet ou un index à la base de donnée et renvoie un accès vers celui-ci.

Cette méthode utilise deux paramètres : le nom du magasin d'objets et un objet qui permettra de définir des propriétés optionnelles supplémentaires.

Cette méthode ne peut être appelée que lors d'une transaction en mode [`versionchange`](/fr/docs/Web/API/IDBTransaction).

{{AvailableInWorkers}}

## Syntaxe

```js
var objectStore = db.createObjectStore(name, optionalParameters);
```

## Paramètres

- `name`
  - : Le nom du magasin d'objet à ajouter. Il est possible d'ajouter un magasin d’objet dont le nom est la chaîne vide (!).
- `optionalParameters` {{optional_inline}}

  - : Un objet qui permet de décrire plus finement le magasin d'objets avec ces propriétés :

    | Propriété       | Description                                                                                                                                                                           |
    | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `keyPath`       | Le chemin de la clé utilisé par le magasin d'objet. Si ce paramètre est vide ou non spécifié, le magasin d'objets utilisera une clé externe. Le `keyPath` peut aussi être un tableau. |
    | `autoIncrement` | Si `true`, le magasin d’objet implémentera un générateur de clé. La valeur par défaut est `false`.                                                                                    |

    Les autres propriétés seront ignorés.

### Valeur de retour

- {{domxref("IDBObjectStore")}}
  - : Le magasin d'objets qui vient d'être créé.

## Exceptions

- `InvalidStateError`
  - : Cette exception {{domxref("DOMException")}} est levée si la méthode n'est pas appelée lors d'une transaction en mode `versionchange`. Pour les anciens navigateurs basés sur WebKit, il faut d'abord appeler {{domxref("IDBVersionChangeRequest.setVersion")}}.
- `TransactionInactiveError`
  - : Cette exception {{domxref("DOMException")}} est levée si la méthode est appelée sur une base de données qui n'existe pas (elle a par exemple été effacée). Dans les versions antérieures à Firefox 41, ce dernier levait une erreur `InvalidStateError`, cela est désormais corrigé (cf. {{bug("1176165")}}).
- `ConstraintError`
  - : Un magasin d'objet portant le même nom (la casse est importante) existe déjà dans cette base de donnée.
- `InvalidAccessError`
  - : Si la valeur `autoIncrement` est à `true` et que le chemin de clé n'est pas renseigné ou est un tableau vide.

## Exemple

```js
 // Ouverture de la base de données
  var request = window.indexedDB.open("toDoList", 4);

  /* Gestionnaire d'événement qui intervient lors de la
     mise en place d'une nouvelle version de la base de
     données, que la base n'existe pas et soit ajoutée
     ou qu'un nouveau numéro de version soit passé à
     window.indexedDB.open
     Il est seulement mis en œuvre dans les
     navigateurs récents */
  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '<li>Erreur du chargement de la base de données.</li>';
    };

    // On ajoute un magasin d'objet à la base de données

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // définition des index de ce magasin d'objets

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '<li>Magasin d\'objet ajouté.</li>';
  };
```

## Spécifications

| Spécification                                                                                                                                                                                                            | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBDatabase-createObjectStore-IDBObjectStore-DOMString-name-IDBObjectStoreParameters-optionalParameters', 'createObjectStore()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBDatabase.createObjectStore")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
