---
title: Popups
slug: Mozilla/Add-ons/WebExtensions/user_interface/Popups
tags:
  - WebExtensions
  - interface utilisateur
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Popups
---
{{AddonSidebar}}

Une fenêtre contextuelle est une boîte de dialogue associée à un [bouton de la barre d'outils](/fr/Add-ons/WebExtensions/Browser_action) ou à un [bouton de la barre d'adresse](/fr/Add-ons/WebExtensions/Page_actions). Cette page décrit les popups en général, leur spécification, leur débogage, leur redimensionnement et leur conception, ainsi que des exemples d'utilisation..

![](page_action_popup.png)

Lorsque l'utilisateur clique sur le bouton, la fenêtre contextuelle s'affiche. Lorsque l'utilisateur clique n'importe où en dehors de la fenêtre contextuelle, la fenêtre contextuelle est fermée. La fenêtre contextuelle peut être fermée par programmation en appelant [`window.close()`](/fr/docs/Web/API/Window/close) à partir d'un script exécuté dans la fenêtre contextuelle. Cependant, vous ne pouvez pas ouvrir le menu contextuel à partir d'un JavaScript de le l'extension : il ne peut être ouvert qu'en réponse à une action de l'utilisateur.

Vous pouvez définir un raccourci clavier qui ouvre la fenêtre contextuelle en utilisant les raccourcis `"_execute_browser_action"` et `"_execute_page_action"`. Consultez la clé de [`commande`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) de la documentation du manifest.json.

## Spécification d'une fenêtre contextuelle

Le popup est spécifié comme un fichier HTML, qui peut inclure des fichiers CSS et JavaScript, comme le fait une page Web normale. Contrairement à une page normale, le JavaScript peut utiliser toutes les [APIs WebExtension](/fr/Add-ons/WebExtensions/API) auxquelles l'extension possède des [permissions](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions).

Le fichier HTML est inclus dans la WebExtension et spécifié en partie à la clé [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ou [page_action](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) par `"default_popup"` dans le manifest.json :

```json
  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  }
```

Vous pouvez demander au navigateur d'inclure une feuille de style dans votre fenêtre contextuelle qui la rendra compatible avec l'interface utilisateur du navigateur. Pour ce faire, ajoutez `"browser_style": true` dans la clé [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ou [page_action](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action).

Les popups ont une politique de sécurité de contenu qui restreint les sources à partir de laquelle ils peuvent charger des ressources et interdire certaines pratiques dangereuses telles que l'utilisation [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval). Voir la [politique de sécurité du contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)  pour plus de détails à ce sujet.

## Déboguer des fenêtres pop-up

Vous pouvez déboguer la balisage et le javaScript d'un popup en utilisant le débogueur de l'extension, mais vous devrez activer la fonction désactiver de la fonction d'occlusion automatique contextuelle pour éviter que les fenêtres contextuelles ne se cache lorsque vous cliquez à l'extérieur. [En savoir plus sur le débogage des fenêtres pop-up](/fr/Add-ons/WebExtensions/Debugging#Debugging_popups).

## Redimensionnement contextuel

Le redimensionnement automatique des fenêtres contextuelles correspond à leur contenu.
L'algorithme pour cela peut être différent d'un navigateur à l'autre.

Dans Firefox, la taille est calculée juste avant que le popup ne s'affiche, et au plus, 10 fois par seconde après les mutations DOM. Pour les documents de mode strict, la taille est calculée en fonction de la taille de l'élément [`<body>`](/fr/docs/Web/HTML/Element/body).

Pour le mode quirks, c'est l'élément [`<html>`](/fr/docs/Web/HTML/Element/html). Firefox calcule la largeur préférée du contenu de cet élément, le renvoie à cette largeur, puis redimensionne de sorte qu'il n'y a pas de défilement vertical. Il atteindra une taille de **800x600 pixels** au maximum si cela correspond à l'écran de l'utilisateur. (Avant Firefox 60, c'était seulement 680px.) . Si l'utilisateur [déplace le bouton du complément dans le menu](https://support.mozilla.org/en-US/kb/customize-firefox-controls-buttons-and-toolbars#w_customize-the-menu-or-the-toolbar) ou il apparaît dans le dépassement de la barre d'outils, la fenêtre apparaît dans le panneau du menu avec une largeur fixe.

Dans Firefox Android 57, la popup s'ouvre comme une page web dans un nouvel onglet.

## Design de la popup

Pour plus de détails sur la façon de concevoir la page Web de votre popup pour qu'elle corresponde au style de Firefox, voir la documentation de [Photon Design System](https://design.firefox.com/photon/index.html).

## Exemples

Le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilisent l'action du navigateur :

- [beastify](https://github.com/mdn/webextensions-examples/tree/master/beastify) utilise l'action du navigateur.
