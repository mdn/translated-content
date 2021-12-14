---
title: menus.onHidden
slug: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
tags:
  - API
  - Add-ons
  - Event
  - Extensions
  - Reference
  - WebExtensions
  - menus
  - onHidden
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/onHidden
---
{{AddonSidebar()}}

Lancé lorsque le navigateur cesse d'afficher un menu: par exemple, parce que l'utilisateur a cliqué à l'extérieur ou sélectionné un élément.

Elle est seulement déclenchée pour les menus qui peuvent être manipulés en utilisant l'API {{WebExtAPIRef("menus")}} elle-même: ceci inclut le menu contextuel, le menu des outils du navigateur et le menu des signets.

Ceci est plus susceptible d'être utilisé en combinaison avec {{WebExtAPIRef("menus.onShown")}} et {{WebExtAPIRef("menus.refresh()")}} API: une extension peut mettre à jour le menu quand il est affiché , puis annuler les modifications quand il est caché.

Firefox rend cet événement disponible via l'espace de noms `contextMenus` ainsi que l'espace de nom des `menus`.

## Syntaxe

```js
browser.menus.onHidden.addListener(listener)
browser.menus.onHidden.removeListener(listener)
browser.menus.onHidden.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener`  est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, `false` sinon.

## Syntaxe addListener

### Paramètres

- `callback`
  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction sera transmise sans paramètre.

## Compatibilité du navigateur

{{Compat("webextensions.api.menus.onHidden", 10)}}

## Exemples

Cet exemple enregistre simplement un message chaque fois qu'un menu est masqué :

```js
function hidden() {
  console.log("Menu was hidden");
}

browser.menus.onHidden.addListener(hidden);
```

{{WebExtExamples}}
