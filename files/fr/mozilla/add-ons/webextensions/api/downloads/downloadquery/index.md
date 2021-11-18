---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
tags:
  - API
  - Add-ons
  - DownloadQuery
  - Extensions
  - Non-standard
  - Reference
  - Type
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
---
{{AddonSidebar()}}

Le type `DownloadQuery` de l'API {{WebExtAPIRef("downloads")}} définit un ensemble de paramètres pouvant être utilisés pour rechercher dans le gestionnaire de téléchargements un ensemble spécifique de téléchargements.

Ce type est utilisé par exemple dans {{WebExtAPIRef("downloads.search()")}} et {{WebExtAPIRef("downloads.erase()")}}, en tant qu'objet de requête pour filtrer l'ensemble de {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} pour retourner ou effacer.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes :

- `query`{{optional_inline}}
  - : Un `tableau` de`chaines`. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} dont le `nom de fichier` ou l'`URL` contient toutes les chaînes données. Vous pouvez également inclure des termes commençant par un titet (-) — ces termes **ne doivent pas** figurer dans le `nom du fichier` ou l'`url` de l'élément à inclure.
- `startedBefore`{{optional_inline}}
  - : Un {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} qui a démarré avant l'heure indiquée.
- `startedAfter`{{optional_inline}}
  - : Un {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} qui a démarré après l'heure indiquée.
- `endedBefore`{{optional_inline}}
  - : Un {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} qui s'est terminé avant l'heure indiquée.
- `endedAfter`{{optional_inline}}
  - : Un {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} qui s'est terminé après l'heure indiquée.
- `totalBytesGreater`{{optional_inline}}
  - : Un `number` représentant un nombre d'octets. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} dont le  `totalBytes` est supérieur au nombre donné.
- `totalBytesLess`{{optional_inline}}
  - : Un `number` représentant un nombre d'octets. Inclure seulement  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} dont le `totalBytes` est inférieur au nombre donné.
- `filenameRegex`{{optional_inline}}
  - : Un `string` représentant une expression régulière. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} dont le `nom du fichier` correspond à l'expression régulière donnée..
- `urlRegex`{{optional_inline}}
  - : Un `string` représentant une expression régulière. Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} dont la valeur d'`url` correspond à l'expression régulière donnée..
- `limit`{{optional_inline}}
  - : Un `integer` représentant un nombre de résultats. Incluez uniquement le nombre spécifié de {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}}.
- `orderBy`{{optional_inline}}
  - : Un `tableau`de `chaînes` représentant les propriétés  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} les résultats de la recherche doivent être tirés par exemple, en incluant `startTime` puis `totalBytes` dans le tableau trierait {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} par leur heure de début, puis le total des octets — dans l'ordre croissant. Pour spécifier le tri par une propriété dans l'ordre décroissant, préfixez-le avec un trait d'union, par exemple `-startTime`.
- `id`{{optional_inline}}
  - : Un `integer` représentant l'ID du {{WebExtAPIRef("downloads.DownloadItem")}} que vous souhaitez interroger.
- `url`{{optional_inline}}
  - : Un `string` représentant l'URL absolue à partir de laquelle le téléchargement a été initié, avant toute redirection.
- `filename`{{optional_inline}}
  - : Un string représentant le chemin local absolu du fichier téléchargé que vous souhaitez interroger.
- `danger`{{optional_inline}}
  - : Une chaîne représentant un {{WebExtAPIRef('downloads.DangerType')}} — inclut uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur de `danger` .
- `mime`{{optional_inline}}
  - : Un `string` représentant un type MIME. Incluez uniquement  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur `mime`.
- `startTime`{{optional_inline}}
  - : Un `string` représentant une heure au format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). Incluez seulement  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur  `startTime`.
- `endTime`{{optional_inline}}
  - : Un `string` représentant une heure au format [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). Inclure uniquement sera limité à {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur `endTime`.
- `state`{{optional_inline}}
  - : Un `string` représentant un téléchargement {{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted`, or `complete`). Inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur d' `état`.
- `paused`{{optional_inline}}
  - : Un `boolean` qui indique si un téléchargement est en pause — c'est-à-dire qui a cessé de lire les données de l'hôte, mais qui a conservé la connexion ouverte (`true`), ou non (`false`). inclure uniquement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur de `pause`.
- `error`{{optional_inline}}
  - : Une chaîne représentant un {{WebExtAPIRef('downloads.InterruptReason')}} — une raison pour laquelle un téléchargement a été interrompu. Inclure uniquement  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur d'  `erreur` .
- `bytesReceived`{{optional_inline}}
  - : Un `number` représentant le nombre d'octets reçus jusqu'ici de l'hôte, sans tenir compte de la compression de fichier. Inclure seulement  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur `bytesReceived`.
- `totalBytes`{{optional_inline}}
  - : Un `number` représentant le nombre total d'octets dans le fichier téléchargé, sans tenir compte de la compression de fichier. Inclure seulement  {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur  `totalBytes`.
- `fileSize`{{optional_inline}}
  - : `number`. Nombre d'octets dans le fichier entier après la décompression, ou -1 si inconnu. Un `nombre` représentant le nombre total d'octets dans le fichier après la décompression. Inclure seulement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur `fileSize`.
- `exists`{{optional_inline}}
  - : Un `boolean` si un fichier téléchargé existe toujours (`true`) ou non (`false`). Inclure seulement {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} avec cette valeur `existe`.

## Compatibilité du navigateur

{{Compat("webextensions.api.downloads.DownloadQuery")}}

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
