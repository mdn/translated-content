---
title: pageAction
slug: Mozilla/Add-ons/WebExtensions/API/pageAction
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - pageAction
translation_of: Mozilla/Add-ons/WebExtensions/API/pageAction
---
{{AddonSidebar}}

Une [action de page](/fr/Add-ons/WebExtensions/Page_actions) est une icône cliquable dans la barre d'adresse du navigateur.

![](page-action.png)

Vous pouvez écouter les clics sur l'icône, ou spécifié une [fenêtre contextuelle](/fr/Add-ons/WebExtensions/Popups) qui s'ouvre lorsque l'icone est cliquée.

Si vous spécifiez une fenêtre contextuelle, vous pouvez définir son contenu et son comportement en utilisant HTML, CSS et JavaScript, tout comme une page Web normale. Le JavaScript s'exécutant dans la fenêtre contextuelle accède à toutes les mêmes API WebExtension que vos scripts d'arrière-plan.

Vous pouvez définir la plupart des propriétés d'une action de page de manière déclarative à l'aide de la  [clef page_action](/fr/Add-ons/WebExtensions/manifest.json/page_action) dans votre [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json), mais également les redéfinir par programmation en utilisant cette API.

Les actions de page sont pour des actions qui ne sont pertinentes que pour des pages particulières (comme "favoris dans l'onglet courrant"). S'ils sont pertinents pour le navigateur dans son ensemble (par exemple, "Afficher tous les favoris"), utilisez plutôt une action du navigateur.

## Types

- {{WebExtAPIRef("pageAction.ImageDataType")}}
  - : Données en pixel pour une image.

## Fonctions

- {{WebExtAPIRef("pageAction.show()")}}
  - : Affiche l'action de la page pour un onglet donné.
- {{WebExtAPIRef("pageAction.hide()")}}
  - : Caches l'action de la page pour un onglet donné.
- {{WebExtAPIRef("pageAction.isShown()")}}
  - : Vérifie si l'action de la page est affichée ou non.
- {{WebExtAPIRef("pageAction.setTitle()")}}
  - : Définit le titre de l'action de la page. Ceci est affiché dans une info-bulle sur l'action de la page.
- {{WebExtAPIRef("pageAction.getTitle()")}}
  - : Obtient le titre de l'action de la page
- {{WebExtAPIRef("pageAction.setIcon()")}}
  - : Définit l'icône de l'action de la page.
- {{WebExtAPIRef("pageAction.setPopup()")}}
  - : Définit l'URL de la fenêtre contextuelle de l'action de la page.
- {{WebExtAPIRef("pageAction.getPopup()")}}
  - : Obtient l'URL de la fenêtre d'action de la page.
- {{WebExtAPIRef("pageAction.openPopup()")}}
  - : Ouvre la fenêtre contextuelle de l'action de la page.

## Evénements

- {{WebExtAPIRef("pageAction.onClicked")}}
  - : Activé lorsqu'une icône d'action de page est cliquée. Cet événement ne se déclenchera pas si l'action de la page comporte une fenêtre contextuelle.

## Compatibilité du navigateur

{{Compat("webextensions.api.pageAction")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.pageAction`](https://developer.chrome.com/extensions/pageAction). Cette documentation est dérivée de [`page_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/page_action.json) dans le code de Chromium code.
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
