---
title: privacy
slug: Mozilla/Add-ons/WebExtensions/API/privacy
tags:
  - API
  - Add-ons
  - Extensions
  - Privacy
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/privacy
---
<div>{{AddonSidebar}}</div>

<p>Accédez et modifiez les différents paramètres du navigateur liés à la vie privée.</p>

<p>Pour utiliser l'API de confidentialité, vous devez avoir <a href="/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions">l'autorisation de l'API</a> "privacy".</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{WebExtAPIRef("privacy.network")}}</dt>
 <dd>Accès et modification des paramètres de confidentialité relatifs au réseau.</dd>
 <dt>{{WebExtAPIRef("privacy.services")}}</dt>
 <dd>Accès et modification des paramètres de confidentialité relatifs aux services fournis par le navigateur ou les tiers.</dd>
 <dt>{{WebExtAPIRef("privacy.websites")}}</dt>
 <dd>Accès et modification des paramètres de confidentialité relatifs aux comportements des sites Web.</dd>
</dl>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat("webextensions.api.privacy", 10, 1)}}</p>

<p>{{WebExtExamples("h2")}}</p>

<div class="note"><p><strong>Note :</strong></p>

<p>Cette API est basée sur l'API Chromium <a href="https://developer.chrome.com/extensions/privacy"><code>chrome.privacy</code></a>.</p>
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
