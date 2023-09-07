---
title: history.addUrl()
slug: Mozilla/Add-ons/WebExtensions/API/history/addUrl
---

{{AddonSidebar()}}

Ajoute un enregistrement à l'historique du navigateur d'une visite à l'URL donnée. L'heure de la visite est enregistrée comme l'heure de l'appel, et le {{WebExtAPIRef("history.TransitionType", "TransitionType")}} est enregistré comme "liens".

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var addingUrl = browser.history.addUrl(
  details, // object
);
```

### Paramètres

- `details`

  - : `object`. Objet contenant l'URL à ajouter.

    - `url`
      - : `string`. L'URL à ajouter.
    - `title`{{optional_inline}}
      - : string: Le titre de la page. Si ce n'est pas fourni, le titre sera enregistré comme `null`.
    - `transition`{{optional_inline}}
      - : {{WebExtAPIRef("history.TransitionType")}}. Décrit comment le navigateur a navigué vers la page à cette occasion. Si ce n'est pas fourni, un type de transition de "lien" sera enregistré.
    - `visitTime`{{optional_inline}}
      - : `number` ou `string` ou `object`. Cela peut être représenté par: un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), une [chaîne de date ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm), ou le nombre de millisecondes depuis l'époque. Définit le temps de visite à cette valeur. Si ce n'est pas fourni, l'heure actuelle sera enregistrée.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera rempli sans paramètres lorsque l'élément a été ajouté.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ajoutez un enregistrement d'une visite à "https\://example.org/", puis vérifiez que la nouvelle visite a été enregistrée en recherchant l'historique de l'élément le plus récent et en l'enregistrant :

```js
function onGot(results) {
  if (results.length) {
    console.log(results[0].url);
    console.log(new Date(results[0].lastVisitTime));
  }
}

function onAdded() {
  var searching = browser.history.search({
    text: "https://example.org/",
    startTime: 0,
    maxResults: 1,
  });
  searching.then(onGot);
}

var addingUrl = browser.history.addUrl({ url: "https://example.org/" });
addingUrl.then(onAdded);
```

Ajouter un enregistrement d'une visite à "https\://example.org", mais lui donner une `visitTime` de 24 heures dans le passé, et une `transition` "typed":

```js
const DAY = 24 * 60 * 60 * 1000;

function oneDayAgo() {
  return Date.now() - DAY;
}

function onGot(visits) {
  for (visit of visits) {
    console.log(new Date(visit.visitTime));
    console.log(visit.transition);
  }
}

function onAdded() {
  var gettingVisits = browser.history.getVisits({
    url: "https://example.org/",
  });

  gettingVisits.then(onGot);
}

var addingUrl = browser.history.addUrl({
  url: "https://example.org/",
  visitTime: oneDayAgo(),
  transition: "typed",
});

addingUrl.then(onAdded);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.history`](https://developer.chrome.com/extensions/history). Cette documentation est dérivée de [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) dans le code de Chromium.
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
