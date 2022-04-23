---
title: contentScripts.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
tags:
  - API
  - Extensions
  - NeedsTranslation
  - Reference
  - RegisteredContentScript
  - TopicStub
  - Type
  - contentScripts
translation_of: Mozilla/Add-ons/WebExtensions/API/contentScripts/RegisteredContentScript
---
{{AddonSidebar()}}

Un `RegisteredContentScript` est renvoyé par un appel à  {{WebExtAPIRef("contentScripts.register()")}} et représente les scripts de contenu enregistrés dans cet appel.

Il définit une seule fonction {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister()", "unregister()")}}, qui peut être utilisée pour annuler l'enregistrement des scripts de contenu.

> **Note :** Si cet objet est détruit (par exemple parce qu'il est hors de portée), les scripts de contenu seront automatiquement désinscrits. Vous devriez donc garder une référence à cet objet aussi longtemps que vous voulez que les scripts de contenu restent enregistrés.

## Méthodes

- {{WebExtAPIRef("contentScripts.RegisteredContentScript.unregister","unregister()")}}
  - : Annule l'inscription des scripts de contenu représentés par cet objet.

## Compatibilité du navigateur

{{Compat("webextensions.api.contentScripts.RegisteredContentScript", 10)}}

## Exemples

Ce code permet de basculer un script de contenu enregistré sur un clic d'action du navigateur :

```js
var registered = null;

async function register() {

  registered = await browser.contentScripts.register({
    matches: ["*://*.org/*"],
    js: [{
      code: "document.body.innerHTML = '<h1>This page has been eaten<h1>'"
    }],
    runAt: "document_idle"
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
