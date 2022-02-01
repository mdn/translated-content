---
title: idle
slug: Mozilla/Add-ons/WebExtensions/API/idle
tags:
  - API
  - Add-ons
  - Extensions
  - Idle
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/idle
---
{{AddonSidebar}}

Découvrez quand le système de l'utilisateur est inactif, vérouillé ou actif.

Pour utiliser cette API, vous disposez de la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "idle" .

## Types

- {{WebExtAPIRef("idle.IdleState")}}
  - : Chaîne décrivant l'état d'inactivité du périphérique

## Fonctions

- {{WebExtAPIRef("idle.queryState()")}}
  - : Renvoie `"locked"` si le système est verrouillé, `"idle"` si l'utilisateur n'a généré aucune entrée pendant un nombre de secondes spécifié, ou sinon `"active"`
- {{WebExtAPIRef("idle.setDetectionInterval()")}}
  - : Définit l'intervalle utilisé pour déterminer quand le système est inactif pour les événements  {{WebExtAPIRef("idle.onStateChanged")}}.

## Evénements

- {{WebExtAPIRef("idle.onStateChanged")}}
  - : Définit quand le système change d'état.

## Compatibilité du navigateur

{{Compat("webextensions.api.idle")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.idle`](https://developer.chrome.com/extensions/idle). Cette documentation est dérivée de [`idle.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/idle.json) dans le code Chromium.
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
