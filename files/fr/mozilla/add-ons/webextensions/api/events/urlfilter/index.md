---
title: events.UrlFilter
slug: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
tags:
  - API
  - Add-ons
  - Extensions
  - Non-standard
  - Reference
  - Type
  - UrlFilter
  - WebExtensions
  - events
translation_of: Mozilla/Add-ons/WebExtensions/API/events/UrlFilter
---
{{AddonSidebar()}}

Décrit différents critères de filtrage des URL. Si tous les critères spécifiés dans les propriétés du filtre correspondent à l'URL, le filtre correspond. Les filtres sont souvent fournis aux méthodes API dans un [Array](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) d'UrlFilters. Par exemple, les écouteurs  [webNavigation](/fr/Add-ons/WebExtensions/API/webNavigation) peuvent être ajoutés avec un filtre qui est un objet avec une seule propriété url qui est un [Array](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) de UrlFilters, par exemple `{url:[UrlFilter,UrlFilter,...]}`. Si un filtre dans le tableau de UrlFilters correspond, il est considéré comme une correspondance pour le tableau. En effet, les critères spécifiés dans un seul filtre sont associés ensemble, alors que tous les filtres individuels dans un tableau sont où.

Tous les critères sont sensibles à la casse.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes:

Toutefois, notez que ces deux derniers modèles ne correspondent pas au dernier composant du nom d'hôte, car aucun point implicite n'est ajouté à la fin du nom d'hôte. Ainsi, par exemple, `"org."` correspondra à "https\://borg.com" mais pas "https\://example.org". Pour faire correspondre ces modèles, utilisez `hostSuffix`.

- `hostContains`{{optional_inline}}

  - : `string`. Correspond si le [hostname](/fr/docs/Web/API/HTMLHyperlinkElementUtils/hostname) de l'URL contient la chaîne donnée.

    - Pour tester si un composant de nom d'hôte commence par "foo", utilisez  `".foo"`. Cela correspond à "www\.foobar.com" et "foo.com", car un point implicite est ajouté au début du nom d'hôte.
    - Pour tester si un composant de nom d'hôte se termine par "foo", utilisez `"foo."`.
    - Pour tester si un composant de nom d'hôte correspond exactement à "foo", utilisez `".foo."`.

- `hostEquals`{{optional_inline}}
  - : `string`. Correspond si le nom d'hôte de l'URL est égal à une chaîne spécifiée.
- `hostPrefix`{{optional_inline}}
  - : `string`. Correspond si le nom d'hôte de l'URL commence par une chaîne spécifiée.
- `hostSuffix`{{optional_inline}}

  - : `string`. Correspond si le nom d'hôte de l'URL se termine par une chaîne spécifiée.

    - Exemple: `".example.com"` correspond à "http\://www\.example.com/", mais pas à "http\://example.com/".
    - Exemple: `"example.com"` correspond à "http\://www\.example.com/", et  "http\://fakeexample.com/".

- `pathContains`{{optional_inline}}
  - : `string`. Correspond si le segment de chemin de l'URL contient une chaîne spécifiée.
- `pathEquals`{{optional_inline}}
  - : `string`. Correspond si le segment de chemin de l'URL est égal à une chaîne spécifiée.
- `pathPrefix`{{optional_inline}}
  - : `string`. Correspond si le segment de chemin de l'URL commence par une chaîne spécifiée.
- `pathSuffix`{{optional_inline}}
  - : `string`. Correspond si le segment de chemin de l'URL se termine par une chaîne spécifiée.
- `queryContains`{{optional_inline}}
  - : `string`. Correspond si le segment de requête de l'URL contient une chaîne spécifiée.
- `queryEquals`{{optional_inline}}
  - : `string`. Correspond si le segment de requête de l'URL est égal à une chaîne spécifiée.
- `queryPrefix`{{optional_inline}}
  - : `string`. Correspond si le segment de requête de l'URL commence par une chaîne spécifiée.
- `querySuffix`{{optional_inline}}
  - : `string`. Correspond si le segment de requête de l'URL se termine par une chaîne spécifiée.
- `urlContains`{{optional_inline}}
  - : `string`. Correspond si l'URL (sans identificateur de fragment) contient une chaîne spécifiée. Les numéros de port sont supprimés de l'URL s'ils correspondent au numéro de port par défaut.
- `urlEquals`{{optional_inline}}
  - : `string`. Correspond si l'URL (sans l'identificateur de fragment) est égale à une chaîne spécifiée. Les numéros de port sont supprimés de l'URL s'ils correspondent au numéro de port par défaut.
- `urlMatches`{{optional_inline}}

  - : `string`. Correspond si l'URL (sans l'identificateur de fragment) correspond à une  [expression régulière](/fr/docs/Web/JavaScript/Guide/Regular_Expressions). Les numéros de port sont supprimés de l'URL s'ils correspondent au numéro de port par défaut.

    - Par exemple : `urlMatches: "^[^:]*:(?://)?(?:[^/]*\\.)?mozilla\\.org/.*$"` correspond "http\://mozilla.org/", "https\://developer.mozilla.org/", "ftp\://foo.mozilla.org/", mais pas "https\://developer.fakemozilla.org/".

- `originAndPathMatches`{{optional_inline}}
  - : `string`. Correspond si l'URL sans segment de requête et l'identificateur de fragment correspondent à une [expression régulière](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) spécifiée. Les numéros de port sont supprimés de l'URL s'ils correspondent au numéro de port par défaut.
- `urlPrefix`{{optional_inline}}

  - : `string`. Correspond si l'URL (sans l'identificateur de fragment) commence par une chaîne spécifiée. Les numéros de port sont supprimés de l'URL s'ils correspondent au numéro de port par défaut.

    - Exemple: `"https://developer"` correspond "https\://developer.mozilla.org/" et  "https\://developers.facebook.com/".

- `urlSuffix`{{optional_inline}}
  - : `string`. Correspond si l'URL (sans l'identificateur de fragment) se termine par une chaîne spécifiée. Les numéros de port sont supprimés de l'URL s'ils correspondent au numéro de port par défaut. Notez qu'un slash "/" implicite est ajoutée après l'hôte, donc `"com/"` correspond "https\://example.com", mais pas `"com"`.
- `schemas`{{optional_inline}}

  - : `array` of `string`. Correspond si le schéma de l'URL est identique à l'un des schémas spécifiés dans le tableau. Comme les schémas sont toujours convertis en minuscules, ils doivent toujours être en minuscules ou ne correspondent jamais.

    - Exemple: `["https"]` correspond uniquement aux URL HTTPS.

- `ports`{{optional_inline}}

  - : `array` de (`integer` ou `array of integer`). Un tableau qui peut contenir des entiers et des tableaux d'entiers. Les entiers sont interprétés comme des numéros de port, tandis que les tableaux d'entiers sont interprétés comme des plages de ports. Correspond si le port de l'URL correspond à un numéro de port ou est contenu dans des plages.

    - Par exemple: `[80, 443, [1000, 1200]]` correspond à toutes les demandes sur les ports 80, 443, et dans la plage 1000-1200.

## Compatibilité du navigateur

{{Compat("webextensions.api.events.UrlFilter")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.events`](https://developer.chrome.com/extensions/events). Cette documentation est dérivée de [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) dans le code Chromium.
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
