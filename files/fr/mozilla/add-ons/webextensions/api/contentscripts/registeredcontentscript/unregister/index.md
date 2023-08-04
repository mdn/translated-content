---
title: contentScripts.RegisteredContentScript.unregister()
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript/unregister
---

{{AddonSidebar()}}Annule l'inscription des scripts de contenu représentés par cet objet `RegisteredContentScript`.

## Syntaxe

```js
registered.unregister();
```

### Paramètres

None.

### Valeur retournée

None.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ce code permet de basculer un script de contenu enregistré sur un clic d'action du navigateur :

```js
var registered = null;

async function register() {
  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [
      {
        code: "document.body.innerHTML = '<h1>This page has been eaten<h1>'",
      },
    ],
    runAt: "document_idle",
  });
}

function toggle() {
  if (registered) {
    registered.unregister();
    registered = null;
  } else {
    register();
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}
