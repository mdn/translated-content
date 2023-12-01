---
title: tabs.toggleReaderMode()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode
---

{{AddonSidebar()}}

Bascule en mode Lecteur pour l'onglet donné.

Cette fonction permet de basculer en mode Lecteur pour l'onglet donné. Il prend un identifiant de tabulation en tant que paramètre: s'il est omis, l'onglet actuellement actif est basculé.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

Le mode Lecteur, également connu sous le nom de Reader View, est une fonction de navigateur qui permet à l'utilisateur de se concentrer plus facilement sur un article en :

- masquage d'éléments de page non essentiels, tels que des encadrés, des bas de page et des annonces
- changer la taille du texte de la page, le contraste et la disposition pour une meilleure lisibilité.

Le mode Lecteur est utile spécifiquement pour les articles: c'est-à-dire, les pages qui ont un corps de texte comme caractéristique principale. Les pages qui n'ont pas d'article identifiable ne peuvent pas être affichées en mode Lecteur. Pour savoir si une page est un article, vérifiez la propriété `isArticle` de {{WebExtAPIRef("tabs.Tab")}}.

Pour savoir si un onglet est déjà en mode Lecteur, vérifiez la propriété `isInReaderMode` de {{WebExtAPIRef("tabs.Tab")}}. Pour suivre les onglets entrant ou sortant du mode Lecteur, vous devez suivre l'état actuel de tous les onglets et vérifier quand `isInReaderMode` change :

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.status === "complete") {
    console.log(`Tab ${tabId} reader mode: ${tabInfo.isInReaderMode}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

## Syntaxe

```js
var toggling = browser.tabs.toggleReaderMode(
  tabId, // optional integer
);
```

### Paramètres

- `tabId`{{optional_inline}}
  - : `integer`. L'ID de l'onglet à afficher en mode Lecteur. Par défaut à l'onglet sélectionné de la fenêtre en cours.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument lorsque l'onglet a été mis à jour. Si une erreur se produit (par exemple, parce que la page n'était pas un article), la promesse sera rejetée avec un message d'erreur..

## Exemples

Ce code bascule chaque nouvelle page en mode lecteur, si cette page est éligible pour cela :

```js
function switchToReaderMode(tabId, changeInfo, tabInfo) {
  if (changeInfo.isArticle) {
    browser.tabs.toggleReaderMode(tabId);
  }
}

browser.tabs.onUpdated.addListener(switchToReaderMode);
```

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}
