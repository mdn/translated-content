---
title: extension
slug: Mozilla/Add-ons/WebExtensions/API/extension
tags:
  - API
  - Add-ons
  - Extension
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/extension
---
{{AddonSidebar}}

Utilitaires liés à votre extension. Obtenez des URL vers des packages de ressources avec votre extension, récupérez l'objet [`Window`](/fr/docs/Web/API/Window) pour les pages de votre extension, récupérez les valeurs pour différents paramètres. Notez que les API de messagerie de ce module sont déconseillées au profit des API équivalentes dans le module [`runtime`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/runtime).

## Types

- {{WebExtAPIRef("extension.ViewType")}}
  - : Le type de vue d'extension.

## Propriétés

- {{WebExtAPIRef("extension.lastError")}}
  - : Défini pour la durée de vie d'un rappel si une extension ansychronique a généré une erreur. Si aucune erreur n'est survenue, lastError sera _indéfini_.
- {{WebExtAPIRef("extension.inIncognitoContext")}}
  - : True pour les scripts de contenu s'exécutant dans les onglets de navigation privée et pour les pages d'extension exécutées dans un processus de navigation privée. Ce dernier ne s'applique qu'aux extensions avec 'incognito_behavior'.

## Fonctions

- {{WebExtAPIRef("extension.getBackgroundPage()")}}
  - : Renvoie l'objet [`Window`](/fr/docs/Web/API/Window) pour la page d'arrière-plan qui s'exécute dans l'extension en cours. Renvoie null si l'extension n'a pas de page d'arrière-plan.
- {{WebExtAPIRef("extension.getExtensionTabs()")}} {{deprecated_inline}}
  - : Renvoie un tableau des objets de la [Window](/fr/docs/Web/API/Window) JavaScript pour chacun des onglets qui s'exécutent dans l'extension actuelle.
- {{WebExtAPIRef("extension.getURL()")}} {{deprecated_inline}}
  - : Convertit un chemin relatif dans un répertoire d'installation d'extension en une URL complète.
- {{WebExtAPIRef("extension.getViews()")}}
  - : Renvoie un tableau des objets [`Window`](/fr/docs/Web/API/Window) pour chacune des pages exécutées dans l'extension en cours.
- {{WebExtAPIRef("extension.isAllowedIncognitoAccess()")}}
  - : Récupère l'état de l'accès de l'extension en mode navigation privée (déterminé par la case à cocher "Autorisé dans navigation privée").
- {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}}
  - : Récupère l'état de l'accès de l'extension au schéma 'file://' (déterminé par la case à cocher 'Autoriser l'accès aux URL des fichiers').
- {{WebExtAPIRef("extension.sendRequest()")}} {{deprecated_inline}}
  - : Envoie une seule requête aux autres écouteurs de l'extension.
- {{WebExtAPIRef("extension.setUpdateUrlData()")}}
  - : Définit la valeur du paramètre CGI AP utilisé dans l'URL de mise à jour de l'extension. Cette valeur est ignorée pour les extensions hébergées dans le magasin du fournisseur du navigateur.

## Evénements

- {{WebExtAPIRef("extension.onRequest")}} {{deprecated_inline}}
  - : Lancé lorsqu'une requête est envoyée par un processus d'extension ou un script de contenu.
- {{WebExtAPIRef("extension.onRequestExternal")}} {{deprecated_inline}}
  - : Lancé lorsqu'une requête est envoyée depuis une autre extension.

## Compatibilité du navigateur

{{Compat("webextensions.api.extension")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.extension`](https://developer.chrome.com/extensions/extension). Cette documentation est dérivée de [`extension.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/extension.json) dans le code Chromium.
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
