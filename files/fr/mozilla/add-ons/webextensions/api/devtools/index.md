---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
translation_of: Mozilla/Add-ons/WebExtensions/API/devtools
browser-compat: webextensions.api.devtools
---
{{AddonSidebar}}

Cette API permet aux extensions d'interagir avec les [outils de développement (<i lang="en">devtools</i>)](/fr/docs/Glossary/Developer_Tools) du navigateur. Elle peut être utilisée pour créer des pages d'outils de développement, interagir avec la fenêtre qui est inspectée, inspecter la page réseau des outils.

Pour utiliser cette API, [la permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#les_permissions_api) `"devtools"` doit être spécifiée dans le fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Cette permission ne peut pas être facultative.

## Interfaces

- [`devtools.inspectedWindow`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - : Interagit avec la fenêtre sur laquelle les outils de développement sont attachés (il s'agit de la fenêtre inspectée). Cela inclut l'obtention de l'identifiant d'onglet pour la page inspectée, l'évaluation du code dans le contexte de la fenêtre inspectée, le rechargement de la page ou l'obtention de la liste des ressources dans la page.
- [`devtools.network`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - : Obtenir des informations sur les requêtes de réseau associées à la fenêtre sur laquelle les outils de développement sont attachés (il s'agit de la fenêtre inspectée).
- [`devtools.panels`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)
  - : Créer des panneaux avec une interface utilisateur qui seront affichés dans les outils de développement de l'agent utilisateur.

## Compatibilité des navigateurs

{{Compat}}

> **Note :** Cette API est basée sur l'API Chromium [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv2/devtools/).
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
