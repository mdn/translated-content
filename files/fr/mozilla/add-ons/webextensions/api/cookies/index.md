---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/cookies
---
{{AddonSidebar}}

Permet aux extensions d'obtenir et de définir des cookies, et d'être averti quand ils changent.

Pour utiliser cette API, vous devez inclure l'[API permission](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "cookies" dans votre fichier  [manifest.json](/fr/Add-ons/WebExtensions/manifest.json), ainsi que les [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)  pour les sites dont vous devez accéder aux cookies. Voir les [permissions cookies](/fr/Add-ons/WebExtensions/API/cookies#Permissions).

## Permissions

Pour utiliser cette API, un module complémentaire doit spécifier la  [permission d'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "cookies" dans son manifest, ainsi que les [permissions host](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour tous les sites pour lesquels il souhaite accéder aux cookies. L'add-on peut lire ou écrire des cookies qui pourraient être lus ou écrits  par une URL correspondant aux permissions de l'hôte. Par exemple :

- `http://*.example.com/`

  - : Un module complémentaire avec cette autorisation d'hôte peut :

    - Lire un cookie non sécurisé pour `www.example.com`, avec n'importe quel chemin.
    - Écrire un cookie ou non sécurisé pour `www.example.com`, avec n'importe quel chemin.

    Il ne peut _pas_ :

    - Lire un cookie  sécurisé pour `www.example.com`.

- `http://www.example.com/`

  - : Un module complémentaire avec cette permission d'hôte peut :

    - Lire un cookie non sécurisé pour `www.example.com`, avec n'importe quel chemin.
    - Lire un cookie non sécurisé pour `.example.com`, avec n'importe quel chemin.
    - Écrire un cookie sécurisé ou non sécurisé pour  `www.example.com` avec n'importe quel chemin.
    - Écrire un cookie sécurisé ou non sécurisé pour  `.example.com` avec n'importe quel chemin.

    Il ne peut _pas_ :

    - Lire ou écrire un cookie pour `foo.example.com`.
    - Lire ou écrire un cookie pour `foo.www.example.com`.

- `*://*.example.com/`

  - : Un module complémentaire avec çà permission d'hôtes n add-on with this host permission may:

    - Read or write a secure or non-secure cookie for `www.example.com` with any path.

## Isolement de la première partie

Les cookies tiers sont des cookies qui sont définis par un site Web autre que celui sur lequel vous êtes actuellement. Par exemple :

1.  Vous visitez [bbc.com](http://bbc.com). Il contient une annonce de [tracker.com](http://tracker.com) qui définit un cookie associé au domaine "[tracker.com](http://tracker.com)".
2.  Vous visitez [cnn.com](http://cnn.com). Il contient également une annonce de  [tracker.com](http://tracker.com) qui définit un cookie associé au domaine "[tracker.com](http://tracker.com)".
3.  Finalement, les deux cookies peuvent être envoyés à [tracker.com](http://tracker.com). qui peut alors comprendre que le même utilisateur a visité les deux sites.

Lorsque l'isolement de la première partie est activé, les cookies sont en outre qualifiés par le domaine de la page d'origine visitée par l'utilisateur (essentiellement, le domaine montré à l'utilisateur dans la barre d'URL, également appelé "première partie du domaine"). Cela signifie qu'un tracker ne peut pas corréler son cookie de [bbc.com](http://bbc.com) avec son cookie de [cnn.com](http://cnn.com), de sorte que le tracker ne peut pas suivre un seul utilisateur sur les deux sites.

L'isolement de la première partie peut être activé directement par l'utilisateur en ajustant la configuration du navigateur et peut être défini par des extensions à l'aide du paramètre [`firstPartyIsolate`](/fr/Add-ons/WebExtensions/API/privacy/websites#Properties) de l'API de [`privacy`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/privacy) Notez que l'isolation de première partie est activée par défaut dans le [Tor Browser](https://www.torproject.org/).

Dans l'API `cookies`, le domaine de première partie est représenté à l'aide de l'attribut `firstPartyDomain`. Tous les cookies configurés pendant l'isolement de la première partie ont cet attribut défini sur le domaine de la page d'origine. Dans l'exemple ci-dessus, ce serait "[bbc.com](http://bbc.com)" pour un cookie et "[cnn.com](http://cnn.com)" pour l'autre. Tous les cookies définis par les sites Web alors que l'isolation de première partie est désactivée auront cette propriété définie sur une chaîne vide.

Le {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} et {{WebExtAPIRef("cookies.remove()")}} Les API acceptent toutes une option `firstPartyDomain`.

Lorsque l'isolation de première partie est activée, vous devez fournir cette option ou les appels de l'API échoueront. Pour `get()`, `set()`, et `remove()`vous devez passer une valeur de chaîne de caractères.

Pour `getAll()`,  vous pouvez aussi passer `null` ici, et ceci obtiendra tous les cookies,
qu'ils aient ou non une valeur non vide pour `firstPartyDomain.`

Lorsque l'isolation de la première partie est désactivée, le paramètre `firstPartyDomain` est optionnel et par défaut est une chaîne vide. Une chaîne non vide peut être utilisée pour récupérer ou modifier les cookies d'isolation de première partie. De même, passer  `null` comme `firstPartyDomain` pour `getAll()` retournera tous les cookies.

## Types

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Représente les informations sur un cookie HTTP.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Représente un cookie store dans le navigateur.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Représente la raison pour laquelle un cookie a été modifié.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Représente le même statut du cookie sur le site.

## Méthodes

- {{WebExtAPIRef("cookies.get()")}}
  - : Récupère les informations sur un cookie unique.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Récupère tous les cookies correspondant à un ensemble de filtres données.
- {{WebExtAPIRef("cookies.set()")}}
  - : Définit un cookie avec les données d'un cookie donné ; peut remplacer les cookies équivalents s'ils existent.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Supprime un cookie par son nom.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Liste tous les cookies stores existants.

## Gestionnaire d'événements

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Détails quand un cookie est défini ou supprimé.

## Compatibilité du navigateur

{{Compat("webextensions.api.cookies")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.cookies`](https://developer.chrome.com/extensions/cookies). Cette documentation est dérivée de [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) dans le code Chromium.

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
