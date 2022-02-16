---
title: Extension des outils de développement
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
tags:
  - Add-ons
  - DevTools
  - Extensions
  - Guide
  - Needs Privileges
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
original_slug: Mozilla/Add-ons/WebExtensions/extension_des_outils_de_developpement
---
{{AddonSidebar}}

> **Note :** Cette page décrit les API  de devtools telles qu'elles existent dans Firefox 55. Bien que les API soient basées sur les  [API devtools de chrome](https://developer.chrome.com/extensions/devtools), il existe encore de nombreuses fonctionnalités qui ne sont pas encore implémentées dans Firefox et ne sont donc pas documentées ici. Pour voir quelles fonctionnalités sont actuellement manquantes, voir les [Limitations des APIs devtools](/fr/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs).

Vous pouvez utiliser les API WebExtensions pour étendre les outils de développement intégrés du navigateur. Pour créer une extension devtools, incluez la clé "[devtools_page](/fr/Add-ons/WebExtensions/manifest.json/devtools_page)" dans [manifest.json](/fr/Add-ons/WebExtensions/manifest.json):

```json
"devtools_page": "devtools/devtools-page.html"
```

La valeur de cette clé est une URL indiquant un fichier HTML qui a été regroupé avec votre extension. L'URL doit être relative au fichier manifest.json lui-même.

Le fichier HTML définit une page spéciale dans l'extension, appelée la page devtools.

## La page devtools

La page Devtools est chargée lorsque les devtools du navigateur sont ouverts et déchargés lorsqu'ils sont fermés. Notez que, parce que la fenêtre devtools est associée avec un seul onglet, il est possible que plus d'une fenêtre devtools - donc plus d'une page devtools - existe en même temps.

La page devtools n'a pas de DOM visible, mais peut inclure des sources JavaScript en utilisant les balises [`<script>`](/fr/docs/Web/HTML/Element/script). Les sources doivent être regroupées avec l'extension. Les sources ont accès à :

- Les API DOM normales accessibles via l'objet [`window`](/fr/docs/Web/API/Window) globale
- Les mêmes [API WebExtension que dans les Scripts de contenu](/fr/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)
- Les APIs devtools :

  - [`devtools.inspectedWindow`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow)
  - [`devtools.network`](/fr/Add-ons/WebExtensions/API/devtools.network)
  - [`devtools.panels`](/fr/Add-ons/WebExtensions/API/devtools.panels)

Notez que la page devtools n'accède à aucune autre API WebExtension, et que la page d'arrière-plan n'a pas accès aux API devtools. Au lieu de cela, la page devtools et la page d'arrière-plan doivent communiquer à l'aide des API messageries d'`éxécution`. Voici un exemple :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script src="devtools.js"></script>
  </body>
</html>
```

Le fichier devtools.js contiendra le code réel créant vos extensions d'outils de développement.

## Creations de panneaux

La fenêtre devtools héberge un certain nombre d'outils distincts: le débogueur JavaScript, le moniteur réseau, etc. Une rangée d'onglets sur le haut permet à l'utilisateur de basculer entre les différents outils. La fenêtre hébergeant l'interface utilisateur de chaque outil s'appelle un "panneau".

A l'aide de l'API `devtools.panel.create()`, vous pouvez créer votre propre panneau dans la fenêtre devtools :

```js
browser.devtools.panels.create(
  "My Panel",                      // title
  "icons/star.png",                // icon
  "devtools/panel/panel.html"      // content
).then((newPanel) => {
  newPanel.onShown.addListener(initialisePanel);
  newPanel.onHidden.addListener(unInitialisePanel);
});
```

Cela nécessite trois arguments obligatoires: le titre, l'icône et le contenu du panneau. Il renvoie une [`promesse`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui résout un objet `devtools.panels.ExtensionPanel` représentant le nouveau panneau.

## Interaction avec la fenêtre cible

Les outils de développement sont toujours attachés à un onglet de navigateur particulier. Ceci est appelé "target" pour les outils de développement, ou la "fenêtre inspectée". Vous pouvez interagir avec la fenêtre inspectée en utilisant l'API  [`devtools.inspectedWindow`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow).

### Code d'exécution dans la fenêtre cible

la fonction [`devtools.inspectedWindow.eval()`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval) fournit une façon d'exécuter le code dans la fenêtre inspectée.

C'est un peu comme utiliser {{WebExtAPIRef("tabs.executeScript()")}}  pour injecter un script de contenu, mais avec une différence importante :

- Contrairement aux scripts de contenu, les scripts chargés à partir de `devtools.inspectedWindow.eval()` **n'obtiennent pas** [une "vue nette du DOM" ](/fr/Add-ons/WebExtensions/Content_scripts#DOM_access): c'est-à-dire qu'ils peuvent voir des modifications apportées à la page par les scripts de page.

> **Note :** Une vue propre du DOM est une fonction de sécurité destinée à empêcher les pages hostiles de tromper WebExtensions en redéfinissant le comportement des fonctions DOM natives. Cela signifie que vous devez être très prudent en utilisant eval () et utiliser un script de contenu normal si vous le pouvez.

Les scripts chargés à l'aide de `devtools.inspectedWindow.eval()` ne voient pas non plus de variables JavaScript définies par les scripts de contenu.

### Travailler avec les scripts de contenus

Un document devtools n'a pas d'accès direct à  {{WebExtAPIRef("tabs.executeScript()")}}, donc, si vous devez injecter un script de contenu, le document devtools doit envoyer un message au script en arrière-plan en lui demandant d'injecter le script. La fonction [`devtools.inspectedWindow.tabId`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId)  fournit l'ID de l'onglet cible: le document devtools peut passer le script en arrière-plan, et le script de fond peut à son tour passer dans {{WebExtAPIRef("tabs.executeScript()")}}:

```js
// devtools-panel.js

const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

window.addEventListener("click", () => {
  browser.runtime.sendMessage({
    tabId: browser.devtools.inspectedWindow.tabId,
    script: scriptToAttach
  });
});
```

```js
// background.js

function handleMessage(request, sender, sendResponse) {
  browser.tabs.executeScript(request.tabId, {
    code: request.script
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

Si vous avez besoin d'échanger des messages entre les scripts de contenu exécutés dans la fenêtre cible et un document de developpement, il est judicieux d'utiliser {{WebExtAPIRef("runtime.connect()")}} et {{WebExtAPIRef("runtime.onConnect")}} pour configurer une connexion entre la page d'arrière-plan et le document devtools. La page d'arrière-plan peut alors maintenir un mappage entre les ID de l'onglet et les objets {{WebExtAPIRef("runtime.Port")}}, et utilisez-le pour acheminer les messages entre les deux champs.

![](devtools-content-scripts.png)

## Limitations des API des devtools

Ces API sont basées sur les API devtools de Chrome, mais de nombreuses fonctionnalités sont encore manquantes par rapport à Chrome. Cette section répertorie les fonctionnalités qui ne sont pas encore implémentées, à partir de Firefox 54. Notez que les API de devtools sont en cours de développement et nous espérons ajouter de l'aide pour la plupart d'entre elles dans les versions ultérieures.

### devtools.inspectedWindow

Les éléments suivants ne sont pas pris en charge :

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Aucune des options à `inspectedWindow.eval()` n'est prise en charge.

Les scripts injectés à l'aide de `inspectedWindow.eval()` ne peuvent pas utiliser toutes les fonctions d'assistance en ligne de commande de la console, mais `$0` et `inspect(...)` sont tous deux pris en charge (à partir de Firefox 55).

### devtools.panels

Les éléments suivants ne sont pas pris en charge :

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## Examples

The [webextensions-examples](https://github.com/mdn/webextensions-examples) repo on GitHub contains several examples of WebExtensions that use devtools panels:

- [devtools-panels](https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/) use devtools panels:
