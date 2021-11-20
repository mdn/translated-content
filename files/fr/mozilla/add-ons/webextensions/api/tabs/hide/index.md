---
title: tabs.hide()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/hide
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - hide
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/hide
---
{{AddonSidebar()}}

Masque un ou plusieurs onglets.

Les onglets cachés ne sont plus visibles dans l'onglet du navigateur. Les onglets cachés ne sont pas automatiquement [supprimés](/fr/Add-ons/WebExtensions/API/tabs/discard) :  le code qui s'y trouve continue à s'exécuter. Vous pouvez explicitement supprimer les onglets à chaque fois que vous les masquez : bien que cela ne soit pas approprié dans toutes les situations, cela aidera à réduire les ressources utilisées par le navigateur.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

Tous les onglets ne peuvent pas être masqués :

- Les onglets épinglés ne peuvent pas être masqués.
- Les onglets qui partagent l'écran, le microphone ou l'appareil photo ne peuvent pas être masqués.
- L'onglet actif actuel ne peut pas être masqué.
- Les onglets en cours de fermeture ne peuvent pas être masqués.

La première fois qu'une extension cache un onglet, le navigateur indiquera à l'utilisateur que l'onglet est caché, leur montrera comment ils peuvent accéder à l'onglet caché et leur donnera l'option de désactiver l'extension à la place.

Pour utiliser cette API, vous devez disposer de  la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "tabHide".

## Syntaxe

```js
var hiding = browser.tabs.hide(
  tabIds          // integer or integer array
)
```

### Paramètres

- `tabIds`

  - : `integer` or `array` of `integer`. Les ID de l'onglet ou des onglets à masquer.

    Si l'un de ces onglets ne peut pas être masqué, il ne sera pas masqué, mais l'appel sera toujours valide et les onglets éligibles seront toujours masqués. Par exemple, si vous passez `[1, 3]`, et `1` identifie l'onglet actif, alors seulement `3` seront cachés.

    Cependant, si l'un des ID d'onglet n'est pas valide, l'appel échouera et aucun onglet ne sera masqué.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un tableau contenant les ID des onglets qui ont été cachés. Si une erreur se produit, la promesse sera rejetée avec un message d'erreur.

## Exemples

Masquer un seul onglet :

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide(2).then(onHidden, onError);
```

Masquer plusieurs onglets :

```js
function onHidden() {
  console.log(`Hidden`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.tabs.hide([15, 14, 1]).then(onHidden, onError);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.hide")}}
