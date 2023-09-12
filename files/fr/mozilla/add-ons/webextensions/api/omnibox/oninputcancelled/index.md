---
title: omnibox.onInputCancelled
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputCancelled
---

{{AddonSidebar()}}

Lancé lorsque l'utilisateur a annulé son interaction avec votre poste (par exemple, en cliquant en dehors de la barre d'adresse).

## Syntaxe

```js
browser.omnibox.onInputCancelled.addListener(listener);
browser.omnibox.onInputCancelled.removeListener(listener);
browser.omnibox.onInputCancelled.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

La fonction d'écouteur n'a pas de paramètres.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
browser.omnibox.onInputCancelled.addListener(() => {
  console.log("The user cancelled the session.");
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
