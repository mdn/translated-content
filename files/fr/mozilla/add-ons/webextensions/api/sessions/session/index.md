---
title: sessions.Session
slug: Mozilla/Add-ons/WebExtensions/API/sessions/Session
---

{{AddonSidebar()}}

L'objet de `Session` représente un onglet ou une fenêtre que l'utilisateur a fermé dans la session de navigation actuelle.

Les sessions sont représentées comme des objets {{WebExtAPIRef("tabs.Tab", "Tab")}} si l'onglet a été fermé mais sa fenêtre n'a pas été fermée : par exemple, parce que l'utilisateur a cliqué sur le bouton "fermer l'onglet", et cet onglet n'était pas le seul onglet de sa fenêtre.

Les sessions sont représentées par des objets {{WebExtAPIRef("windows.Window", "Window")}} si la fenêtre est fermée : parce que l'utilisateur a cliqué sur le bouton "Fermer la fenêtre", ou a fermé le seul onglet ouvert dans une fenêtre.

Notez que les différents navigateurs peuvent avoir une idée différente quand une session est un onglet et quand il s'agit d'une fenêtre. Par exemple :

- Dans Chrome une session est enregistrée comme une fenêtre si l'utilisateur ferme une fenêtre contenant plus d'un onglet. Si l'utilisateur a fermé une fenêtre contenant un seul onglet, ceci est enregistré sous forme d'onglet.
- Dans Firefox, une session est enregistrée comme une fenêtre si l'utilisateur ferme une fenêtre (ou un onglet qui était le dernier onglet de la fenêtre), et un onglet si l'utilisateur ferme un onglet qui n'était pas le dernier onglet de sa fenêtre.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `lastModified`
  - : `number`. L'heure où l'onglet ou la fenêtre a été fermé, en [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time).
- `tab`{{optional_inline}}
  - : `object`. Si l'objet représente un onglet fermé, cette propriété est présente et sera un objet {{WebExtAPIRef("tabs.Tab")}}. Cela contiendra `url`, `titre`, et `favIconUrl` uniquement si l'extension possède la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "tabs".
- `window`{{optional_inline}}
  - : `object`. Si l'objet représente une fenêtre fermée, cette propriété est présente et sera un objet {{WebExtAPIRef("windows.Window")}}.

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.sessions`](https://developer.chrome.com/extensions/sessions).
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
