---
title: tabs.show()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/show
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - show
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/show
---
{{AddonSidebar()}}

Affiche un ou plusieurs onglets précédemment masqués par un appel à {{WebExtAPIRef("tabs.hide")}}.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var showing = browser.tabs.show(
  tabIds          // integer or integer array
)
```

### Paramètres

- `tabIds`
  - : `integer` or `array` of `integer`. Les ID de l'onglet ou des onglets à afficher.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera accomplie sans arguments. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Afficher un seul onglet :

```js
function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show(2).then(onShown, onError);
```

Afficher plusieurs onglets :

```js
function onShown() {
  console.log(`Shown`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.show([15, 14, 1]).then(onShown, onError);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.show")}}
