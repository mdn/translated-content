---
title: management
slug: Mozilla/Add-ons/WebExtensions/API/management
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - WebExtensions
  - management
translation_of: Mozilla/Add-ons/WebExtensions/API/management
---
{{AddonSidebar}}

Obtenez les éléments sur les modules complémentaires installés.

Avec l'API de `gestion` vous pouvez :

- Obtenir des informations sur les modules complémentaires installés
- Activer / Désactiver les modules complémentaires
- Désinstaller les modules complémentaires
- Découvrez quels sont les alertes des permissions envoyés particulièrement par les modules complémentaires ou les manifest
- Obtenir les notifications sur l'ajout des modules complémentaires, désinstallé, activé ou désactivé.

La plupart de ces opérations requièrent les [permissions d'APIs](/fr/Add-ons/WebExtensions/manifest.json/permissions) de gestion. Les opérations qui ne fournissent pas d'accès à d'autres modules complémentaires ne nécessitent pas de permissions.

## Types

- {{WebExtAPIRef("management.ExtensionInfo")}}
  - : Un objet contenant des informations sur un module complémentaire installé.

## Fonctions

- {{WebExtAPIRef("management.getAll()")}}
  - : Renvoie des informations sur tous les modules complémentaires installés
- {{WebExtAPIRef("management.get()")}}
  - : Renvoie des informations sur un module complémentaire particulier, compte tenu de son ID.
- {{WebExtAPIRef("management.getSelf()")}}
  - : Renvoie des informations sur l'appel du module complémentaire.
- {{WebExtAPIRef("management.install()")}}
  - : Installe un thème particulier, étant donné son URL à l'adresse  [addons.mozilla.org](https://addons.mozilla.org).
- {{WebExtAPIRef("management.uninstall()")}}
  - : Désinstalle un module complémenaire particulier, compte tenu de son ID.
- {{WebExtAPIRef("management.uninstallSelf()")}}
  - : Désinstalle l'appel d'un module complémentaire.
- {{WebExtAPIRef("management.getPermissionWarningsById()")}}
  - : Obtenez l'ensemble des alertes des permissions particulièrement pour un module complémentaire, compte tenu de son ID.
- {{WebExtAPIRef("management.getPermissionWarningsByManifest()")}}
  - : Obtenez l'ensemble des alertes de permission qui seraient affichés pour la chaîne de manifest donnée.
- {{WebExtAPIRef("management.setEnabled()")}}
  - : Activer / désactiver un module complémentaire, compte tenu de son ID.

## Evénements

- {{WebExtAPIRef("management.onInstalled")}}
  - : Action quand un module complémentaire est installé.
- {{WebExtAPIRef("management.onUninstalled")}}
  - : Action quand un module complémentaire est désinstallé.
- {{WebExtAPIRef("management.onEnabled")}}
  - : Action quand un module complémentaire est activé.
- {{WebExtAPIRef("management.onDisabled")}}
  - : Action quand un module complémenaire est désactivé.

## Compatibilité du navigateur

{{Compat("webextensions.api.management")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.management`](https://developer.chrome.com/extensions/management). Cette documentation est dérivée de [`management.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/management.json) dans le code de Chromium code.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

<div class="hidden"><pre>// Copyright 2012 The Chromium Authors. All rights reserved.
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
