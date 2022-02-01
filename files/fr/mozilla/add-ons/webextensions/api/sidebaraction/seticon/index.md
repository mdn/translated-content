---
title: sidebarAction.setIcon()
slug: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - setIcon
  - sidebarAction
translation_of: Mozilla/Add-ons/WebExtensions/API/sidebarAction/setIcon
---
{{AddonSidebar()}}

Définit l'icône de la barre latérale.

Vous pouvez spécifier une icône unique comme chemin d'accès à un fichier image ou un objet {{WebExtAPIRef('sidebarAction.ImageDataType')}}.

Vous pouvez spécifier plusieurs icônes de différentes tailles en fournissant un dictionnaire contenant plusieurs chemins ou objets `ImageData`. Cela signifie que l'icône ne doit pas être mise à l'échelle pour un périphérique avec une densité de pixels différente.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Types d'icônes

Votre extension doit spécifier une icône pour la barre latérale dans la clé de manifest [sidebar_action](/fr/Add-ons/WebExtensions/manifest.json/sidebar_action). C'est ce qu'on appelle _"manifest icon"_.

Si vous ne spécifiez pas d'icône dans la clé sidebar_action, vous obtenez l'icône par défaut du navigateur. C'est ce qu'on appelle _"default icon"_.

Si vous définissez une nouvelle icône en utilisant `setIcon()`, et incluez l'option `tabId` , l'icône est définie uniquement pour l'onglet donné. C'est ce qu'on appelle _"tab-specific icon"_.

Si vous définissez une nouvelle icône en utilisant `setIcon()`, et incluez l'option `windowId`, alors l'icône n'est définie que pour la fenêtre donnée. Cette icône est appelée _"icône spécifique à la fenêtre"_, et apparaîtra dans tous les onglets de cette fenêtre qui n'ont pas de jeu d'icônes spécifiques aux onglets.

Si vous définissez une nouvelle icône en utilisant `setIcon()`, et omettez l'option `tabId` and `windowId`, cela définit _"icône globale"_. L'icône globale apparaîtra alors dans tous les onglets qui n'ont pas de jeu d'icônes spécifiques aux onglets et dont la fenêtre n'a pas d'icône spécifique à la fenêtre.

## Syntaxe

```js
var settingIcon = browser.sidebarAction.setIcon(
  details         // object
)
```

### Paramètres

- `details`

  - : `object`. Un Objet contenant des propriétés `imageData` ou `path`, et éventuellement une propriété `tabId`.

    - `imageData`{{optional_inline}}

      - : `{{WebExtAPIRef('sidebarAction.ImageDataType')}}` ou `object`. C'est un objet `ImageData` unique ou un objet dictionnaire.

        Utilisez un objet dictionnaire pour spécifier plusieurs objets `ImageData` dans différentes tailles, de sorte que l'icône ne doit pas être mise à l'échelle pour un périphérique avec une densité de pixels différente. Si `imageData` est un dictionnaire, la valeur de chaque propriété est un objet `ImageData`, et son nom est sa taille, comme ceci :

        ```json
        {
          16: image16,
          32: image32
        }
        ```

        Le navigateur choisira l'image à utiliser en fonction de la densité de pixels de l'écran. Voir [Choisir les tailles d'icônes](/fr/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes) pour plus d'informations à ce sujet.

    - `path`{{optional_inline}}

      - : `string` ou `object`. C'est soit un chemin relatif vers un fichier d'icône, soit un objet dictionnaire.

        Utilisez un objet de dictionnaire pour spécifier plusieurs fichiers d'icônes de différentes tailles, de sorte que l'icône ne doit pas être mise à l'échelle pour un périphérique avec une densité de pixels différente. Si `path` est un dictionnaire, la valeur de chaque propriété est un chemin relatif, et son nom est sa taille, comme ceci :

        ```json
        {
          16: "path/to/image16.jpg",
          32: "path/to/image32.jpg"
        }
        ```

        Le navigateur choisira l'image à utiliser en fonction de la densité de pixels de l'écran. Voir [Choosir les tailles d'icônes](/fr/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes) pour plus d'informations à ce sujet.

        si `path` est une chaîne vide, le navigateur utilisera l'icône par défaut.

        si `path` n'est pas vide mais ne pointe pas vers un fichier d'icône, l'icône est masquée.

        si `path` est `null`, et `tabId`a été spécifié, et que l'onglet spécifié possède un jeu d'icônes spécifique à l'onglet: l'icône spécifique à l'onglet est réinitialisée à l'icône globale (si une icône globale est définie) ou à l'icône manifeste.

        si `path` est `null`, et `tabId` a été omis, et qu'il y avait un jeu d'icônes global, il sera réinitialisé à l'icône de manifest.

    - `tabId`{{optional_inline}}
      - : `integer`. Définit l'icône uniquement pour l'onglet donné.
    - `windowId` {{optional_inline}}
      - : `integer`. Définit l'icône uniquement pour la fenêtre donnée.

<!---->

- Si `windowId`et `tabId` sont tous deux spécifiés, la fonction échoue et l'icône n'est pas définie.
- SI `windowId` et `tabId` sont tous deux omis, l'icône est définie globalement.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans argument une fois l'icône définie.

## Compatibilité du navigateur

{{Compat("webextensions.api.sidebarAction.setIcon",2)}}

## Exemples

Le code ci-dessous bascule l'icône de la barre latérale de l'onglet actif lorsque l'utilisateur clique sur une action du navigateur :

```js
var on = false;

function toggle(tab) {
  if (on) {
    browser.sidebarAction.setIcon({
      path: "off.svg",
      tabId: tab.id
    });
    on = false;
  } else {
    browser.sidebarAction.setIcon({
      path: "on.svg",
      tabId: tab.id
    });
    on = true;
  }
}

browser.browserAction.onClicked.addListener(toggle);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Opera [`chrome.sidebarAction`](https://dev.opera.com/extensions/sidebar-action-api/).
