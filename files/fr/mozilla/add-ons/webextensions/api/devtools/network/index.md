---
title: devtools.network
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.network
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools.network
original_slug: Mozilla/Add-ons/WebExtensions/API/devtools.network
---
{{AddonSidebar}}

L'API `devtools.network` permet à une extension devtools d'obtenir des informations sur les demandes de réseau associées à la fenêtre à laquelle les devtools sont attachés (la fenêtre inspectée).

Comme toutes les APIs de devtools, cette API est uniquement disponible pour le code exécuté dans le document défini dans la clé [devtools_page](/fr/Add-ons/WebExtensions/manifest.json/devtools_page) du manifest.json, ou dans d'autres documents de devtools créés par l'extension (tel que le document du panneau). Voir [Extension des outils de développement](/fr/Add-ons/WebExtensions/Extending_the_developer_tools) pour plus d'informations.

## Fonctions

- [devtools.network.getHAR()](/fr/docs/Mozilla/Add-ons/WebExtensions/API/devtools.network/getHAR)
  - : Obtenez le  [journal HAR](http://www.softwareishard.com/blog/har-12-spec/#log) pour la page chargée dans l'onglet en cours..

## Evénements

- [`devtools.network.onNavigated`](/fr/Add-ons/WebExtensions/API/devtools.network/onNavigated)
  - : Attiré lorsque l'utilisateur navigue dans la fenêtre inspectée vers une nouvelle page.
- [`devtools.network.onRequestFinished`](/fr/Add-ons/WebExtensions/API/devtools.network/onRequestFinished)
  - : Lancé lorsque la demande réseau est terminée et que ses détails sont disponibles pour l'extension.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools.network")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.devtools.network`](https://developer.chrome.com/extensions/devtools_network).

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
