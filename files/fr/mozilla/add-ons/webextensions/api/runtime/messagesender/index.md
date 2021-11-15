---
title: runtime.MessageSender
slug: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
tags:
  - API
  - Add-ons
  - Extensions
  - MessageSender
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime/MessageSender
---
{{AddonSidebar()}}

Un objet contenant des informations sur l'expéditeur d'un message ou d'une demande de connexion ; ceci est passé à l'écouteur {{WebExtAPIRef("runtime.onMessage()")}}.

C'est aussi une propriété de {{WebExtAPIRef("runtime.Port")}}, mais seulement dans l'instance de `Port` passée dans les écouteurs {{WebExtAPIRef("runtime.onConnect()")}} ou {{WebExtAPIRef("runtime.onConnectExternal()")}}.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `tab`{{optional_inline}}
  - : {{WebExtAPIRef('tabs.Tab')}}. Le {{WebExtAPIRef('tabs.Tab')}} qui a ouvert la connexion. Cette propriété ne sera présente que lorsque la connexion a été ouverte à partir d'un onglet (y compris les scripts de contenu).
- `frameId`{{optional_inline}}
  - : `integer`. Le cadre qui a ouvert la connexion. Zéro pour les cadres de haut niveau, positif pour les cadres enfants.  Cela ne sera défini que lorsque l'`onglet` est défini.
- `id`{{optional_inline}}
  - : `string`. L'ID de l'extension qui a envoyé le message, si le message a été envoyé par une extension. Si l'expéditeur définit explicitement un ID à l'aide de la clé des [applications](/fr/Add-ons/WebExtensions/manifest.json/applications) dans manifest.json, then `id`  aura cette valeur. Sinon, il aura l'ID qui a été généré pour l'expéditeur. Notez que dans Firefox, avant la version 54, cette valeur était l'ID interne de l'extension (c'est-à-dire l'[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) qui apparaît dans l'URL de l'extension).
- `url`{{optional_inline}}
  - : `string`. L'URL de la page ou du cadre hébergeant le script qui a envoyé le message. Si l'expéditeur est un script s'exécutant dans une page d'extension (telle qu'une  [page d'arrière-plan](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts), une [page d'options](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Options_pages), ou une [action de navigateur](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Browser_actions_2) ou une [action contextuelle](/fr/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Page_actions)), l'URL sera au format `"moz-extension://<extension-internal-id>/path/to/page.html"`. Si l'expéditeur est un script d'arrière-plan et que vous n'avez pas inclus une page d'arrière-plan, ce sera `"moz-extension://<extension-internal-id>/_generated_background_page.html"`. Si l'expéditeur est un script s'exécutant sur une page Web (y compris les scripts de contenu et les scripts de page normaux), alors l'`url` sera l'URL de la page web. Si le script s'exécute dans un iframe, `url` sera l'URL de l'iframe.
- `tlsChannelId`{{optional_inline}}
  - : `string`. L'ID de canal TLS de la page ou du cadre qui a ouvert la connexion, si demandé par l'extension, et si disponible.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime.MessageSender")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
