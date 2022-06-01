---
title: sidebarAction.open()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - open
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
---
{{AddonSidebar()}}Ouvrez la barre latérale dans la fenêtre active.

Vous pouvez uniquement appeler cette fonction à l'intérieur du gestionnaire pour une [action utilisateur](/fr/Add-ons/WebExtensions/User_actions).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.sidebarAction.open()
```

### Paramètres

Aucun

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue sans arguments..

## Compatibilité du navigateur

{{Compat("webextensions.api.sidebarAction.open", 10)}}

## Exemples

Ouvrez la barre latérale lorsque l'utilisateur sélectionne un élément de menu contextuel :

```js
browser.menus.create({
  id: "open-sidebar",
  title: "open sidebar",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.open();
});
```

{{WebExtExamples}}
