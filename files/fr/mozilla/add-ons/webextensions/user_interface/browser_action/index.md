---
title: Bouton de la barre d'outils
slug: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Browser_action
---
{{AddonSidebar}}

Généralement appelé comme une [action de navigateur](/fr/Add-ons/WebExtensions/API/browserAction), cette option d'interface utilisateur est un bouton ajouté à la barre d'outils du navigateur. Les utilisateurs cliquent sur le bouton pour interagir avec votre extension.
![](browser-action.png)

Le bouton de la barre d'outils (action du navigateur) est très similaire au bouton de la barre d'adresse (action de la page). Pour connaître les différences et savoir quand utiliser quoi, voir [les actions de page et les actions du navigateur](/fr/Add-ons/WebExtensions/user_interface/Page_actions#Page_actions_and_browser_actions).

## Spécification de l'action du navigateur

Vous définissez les propriétés de l'action du navigateur à l'aide de la clé  [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) dans manifest.json:

```json
"browser_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?"
}
```

La seule clé obligatoire est `default_icon`.

Il existe deux façons de spécifier une action du navigateur: avec ou sans [popup](/fr/Add-ons/WebExtensions/Popups). Si vous ne spécifiez pas de popup, lorsque l'utilisateur clique sur le bouton, un événement est envoyé à l'extension, que celle-ci attend pour utiliser  [`browserAction.onClicked`](/fr//Add-ons/WebExtensions/API/BrowserAction/onClicked) :

```js
browser.browserAction.onClicked.addListener(handleClick);
```

Si vous spécifiez une fenêtre contextuelle, l'événement de clic n'est pas envoyé : A la place, le popup s'affiche lorsque l'utilisateur clique sur le bouton. L'utilisateur peut interagir avec le popup et il se ferme automatiquement lorsque l'utilisateur clique à l'extérieur. Consulter l'article [Popup ](/fr/Add-ons/WebExtensions/Popups)pour plus de détails sur la création et la gestion des fenêtres pop-up.

Notez que votre extension ne peut avoir qu'une seule action de navigateur.

Vous pouvez modifier plusieurs propriétés d'action du navigateur de manière programmée à l'aide de l'API [`action du navigateur`](/fr/Add-ons/WebExtensions/API/browserAction).

## Icônes

Pour plus d'informations sur la création d'icônes à utiliser avec l'action de votre navigateur, voir [Iconographie ](https://design.firefox.com/photon/visuals/iconography.html)dans la documentation [Photon Design System](https://design.firefox.com/photon/index.html).

## Exemples

Le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilisent les actions du navigateur:

- [bookmark-it](https://github.com/mdn/webextensions-examples/blob/master/bookmark-it/) utilise il utilise une action de navigateur sans popup
- [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) utilise une action de navigateur avec un popup.
