---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
tags:
  - API
  - Add-ons
  - DownloadItem
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
  - downloads
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
---
{{AddonSidebar()}}

Le type `DownloadItem` de l'API {{WebExtAPIRef("downloads")}} représente un fichier téléchargé.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `byExtensionId`{{optional_inline}}
  - : Un `string` représentant l'ID de l'extension qui a déclenché le téléchargement (si elle a été déclenchée par une extension). Cela ne change pas une fois réglé. Si le téléchargement n'a pas été déclenché par une extension, ceci n'est pas défini.
- `byExtensionName`{{optional_inline}}
  - : Un `string` représentant le nom de l'extension qui a déclenché le téléchargement (si elle a été déclenchée par une extension). Cela peut changer si l'extension change de nom ou si l'utilisateur change ses paramètres régionaux. Si le téléchargement n'a pas été déclenché par une extension, ceci n'est pas défini.
- `bytesReceived`
  - : Un `number` représentant le nombre d'octets reçus jusqu'ici de l'hôte pendant le téléchargement ; cela ne prend pas en compte la compression de fichier.
- `canResume`
  - : Un `boolean` indiquant si un téléchargement actuellement interrompu (par exemple en pause) peut être repris à partir du point où il a été interrompu (`true`), ou non (`false`).
- `danger`
  - : Une chaîne indiquant si ce téléchargement est considéré comme sûr ou suspect. Ses valeurs possibles sont définies dans le type  {{WebExtAPIRef('downloads.DangerType')}}.
- `endTime`{{optional_inline}}
  - : Un `string` (au format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)) représentant le nombre de millisecondes entre l'époque UNIX et la fin de ce téléchargement. Ceci n'est pas défini si le téléchargement n'est pas encore terminé.
- `error`{{optional_inline}}
  - : Une chaîne indiquant pourquoi un téléchargement a été interrompu. Les valeurs possibles sont définies dans le type {{WebExtAPIRef('downloads.InterruptReason')}}. Ceci n'est pas défini si une erreur ne s'est pas produite.
- `estimatedEndTime`{{optional_inline}}
  - : Un `string` (au format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)) représentant le nombre estimé de millisecondes entre l'époque UNIX et la date à laquelle ce téléchargement est estimé terminé. Ceci est indéfini s'il n'est pas connu (en particulier, il n'est pas défini dans le  `DownloadItem` qui est passé dans {{WebExtAPIRef("downloads.onCreated")}}).
- `exists`
  - : Un `boolean` indiquant si un fichier téléchargé existe toujours (`true`) ou non (`false`). Ces informations peuvent être périmées, car les navigateurs ne surveillent pas automatiquement la suppression des fichiers. Pour vérifier si un fichier existe, appelez la méthode {{WebExtAPIRef('downloads.search()')}}, en filtrant le fichier question.
- `filename`
  - : Un `string` représentant le chemin local absolu du fichier.
- `fileSize`
  - : Un `number` indiquant le nombre total d'octets dans le fichier entier, après décompression. La valeur -1 signifie que la taille totale du fichier est inconnue.
- `id`
  - : Un `integer` représentant un identifiant unique pour le fichier téléchargé qui est persistant entre les sessions du navigateur.
- `incognito`
  - : Un `boolean` qui indique si le téléchargement est enregistré dans l'historique du navigateur (`false`), ou non (`true`).
- `mime`
  - : Un `string` représentant le type MIME du fichier téléchargé.
- `paused`
  - : Un `boolean` indiquant si le téléchargement est en pause, c'est-à-dire si le téléchargement a cessé de lire les données de l'hôte mais a maintenu la connexion ouverte. Si c'est le cas, la valeur est `true`, sinon `false`.
- `referrer`
  - : Un `string` représentant le référent du fichier téléchargé.
- `startTime`
  - : Un `string` (au format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)) représentant le nombre de millisecondes entre l'époque UNIX et le début du téléchargement.
- `state`
  - : Un `string` Indique si le téléchargement progresse, est interrompu ou terminé. Les valeurs possibles sont définies dans le type {{WebExtAPIRef('downloads.State')}}.
- `totalBytes`
  - : Un `number` indiquant le nombre total d'octets dans le fichier en cours de téléchargement. Cela ne prend pas en compte la compression de fichier. Une valeur de -1 signifie que le nombre total d'octets est inconnu..
- `url`
  - : Un `string` représentant l'URL absolue à partir de laquelle le fichier a été téléchargé.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.DownloadItem")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).
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
