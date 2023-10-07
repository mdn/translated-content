---
title: menus.ItemType
slug: Mozilla/Add-ons/WebExtensions/API/menus/ItemType
---

{{AddonSidebar()}}

Le type d'élément de menu.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont:

- normal
  - : Un élément de menu qui affiche simplement une étiquette.
- checkbox
  - : Un élément de menu qui représente un état binaire. Il affiche une coche à côté de l'étiquette. Cliquez sur l'élément pour activer la coche. L'écouteur {{WebExtAPIRef("menus.onClicked")}} recevra deux propriétés supplémentaires : "checked", indiquant si l'élément est vérifié maintenant, et "wasChecked", indiquant si l'élément a été vérifié avant l'événement click.
- radio
  - : Un élément de menu qui représente l'un des groupes de choix. Tout comme une case à cocher, cela affiche également une coche à côté de l'étiquette, et son écouteur {{WebExtAPIRef("menus.onClicked")}} est passé "checked" et "wasChecked". However, Cependant, si vous créez plus d'un élément radio, les éléments fonctionnent comme un groupe d'éléments radio items: un seul élément du groupe peut être vérifié, et cliquer sur un élément en fait l'élément sélectionné.
- separator
  - : Une ligne séparant un groupe d'éléments.

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
