---
title: menus
slug: Mozilla/Add-ons/WebExtensions/API/menus
---

{{AddonSidebar}}

Ajoutez des éléments au système de menus du navigateur.

Cette API est modélisée dans l'API ["contextMenus"](https://developer.chrome.com/extensions/contextMenus) de Chrome, qui permet aux extensions Chrome d'ajouter des éléments au menu contextuel du navigateur. L'API `browser.menus` ajoute quelques fonctionnalités à l'API de Chrome.

Avant Firefox 55, cette API s'appelait à l'origine `contextMenus`, et ce nom a été retenu comme alias. Vous pouvez donc utiliser `contextMenus` pour écrire du code qui fonctionne dans Firefox et dans d'autres navigateurs.

Pour utiliser cette API, vous devez avoir la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) des `menus.` vous pouvez également utiliser l'alias `contextMenus` à la place des `menus`, mais si vous le faites, vous devez accéder aux API sous le nom `browser.contextMenus` à la place.

Excepté que [`menus.getTargetElement()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/menus/getTargetElement), cette API ne peut pas être utilisée à partir de scripts de contenu.

## Créer des éléments de menu

Pour créer un élément de menu, appelez la méthode {{WebExtAPIRef("menus.create()")}}. Vous transmettez à cette méthode un objet contenant des options pour l'élément, y compris l'ID d'élément, le type d'élément et les contextes dans lesquels il doit être affiché.

Écoutez les clics sur votre élément de menu en ajoutant un écouteur à l'événement {{WebExtAPIRef("menus.onClicked")}}. Cet écouteur recevra un objet {{WebExtAPIRef("menus.OnClickData")}} contenant les détails de l'événement.

Vous pouvez créer quatre types différents d'élément de menu, en fonction de la valeur de la propriété `type` que vous fournissez dans les options de `create()`:

- "normal": un élément de menu qui affiche simplement une étiquette
- "checkbox": un élément de menu qui représente un état binaire. Il affiche une coche à côté de l'étiquette. Cliquez sur l'élément pour activer la case. L'écouteur de clic recevra deux propriétés supplémentaires : "checked",indiquant si l'élément est vérifié maintenant, et "wasChecked", indiquant si l'élément a été vérifié avant l'événement click.
- "radio": un élément de menu qui représente l'un des groupes de choix. Tout comme une case à cocher, cela affiche également une coche à côté de l'étiquette, et son écouteur de clic est passé "checked" et "wasChecked". Cependant, si vous créez plus d'un élément radio, les éléments fonctionnent comme un groupe d'éléments radio: un seul élément du groupe peut être vérifié, et cliquer sur un élément en fait l'élément sélectionné.
- "separateur": une ligne séparant un groupe d'éléments.

Si vous avez créé plus d'un élément de menu contextuel ou plus d'un élément de menu d'outils, les éléments seront placés dans un sous-menu. Le parent du sous-menu sera étiqueté avec le nom de l'extension. Par exemple, voici une extension appelée "Menu démo" qui ajoute deux éléments de menu contextuel:

![](menus-1.png)

## Icônes

Si vous avez spécifié des icônes pour votre extension à l'aide de la [clé de manifest "icons"](/fr/Add-ons/WebExtensions/manifest.json/icons), votre élément de menu affichera l'icône spécifiée à côté de son libellé. Le navigateur va essayer de choisir une icône de 16x16 pixels pour un affichage normal ou une icône de 32x32 pixels pour un affichage haute définition :

![](menus-2.png)

Uniquement pour les éléments d'un sous-menu, vous pouvez spécifier des icônes personnalisées en passant l'option `icons` à {{WebExtAPIRef("menus.create()")}} :

![](menus-3.png)

## Exemple

Voici un menu contextuel contenant 4 éléments: un élément normal, deux éléments radio avec des séparateurs de chaque côté et une case à cocher. Les éléments radio sont dotés d'icônes personnalisées.

![](menus-4.png)Vous pouvez créer un sous-menu comme celui-ci en utilisant du code comme :

```js
browser.menus.create(
  {
    id: "remove-me",
    title: browser.i18n.getMessage("menuItemRemoveMe"),
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-1",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

browser.menus.create(
  {
    id: "greenify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemGreenify"),
    contexts: ["all"],
    checked: true,
    icons: {
      16: "icons/paint-green-16.png",
      32: "icons/paint-green-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "bluify",
    type: "radio",
    title: browser.i18n.getMessage("menuItemBluify"),
    contexts: ["all"],
    checked: false,
    icons: {
      16: "icons/paint-blue-16.png",
      32: "icons/paint-blue-32.png",
    },
  },
  onCreated,
);

browser.menus.create(
  {
    id: "separator-2",
    type: "separator",
    contexts: ["all"],
  },
  onCreated,
);

var checkedState = true;

browser.menus.create(
  {
    id: "check-uncheck",
    type: "checkbox",
    title: browser.i18n.getMessage("menuItemUncheckMe"),
    contexts: ["all"],
    checked: checkedState,
  },
  onCreated,
);
```

## Types

- {{WebExtAPIRef("menus.ContextType")}}
  - : Les différents contextes dans lesquels un menu peut apparaître.
- {{WebExtAPIRef("menus.ItemType")}}
  - : Le type d'élément de menu : "normal", "checkbox", "radio", "separator".
- {{WebExtAPIRef("menus.OnClickData")}}
  - : Informations envoyées lorsqu'un élément de menu est cliqué.

## Propriétés

- {{WebExtAPIRef("menus.ACTION_MENU_TOP_LEVEL_LIMIT")}}
  - : Le nombre maximal d'éléments d'extension de niveau supérieur pouvant être ajoutés à un élément de menu dont le type de contexte est "browser_action" ou "page_action".

## Functions

- {{WebExtAPIRef("menus.create()")}}
  - : Crée un nouvel élément de menu.
- {{WebExtApiRef("menus.getTargetElement()")}}
  - : Retourne l'élément pour un `info.targetElementId` donné
- {{WebExtApiRef("menus.overrideContext()")}}
  - : Masquer tous les éléments de menu par défaut de Firefox en faveur d'une interface utilisateur de menu contextuel personnalisé.
- {{WebExtAPIRef("menus.refresh()")}}
  - : Mettre à jour un menu actuellement affiché.
- {{WebExtAPIRef("menus.remove()")}}
  - : Supprime un élément de menu.
- {{WebExtAPIRef("menus.removeAll()")}}
  - : Supprime tous les éléments de menu ajoutés par cette extension.
- {{WebExtAPIRef("menus.update()")}}
  - : Met à jour un élément de menu précédemment créé.

## Evénements

- {{WebExtAPIRef("menus.onClicked")}}
  - : Lancé lorsqu'un élément de menu est cliqué.
- {{WebExtAPIRef("menus.onHidden")}}
  - : Lancé lorsque le navigateur cache un menu.
- {{WebExtAPIRef("menus.onShown")}}
  - : Lancé lorsque le navigateur affiche un menu.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API [`chrome.contextMenus`](https://developer.chrome.com/extensions/contextMenus) de chromium. Cette documentation est dérivée de [`context_menus.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/context_menus.json) dans le code Chromium.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
