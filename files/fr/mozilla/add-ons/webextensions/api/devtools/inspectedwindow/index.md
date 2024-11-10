---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
---

{{AddonSidebar}}

> [!NOTE]
> Cette page décrit les API de développement de WebExtensions telles qu'elles existent dans Firefox 54. Bien que les API soient basées sur les [APIs de devtools de Chrome](https://developer.chrome.com/extensions/devtools), il existe encore de nombreuses fonctionnalités qui ne sont pas encore implémentées dans Firefox et ne sont donc pas documentées ici. Pour voir les fonctionnalités actuellement manquantes, regarder [Limitations des APIs devtools](/fr/Add-ons/WebExtensions/Using_the_devtools_APIs#Limitations_of_the_devtools_APIs).

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

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/extensions/devtools_inspectedWindow).
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

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
