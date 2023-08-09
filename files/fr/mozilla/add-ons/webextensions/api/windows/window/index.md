---
title: windows.Window
slug: Mozilla/Add-ons/WebExtensions/API/windows/Window
---

{{AddonSidebar()}}

Informations sur une fenêtre du navigateur.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `alwaysOnTop`
  - : `boolean`. Que la fenêtre soit configurée pour toujours être sur le dessus.
- `focused`
  - : `boolean`. Que la fenêtre soit actuellement la fenêtre ciblée.
- `height`{{optional_inline}}
  - : `integer`. La hauteur de la fenêtre, y compris le cadre, en pixels.

<!---->

- `id`{{optional_inline}}
  - : `integer`. L'ID de la fenêtre. Les identifiants de fenêtre sont uniques dans une session de navigateur.
- `incognito`
  - : `boolean`. Que la fenêtre soit incognito (privé).
- `left`{{optional_inline}}
  - : `integer`. Le décalage de la fenêtre du bord gauche de l'écran en pixels.
- `sessionId`{{optional_inline}}
  - : `string`. L'ID de session utilisé pour identifier de manière unique une fenêtre obtenue à partir de l'API {{WebExtAPIRef ('sessions')}}.
- `state`{{optional_inline}}
  - : Une valeur {{WebExtAPIRef('windows.WindowState')}} représentant l'état de cette fenêtre du navigateur - maximisé, minimisé, etc.
- `tabs`{{optional_inline}}
  - : Tableau d'objets {{WebExtAPIRef('tabs.Tab')}} représentant les onglets courants dans la fenêtre.
- `title` {{optional_inline}}
  - : Le titre de la fenêtre du navigateur. Nécessite la permission "tabs". Lecture seulement.
- `top`{{optional_inline}}
  - : `integer`. Le décalage de la fenêtre du bord supérieur de l'écran en pixels.
- `type`{{optional_inline}}
  - : Une valeur {{WebExtAPIRef('windows.WindowType')}} représentant le type de fenêtre du navigateur, c'est-à-dire — fenêtre normale du navigateur, fenêtre contextuelle, etc.
- `width`{{optional_inline}}
  - : `integer`. La largeur de la fenêtre, y compris le cadre, en pixels.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API de Chromium [`chrome.windows`](https://developer.chrome.com/extensions/windows). Cette documentation provient de [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
