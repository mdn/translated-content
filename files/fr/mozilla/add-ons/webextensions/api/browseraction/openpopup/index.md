---
title: browserAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup
---

{{AddonSidebar}}Ouvrez le popup de l'action du navigateur.

Vous pouvez uniquement appeler cette fonction à partir du gestionnaire pour une [action utilisateur](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions).

## Syntaxe

```js
browser.browserAction.openPopup();
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) cela est résolu sans arguments.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ouvrez la fenêtre contextuelle lorsque l'utilisateur sélectionne un élément de menu contextuel :

```js
browser.menus.create({
  id: "open-popup",
  title: "open popup",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.browserAction.openPopup();
});
```

{{WebExtExamples}}
