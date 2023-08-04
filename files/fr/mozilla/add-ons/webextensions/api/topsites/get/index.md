---
title: topSites.get()
slug: Mozilla/Add-ons/WebExtensions/API/topSites/get
---

{{AddonSidebar()}}

Obtient un tableau contenant des informations sur les pages que l'utilisateur a visitées souvent et récemment.

Les navigateurs gardent une liste des pages que l'utilisateur visite souvent et récemment. Ils utilisent cette liste pour aider l'utilisateur à retourner à ces endroits facilement. Par exemple, Firefox fournit par défaut une liste des pages les plus visitées dans la page "Nouvel onglet".

Pour déterminer quelles pages apparaissent dans la liste et dans quel ordre, le navigateur combine "fréquence" - combien de fois l'utilisateur a visité la page - et "récente" - combien de fois l'utilisateur a visité la page.

Le navigateur peut ensuite appliquer un filtrage supplémentaire à cette liste avant de la présenter à l'utilisateur. Par exemple, dans Firefox, la page "Nouvel onglet" ne liste qu'une page par domaine, et l'utilisateur peut bloquer l'apparition de pages dans la liste.

L'API `topSites.get()` permet à une extension d'accéder à cette liste. Appelé sans aucune option, il fournira la liste filtrée des pages, c'est-à-dire celle qui apparaît dans la page "Nouvel onglet". Cependant, en fournissant diverses options, il est possible pour une extension d'obtenir la liste non filtrée des pages.

Il s'agit d'une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

Pour utiliser l'API topSites, vous devez avoir la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "topSites"

## Syntaxe

```js
var gettingTopSites = browser.topSites.get();
```

### Paramètres

- `options`

  - : `object`. Options pour modifier la liste des pages retournées. Il peut s'agir de l'une des propriétés suivantes :

    - `includeBlocked` {{optional_inline}}
      - : `Boolean`. Inclure les pages que l'utilisateur a supprimées de la page "Nouvel onglet". La valeur par défaut est `false`.
    - `includeFavicon` {{optional_inline}}
      - : `Boolean`. Inclure les favicons dans les résultats, pour les pages où ils sont disponibles. La valeur par défaut est `false`.
    - `includePinned` {{optional_inline}}
      - : `Boolean`. inclure les sites que l'utilisateur a épinglés dans le nouvel onglet Firefox.
        Par défaut à `false`.
    - `includeSearchShortcuts` {{optional_inline}}
      - : `Boolean`. Inclut les raccourcis de recherche qui apparaissent dans le nouvel onglet Firefox.
        Par défaut à `false`.
    - `limit` {{optional_inline}}
      - : `Integer`. Le nombre de pages à retourner. Ce chiffre doit être compris entre 1 et 100 inclusivement. La valeur par défaut est 12.
    - `onePerDomain` {{optional_inline}}
      - : `Boolean`. N'incluez qu'une seule page par domaine. La valeur par défaut est `true`.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Ceci sera réalisé avec un tableau d'objets {{WebExtAPIRef("topSites.MostVisitedURL", "MostVisitedURL")}}, un pour chaque site listé dans la page "Nouvel onglet" du navigateur. Si une erreur se produit, la presse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ce code enregistre le titre et l'UL de tous les sites dans la page "Nouvel onglet" :

```js
function logTopSites(topSitesArray) {
  for (topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.log(error);
}

var gettingTopSites = browser.topSites.get();
gettingTopSites.then(logTopSites, onError);
```

Ce code enregistre le titre et l'URL de toutes les pages d'accueil, y compris celles que l'utilisateur a bloquées, et peut inclure plusieurs pages dans le même domaine :

```js
function logTopSites(topSitesArray) {
  for (topSite of topSitesArray) {
    console.log(`Title: ${topSite.title}, URL: ${topSite.url}`);
  }
}

function onError(error) {
  console.log(error);
}

var gettingTopSites = browser.topSites.get({
  includeBlocked: true,
  onePerDomain: false,
});

gettingTopSites.then(logTopSites, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.topSites`](https://developer.chrome.com/extensions/topSites).

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
