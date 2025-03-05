---
title: events
slug: Mozilla/Add-ons/WebExtensions/API/events
---

{{AddonSidebar}}

Types communs utilisés par les API qui distribuent les événements.

## Types

- {{WebExtAPIRef("events.Rule")}}
  - : Description d'une règle déclarative pour gérer les événements.
- {{WebExtAPIRef("events.Event")}}
  - : Un objet qui permet l'ajout et la suppression d'écouteurs pour un événement Chrome.
- {{WebExtAPIRef("events.UrlFilter")}}
  - : Filtre les URL pour différents critères. Si un critère donné correspond, alors tout le filtre correspond.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
>
> Cette API est basée sur l'API Chromium [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events). Cette documentation est dérivée de [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) dans le code Chromium.
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
