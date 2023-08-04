---
title: pageAction.isShown()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/isShown
---

{{AddonSidebar()}}

Renvoie `true` si l'action de la page est affichée pour l'onglet donné..

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let gettingIsShown = browser.pageAction.isShown(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Un objet contenant le `tabId` à vérifier.

    - `tabId`
      - : `integer`. ID de l'onglet à vérifier.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec `true` si l'action de page de l'extension est affichée pour l'onglet donné, et `false` dans le cas contraire.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Vérifiez l'état de l'onglet actuellement actif :

```js
async function shownInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let shown = await browser.pageAction.isShown({
    tabId: tabs[0].id,
  });
  console.log(shown);
}
```

{{WebExtExamples}}
