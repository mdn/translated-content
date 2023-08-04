---
title: ExtensionInfo
slug: Mozilla/Add-ons/WebExtensions/API/management/ExtensionInfo
---

{{AddonSidebar()}}

Un objet `ExtensionInfo` contenant les informations sur l'extension.

## Type

Il s'agit d'un objet avec les propriétés suivantes :

- `description`
  - : `string`. La description de l'extension, prise à partir de la clé de [description](/fr/Add-ons/WebExtensions/manifest.json/description) du manifest.json.
- `disabledReason`
  - : `string`. Si l'extension est désactivée, la raison pour laquelle il a été désactivé. L'une des "inconnnues' or "permissions_increase".
- `enabled`
  - : `boolean`. Que l'extension soit activée ou pas.
- `homepageUrl`
  - : `string`. L'URL de la page d'accueil de l'extension, prise en compte de la clé [homepage_url](/fr/Add-ons/WebExtensions/manifest.json/homepage_url) du fichier manifest.json.
- `hostPermissions`
  - : `ensemble` de `chaîne`. Les [permissions d'hôtes](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) de l'extension.
- `icons`

  - : `array` of `object`. les informations sur les icônes des extensions. Un tableau d'objets, un par chaque icône. Chaque objet contient deux propriétés :

    - `size`: un entier représentant la largeur et la hauteur de l'icônes en pixels.
    - `url`: une chaîne contenant l'url relative de l'icône, en commençant par la racine de l'extensions.

- `id`
  - : `string`. l'ID de l'extension.
- `installType`

  - : `string`. Une chaîne décriantn comme l'extension a été ajouté. Une des options suivantes :

    - "admin": l'extension a été installé en raison d'une politique administrative.
    - "development": l'extension a été installé décompressé sur le disque.
    - "normal": l'extension a été installé normalement à partir du package d'installation.
    - "sideload": l'extension a été installé par un autre logiciel sur l'ordinateur de l'utilisateur.
    - "other": l'extension a été installé d'une autre manière.

- `mayDisable`
  - : `boolean`. Que cette extensions a été désactivé ou désinstallé par l'utilisateur.
- `name`
  - : `string`. Le nom de l'extension, pris à partir de la clé [name](/fr/Add-ons/WebExtensions/manifest.json/name) du manifest.json.
- `offlineEnabled`
  - : `boolean`. Que les demandes de l'extensions soient prises en charge hors connexion.
- `optionsUrl`
  - : `string`. l'URL pour la [page d'options](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) de l'élément, s'il y en a un. Il s'agit d'une URL relative, à partir de la racine de l'extension.
- `permissions`
  - : `array` of `string`. les [permissions de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) de l'extension.
- `shortName`
  - : `string`. Une courte version du nom de l'extension, prise à partir de la clé [short_name](/fr/Add-ons/WebExtensions/manifest.json/short_name) du manifest.json.
- `type`

  - : `string`. Chaîne décrivant le type d'extension. Ceci permet de distinguer les extensions des applications et des thèmes. Il peut prendre l'une des valeurs suivantes :

    - "extension": le type d'extension la plus courante.
    - "hosted_app"
    - "packaged_app"
    - "legacy_packaged_app"
    - "theme"

- `updateUrl`
  - : `string`. URL pour la mise à jour de l'extension, tiré de la clé [applications](/fr/Add-ons/WebExtensions/manifest.json/applications) de manifest.json.
- `version`
  - : `string`. La version de l'extension, tiré de la clé [version](/fr/Add-ons/WebExtensions/manifest.json/version) du manifest.json
- `versionName`
  - : `string`. Le nom descriptif pour la version de l'extension, tiré de la clé [version_name](/fr/Add-ons/WebExtensions/manifest.json/version_name) du manifest.json.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
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
