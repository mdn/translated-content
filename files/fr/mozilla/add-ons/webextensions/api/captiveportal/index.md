---
title: captivePortal
slug: Mozilla/Add-ons/WebExtensions/API/captivePortal
---

{{AddonSidebar}}

Déterminer l'état du portail captif de la connexion de l'utilisateur. Un portail captif est une page web qui s'affiche lorsqu'un utilisateur se connecte pour la première fois à un réseau Wi-Fi. L'utilisateur fournit des informations ou agit sur la page web du portail captif afin d'obtenir un accès plus large aux ressources du réseau, par exemple en acceptant les conditions générales ou en effectuant un paiement.

Pour utiliser cette API, vous devez disposer de la [permission](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) "captivePortal".

## Propriétés

- {{WebExtAPIRef("captivePortal.canonicalURL")}}
  - : Renvoyer l'URL canonique de la page de détection du portail des prisonniers. En lecture seule.

## Fonctions

- {{WebExtAPIRef("captivePortal.getLastChecked()")}}
  - : Retourne le temps, en millisecondes, depuis que la dernière demande a été complétée.
- {{WebExtAPIRef("captivePortal.getState()")}}
  - : Renvoie l'état du portail comme étant inconnu, `unknown`, `not_captive`, `unlocked_portal`, ou `locked_portal`.

## Evénements

- {{WebExtAPIRef("captivePortal.onConnectivityAvailable")}}
  - : S'allume lorsque le service de portail captif détermine que l'utilisateur peut se connecter à l'internet.
- {{WebExtAPIRef("captivePortal.onStateChanged")}}
  - : S'allume lorsque l'état de portail captif change

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

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
