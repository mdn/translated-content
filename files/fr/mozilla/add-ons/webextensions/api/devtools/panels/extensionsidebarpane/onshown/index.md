---
title: devtools.panels.ExtensionSidebarPane.onShown
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown
tags:
  - API
  - Add-ons
  - Extensions
  - ExtesionsSidebarPane
  - Reference
  - WebExtensions
  - devtools.panels
  - onShown
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/onShown
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/onShown
---
{{AddonSidebar()}}

Lancé lorsque le volet latéral devient visible suite à un changement d'utilisateur.

## Syntaxe

```js
browser.devtools.panels.onShown.addListener(listener)
browser.devtools.panels.onShown.removeListener(listener)
browser.devtools.panels.onShown.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument de `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction sera passée sans arguments.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.ExtensionSidebarPane.onShown", 10)}}

## Exemples

Créez un volet de barre latérale et journal afficher et masquer les événements.

```js
function onCreated(sidebarPane) {

  sidebarPane.onShown.addListener(() => {
    console.log("Shown");
  });

  sidebarPane.onHidden.addListener(() => {
    console.log("Hidden");
  });

}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).
