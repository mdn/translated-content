---
title: sessions.forgetClosedTab()
slug: Mozilla/Add-ons/WebExtensions/API/sessions/forgetClosedTab
---

{{AddonSidebar()}}Supprime un onglet fermé de la liste des onglets récemment fermés du navigateur.Notez que les sites visités par cet onglet ne sont pas supprimés de l'historique du navigateur. Utilisez les API {{WebExtAPIRef("browsingData")}} oo {{WebExtAPIRef("history")}} pour supprimer l'historique.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var forgettingTab = browser.sessions.forgetClosedTab(
  windowId, // integer
  sessionId, // string
);
```

### Paramètres

- `windowId`
  - : `Integer`. L'ID de la fenêtre qui héberge l'onglet que vous voulez oublier.
- `sessionId`
  - : `String`. L'identifiant de la session que vous voulez oublier.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Cela sera accompli sans arguments lorsque la session a été supprimée.

Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ce code oublie la dernière session fermée, qu'il s'agisse d'un onglet ou d'une fenêtre :

```js
function forgetMostRecent(sessionInfos) {
  if (!sessionInfos.length) {
    console.log("No sessions found");
    return;
  }
  let sessionInfo = sessionInfos[0];
  if (sessionInfo.tab) {
    browser.sessions.forgetClosedTab(
      sessionInfo.tab.windowId,
      sessionInfo.tab.sessionId,
    );
  } else {
    browser.sessions.forgetClosedWindow(sessionInfo.window.sessionId);
  }
}

function onError(error) {
  console.log(error);
}

browser.sessions
  .getRecentlyClosed({ maxResults: 1 })
  .then(forgetMostRecent, onError);
```

{{WebExtExamples}}
