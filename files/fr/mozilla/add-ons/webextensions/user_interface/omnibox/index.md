---
title: Suggestions de la barre d'adresse
slug: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
tags:
  - User Interface
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/user_interface/Omnibox
---
{{AddonSidebar()}}

En utilisant l'API {{WebExtAPIRef("omnibox")}}, WebExtensions peut personnaliser les suggestions proposées dans la liste déroulante de la barre d'adresse du navigateur lorsque l'utilisateur entre un mot-clé.

![](omnibox_example_small.png)

Cela permet à votre extension, par exemple, de rechercher une bibliothèque d'ebooks gratuits ou comme dans l'exemple ci-dessus, un dépôt d'exemples de code.

## Spécification de la personnalisation Omnibox

Vous dites à votre extension qu'il va personnaliser les suggestions de la barre d'adresse en incluant la clé [omnibox](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox) et la définition du mot-clé de déclenchement dans son fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) :

```json
  "omnibox": { "keyword" : "cs" }
```

Dans le fichier JavaScript d'arrière-plan extension, en utilisant {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, vous pouvez éventuellement définir la première suggestion à afficher dans la liste déroulante de la barre d'adresse. Utilisez ceci pour donner un indice sur l'utilisation de la fonction :

```js
browser.omnibox.setDefaultSuggestion({
  description: `Search the firefox codebase
    (e.g. "hello world" | "path:omnibox.js onInputChanged")`
});
```

Vous pouvez ensuite ajouter le code pour fournir le contenu personnalisé en écoutant  {{WebExtAPIRef("omnibox.onInputStarted")}}, qui est envoyé lorsque l'utilisateur a tapé le mot-clé et un espace, et  {{WebExtAPIRef("omnibox.onInputChanged")}}, qui est expédié chaque fois que l'utilisateur met à jour l'entrée de la barre d'adresse. Vous pouvez ensuite remplir les suggestions, dans ce cas, créer une recherche de https\://searchfox.org/mozilla-central utilisant le terme entré par l'utilisateur :

```js
browser.omnibox.onInputChanged.addListener((text, addSuggestions) => {
  let headers = new Headers({"Accept": "application/json"});
  let init = {method: 'GET', headers};
  let url = buildSearchURL(text);
  let request = new Request(url, init);

  fetch(request)
    .then(createSuggestionsFromResponse)
    .then(addSuggestions);
});
```

Si la WebExtension définit une suggestion par défaut en utilisant {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}, alors cela apparaîtra en premier dans la liste déroulante.

L'extension peut ensuite écouter l'utilisateur en cliquant sur l'une des suggestions, en utilisant {{WebExtAPIRef("omnibox.onInputEntered")}}. Si la suggestion par défaut est cliquée, le terme personnalisé de l'utilisateur est renvoyé, sinon la chaîne de la suggestion est renvoyée. En outre, les informations sur les préférences du navigateur de l'utilisateur pour la gestion des nouveaux liens sont transmises. Dans le code ci-dessous, le terme personnalisé de l'utilisateur est employé pour créer une recherche différente, l'URL suggérée est ouverte:

```js
browser.omnibox.onInputEntered.addListener((text, disposition) => {
  let url = text;
  if (!text.startsWith(SOURCE_URL)) {
    // Update the url if the user clicks on the default suggestion.
    url = `${SEARCH_URL}?q=${text}`;
  }
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

## Exemples

Le depot [webextensions-examples](https://github.com/mdn/webextensions-examples) sur GitHub contient plusieurs exemples de WebExtensions qui utilise la personnalisation de omnibox

- [firefox-code-search](https://github.com/mdn/webextensions-examples/tree/master/firefox-code-search) utilise la personnalisation de omnibox
