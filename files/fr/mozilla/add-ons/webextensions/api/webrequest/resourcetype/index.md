---
title: webRequest.ResourceType
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/ResourceType
---

{{AddonSidebar()}}

Ce type est une chaîne de caractères, qui représente le contexte dans lequel une ressource a été récupérée dans une requête web.

Il est utilisé pour [filtrer](/fr/Add-ons/WebExtensions/API/WebRequest/RequestFilter) les requêtes que vous écoutez en utilisant l'API webRequest. Par exemple : vous pouvez écouter les requêtes uniquement pour les images, ou uniquement pour les scripts.

## Type

Les valeurs de ce type sont des chaînes de caractères. Les valeurs possibles sont :

- `beacon`
  - : Demandes envoyées par le biais de l'[API Beacon](/fr/docs/Web/API/Beacon_API).
- `csp_report`
  - : Demandes envoyées au {{CSP("report-uri")}} donné dans l'en-tête {{HTTPHeader("Content-Security-Policy")}}, lorsqu'une tentative de violation de la politique est détectée.
- `font`
  - : Polices Web chargées pour un {{cssxref("@font-face")}} règle CSS.
- `image`
  - : Les ressources chargées pour être rendues sous forme d'image, à l'exception de `imageset` sur les navigateurs qui prennent en charge ce type (voir la compatibilité des navigateurs ci-dessous).
- `imageset`
  - : Images chargées par un élément {{HTMLElement("picture")}} ou données dans un attribut [`srcset`](/fr/docs/Web/HTML/Element/img#srcset) d'un élement `<img>`.

<!---->

- `main_frame`
  - : Documents de niveau chargés dans un objet.
- `media`
  - : Ressources chargées par un élément {{HTMLElement("video")}} ou {{HTMLElement("audio")}}.
- `object`

  - : Ressources chargées par un élément {{HTMLElement("object")}} ou {{HTMLElement("embed")}}.

    Les navigateurs qui n'ont pas de type `object_subrequest` dédié (voir compatibilité des navigateurs ci-dessous), étiquettent également les requêtes ultérieures envoyées par le plugin en tant `object`.

- `object_subrequest`
  - : Requêtes envoyées par plugins.
- `ping`

  - : Demandes envoyées à l'URL donnée dans l'attribut [`ping`](/fr/docs/Web/HTML/Element/a#ping) d'un hyperlien, lorsque l'hyperlien est suivi.

    Les navigateurs qui n'ont pas de type de `balise` dédié (voir la compatibilité des navigateurs ci-dessous), étiquettent également les requêtes envoyées par l'API Beacon en tant que `ping`.

- `script`
  - : Code chargé pour être exécuté par un élément {{HTMLElement("script")}} ou exécuté dans un [Worker](/fr/docs/Web/API/Web_Workers_API).
- `speculative`
  - : Dans une connexion spéculative, le navigateur a déterminé qu'une demande d'URI pourrait bientôt arriver, donc il lance immédiatement un handshake TCP et/ou TLS, de sorte qu'il est prêt plus rapidement lorsque la ressource est effectivement demandée.
- `stylesheet`
  - : Feuilles de style [CSS](/fr/docs/Web/CSS) chargées pour décrire la représentation d'un document.
- `sub_frame`
  - : Documents chargés dans un élément {{HTMLElement("iframe")}} ou {{HTMLElement("frame")}}.
- `web_manifest`
  - : [Manifests Web App](/fr/docs/Web/Manifest) chargés pour les sites Web qui peuvent être installés sur l'écran d'accueil.
- `websocket`
  - : Requêtes initiant une connexion à un serveur via l'[API WebSocket](/fr/docs/WebSockets).
- `xbl`
  - : [XBL](/fr/docs/XBL) bindings chargés pour étendre le comportement des éléments d'un document.
- `xml_dtd`
  - : [DTDs](/fr/docs/Glossaire/DTD) chargées pour un document XML.
- `xmlhttprequest`
  - : Requêtes envoyées par un objet {{domxref("XMLHttpRequest")}} ou par l'[API Fetch](/fr/docs/Web/API/Fetch_API).
- `xslt`
  - : Feuilles de style [XSLT](/fr/docs/Web/XSLT) chargées pour transformer un document XML
- `other`
  - : Ressources qui ne sont couvertes par aucun autre type disponible.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest). Cette documentation est dérivée de [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) dans le code Chromium.
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
