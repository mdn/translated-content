---
title: sessions
slug: Mozilla/Add-ons/WebExtensions/API/sessions
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - WebExtensions
  - sessions
translation_of: Mozilla/Add-ons/WebExtensions/API/sessions
---
{{AddonSidebar}}

Utilisez l'API de sessions pour lister et restaurer, les onglets et les fenêtres qui ont été fermés pendant que le navigateur fonctionne.

La fonction {{WebExtAPIRef("sessions.getRecentlyClosed()")}} renvoie un tableau de {{WebExtAPIRef("tabs.Tab")}} et les objets {{WebExtAPIRef("windows.Window")}}, représente les onglets et les fenêtres qui ont été fermées depuis le fonctionnement du navigateur, jusqu'au maximum défini dans {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}.

Vous pouvez ensuite restaurer une fenêtre ou un onglet en utilisant la fonction  {{WebExtAPIRef("sessions.restore()")}}. il restaure également l'historique de navigation de l'onglet, de sorte que les boutons arrière / avant fonctionnent.

Cette API fournit également un groupe de fonctions permettant à une extension de stocker un état supplémentaire associé à un onglet ou une fenêtre. Ensuite, si l'onglet ou la fenêtre est fermé et restauré ultérieurement, l'extension peut récupérer l'état. Par exemple, une extension de groupe d'onglets peut l'utiliser pour se souvenir du groupe dans lequel se trouve un onglet, afin de le restaurer dans le bon groupe si l'utilisateur restaure l'onglet.

Pour utiliser l'API des sessions, vous devez avoir la [permission API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) de "sessions".

## Types

- {{WebExtAPIRef("sessions.Filter")}}
  - : Permet de restreindre le nombre de {{WebExtAPIRef("sessions.Session", "Session")}} objets retournés par un appel à {{WebExtAPIRef("sessions.getRecentlyClosed()")}}.
- {{WebExtAPIRef("sessions.Session")}}
  - : Représente un onglet ou une fenêtre que l'utilisateur a fermé dans la session de navigation actuelle.

## Propriétés

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : Le nombre maximum de sessions qui seront retournées par un appel à [`sessions.getRecentlyClosed()`](/fr/Add-ons/WebExtensions/API/sessions/getRecentlyClosed).

## Fonctions

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : Supprime un onglet fermé de la liste des onglets récemment fermés du navigateur.
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : Supprime une fenêtre fermée de la liste des fenêtres récemment fermées du navigateur.
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : Renvoie un tableau d'objets {{WebExtAPIRef("sessions.Session", "Session")}}, représentant des fenêtres et des onglets qui ont été fermés dans la session de navigation actuelle (c'est-à-dire l'heure écoulée depuis le démarrage du navigateur).
- {{WebExtAPIRef("sessions.restore()")}}
  - : Restaure un onglet ou une fenêtre fermée.
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : Stocke une paire clé/valeur associée à un onglet donné.
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : Récupérer une valeur précédemment enregistrée pour un onglet donné, compte tenu de sa clé.
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : Supprimer une paire clé/valeur d'un onglet donné.
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : Stocke une paire clé/valeur associée à une fenêtre donnée.
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : Récupérer une valeur précédemment enregistrée pour une fenêtre donnée, compte tenu de sa clé.
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : Supprime une paire clé/valeur d'une fenêtre données.

## Evénements

- {{WebExtAPIRef("sessions.onChanged")}}
  - : Mise en place lorsqu'un onglet ou une fenêtre est fermée.

## Compatibilité du navigateur

{{Compat("webextensions.api.sessions")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.sessions`](https://developer.chrome.com/extensions/sessions).
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
