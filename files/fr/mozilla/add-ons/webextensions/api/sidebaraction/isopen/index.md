---
title: sidebarAction.isOpen()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/isOpen
---

{{AddonSidebar()}}

Renvoie `true` si la barre latérale de l'extension est ouverte dans une fenêtre donnée.

Cette fonction accepte un `windowId` en paramètre :

- Si vous fournissez `windowId`, la fonction vérifie la fenêtre du navigateur.
- Si vous omettez `windowId`, la fonction vérifie la fenêtre du navigateur la plus haute.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let gettingIsOpen = browser.sidebarAction.isOpen(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Un objet contenant éventuellement le `windowId` à vérifier.

    - `windowId` {{optional_inline}}
      - : `integer`. ID d'une fenêtre de navigateur à vérifier. Si omis par défaut, il s'agit de {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}, qui fait référence à la fenêtre du navigateur la plus haute.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec `true` si la barre latérale de l'extension est ouverte dans la fenêtre donnée, ou `false` dans le cas contraire.

## Exemples

Vérifiez la fenêtre la plus haute :

```js
browser.sidebarAction.isOpen({}).then((result) => {
  console.log(result);
});
```

Vérifiez toutes les fenêtres ouvertes :

```js
async function checkWindow(windowId) {
  let result = await browser.sidebarAction.isOpen({ windowId });
  console.log(`window: ${windowId} status: ${result}`);
}

browser.windows.getAll().then((all) => {
  for (let { id } of all) {
    checkWindow(id);
  }
});
```

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}
