---
title: menus.onShown
slug: Mozilla/Add-ons/WebExtensions/API/menus/onShown
tags:
  - API
  - Add-ons
  - Event
  - Extensiosn
  - Reference
  - WebExtensions
  - menus
  - onShown
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/onShown
---
{{AddonSidebar()}}

Lancé lorsque le navigateur a montré un menu.

Une extension peut utiliser cet événement pour mettre à jour ses éléments de menu en utilisant des informations qui ne sont disponibles qu'une fois le menu affiché. Généralement, une extension trouvera la mise à jour dans son gestionnaire `onShown` puis appellera {{WebExtAPIRef("menus.refresh()")}} pour mettre à jour le menu lui-même.

Le gestionnaire peut ajouter, supprimer ou mettre à jour des éléments de menu.

Par exemple, l'extension d'exemple [menu-labelled-open](https://github.com/mdn/webextensions-examples/tree/master/menu-labelled-open)  ajoute un élément de menu qui s'affiche lorsque l'utilisateur clique sur un lien et qui, lorsqu'il est cliqué, ouvre simplement le lien. Il utilise `onShown` et `refresh()` pour annoter l'élément de menu avec le nom d'hôte du lien, afin que l'utilisateur puisse facilement voir où il ira avant de cliquer.

Notez qu'une extension ne devrait pas prendre trop de temps avant d'appeler `refresh()`, sinon la mise à jour sera visible par l'utilisateur.

Le gestionnaire reçoit des informations sur le menu et son contenu, ainsi que des informations sur la page (telles que le lien et / ou le texte de sélection). Pour accéder aux informations de la page, votre extension doit avoir la [permission de l'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions).

Si le gestionnaire `onShown` appelle des API asynchrones, il est possible que le menu ait été fermé à nouveau avant que le gestionnaire ne reprenne l'exécution. Pour cette raison, si un gestionnaire appelle des API asynchrones, il doit vérifier que le menu est toujours affiché avant la mise à jour du menu. Par exemple :

```js
var lastMenuInstanceId = 0;
var nextMenuInstanceId = 1;

browser.menus.onShown.addListener(async function(info, tab) {
  var menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  // Call an async function
  await .... ;

  // After completing the async operation, check whether the menu is still shown.
  if (menuInstanceId !== lastMenuInstanceId) {
    return; // Menu was closed and shown again.
  }
  // Now use menus.create/update + menus.refresh.
});

browser.menus.onHidden.addListener(function() {
  lastMenuInstanceId = 0;
});
```

Notez qu'il est possible d'appeler les fonctions API des menus de manière synchrone, et dans ce cas vous n'avez pas à effectuer cette vérification :

```js
browser.menus.onShown.addListener(async function(info, tab) {
  browser.menus.update(menuId, ...);
   // Note: Not waiting for returned promise.
  browser.menus.refresh();
});
```

Toutefois, si vous appelez ces API de manière asynchrone, vous devez effectuer la vérification suivante :

```js
browser.menus.onShown.addListener(async function(info, tab) {
  var menuInstanceId = nextMenuInstanceId++;
  lastMenuInstanceId = menuInstanceId;

  await browser.menus.update(menuId, ...);
  // must now perform the check
  if (menuInstanceId !== lastMenuInstanceId) {
    return;
  }
  browser.menus.refresh();
});
```

Firefox rend cet événement disponible via l'espace de noms `contextMenus` ainsi que l'espace de nom des `menus`.

## Syntaxe

```js
browser.menus.onShown.addListener(listener)
browser.menus.onShown.removeListener(listener)
browser.menus.onShown.hasListener(listener)
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si le `listener` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `info`

      - : `Object`. Ceci est juste comme l'objet {{WebExtAPIRef('menus.OnClickData')}}, sauf qu'il contient deux propriétés supplémentaires:

        - `contexts`: un tableau de tous les {{WebExtAPIRef("menus.ContextType", "contexts")}} applicables à ce menu.
        - `menuIds`: un tableau d'ID de tous les éléments de menu appartenant à cette extension qui sont affichés dans ce menu.

        En comparaison avec `menus.OnClickData`, l'objet `info` omet également les propriétés `menuItemId` et `modifiers`, car bien sûr, celles-ci ne sont pas disponibles tant qu'un élément de menu n'a pas été sélectionné.

        Les propriétés `contexts`, `menuIds`, `frameId`, et `editable` modifiables sont toujours fournis. Toutes les autres propriétés dans `info` sont uniquement fournies si l'extension a la [permission d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour la page.

    <!---->

    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Les détails de l'onglet où le clic a eu lieu. Si le clic n'a pas eu lieu dans ou sur un onglet, ce paramètre sera manquant.

## Compatibilité du navigateur

{{Compat("webextensions.api.menus.onShown", 10)}}

## Exemples

Cet exemple permet d'afficher le menu contextuel sur un lien, puis met à jour l'élément de menu `openLabelledId` avec le nom d'hôte du lien :

```js
function updateMenuItem(linkHostname) {
  browser.menus.update(openLabelledId, {
    title: `Open (${linkHostname})`
  });
  browser.menus.refresh();
}

browser.menus.onShown.addListener(info => {
  if (!info.linkUrl) {
    return;
  }
  let linkElement = document.createElement("a");
  linkElement.href = info.linkUrl;
  updateMenuItem(linkElement.hostname);
});
```

{{WebExtExamples}}
