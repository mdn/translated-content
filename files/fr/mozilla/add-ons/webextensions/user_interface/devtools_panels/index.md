---
title: panneaux devtools
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
---

{{AddonSidebar}}

> **Note :** Cette fonctionnalité deviendra disponible dans Firefox 54.

Lorsqu'une extension fournit des outils utiles aux développeurs, il est possible d'ajouter une interface utilisateur pour les outils de développement du navigateur en tant que nouveau panneau.

![](developer_panel_tab.png)

## Spécification d'un panneau d'outils de développement

Un panneau d'outils de développement est ajouté à l'aide de l'API [`devtools.panels`](/fr/Add-ons/WebExtensions/API/devtools.panels), qui, à son tour, doit être exécutée à partir d'une page spéciale devtools.

Ajoutez la page devtools en incluant la clé [`devtools_page`](/fr/Add-ons/WebExtensions/manifest.json/devtools_page) dans l'extension [manifest.json](/fr/Add-ons/WebExtensions/manifest.json) et fournissez l'emplacement du fichier de la page HTML dans l'extension :

```json
"devtools_page": "devtools-page.html"
```

Dans la page des devtools, appelez un script qui ajoutera un panneau dans devtools:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Dans le script, créez un panneau devtools en spécifiant le titre, l'icône et le fichier HTML du panneau qui fournit le contenu du panneau:

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

L'extension peut maintenant exécuter un code dans la fenêtre inspectée à l'aide de [`devtools`.inspectedWindow.eval()](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval) ou en injectant un script de contenu via le script en arrière en passant un message. Vous pouvez trouver plus de détails sur la façon de procéder dans l'[Extension des outils de développement.](/fr/Add-ons/WebExtensions/Extending_the_developer_tools)

## Conception du panneau de développement

Pour plus de détails sur la façon de concevoir la page Web de votre panneau de développeurs pour qu'elle corresponde au style de Firefox, consultez la documentation [Photon Design System](https://design.firefox.com/photon/index.html).

## Icônes

Pour plus de détails sur la création d'icônes à utiliser avec votre panneau d'outils de développement, voir Iconographie dans la documentation du [Photon Design System](https://design.firefox.com/photon/index.html).

## Exemples

Le depot [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilisent les panneaux devtools:

- [devtools-panels](https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/) utilise la création d'un panneau dans devtools
