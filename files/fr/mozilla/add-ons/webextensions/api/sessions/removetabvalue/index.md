---
title: sessions.removeTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue
---

{{AddonSidebar()}}

Supprime une valeur précédemment stockée par un appel à {{WebExtAPIRef("sessions.setTabValue")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var removing = browser.sessions.removeTabValue(
  tabId, // integer
  key, // string
);
```

### Paramètres

- `tabId`
  - : `integer`. ID de l'onglet dont vous essayez de supprimer les données.
- `key`
  - : `string`. Clé identifiant la valeur particulière à supprimer. Cela doit correspondre à la clé précédemment donnée dans {{WebExtAPIRef("sessions.setTabValue")}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui ne sera résolue aucun argument si l'élément a été supprimé avec succès. Si l'appel a échoué (par exemple, parce que l'ID de l'onglet n'a pas pu être trouvé), la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ce code ajoute deux éléments de menu contextuel: l'un stocke une valeur associée à l'onglet en cours, l'autre le supprime :

```js
async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

async function removeFromActiveTab() {
  let tabArray = await browser.tabs.query({
    currentWindow: true,
    active: true,
  });
  let tabId = tabArray[0].id;
  await browser.sessions.removeTabValue(tabId, "my-key");
}

browser.menus.create({
  id: "add-my-item",
  title: "add item",
  contexts: ["all"],
});

browser.menus.create({
  id: "remove-my-item",
  title: "remove item",
  contexts: ["all"],
});

browser.menus.onClicked.addListener((info) => {
  if (info.menuItemId === "add-my-item") {
    setOnActiveTab();
  } else {
    removeFromActiveTab();
  }
});
```

{{WebExtExamples}}
