---
title: sessions.removeWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - removeWindowsValue
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue
---
{{AddonSidebar()}}

Supprime une valeur précédemment stockée par un appel à {{WebExtAPIRef("sessions.setWindowValue")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.sessions.removeWindowValue(
  windowId,    // integer
  key          // string
)
```

### Paramètres

- `windowId`
  - : `integer`. ID de la fenêtre dont vous essayez de supprimer les données.
- `key`
  - : `string`. lé identifiant la valeur particulière à supprimer. Cela doit correspondre à la clé précédemment donnée dans {{WebExtAPIRef("sessions.setWindowValue")}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui ne sera résolue aucun argument si l'élément a été supprimé avec succès. Si l'appel a échoué (par exemple, parce que l'ID de la fenêtre n'a pas pu être trouvé), la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.sessions.removeWindowValue", 10)}}

## Exemples

Ce code ajoute deux éléments de menu contextuel: l'un stocke une valeur associée à la fenêtre courante, l'autre la supprime :

```js
async function setOnActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.setWindowValue(currentWindow.id, "my-key", "my-value");
}

async function removeFromActiveWindow() {
  let currentWindow = await browser.windows.getLastFocused();
  await browser.sessions.removeWindowValue(currentWindow.id, "my-key");
}

browser.menus.create({
  id: "add-my-item",
  title: "add item",
  contexts: ["all"]
});

browser.menus.create({
  id: "remove-my-item",
  title: "remove item",
  contexts: ["all"]
});

browser.menus.onClicked.addListener((info) => {
  if (info.menuItemId === "add-my-item") {
    setOnActiveWindow();
  } else {
    removeFromActiveWindow();
  }
});
```

{{WebExtExamples}}
