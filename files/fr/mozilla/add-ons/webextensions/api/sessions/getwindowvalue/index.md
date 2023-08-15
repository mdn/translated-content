---
title: sessions.getWindowValue()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue
---

{{AddonSidebar()}}

Récupère une valeur précédemment stockée par un appel à {{WebExtAPIRef("sessions.setWindowValue")}}.

Vous pouvez récupérer une valeur d'une fenêtre même sur un cycle de fermeture / restauration : si vous définissez une valeur, l'utilisateur ferme la fenêtre, puis restaure la fenêtre à l'aide de la fonction "restaurer la fenêtre" du navigateur (par exemple, en appuyant sur Control+Shift+N),vous pourrez récupérer la valeur de la fenêtre restaurée. otez cependant qu'une fenêtre restaurée n'obtient pas le même ID que l'original, donc l'ID que vous passez dans `getWindowValue()` sera différent de l'ID que vous avez passé dans `setWindowValue()`, même s'ils se réfèrent tous les deux à la même fenêtre.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var retrieving = browser.sessions.getWindowValue(
  windowId, // integer
  key, // string
);
```

### Paramètres

- `windowId`
  - : `integer`. ID de la fenêtre dont vous essayez de récupérer les données.
- `key`
  - : `string`. Clé identifiant la valeur particulière à récupérer. Cela doit correspondre à la clé précédemment donnée dans {{WebExtAPIRef("sessions.setWindowValue")}}.

### Valeure retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera résolue avec la valeur si elle existe, ou `undefined` si elle n'existe pas. Si l'appel a échoué (par exemple, parce que l'ID de la fenêtre n'a pas pu être trouvé), la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Consignez la valeur de "my-key" pour toutes les fenêtres nouvellement créées (cela inclura toutes les fenêtres qui ont été restaurées) :

```js
function onGetResolved(r) {
  console.log(`success: ${r}`);
}

function onGetRejected(e) {
  console.log(`error: ${e}`);
}

browser.windows.onCreated.addListener((window) => {
  browser.sessions
    .getWindowValue(window.id, "my-key")
    .then(onGetResolved, onGetRejected);
});
```

{{WebExtExamples}}
