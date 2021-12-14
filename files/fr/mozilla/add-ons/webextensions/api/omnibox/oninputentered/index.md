---
title: omnibox.onInputEntered
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - omnibox
  - onInputEntered
translation_of: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputEntered
---
{{AddonSidebar()}}

Lancé lorsque l'utilisateur a sélectionné l'une des suggestions que votre extension a ajoutées à la liste déroulante de la barre d'adresse.

Utilisez cet événement pour gérer la sélection de l'utilisateur, généralement en ouvrant la page correspondante. L'écouteur d'événement est transmis w:

- la sélection de l'utilisateur
- Un {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}: utilisez cette option pour déterminer si vous souhaitez ouvrir la nouvelle page dans l'onglet actuel, dans un nouvel onglet de premier plan ou dans un nouvel onglet d'arrière-plan.

## Syntaxe

```js
browser.omnibox.onInputEntered.addListener(listener)
browser.omnibox.onInputEntered.removeListener(listener)
browser.omnibox.onInputEntered.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

La fonction d'écouteur recevra deux paramètres: une chaine de `text`, et un  {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

### Paramètres

- `text`
  - : `String`. C'est la valeur de la propriété `content` de l'objet {{WebExtAPIRef("omnibox.SuggestResult")}} que l'utilisateur a sélectionné.
- `disposition`
  - : {{WebExtAPIRef("omnibox.OnInputEnteredDisposition", "OnInputEnteredDisposition")}}. Une {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}} énumération, indiquant si l'extension doit ouvrir la page dans l'onglet en cours, dans un nouvel onglet de premier plan ou dans un nouvel onglet d'arrière-plan.

## Compatibilité du navigateur

{{Compat("webextensions.api.omnibox.onInputEntered")}}

## Exemples

Cet exemple interprète l'entrée de l'utilisateur en tant que nom de propriété CSS et remplit la liste déroulante avec un objet {{WebExtAPIRef("omnibox.SuggestResult")}} pour chaque propriété CSS correspondant à l'entrée. La `description SuggestResult` est le nom complet de la propriété et le `contenu` est la page MDN de cette propriété.

L'exemple écoute également {{WebExtAPIRef("omnibox.onInputEntered")}}, et ouvre la page MDN correspondant à la sélection, conformément à l'argument   {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}.

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
