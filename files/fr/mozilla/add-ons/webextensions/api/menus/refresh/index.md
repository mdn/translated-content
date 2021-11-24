---
title: menus.refresh()
slug: Mozilla/Add-ons/WebExtensions/API/menus/refresh
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - menus
  - refresh
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/refresh
---
{{AddonSidebar()}}

Actualise un menu affiché.

Met à jour les éléments de menu de l'extension dans le menu affiché par le navigateur, y compris les modifications effectuées depuis l'affichage du menu. N'a aucun effet si le menu n'est pas affiché. La reconstruction d'un menu affiché est une opération coûteuse. N'utilisez cette méthode que lorsque cela est nécessaire.

Cela est généralement appelé depuis l'intérieur d'un gestionnaire d'événements {{WebExtAPIRef("menus.onShown")}} après que le gestionnaire a effectué des mises à jour dans le menu.

Firefox rend cette fonction disponible via l'espace de noms `contextMenus` ainsi que l'espace de noms des `menus`.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
browser.menus.refresh()
```

### Paramètres

Aucun.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui se réalise sans arguments.

## Compatibilité du navigateur

{{Compat("webextensions.api.menus.refresh", 10)}}

## Exemples

Cet exemple permet d'afficher le menu contextuel sur un lien, puis met à jour l'élément de menu `openLabelledId` menu item avec le nom d'hôte du lien :

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabelledId, {
    title: `Open (${linkHostname})`
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener(info => {
  if (!info.linkUrl) {
    return;
  }
  let linkElement = document.createElement("a");
  linkElement.href = info.linkUrl;
  updateMenuItem(linkElement.hostname);
});
```

{{WebExtExamples}}
