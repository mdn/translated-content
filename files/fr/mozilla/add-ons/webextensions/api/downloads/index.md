---
title: downloads
slug: Mozilla/Add-ons/WebExtensions/API/downloads
---

{{AddonSidebar}}

Permet aux extensions d'interagir avec le gestionnaire de téléchargement du navigateur. Vous pouvez utiliser ce module API pour télécharger des fichiers, annuler, suspendre, reprendre des téléchargements et afficher les fichiers téléchargés dans le gestionnaire de fichiers.

Pour utiliser cette API, vous devez disposer de l' [API permission](/fr/Add-ons/WebExtensions/manifest.json/permissions#API_permissions) "downloads" spécifiée dans votre fichier [manifest.json](/fr/Add-ons/WebExtensions/manifest.json).

## Types

- {{WebExtAPIRef("downloads.FilenameConflictAction")}}
  - : Définit les options pour ce qu'il faut faire si le nom d'un fichier téléchargé est en conflit avec un fichier existant.
- {{WebExtAPIRef("downloads.InterruptReason")}}
  - : Définit un ensemble de raisons possibles pour lesquelles un téléchargement a été interrompu.
- {{WebExtAPIRef("downloads.DangerType")}}
  - : Définit un ensemble d'avertissements communs des dangers possibles associés aux fichiers téléchargeables.
- {{WebExtAPIRef("downloads.State")}}
  - : Définit différents états dans lesquels un téléchargement en cours peut être.
- {{WebExtAPIRef("downloads.DownloadItem")}}
  - : Représente un fichier téléchargé.
- {{WebExtAPIRef("downloads.StringDelta")}}
  - : Représente la différence entre deux chaînes.
- {{WebExtAPIRef("downloads.DoubleDelta")}}
  - : Représente la différence entre deux doubles.
- {{WebExtAPIRef("downloads.BooleanDelta")}}
  - : Représente la différence entre deux booléens.
- {{WebExtAPIRef("downloads.DownloadTime")}}
  - : Représente le temps nécessaire au téléchargement pour terminer.
- {{WebExtAPIRef("downloads.DownloadQuery")}}
  - : Définit un ensemble de paramètres pouvant être utilisés pour rechercher dans le gestionnaire de téléchargements un ensemble de téléchargements spécifique.

## Fonctions

- {{WebExtAPIRef("downloads.download()")}}
  - : Télécharge un fichier, compte tenu de son URL et d'autres préférences optionnelles.
- {{WebExtAPIRef("downloads.search()")}}
  - : Interroge le {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} disponible dans le gestionnaire de téléchargements du navigateur et renvoie ceux qui correspondent aux critères de recherche spécifiés.
- {{WebExtAPIRef("downloads.pause()")}}
  - : Suspend un téléchargement.
- {{WebExtAPIRef("downloads.resume()")}}
  - : Reprend un téléchargement suspendu.
- {{WebExtAPIRef("downloads.cancel()")}}
  - : Annule un téléchargement.
- {{WebExtAPIRef("downloads.getFileIcon()")}}
  - : Récupère une icône pour le téléchargement spécifié.
- {{WebExtAPIRef("downloads.open()")}}
  - : Ouvre le fichier téléchargé avec son application associée.
- {{WebExtAPIRef("downloads.show()")}}
  - : Ouvre l'application du gestionnaire de fichiers de la plateforme pour afficher le fichier téléchargé dans son dossier conteneur.
- {{WebExtAPIRef("downloads.showDefaultFolder()")}}
  - : Ouvre l'application du gestionnaire de fichiers de la plateforme pour afficher le dossier de téléchargements par défaut.
- {{WebExtAPIRef("downloads.erase()")}}
  - : Efface la correspondance {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} de l'historique de téléchargement du navigateur, sans supprimer les fichiers téléchargés du disque.
- {{WebExtAPIRef("downloads.removeFile()")}}
  - : Supprime un fichier téléchargé du disque, mais pas de l'historique de téléchargement du navigateur.
- {{WebExtAPIRef("downloads.acceptDanger()")}}
  - : Invite l'utilisateur à accepter ou annuler un téléchargement dangereux.
- {{WebExtAPIRef("downloads.drag()")}}
  - : Lance le glissement du fichier téléchargé vers une autre application.
- {{WebExtAPIRef("downloads.setShelfEnabled()")}}
  - : Active ou désactive l'étagère grise en bas de chaque fenêtre associée au profil de navigateur actuel. L'étagère sera désactivée si au moins une extension l'a désactivée.

## Evénements

- {{WebExtAPIRef("downloads.onCreated")}}
  - : Se déclenche avec l'objet {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} lorsqu'un téléchargement commence.
- {{WebExtAPIRef("downloads.onErased")}}
  - : Se déclenche avec `downloadId` lorsqu'un téléchargement est effacé de l'historique.
- {{WebExtAPIRef("downloads.onChanged")}}
  - : Lorsque l'une des propriétés de {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} sauf les changements `bytesReceived`, cet événement se déclenche avec le `downloadId` et un objet contenant les propriétés qui ont changé.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples("h2")}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
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
