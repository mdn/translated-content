---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
tags:
  - API
  - Add-ons
  - Extensions
  - History
  - Method
  - Non-standard
  - Reference
  - Search
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/history/search
---
{{AddonSidebar()}}

Recherche dans l'historique du navigateur les objets {{WebExtAPIRef("history.HistoryItem")}} correspondant aux critères donnés.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var searching = browser.history.search(
  query                  // object
)
```

### Paramètres

- `query`

  - : Un objet qui indique ce qu'il faut rechercher dans l'historique du navigateur. Cet objet a les champs suivants :

    - `text`

      - : `string`. Rechercher des éléments d'historique par URL et titre. La chaîne est divisée en termes de recherche distincts aux limites de l'espace. Chaque terme de recherche est insensible à la casse par rapport à l'URL et au titre de l'élément d'historique. L'élément d'historique sera renvoyé si tous les termes de recherche correspondent.

        Par exemple, considérez cet article :

        URL: `"http://example.org"`

        Title: `"Example Domain"`

            "http"              -> matches
            "domain"            -> matches
            "MAIN ample"        -> matches
            "main tt"           -> matches
            "main https"        -> does not match

        Spécifiez une chaîne vide (`""`) pour récupérer tous les objets {{WebExtAPIRef("history.HistoryItem")}} qui répondent à tous les autres critères.

    - `startTime` {{optional_inline}}
      - : `number` ou `string` ou `object`. Une valeur indiquant une date et une heure. Cela peut être représenté par :  un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), une [chaîne de date ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm), ou le nombre de millisecondes depuis l'époque. Si elle est fournie, cette option exclut les résultats dont `lastVisitTime` est antérieure à cette heure. Si elle est omise, la recherche est limitée aux dernières 24 heures.
    - `endTime` {{optional_inline}}
      - : `number` ou `string` ou `object`. Une valeur indiquant une date et une heure. Cela peut être représenté par : un objet [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), une [chaîne de date ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm), ou le nombre de millisecondes depuis l'époque. Si elle est fournie, cette option exclut les résultats dont `lastVisitTime` est postérieur à cette fois. Si elle est omise, toutes les entrées sont prises en compte à partir de l'heure de début.
    - `maxResults` {{optional_inline}}
      - : `number`. Le nombre maximum de résultats à récupérer. La valeur par défaut est 100, avec une valeur minimale de 1. La fonction renvoie une erreur si vous lui transmettez une valeur `maxResults` inférieure à 1.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) sera remplie avec un tableau d'objets de type {{WebExtAPIRef("history.HistoryItem")}}, chacun décrivant un seul élément d'historique correspondant. Les articles sont triés dans l'ordre chronologique inverse.

## Exemples

Consigne l'URL et la dernière heure de visite pour tous les éléments d'historique visités au cours des dernières 24 heures :

```js
function onGot(historyItems) {
  for (item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

var searching = browser.history.search({text: ""});

searching.then(onGot);
```

Logs the URL and last visit time for all history items ever visited:

```js
function onGot(historyItems) {
  for (item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

var searching = browser.history.search({
   text: "",
   startTime: 0
});

searching.then(onGot);
```

Consigne l'URL et la dernière visite de la dernière visite sur une page contenant la chaîne "mozilla" :

```js
function onGot(historyItems) {
  for (item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

var searching = browser.history.search({
 text: "mozilla",
 startTime: 0,
 maxResults: 1
});

searching.then(onGot);
```

{{WebExtExamples}}

## Compatibilité du navigateur

{{Compat("webextensions.api.history.search")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.history`](https://developer.chrome.com/extensions/history). Cette documentation est dérivée de [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) dans le code de Chromium.
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
