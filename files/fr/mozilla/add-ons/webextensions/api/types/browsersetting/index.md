---
title: BrowserSetting
slug: Mozilla/Add-ons/WebExtensions/API/types/BrowserSetting
---

{{AddonSidebar()}}

Un `BrowserSetting` est un objet représentant un paramètre de navigateur.

Il fournit des méthodes pour définir et obtenir la valeur sous-jacente du paramètre, pour effacer tout changement que vous avez apporté et pour écouter les modifications apportées à sa valeur.

Notez que si cet objet est basé sur le type [ChromeSetting](https://developer.chrome.com/extensions/types#type-ChromeSetting), cet objet ne fait pas de distinction entre le réglage de la valeur dans les fenêtres de navigation privées. Cela signifie que toutes les parties de l'API relatives à la navigation privée (telles que l'option `scope` de `ChromeSetting.set()`) ne sont pas implémentées.

## Méthodes

- {{WebExtAPIRef("types.BrowserSetting.get()")}}
  - : Obtenez la valeur actuelle du paramètre et une énumération représentant la façon dont le paramètre est actuellement contrôlé.
- {{WebExtAPIRef("types.BrowserSetting.set()")}}
  - : Réglez le paramètre sur une nouvelle valeur.
- {{WebExtAPIRef("types.BrowserSetting.clear()")}}
  - : Effacez toute modification apportée au paramètre par cette extension.

## Evénements

- {{WebExtAPIRef("types.BrowserSetting.onChange")}}
  - : Définit lorsque la valeur du paramètre change.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.types`](https://developer.chrome.com/extensions/types).

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
