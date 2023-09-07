---
title: management.install()
slug: Mozilla/Add-ons/WebExtensions/API/management/install
---

{{AddonSidebar()}}Installe et active une extension de thème à partir de l'URL donnée.

Cette API nécessite la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions) "management" et ne fonctionnera qu'avec des thèmes signés.

C'est une fonction asynchrone qui renvoie une [Promise](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let { id } = await browser.management.install({ url });
```

### Paramètres

- options
  - : Un objet qui inclut l'URL du fichier XPI du thème à [addons.mozilla.org](https://addons.mozilla.org) et un hachage facultatif du fichier XPI, en utilisant sha256 ou plus.

### Valeur retournée

Une [Promise](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet, contenant l'`ExtensionID` défini pour le thème dans manifest.json.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Parcourez une liste de thèmes :

```js
"use strict";

let themes = [
  "https://addons.mozilla.org/firefox/downloads/file/1063216/insightscare-1.0-fx.xpi",
  "https://addons.mozilla.org/firefox/downloads/file/1063419/orange_roses-1.0-fx.xpi",
  "https://addons.mozilla.org/firefox/downloads/file/1062647/sticktoyourguns-2.0-fx.xpi",
  "https://addons.mozilla.org/firefox/downloads/file/0/bad_url.xpi",
];

let current;

async function install(url) {
  try {
    current = url;
    let { id } = await browser.management.install({ url });
    console.log("Theme installed: " + id);
  } catch (e) {
    console.error("Installation failed: " + e);
  }
}

browser.browserAction.onClicked.addListener(() => {
  let id = themes.indexOf(current);
  install(themes[(id + 1) % themes.length]);
});

for (let url of themes) {
  browser.menus.create({
    title: url,
    onclick: () => install(url),
    contexts: ["browser_action"],
  });
}
```

{{WebExtExamples}}
