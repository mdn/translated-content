---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
tags:
  - API
  - Add-ons
  - Extensions
  - Recherche
  - Reference
  - Search
  - SearchEngines
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/search/search
---
{{AddonSidebar()}}

Effectuer une recherche en utilisant le moteur de recherche spécifié, ou le moteur de recherche par défaut si aucun moteur de recherche n'est spécifié.

Les résultats seront affichés dans un nouvel onglet, ou si l'argument tabId est donné, dans l'onglet identifié par ceci.

Pour utiliser cette fonction dans votre extension, vous devez demander la [permission manifest](/fr/Add-ons/WebExtensions/manifest.json/permissions) "search".

Pour obtenir les moteurs de recherche installés, utilisez  {{WebExtAPIRef("search.get()")}}.

## Syntaxe

```js
browser.search.search(
  searchProperties       // object
)
```

### Paramètres

- `searchProperties`

  - : `object`. Un objet avec les propriétés suivantes :

    - `query`
      - : `string`. La requête de recherche.
    - `engine`{{optional_inline}}
      - : `string`. Le nom du moteur de recherche. Si le nom du moteur de recherche que vous spécifiez n'existe pas, la fonction lance une erreur. Si cette propriété est omise, le moteur de recherche par défaut sera utilisé.
    - `tabId`{{optional_inline}}
      - : `integer`.  Un identificateur facultatif pour l'onglet dans lequel vous voulez exécuter la recherche. Si cette propriété est omise, les résultats de la recherche seront affichés dans un nouvel onglet.

### Valeur retournée

Aucune

## Compatibilité du navigateur

{{Compat("webextensions.api.search.search", 10)}}

## Exemples

Recherche à l'aide du moteur de recherche par défaut. Les résultats seront affichés dans un nouvel onglet :

```js
function search() {
  browser.search.search({
    query: "styracosaurus"
  });
}

browser.browserAction.onClicked.addListener(search);
```

Recherche à l'aide de Wikipedia. Les résultats seront affichés dans un nouvel onglet :

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)"
  });
}

browser.browserAction.onClicked.addListener(search);
```

Recherche à l'aide de Wikipedia. Les résultats seront affichés dans un nouvel onglet

```js
function search(tab) {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    tabId: tab.id
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}
