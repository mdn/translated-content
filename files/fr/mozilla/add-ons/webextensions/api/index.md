---
title: Les API JavaScript
slug: Mozilla/Add-ons/WebExtensions/API
l10n:
  sourceCommit: 83b221d2955a42bed9b87a5206a7953d1b57d8a9
---

Les APIs WebExtensions en JavaScript peuvent être utilisées au sein des [scripts d'arrière plan](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) de l'extension et dans tout autre document livré avec celle-ci. Ceci inclut les pop-ups relatives à une [action navigateur](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) ou [action de page](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions), [barres latérales](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars), [pages d'options](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages), ou [pages de nouvel onglet](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Certaines de ces APIs peuvent également être interrogées par des [scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#scripts_de_contenu) de l'extension. (Voir la [liste dans le guide des scripts de contenu](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#apis_webextension).)

Pour utiliser les APIs plus puissantes, vous devez en [demander la permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) dans le manifest.json de votre extension.

Vous pouvez accéder aux APIs en utilisant l'espace de noms `browser`&nbsp;:

```js
function afficherOnglets(onglets) {
  console.log(onglets);
}

browser.tabs.query({ currentWindow: true }, afficherOnglets);
```

De nombreuses APIs sont asynchrones et retournent une promesse ({{JSxRef("Promise")}})&nbsp;:

```js
function afficherCookie(c) {
  console.log(c);
}

function afficherErreur(e) {
  console.error(e);
}

let setCookie = browser.cookies.set({ url: "https://developer.mozilla.org/" });
setCookie.then(afficherCookie, afficherErreur);
```

## Différences de l'espace de noms du navigateur

Firefox et Safari ont toujours utilisé l'espace de noms `browser` (avec des promesses). À l'origine, les navigateurs basés sur Chromium (tels que Chrome, Opera et Microsoft Edge) utilisaient l'espace de noms `chrome` (avec des fonctions de rappel).

À partir de Chrome 148, Chrome prend également en charge l'espace de noms `browser`, sauf dans les extensions qui incluent une page DevTools. Cette limitation a été supprimée dans Chrome 152 (voir [bogue Chrome 500769389 <sup>(angl.)</sup>](https://crbug.com/500769389)), et l'espace de noms `browser` est devenu disponible pour toutes les extensions Chrome. De plus, Chrome a commencé à fournir des promesses pour les méthodes asynchrones avec l'introduction de Manifest V3, avec une couverture complète fournie dans Chrome 152.

Cela signifie que tous les principaux navigateurs utilisent l'espace de noms `browser` et retournent des promesses pour les fonctions asynchrones.

Avant Chrome 148, Chrome utilise l'espace de noms `chrome`. Pour faciliter le portage, l'implémentation Firefox des API WebExtensions prend en charge `chrome` et les fonctions de rappel ainsi que `browser` et les promesses. Cela permet au code écrit pour Chrome de fonctionner en grande partie sans modification dans Firefox pour les API documentées ici. Une [prothèse d'émulation <sup>(angl.)</sup>](https://github.com/mozilla/webextension-polyfill) qui permet au code utilisant `browser` et les promesses de fonctionner sans modification dans Chrome est également disponible. Cette prothèse d'émulation est une opération nulle dans Chrome 148 et les versions ultérieures.

Tous les navigateurs ne prennent pas en charge toutes les API&nbsp;: pour plus de détails, voir [Prise en charge des API JavaScript par les navigateurs](/fr/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) et [Incompatibilités avec Chrome](/fr/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities).

## Exemples

Dans les listes d'API JavaScript, de courts exemples de code illustrent la manière dont l'API est utilisée. Vous pouvez expérimenter avec la plupart de ces exemples en utilisant la console dans la [boîte à outils <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox). Cependant, vous devez avoir la boîte à outils en cours d'exécution dans le contexte d'une extension web. Pour ce faire, ouvrez `about:debugging` puis **This Firefox**, cliquez sur **Inspect** pour toute extension installée ou temporaire, et ouvrez **Console**. Vous pouvez ensuite coller et exécuter le code exemple dans la console.

Par exemple, voici le premier exemple de code sur cette page fonctionnant dans la console de la boîte à outils dans Firefox Developer Edition&nbsp;:

![Illustration d'un extrait de code d'extension web exécuté depuis la console dans la boîte à outils](javaScript_exercised_in_console.jpg)

## Liste des API JavaScript

Voir ci-dessous pour une liste complète des API JavaScript&nbsp;:

{{SubpagesWithSummaries}}
