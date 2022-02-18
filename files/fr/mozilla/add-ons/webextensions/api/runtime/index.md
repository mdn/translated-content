---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
tags:
  - API
  - Add-ons
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - WebExtensions
  - runtime
translation_of: Mozilla/Add-ons/WebExtensions/API/runtime
---
{{AddonSidebar}}

Ce module fournit des informations sur votre extension et l'environnement dans lequel elle fonctionne.

Il fournit également des API de messagerie vous permettant de:

- Communiquer entre les différentes parties de votre extension.
- Communiquer avec d'autres extensions.
- Communiquer avec les applications natives.

## Types

- {{WebExtAPIRef("runtime.Port")}}
  - : Représente une extrémité d'une connexion entre deux contextes spécifiques, qui peut être utilisée pour échanger des messages.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Contient des informations sur l'expéditeur d'un message ou d'une demande de connexion.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifie le système d'exploitation du navigateur.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifie l'architecture du processeur du navigateur.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Contient des informations sur la plate-forme utilisée par le navigateur.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Résultat d'un appel à {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : La raison pour laquelle l'événement {{WebExtAPIRef("runtime.onInstalled")}} est en cours d'envoi.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : La raison pour laquelle l'événement {{WebExtAPIRef("runtime.onRestartRequired")}} est en cours d'expédition.

## Propriétés

- {{WebExtAPIRef("runtime.lastError")}}
  - : Cette valeur est définie lorsqu'une fonction asynchrone a une condition d'erreur qu'elle doit signaler à son appelant
- {{WebExtAPIRef("runtime.id")}}
  - : L'ID de l'extension

## Fonctions

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Récupère l'objet [Window](/fr/docs/Web/API/Window) pour la page d'arrière-plan qui s'exécute dans l'extension en cours.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Ouvre une [page d'options](/fr/Add-ons/WebExtensions/user_interface/Options_pages) de votre extension.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Obtient le fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json) complet,  sérialisé en tant qu'objet.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Etant donné un chemin relatif de [manifest.json](/fr/Add-ons/WebExtensions/manifest.json) à une ressource empaquetée avec l'extension, renvoie une URL entièrement qualifiée.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Définit une URL à visiter lorsque l'extension est désinstallée.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Recharge l'extension.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Vérifie les mises à jour de cette extension.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Établit une connexion d'un script de contenu au processus d'extension principal ou d'une extension à une extension différente.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Connecte l'extension à une application native sur l'ordinateur de l'utilisateur.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Envoie un seul message aux écouteurs d'événement dans votre extension ou une extension différente. Similaire à  {{WebExtAPIRef('runtime.connect')}} mais n'envoie qu'un seul message, avec une réponse facultative.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Envoie un seul message d'une extension à une application native.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Renvoie des informations sur la plate-forme actuelle.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Renvoie des informations sur le navigateur dans lequel cette extension est installée.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Renvoie un DirectoryEntry pour le répertoire du package.

## Evénements

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Lancé lorsqu'un premier profil a cette extension installée. Cet événement n'est pas déclenché lorsqu'un profil de navigation privée est démarré.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Lancé lorsque l'extension est installée pour la première fois, lorsque l'extension est mise à jour vers une nouvelle version et lorsque le navigateur est mis à jour vers une nouvelle version.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Envoyé sur la page de l'événement juste avant le déchargement de l'extension. Cela donne à l'extension l'opportunité de faire un peu de nettoyage.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Envoyé après {{WebExtAPIRef("runtime.onSuspend")}} pour indiquer que l'extension ne sera pas déchargée après tout.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Lancé lorsqu'une mise à jour est disponible, mais n'est pas installé immédiatement car l'extension est en cours d'exécution.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Lancé lorsqu'une mise à jour pour le navigateur est disponible, mais n'est pas installée immédiatement car un redémarrage du navigateur est requis.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Lancé lorsqu'une connexion est établie avec un processus d'extension ou un script de contenu.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Lancé lorsqu'une connexion est établie avec une autre extension.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Lancé lorsqu'un message est envoyé par un processus d'extension ou un script de contenu.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Lancé lorsqu'un message est envoyé depuis un autre poste. Ne peut pas être utilisé dans un script de contenu.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Lancé lorsque le périphérique doit être redémarré.

## Compatibilité du navigateur

{{Compat("webextensions.api.runtime")}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.runtime`](https://developer.chrome.com/extensions/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.
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
