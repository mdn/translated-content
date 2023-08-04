---
title: Barres laterales
slug: Mozilla/Add-ons/WebExtensions/user_interface/Sidebars
---

{{AddonSidebar}}

Une barre latérale est un volet qui s'affiche à gauche de la fenêtre du navigateur, à côté de la page Web. Cette page décrit les barres latérales, leur spécification, leur conception et des exemples d'utilisation.

Le navigateur fournit une interface utilisateur (UI) qui permet à l'utilisateur de voir les barres latéraux actuellement disponibles et de sélectionner une barre latérale à afficher. Par exemple, Firefox a un menu "Affichage > Barre latérale". Une seule barre latérale peut être affichée à la fois, et cette barre latérale sera affichée pour tous les onglets et toutes les fenêtres du navigateur.

Le navigateur peut inclure un certain nombre de barrières intégrées. Par exemple, Firefox inclut une barre latérale pour interagir avec les favoris:

![](bookmarks-sidebar.png)En utilisant la clé `sidebar_action` du manifest.json, une extension peut ajouter sa propre barre latérale au navigateur. Il sera répertorié à côté des barrières intégrées, et l'utilisateur pourra l'ouvrir en utilisant le même mécanisme que pour les barres intégrés.

Comme un popup d'action du navigateur, le contenu de la barre latérale est spécifié comme un document HTML. Lorsque l'utilisateur ouvre la barre latérale, son document de la barre latérale est chargé dans chaque fenêtre ouverte du navigateur. Chaque fenêtre possède sa propre instance du document. Lorsque de nouvelles fenêtres sont ouvertes, elles obtiennent également leurs propres documents de barre latérale.

Un document pour un onglet particulier peut être défini en utilisant la fonction {{WebExtAPIRef("sidebarAction.setPanel()")}}. Une barre latérale peut comprendre quelle fenêtre elle appartient à l'utilisation de l'API {{WebExtAPIRef("windows.getCurrent()")}} :

```js
// sidebar.js
browser.windows.getCurrent({ populate: true }).then((windowInfo) => {
  myWindowId = windowInfo.id;
});
```

Ceci est utile si une barre latérale veut afficher différents contenus pour différentes fenêtres. Par exemple, regardez l'[exemple "annotate-page"](https://github.com/mdn/webextensions-examples/tree/master/annotate-page).

Les documents de la barre latérale ont accès au même priviléges que les API JavaScript d'arrière-plan et les scripts contextuels. Ils peuvent accéder directement à la page de fond en utilisant {{WebExtAPIRef("runtime.getBackgroundPage()")}}, et peuvent interagir avec des scripts de contenu ou des applications natives à l'aide d'API de messagerie comme {{WebExtAPIRef("tabs.sendMessage()")}} et {{WebExtAPIRef("runtime.sendNativeMessage()")}}.

Les documents de la barre latérale sont déchargés lorsque leur fenêtre de navigateur est fermée ou lorsque l'utilisateur ferme la barre latérale. Cela signifie que, contrairement aux pages de fond, les documents de la barre latérale ne restent pas chargés tout le temps, mais contrairement aux popups d'action du navigateur, ils restent chargés pendant que l'utilisateur interagit avec les pages Web.

Lorsqu'une extension est installée comme une barre latérale, sa barre latérale s'ouvrira automatiquement. Ceci est destiné à aider l'utilisateur à comprendre que l'extension comprend une barre latérale. Notez qu'il n'est pas possible pour les add-ons d'ouvrir les barres latérales de façon programmée: les barrières latérales ne peuvent être ouvertes que par l'utilisateur.

## Spécification des barres latérales

Pour spécifier une barre latérale, définissez le document par défaut avec la clé du manifest.json [`sidebar_action`](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action), à côté d'un titre et d'une icône par défaut :

```json
"sidebar_action": {
  "default_title": "My sidebar",
  "default_panel": "sidebar.html",
  "default_icon": "sidebar_icon.png"
}
```

Le titre, le panneau et l'icône peuvent être modifiés par programme en utilisant l'API {{WebExtAPIRef ("sidebarAction")}}.

Le titre et l'icône sont affichés à l'utilisateur dans une interface utilisateur fournie par le navigateur pour lister les barres latérales, telles que "Affichage > Barre latérale" dans le menu Firefox.

## Concept de la barre latérale

Pour plus de détails sur la façon de concevoir la page web d'une barre latérale pour qu'elle corresponde au style de Firefox, voir la documentation du [Système de conception Photon](https://design.firefox.com/photon/index.html).

## Exemple

Le dépôt [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qu utilise une barre latérale:

- [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page) utilise la barre latérale
