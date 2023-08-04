---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
---

{{AddonSidebar()}}

Représente la zone de stockage `local`. Les éléments stockés `localement` sont locaux sur la machine sur laquelle l'extension a été installée.

Le navigateur peut limiter la quantité de données qu'une extension peut stocker dans la zone de stockage locale :

- Chrome limite l'extension à 5 Mo de données à l'aide de cette API à moins qu'elle ne dispose de [permission "unlimitedStorage"](/fr/Add-ons/WebExtensions/manifest.json/permissions#Unlimited_storage).
- Firefox vous permet de demander la permission "unlimitedStorage" à partir de la version 56. Il ne limite pas encore la quantité de données que votre extension peut stocker, mais commencera à le faire dans une future version : c'est donc une bonne idée de demander la permission "unlimitedStorage" maintenant, si vous avez l'intention de stocker une grande quantité de données.

Lorsque l'extension est désinstallée, son stockage local associé est effacé.

Toujours dans Firefox, vous pouvez empêcher le navigateur d'effacer le stockage local lors de la désinstallation en visitant "about:config" et en définissant les deux préférences de navigateur suivantes sur `true`: "keepUuidOnUninstall" et "keepStorageOnUninstall". Cette fonctionnalité est fournie pour aider les développeurs à tester leurs extensions. Les extensions elles-mêmes ne sont pas en mesure de modifier ces préférences.

Bien que cette API soit similaire à {{domxref("Window.localStorage")}} il est recommandé de ne pas utiliser `Window.localStorage` dans le code d'extension. Firefox effacera les données stockées par les extensions à l'aide de l'API localStorage dans divers scénarios où les utilisateurs effacent leur historique de navigation et leurs données pour des raisons de confidentialité, tandis que les données enregistrées avec l'API storage.local seront correctement conservées dans ces scénarios.

## Méthodes

L'objet `local` local implémente les méthodes définies sur le type {{WebExtAPIRef("storage.StorageArea")}} :

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Récupère un ou plusieurs éléments de la zone de stockage.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Obtient la quantité d'espace de stockage (en octets) utilisée pour stocker un ou plusieurs éléments dans la zone de stockage.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Stocke un ou plusieurs éléments dans la zone de stockage. Si l'élément existe déjà, sa valeur sera mise à jour. Lorsque vous définissez une valeur, l'événement {{WebExtAPIRef("storage.onChanged")}} se déclenche.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Supprime un ou plusieurs éléments de la zone de stockage..
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Supprime tous les éléments de la zone de stockage.

## Compatibilité des navigateurs

{{Compat}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
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
