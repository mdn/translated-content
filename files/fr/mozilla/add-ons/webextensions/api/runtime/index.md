---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: 9791add3508e087982097f25fbd367c21bcb8305
---

Ce module fournit des informations sur votre extension et l'environnement dans lequel elle fonctionne.

Il fournit également des API de messagerie vous permettant de&nbsp;:

- Communiquer entre les différentes parties de votre extension. Pour des conseils sur le choix entre les options de messagerie, voir [Choisir entre les messages ponctuels et la messagerie basée sur les connexions](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Communiquer avec d'autres extensions.
- Communiquer avec des applications natives.

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
  - : Contient des informations sur la plateforme sur laquelle le navigateur s'exécute.
- {{WebExtAPIRef("runtime.PlatformNaclArch")}} {{Deprecated_Inline}}
  - : Valeur d'énumération obsolète représentant l'architecture Google Native Client. Envisagez de migrer vers `PlatformArch`, qui est pris en charge par Safari et Mozilla, représente l'architecture réelle du processeur et fournit des informations correctes sur le nombre de bits sur ARM.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Résultat d'un appel à {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : Raison pour laquelle l'évènement {{WebExtAPIRef("runtime.onInstalled")}} est déclenché.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : Catégorie de l'avertissement qui a déclenché l'évènement {{WebExtAPIRef("runtime.onPerformanceWarning")}}.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Gravité de l'avertissement qui a déclenché l'évènement {{WebExtAPIRef("runtime.onPerformanceWarning")}}.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Raison pour laquelle l'évènement {{WebExtAPIRef("runtime.onRestartRequired")}} est déclenché.

## Propriétés

- {{WebExtAPIRef("runtime.lastError")}}
  - : Cette valeur est définie lorsqu'une fonction asynchrone a une condition d'erreur qu'elle doit signaler à son appelant.
- {{WebExtAPIRef("runtime.id")}}
  - : L'ID de l'extension.

## Fonctions

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Récupère l'objet {{DOMxRef("Window")}} correspondant à la page d'arrière-plan s'exécutant au sein de l'extension actuelle.
- {{WebExtAPIRef("runtime.getDocumentId()")}}
  - : Retourne l'ID du document de n'importe quel élément global de la fenêtre ou de cadre.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Ouvre la [page d'options](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) de votre extension.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Obtient des détails sur les contextes associés à l'extension.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Obtient l'identifiant de cadre de n'importe quel élément global de la fenêtre ou de cadre.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Récupère une représentation sous forme d'objet du fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) complet.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : À partir d'un chemin relatif indiqué dans le fichier [manifest.json](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json) vers une ressource incluse dans l'extension, retourne une URL complète.
- {{WebExtAPIRef("runtime.getVersion()")}}
  - : Obtient la chaîne de caractères correspondant à la version de l'extension à partir de la clé [`version`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) du fichier [`manifest.json`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json). La version retournée peut différer de la chaîne de caractères présente dans le fichier, car le navigateur peut l'analyser et la sérialiser.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Définit une URL à visiter lorsque l'extension est désinstallée.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Recharge l'extension.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Vérifie les mises à jour de cette extension.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Établit une connexion d'un script de contenu vers le processus principal de l'extension, ou d'une extension vers une autre extension.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Connecte l'extension à une application native sur l'ordinateur de l'utilisateur·ice.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Envoie un message aux écouteurs d'évènements au sein de votre extension ou d'une autre extension. Semblable à {{WebExtAPIRef('runtime.connect')}}, mais n'envoie qu'un seul message, avec une réponse optionnelle.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Envoie un message depuis une extension vers une application native.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Retourne des informations sur la plateforme actuelle.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Retourne des informations sur le navigateur dans lequel cette extension est installée.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Retourne une instance `DirectoryEntry` correspondant au répertoire du paquet.

## Évènements

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Déclenché lorsque le profil qui a cette extension installée démarre pour la première fois. Cet évènement n'est pas déclenché lorsque un profil de navigation privée est démarré.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Déclenché lorsque l'extension est installée pour la première fois, lorsqu'elle est mise à jour vers une nouvelle version et lorsque le navigateur est mis à jour vers une nouvelle version.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Envoyé à la page d'évènements juste avant que l'extension ne soit déchargée. Cela donne à l'extension l'occasion de faire un peu de nettoyage.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Envoyé après {{WebExtAPIRef("runtime.onSuspend")}} pour indiquer que l'extension n'est finalement pas déchargée.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Déclenché lorsqu'une mise à jour est disponible, mais n'est pas installée immédiatement parce que l'extension est actuellement en cours d'exécution.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{Deprecated_Inline}}
  - : Déclenché lorsqu'une mise à jour du navigateur est disponible, mais n'est pas installée immédiatement parce qu'un redémarrage du navigateur est requis.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Déclenché lorsqu'une connexion est établie avec soit un processus d'extension, soit un script de contenu.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Déclenché lorsqu'une connexion est établie avec une autre extension.
- {{WebExtAPIRef("runtime.onUserScriptConnect")}}
  - : Déclenché lorsqu'une connexion est établie avec un script utilisateur·ice enregistré par l'extension.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Déclenché lorsqu'un message est envoyé depuis soit un processus d'extension, soit un script de contenu.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Déclenché lorsqu'un message est envoyé depuis une autre extension. Ne peut pas être utilisé dans un script de contenu.
- {{WebExtAPIRef("runtime.onUserScriptMessage")}}
  - : Déclenché lorsqu'un message est envoyé depuis un script utilisateur·ice enregistré par l'extension.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Déclenché lorsqu'un problème de performance d'exécution est détecté pour l'extension.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Déclenché lorsque l'appareil doit être redémarré.

{{WebExtExamples("h2")}}

## Compatibilité des navigateurs

{{Compat}}

> [!NOTE]
> Cette API est basée sur l'API Chromium [`chrome.runtime` <sup>(angl.)</sup>](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onConnect). Cette documentation est dérivée de [`runtime.json` <sup>(angl.)</sup>](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) dans le code de Chromium code.

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
