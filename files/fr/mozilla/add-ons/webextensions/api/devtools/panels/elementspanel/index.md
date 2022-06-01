---
title: devtools.panels.ElementsPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel
tags:
  - API
  - Add-ons
  - DevTools
  - Extensions
  - Reference
  - WebExtensions
  - devtools.panels
  - devtools.panelsElementsPanel
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel
---
{{AddonSidebar()}}

Un `ElementsPanel` représente l'inspecteur HTML/CSS dans la devtools du navigateur. C'est ce qu'on appelle l'inspecteur de page dans Firefox et le panneau Éléments de Chrome.

## Fonctions

- [`devtools.panels.ElementsPanel.createSidebarPane()`](/fr/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel/createSidebarPane)
  - : Crée un volet dans la barre latérale de l'inspecteur.

## Evénements

- [`devtools.panels.ElementsPanel.onSelectionChanged`](/fr/Add-ons/WebExtensions/API/devtools.panels/ElementsPanel/onSelectionChanged)
  - : Appèle lorsque l'utilisateur sélectionne un élément différent dans la page, par exemple en utilisant l'élément de menu contextuel "inspect élément".

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.panels.ElementsPanel", 10)}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.panels`](https://developer.chrome.com/extensions/devtools_panels).

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
