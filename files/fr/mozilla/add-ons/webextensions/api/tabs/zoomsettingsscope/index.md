---
title: tabs.ZoomSettingsScope
slug: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - ZoomSettingsScope
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/ZoomSettingsScope
---
{{AddonSidebar()}}

Définit si les changements de zoom persisteront pour l'origine de la page ou ne prendront effet que dans cet onglet. La valeur par défaut est à `per-origin` lorsque   {{WebExtAPIRef("tabs.zoomSettingsMode")}} est "automatique", et est toujours `per-tab`.

## Type

Les valeurs de ce type sont des chaînes. Les valeurs possibles sont :

- "per-origin"
  - : Tous les autres onglets ayant la même origine que cet onglet auront les changements de zoom qui leur sont appliqués. Cette étendue n'est disponible que si  if {{WebExtAPIRef("tabs.zoomSettingsMode")}} est "automatique".
- "per-tab"
  - : Les changements de zoom ne prennent effet que dans cet onglet et les changements de zoom dans les autres onglets n'affectent pas le zoom de cet onglet. De plus, les changements de zoom `per-tab` ont réinitialisés lors de la navigation ; la navigation dans un onglet charge toujours les pages avec `per-origin` de zoom d'origine.

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.ZoomSettingsScope")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.tabs`](https://developer.chrome.com/extensions/tabs#method-executeScript). Cette documentation est dérivée de [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre></div>
