---
title: contextualIdentities.update()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/update
---

{{AddonSidebar()}}

Met à jour les propriétés d'une identité contextuelle, compte tenu de son ID de cookie.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var createContext = browser.contextualIdentities.update(
  cookieStoreId, // string
  details, // object
);
```

### Paramètres

- `cookieStoreId`
  - : `string`. L'identifiant du cookie store de cette identité contextuelle. Étant donné que les identités contextuelles ont chacune leur propre magasin de cookies, cela sert d'identifiant pour l'identité contextuelle elle-même.
- `details`

  - : `object`. Un objet contenant de nouvelles valeurs pour les propriétés que vous souhaitez modifier. Cela peut contenir l'une des propriétés suivantes :

    - `name` {{optional_inline}}
      - : `string`. Un nouveau nom pour l'identité. Cela sera affiché dans l'interface utilisateur du navigateur, leur permettant d'ouvrir un nouvel onglet dans l'identité. Il sera également affiché dans la barre d'URL pour les onglets appartenant à cette identité.
    - `color` {{optional_inline}}

      - : `string`. Une nouvelle couleur pour l'identité. Cela sera utilisé pour mettre en évidence les onglets appartenant à cette identité. Vous pouvez fournir l'une des valeurs suivantes ici :

        - "blue"
        - "turquoise"
        - "green"
        - "yellow"
        - "orange"
        - "red"
        - "pink"
        - "purple"
        - "toolbar"

    - `icon` {{optional_inline}}

      - : `string`. Une nouvelle icône pour l'identité. Vous pouvez fournir l'une des valeurs suivantes ici :

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

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} qui décrit l'identité mise à jour. Si l'identité n'a pas pu être trouvée ou si la fonctionnalité d'identités contextuelles n'est pas activée, la promesse est rejetée.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple met à jour l'identité contextuelle dont l'ID est "firefox-container-1" pour avoir un nouveau nom, une nouvelle couleur et une nouvelle icône :

```js
function onUpdated(context) {
  console.log(`New identity's name: ${context.name}.`);
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities
  .update("firefox-container-1", {
    name: "my-thing",
    color: "purple",
    icon: "briefcase",
  })
  .then(onUpdated, onError);
```

{{WebExtExamples}}
