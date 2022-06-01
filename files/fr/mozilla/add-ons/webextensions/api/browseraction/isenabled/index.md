---
title: browserAction.isEnabled()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - browserAction
  - isEnabled
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction/isEnabled
---
{{AddonSidebar()}}

Renvoie `true` si l'action du navigateur est activée.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let gettingIsEnabled = browser.browserAction.isEnabled(
  details // object
)
```

### Paramètres

- `details`

  - : `object`. Un objet contenant éventuellement le `tabId` ou `windowId` à vérifier.

    - `tabId` {{optional_inline}}
      - : `integer`. ID d'un onglet à vérifier
    - `windowId` {{optional_inline}}
      - : `integer`. ID d'une fenêtre à vérifier.

<!---->

- Si windowId et tabId sont tous les deux fournis, la fonction échoue.
- Si windowId et tabId sont tous les deux omis, l'état global activé/désactivé est renvoyé.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec `true` si l'action du navigateur de l'extension est activée, et `false` dans le cas contraire.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction.isEnabled",2)}}

## Exemples

Vérifiez l'état global :

```js
browser.browserAction.isEnabled({}).then(result => {
  console.log(result);
});
```

Vérifiez l'état de l'onglet actuellement actif :

```js
async function enabledInActiveTab() {
  let tabs = await browser.tabs.query({
    currentWindow:true,
    active: true
  });
  let enabled = await browser.browserAction.isEnabled({
    tabId: tabs[0].id
  });
  console.log(enabled);
}
```

{{WebExtExamples}}
