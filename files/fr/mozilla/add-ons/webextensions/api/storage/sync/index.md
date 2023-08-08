---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
---

{{AddonSidebar()}}

Représente la zone de stockage `sync` (pour la synchronisation). Les éléments stockés dans le stockage `sync` sont synchronisés par le navigateur et disponibles sur toutes les instances de ce navigateur auxquelles l'utilisatrice ou l'utilisateur est connecté (par exemple via la synchronisation Firefox ou un compte Google), sur différents appareils.

Pour Firefox, il faut au préalable avoir coché « Modules complémentaires » dans les options « Réglages de Sync » dans « `about:preferences`.

Notez que l'implémentation de `storage.sync` dans Firefox repose sur l'ID de l'extension. Si vous utilisez `storage.sync`, vous devez définir un ID pour votre extension à l'aide de la clé de manifeste [`browser_specific_settings`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings).

Le principal cas d'utilisation de cette API est de stocker les préférences concernant votre extension et de permettre à l'utilisateur de les synchroniser dans différents profils.

## Quotas de stockage pour les données synchronisées

Le navigateur impose des limites sur la quantité de données que chaque extension peut stocker dans le stockage sync :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Description</th>
      <th scope="col">Valeur en octets</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Taille de stockage maximale</td>
      <td>
        La quantité totale maximale que chaque extension peut stocker dans la
        zone de stockage sync, telle que mesurée par la conversion en chaîne de
        caractères JSON de chaque valeur avec la longueur de sa clé.
      </td>
      <td>102400</td>
    </tr>
    <tr>
      <td>Taille maximale d'un élément</td>
      <td>
        La taille maximale pour un élément que l'extension peut stocker dans la
        zone sync, telle que mesurée par la conversion en chaîne de caractères
        JSON de la valeur de l'élément avec la longueur de sa clé.
      </td>
      <td>8192</td>
    </tr>
    <tr>
      <td>Nombre maximal d'éléments</td>
      <td>
        Le nombre maximal d'éléments que chaque extension peut stocker dans
        l'espace de stockage sync.
      </td>
      <td><p>512</p></td>
    </tr>
  </tbody>
</table>

Si une extension tente de stocker des éléments qui dépassent ces limites, l'appel à [`storage.sync.set()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set) sera rejeté avec une erreur. Une extension peut utiliser [`storage.sync.getBytesInUse()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse) afin de connaître le quota d'espace déjà utilisé.

## Méthodes

L'objet `sync` implémente les méthodes définies sur le type {{WebExtAPIRef("storage.StorageArea")}} :

- [`storage.StorageArea.get()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get)
  - : Récupère un ou plusieurs éléments de la zone de stockage.
- [`storage.StorageArea.getBytesInUse()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse)
  - : Récupère la quantité d'espace de stockage utilisée (exprimée en octets) utilisée pou un ou plusieurs éléments entreposés dans la zone de stockage.
- [`storage.StorageArea.set()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set)
  - : Stocke un ou plusieurs éléments dans la zone de stockage. Si l'élément existe déjà, sa valeur est mise à jour.
- [`storage.StorageArea.remove()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove)
  - : Supprime un ou plusieurs éléments de la zone de stockage.
- [`storage.StorageArea.clear()`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear)
  - : Supprime tous les éléments de la zone de stockage.

## Compatibilité des navigateurs

{{Compat}}

**Remerciements :**

Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.

Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.

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
