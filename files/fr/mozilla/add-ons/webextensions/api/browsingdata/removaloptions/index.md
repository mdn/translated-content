---
title: browsingData.RemovalOptions
slug: Mozilla/Add-ons/WebExtensions/API/browsingData/RemovalOptions
---

{{AddonSidebar()}}

Le type **`browsingData.RemovalOptions`** contient des options permettant de contrôler certains aspects de la suppression des données de navigation.

## Type

Les valeurs de ce type sont des objets. Ils contiennent les propriétés suivantes:

- `hostnames` {{optional_inline}}

  - : `Array` of `string`. Cette propriété s'applique uniquement aux cookies et aux éléments de stockage locaux. Ne supprimez que les cookies et les éléments de stockage locaux associés à ces noms d'hôte.

    Vous devez indiquer ici un nom d'hôte, sans protocole (par exemple : `google.com` et non `https://google.com`). Vous pouvez utiliser l'interface [`URL`](/fr/docs/Web/API/URL) pour analyser une URL brute et récupérer uniquement le nom d'hôte. Les sous-domaines d'un nom d'hôte donné ne seront pas supprimés: vous devez explicitement lister les sous-domaines.

- `originTypes` {{optional_inline}}

  - : `object`. Permet de contrôler si les données doivent être supprimées uniquement des pages Web normales ou des applications et extensions Web hébergées. Si cette option est omise, seules les données des pages Web normales ("`unprotectedWeb`") sont supprimées. Avant de supprimer des données d'applications ou d'extensions Web, veillez à ce que ce soit vraiment ce que l'utilisateur souhaite.

    Cet objet peut contenir l'une des propriétés suivantes :

    - `unprotectedWeb` {{optional_inline}}
      - : `boolean`. Si présent et `true`, supprime les données de la pages Web normales.
    - `protectedWeb` {{optional_inline}}
      - : `boolean`. Si présent et `true`, supprime les données de site Web qui ont été installés en tant qu'applications hébergées.
    - `extension` {{optional_inline}}
      - : `boolean`. Si présent et `true`, supprime les données d'extensions.

- `since` {{optional_inline}}
  - : `number`. Jusqu'à quand remontent les données, données en [millisecondes depuis l'époque UNIX](https://en.wikipedia.org/wiki/Unix_time). Notez que lorsque vous supprimez le cache du navigateur, le cache entier est toujours supprimé et cette option est ignorée. Si la propriété `since` est omise, la valeur par défaut est 0, ce qui signifie "pour toujours".

## Compatibilité des navigateurs

{{Compat}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.browsingData`](https://developer.chrome.com/extensions/browsingData).

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
