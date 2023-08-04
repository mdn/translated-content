---
title: commands
slug: Mozilla/Add-ons/WebExtensions/API/commands
---

{{AddonSidebar}}

Écoutez l'utilisateur exécutant les commandes que vous avez enregistrées à l'aide des [clés `commandes` du fichier manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands).

## Types

- {{WebExtAPIRef("commands.Command")}}
  - : Objet représentant une commande. Il contient les informations spécifiées pour la commande dans les [clés `commands` du fichier manifest.json](/fr/Add-ons/WebExtensions/manifest.json/commands).

## Fonctions

- {{WebExtAPIRef("commands.getAll")}}
  - : Obtient toutes les commandes enregistrées pour cette extension.
- {{WebExtAPIRef("commands.reset")}}
  - : Réinitialiser la description de la commande donnée et le raccourci vers les valeurs données dans la clé "manifest".
- {{WebExtAPIRef("commands.update")}}
  - : Modifiez la description ou le raccourci de la commande donnée.

## Événements

- {{WebExtAPIRef("commands.onCommand")}}
  - : Activé lorsqu'une commande est exécutée à l'aide du raccourci clavier associé.

## Compatibilité des navigateurs

{{Compat}} {{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.commands`](https://developer.chrome.com/extensions/commands).
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
