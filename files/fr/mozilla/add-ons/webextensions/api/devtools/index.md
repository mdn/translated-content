---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - devtools.inspectedWindow
  - devtools.network
  - devtools.panels
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools
---
{{AddonSidebar}}

Permet aux extensions d'interagir avec le {{Glossary("Developer Tools")}} du navigateur. Vous pouvez utiliser cette API pour créer des pages d'outils de développement, interagir avec la fenêtre qui est inspectée, inspecter l'utilisation du réseau de pages.

Pour utiliser cette API, vous devez disposer de la [permission API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) `"devtools"` spécifiée dans votre fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Cette permission ne peut pas être facultative.

## Interfaces

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : Interagir avec la fenêtre à laquelle les outils de développement sont attachés (fenêtre inspectée). Cela inclut l'obtention de l'onglet ID pour la page inspectée, l'évaluation du code dans le contexte de la fenêtre inspectée, le rechargement de la page ou l'obtention de la liste des ressources dans la page.
- {{WebExtAPIRef("devtools.network")}}
  - : Obtenir des informations sur les requêtes de réseau associées à la fenêtre à laquelle les outils de développement sont attachés (la fenêtre inspectée).
- {{WebExtAPIRef("devtools.panels")}}
  - : Créer des panneaux d'interface utilisateur qui seront affichés dans les outils de développement de l'agent utilisateur.

## Compatibilité du navigateur

{{Compat("webextensions.api.devtools")}}

> **Note :**
>
> Cette API est basé sur l'API  [`chrome.downloads`](https://developer.chrome.com/extensions/downloads) de Chromium.
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
