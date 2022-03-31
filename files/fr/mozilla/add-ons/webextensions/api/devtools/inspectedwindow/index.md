---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
tags:
  - API
  - Add-ons
  - Devtools.inspectedWindows
  - Extensions
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow
---
{{AddonSidebar}}

> **Note :** Cette page décrit les API de développement de WebExtensions telles qu'elles existent dans Firefox 54. Bien que les API soient basées sur les [APIs de devtools de Chrome](https://developer.chrome.com/extensions/devtools), il existe encore de nombreuses fonctionnalités qui ne sont pas encore implémentées dans Firefox et ne sont donc pas documentées ici. Pour voir les fonctionnalités actuellement manquantes, regarder  [Limitations des APIs devtools](/fr/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs).

L'API `devtools.inspectedWindow` permet à un extension de devtools d'interagir avec la fenêtre sur laquelle les outils de développement sont attachés.

Comme toutes les APIs de `devtools`, cette API n'est disponible que pour exécuter le code dans le document défini dans la clé [devtools_page](/fr/Add-ons/WebExtensions/manifest.json/devtools_page) du manifest.json, où dans d'autres documents devtools créés par l'extension (tels que le document hébergé par un panneau, l'extension créée). Voir [Extension des outils de développement](/fr/Add-ons/WebExtensions/Extending_the_developer_tools) pour plus d'informations.

## Propriétés

- [`devtools.inspectedWindow.tabId`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/tabId)
  - : L'ID de la fenêtre sur laquelle sont attachés les outils du développeur.

## Fonctions

- [`devtools.inspectedWindow.eval()`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval)
  - : Evaluez certains JavaScript dans la fenêtre de destination.
- [`devtools.inspectedWindow.reload()`](/fr/Add-ons/WebExtensions/API/devtools.inspectedWindow/reload)
  - : Rechargez le document de la fenêtre destination.

## Comptatibilité navigateur

{{Compat("webextensions.api.devtools.inspectedWindow")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/extensions/devtools_inspectedWindow).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><p>// Copyright 2015 The Chromium Authors. All rights reserved.<br>//<br>// Redistribution and use in source and binary forms, with or without<br>// modification, are permitted provided that the following conditions are<br>// met:<br>//<br>// * Redistributions of source code must retain the above copyright<br>// notice, this list of conditions and the following disclaimer.<br>// * Redistributions in binary form must reproduce the above<br>// copyright notice, this list of conditions and the following disclaimer<br>// in the documentation and/or other materials provided with the<br>// distribution.<br>// * Neither the name of Google Inc. nor the names of its<br>// contributors may be used to endorse or promote products derived from<br>// this software without specific prior written permission.<br>//<br>// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS<br>// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT<br>// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR<br>// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT<br>// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,<br>// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT<br>// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,<br>// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY<br>// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT<br>// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE<br>// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p></div>
