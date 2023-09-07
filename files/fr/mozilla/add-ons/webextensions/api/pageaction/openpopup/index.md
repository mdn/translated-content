---
title: pageAction.openPopup()
slug: Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup
---

{{AddonSidebar()}}Ouvrez le menu contextuel de l'action de la page.

Vous pouvez uniquement appeler cette fonction à partir du gestionnaire pour une [action utilisateur](/fr/Add-ons/WebExtensions/User_actions).

## Syntaxe

```js
browser.pageAction.openPopup();
```

### Paramètres

None.

### Valeur retourné

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue sans arguments.

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
  browser.pageAction.openPopup();
});
```

{{WebExtExamples}}
