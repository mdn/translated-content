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
<div>{{AddonSidebar}}
<p>La propriété {{WebExtAPIRef("privacy.network")}} contient des paramètres de configuration du réseau liés à la vie privée. Chaque propriété est un objet {{WebExtAPIRef("types.BrowserSetting")}}.</p>

<p>Les valeurs par défaut de ces propriétés peuvent varier selon les navigateurs.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>networkPredictionEnabled</code></dt>
 <dd>Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est un booléen. Si il est défini à <code>true</code>, le navigateur tente d'accélérer la navigation Web avec la pré-résolution des entrées DNS, le pré-chargement des sites (en utilisant, par exemple, <code>&lt;link rel='prefetch' ...&gt;</code>), et en ouvrant de manière préemptive les connexions TCP et SSL aux serveurs.</dd>
 <dt><code>peerConnectionEnabled</code></dt>
 <dd>Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est un booléen. Si il est défini à <code>false</code>, l'interface<code><a href="/fr/docs/Web/API/RTCPeerConnection">RTCPeerConnection</a></code> est désactivée. Notez que  <code><a href="/fr/docs/Web/API/MediaDevices/getUserMedia">getUserMedia()</a></code> n'est pas affectée par ce paramètre.</dd>
 <dt><code>webRTCIPHandlingPolicy</code></dt>
 <dd>Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur contenue est une chaîne de caractères. Ce paramètre permet  aux utilisateurs de spécifier les compromissions de performance / confidentialité des médias qui affectent la façon dont le trafic  WebRTC sera acheminé et la quantité d'informations d'adresse locale exposées. Il peut prendre l'une des valeurs suivantes :<br>
 <code>"default"<br>
 "default_public_and_private_interfaces"<br>
 "default_public_interface_only"<br>
 "disable_non_proxied_udp"</code></dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.privacy.network")}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Définissez la propriété <code>webRTCIPHandlingPolicy</code> :</p>

<pre class="brush: js">function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() =&gt; {

  var getting = browser.privacy.network.webRTCIPHandlingPolicy.get({});
  getting.then((got) =&gt; {
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

</pre>

<p>{{WebExtExamples}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/privacy"><code>chrome.privacy</code></a>. Cette documentation est dérivée de <a href="https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/privacy.json"><code>privacy.json</code></a> dans le code de Chromium.</p>

<p>Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.</p>
</div>

<div class="hidden">
<pre>// Copyright 2015 The Chromium Authors. All rights reserved.
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
</pre>
</div>
</div>
