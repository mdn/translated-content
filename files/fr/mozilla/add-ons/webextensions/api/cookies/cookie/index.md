---
title: cookies.Cookie
slug: Mozilla/Add-ons/WebExtensions/API/cookies/Cookie
---

{{AddonSidebar()}}

Le type `Cookie` de l'API {{WebExtAPIRef("cookies")}} représente des informations sur un cookie HTTP.

## Type

Les valeurs de ce type sont des objets, qui peuvent contenir les propriétés suivantes :

- `domain`
  - : Une `chaîne` représentant le domaine auquel appartient le cookie (par exemple "www\.google.com", "example.com").
- `expirationDate`{{optional_inline}}
  - : Un `number` représentant la date d'expiration du cookie en tant que nombre de secondes depuis l'époque UNIX. Non fourni pour les cookies de session.
- `firstPartyDomain`
  - : Une `chaîne` représentant le domaine de la première partie associé au cookie. Cela sera une chaine vide si le cookie a été défini alors que l'isolation de la première partie est désactivée. Voir [Isolement de la première partie](/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie).
- `hostOnly`
  - : Un `booléen`, `true` si le cookie est un cookie hôte uniquement (c'est à dire que l'hôte de la requête doit correspondre exactement au domaine du cookie), ou `false` dans la case contraire.
- `httpOnly`
  - : Un `booléen`, `true` si le cookie est marqué comme HttpOnly (c'est à dire le cookie est inaccessible aux scripts côté client), ou `false` dans le cas contraire.
- `name`
  - : Une `chaîne` représentant le nom du cookie.
- `path`
  - : Une `chaîne` représentant le chemin du cookie.
- `secure`
  - : Un `booléen`, true si le cookie est marqué comme sécurisé (c'est à dire que si sa portée est limitée aux canaux sécurisés, généralement HTTPS), ou `false` dans le cas contraire.
- `session`
  - : Un `boolean`, `true` si le cookie est un cookie de session, ou `false` s'il s'agit d'un cookie persistant avec une date expiration.
- `sameSite`
  - : Une valeur {{WebExtAPIRef("cookies.SameSiteStatus")}} qui indique l'état SameSite du cookie.
- `storeId`
  - : Une `chaine` représentant l'ID du cookie store contenant ce cookie, tel que fourni par {{WebExtAPIRef("cookies.getAllCookieStores()")}}.
- `value`
  - : Une `chaîne` représentant la valeur du cookie.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

La plupart des méthodes de l'API cookies impliquent qu'un objet `Cookie` soit utilisé en tant que paramètre d'entrée ou en tant que partie de la valeur retournée. Par exemple, un appel à {{WebExtAPIRef("cookies.getAll()")}} retourne un tableau d'objets `Cookie`.

Dans l'exemple ci-dessous, nous avons demandé tous les cookies, puis enregistré quelque-unes des valeurs de chacun des objets `Cookie` :

```js
function logCookies(cookies) {
  for (cookie of cookies) {
    console.log(`Domain: ${cookie.domain}`);
    console.log(`Name: ${cookie.name}`);
    console.log(`Value: ${cookie.value}`);
    console.log(`Persistent: ${!cookie.session}`);
  }
}

var gettingAll = browser.cookies.getAll({});
gettingAll.then(logCookies);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Cette documentation est dérivée de [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) dans le code Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

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
