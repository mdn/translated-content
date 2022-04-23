---
title: Extension pages
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
tags:
  - Débutant
  - User Interface
  - WebExtensions
  - interface utilisateur
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
original_slug: Mozilla/Add-ons/WebExtensions/user_interface/pages_web_incluses
---
{{AddonSidebar()}}

Vous pouvez inclure des pages HTML dans votre extension sous la forme de formulaires, d’aide ou tout autre contenu dont votre extension a besoin.

![](bundled_page_as_panel_small.png)

Ces pages ont également accès aux mêmes API JavaScript privilégiées qui sont disponibles pour les scripts d’arrière‐plan de votre extension, mais elles sont dans leur propre onglet, leur propre file d’attente d’événements JavaScript, leurs propres globales etc.

Pensez à la page d'arrière-plan comme une «&nbsp;page cachée d’extension&nbsp;».

## Spécification des pages d’extension

Vous pouvez inclure des fichiers HTML - et les fichiers CSS ou JavaScript associés - dans votre extension. Les fichiers peuvent être inclus à la racine ou organisés dans des sous‐dossiers.

    /my-extension
        /manifest.json
        /my-page.html
        /my-page.js

## Affichage des pages d’extension

Il existe deux options pour afficher des pages d'extension&nbsp;:  {{WebExtAPIRef("windows.create()")}} et {{WebExtAPIRef("tabs.create()")}}.

À l’aide de `windows.create()`, vous pouvez ouvrir une page HTML intégrée dans un panneau détaché (une fenêtre sans l’interface utilisateur de la barre d’la barre de signet et similaire) pour créer une expérience utilisateur semblable à une boîte de dialogue&nbsp;:

```js
var createData = {
  type: "detached_panel",
  url: "panel.html",
  width: 250,
  height: 100
};
var creating = browser.windows.create(createData);
```

Lorsque la fenêtre n'est plus nécessaire, elle peut être fermée par programme.

Par exemple, après que l’utilisateur a cliqué sur un bouton, en passant l’ID de la fenêtre actuelle à {{WebExtAPIRef("windows.remove()")}}&nbsp;:

```js
document.getElementById("closeme").addEventListener("click", function(){
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Pages d’extension et historique

Par défaut, les pages que vous ouvrez de cette manière seront stockées dans l’historique de l’utilisateur, comme les pages Web normales. Si vous ne voulez pas avoir ce comportement, utilisez {{WebExtAPIRef("history.deleteUrl()")}} pour supprimer l'enregistrement du navigateur&nbsp;:

```js
function onVisited(historyItem) {
  if (historyItem.url == browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({url: historyItem.url});
  }
}

browser.history.onVisited.addListener(onVisited);
```

Pour utiliser l’API historique, vous devez demander la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) «&nbsp;`history`&nbsp;» dans votre fichier [`manifest.json`](/fr/Add-ons/WebExtensions/manifest.json).

## Conception des pages Web

Pour plus de détails sur la façon de concevoir votre page Web pour correspondre au style de Firefox, voir la documentation sur le [système de conception Photon](https://design.firefox.com/photon/index.html) et les [styles de navigateur](/fr/Add-ons/WebExtensions/user_interface/Browser_styles).

## Exemples

Le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilise une action de navigateur&nbsp;:

- [window-manipulator](https://github.com/mdn/webextensions-examples/tree/master/window-manipulator) utilise les options pour créer une fenêtre
