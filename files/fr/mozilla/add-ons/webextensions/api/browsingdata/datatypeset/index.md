---
title: browsingData.DataTypeSet
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/DataTypeSet
---

{{AddonSidebar()}}

Le type **`browsingData.DataTypeSet`** décrit un ensemble de types de données.

Il contient un certains nombres de propriétés booléennes. Le nom de chaque propriété est le nom d'un type particulier de données de navigations : "Téléchargements", "historique" et ainsi de suite. Toutes les propriétés sont facultatives.

Ce type est utilisé :

- dans {{WebExtAPIRef("browsingData.remove()")}} pour décrire les types de données à supprimer
- dans {{WebExtAPIRef("browsingData.settings()")}} pour décrire les types de données actuellement sélectionnés dans la fonction "effacer l'historique" du navigateur.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `cache` {{optional_inline}}
  - : `boolean`. Le cache du navigateur
- `cookies` {{optional_inline}}
  - : `boolean`. Cookies acquis en cours de la navigation.
- `downloads` {{optional_inline}}
  - : `boolean`. L'historique de téléchargement de l'utilisateur.
- `fileSystems` {{optional_inline}}
  - : `boolean`. Les systèmes de fichiers du site Web.
- `formData` {{optional_inline}}
  - : `boolean`. Données de formulaire enregistrées, pour la saisie semi-automatique.
- `history` {{optional_inline}}
  - : `boolean`. L'histoire de navigation de l'utilisateur.
- `indexedDB` {{optional_inline}}
  - : `boolean`. Données IndexedDB.
- `localStorage` {{optional_inline}}
  - : `boolean`. Données de stockage local.
- `passwords` {{optional_inline}}
  - : `boolean`. Mots de pass enregistrés, pour la saisie semi-automatique.
- `pluginData` {{optional_inline}}
  - : `boolean`. Données stockées associées aux plugins.
- `serverBoundCertificates` {{optional_inline}}
  - : `boolean`. Certificats liés au serveur stockés.
- `serviceWorkers` {{optional_inline}}
  - : `boolean`. Données mises en cache par les travailleurs du service.

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browsingData`](https://developer.chrome.com/extensions/browsingData).
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
