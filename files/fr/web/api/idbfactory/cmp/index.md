---
title: IDBFactory.cmp()
slug: Web/API/IDBFactory/cmp
tags:
  - API
  - IDBFactory
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBFactory/cmp
---
{{APIRef("IndexedDB")}}

La méthode **`cmp()`** de l'interface {{domxref("IDBFactory")}} compare deux valeurs de clé et détermine si celles-ci sont égales et sinon, laquelle est la plus grande. Cette opération est utilisée pour l'enregistrement et le parcours des données.

{{AvailableInWorkers}}

> **Note :** Cette méthode ne doit pas être utilisée pour comparer des valeurs JavaScript. En effet, de nombreuses valeurs JavaScript ne sont pas des valeurs valides pour représenter des clés IndexedDB (les booléens et les objets par exemple), dans ces cas, elles peuvent être traitées comme des clés égales (ainsi IndexedDB ignore les tableaux ayant des propriétés non numériques et les considère comme des tableaux vides, de sorte que les éventuels tableaux non numériques seront considérés comme égaux). Une exception est levée si l'une des valeurs n'est pas une clé valide.

## Syntaxe

    var resultat = window.indexedDB.cmp(a, b);

### Paramètres

- `a`
  - : La première clé pour la comparaison.
- `b`
  - : La deuxième clé pour la comparaison.

### Valeur de retour

Un entier qui indique le résultat de la comparaison. Le tableau ci-dessous indique les valeurs possibles et leur signification :

| Valeur renvoyée | Description                            |
| --------------- | -------------------------------------- |
| -1              | La clé 1 est plus petite que la clé 2. |
| 0               | Les deux clé sont égales.              |
| 1               | La clé 1 est plus grande que la clé 2. |

### Exceptions levées

Cette méthode peut lever une exception {{domxref("DOMException")}} de type :

| Exception                                | Description                               |
| ---------------------------------------- | ----------------------------------------- |
| [`DataError`](/fr/docs/Web/API/DOMError) | L'une des clés fournies n'est pas valide. |

## Exemples

```js
var a = 1;
var b = 2;
var result = window.indexedDB.cmp(a, b);
console.log( "Résultat de la comparaison : " + result );
```

## Spécifications

| Spécification                                                                                                    | État                         | Commentaires |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBFactory-cmp-short-any-first-any-second', 'cmp')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBFactory.cmp")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
