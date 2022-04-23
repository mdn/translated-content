---
title: theme.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
tags:
  - Add-ons
  - Event
  - Extensions
  - Theme
  - WebExtensions;
translation_of: Mozilla/Add-ons/WebExtensions/API/theme/onUpdated
---
{{AddonSidebar()}}

L'événement se déclenche lorsqu'un thème fourni en tant qu'extension de navigateur est appliqué ou supprimé, plus précisément :

- Quand un [thème statique](/fr/Add-ons/Themes/Theme_concepts#Static_themes) est installé
- Quand un [thème dynamique](/fr/Add-ons/WebExtensions/API/theme) appelle [`theme.update()`](/fr/Add-ons/WebExtensions/API/theme/update) ou [`theme.reset()`](/fr/Add-ons/WebExtensions/API/theme/update)
- Quand un thème est désinstallé

Notez que cet événement n'est pas déclenché pour les thèmes intégrés.

## Syntaxe

```js
browser.theme.onUpdated.addListener(listener)
browser.theme.onUpdated.removeListener(listener)
browser.theme.onUpdated.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrête d'écouter cet événement. L'argument de `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifie si `listener` est enregistré pour cet événement. Retourne `true` s'il écoute, sinon  `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les paramètres suivants :

    - `updateInfo`

      - : `object`. Un objet contenant deux propriétés :

        - `theme`
          - : `object`. Si l'événement a été déclenché parce qu'un thème fourni par une extension a été supprimé, il s'agira d'un objet vide. Si il a été déclenché parce qu'un thème fourni par une extension a été appliqué, ce sera un objet {{WebExtAPIRef("theme.Theme")}} représentant le thème qui a été appliqué.
        - `windowId`{{optional_inline}}
          - : `integer`. L'ID de la fenêtre pour laquelle le thème a été mis à jour. Si cette propriété n'est pas présente, cela signifie que le thème a été mise à jour globalement.

## Compatibilité du navigateur

{{Compat("webextensions.api.theme.onUpdated", 10)}}

## Exemples

```js
function handleUpdated(updateInfo) {
  if (updateInfo.theme.colors) {
    console.log(`Theme was applied: ${updateInfo.theme}`);
  } else {
    console.log(`Theme was removed`);
  }
}

browser.theme.onUpdated.addListener(handleUpdated);
```

{{WebExtExamples}}
