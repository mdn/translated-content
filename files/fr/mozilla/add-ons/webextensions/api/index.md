---
title: Les APIs JavaScript
slug: Mozilla/Add-ons/WebExtensions/API
tags:
  - API
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API
---
{{AddonSidebar}}

Les APIs WebExtensions en JavaScript peuvent être utilisées au sein des [scripts d’arrière plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) de l’extension et dans tout autre document livré avec celle-ci. Ceci inclut les pop-ups relatives à une [action navigateur](/fr/Add-ons/WebExtensions/user_interface/Browser_action) ou [action de page](/fr/Add-ons/WebExtensions/user_interface/Page_actions), [barres latérales](/fr/Add-ons/WebExtensions/user_interface/barres_laterales), [pages d’options](/fr/Add-ons/WebExtensions/user_interface/Options_pages), ou [pages de nouvel onglet](/fr/Add-ons/WebExtensions/manifest.json/chrome_url_overrides). Certaines de ces APIs peuvent également être interrogées par des [scripts de contenu](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts) de l’extension (voir la [liste dans le guide des scripts de contenu](/fr/Add-ons/WebExtensions/Content_scripts#WebExtension_APIs)).

Pour utiliser les APIs plus puissantes, vous devez en [demander la permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) dans le manifest.json de votre extension.

Vous pouvez accéder aux APIs en utilisant l’espace de noms `browser` :

```js
function afficherTabs (tabs) {
  console.log(tabs)
}

browser.tabs.query({currentWindow: true}, afficherTabs)
```

De nombreuses APIs sont asynchrones et retournent une {{JSxRef("Promise")}}:

```js
function afficherCookie (c) {
  console.log(c)
}

function afficherErreur (e) {
  console.error(e)
}

let setCookie = browser.cookies.set(
   {url: "https://developer.mozilla.org/"}
);
setCookie.then(afficherCookie, afficherErreur)
```

Notez que ceci est différent du système d'extension de Google Chrome, qui utilise l’espace de noms `chrome` à la place de `browser`, et qui utilise des fonctions de rappel (callbacks) plutôt que des promesses pour les fonctions asynchrones. Afin de favoriser la portabilité, l’implémentation Firefox des WebExtensions prend en charge `chrome` et les fonctions de rappel ainsi que `browser` et les promesses. Mozilla a également écrit une prothèse d’émulation (polyfill) permettant au code qui utilise `browser` et les promesses de fonctionner sans modification dans Chrome: <https://github.com/mozilla/webextension-polyfill>.

Firefox implémente également ces API sous l’espace de noms Chrome à l’aide de rappels. Cela permet au code écrit pour Chrome de fonctionner en grande partie inchangé dans Firefox pour les API documentées ici.

Microsoft Edge utilise l’espace de noms `browser`, mais ne supporte pas encore les APIs asynchrones basées sur les promesses. Avec Edge, à l’heure actuelle, les API asynchrones doivent utiliser des fonctions de rappel.

Tous les navigateurs ne sont pas compatibles avec toutes les APIs : pour de plus amples informations, consultez [la compatibilité navigateur pour les APIs JavaScript](/fr/Add-ons/WebExtensions/prise_en_charge_du_navigateur_pour_les_api_javascript).

Conseil : dans les listes d'API JavaScript, vous trouverez des exemples de codes courts qui illustrent la manière dont l'API est utilisée. Vous pouvez utiliser ces exemples, sans avoir besoin de créer une extension web, en utilisant la console de la [boîte à outils](https://extensionworkshop.com/documentation/develop/debugging/#developer-tools-toolbox). Par exemple, voici le premier exemple de code sur cette page fonctionnant dans la console de la boîte à outils dans Firefox Developpeur Edition :

![Illustration of a snippet of web extension code run from the console in the Toolbox](javaScript_exercised_in_console.jpg)

## Liste des API JavaScript

Voir ci-dessous pour une liste complète des API JavaScript :

{{SubpagesWithSummaries}}
