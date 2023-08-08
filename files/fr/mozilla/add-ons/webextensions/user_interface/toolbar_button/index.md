---
title: Actions du navigateur
slug: Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button
---

{{AddonSidebar}}

Une action du navigateur est un bouton que vous pouvez ajouter à la barre d'outils du navigateur. Les utilisateurs peuvent cliquer sur le bouton pour interagir avec votre extension.

![](browser-action.png)

Il existe deux façons de spécifier une action du navigateur : avec une [fenêtre contextuelle](/fr/Add-ons/WebExtensions/Popups), ou sans fenêtre contextuelle.

Si vous ne spécifiez pas de popup, alors lorsque l'utilisateur clique sur le bouton, un événement est envoyé à l'extension, que vous pouvez écouter à l'aide de [`browserAction.onClicked`](/fr/Add-ons/WebExtensions/API/BrowserAction/onClicked):

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Si vous spécifiez un popup, l'événement click n'est pas distribué : au lieu de cela, le popup sera affiché lorsque l'utilisateur clique sur le bouton. L'utilisateur pourra interagir avec le popup et il se fermera automatiquement lorsque l'utilisateur clique à l'extérieur.

Notez que votre extension ne peut avoir qu'une seule action du navigateur.

## Specification de l'action de navigateur

Vous définissez les propriétés de l'action du navigateur - icône, titre, popup - en utilisant la clé [`browser_action`](/fr/Add-ons/WebExtensions/manifest.json/browser_action) dans manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

La seule clé obligatoire est `default_icon`. Vous pouvez changer n'importe laquelle de ces propriétés par programme à l'aide de l'API [`browserAction`](/fr/Add-ons/WebExtensions/API/browserAction) .

## Exemples

Le repo [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples d'extensions qui utilisent les actions du navigateur :

- [bookmark-it](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/) utilise une action de navigateur sans popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) utilise une action de navigateur avec une fenêtre popup
