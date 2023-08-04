---
title: downloads.download()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/download
---

{{AddonSidebar()}}

La fonction **`download()`** de l'API {{WebExtAPIRef("downloads")}} télécharge le fichier, compte tenu de son URL et d'autres préférences optionnelles.

- Si l'`url` spécifiée utilise le protocole HTTP ou HTTPS, la requête inclura tous les cookies actuellement définis pour son nom d'hôte.
- Si à la fois le `nom de fichier` et `saveAs` sont spécifiés, la boîte de dialogue Enregistrer sous s'affiche, pré-remplie avec le `nom du fichier` spécifié.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var downloading = browser.downloads.download(
  options, // object
);
```

### Paramètres

- `options`

  - : Un `object` spécifiant le fichier que vous souhaitez télécharger et toutes les autres préférences que vous souhaitez définir concernant le téléchargement. Il peut contenir les propriétés suivantes :

    - `allowHttpErrors`{{optional_inline}}

      - : Un tag `booléen` qui permet de poursuivre les téléchargements même s'ils rencontrent des erreurs HTTP. L'utilisation de ce drapeau, par exemple, permet le téléchargement des pages d'erreur du serveur. La valeur par défaut est `false`. Lorsqu'il est défini à :

        - `false`, le téléchargement est annulé lorsqu'il rencontre une erreur HTTP.
        - `true`, le téléchargement se poursuit lorsqu'une erreur HTTP est rencontrée et que l'erreur du serveur HTTP n'est pas signalée. Toutefois, si le téléchargement échoue en raison d'une erreur liée au fichier, au réseau, à l'utilisateur ou autre, cette erreur est signalée.

    - `body`{{optional_inline}}
      - : Un `string` représentant le corps du message de la requête.
    - `conflictAction`{{optional_inline}}
      - : Une chaîne représentant l'action que vous voulez effectuer s'il y a un conflit de nom de fichier, tel que défini dans le {{WebExtAPIRef('downloads.FilenameConflictAction')}} type (par défaut "uniquify" quand il n'est pas spécifié).
    - `filename`{{optional_inline}}
      - : Un `string` eprésentant un chemin d'accès au fichier par rapport au répertoire de téléchargement par défaut, qui indique l'emplacement où vous souhaitez enregistrer le fichier et le nom de fichier que vous souhaitez utiliser. Les chemins absolus, les chemins vides et les chemins contenant des références arrières (`../`) provoqueront une erreur. Si elle est omise, cette valeur sera par défaut le nom de fichier déjà donné au fichier de téléchargement, et un emplacement immédiatement dans le répertoire de téléchargement.
    - `headers`{{optional_inline}}
      - : Si l'URL utilise les protocoles HTTP ou HTTPS, un `array` d'`objects` représentant des en-têtes HTTP supplémentaires à envoyer avec la requête. Chaque en-tête est représenté sous la forme d'un objet dictionnaire contenant le `name` des clés et soit la `value`, soit la valeur `binaryValue`. Les en-têtes interdits par `XMLHttpRequest` et `fetch` ne peuvent pas être spécifiés, cependant, Firefox 70 et les versions ultérieures permettent d'utiliser l'en-tête `Referer`. Tenter d'utiliser un en-tête interdit provoque une erreur.
    - `incognito`{{optional_inline}}
      - : Un `boolean`: s'il est présent et défini sur true, associez ce téléchargement à une session de navigation privée. Cela signifie qu'il n'apparaîtra dans le gestionnaire de téléchargement que pour les fenêtres privées actuellement ouvertes.
    - `method`{{optional_inline}}
      - : Un `string` représentant la méthode HTTP à utiliser si l'`url` utilise le protocole HTTP\[S]. Cela peut être "GET" ou "POST".
    - `saveAs`{{optional_inline}}

      - : Un `boolean` qui spécifie s'il faut fournir une boîte de dialogue de sélection de fichier pour permettre à l'utilisateur de sélectionner un nom de fichier (`true`), ou non (`false`).

        Si cette option est omise, le navigateur affichera le sélecteur de fichier ou non en fonction de la préférence générale de l'utilisateur pour ce comportement (dans Firefox cette préférence est intitulée "Toujours vous demander où enregistrer les fichiers" dans about:preferences, ou `browser.download.useDownloadDir` dans about:config).

        > **Note :** Firefox pour Android provoque une erreur si `saveAs` est à `true`. Le paramètre est ignoré lorsque `saveAs` est `false` ou non inclus.

    - `url`
      - : Un `string` représentant l'URL à télécharger.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise). Si le téléchargement a démarré avec succès, la promesse sera remplie avec l'`id` de la nouvelle {{WebExtAPIRef("downloads.DownloadItem")}}. Sinon, la promesse sera rejetée avec un message d'erreur venant de {{WebExtAPIRef("downloads.InterruptReason")}}.

Si vous utilisez [URL.createObjectURL()](/fr/docs/Web/API/URL/createObjectURL) pour télécharger des données créées en JavaScript et que vous voulez révoquer l'URL de l'objet (avec [revokeObjectURL](/fr/docs/Web/API/URL/revokeObjectURL)) plus tard (comme il est fortement recommandé), vous devez le faire après le téléchargement. Pour ce faire, écoutez l'événement [downloads.onChanged](/fr/Add-ons/WebExtensions/API/downloads/onChanged).

## Compatibilité des navigateurs

{{Compat}}

## Examples

Le fragment suivant tente de télécharger un exemple de fichier, en spécifiant également un nom de fichier et un emplacement pour l'enregistrer, ainsi que l'option `uniquify` `conflictAction`.

```js
function onStartedDownload(id) {
  console.log(`Started downloading: ${id}`);
}

function onFailed(error) {
  console.log(`Download failed: ${error}`);
}

var downloadUrl = "https://example.org/image.png";

var downloading = browser.downloads.download({
  url: downloadUrl,
  filename: "my-image-again.png",
  conflictAction: "uniquify",
});

downloading.then(onStartedDownload, onFailed);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.downloads`](https://developer.chrome.com/extensions/downloads).

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
