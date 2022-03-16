---
title: omnibox.onInputChanged
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
  - onInputChanged
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputChanged
---
{{AddonSidebar()}}

Lancé chaque fois que l'utilisateur modifie sa saisie, après avoir commencé à interagir avec votre extension en saisissant son mot-clé dans la barre d'adresse, puis en appuyant sur la touche espace.

C'est l'événement que vous utiliserez pour remplir la liste déroulante de la barre d'adresse avec des suggestions. L'écouteur d'événement est transmis :

- l'entrée actuelle de l'utilisateur (n'incluant pas le mot-clé lui-même ou l'espace après)
- une fonction de rappel que l'écouteur peut appeler avec un tableau d'objets {{WebExtAPIRef("omnibox.SuggestResult")}}, un pour chaque suggestion. Seules les six premières suggestions seront affichées..

## Syntaxe

```js
browser.omnibox.onInputChanged.addListener(listener)
browser.omnibox.onInputChanged.removeListener(listener)
browser.omnibox.onInputChanged.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true`s'il écoute, sinon  `false`.

## syntaxe addListener

The listener function will be passed two parameters: a string `text`, and a callback function `suggest`.

### Parameters

- `text`
  - : `String`. L'entrée actuelle de l'utilisateur dans la barre d'adresse, n'incluant pas le mot-clé de l'extension lui-même ou l'espace après le mot-clé. Utilisez-le pour décider quelles suggestions afficher dans la liste déroulante.
- `suggest`
  - : `Function`. Une fonction de rappel que l'écouteur d'événement peut appeler pour fournir des suggestions pour la liste déroulante de la barre d'adresse. La fonction de rappel s'attend à recevoir un tableau d'objets  {{WebExtAPIRef("omnibox.SuggestResult")}} un pour chaque suggestion. Seules les six premières suggestions seront affichées.

## Compatibilité du navigateur

{{Compat("webextensions.api.omnibox.onInputStarted")}}

## Exemples

Cet exemple interprète l'entrée de l'utilisateur en tant que nom de propriété CSS et remplit la liste déroulante avec un objet {{WebExtAPIRef("omnibox.SuggestResult")}} pour chaque propriété CSS correspondant à l'entrée. La `description SuggestResult` est le nom complet de la propriété et le `contenu` est la page MDN de cette propriété.

L'exemple écoute également {{WebExtAPIRef("omnibox.onInputEntered")}}, et ouvre la page MDN correspondant à la sélection, conformément à l'argument   {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

```js
browser.omnibox.setDefaultSuggestion({
  description: "Type the name of a CSS property"
});

/*
Very short list of a few CSS properties.
*/
const props = [
  "animation",
  "background",
  "border",
  "box-shadow",
  "color",
  "display",
  "flex",
  "flex",
  "float",
  "font",
  "grid",
  "margin",
  "opacity",
  "overflow",
  "padding",
  "position",
  "transform",
  "transition"
];

const baseURL = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

/*
Return an array of SuggestResult objects,
one for each CSS property that matches the user's input.
*/
function getMatchingProperties(input) {
  var result = [];
  for (prop of props) {
    if (prop.indexOf(input) === 0) {
      console.log(prop);
      let suggestion = {
        content: baseURL + prop,
        description: prop
      }
      result.push(suggestion);
    } else {
      if (result.length != 0) {
        return result;
      }
    }
  }
  return result;
}

browser.omnibox.onInputChanged.addListener((input, suggest) => {
  suggest(getMatchingProperties(input));
});

browser.omnibox.onInputEntered.addListener((url, disposition) => {
  switch (disposition) {
    case "currentTab":
      browser.tabs.update({url});
      break;
    case "newForegroundTab":
      browser.tabs.create({url});
      break;
    case "newBackgroundTab":
      browser.tabs.create({url, active: false});
      break;
  }
});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.omnibox`](https://developer.chrome.com/extensions/omnibox).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
