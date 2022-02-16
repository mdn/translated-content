---
title: sessions.getTabValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - getTabValue
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue
---
{{AddonSidebar()}}

Récupère une valeur précédemment stockée par un appel à  {{WebExtAPIRef("sessions.setTabValue")}}.

Vous pouvez récupérer une valeur d'un onglet même au cours d'un cycle de fermeture / restauration: si vous définissez une valeur, l'utilisateur ferme l'onglet, puis restaure l'onglet à l'aide de la fonction "restaurer l'onglet" du navigateur (par exemple, en appuyant sur Control+Shift+T), then you will be able to retrieve the value from the restored tab. vous pourrez alors récupérer la valeur de l'onglet restauré. Notez cependant qu'un onglet restauré n'obtient pas le même ID que l'original, donc l'ID que vous passez dans `getTabValue()` sera différent de l'ID que vous avez passé dans `setTabValue()`, même s'ils font tous deux référence au même onglet.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var retrieving = browser.sessions.getTabValue(
  tabId,    // integer
  key       // string
)
```

### Paramètres

- `tabId`
  - : `integer`. ID de l'onglet dont vous essayez de récupérer les données.
- `key`
  - : `string`. Clé identifiant la valeur particulière à récupérer. Cela doit correspondre à la clé précédemment donnée dans {{WebExtAPIRef("sessions.setTabValue")}}.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera résolue avec la valeur si elle existe, ou `undefined`.  Si elle n'existe pas. Si l'appel a échoué (par exemple, parce que l'ID de l'onglet n'a pas pu être trouvé), la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.sessions.getTabValue", 10)}}

## Exemples

Consignez la valeur de "my-key" pour tous les nouveaux onglets créés (cela inclura tous les onglets qui ont été restaurés) :

```js
function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.tabs.onCreated.addListener((tab) => {
  browser.sessions.getTabValue(tab.id, "my-key").then(onGetResolved, onGetRejected);
});
```

{{WebExtExamples}}
