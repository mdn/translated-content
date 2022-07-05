---
title: webRequest
slug: Mozilla/Add-ons/WebExtensions/API/webRequest
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - webRequest
translation_of: Mozilla/Add-ons/WebExtensions/API/webRequest
---
{{AddonSidebar}}

Ajout d'écouteurs d'événements pour les différentes étapes d'une requête HTTP. L'écouteur de l'événement reçoit des informations détaillées sur la demande et peut modifier ou annuler la demande.

Chaque événement est déclenché à un stade particulier de la demande. La séquence typique des événements est la suivante :

![](webRequest-flow.png)

{{WebExtAPIRef("webRequest.onErrorOccurred", "onErrorOccurred")}} peut être tiré à tout moment pendant la requête. Notez également que parfois la séquence des événements peut différer de ceci : par exemple, dans Firefox, lors d'une mise à niveau [HSTS](/fr/docs/Sécurité/HTTP_Strict_Transport_Security), l'événement `onBeforeRedirect` sera déclenché immédiatement après `onBeforeRequest`.

Tous les évènements (excepté `onErrorOccurred`) peuvent prendre trois arguments pour `addListener()`:

- Le receveur d'évènements lui-même
- un {{WebExtAPIRef("webRequest.RequestFilter", "filter")}} objet, afin de n'être notifié que pour les requêtes effectués par des URLs particulières ou pour un type particulier de ressources.
- un  `extraInfoSpec` objet optionnel. Vous pouvez utiliser celui-ci pour passer des instructions spécifiques à l'évènement supplémentaires.

Une fonction d'écoute reçoit un objet `details` qui contient des informations à propos de la requête. Il inclut un ID de requête, fourni afin de permettre à une extension de relier des évènements associés à une même requête. Il est unique à chaque session de navigation et à l'extension. Il reste le même tout au long d'une requête, même durant les redirections et les échanges d'authentifications.

Pour utiliser l'API webRequest pour un hôte donné, une extension doit avoir la [permission API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions)  "webRequest" et la [permission hôte ](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)pour cet hôte. Pour utiliser la fonction "blocking", l'extension doit également avoir la permission API "webRequestBlocking".

Pour intercepter des ressources chargées par une page (comme des images, des scripts ou des feuilles de style), l'extension doit avoir la permission de l'hôte pour la ressource ainsi que pour la page principale demandant la ressource. Par exemple, si une page à  "https\://developer.mozilla.org" charge une image à partir de "https\://mdn.mozillademos.org", alors une extension doit avoir les deux permissions d'hôte si elle doit intercepter la demande d'image.

## Modifier une requête

Sur certains de ces événements, vous pouvez modifier la demande. Plus précisément, vous pouvez  :

- Annuler une requête avec:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}
  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

- Rediriger une requête avec:

  - {{WebExtAPIRef("webRequest.onBeforeRequest", "onBeforeRequest")}}
  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Modifier des en-têtes de requêtes avec:

  - {{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}

- Modifier des réponses d'en-têtes avec:

  - {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}}

- Fournir des informations d'authentifications avec:

  - {{WebExtAPIRef("webRequest.onAuthRequired", "onAuthRequired")}}

Pour ce faire, vous devez transmettre une option avec la valeur "blocking" dans l'argument `extraInfoSpec` à la fonction `addListener()` de l'événement. Cela rend l'auditeur synchrone. Dans l'écouteur, vous pouvez alors renvoyer un objet {{WebExtAPIRef("webRequest.BlockingResponse", "BlockingResponse")}}, qui indique la modification à apporter : par exemple, l'en-tête de requête modifié que vous souhaitez envoyer.

> **Attention :** Les protocoles non-HTTP(S) ne supportent pas actuellement la fonctionnalité de "`blockage`", donc la modification de ces requêtes n'est pas disponible pour le moment. Voir {{bug(1475832)}} pour plus de détails.

## Accéder aux informations de sécurité

Dans l'écouteur {{WebExtAPIRef("webRequest.onHeadersReceived", "onHeadersReceived")}} vous pouvez accéder aux propriétés [TLS](/fr/docs/Glossaire/TLS) d'une requête en appelant {{WebExtAPIRef("webRequest.getSecurityInfo()", "getSecurityInfo()")}}. Pour ce faire, vous devez également transmettre le "blockage" dans l'argument `extraInfoSpec` à la fonction `addListener()` de l'évènement.

Vous pouvez lire les détails de la prise de contact TLS, mais vous ne pouvez pas les modifier ou remplacer les décisions de confiance du navigateur.

## Modifier les réponses

Pour modifier les corps de réponse HTTP pour une requête, appelez {{WebExtAPIRef("webRequest.filterResponseData")}}, en lui transmettant l'ID de la requête. Cela renvoie un objet {{WebExtAPIRef("webRequest.StreamFilter")}} que vous pouvez utiliser pour examiner et modifier les données reçues par le navigateur.

Pour ce faire, vous devez disposer de la permission de l'API "webRequestBlocking" ainsi que la [permission de l'API](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "webRequest" et la [permission de l'hôte ](/fr/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions)pour l'hôte concerné.

## Types

- {{WebExtAPIRef("webRequest.BlockingResponse")}}
  - : Un objet de ce type est renvoyé par les auditeurs d'événements qui ont défini le `"blockage"` dans leur argument `extraInfoSpec`. En définissant des propriétés particulières dans `BlockingResponse`, the listener can modify network requests.
- {{WebExtAPIRef("webRequest.CertificateInfo")}}
  - : Un objet décrivant un seul certificat X.509.
- {{WebExtAPIRef("webRequest.HttpHeaders")}}
  - : Un tableau d'en-têtes HTTP. Chaque en-tête est représenté comme un objet avec deux propriétés : `name` et `valeur` ou `binaryValue`.
- {{WebExtAPIRef("webRequest.RequestFilter")}}
  - : Un objet décrivant les filtres à appliquer aux événements webRequest.
- {{WebExtAPIRef("webRequest.ResourceType")}}
  - : Représente un type particulier de ressources récupérées dans une requête Web.
- {{WebExtAPIRef("webRequest.SecurityInfo")}}
  - : Un objet décrivant les propriétés de sécurité d'une requête Web particulière.
- {{WebExtAPIRef("webRequest.StreamFilter")}}
  - : Un objet qui peut être utilisé pour surveiller et modifier les réponses HTTP pendant leur réception.
- {{WebExtAPIRef("webRequest.UploadData")}}
  - : Contient des données téléchargées dans une requête URL.

## Propriétés

- {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}
  - : Le nombre de fois que [`handlerBehaviorChanged()`](/fr/Add-ons/WebExtensions/API/WebRequest/handlerBehaviorChanged) peut être appelé dans une période de 10 minutes.

## Méthodes

- {{WebExtAPIRef("webRequest.handlerBehaviorChanged()")}}
  - : Cette fonction peut être utilisée pour s'assurer que les écouteurs d'événements sont appliqués correctement lorsque les pages se trouvent dans le cache en mémoire du navigateur.
- {{WebExtAPIRef("webRequest.filterResponseData()")}}
  - : Retourne un objet {{WebExtAPIRef("webRequest.StreamFilter")}} pour une requête donnée.
- {{WebExtAPIRef("webRequest.getSecurityInfo()")}}
  - : Obtient des informations détaillées sur la connexion [TLS](/fr/docs/Glossaire/TLS) associée à une requête donnée.

## Evénements

- {{WebExtAPIRef("webRequest.onBeforeRequest")}}
  - : Lancé lorsqu'une demande est sur le point d'être faite, et avant que les en-têtes ne soient disponibles. C'est un bon endroit pour écouter si vous voulez annuler ou rediriger la demande.
- {{WebExtAPIRef("webRequest.onBeforeSendHeaders")}}
  - : Câblé avant d'envoyer des données HTTP, mais après que les en-têtes HTTP soient disponibles. C'est un bon endroit pour écouter si vous voulez modifier les en-têtes de requête HTTP.
- {{WebExtAPIRef("webRequest.onSendHeaders")}}
  - : Lancé juste avant l'envoi des en-têtes. Si votre add-on ou d'autres en-têtes modifiés dans `{{WebExtAPIRef("webRequest.onBeforeSendHeaders", "onBeforeSendHeaders")}}`, vous verrez la version modifiée ici.
- {{WebExtAPIRef("webRequest.onHeadersReceived")}}
  - : Lancé lorsque les en-têtes de réponse HTTP associés à une requête ont été reçus. Vous pouvez utiliser cet événement pour modifier les en-têtes de réponse HTTP.
- {{WebExtAPIRef("webRequest.onAuthRequired")}}
  - : Déclenché lorsque le serveur demande au client de fournir des informations d'authentification. L'auditeur ne peut rien faire, annuler la demande ou fournir des informations d'authentification.
- {{WebExtAPIRef("webRequest.onResponseStarted")}}
  - : Lancé lorsque le premier octet du corps de réponse est reçu. Pour les requêtes HTTP, cela signifie que la ligne d'état et les en-têtes de réponse sont disponibles.
- {{WebExtAPIRef("webRequest.onBeforeRedirect")}}
  - : Déclenché lorsqu'une redirection initiée par le serveur est sur le point de se produirer.
- {{WebExtAPIRef("webRequest.onCompleted")}}
  - : C'est déclenché lorsqu'une demande est complétée.
- {{WebExtAPIRef("webRequest.onErrorOccurred")}}
  - : Déclenché lorsqu'une erreur se produit.

## Compatibilité du navigateur

{{Compat("webextensions.api.webRequest")}}

[Extra notes on Chrome incompatibilities](/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#webRequest_incompatibilities).

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.webRequest`](https://developer.chrome.com/extensions/webRequest). Cette documentation est dérivée de [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) dans le code Chromium.
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
