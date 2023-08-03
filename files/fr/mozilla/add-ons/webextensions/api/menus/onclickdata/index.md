---
title: menus.OnClickData
slug: Mozilla/Add-ons/WebExtensions/API/menus/OnClickData
---

{{AddonSidebar()}}

Informations transmises à l'écouteur d'événement {{WebExtAPIRef("menus.onClicked")}} lorsque vous cliquez sur un élément de menu.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `bookmarkId` {{optional_inline}}
  - : `string`. L'ID du signet dans lequel le menu contextuel a été cliqué.
- `button` {{optional_inline}}
  - : `integer`. Quel bouton de la souris a été enfoncé. Les valeurs sont les mêmes que pour [`MouseEvent.button`](/fr/docs/Web/API/MouseEvent/button).
- `checked` {{optional_inline}}
  - : `boolean`. Un _flag_ indiquant si une case à cocher ou un élément radio a été vérifié après avoir été cliqué.
- `editable`
  - : `boolean`. Un indicateur indiquant si l'élément est modifiable: par exemple, s'il s'agit d'un [textarea](/fr/docs/Web/HTML/Element/textarea).
- `frameId` {{optional_inline}}
  - : `integer`. L'ID de l'image dans laquelle l'élément a été cliqué. L'ID de trame peut être utilisé dans d'autres API acceptant des ID de trame, tels que {{WebExtAPIRef("tabs.sendMessage()")}}. Si l'élément a été cliqué dans le document de niveau supérieur,par exemple, dans `tools_menu` ou `tab` context), `frameId` n'est `pas défini`.
- `frameUrl` {{optional_inline}}
  - : `string`. L'URL du cadre de l'élément sur lequel le menu contextuel a été cliqué, s'il était dans un cadre
- `linkText` {{optional_inline}}
  - : `string`. Si l'élément est un lien, le texte du lien. Si le lien ne contient aucun texte, l'URL elle-même est donnée ici.
- `linkUrl` {{optional_inline}}
  - : `string`. Si l'élément est un lien, l'URL vers laquelle il pointe.
- `mediaType` {{optional_inline}}
  - : `string`. Une de "image", "video", ou "audio" si le menu contextuel a été activé sur l'un de ces types d'éléments.
- `menuItemId`
  - : `integer` ou `string`. ID de l'élément de menu sur lequel vous avez cliqué.
- `modifiers`
  - : `Array` de`string`. Un tableau contenant toutes les touches de modification qui ont été pressées lorsque l'élément a été cliqué. Les valeurs possibles sont : "Alt", "Command", "Ctrl", "MacCtrl", et "Shift". Sur un Mac, si l'utilisateur a la touche Ctrl enfoncée, alors "Ctrl" et "MacCtrl" sont inclus.
- `pageUrl` {{optional_inline}}
  - : `string`. L'URL de la page sur laquelle l'élément de menu a été cliqué. Cette propriété n'est pas présente si le clic s'est produit dans un contexte où il n'y a pas de page en cours, comme dans le cas d'une action du navigateur.
- `parentMenuItemId` {{optional_inline}}
  - : `integer` ou `string`. L'ID parent, le cas échéant, pour l'élément cliqué.
- `selectionText` {{optional_inline}}
  - : `string`. Si du texte a été sélectionné dans la page, il contient le texte sélectionné.
- `srcUrl` {{optional_inline}}
  - : `string`. Sera présent pour les éléments avec une URL "src".
- `targetElementId`{{optional_inline}}
  - : `integer`. Un identificateur de l'élément, le cas échéant, sur lequel le menu contextuel a été créé. Utilisez {{WebExtAPIRef("menus.getTargetElement()")}} dans le script de contenu pour localiser l'élément. Notez que ce n'est pas l'attribut [`id`](/fr/docs/Web/HTML/Attributs_universels/id) de l'élément page.
- `viewType` {{optional_inline}}
  - : {{WebExtAPIRef("extension.ViewType", "ViewType")}}. Le type de vue de l'extension.
- `wasChecked` {{optional_inline}}
  - : `boolean`. Un indicateur indiquant si une case à cocher ou un élément radio a été vérifié avant d'avoir cliqué.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

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
