---
title: actions utilisateurs
slug: Mozilla/Add-ons/WebExtensions/User_actions
tags:
  - Add-ons
  - Guide
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/User_actions
---
{{AddonSidebar}}

Certaines API WebExtension exécutent des fonctions qui sont généralement exécutées à la suite d'une action utilisateur. Par exemple:

- une action du navigateur avec un popup affichera le popup lorsque l'utilisateur clique dessus, mais il y a aussi une API {{WebExtAPIRef("browserAction.openPopup")}} permettant à une extension d'ouvrir le popup en programmation.
- si une extension ajoute une barre latérale, elle est généralement ouverte par l'utilisateur via une partie de l'interface utilisateur intégrée du navigateur, comme le menu Affichage/Barre latérale. Mais il y a aussi une API  {{WebExtAPIRef("sidebarAction.open")}} permettant à une extension d'ouvrir leur barre latérale en programmation.

Pour suivre le principe de "pas de  surprises", des APIs comme celle-ci ne peuvent être appelées que de l'intérieur du gestionnaire pour une action de l'utilisateur. Les actions de l'utilisateur comprennent ce qui suit :

- Cliquez sur l'action du navigateur ou de la page de l'extension.
- Sélection d'un élément de menu contextuel défini par l'extension.
- Activation d'un raccourci clavier défini par l'extension (traité uniquement comme une action utilisateur à partir de Firefox 63).
- Cliquer sur un bouton dans une page fournie avec l'extension.

Par exemple:

```js
function handleClick() {
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```

Notez que les actions de l'utilisateur dans les pages Web normales ne sont pas traitées comme des actions de l'utilisateur à cette fin. Par exemple, si un utilisateur clique sur un bouton dans une page Web normale et qu'un script de contenu a ajouté un gestionnaire de clic pour ce bouton et que ce gestionnaire envoie un message à la page d'arrière-plan de l'extension, alors le gestionnaire de message de page d'arrière-plan n'est pas considéré comme traitant une action utilisateur.

De plus, si un gestionnaire d'entrée utilisateur attend une [promise](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise), alors son statut de gestionnaire d'entrée utilisateur est perdu. Par exemple :

```js
async function handleClick() {
  let result = await someAsyncFunction();

  // this will fail, because the handler lost its "user action handler" status
  browser.sidebarAction.open();
}

browser.browserAction.onClicked.addListener(handleClick);
```
