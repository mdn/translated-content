---
title: contextualIdentities.create()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/create
---

{{AddonSidebar()}}

Crée une nouvelle identité contextuelle. Une fois créée, l'utilisateur pourra créer de nouveaux onglets appartenant à cette identité contextuelle, tout comme ils peuvent le faire avec les identités intégrées.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var createContext = browser.contextualIdentities.create(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Un objet contenant des propriétés pour la nouvelle identité contextuelle. Cela contient les propriétés suivantes :

    - `name`
      - : `string`. Le nom de la nouvelle identité. Cela sera affiché dans l'interface utilisateur du navigateur, leur permettant d'ouvrir un nouvel onglet appartenant à l'identité. Il sera également affiché dans la barre d'URL pour les onglets appartenant à cette identité.
    - `color`

      - : `string`. La couleur associée à la nouvelle identité. Cela sera utilisé pour mettre en évidence les onglets appartenant à cette identité. Vous pouvez fournir l'une des valeurs suivantes ici :

        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon`

      - : `string`. Le nom d'une icône à afficher dans la barre d'URL pour les onglets appartenant à cette identité. Vous pouvez fournir l'une des valeurs suivantes ici :

        - "fingerprint"
        - "briefcase"
        - "dollar"
        - "cart"
        - "circle"
        - "gift"
        - "vacation"
        - "food"
        - "fruit"
        - "pet"
        - "tree"
        - "chill"
        - "fence"

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} qui décrit la nouvelle identité. Si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple crée une nouvelle identité contextuelle et enregistre son ID de cookie :

```js
function onCreated(context) {
  console.log(`New identity's ID: ${context.cookieStoreId}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .create({
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onCreated, onError);
```

{{WebExtExamples}}
