---
title: omnibox.onInputStarted
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputStarted
---

{{AddonSidebar()}}

Lancé lorsque l'utilisateur commence à interagir avec votre extension en entrant son mot-clé dans la barre d'adresse, puis en appuyant sur la touche espace.

Cela sera envoyé avant tout événement {{WebExtAPIRef("omnibox.onInputChanged")}} events.

## Syntaxe

```js
browser.omnibox.onInputStarted.addListener(listener);
browser.omnibox.onInputStarted.removeListener(listener);
browser.omnibox.onInputStarted.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(callback)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction sera passée sans arguments.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
browser.omnibox.onInputStarted.addListener(() => {
  console.log("User has started interacting with me.");
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
