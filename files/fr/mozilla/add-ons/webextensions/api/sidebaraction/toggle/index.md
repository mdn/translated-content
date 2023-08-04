---
title: sidebarAction.toggle()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/toggle
---

{{AddonSidebar()}}

Permet de basculer la visibilité de la barre latérale dans la fenêtre active, si la barre latérale appartient à l'extension.

Vous ne pouvez appeler cette fonction que depuis l'intérieur du gestionnaire pour une [action utilisateur](/fr/docs/Mozilla/Add-ons/WebExtensions/User_actions).

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.sidebarAction.toggle();
```

### Paramètres

Aucune.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue sans discussion.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Bascule la barre latérale lorsque l'utilisateur sélectionne un élément dans le menu contextuel :

```js
browser.menus.create({
  id: "toggle-sidebar",
  title: "Toggle sidebar",
  contexts: ["all"],
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.toggle();
});
```

{{WebExtExamples}}
