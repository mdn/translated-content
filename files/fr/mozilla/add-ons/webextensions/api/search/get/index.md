---
title: search.get()
slug: Mozilla/Add-ons/WebExtensions/API/search/get
---

{{AddonSidebar()}}

Obtient un tableau de tous les moteurs de recherche installés.

Chaque moteur de recherche renvoyé est identifié par un nom, que vous pouvez passer dans {{WebExtAPIRef("search.search()")}}} pour utiliser ce moteur particulier pour effectuer une recherche.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingEngines = browser.search.get();
```

### Paramètres

Aucun.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un [tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/array) d'objets de moteur de recherche. Chaque objet de moteur de recherche peut contenir les propriétés suivantes :

- `name`
  - : `string`. Le nom du moteur de recherche.
- `isDefault`
  - : `boolean`. `true` si le moteur de recherche est le moteur par défaut. Un seul moteur de recherche peut être le moteur par défaut à un moment donné.
- `alias`{{optional_inline}}
  - : `string`. Si un moteur de recherche a un alias, l'utilisateur peut effectuer une recherche avec un moteur de recherche particulier en entrant l'alias dans la barre d'adresse avant le terme de recherche. Par exemple, si le moteur Wikipédia a un alias "wk", l'utilisateur peut rechercher des pandas dans Wikipédia en entrant "wk pandas" dans la barre d'adresse. L'alias est parfois aussi appelé "mot-clé".
- `favIconUrl`{{optional_inline}}
  - : `string`. L'icône du moteur de recherche, comme une donnée : URL.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Obtenir tous les moteurs de recherche installés :

```js
function retrieved(results) {
  console.log(`There were: ${results.length} search engines retrieved.`);
  for (let searchEngine of results) {
    console.log(JSON.stringify(searchEngine.name));
  }
}

browser.search.get().then(retrieved);
```

{{WebExtExamples}}
