---
title: cookies.set()
slug: Mozilla/Add-ons/WebExtensions/API/cookies/set
---

{{AddonSidebar()}}

La méthode **`set()`** de l'API {{WebExtAPIRef("cookies")}} définit un cookie contenant des données précises de cookie. Cette méthode équivaut à l'émission d'un en-tête HTTP `Set-Cookie` lors d'une requête à une URL donnée.

L'appel réussit uniquement si vous incluez la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "cookies" dans votre fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json), ainsi que les [permissions d'hôte](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) pour l'URL indiquée dans son manifest. L'URL donnée a également besoin des permissions nécessaires pour créer un cookie avec les paramètres donnés.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var setting = browser.cookies.set(
  details, // object
);
```

### Paramètres

- `details`
  - : Un `objet` contenant les détails du cookie que vous souhaitez définir. Il peut avoir les propriétés suivantes :
- `domain`{{optional_inline}}
  - : Une `chaîne` représentant le domaine du cookie. S'il est omis, le cookie devient un cookie hôte uniquement.
- `expirationDate`{{optional_inline}}
  - : Un `nombre` qui représente la date d'expiration du cookie en tant que nombre de secondes écoulées depuis l'époque UNIX. S'il est omis, le cookie devient un cookie de session.
- `firstPartyDomain`{{optional_inline}}
  - : Une `chaîne` représentant le domaine de première partie avec lequel le cookie sera associé. Cette propriété doit être fournie si l'isolation de la première partie est activée sur le navigateur. Voir [Isolement de la première partie](/fr/Add-ons/WebExtensions/API/cookies#Isolement_de_la_première_partie).
- `httpOnly`{{optional_inline}}
  - : Un `booléen` qui spécifie si le cookie doit être marqué comme HttpOnly (`true`), ou pas (false). S'il est omis, la valeur par défaut est `false`.
- `name`{{optional_inline}}
  - : Une `chaîne` représentant le nom du cookie. S'il est omis, il est vide par défaut.
- `path`{{optional_inline}}
  - : Une `chaîne` représentant le chemin du cookie. S'il est omis, la valeur par défaut est la partie du chemin du paramètre de l'URL.
- `sameSite{{optional_inline}}`
  - : Une valeur {{WebExtAPIRef("cookies.SameSiteStatus")}} qui indique l'état SameSite du cookie. Si omis, la valeur par défaut 0, 'no_restriction'.
- `secure`{{optional_inline}}
  - : Un `booléen` qui spécifie si le cookie doit être marqué comme sécurisé (`true`), ou pas (false). S'il est omis, la valeur par défaut est `false`.
- `storeId`{{optional_inline}}
  - : Une `chaîne` représentant l'ID du cookie store dans lequel défini le cookie. S'il est omiS, le cookie est défini par défaut dans le cookie store du contexte d'exécution actuel.
- `url`
  - : Une `chaîne` représentant l'URI de requête à associer au cookie. Cette valeur peut affecter les valeurs par défaut du cookie créé. Si les autorisations d'hôte pour cette URL ne sont pas spécifiées dans le fichier manifest, l'appel de la méthode échouera.
- `value`{{optional_inline}}
  - : Une `chaîne` représentant la valeur du cookie. S'il est omis, c'est vide par défaut.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet {{WebExtAPIRef('cookies.Cookie')}} contenant les détails sur le cookie qui a été défini. Si l'appel échoue pour une quelconque raison, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Cet exemple définit un cookie pour le document hébergé par l'onglet actuellement actif :

```js
var getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: "favourite-colour",
    value: "red",
  });
}
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
