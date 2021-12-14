---
title: sessions.setTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - sessions
  - setTabValue
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue
---
{{AddonSidebar()}}

Stocke une paire clé / valeur à associer à un onglet donné. Vous pouvez ensuite récupérer cette valeur en utilisant {{WebExtAPIRef("sessions.getTabValue")}}.

Notez que ces données ne seront visibles que par l'extension qui l'a définie, et non par les autres extensions.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var storing = browser.sessions.setTabValue(
  tabId,    // integer
  key,      // string
  value     // string or object
)
```

### Paramètres

- `tabId`
  - : `integer`. ID de l'onglet avec lequel vous souhaitez associer les données.
- `key`
  - : `string`. Clé que vous pouvez utiliser ultérieurement pour récupérer cette valeur de données particulière.
- `value`
  - : `string` ou `object`. S'il s'agit d'un objet, il est [stringified](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), donc les méthodes d'objet, par exemple, seront omises. Si une fonction est donnée ici, elle sera stockée sous la forme `null`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera résolue sans argument si l'appel a réussi. Si l'appel a échoué (par exemple, parce que l'ID de l'onglet n'a pas pu être trouvé), la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.sessions.setTabValue", 10)}}

## Exemples

Définissez une valeur sur l'onglet actif lorsque l'utilisateur sélectionne un élément de menu. Notez que vous aurez besoin de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "menus" pour exécuter cet exemple :

```js
async function setOnActiveTab() {
  let tabArray = await browser.tabs.query({currentWindow: true, active: true});
  let tabId = tabArray[0].id;
  await browser.sessions.setTabValue(tabId, "my-key", "my-value");
}

browser.menus.create({
  id: "my-item",
  title: "my item",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(setOnActiveTab);
```

{{WebExtExamples}}
