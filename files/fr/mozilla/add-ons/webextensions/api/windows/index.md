---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
---

{{AddonSidebar}}

Intéragissez avec les fenêtres du navigateur. Vous pouvez utiliser cette API pour obtenir des informations sur les fenêtres ouvertes et à ouvrir, modifiée et fermée les fenêtres. Vous pouvez également écouter la fenêtre ouverte, fermée, et activée les événements.

## Types

- {{WebExtAPIRef("windows.WindowType")}}
  - : Le type de fenêtre du navigateur ici.
- {{WebExtAPIRef("windows.WindowState")}}
  - : L'état de cette fenêtre du navigateur.
- {{WebExtAPIRef("windows.Window")}}
  - : Contient des informations sur une fenêtre de navigateur.
- {{WebExtAPIRef("windows.CreateType")}}
  - : Spécifie le type de fenêtre du navigateur à créer.

## Constantes

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : La valeur `windowId` qui représente l'absence d'une fenêtre de navigateur.
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : Une valeur qui peut être utilisée à la place d'un `windowId` dans certaines APIs pour représenter la fenêtre courante.

## Méthodes

- {{WebExtAPIRef("windows.get()")}}
  - : Obtient les détails sur une fenêtre, compte tenu de son identifiant.
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : Obtient les informations de la fenêtre courante.
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : Obtient la fenêtre qui a été recentrée plus récemment — généralement la fenêtre « en haut ».
- {{WebExtAPIRef("windows.getAll()")}}
  - : Obtient les informations de toutes les fenêtres
- {{WebExtAPIRef("windows.create()")}}
  - : Crée une nouvelle fenêtre.
- {{WebExtAPIRef("windows.update()")}}
  - : Mises à jour des propriétés d'une fenêtre. Utilisez ceci pour déplacer, redimensionner, et (un) se concentrer sur une fenêtre, etc.
- {{WebExtAPIRef("windows.remove()")}}
  - : Ferme une fenêtre et tous ses onglets.

## Evénements

- {{WebExtAPIRef("windows.onCreated")}}
  - : Lancé quand une fenêtre est créée.
- {{WebExtAPIRef("windows.onRemoved")}}
  - : Lancé quand une fenêtre est fermée.
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : Lancé quand la fenêtre courante change.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API de Chromnium [`chrome.windows`](https://developer.chrome.com/extensions/windows). Cette documentation provient de [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) dans le code de Chromium.
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
