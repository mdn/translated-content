---
title: menus.getTargetElement()
slug: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
tags:
  - API
  - Méthode
  - Reference
  - WebExtensions
  - getTargetElement
  - menus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement
---
{{AddonSidebar}}

Renvoie l'élément pour un `targetElementId` donné

Cette méthode est disponible pour tous les contextes de script d'extension (scripts de contenu, pages de fond et autres pages d'extension) et retourne l'élément pour un  `info.targetElementId` donnée, à condition que l'élément existe toujours dans le document où la méthode est appelée.

La méthode ne fonctionne que dans le document qui inclut l'élément cliqué avec le bouton droit de la souris et la méthode `targetElementId` expire lorsque l'utilisateur ouvre un autre menu contextuel.

> **Note :** `menus.getTargetElement` ne retourne l'élément demandé que s'il est appelé dans le même contexte que le document qui contient l'élément, par exemple en utilisant des scripts de contenu (comme dans l'exemple ci-dessous).

Une extension nécessite la permission "menus" pour utiliser cette API

## Syntaxe

    let elem = browser.menus.getTargetElement(targetElementId);

### Paramètres

- `targetElementId`
  - : La propriété de l'objet `{{WebExtAPIRef("menus.OnClickData")}}` passé au gestionnaire `{{WebExtAPIRef("menus.onClicked")}}`ou à l'événement `{{WebExtAPIRef("menus.onShown")}}`.

### Valeur retournée

L'élément auquel se réfère le paramètre `targetElementId`. Si le paramètre `targetElementId` n'est pas valide, La méthode retourne `null`.

## Exemples

L'exemple suivant utilise la méthode `getTargetElement` pour obtenir l'élément auquel se réfère la propriété `info.targetElementId` puis le supprime.

```js
browser.menus.create({
  title: "Remove element",
  documentUrlPatterns: ["*://*/*"],
  contexts: ["audio", "editable", "frame", "image", "link", "page", "password", "video"],
  onclick(info, tab) {
    browser.tabs.executeScript(tab.id, {
      frameId: info.frameId,
      code: `browser.menus.getTargetElement(${info.targetElementId}).remove();`,
    });
  },
});
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.menus.getTargetElement")}}

## voir aussi

- {{WebExtAPIRef("menus.create")}}
- {{WebExtAPIRef("menus.OnClickData")}}
