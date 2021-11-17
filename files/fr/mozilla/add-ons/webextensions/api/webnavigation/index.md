---
title: webNavigation
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - webNavigation
translation_of: Mozilla/Add-ons/WebExtensions/API/webNavigation
---
{{AddonSidebar}}

Ajouter des écouteurs d'événement pour les différentes étapes d'une navigation. Une navigation se compose d'un cadre dans le navigateur passant d'une URL à l'autre, généralement (mais pas toujours) en réponse à une action de l'utilisateur comme cliquer sur un lien ou entrer une URL dans la barre d'adresse.

Comparable à l'API {{WebExtAPIRef("webRequest")}}: Les navigations entrainent le navigateur à faire des requetes web, mais l'API webRequest travaille au niveau inférieur de la couche HTTP, contrairement à l'API webNavigation qui travaille directement au niveau de l'interface utilisateur du navigateur elle-même.

Chaque evenement correspond directement à un état précis dans la navigation. La séquence des évenements est comme suit:

![](we-flow.png)

- Le flux primaire est :

  - `{{WebExtAPIRef("webNavigation.onBeforeNavigate", "onBeforeNavigate")}}`
  - `{{WebExtAPIRef("webNavigation.onCommitted", "onCommitted")}}`
  - `{{WebExtAPIRef("webNavigation.onDOMContentLoaded", "onDOMContentLoaded")}}`
  - `{{WebExtAPIRef("webNavigation.onCompleted", "onCompleted")}}`.

- Adionellement :

  - `{{WebExtAPIRef("webNavigation.onCreatedNavigationTarget", "onCreatedNavigationTarget")}}` est déclenché avant `onBeforeNavigate` si le navigateur a besoin de créer un nouvel onglet ou une nouvelle fenêtre pour la navigation (par exemple, parce que l'utilisateur a ouvert un lien dans un nouvel onglet).
  - {{WebExtAPIRef("webNavigation.onHistoryStateUpdated", "onHistoryStateUpdated")}} est déclenché si une page utilise l'[API historique](http://diveintohtml5.info/history.html) pour mettre à jour l'URL affichée dans la barre d'adresse du navigateur.
  - {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated", "onReferenceFragmentUpdated")}} est déclenché si [fl'identificateur de fragment](https://en.wikipedia.org/wiki/Fragment_identifier) d'une page est modifié.
  - {{WebExtAPIRef("webNavigation.onErrorOccurred", "onErrorOccurred")}} peut être déclenché à tout moment.

Chaque navigation est une transition d'URL dans un cadre de navigateur particulier. Le cadre du navigateur est identifié par un ID d'onglet et un ID de trame. Le cadre peut être le contexte de navigation de niveau supérieur dans l'onglet ou peut être un contexte de navigation imbriqué implémenté en tant qu'[iframe](/fr/docs/Web/HTML/Element/iframe).

L'appel `addListener()` de chaque événement accepte un paramètre de filtre facultatif. Le filtre spécifiera un ou plusieurs modèles d'URL, et l'événement ne sera alors déclenché que pour les navigations dans lesquelles l'URL cible correspond à l'un des modèles.

L'écouteur d'événement `onCommitted`reçoit deux propriétés supplémentaires : un {{WebExtAPIRef("webNavigation.TransitionType","TransitionType")}} indiquant la cause de la navigation (par exemple, parce que l'utilisateur a cliqué sur un lien ou parce que l'utilisateur a sélectionné un signet), et un  {{WebExtAPIRef("webNavigation.TransitionQualifier","TransitionQualifier")}} fournissant plus d'informations sur la navigation.

Pour utiliser cette API, vous devez avoir la [permission](/fr/Add-ons/WebExtensions/manifest.json/permissions) "webNavigation".

## Types

- {{WebExtAPIRef("webNavigation.TransitionType")}}
  - : Cause de la navigation: par exemple, l'utilisateur a cliqué sur un lien, ou a tapé une adresse, ou a cliqué sur un signet.
- {{WebExtAPIRef("webNavigation.TransitionQualifier")}}
  - : Informations supplémentaires sur une transition.

## Functions

- {{WebExtAPIRef("webNavigation.getFrame()")}}
  - : Récupère des informations sur un cadre particulier. Ce cadre peut être le cadre de niveau supérieur dans un onglet ou un [iframe](/fr/docs/Web/HTML/Element/iframe) imbriqué, et est identifié de manière unique par un ID d'onglet et un ID de _frame_.
- {{WebExtAPIRef("webNavigation.getAllFrames()")}}
  - : Étant donné un ID d'onglet, récupère des informations sur tous les cadres qu'il contient.

## Events

- {{WebExtAPIRef("webNavigation.onBeforeNavigate")}}
  - : Lancé lorsque le navigateur est sur le point de démarrer un événement de navigation.
- {{WebExtAPIRef("webNavigation.onCommitted")}}
  - : Lancé lorsqu'une navigation est validée. Au moins une partie du nouveau document a été reçue du serveur et le navigateur a décidé de passer au nouveau document.
- {{WebExtAPIRef("webNavigation.onDOMContentLoaded")}}
  - : Lancé lorsque l'événement [DOMContentLoaded](/fr/docs/Web/Events/DOMContentLoaded) est déclenché dans la page.
- {{WebExtAPIRef("webNavigation.onCompleted")}}
  - : Lancé lorsqu'un document, y compris les ressources auxquelles il fait référence, est complètement chargé et initialisé. Ceci est équivalent à l'événement de [`chargement`](/fr/docs/Web/Events/load) du DOM.
- {{WebExtAPIRef("webNavigation.onErrorOccurred")}}
  - : Lancé lorsqu'une erreur se produit et que la navigation est annulée. Cela peut se produire si une erreur réseau s'est produite ou si l'utilisateur a interrompu la navigation.
- {{WebExtAPIRef("webNavigation.onCreatedNavigationTarget")}}
  - : Lancé lorsqu'une nouvelle fenêtre ou un nouvel onglet dans une fenêtre existante est créé pour héberger une navigation: par exemple, si l'utilisateur ouvre un lien dans un nouvel onglet.
- {{WebExtAPIRef("webNavigation.onReferenceFragmentUpdated")}}
  - : Lancé si l' [identificateur de fragment](https://en.wikipedia.org/wiki/Fragment_identifier) d'une page a été modifié.
- {{WebExtAPIRef("webNavigation.onTabReplaced")}}
  - : Lancé lorsque le contenu de l'onglet est remplacé par un onglet différent (généralement précédemment pré-rendu).
- {{WebExtAPIRef("webNavigation.onHistoryStateUpdated")}}
  - : Lancé lorsque la page a utilisé l' [API d'histoirique](http://diveintohtml5.info/history.html) pour mettre à jour l'URL affichée dans la barre d'adresse du navigateur.

## Compatibilité du navigateur

{{Compat("webextensions.api.webNavigation")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webNavigation`](https://developer.chrome.com/extensions/webNavigation). Cette documentation est dérivée de [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) dans le code de Chromium code.
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
