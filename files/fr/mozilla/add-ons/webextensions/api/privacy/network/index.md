---
title: privacy.network
slug: Mozilla/Add-ons/WebExtensions/API/privacy/network
tags:
  - API
  - Add-ons
  - Extensions
  - Network
  - Pricavy
  - Property
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/privacy/network
---
{{AddonSidebar}}

La propriété {{WebExtAPIRef("privacy.network")}} contient des paramètres de configuration du réseau liés à la vie privée. Chaque propriété est un objet {{WebExtAPIRef("types.BrowserSetting")}}.

Les valeurs par défaut de ces propriétés peuvent varier selon les navigateurs.

## Propriétés

- `networkPredictionEnabled`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est un booléen. Si il est défini à `true`, le navigateur tente d'accélérer la navigation Web avec la pré-résolution des entrées DNS, le pré-chargement des sites (en utilisant, par exemple, `<link rel='prefetch' ...>`), et en ouvrant de manière préemptive les connexions TCP et SSL aux serveurs.
- `peerConnectionEnabled`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est un booléen. Si il est défini à `false`, l'interface[`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection) est désactivée. Notez que  [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) n'est pas affectée par ce paramètre.
- `webRTCIPHandlingPolicy`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est une chaîne de caractères. Ce paramètre permet  aux utilisateurs de spécifier les compromissions de performance / confidentialité des médias qui affectent la façon dont le trafic  WebRTC sera acheminé et la quantité d'informations d'adresse locale exposées. Il peut prendre l'une des valeurs suivantes :
    `"default" "default_public_and_private_interfaces" "default_public_interface_only" "disable_non_proxied_udp"`

## Compatibilité du navigateur

{{Compat("webextensions.api.privacy.network")}}

## Exemples

Définissez la propriété `webRTCIPHandlingPolicy` :

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {

  var getting = browser.privacy.network.webRTCIPHandlingPolicy.get({});
  getting.then((got) => {
    console.log(got.value);
    if ((got.levelOfControl === "controlled_by_this_extension") ||
        (got.levelOfControl === "controllable_by_this_extension")) {
      var setting = browser.privacy.network.webRTCIPHandlingPolicy.set({
        value: "default_public_interface_only"
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set webRTCIPHandlingPolicy");
    }
  });

});
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.privacy`](https://developer.chrome.com/extensions/privacy). Cette documentation est dérivée de [`privacy.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json) dans le code de Chromium.
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
