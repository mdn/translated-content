---
title: browserAction
slug: Mozilla/Add-ons/WebExtensions/API/browserAction
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - browserAction
translation_of: Mozilla/Add-ons/WebExtensions/API/browserAction
---
{{AddonSidebar}}

Ajoute un bouton à la barre d'outils du navigateur.

Une [action du navigateur](/fr/Add-ons/WebExtensions/Browser_action) est un bouton dans la barre d'outils du navigateur.

Vous pouvez associer une fenêtre contextuelle au bouton. La fenêtre contextuelle est spécifée en utilisant HTML, CSS et JavaScript, tout comme une page Web normale. JavaScript en cours d'exécution dans le popup accède à toutes les mêmes API WebExtension que vos scripts de fond, mais son contexte global est le popup, et non la page courrante affichée dans le navigateur. Pour effectuer les pages Web, vous devez communiquer avec eux par des [messages](/fr/Add-ons/WebExtensions/Modify_a_web_page#Messaging).

Si vous spécifiez une fenêtre contextuelle, elle sera affichée — et le contenu sera chargé — quand l'utilisateur clique sur l'icône. Si vous ne spécifiez pas de fenêtre contextuelle, alors lorsque l'utilisateur clique sur l'icône, un événement est envoyé à votre extension.

Vous pouvez définir la plupart des propriétés d'une action de navigateur en utilisant la clé [`browser_action`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) dans le manifest.json.

Quand l'API `browserAction`, vous pouvez :

- Utiliser {{WebExtAPIRef("browserAction.onClicked")}} pour écouter les clics sur l'icône.
- Obtenir et définir les propriétés de l'icône — icône, titre, popup, etc. Vous pouvez les définir globalement dans tous les onglets ou pour un onglet spécifique en passant l'ID de l'onglet comme un argument supplémentaire.

## Types

- {{WebExtAPIRef("browserAction.ColorArray")}}
  - : Un tableau de quatre nombres entiers entre 0-255 définie une couleur RGBA.
- {{WebExtAPIRef("browserAction.ImageDataType")}}
  - : Données en pixels pour une image. Doit être un objet [`ImageData`](/fr/docs/Web/API/ImageData) (par exemple, un élément {{htmlelement("canvas")}} ).

## Fonctions

- {{WebExtAPIRef("browserAction.setTitle()")}}
  - : Définit le titre de l'action du navigateur. Cela sera affiché dans une info-bulle.
- {{WebExtAPIRef("browserAction.getTitle()")}}
  - : Obtient le titre de l'action du navigateur.
- {{WebExtAPIRef("browserAction.setIcon()")}}
  - : Définit l'icône de l'action du navigateur.
- {{WebExtAPIRef("browserAction.setPopup()")}}
  - : Définit le document HTML à ouvrir en popup lorsque l'utilisateur clique sur l'icône de l'action du navigateur.
- {{WebExtAPIRef("browserAction.getPopup()")}}
  - : Permet de définir le document HTML en tant que popup de l'action du navigateur.
- {{WebExtAPIRef("browserAction.openPopup()")}}
  - : Ouvrez le popup de l'action du navigateur.
- {{WebExtAPIRef("browserAction.setBadgeText()")}}
  - : Définit le texte du badge de l'action du navigateur. Le badge est affiché en haut de l'icône.
- {{WebExtAPIRef("browserAction.getBadgeText()")}}
  - : Obtient le texte du badge de l'action du navigateur.
- {{WebExtAPIRef("browserAction.setBadgeBackgroundColor()")}}
  - : Définit la couleur de fond du badge.
- {{WebExtAPIRef("browserAction.getBadgeBackgroundColor()")}}
  - : Obtient la couleur de fond du badge.
- {{WebExtAPIRef("browserAction.setBadgeTextColor()")}}
  - : Définit la couleur du texte du badge.
- {{WebExtAPIRef("browserAction.getBadgeTextColor()")}}
  - : Obtient la couleur du texte du badge.
- {{WebExtAPIRef("browserAction.enable()")}}
  - : Active l'action du navigateur pour un onglet. Par défaut, les actions du navigateur sont activées pour tous les onglets.
- {{WebExtAPIRef("browserAction.disable()")}}
  - : Désactive l'action du navigateur pour un onglet, ce qui signifie qu'il ne peut pas être cliqué lorsque cet onglet est actif.
- {{WebExtAPIRef("browserAction.isEnabled()")}}
  - : Vérifie si l'action du navigateur est activée ou non.

## Evénements

- {{WebExtAPIRef("browserAction.onClicked")}}
  - : Action quand l'icone d'action du navigateur est cliqué. Cet événement ne déclenchera pas si l'action du navigateur comporte une fenêtre contextuelle.

## Compatibilité du navigateur

{{Compat("webextensions.api.browserAction")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browserAction`](https://developer.chrome.com/extensions/browserAction). Cette documentation est dérivée de [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) dans le code de Chromium code.
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
