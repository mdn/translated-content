---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
---

{{AddonSidebar()}}

Obtient des informations sur toutes les identités contextuelles ou sur les identités contextuelles correspondant à un argument de filtre donné.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var getContext = browser.contextualIdentities.query(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Un objet qui peut être utilisé pour filtrer les identités contextuelles renvoyées. Cela peut contenir l'une des propriétés suivantes :

    - `name` {{optional_inline}}
      - : `string`. Renvoie uniquement les identités contextuelles avec ce nom.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau d'objets {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} chacun décrivant une seule identité. Si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Retrieve all contextual identities, and log their names :

```js
function onGot(contexts) {
  for (let context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.query({}).then(onGot, onError);
```

Récupérez toutes les identités contextuelles dont les noms sont "my-thing", et consignez leurs noms :

```js
function onGot(contexts) {
  for (let context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .query({
    name: "my-thing",
  })
  .then(onGot, onError);
```

{{WebExtExamples}}
