---
title: extensionTypes.ImageDetails
slug: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
tags:
  - API
  - Add-ons
  - Extensions
  - ImageDetails
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - extensionType
translation_of: Mozilla/Add-ons/WebExtensions/API/extensionTypes/ImageDetails
---
{{AddonSidebar()}}

Details sur le format et la qualité de l'image.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `format`{{optional_inline}}
  - : {{WebExtAPIRef('extensionTypes.ImageFormat')}}. Le format du résultat de l'image. Par défaut est `"png"`.
- `quality`{{optional_inline}}
  - : `integer`. Quand le format est `"jpeg"`, cela controle la qualité du résultat de l'image. C'est un nombre compris entre 0 et 100, qui est converti en une valeur entre 0 et 1 puis utilisé comme argument  `encoderOptions` sur [`HTMLCanvasElement.toDataURL()`](/fr/docs/Web/API/HTMLCanvasElement/toDataURL). Si c'est choisi, 92 est utilisé. A mesure que la qualité baisse, le résultat de l'image aura plus d'artefacts visuel, et le nombre d'octets nécessaires pour le stocker diminuera. Cette valeur est ignorée pour les images PNG.

## Compatibilité du navigateur

{{Compat("webextensions.api.extensionTypes.ImageDetails")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basé sur l'API Chromium [`chrome.extensionTypes`](https://developer.chrome.com/extensions/extensionTypes) . Cette documentation provient de [`extension_types.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/extension_types.json) dans le code de Chromium.
>
> Les données de compatibilité Microsoft Edge sont fournies par Microsoft Corporation et sont incluses ici sous la licence Creative Commons Attribution 3.0 United States.

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
