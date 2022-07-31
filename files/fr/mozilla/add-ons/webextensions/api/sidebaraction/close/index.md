---
title: sidebarAction.close()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - close
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/close
---
{{AddonSidebar()}}

Ferme la barre latérale dans la fenêtre active, s'il s'agit de la barre latérale de l'extension.

Vous pouvez uniquement appeler cette fonction à l'intérieur du gestionnaire pour une [action utilisateur](/fr/Add-ons/WebExtensions/User_actions).

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.sidebarAction.close()
```

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui est résolue sans arguments.

## Compatibilité du navigateur

{{Compat("webextensions.api.sidebarAction.close", 10)}}

## Exemples

Fermez la barre latérale lorsque l'utilisateur sélectionne un élément de menu contextuel :

```js
browser.menus.create({
  id: "close-sidebar",
  title: "close sidebar",
  contexts: ["all"]
});

browser.menus.onClicked.addListener(() => {
  browser.sidebarAction.close();
});
```

{{WebExtExamples}}
