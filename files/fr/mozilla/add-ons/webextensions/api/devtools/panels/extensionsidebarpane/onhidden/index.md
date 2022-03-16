---
title: devtools.panels.ExtensionSidebarPane.onHidden
slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden
tags:
  - API
  - Add-ons
  - ExtensionSidebarPane
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
  - onHidden
translation_of: >-
  Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/onHidden
original_slug: >-
  Mozilla/Add-ons/WebExtensions/API/devtools.panels/ExtensionSidebarPane/onHidden
---
{{AddonSidebar()}}

Appelé lorsque le volet de la barre latérale est masqué, suite à l'abandon de l'utilisateur.

## Syntaxe

```js
browser.devtools.panels.onHidden.addListener(listener)
browser.devtools.panels.onHidden.removeListener(listener)
browser.devtools.panels.onHidden.hasListener(listener)
```

Les événements ont trois fonctions:

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrête d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute,  sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction appelée lorsque cet événement se produit. Cette fonction sera passée sans arguments.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.ExtensionSidebarPane.onHidden", 10)}}

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
