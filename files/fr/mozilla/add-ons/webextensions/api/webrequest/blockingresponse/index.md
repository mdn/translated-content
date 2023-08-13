---
title: webRequest.BlockingResponse
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/BlockingResponse
---

{{AddonSidebar()}}

Un objet de ce type est renvoyé par les auditeurs d'événements qui ont défini le `"blocking"` dans leur argument `extraInfoSpec`.

En définissant des propriétés particulières dans `BlockingResponse`, l'auditeur peut modifier les requêtes réseau.

Notez que vous ne pouvez pas définir toutes les propriétés de cet objet dans chaque auditeur : les propriétés que vous pouvez définir dépendent de l'événement qui a déclenché cet auditeur, comme détaillé ci-dessous.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `authCredentials`{{optional_inline}}

  - : `object`. Si elle est définie, la demande est faite en utilisant les informations d'identification données. Vous ne pouvez définir cette propriété que dans {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}. La propriété `authCredentials` est un objet avec les propriétés suivantes :

    - `username`
      - : `string`. Nom d'utilisateur à fournir.
    - `password`
      - : `string`. Mot de passe à fournir.

- `cancel`{{optional_inline}}
  - : `boolean`. Si `true`, la demande est annulée. Vous pouvez définir cette propriété seulement dans {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}, {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}, {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}, et {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}.
- `redirectUrl`{{optional_inline}}

  - : `string`. Il s'agit d'une URL, et si elle est définie, la requête originale est redirigée vers cette URL. Vous ne pouvez définir cette propriété que dans {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}} ou {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}.

    Les redirections vers des schémas non-HTTP tels que data : sont autorisées, mais elles ne sont pas prises en charge actuellement ([bug Firefox 707624](https://bugzil.la/707624)). Les redirections utilisent la même méthode de requête que la requête originale à moins qu'elle ne soit initiée à partir de l'étape `onHeadersReceived`, auquel cas la redirection utilise la méthode GET.

    Si une extension veut rediriger une URL publique (par exemple HTTPS) vers une [page d'extension](/fr/Add-ons/WebExtensions/user_interface/Extension_pages), le fichier manifest.json de l'extension doit contenir une clé [web_accessible_resources](/fr/Add-ons/WebExtensions/manifest.json/web_accessible_resources) qui liste l'URL de la page d'extension.

- `requestHeaders`{{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. C'est un objet {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}, un tableau dans lequel chaque objet représente un en-tête. Si elle est définie, la demande est faite avec ces en-têtes plutôt qu'avec les en-têtes d'origine. Vous ne pouvez définir cette propriété que dans {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}} .
- `responseHeaders`{{optional_inline}}
  - : {{WebExtAPIRef('webRequest.HttpHeaders')}}. C'est un objet {{WebExtAPIRef('webRequest.HttpHeaders', "HttpHeaders")}}, un tableau dans lequel chaque objet représente un en-tête. Si elle est définie, le serveur est supposé avoir répondu avec ces en-têtes de réponse au lieu des originaux. Vous ne pouvez définir cette propriété que dans {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}. Si plusieurs extensions tentent de définir le même en-tête (par exemple, `Content-Security-Policy`), une seule des modifications sera réussie.
- `upgradeToSecure`{{optional_inline}}
  - : `boolean`. Si la valeur `true` est est définie et que la requête originale est une requête HTTP, cela empêchera l'envoi de la requête originale et fera plutôt une requête sécurisée (HTTPS). Si une extension renvoie `redirectUrl` dans `onBeforeRequest`, alors `upgradeToSecure` sera ignoré pour cette requête. Vous ne pouvez définir cette propriété que dans {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest). Cette documentation est dérivée de [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) dans le code Chromium.

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
