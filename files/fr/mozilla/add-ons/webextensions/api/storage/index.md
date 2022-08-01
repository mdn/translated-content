---
title: storage
slug: Mozilla/Add-ons/WebExtensions/API/storage
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - Storage
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/storage
---
{{AddonSidebar}}

Permet aux extensions de stocker et de récupérer des données et d'écouter les modifications apportées aux éléments stockés.

Le mécanisme de stockage est basé sur l'[API Web Storage](/fr/docs/Web/API/Web_Storage_API), à quelques différences près. Elles incluent entre autres&nbsp;:

- Le mécanisme est asynchrone.
- La portée des valeurs s'étend à l'extension, pas à un domaine en particulier (c-à-d que les mêmes paires clef/valeur sont disponibles pour tous les scripts d'arrière-plan et de contenu).
- Les valeurs stockées peuvent être de tout type compatible avec JSON et pas uniquement [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String). Ce qui inclut entre autres [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) et [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object), mais seulement si leur contenu peut être représenté en JSON, ce qui exclut les nœuds DOM. Il n'est pas nécessaire de convertir vos valeurs en JSON Strings avant de les stocker, mais elles sont représentées en JSON en interne, d'où l'impératif de compatibilité.
- Plusieurs paires clef/valeur peuvent être récupérées par un même appel à l'API.

Pour utiliser cette API vous devez inclure la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) «&nbsp;storage&nbsp;» dans votre fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Chaque extension a sa propre zone de stockage, qui peut être divisée entre plusieurs types de stockage.

Bien que cette API soit semblable à {{domxref("Window.localStorage")}} il est conseillé de ne pas utiliser `Window.localStorage` dans le code de l'extension pour stocker ses données. Firefox effacera les données stockées via l'API localStorage par les extensions dans plusieurs scénarios où les utilisateurs effacent leur historique de navigation ou des données pour des raisons de confidentialité, alors que les données sauvées en utilisant l'API [`storage.local`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) seront correctement conservées dans ces scénarios.

> **Note :** La zone de stockage n'est pas chiffrée et ne doit pas être utilisée pour stocker des informations confidentielles sur les utilisateurs.

## Types

- {{WebExtAPIRef("storage.StorageArea")}}
  - : Un objet représentant la zone de stockage.
- {{WebExtAPIRef("storage.StorageChange")}}
  - : Un objet représentant une modification d'une zone de stockage.

## Propriétés

`storage` a trois propriétés, qui représentent les différents types de zones de stockage disponibles.

- {{WebExtAPIRef("storage.sync")}}
  - : Représente la zone de stockage `sync`. Les items dans `sync` sont synchronisés par le navigateur, et disponibles pour toutes les instances de ce navigateur auxquelles l'utilisateur est connecté, pour tous les appareils.
- {{WebExtAPIRef("storage.local")}}
  - : Représente la zone de stockage `local`. Les items dans `local` sont limités à l'appareil sur lequel l'extension a été installée.
- {{WebExtAPIRef("storage.managed")}}
  - : Représente la zone de stockage `managed`. Les items dans `managed` sont en écriture pour l'administrateur du domaine et en lecture seule pour l'extension. Tenter de modifier cet espace de nom renvoie une erreur.

## Événements

- {{WebExtAPIRef("storage.onChanged")}}
  - : Activé quand un ou plusieurs items d'une zone de stockage sont modifiés.

## Compatibilité du navigateur

{{Compat("webextensions.api.storage")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
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
