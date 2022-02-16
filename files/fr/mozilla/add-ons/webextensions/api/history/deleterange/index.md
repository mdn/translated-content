---
title: history.deleteRange()
slug: Mozilla/Add-ons/WebExtensions/API/history/deleteRange
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - Méthode
  - Non-standard
  - Reference
  - WebExtensions
  - deleteRange
translation_of: Mozilla/Add-ons/WebExtensions/API/history/deleteRange
---
{{AddonSidebar()}}

Supprime toutes les visites aux pages que l'utilisateur a effectuées pendant la période donnée. Si cela supprime toutes les visites effectuées sur une page donnée, alors la page n'apparaîtra plus dans l'historique du navigateur et {{WebExtAPIRef("history.onVisitRemoved")}} se déclenchera pour cela.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var deletingRange = browser.history.deleteRange(
  range           // object
)
```

### Paramètres

- `range`

  - : `object`. Spécification de la plage de temps pour laquelle supprimer des visites.

    - `startTime`
      - : `number` ou `string` ou `object`. Une valeur indiquant une date et une heure. Cela peut être représenté par: un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), une [chaîne de de date ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm), ou le nombre de [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time). Spécifie l'heure de début de la plage.
    - `endTime`
      - : `number` ou `string` ou `object`. Une valeur indiquant une date et une heure. Cela peut être représenté par: un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), une [chaîne de date ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm), ou le nombre de [millisecondes depuis l'époque](https://en.wikipedia.org/wiki/Unix_time). Spécifie l'heure de fin de la plage.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera remplie sans paramètre lorsque la plage a été supprimée.

## Compatibilité du navigateur

{{Compat("webextensions.api.history.deleteRange")}}

## Exemples

Supprimer toutes les visites effectuées à la dernière minute :

```js
const MINUTE = 60 * 1000;

function oneMinuteAgo() {
  return Date.now() - MINUTE;
}

browser.history.deleteRange({
  startTime: oneMinuteAgo(),
  endTime: Date.now()
});
```

{{WebExtExamples}}

> **Note :**
>
> This API is based on Chromium's [`chrome.history`](https://developer.chrome.com/extensions/history#method-deleteRange) API. This documentation is derived from [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) in the Chromium code.
>
> Microsoft Edge compatibility data is supplied by Microsoft Corporation and is included here under the Creative Commons Attribution 3.0 United States License.

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
