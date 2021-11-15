---
title: privacy.websites
slug: Mozilla/Add-ons/WebExtensions/API/privacy/websites
tags:
  - API
  - Add-ons
  - Extensions
  - Privacy
  - Property
  - Reference
  - WebExtensions
  - websites
translation_of: Mozilla/Add-ons/WebExtensions/API/privacy/websites
---
{{AddonSidebar}}

La propriété {{WebExtAPIRef("privacy.websites")}} contient les paramètres liés à la vie privée qui contrôlent la façon dont le navigateur interargit avec les sites web. Chaque propriété est un objet  {{WebExtAPIRef("types.BrowserSetting")}}.

Les valeurs par défaut  de ces propriétés ont tendance à varier selon les navigateurs.

## Propriétés

- `cookieConfig`

  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur sous-jacente est un objet.

    L'objet a deux propriétés :

    - `behavior`: une chaîne qui peut prendre l'une des valeurs suivantes:

      - "allow_all": accepte tous les cookies
      - "reject_all": rejeter tous les cookies
      - "reject_third_party": rejeter tous les cookies tiers
      - "allow_visited" : accepte un cookie tiers uniquement si le domaine de premier niveau du cookie contient déjà au moins un cookie.
      - "reject_trackers": rejeter les cookies de suivi

    - `nonPersistentCookies`: un booléen. Si la valeur est true, tous les cookies seront traités comme des cookies de session.

- `firstPartyIsolate`

  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur sous-jacente est un booléen.

    SI `true`, la préférence `firstPartyIsolate` permet au navigateur d'associer toutes les données (y compris les cookies, les données HSTS, les images mises en cache, etc.) pour tous les domaines tiers avec le domaine dans la barre d'adresse. Cela empêche les suiveurs tiers d'utiliser directement les informations stockées pour identifier l'utilisateur sur différents sites Web, mais peut interrompre les sites Web dans lesquels l'utilisateur se connecte avec un compte tiers (tel qu'un compte Facebook ou Google).

    Par défaut à `false`.

- `hyperlinkAuditingEnabled`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur sous-jacente est un booléen. Si `true`, le navigateur envoie des pings d'audit lorsqu'un site web utilise l'attribut `ping` pour les demander.
- `protectedContentEnabled`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur sous-jacente est un booléen. Disponible uniquement sur Windows. Si`true`, le navigateur fournit un ID unique aux plugins afin d'exécuter le contenu protégé.
- `referrersEnabled`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur  sous-jacente est un booléen. Si activé, le navigateur envoie les en-têtes de [référence](/fr/docs/Web/HTTP/Headers/Referer) avec vos demandes.
- `resistFingerprinting`

  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur sous-jacente est un booléen.

    Les empreintes digitales des navigateurs sont la pratique par laquelle les sites Web utilisent les API Web pour collecter des données d'état ou de configuration associées au navigateur ou à l'appareil sur lequel il s'exécute. En faisant cela, ils peuvent construire une empreinte numérique qu'ils peuvent utiliser pour identifier et suivre un utilisateur particulier.

    Si `true`, la préférence `resistFingerprinting` signale au navigateur des informations usurpées génériques pour les données couramment utilisées pour les empreintes digitales. Ces données incluent le nombre de cœurs de processeur, la précision des temporisateurs JavaScript et le fuseau horaire local. Il désactive également les fonctionnalités utilisées pour la prise d'empreintes digitales, telles que la prise en charge de GamePad et les API WebSpeech et Navigator.

    Par défaut à `false`.

- `thirdPartyCookiesAllowed`
  - : Un objet {{WebExtAPIRef("types.BrowserSetting")}} dont la valeur sous-jacente est un booléen. Si `false`, le navigateur bloque les [cookies tiers](/fr/docs/Web/HTTP/Cookies#Third-party_cookies).
- `trackingProtectionMode`

  - : La "protection de suivi" est une fonctionnalité de navigateur qui bloque les requêtes faites sur des domaines qui sont connus pour s'engager dans le suivi multi-sites des utilisateurs. Les sites qui suivent les utilisateurs sont généralement des sites publicitaires et analytiques tiers. Ce paramètre est un objet {{WebExtAPIRef("types.BrowserSetting")}} qui détermine si le navigateur doit activer  la protection de suivi. Sa valeur sous-jacente est une chaîne qui peut prendre l'une des trois valeurs :

    - `"always"`: La protection de suivi est activée.
    - `"never"`: La protection de suivi est désactivée.
    - `"private_browsing"`: La protection de suivi est activée uniquement dans les fenêtres de navigation privée.

## Compatibilité du navigateur

{{Compat("webextensions.api.privacy.websites")}}

## Exemples

Définissez la propriété `hyperlinkAuditingEnabled` .

```js
function onSet(result) {
  if (result) {
    console.log("success");
  } else {
    console.log("failure");
  }
}

browser.browserAction.onClicked.addListener(() => {

  var getting = browser.privacy.websites.hyperlinkAuditingEnabled.get({});
  getting.then((got) => {
    console.log(got.value);
    if ((got.levelOfControl === "controlled_by_this_extension") ||
        (got.levelOfControl === "controllable_by_this_extension")) {
      var setting = browser.privacy.websites.hyperlinkAuditingEnabled.set({
        value: true
      });
      setting.then(onSet);
    } else {
      console.log("Not able to set hyperlinkAuditingEnabled");
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
